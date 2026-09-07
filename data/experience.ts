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
    description: "Part-time · 9+ cohorts · 150+ students",
    achievements: [
      "Owned full-stack curriculum delivery for 150+ students across 9+ cohorts (React, Node.js, Express, MongoDB, Python, Django).",
      "Led interview-prep workshops that consistently landed students in their first engineering roles.",
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
      "Owned API integrations across 50+ financial institutions — resolving issues for 100+ developers globally and cutting resolution time by 40% through runbooks and repeatable workflows.",
      "Led technical training and onboarding on REST/SOAP integration patterns and platform architecture, shortening new-developer ramp-up across global engineering teams.",
      "Built internal tooling and ETL pipelines with PostgreSQL, MySQL, Python, and Groovy, cutting integration setup time by 40%.",
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
      "Led technical execution from zero to App Store launch — React Native (Expo), Supabase, and a viral-ranking algorithm that improved feed performance by 40% via SWR caching.",
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
      "Owned API design, schema migration, and infrastructure for a platform serving 2,000+ active users (Node.js, Apollo GraphQL, Hasura, PostgreSQL, AWS).",
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
    title: "Lead Full Stack Engineer (Contract)",
    company: "That Aisle",
    period: "October 2024 – Present",
    description: "Hair care product discovery app · iOS & Android · App Store",
    achievements: [
      "Lead engineer and sole technical advisor — own architecture, data modeling, and platform strategy as the developer of record.",
      "Rebuilt and shipped the production React Native app to React Native 0.81 and React 19 (TypeScript, Redux Toolkit, Firebase) and migrated the product catalog to a Firestore schema supporting 3,500+ products with full-text search.",
      "Designed and built a React + Vite admin dashboard (14 pages) covering content moderation, user management, push notifications, catalog, and partnership tracking.",
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
