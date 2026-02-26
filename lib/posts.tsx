import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import remarkGfm from 'remark-gfm';
import remarkToc from 'remark-toc';
import rehypeSlug from 'rehype-slug';
import { rehype } from 'rehype';
import rehypeCodeButtons from './rehype-code-buttons';
import { calculateReadingTime } from './readingTime';

// IMPORTANT: This file uses Node.js modules and should only be imported in Server Components

const postsDirectory = path.join(process.cwd(), 'blogs');

export interface PostData {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  contentHtml: string;
  readingTime?: number;
  tags?: string[];
  category?: string;
  coverImage?: string;
  author?: string;
  authorImage?: string;
  tableOfContents?: string;
  relatedPosts?: string[];
  lastUpdated?: string;
  featured?: boolean;
  draft?: boolean;
}

function generateExcerpt(content: string, frontmatter: any): string {
  // Use explicit excerpt from frontmatter if available
  if (frontmatter.excerpt) {
    return frontmatter.excerpt;
  }

  // Remove markdown headers, horizontal rules, and other formatting
  let cleanContent = content
    // Remove frontmatter block
    .replace(/^---[\s\S]*?---/g, '')
    // Remove markdown headers
    .replace(/^#+\s+/gm, '')
    // Remove horizontal rules
    .replace(/^[-*_]{3,}\s*$/gm, '')
    // Remove markdown links and images
    .replace(/!?\[[^\]]*\]\([^)]*\)/g, '')
    // Remove inline code blocks
    .replace(/`[^`]*`/g, '')
    // Remove code blocks
    .replace(/```[\s\S]*?```/g, '')
    // Remove bold/italic markdown
    .replace(/[*_]{1,3}([^*_]+)[*_]{1,3}/g, '$1')
    // Remove extra whitespace and newlines
    .replace(/\s+/g, ' ')
    .trim();

  // Take the first 240 characters as an excerpt (increased from 180)
  const excerpt = cleanContent.substring(0, 240).trim();
  return excerpt.length < cleanContent.length ? `${excerpt}...` : excerpt;
}

// Using calculateReadingTime imported from readingTime.ts

async function generateTableOfContents(content: string): Promise<string> {
  // Process the content to generate a table of contents
  const processedContent = await remark()
    .use(remarkToc, { tight: true, maxDepth: 3 })
    .process(content);

  // Extract just the TOC part
  const contentString = processedContent.toString();
  const tocMatch = contentString.match(/<nav class="toc">([\s\S]*?)<\/nav>/);

  return tocMatch ? tocMatch[0] : '';
}

export function getSortedPostsData(): PostData[] {
  try {
    // Get file names under /blogs
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map(fileName => {
      try {
        if (!fileName.endsWith('.md')) return null;

        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, '');

        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);

        // Check if required fields exist
        if (!matterResult.data.title || !matterResult.data.date) {
          console.warn(`Missing required frontmatter in ${fileName}. Found:`, matterResult.data);
          return null;
        }

        // Generate excerpt and reading time
        const excerpt = generateExcerpt(matterResult.content, matterResult.data);
        const readingTime = calculateReadingTime(matterResult.content);

        // Combine the data with the id
        return {
          id,
          excerpt,
          contentHtml: '',
          readingTime,
          title: matterResult.data.title,
          date: matterResult.data.date,
          lastUpdated: matterResult.data.lastUpdated || matterResult.data.date,
          tags: matterResult.data.tags || [],
          category: matterResult.data.category || 'Development',
          coverImage: matterResult.data.coverImage || null,
          author: matterResult.data.author || 'Billie Heidelberg Jr.',
          authorImage: matterResult.data.authorImage || '/me.png',
          relatedPosts: matterResult.data.relatedPosts || [],
          featured: matterResult.data.featured || false,
          draft: matterResult.data.draft || false,
        } as PostData;
      } catch (error) {
        console.error(`Error processing file ${fileName}:`, error);
        return null;
      }
    });

    // Filter out any null entries and sort posts by date
    const validPosts = allPostsData.filter((post): post is PostData => post !== null);

    // Filter out draft posts from public listings
    const publicPosts = validPosts.filter(post => !post.draft);

    return publicPosts.sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

  } catch (error) {
    console.error('Error reading blog posts directory:', error);
    return [];
  }
}

// Get all posts including drafts (for admin access)
export function getAllPostsWithDrafts(): PostData[] {
  try {
    // Get file names under /blogs
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map(fileName => {
      try {
        if (!fileName.endsWith('.md')) return null;

        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, '');

        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);

        // Check if required fields exist
        if (!matterResult.data.title || !matterResult.data.date) {
          console.warn(`Missing required frontmatter in ${fileName}. Found:`, matterResult.data);
          return null;
        }

        // Generate excerpt and reading time
        const excerpt = generateExcerpt(matterResult.content, matterResult.data);
        const readingTime = calculateReadingTime(matterResult.content);

        // Combine the data with the id
        return {
          id,
          excerpt,
          contentHtml: '',
          readingTime,
          title: matterResult.data.title,
          date: matterResult.data.date,
          lastUpdated: matterResult.data.lastUpdated || matterResult.data.date,
          tags: matterResult.data.tags || [],
          category: matterResult.data.category || 'Development',
          coverImage: matterResult.data.coverImage || null,
          author: matterResult.data.author || 'Billie Heidelberg Jr.',
          authorImage: matterResult.data.authorImage || '/me.png',
          relatedPosts: matterResult.data.relatedPosts || [],
          featured: matterResult.data.featured || false,
          draft: matterResult.data.draft || false,
        } as PostData;
      } catch (error) {
        console.error(`Error processing file ${fileName}:`, error);
        return null;
      }
    });

    // Filter out any null entries and sort posts by date
    const validPosts = allPostsData.filter((post): post is PostData => post !== null);

    return validPosts.sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

  } catch (error) {
    console.error('Error reading blog posts directory:', error);
    return [];
  }
}

export async function getPostData(id: string): Promise<PostData> {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Generate table of contents
  const tableOfContents = await generateTableOfContents(matterResult.content);

  // Use remark to convert markdown into HTML string with enhanced features
  const processedContent = await remark()
    .use(remarkGfm) // GitHub Flavored Markdown: tables, strikethrough, etc.
    .use(remarkToc, { tight: true }) // Add table of contents
    .use(html, { sanitize: false })
    .process(matterResult.content);

  // Apply rehype plugins to add IDs to headings and code copy buttons
  const contentWithIds = await rehype()
    .use(rehypeSlug)
    .use(rehypeCodeButtons)
    .process(processedContent.toString());
  const contentHtml = contentWithIds.toString();

  // Generate excerpt and reading time
  const excerpt = generateExcerpt(matterResult.content, matterResult.data);
  const readingTime = calculateReadingTime(matterResult.content);

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    excerpt,
    readingTime,
    tableOfContents,
    tags: matterResult.data.tags || [],
    category: matterResult.data.category || 'Development',
    coverImage: matterResult.data.coverImage || null,
    author: matterResult.data.author || 'Billie Heidelberg Jr.',
    authorImage: matterResult.data.authorImage || '/me.png',
    lastUpdated: matterResult.data.lastUpdated || matterResult.data.date,
    relatedPosts: matterResult.data.relatedPosts || [],
    featured: matterResult.data.featured || false,
    draft: matterResult.data.draft || false,
    ...(matterResult.data as { title: string; date: string }),
  };
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    };
  });
}

// Get related posts based on shared tags
export function getRelatedPosts(currentPostId: string, currentPostTags: string[] = [], limit: number = 3): PostData[] {
  const allPosts = getSortedPostsData();

  // Filter out the current post
  const otherPosts = allPosts.filter(post => post.id !== currentPostId);

  // If no tags, return the most recent posts
  if (!currentPostTags || currentPostTags.length === 0) {
    return otherPosts.slice(0, limit);
  }

  // Score posts based on shared tags
  const scoredPosts = otherPosts.map(post => {
    const postTags = post.tags || [];
    const sharedTags = postTags.filter(tag => currentPostTags.includes(tag));
    return {
      post,
      score: sharedTags.length
    };
  });

  // Sort by score (descending), then by date (descending)
  scoredPosts.sort((a, b) => {
    if (b.score !== a.score) {
      return b.score - a.score;
    }
    return new Date(b.post.date).getTime() - new Date(a.post.date).getTime();
  });

  // Return top posts with at least one shared tag, or recent posts if none share tags
  const postsWithSharedTags = scoredPosts.filter(p => p.score > 0);

  if (postsWithSharedTags.length >= limit) {
    return postsWithSharedTags.slice(0, limit).map(p => p.post);
  }

  // If not enough posts with shared tags, fill with most recent posts
  const relatedPosts = postsWithSharedTags.map(p => p.post);
  const remainingCount = limit - relatedPosts.length;
  const recentPosts = scoredPosts
    .filter(p => !relatedPosts.includes(p.post))
    .slice(0, remainingCount)
    .map(p => p.post);

  return [...relatedPosts, ...recentPosts];
}