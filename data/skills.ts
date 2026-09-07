export interface SkillCategory {
  category: string;
  items: string[];
}

// Synced to resume.md TECHNICAL SKILLS (canonical source).
export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    items: [
      "React / Next.js — Daily Wick, Simmr, That Aisle",
      "TypeScript — all production projects since 2020",
      "React Native (Expo) — That Aisle (App Store live), TOLO",
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
      "Firebase — That Aisle real-time features",
      "GraphQL (Apollo, Hasura) — Simmr discovery platform",
      "Django — Baby Tracker API, AMIR BLAQ admin",
      "MongoDB — GA curriculum projects",
      "ETL Pipelines — InvestCloud financial data (50+ institutions)",
      "Data Modeling — relational schema design",
    ],
  },
  {
    category: "Cloud & DevOps",
    items: [
      "AWS (Lambda@Edge, S3, CloudFront) — Simmr image pipeline",
      "Docker — Baby Tracker self-hosted deploys",
      "CI/CD — production release pipelines",
      "Vercel — Daily Wick, this portfolio",
      "Serverless Framework — Simmr infrastructure",
    ],
  },
  {
    category: "AI & Integrations",
    items: [
      "OpenAI API — Daily Wick trade analysis engine",
      "RAG / Vector Search — Daily Wick AI coaching pipeline (pgvector)",
      "LLM Integration — Daily Wick AI coach",
      "Prompt Engineering — Daily Wick AI insights",
      "Stripe — Daily Wick paid tiers, Simmr billing",
      "Twilio — Simmr MMS & verification",
      "Polygon.io — Daily Wick market data",
    ],
  },
  {
    category: "APIs & Tooling",
    items: [
      "REST APIs — across all production projects",
      "GraphQL — Simmr discovery platform",
      "Postman — API testing and documentation",
      "SQL (PostgreSQL, MySQL) — InvestCloud, Simmr, Baby Tracker",
      "Unit Testing — production test suites",
      "Technical Training — InvestCloud, General Assembly",
    ],
  },
];
