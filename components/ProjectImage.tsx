'use client';

import Image from 'next/image';
import type { StaticImageData } from 'next/image';

type ImageProps = Omit<React.ComponentProps<typeof Image>, 'src'> & {
  src: string | StaticImageData;
};
import { useState } from 'react';

interface ProjectImageProps extends Omit<ImageProps, 'onError'> {
  fallbackSrc?: string;
}

export function ProjectImage({ src, alt, className, fallbackSrc = '/images/project-placeholder.jpg', ...props }: ProjectImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [imgError, setImgError] = useState(false);

  const handleError = () => {
    if (!imgError) {
      setImgSrc(fallbackSrc);
      setImgError(true);
    }
  };

  return (
    <div className="relative w-full h-full">
      <Image
        src={imgError ? fallbackSrc : imgSrc}
        alt={alt}
        fill
        className={className}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        onError={handleError}
        {...props}
      />
    </div>
  );
}
