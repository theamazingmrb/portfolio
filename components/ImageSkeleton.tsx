"use client";

import { useState } from "react";
import Image from "next/image";

interface ImageSkeletonProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
}

export default function ImageSkeleton({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
}: ImageSkeletonProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative overflow-hidden">
      {isLoading && (
        <div className="absolute inset-0 bg-gradient-to-r from-muted via-muted/50 to-muted animate-shimmer bg-[length:200%_100%]" />
      )}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`transition-opacity duration-300 ${isLoading ? "opacity-0" : "opacity-100"} ${className}`}
        onLoad={() => setIsLoading(false)}
        priority={priority}
      />
    </div>
  );
}
