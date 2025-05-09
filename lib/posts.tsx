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
}

function generateExcerpt(content: string): string {
  // Take the first 150 characters as an excerpt
  const excerpt = content.substring(0, 150).trim();
  return excerpt.length < content.length ? `${excerpt}...` : excerpt;
}

export function getSortedPostsData(): PostData[] {
  // Get file names under /blogs
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Generate excerpt
    const excerpt = generateExcerpt(matterResult.content);

    // Combine the data with the id
    return {
      id,
      excerpt,
      contentHtml: '',
      ...(matterResult.data as { title: string; date: string }),
    };
  });

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
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

  // Generate excerpt
  const excerpt = generateExcerpt(matterResult.content);

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    excerpt,
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