---
title: "Build a Portfolio Chatbot with Local AI on a Cheap VPS"
date: "2026-07-03"
category: "Development"
tags: ["AI", "Ollama", "RAG", "Next.js", "Local LLM", "Tutorial", "DigitalOcean"]
excerpt: "A portfolio chatbot that knows your work, your writing, your projects — running entirely on a cheap VPS with Ollama. No API keys. No usage limits. $6 a month."
author: "Billie Heidelberg Jr."
coverImage: "/blogs/portfolio-chatbot-cover.svg"
lastUpdated: "2026-07-03"
featured: true
---

Most developers call an API and call it AI. Here's how to build something better: a portfolio chatbot that knows your work history, your articles, your projects — and runs entirely on a cheap VPS with no external AI dependencies.

## What We're Actually Building

When people hear "train a chatbot on my data" they picture fine-tuning — feeding your articles into a model and retraining its weights. That's expensive, slow, and overkill for a portfolio bot.

What we're building instead is **RAG**: Retrieval-Augmented Generation. You take your content, split it into chunks, generate embeddings for each chunk, and store them. When someone asks a question, you find the most relevant chunks and hand them to the model as context. The model answers using your actual words.

The twist: **everything runs on a DigitalOcean Basic Droplet** ($6/month). Ollama handles both embeddings and chat generation locally. No OpenAI keys. No usage limits. No free-tier anxiety.

The stack:

- **DigitalOcean Basic Droplet** (1 vCPU, 1GB RAM, $6/month)
- **Ollama** runs `llama3.2` for chat and `nomic-embed-text` for embeddings
- **A Python script** builds the retrieval index from your real portfolio content
- **A Next.js API route** serves the chat endpoint with cosine similarity retrieval
- **A React component** renders the chat widget on every page

Two critical details that most tutorials get wrong: **you need separate models for embedding and generation**. A chat model like Llama 3.2 is trained to produce text, not vector representations. For embeddings, use `nomic-embed-text` — it's small (274MB), fast, and purpose-built for turning text into retrievable vectors.

## Step 1: Provision the VPS

Sign up at [digitalocean.com](https://www.digitalocean.com), create a droplet:
- Location: Pick whatever's closest to your audience (New York if mostly US visitors)
- Image: Ubuntu 22.04 (LTS)
- Type: Basic — Regular Intel with SSD
- Plan: $6/month (1 vCPU, 1GB RAM, 25GB SSD) — or $12/month (1 vCPU, 2GB RAM, 50GB SSD) if you want headroom
- Cost: $6/month, billed hourly at the end of the month

**Note on RAM:** The $6 droplet has 1GB RAM. Ollama + Next.js will run, but it's tight. If you can afford the $12 tier (2GB RAM), responses will be more stable. I tested on both — the $6 tier works but can swap during model loading.

SSH in when it's ready:

```bash
ssh root@your-droplet-ip
```

## Step 2: Install Ollama and Pull Models

```bash
# Install Ollama
curl -fsSL https://ollama.com/install.sh | sh

# Pull models
ollama pull llama3.2:latest
ollama pull nomic-embed-text

# Create systemd service for Ollama
cat > /etc/systemd/system/ollama.service << 'EOF'
[Unit]
Description=Ollama Server
After=network.target

[Service]
ExecStart=/usr/local/bin/ollama serve
Restart=always
User=root
Environment=HOME=/root

[Install]
WantedBy=multi-user.target
EOF

systemctl daemon-reload
systemctl enable ollama
systemctl start ollama
```

Verify:

```bash
ollama list
# Should show llama3.2:latest and nomic-embed-text:latest
```

## Step 3: Extract and Index Your Content

This is where it gets specific to your site. My portfolio is a Next.js project with:

- Blog posts in `/blogs/*.md`
- Project data in `/data/projects.ts`
- Work history in `/data/experience.ts`
- An about page at `/app/about/page.tsx`

Instead of manually copying text files, I wrote a Python script that reads from these sources directly. When you update a project or publish a new article, rerun the script and the chatbot automatically knows about it.

The script does three things:

1. **Read** each source and strip formatting (frontmatter, JSX tags, code blocks)
2. **Chunk** the text into ~800 character pieces with 100-character overlap, breaking at sentence boundaries when possible
3. **Embed** each chunk by calling Ollama's `/api/embeddings` endpoint with `nomic-embed-text`

Here's the chunking logic:

```python
def chunk_text(text, source, chunk_size=800, overlap=100):
    normalized = re.sub(r"\s+", " ", text).strip()
    chunks = []
    start = 0

    while start < len(normalized):
        end = min(start + chunk_size, len(normalized))

        if end == len(normalized):
            chunks.append(normalized[start:].strip())
            break

        # Prefer sentence boundaries, fall back to word boundaries
        search_start = max(start + chunk_size - 80, start)
        sentence_match = normalized.rfind(". ", search_start, end)
        if sentence_match > search_start:
            break_point = sentence_match + 1
        else:
            word_match = normalized.rfind(" ", search_start, end)
            break_point = word_match if word_match > search_start else end

        chunk = normalized[start:break_point].strip()
        if len(chunk) > 30:
            chunks.append({"id": f"{source}-{len(chunks)}", "text": chunk, "source": source})

        start = break_point - overlap
        if start >= break_point or start <= 0:
            start = break_point

    return chunks
```

Sentence-aware chunking matters. If you slice mid-sentence, the embedding loses semantic coherence. A chunk that starts with "and the database..." won't match a query about your backend architecture.

The full script lives at `scripts/build-chatbot-index.py` in the repo. Running it on the VPS:

```bash
python3 scripts/build-chatbot-index.py
```

Output:

```
Extracted 522 raw chunks from:
  - Blogs
  - Projects
  - Experience
  - About
  Embedded 522/522

Saved 522 indexed chunks to public/chatbot/index.json
```

The resulting `index.json` is an array of objects with `id`, `text`, `source`, `sourceUrl`, and `embedding`. Commit this file — it's a build artifact that travels with your deploy.

## Step 4: Build the Chat API

The Next.js API route handles the full RAG pipeline per request:

1. Embed the user's question with `nomic-embed-text`
2. Compare that embedding against all stored chunks using cosine similarity
3. Boost chunks from the current page (so questions about the article you're reading get prioritized)
4. Hand the top 3 chunks + conversation history to Llama 3.2
5. Return the response with source attribution

Here's the core of the route at `app/api/chat/route.ts`:

```typescript
const OLLAMA_HOST = process.env.OLLAMA_HOST || 'http://localhost:11434';
const CHAT_MODEL = 'llama3.2:latest';
const EMBED_MODEL = 'nomic-embed-text';
const TOP_K = 3;

function cosineSimilarity(a: number[], b: number[]): number {
  let dot = 0, magA = 0, magB = 0;
  for (let i = 0; i < a.length; i++) {
    dot += a[i] * b[i];
    magA += a[i] * a[i];
    magB += b[i] * b[i];
  }
  return dot / (Math.sqrt(magA) * Math.sqrt(magB));
}

export async function POST(request: NextRequest) {
  const { message, history = [], currentPage } = await request.json();

  // Load the pre-built index
  const index = getIndex();

  // Determine page context for boosting
  let pageContextNote = '';
  let pageBoostSources: string[] = [];
  if (currentPage?.startsWith('/blog/')) {
    const slug = currentPage.replace('/blog/', '').replace(/\/$/, '');
    pageBoostSources = [`blog/${slug}`];
    pageContextNote = `The user is currently reading the article "${slug}".`;
  }

  // Embed the query
  const queryEmbedding = await ollamaEmbed(message);

  // Find top K chunks with page boosting
  const scored = index.map(entry => {
    let score = cosineSimilarity(queryEmbedding, entry.embedding);
    if (pageBoostSources.some(s => entry.source.startsWith(s))) {
      score = Math.min(score + 0.15, 0.999);
    }
    return { ...entry, score };
  });
  scored.sort((a, b) => b.score - a.score);
  const context = scored.slice(0, TOP_K);

  // Build prompt with page context + retrieved chunks
  const contextText = context
    .map((c, i) => `[Source ${i + 1} from ${c.source}]:\n${c.text}`)
    .join('\n\n');

  const systemPrompt = `You are Billie Heidelberg Jr.'s portfolio assistant. Billie is a full-stack developer who uses he/him pronouns. You must always refer to Billie using he/him pronouns.

${pageContextNote}

Answer questions based ONLY on the context below. If the answer is not in the context, say "I don't have that information on Billie's site." Be concise, friendly but professional, and accurate.

Context:
${contextText}`;

  // Include conversation history for follow-up questions
  const messages = [
    { role: 'system', content: systemPrompt },
    ...history.slice(-6),
    { role: 'user', content: message },
  ];

  const reply = await ollamaChat(messages);

  return NextResponse.json({
    reply,
    sources: context.map(c => ({ source: c.source, url: c.sourceUrl, score: c.score })),
  });
}
```

Key design choices:

- **Module-level cache** for the index so we don't re-read the JSON file on every request
- **Cosine similarity** in plain JavaScript — no vector database dependency. For 522 chunks this runs in under a millisecond
- **Page context boosting** — when someone is reading your Ollama article and asks "what about context windows?", the bot knows to prioritize chunks from that article
- **Conversation history** — the last 6 messages are passed to the model so follow-up questions work
- **Rate limiting** — 10 requests per minute per IP, so one curious visitor doesn't hammer your endpoint
- **Source attribution** — every response includes which chunks were used, with clickable links back to the original content

## Step 5: The Frontend Widget

The widget is a React component rendered in the layout so it appears on every page. It's a fixed-position chat bubble that expands into a collapsible chat panel.

I built it with Lucide icons and Tailwind classes matching the existing shadcn/ui theme. No external chat widget library.

The component handles:
- Loading states with a spinner
- Error display when Ollama isn't running
- Auto-scroll to new messages
- Focus management when opening
- Source links below each bot message (clickable, opens in new tab)
- Clear conversation button
- Current page detection sent to the API for context boosting

## Testing It

Here's what a real query looks like on the deployed VPS:

**Question:** "What did Billie work on at General Assembly?"

**Response:** "At General Assembly, Billie worked as an Educator & Mentor and led full-time software engineering bootcamps. His key achievements include instructing 150+ students in full-stack development using React, Node.js, Express, and MongoDB, designing project-based lessons emphasizing scalability and real-world application, mentoring students one-on-one through portfolio projects and technical interviews, and collaborating with instructional teams to evolve curriculum content."

**Sources:** `experience/general-assembly` (score: 0.553)

The bot quotes from the actual experience data. It doesn't hallucinate job titles or invent technologies. That's the point of RAG — the model speaks with your voice because it has your words in context.

Page-aware context in action:

**User is on `/blog/building-daily-wick`**
**Question:** "What technologies did he use?"

**Response:** "For the Daily Wick project, Billie used Next.js, TypeScript, and Supabase. The platform also leverages AI-powered analysis for trade logs and interactive dashboards for performance tracking."

**Sources:** `blog/building-daily-wick` (score: 0.688), `project/daily-wick` (score: 0.659)

The bot pulled from both the article the user is currently reading and the project data. Because it knows what page they're on, the relevant chunks bubble to the top.

## Step 6: Deploy with the One-Run Script

I wrote `scripts/deploy-vps.sh` to automate the entire setup. After provisioning your DigitalOcean droplet and pointing DNS, SSH in and run:

```bash
curl -O https://raw.githubusercontent.com/yourname/portfolio/main/scripts/deploy-vps.sh
chmod +x deploy-vps.sh
sudo bash deploy-vps.sh
```

This script handles:
- System updates and dependency installation
- Ollama installation with systemd service
- Node.js 20, pnpm, and PM2 setup
- Repo cloning and dependency installation
- Index building (calls Ollama on localhost)
- Next.js build
- PM2 process management with auto-restart on boot
- nginx configuration
- Firewall setup (SSH, HTTP, HTTPS)

After it finishes:

```bash
# SSL (run after DNS points to your server)
certbot --nginx -d billieheidelberg.com

# Check everything is running
pm2 status
systemctl status ollama
```

## Performance

On a DigitalOcean Basic Droplet ($6/month, 1 vCPU, 1GB RAM):
- **Embedding query:** ~200ms (nomic-embed-text is tiny)
- **Chat generation:** 6-10 seconds (llama3.2 3B — can swap with 1GB RAM)
- **Total response time:** 7-12 seconds

That's acceptable for a portfolio bot. It's a conversation starter, not a production service.

**Upgrade to $12/month (2GB RAM)** if you want faster responses:
- Chat generation drops to 3-5 seconds
- No swapping during model loading
- More headroom for concurrent visitors

## Updating Content

When you publish a new article or update a project:

```bash
# On the VPS
cd /var/www/portfolio
git pull
python3 scripts/build-chatbot-index.py
pm2 restart portfolio
```

The `index.json` is committed to git. It's a build artifact — regenerate it whenever content changes.

## What To Add Next

The shipped version already includes conversation history, source links, rate limiting, and page-aware context. The remaining improvements are:

- **Streaming responses.** Change the API to stream tokens instead of returning the full response at once. The UX improvement is significant
- **Smarter chunking.** Group related sentences into semantic paragraphs before chunking, rather than using a fixed character window
- **Query expansion.** Use conversation history to rewrite ambiguous follow-up questions ("what about that?") into explicit queries before embedding

## The Real Win

A portfolio chatbot isn't impressive because it's hard. It's impressive because most developers haven't built one.

You wrote the embedding pipeline. You chose the right model for the job. You built the retrieval logic. You wired it to a frontend. You deployed it on a $5 VPS with no external AI dependencies.

When someone asks about this in an interview, you can walk them through every line — because you wrote every line.

Start with your existing content. That's enough data to answer the questions people actually ask. Deploy it. Then keep feeding it everything you write.
