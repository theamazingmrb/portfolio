import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { formatDate } from '@/lib/utils';

interface BlogPostCardProps {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  readingTime: number;
  tags?: string[];
  coverImage?: string;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({
  id,
  title,
  date,
  excerpt,
  readingTime,
  tags = [],
  coverImage,
}) => {
  const formattedDate = formatDate(date);
  const imageSrc = coverImage || '/projects/code-editor.png';
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Link href={`/blog/${id}`} className="block h-full group">
      <div className="bg-card text-card-foreground rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col h-full border border-border">
        <div className="h-48 overflow-hidden relative">
          {/* Skeleton loader */}
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gradient-to-r from-muted via-muted/50 to-muted animate-shimmer bg-[length:200%_100%]" />
          )}
          <Image
            src={imageSrc}
            alt={title}
            width={400}
            height={300}
            className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setImageLoaded(true)}
            suppressHydrationWarning
          />
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <div className="flex flex-wrap gap-2 mb-3">
            {tags && tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground mb-4 line-clamp-2 flex-grow">{excerpt}</p>
          <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
            <div className="text-sm text-muted-foreground">
              <time dateTime={date} suppressHydrationWarning>{formattedDate}</time>
              <span className="mx-1">•</span>
              <span suppressHydrationWarning>{readingTime} min read</span>
            </div>
            <span className="text-primary text-sm font-medium group-hover:translate-x-1 transition-transform">
              Read →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogPostCard;
