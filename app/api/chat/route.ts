import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const OLLAMA_HOST = process.env.OLLAMA_HOST || 'http://localhost:11434';
const CHAT_MODEL = process.env.CHAT_MODEL || 'llama3.2:latest';
const EMBED_MODEL = process.env.EMBED_MODEL || 'nomic-embed-text';
const TOP_K = 3;
const SIMILARITY_THRESHOLD = 0.25; // Minimum relevance score to proceed

// --- Rate limiting ---
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 10;
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

function checkRateLimit(identifier: string): { allowed: boolean; retryAfter?: number } {
  const now = Date.now();
  const entry = rateLimitMap.get(identifier);
  if (!entry || now > entry.resetTime) {
    rateLimitMap.set(identifier, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return { allowed: true };
  }
  if (entry.count >= RATE_LIMIT_MAX) {
    return { allowed: false, retryAfter: Math.ceil((entry.resetTime - now) / 1000) };
  }
  entry.count += 1;
  return { allowed: true };
}

// --- Index cache ---
let indexCache: Array<{
  id: string;
  text: string;
  source: string;
  sourceUrl?: string;
  embedding: number[];
}> | null = null;
let indexCacheTime = 0;
const INDEX_PATH = path.join(process.cwd(), 'public', 'chatbot', 'index.json');

function getIndex() {
  const stat = fs.statSync(INDEX_PATH);
  if (indexCache && indexCacheTime >= stat.mtimeMs) return indexCache;
  const raw = JSON.parse(fs.readFileSync(INDEX_PATH, 'utf-8'));
  indexCache = raw;
  indexCacheTime = stat.mtimeMs;
  return indexCache!;
}

function cosineSimilarity(a: number[], b: number[]): number {
  let dot = 0, magA = 0, magB = 0;
  for (let i = 0; i < a.length; i++) {
    dot += a[i] * b[i];
    magA += a[i] * a[i];
    magB += b[i] * b[i];
  }
  return dot / (Math.sqrt(magA) * Math.sqrt(magB));
}

async function ollamaEmbed(prompt: string): Promise<number[]> {
  const res = await fetch(`${OLLAMA_HOST}/api/embeddings`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ model: EMBED_MODEL, prompt }),
  });
  if (!res.ok) throw new Error(`Ollama embed failed: ${res.status}`);
  return (await res.json()).embedding;
}

async function ollamaChat(messages: ChatMessage[]): Promise<string> {
  const res = await fetch(`${OLLAMA_HOST}/api/chat`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ model: CHAT_MODEL, messages, stream: false }),
  });
  if (!res.ok) throw new Error(`Ollama chat failed: ${res.status}`);
  return (await res.json()).message.content;
}

interface ChatMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

function getClientIP(request: NextRequest): string {
  return (
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    request.headers.get('x-real-ip') ||
    'unknown'
  );
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const clientIP = getClientIP(request);
    const limit = checkRateLimit(clientIP);
    if (!limit.allowed) {
      return NextResponse.json(
        { error: `Too many requests. Try again in ${limit.retryAfter}s.` },
        { status: 429, headers: { 'Retry-After': String(limit.retryAfter) } }
      );
    }

    // Check index
    if (!fs.existsSync(INDEX_PATH)) {
      return NextResponse.json(
        { error: 'Chatbot index not found. Run `python3 scripts/build-chatbot-index.py` first.' },
        { status: 503 }
      );
    }

    const body = await request.json();
    const { message, history = [], currentPage } = body;
    if (!message || typeof message !== 'string') {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }

    // Validate history
    const validHistory: ChatMessage[] = Array.isArray(history)
      ? history.filter(
          (m: any) =>
            m &&
            typeof m.content === 'string' &&
            (m.role === 'user' || m.role === 'assistant')
        )
      : [];

    // Load index
    const index = getIndex();

    // Determine current page context for boosting
    let pageContextNote = '';
    let pageBoostSources: string[] = [];
    if (currentPage && typeof currentPage === 'string') {
      const page = currentPage;
      if (page.startsWith('/blog/')) {
        const slug = page.replace('/blog/', '').replace(/\/$/, '');
        pageBoostSources = [`blog/${slug}`];
        pageContextNote = `The user is currently reading the article "${slug.replace(/-/g, ' ')}".`;
      } else if (page.startsWith('/projects/')) {
        const slug = page.replace('/projects/', '').replace(/\/$/, '');
        pageBoostSources = [`project/${slug}`];
        pageContextNote = `The user is currently viewing the project "${slug.replace(/-/g, ' ')}".`;
      } else if (page === '/about') {
        pageBoostSources = ['about'];
        pageContextNote = 'The user is currently on the about page.';
      } else if (page === '/') {
        pageContextNote = 'The user is currently on the homepage.';
      }
    }

    // Embed query
    const queryEmbedding = await ollamaEmbed(message);

    // Retrieve top K with page boosting
    const scored = index.map((entry) => {
      let score = cosineSimilarity(queryEmbedding, entry.embedding);
      if (pageBoostSources.some((s) => entry.source.startsWith(s))) {
        score = Math.min(score + 0.15, 0.999);
      }
      return { ...entry, score };
    });
    scored.sort((a, b) => b.score - a.score);

    // Gate 2: If even the best match is too weak, the query is off-topic
    if (scored[0].score < SIMILARITY_THRESHOLD) {
      return NextResponse.json({
        reply: "I can only answer questions about Billie Heidelberg Jr.'s portfolio, projects, and experience. How can I help you learn more about his work?",
        sources: [],
      });
    }

    const context = scored.slice(0, TOP_K);

    // Build prompt
    const contextText = context
      .map((c, i) => `[Source ${i + 1} from ${c.source}]:\n${c.text}`)
      .join('\n\n');

    const systemPrompt = `You are Billie Heidelberg Jr.'s portfolio assistant chatbot. Billie is a full-stack developer who uses he/him pronouns.

${pageContextNote}

CRITICAL RULES:
1. Answer ONLY using the context chunks provided below. Do NOT use your general knowledge.
2. Do NOT invent technologies, features, or details that are not explicitly stated in the context.
3. If the context doesn't contain specific information, say "I don't have that detail on my site" instead of guessing.
4. Billie uses he/him pronouns. You must always refer to Billie using he/him pronouns.
5. Be conversational and concise. No generic filler.

Your ONLY job is to answer questions about Billie's portfolio, projects, experience, skills, and articles. You have ZERO knowledge of anything else.

If a question is NOT about Billie's work, respond ONLY with: "I can only answer questions about Billie's portfolio, projects, and experience. How can I help you learn more about his work?"

Context:
${contextText}`;

    // Build messages: system + history (last 6) + current user
    const recentHistory = validHistory.slice(-6);
    const messages: ChatMessage[] = [
      { role: 'system', content: systemPrompt },
      ...recentHistory,
      { role: 'user', content: message },
    ];

    const reply = await ollamaChat(messages);

    return NextResponse.json({
      reply,
      sources: context.map((c) => ({
        source: c.source,
        url: c.sourceUrl,
        score: Math.round(c.score * 1000) / 1000,
      })),
    });
  } catch (err: any) {
    console.error('Chat API error:', err);

    if (err.message?.includes('ECONNREFUSED') || err.message?.includes('fetch failed')) {
      return NextResponse.json(
        { error: 'Ollama is not running. Start it with `ollama serve`.' },
        { status: 503 }
      );
    }

    return NextResponse.json(
      { error: err.message || 'Something went wrong. Try again in a moment.' },
      { status: 500 }
    );
  }
}
