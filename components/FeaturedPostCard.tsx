import React from 'react';
import Link from 'next/link';
import { formatDate } from '@/lib/utils';

interface FeaturedPostCardProps {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  tags?: string[];
}

const FeaturedPostCard: React.FC<FeaturedPostCardProps> = ({
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
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
        <div className="h-64 md:h-full overflow-hidden">
          <img
            src={getPlaceholderImage(title)}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-8 flex flex-col justify-between">
          <div>
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              <Link href={`/blog/${id}`} className="hover:text-blue-600 transition-colors">
                {title}
              </Link>
            </h3>
            <p className="text-gray-600 mb-6 line-clamp-3">{excerpt}</p>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-500">
              <time dateTime={date}>{formattedDate}</time>
              <span className="mx-2">•</span>
              <span>{readingTime} min read</span>
            </div>
            <Link
              href={`/blog/${id}`}
              className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800"
            >
              Read more
              <svg
                className="ml-1 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPostCard;
