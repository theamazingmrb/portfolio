import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { formatDate, getCoverImage } from '@/lib/utils';

interface FeaturedPostCardProps {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  readingTime: number;
  tags?: string[];
}

const FeaturedPostCard: React.FC<FeaturedPostCardProps> = ({
  id,
  title,
  date,
  excerpt,
  readingTime,
  tags = [],
}) => {
  // Using the centralized getCoverImage function from utils

  const formattedDate = formatDate(date);

  return (
    <Link href={`/blog/${id}`} className="block">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          <div className="h-64 md:h-full overflow-hidden">
            <Image
              src={getCoverImage(id, title)}
              alt={title}
              width={600}
              height={400}
              className="w-full h-full object-cover"
              priority={true}
              suppressHydrationWarning
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
              <h3 className="text-2xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                {title}
              </h3>
              <p className="text-gray-600 mb-6 line-clamp-3">{excerpt}</p>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-500">
                <time dateTime={date} suppressHydrationWarning>{formattedDate}</time>
                <span className="mx-2">•</span>
                <span suppressHydrationWarning>{readingTime} min read</span>
              </div>
              <span className="inline-flex items-center text-blue-600 font-medium">
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
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FeaturedPostCard;
