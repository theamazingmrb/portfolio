export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
  companyUrl?: string;
  logo?: string;
  appStoreUrl?: string;
  contract?: boolean;
}

export interface SideProject {
  title: string;
  period: string;
  description: string;
  highlights: string[];
  technologies: string[];
  projectUrl?: string;
  githubUrl?: string;
  logo?: string;
}

export const fullTimeExperience: Experience[] = [
  {
    title: "Software Engineer & Technical Trainer",
    company: "InvestCloud Inc.",
    period: "July 2018 – June 2025",
    description:
      "Leading provider of digital financial services applications · Promoted through four roles over seven years",
    achievements: [
      "Built and maintained ETL pipelines and internal automation tools using PostgreSQL, MySQL, Python, and Groovy, improving data processing efficiency by 25% and cutting integration setup time by 40%.",
      "Designed and implemented SOAP/RESTful APIs and relational database models supporting enterprise-scale financial applications for 50+ institutions.",
      "Debugged and resolved integration issues for 100+ developers globally, reducing resolution time through documentation and repeatable runbooks.",
      "Partnered with Engineering, QA, and Product teams to diagnose root causes of production data issues and verify fixes before rollout, cutting production incidents by 30%.",
      "Led technical training for the broader engineering org on debugging, integration patterns, and best practices, improving team efficiency by 30%.",
      "Contributed to schema design, API standards, and design-system consistency across the platform.",
    ],
    technologies: [
      "PostgreSQL",
      "MySQL",
      "Python",
      "Groovy",
      "SOAP",
      "REST APIs",
      "ETL",
    ],
    companyUrl: "https://investcloud.com",
    logo: "/logos/IC-Logo.svg",
    contract: false,
  },
  {
    title: "Jr. Front End Developer",
    company: "BBDO Los Angeles",
    period: "2017 – 2018",
    description: "Major global advertising network known for award-winning campaigns.",
    achievements: [
      "Developed interactive web components and digital advertising assets for major brand campaigns using HTML, CSS, and JavaScript.",
      "Collaborated with creative and UX teams to deliver responsive, pixel-perfect campaign pages.",
      "Implemented reusable components and animation sequences to reduce development time across concurrent campaigns.",
    ],
    technologies: ["JavaScript", "HTML5", "CSS3", "React", "GSAP"],
    companyUrl: "https://bbdo.com",
    logo: "/logos/bbdo.jpeg",
    contract: false,
  },
];

export const ventures: Experience[] = [
  {
    title: "CTO & Co-Founder (Part-time, nights)",
    company: "TOLO",
    period: "October 2022 – January 2025",
    description: "Mobile content discovery platform for independent artists.",
    achievements: [
      "Led end-to-end development of a React Native (Expo) app with a Supabase backend, including real-time subscriptions, role-based access, and media upload infrastructure.",
      "Designed a viral content ranking algorithm and improved feed performance by 40% through SWR caching.",
      "Directed sprint planning, code reviews, and iOS/Android release management via Expo Application Services.",
    ],
    technologies: ["React Native", "Expo", "Supabase", "TypeScript", "Zustand", "SWR", "Segment"],
    companyUrl: "https://tolo.app",
    logo: "/logos/tolo.jpeg",
    contract: false,
  },
  {
    title: "Full Stack Engineer (Freelance)",
    company: "Simmr",
    period: "July 2023 – December 2025",
    description: "Social discovery platform · 2,000+ active users",
    achievements: [
      "Engineered scalable APIs and event-driven architecture using Apollo GraphQL, Hasura, and Node.js, including real-time notifications and async job workers.",
      "Built a global image caching pipeline using Sharp and S3, reducing bandwidth costs and improving load times by 40%.",
      "Integrated Twilio, Stripe, Mixpanel, and AWS SES for communications, payments, and analytics.",
      "Managed deployment and provisioning with Serverless Framework and Docker, automating migrations and reducing environment inconsistencies.",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Apollo GraphQL",
      "Hasura",
      "PostgreSQL",
      "AWS",
      "Twilio",
      "Stripe",
    ],
    companyUrl: "https://simmr.app",
    logo: "/logos/simmr-heart.png",
    contract: true,
  },
];

export const freelanceProjects: Experience[] = [
  {
    title: "Full Stack Developer (Contract)",
    company: "Wink, Inc.",
    period: "July 2026 – Present",
    description: "Full-stack development for enterprise B2B intelligence platform",
    achievements: [
      "Architected and delivered full-stack features for a SaaS platform serving enterprise clients, including user authentication, role-based permissions, and data management interfaces.",
      "Built responsive web applications using SvelteKit and TypeScript with a focus on type safety, maintainability, and scalable component architecture.",
      "Designed and implemented secure server-side APIs and database access layers with MySQL, ensuring data integrity and proper authorization controls.",
      "Participated in code reviews and contributed to engineering standards, improving code quality and team development practices.",
    ],
    technologies: ["SvelteKit", "Svelte", "TypeScript", "Node.js", "MySQL", "Git"],
    companyUrl: "https://www.winkintel.com",
    logo: "/logos/wink.png",
    contract: true,
  },
  {
    title: "Educator & Mentor",
    company: "General Assembly",
    period: "October 2020 – Present",
    description: "Part-time through 2025; full-time (contract-to-contract) since January 2026",
    achievements: [
      "Instructed 150+ students in full-stack development — React, Node.js, Express, MongoDB, Python, Django.",
      "Designed project-based curriculum and mentored students through portfolio projects, technical interviews, and career transitions.",
      "Assisted AI and Solutions Architect cohorts and led \"Intro to AI Prompting\" seminars.",
    ],
    technologies: ["React", "Node.js", "Express", "MongoDB", "Python", "Django"],
    companyUrl: "https://generalassemb.ly",
    logo: "/logos/GA.webp",
    contract: true,
  },
  {
    title: "Founder & Full Stack Engineer",
    company: "Daily Wick",
    period: "April 2025 – Present",
    description: "Trading journal and analytics platform for active traders · Solo build",
    achievements: [
      "Built a full-stack SaaS with Next.js 15, Supabase, and PostgreSQL, including 38+ row-level security policies and a normalized schema with triggers and stored procedures.",
      "Built a retrieval-augmented AI coach using OpenAI embeddings and pgvector, generating context-aware feedback grounded in each trader's own logged history.",
      "Developed interactive TradingView charts with real-time Polygon.io market data integration for session analysis and market replay.",
      "Deployed to Vercel with automated CI/CD and zero-downtime release processes.",
    ],
    technologies: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "OpenAI API", "pgvector", "Polygon.io", "Tailwind CSS"],
    companyUrl: "https://dailywick.app",
    logo: "/projects/daily-wick.png",
    contract: false,
  },
  {
    title: "Full Stack Engineer (Freelance)",
    company: "That Aisle",
    period: "September 2025 – Present",
    description: "Hair care discovery platform · React Native mobile app + React admin portal",
    achievements: [
      "Built a cross-platform mobile app using React Native (Expo) with a Firebase backend, including Firestore, Auth, push notifications, and Cloud Storage.",
      "Developed a React admin portal integrating Algolia search with Firebase Cloud Functions for real-time product sync.",
      "Navigated the full iOS/Android App Store submission pipeline, including guideline compliance and push notification certification.",
    ],
    technologies: [
      "React Native",
      "Expo",
      "React",
      "TypeScript",
      "Firebase",
      "Algolia",
      "Redux Toolkit",
      "Tailwind CSS",
    ],
    companyUrl: "https://www.thataisle.com/",
    appStoreUrl: "https://apps.apple.com/ca/app/that-aisle/id6504048646",
    logo: "/projects/that_aisle/thataisle.png",
    contract: true,
  },
  {
    title: "Front End Developer (Contract)",
    company: "Airbnb",
    period: "2017",
    description:
      "Short-term contract focused on modernizing Airbnb's host ambassador platform with measurable engagement and support improvements.",
    achievements: [
      "Built and modernized frontend UI components for Airbnb's host management platform, improving the host onboarding and listing management experience.",
    ],
    technologies: ["JavaScript", "React", "HTML", "CSS", "SCSS", "Ruby on Rails"],
    companyUrl: "https://airbnb.com",
    logo: "/logos/abnb.png",
    contract: true,
  },
  {
    title: "Full Stack Engineer (Contract)",
    company: "AMIR BLAQ",
    period: "2024",
    description:
      "Full-stack e-commerce platform with Next.js frontend and Django admin portal for luxury fashion brand.",
    achievements: [
      "Built responsive dark-themed UI with interactive product displays.",
      "Implemented Django REST API for product management.",
      "Created custom admin portal for client inventory management.",
    ],
    technologies: ["Next.js", "Django", "PostgreSQL", "AWS S3"],
    companyUrl: "https://amirb-ui.vercel.app/",
    logo: "/projects/amir-b-preview.png",
    contract: true,
  },
  {
    title: "Full Stack Engineer (Contract)",
    company: "Love & Service 1st",
    period: "2024",
    description: "Professional nonprofit landing page with community resources and mission-driven content.",
    achievements: [
      "Designed responsive landing page with Next.js and Tailwind CSS.",
      "Created mission-driven content sections for community engagement.",
      "Implemented resource links and community initiative connections.",
    ],
    technologies: ["Next.js", "Tailwind CSS"],
    companyUrl: "https://loveandservice1st.com/",
    logo: "/projects/love-and-service-first.png",
    contract: true,
  },
];

export const sideProjects: SideProject[] = [
  {
    title: "Daily Wick",
    period: "April 2025 – Present",
    description:
      "AI-assisted trading journal that helps traders log, analyze, and improve decision making with actionable insights.",
    highlights: [
      "Built a full-stack SaaS with Next.js 15, Supabase, and PostgreSQL, including 38+ row-level security policies and a normalized schema with triggers and stored procedures.",
      "Built a retrieval-augmented AI coach using OpenAI embeddings and pgvector, generating context-aware feedback grounded in each trader's own logged history.",
      "Developed interactive TradingView charts with real-time Polygon.io market data integration for session analysis and market replay.",
      "Deployed to Vercel with automated CI/CD and zero-downtime release processes.",
    ],
    technologies: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "OpenAI API", "pgvector", "Polygon.io", "Tailwind CSS"],
    projectUrl: "https://dailywick.app",
    githubUrl: "https://github.com/theamazingmrb/daily-wick",
    logo: "/projects/daily-wick.png",
  },
  {
    title: "Baby Tracker",
    period: "2025 – Present",
    description: "Privacy-first baby tracking platform with Django REST, PostgreSQL, and AI-powered insights.",
    highlights: [
      "Multi-tenant architecture with complete data isolation",
      "AI insights for feeding and sleep patterns",
      "Comprehensive activity tracking",
      "Dockerized deploys for AWS EC2",
    ],
    technologies: ["Django", "PostgreSQL", "Docker", "Next.js", "Nginx"],
    projectUrl: "http://babytracker.xyz",
    githubUrl: "https://github.com/theamazingmrb/baby-tracker-api",
    logo: "/projects/baby-tracker.png",
  },
];
