export interface SkillCategory {
  category: string;
  items: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    items: [
      "React / Next.js — Daily Wick, Simmr, That Aisle",
      "TypeScript — all production projects since 2020",
      "Tailwind CSS — this portfolio, Love & Service 1st",
      "React Native — That Aisle (App Store live), TOLO",
    ],
  },
  {
    category: "Backend & APIs",
    items: [
      "Node.js / Express — Simmr, TOLO API layer",
      "Python / Django — Baby Tracker API, AMIR BLAQ admin",
      "PostgreSQL — InvestCloud ($2B/day), Simmr, Baby Tracker",
      "GraphQL / Apollo — Simmr discovery platform",
    ],
  },
  {
    category: "Cloud & Infrastructure",
    items: [
      "AWS (Lambda@Edge, S3, CloudFront) — Simmr image pipeline",
      "Vercel — Daily Wick, this portfolio",
      "Docker / Nginx — Baby Tracker self-hosted deploys",
      "Firebase — That Aisle real-time features",
    ],
  },
  {
    category: "AI & Integrations",
    items: [
      "OpenAI API — Daily Wick trade analysis engine",
      "Stripe — Simmr subscription billing",
      "Twilio — Simmr MMS & verification",
      "Segment — TOLO analytics tracking",
    ],
  },
  {
    category: "Data & Performance",
    items: [
      "Redis — Daily Wick caching layer",
      "SQS — Daily Wick async task queues",
      "SWR / Zustand — TOLO feed performance (+40%)",
      "ETL Pipelines — InvestCloud financial data (50+ institutions)",
    ],
  },
  {
    category: "Legacy & Breadth",
    items: [
      "Ruby on Rails — Airbnb ambassador platform",
      "Groovy / GlassFish — InvestCloud enterprise services",
      "MongoDB — Drink Drank LA, GA curriculum projects",
      "GSAP / HTML5 — BBDO interactive ad campaigns",
    ],
  },
];
