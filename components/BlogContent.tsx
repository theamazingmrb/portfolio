'use client';

import React from 'react';
import BlogContentHydration from './BlogContentHydration';

interface BlogContentProps {
  content: string;
}

export default function BlogContent({ content }: BlogContentProps) {
  return <BlogContentHydration content={content} />;
}
