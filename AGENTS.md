# Project conventions

- The active project catalog is `lib/projects.ts`; the homepage, project listing, and case-study routes use it. `data/projects.ts` is a separate older catalog.
- Blog metadata comes from Markdown in `blogs/`, via `getSortedPostsData()` in `lib/posts.tsx`. Keep this filesystem-backed module in server code; client components should use type-only imports or the posts API.
- Editorial styles live in `app/editorial.css`, alongside shared Tailwind theme tokens in `app/globals.css`. Support both light and dark themes and reduced motion.

# Verification

- `npm run lint`
- `npx tsc --noEmit`
- `npm run build`
- Stop the development server before building: both commands use `.next`. After building, `npm run start` serves the production build.
- Check the homepage at mobile and desktop widths, theme persistence, mobile-menu keyboard behavior, project filtering, article search, and project/article detail links after UI changes.
