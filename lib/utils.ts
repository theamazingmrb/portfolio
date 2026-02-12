import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: string): string {
  const dateObj = new Date(date);
  return dateObj.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

export function getCoverImage(coverImage: string | undefined): string {
  if (!coverImage) {
    return "/projects/placeholder.jpg"; // Default placeholder
  }
  
  // If it's already a full URL, return as is
  if (coverImage.startsWith('http')) {
    return coverImage;
  }
  
  // If it starts with /, return as is (already correct path)
  if (coverImage.startsWith('/')) {
    return coverImage;
  }
  
  // Otherwise, prepend /projects/
  return `/projects/${coverImage}`;
}
