import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { formatDate } from "@/lib/utils";

interface FeaturedPostCardProps {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  readingTime: number;
  tags?: string[];
  coverImage?: string;
}

export default function FeaturedPostCard({ id, title, date, excerpt, readingTime, tags = [], coverImage }: FeaturedPostCardProps) {
  const imageSrc = coverImage || "/blog-images/default-cover.svg"; // fallback image

  return (
    <Link href={`/blog/${id}`} className="notebook-featured">
      <div className="notebook-featured-image"><Image src={imageSrc} alt="" fill sizes="(max-width: 767px) 90vw, 45vw" priority /></div>
      <div className="notebook-featured-copy">
        {/* Featured badge */}
        <span className="eyebrow">Editor’s pick / {tags[0] || "Development"}</span>
        <h2>{title}</h2>
        <p>{excerpt}</p>
        <div className="notebook-featured-meta"><span><time dateTime={date}>{formatDate(date)}</time> / {readingTime} min read</span><ArrowUpRight size={22} aria-hidden="true" /></div>
      </div>
    </Link>
  );
}
