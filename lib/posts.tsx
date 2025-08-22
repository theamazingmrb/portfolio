import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

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
}

function generateExcerpt(content: string): string {
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
    // Remove bold/italic markdown
    .replace(/[*_]{1,3}([^*_]+)[*_]{1,3}/g, '$1')
    // Remove extra whitespace and newlines
    .replace(/\s+/g, ' ')
    .trim();

  // Take the first 180 characters as an excerpt
  const excerpt = cleanContent.substring(0, 180).trim();
  return excerpt.length < cleanContent.length ? `${excerpt}...` : excerpt;
}

function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
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
        const excerpt = generateExcerpt(matterResult.content);
        const readingTime = calculateReadingTime(matterResult.content);

        // Combine the data with the id
        return {
          id,
          excerpt,
          contentHtml: '',
          readingTime,
          title: matterResult.data.title,
          date: matterResult.data.date,
          tags: matterResult.data.tags || [],
          category: matterResult.data.category || 'Development',
        };
      } catch (error) {
        console.error(`Error processing file ${fileName}:`, error);
        return null;
      }
    });

    // Filter out any null entries and sort posts by date
    return allPostsData
      .filter((post): post is PostData => post !== null)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
      
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

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html, { sanitize: false })
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Generate excerpt and reading time
  const excerpt = generateExcerpt(matterResult.content);
  const readingTime = calculateReadingTime(matterResult.content);

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    excerpt,
    readingTime,
    tags: matterResult.data.tags || [],
    category: matterResult.data.category || 'Development',
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