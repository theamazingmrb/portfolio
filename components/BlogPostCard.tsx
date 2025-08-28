import React from 'react';
import Link from 'next/link';
import { formatDate } from '@/lib/utils';

interface BlogPostCardProps {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  tags?: string[];
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({
  id,
  title,
  date,
  excerpt,
  tags = [],
}) => {
  // Function to get a placeholder image based on post title keywords
  const getPlaceholderImage = (title: string): string => {
    const lowerTitle = title.toLowerCase();
    if (lowerTitle.includes('react') || lowerTitle.includes('javascript')) {
      return '/projects/react-app.png';
    } else if (lowerTitle.includes('docker') || lowerTitle.includes('container')) {
      return '/projects/docker-express.png';
    } else if (lowerTitle.includes('git') || lowerTitle.includes('github')) {
      return '/projects/git-github.png';
    } else if (lowerTitle.includes('trading') || lowerTitle.includes('finance')) {
      return '/projects/smart-trader.png';
    } else {
      return '/projects/code-editor.png';
    }
  };

  // Calculate reading time based on excerpt length (rough estimate)
  const calculateReadingTime = (text: string): number => {
    const wordsPerMinute = 200;
    const words = text.trim().split(/\s+/).length;
    return Math.ceil(words / wordsPerMinute);
  };

  const readingTime = calculateReadingTime(excerpt);
  const formattedDate = formatDate(date);

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col h-full">
      <div className="h-48 overflow-hidden">
        <img
          src={getPlaceholderImage(title)}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex flex-wrap gap-2 mb-3">
          {tags && tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          <Link href={`/blog/${id}`} className="hover:text-blue-600 transition-colors">
            {title}
          </Link>
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-2 flex-grow">{excerpt}</p>
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
          <div className="text-sm text-gray-500">
            <time dateTime={date}>{formattedDate}</time>
            <span className="mx-1">•</span>
            <span>{readingTime} min read</span>
          </div>
          <Link
            href={`/blog/${id}`}
            className="text-blue-600 text-sm font-medium hover:text-blue-800"
          >
            Read →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPostCard;
