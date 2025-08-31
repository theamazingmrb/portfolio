import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { formatDate, getCoverImage } from '@/lib/utils';

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
  const formattedDate = formatDate(date);

  return (
    <Link href={`/blog/${id}`} className="block h-full">
      <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col h-full">
        <div className="h-48 overflow-hidden">
          <Image
            src={getCoverImage(id, title)}
            alt={title}
            width={400}
            height={300}
            className="w-full h-full object-cover"
            priority={true}
            suppressHydrationWarning
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
          <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 mb-4 line-clamp-2 flex-grow">{excerpt}</p>
          <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
            <div className="text-sm text-gray-500">
              <time dateTime={date} suppressHydrationWarning>{formattedDate}</time>
              <span className="mx-1">•</span>
              <span suppressHydrationWarning>{readingTime} min read</span>
            </div>
            <span className="text-blue-600 text-sm font-medium">Read →</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogPostCard;
