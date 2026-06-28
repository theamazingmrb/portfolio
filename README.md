# Billie Heidelberg — Portfolio

Personal site built with Next.js 15, TypeScript, Tailwind CSS, and shadcn/ui.

## Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + shadcn/ui components
- **Content:** Markdown blog with gray-matter + remark/rehype
- **Animation:** Framer Motion
- **Analytics:** Vercel Analytics
- **Deployment:** Vercel

## Running locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Structure

- `app/` — Routes, layouts, and API routes
- `components/` — Reusable UI components and page sections
- `data/projects.ts` — Project data source
- `lib/posts.tsx` — Markdown blog parsing and rendering
- `blogs/` — Markdown blog content
- `public/` — Images, documents, and static assets
