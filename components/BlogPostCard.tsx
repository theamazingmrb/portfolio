"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { formatDate } from "@/lib/utils";

interface BlogPostCardProps {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  readingTime: number;
  tags?: string[];
  coverImage?: string;
}

export default function BlogPostCard({ id, title, date, excerpt, readingTime, tags = [], coverImage }: BlogPostCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Link href={`/blog/${id}`} className="notebook-card">
      <div className="notebook-card-image">
        {/* Skeleton loader */}
        {!imageLoaded && <div className="absolute inset-0 bg-muted" />}
        <Image src={coverImage || "/blog-images/default-cover.svg"} alt="" fill sizes="(max-width: 767px) 90vw, (max-width: 1023px) 45vw, 30vw" onLoad={() => setImageLoaded(true)} />
      </div>
      <div className="notebook-card-copy">
        <span className="eyebrow">{tags.slice(0, 2).join(" / ") || "Field notes"}</span>
        <h3>{title}</h3>
        <p>{excerpt}</p>
        <div className="notebook-card-meta"><span><time dateTime={date}>{formatDate(date)}</time> / {readingTime} min</span><ArrowUpRight size={18} aria-hidden="true" /></div>
      </div>
    </Link>
  );
}
