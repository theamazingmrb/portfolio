import React from 'react';
import Link from 'next/link';
import { formatDate } from '@/lib/utils';

interface BlogPostCardProps {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  readingTime: number;
  tags?: string[];
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({
  id,
  title,
  date,
  excerpt,
  readingTime,
  tags = [],
}) => {
  // Function to get cover image for the blog post
  const getCoverImage = (id: string, title: string): string => {
    // Try to match with available article covers
    const possibleImageNames = [
      id,
      id.replace(/-/g, '_'),
      title.toLowerCase().replace(/\s+/g, '-'),
      title.toLowerCase().replace(/\s+/g, '_')
    ];
    
    // Check for specific known images
    if (id === 'git-github-mastery' || title.toLowerCase().includes('git')) {
      return '/articleCovers/git-and-github-mastery.png';
    }
    if (id === 'finding-clarity-in-chaos' || title.toLowerCase().includes('clarity')) {
      return '/articleCovers/finding-clarity.png';
    }
    if (id === 'docker-express-api-mastery' || title.toLowerCase().includes('docker')) {
      return '/articleCovers/docker-and-express.png';
    }
    if (title.toLowerCase().includes('typescript')) {
      return '/articleCovers/getting-started-with-typescript.png';
    }
    if (title.toLowerCase().includes('react') || title.toLowerCase().includes('usecontext')) {
      return '/articleCovers/master-react-usecontext.png';
    }
    if (title.toLowerCase().includes('baby') || title.toLowerCase().includes('tracker')) {
      return '/articleCovers/baby-tracker.png';
    }
    if (title.toLowerCase().includes('cheese') || title.toLowerCase().includes('moved')) {
      return '/articleCovers/who-moved-my-cheese.png';
    }
    
    // Fallback to placeholder images
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

  const formattedDate = formatDate(date);

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col h-full">
      <div className="h-48 overflow-hidden">
        <img
          src={getCoverImage(id, title)}
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
