import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'blogs');

export interface PostData {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  contentHtml?: string;
}

export function getSortedPostsData(): PostData[] {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map(fileName => {
    const id = fileName.replace(/\.md$/, '');

    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContents);

    // Generate excerpt from content
    const excerpt = generateExcerpt(matterResult.content);

    return {
      id,
      ...(matterResult.data as { title: string; date: string }),
      excerpt,
      contentHtml: '', // Add a default empty string
    };
  });
  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

function generateExcerpt(content: string): string {
  // Split content into sentences
  const sentences = content.split(/[.!?]+/);
  // Take the first two sentences, or the whole content if it's shorter
  const excerpt = sentences.slice(0, 2).join('. ');
  // Trim and add ellipsis if the content was cut
  return excerpt.length < content.length ? excerpt.trim() + '...' : excerpt.trim();
}

export async function getPostData(id: string): Promise<PostData> {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const matterResult = matter(fileContents);

  const processedContent = await remark().use(html).process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Generate excerpt
  const excerpt = generateExcerpt(matterResult.content);

  return {
    id,
    contentHtml,
    excerpt,
    ...(matterResult.data as { title: string; date: string }),
  };
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map(fileName => ({
    params: {
      id: fileName.replace(/\.md$/, ''),
    },
  }));
}