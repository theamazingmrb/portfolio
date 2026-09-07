export interface SkillCategory {
  category: string;
  items: string[];
}

// Synced to resume V4 TECHNICAL SKILLS (canonical source).
export const skillCategories: SkillCategory[] = [
  {
    category: "AI Dev Tools",
    items: [
      "Claude Code — AI-assisted development workflow",
      "Windsurf IDE — AI-native editor",
      "ChatGPT / GitHub Copilot — daily pairing",
      "OpenAI API — Daily Wick trade analysis engine",
      "RAG / Vector Search — Daily Wick AI coaching pipeline (pgvector)",
      "Prompt Engineering — Daily Wick AI insights",
    ],
  },
  {
    category: "Frontend",
    items: [
      "React / Next.js — Daily Wick, Simmr, That Aisle",
      "React Native (Expo) — That Aisle (App Store live), TOLO",
      "SvelteKit / Svelte — Wink, Inc. enterprise platform",
      "TypeScript — all production projects since 2020",
      "Tailwind CSS — this portfolio, Love & Service 1st",
      "Redux Toolkit — That Aisle mobile app",
    ],
  },
  {
    category: "Backend & Data",
    items: [
      "Node.js / Express — Simmr, TOLO API layer",
      "Supabase — Daily Wick auth, Postgres, row-level security",
      "PostgreSQL — InvestCloud ($2B/day), Simmr, Baby Tracker",
      "Redis — caching layer across projects",
      "MongoDB — GA curriculum projects",
      "GraphQL (Apollo, Hasura) — Simmr discovery platform",
      "Django — Baby Tracker API, AMIR BLAQ admin",
      "ETL Pipelines — InvestCloud financial data (50+ institutions)",
      "Data Modeling — relational schema design",
    ],
  },
  {
    category: "Cloud & DevOps",
    items: [
      "AWS (Lambda@Edge, S3, CloudFront, SQS) — Simmr image pipeline",
      "Docker — Baby Tracker self-hosted deploys",
      "CI/CD — production release pipelines",
      "Vercel — Daily Wick, this portfolio",
      "Serverless Framework — Simmr infrastructure",
    ],
  },
  {
    category: "APIs & Integrations",
    items: [
      "REST APIs — across all production projects",
      "GraphQL — Simmr discovery platform",
      "Postman — API testing and documentation",
      "Stripe — Daily Wick paid tiers, Simmr billing",
      "Twilio — Simmr MMS & verification",
      "Polygon.io — Daily Wick market data",
    ],
  },
  {
    category: "Other",
    items: [
      "Python — ETL pipelines, GA curriculum",
      "Groovy — InvestCloud enterprise services",
      "Unit Testing — production test suites",
      "Technical Documentation — runbooks, onboarding",
      "Cross-functional Collaboration — engineering, QA, product",
    ],
  },
];
