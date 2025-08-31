'use client';

import React, { useEffect, useRef } from 'react';

interface BlogContentHydrationProps {
  content: string;
}

export default function BlogContentHydration({ content }: BlogContentHydrationProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // This runs only on the client side after hydration
    if (contentRef.current) {
      // The content is already set via dangerouslySetInnerHTML
      // We don't need to do anything else here
    }
  }, [content]);

  return (
    <div 
      ref={contentRef}
      className="text-gray-800" 
      dangerouslySetInnerHTML={{ __html: content || '' }}
      suppressHydrationWarning
    />
  );
}
