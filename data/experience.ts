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
    title: "Software Engineering Instructor & Curriculum Developer",
    company: "General Assembly",
    period: "October 2020 – Present",
    description: "Full-time & part-time Web Development Immersive · 9+ cohorts",
    achievements: [
      "Taught 1 full-time and 8+ part-time Web Development Immersive cohorts, instructing 150+ students in full-stack engineering across React, Node.js, Express, MongoDB, Python, and Django.",
      "Contributed to curriculum development for full-stack engineering programs, covering modern frameworks, software design patterns, and industry best practices.",
      "Led interview prep workshops and pop-up lectures on technical interviewing, whiteboarding, and job search strategy for students entering the engineering job market.",
      "Mentored students through capstone projects, code reviews, and career transitions into software engineering roles.",
    ],
    technologies: ["React", "Node.js", "Express", "MongoDB", "Python", "Django"],
    companyUrl: "https://generalassemb.ly",
    logo: "/logos/GA.webp",
    contract: false,
  },
  {
    title: "Technical Trainer & Software Engineer",
    company: "InvestCloud Inc.",
    period: "July 2018 – June 2025",
    description:
      "Enterprise fintech platform serving 50+ financial institutions · seven years supporting enterprise API integrations at scale",
    achievements: [
      "Debugged and resolved API integration issues for 100+ developers globally across REST services and data pipelines, cutting average resolution time by 40% through structured documentation and repeatable diagnostic workflows.",
      "Investigated production data inconsistencies and system failures across distributed services, identifying root causes and implementing fixes.",
      "Built internal tooling and ETL pipelines using PostgreSQL, MySQL, Python, and Groovy to automate operational workflows and reduce integration setup time by 40%.",
      "Partnered with engineering and product teams to diagnose platform issues, escalate defects, and validate fixes prior to release.",
      "Led technical training sessions for developers on API integration patterns, debugging strategies, and platform architecture.",
      "Authored internal documentation and operational runbooks used by engineering teams globally.",
    ],
    technologies: [
      "React",
      "TypeScript",
      "PostgreSQL",
      "MySQL",
      "Python",
      "Groovy",
      "REST APIs",
      "SOAP",
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
    title: "Co-Founder & CTO",
    company: "TOLO",
    period: "October 2022 – January 2025",
    description: "Mobile content discovery platform for independent artists.",
    achievements: [
      "Led end-to-end development of React Native (Expo) mobile app with Supabase backend — real-time subscriptions, role-based access, and media upload infrastructure.",
      "Built viral content ranking algorithm and improved feed performance by 40% through SWR caching.",
      "Directed sprint planning, code reviews, and iOS/Android deployments via Expo Application Services.",
    ],
    technologies: ["React Native", "Expo", "Supabase", "TypeScript", "Zustand", "SWR", "Segment"],
    companyUrl: "https://tolo.app",
    logo: "/logos/tolo.jpeg",
    contract: false,
  },
  {
    title: "Full Stack Engineer (Contract)",
    company: "Simmr",
    period: "July 2023 – December 2025",
    description: "Social discovery platform · 2,000+ active users",
    achievements: [
      "Designed and built APIs using Node.js, Apollo GraphQL, and Hasura supporting real-time platform features.",
      "Implemented notification systems and asynchronous job workers for event-driven messaging and platform alerts.",
      "Managed PostgreSQL schema migrations and built internal analytics workflows for operational visibility.",
      "Integrated third-party services including Twilio, Stripe, Mixpanel, and AWS SES for messaging, payments, and analytics.",
      "Deployed infrastructure using Docker and Serverless Framework to improve release consistency and environment reliability.",
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
    description: "Modernization and redevelopment of WinkIntel.com · production full-stack features",
    achievements: [
      "Contribute to the modernization and redevelopment of WinkIntel.com, building and improving production features across the application stack.",
      "Develop and maintain full-stack functionality using React, Next.js, Node.js, PostgreSQL, and cloud-based services, with a focus on maintainable and scalable implementation.",
      "Diagnose and resolve issues across existing application code, APIs, and data flows while supporting the transition to a modernized platform architecture.",
      "Collaborate directly with technical leadership to translate business and product requirements into production-ready engineering solutions.",
    ],
    technologies: ["React", "Next.js", "Node.js", "PostgreSQL", "TypeScript"],
    companyUrl: "https://www.winkintel.com",
    logo: "/logos/wink.png",
    contract: true,
  },
  {
    title: "Lead Full Stack Engineer (Contract)",
    company: "That Aisle",
    period: "September 2025 – Present",
    description: "Hair care product discovery app · iOS & Android · App Store",
    achievements: [
      "Rebuilt and upgraded production React Native app (iOS/Android) to React Native 0.81 and React 19 with TypeScript, Redux Toolkit, and Firebase backend.",
      "Migrated client’s product catalog from Excel to a structured Firestore schema, supporting 3,500+ products with full-text search, filtering, and virtual scrolling for performance.",
      "Built React + Vite admin dashboard with 14 management pages covering content moderation, user management, push notifications, product catalog, and partnership tracking.",
      "Implemented push notification system with Firebase Cloud Messaging, Firebase Functions, and FCM token management with real-time notification history.",
      "Engineered community forum with nested comments, barcode/QR scanning, emoji reactions, and a content moderation system with soft-delete and audit trails.",
      "Served as sole developer and technical advisor, guiding client on architecture decisions, data modeling, and platform strategy throughout two phases of development.",
    ],
    technologies: [
      "React Native",
      "React",
      "TypeScript",
      "Next.js",
      "Firebase",
      "Redux Toolkit",
      "React Navigation",
      "Vite",
      "Tailwind CSS",
      "React Query",
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
      "Built and modernized frontend UI components for Airbnb’s host management platform, improving the host onboarding and listing management experience.",
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
      "Built full-stack trading journal platform using Next.js 16, React 19, TypeScript, and TailwindCSS with Supabase and PostgreSQL backend.",
      "Developed trade analytics dashboard with candlestick chart visualization and market data integration via Polygon.io.",
      "Integrated OpenAI API with custom prompt engineering to surface AI-generated insights on trade patterns, execution quality, and psychological tendencies tied directly to P&L data.",
      "Designed relational database schema with row-level access control supporting secure multi-user SaaS architecture.",
      "Built automated CSV trade importer supporting multiple broker platforms, with header detection logic that identifies the source platform and maps records into the database schema automatically.",
    ],
    technologies: ["Next.js", "TypeScript", "Supabase", "OpenAI API", "Tailwind CSS"],
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
