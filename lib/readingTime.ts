/**
 * Estimate reading time (minutes) for markdown content.
 * - Defaults to 225 wpm (common blog baseline).
 * - Adds ~15s for each code block or image.
 */
export const calculateReadingTime = (
  text: string,
  {
    wpm = 225,
    secondsPerCodeBlock = 15,
    secondsPerImage = 15,
    minMinutes = 1,
  }: {
    wpm?: number;
    secondsPerCodeBlock?: number;
    secondsPerImage?: number;
    minMinutes?: number;
  } = {}
): number => {
  if (!text || !text.trim()) return minMinutes;

  // Base words (rough, but good enough for blogs)
  const words = text.trim().split(/\s+/).length;
  let minutes = words / wpm;

  // Lightweight markdown-aware media bumps
  const codeBlocks = ((text.match(/```/g) || []).length / 2) | 0; // pairs of ```
  const images = (text.match(/!\[[^\]]*\]\([^)]*\)/g) || []).length; // ![alt](src)

  const mediaSeconds =
    codeBlocks * secondsPerCodeBlock + images * secondsPerImage;

  minutes += mediaSeconds / 60;

  // Round up, enforce minimum
  return Math.max(minMinutes, Math.ceil(minutes));
};
