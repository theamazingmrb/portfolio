/**
 * Format a date string into a more readable format
 * @param dateString - ISO date string (YYYY-MM-DD)
 * @returns Formatted date string (e.g., "May 15, 2023")
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  
  // Check if the date is valid
  if (isNaN(date.getTime())) {
    return dateString; // Return original string if invalid date
  }
  
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Truncate text to a specified length with ellipsis
 * @param text - Text to truncate
 * @param maxLength - Maximum length before truncation
 * @returns Truncated text with ellipsis if needed
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
}

/**
 * Generate a slug from a string
 * @param text - Text to convert to slug
 * @returns URL-friendly slug
 */
export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/--+/g, '-') // Replace multiple hyphens with single hyphen
    .trim();
}

/**
 * Get cover image for a blog post based on post ID or title keywords
 * @param id - Post ID
 * @param title - Post title
 * @returns Path to the cover image
 */
export function getCoverImage(id: string, title: string): string {
  // Check for specific post IDs first
  if (id === 'docker-express-api-mastery') {
    return '/articleCovers/docker-and-express.png';
  } else if (id === 'building-smart-trader') {
    return '/projects/smart-trader.png';
  } else if (id === 'git-github-mastery') {
    return '/articleCovers/git-and-github-mastery.png';
  } else if (id === 'finding-clarity-in-chaos') {
    return '/articleCovers/finding-clarity.png';
  } else if (id === 'typescript-getting-started') {
    return '/articleCovers/typescript-getting-started.png';
  } else if (id === 'mastering-xml-javascript') {
    return '/articleCovers/master-xml.png';
  }
  
  // If no specific ID match, check for keywords in title
  const titleLower = title.toLowerCase();
  if (titleLower.includes('typescript') || titleLower.includes('type safety')) {
    return '/articleCovers/typescript-getting-started.png';
  } else if (titleLower.includes('react') || titleLower.includes('component')) {
    return '/articleCovers/master-react-usecontext.png';
  } else if (titleLower.includes('docker') || titleLower.includes('container')) {
    return '/articleCovers/featured/docker-mastery.png';
  } else if (titleLower.includes('api') || titleLower.includes('rest')) {
    return '/articleCovers/docker-and-express.png';
  } else if (titleLower.includes('baby') || titleLower.includes('tracker')) {
    return '/articleCovers/baby-tracker.png';
  } else if (titleLower.includes('git') || titleLower.includes('github')) {
    return '/articleCovers/git-and-github-mastery.png';
  } else if (titleLower.includes('clarity') || titleLower.includes('chaos')) {
    return '/articleCovers/finding-clarity.png';
  } else if (titleLower.includes('cheese') || titleLower.includes('moved')) {
    return '/articleCovers/who-moved-my-cheese.png';
  } else if (titleLower.includes('xml') || titleLower.includes('parsing')) {
    return '/articleCovers/master-xml.png';
  } else {
    return '/projects/code-editor.png';
  }
}
