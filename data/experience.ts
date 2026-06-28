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
    title: "Educator & Mentor",
    company: "General Assembly",
    period: "October 2020 - Present",
    description: "Led full-time software engineering bootcamps, training aspiring developers in modern full-stack web development.",
    achievements: [
      "Instructed 150+ students in full-stack development using React, Node.js, Express, MongoDB",
      "Designed project-based lessons emphasizing scalability and real-world application",
      "Mentored students 1-on-1 through portfolio projects and technical interviews",
      "Collaborated with instructional teams to evolve curriculum content"
    ],
    technologies: ["React", "Node.js", "Express", "MongoDB", "Python", "Django"],
    companyUrl: "https://generalassemb.ly",
    logo: "/logos/GA.webp"
  },
  {
    title: "Software Engineer and Technical Trainer",
    company: "InvestCloud Inc.",
    period: "July 2018 - June 2025",
    description: "Leading provider of flexible and fully integrated digital applets for financial services. Promoted through four roles over seven years.",
    achievements: [
      "Developed and maintained ETL pipelines for financial data transformation using PostgreSQL, MySQL, Python, and Groovy",
      "Designed and implemented SOAP and RESTful APIs and relational database models for enterprise-scale applications",
      "Built modular UI components and dashboards for client platforms, enhancing usability and accessibility",
      "Automated batch data workflows and integrations, reducing manual operations by 40%",
      "Trained 100+ developers across global teams in best practices and integration workflows"
    ],
    technologies: ["React", "TypeScript", "PostgreSQL", "Python", "Groovy", "REST APIs", "SOAP"],
    companyUrl: "https://investcloud.com",
    logo: "/logos/IC-Logo.svg"
  },
  {
    title: "Jr Front End Developer",
    company: "BBDO Los Angeles",
    period: "October 2017 - July 2018",
    description: "A major global advertising network known for award-winning campaigns.",
    achievements: [
      "Developed interactive campaign pages and microsites using JavaScript, HTML5, and CSS3",
      "Collaborated with creative and UX teams to deliver pixel-perfect, responsive designs",
      "Implemented reusable components and animation sequences reducing development time by 20%",
      "Partnered with QA and production teams for high-profile brand campaigns"
    ],
    technologies: ["JavaScript", "HTML5", "CSS3", "React"],
    companyUrl: "https://bbdo.com",
    logo: "/logos/bbdo.jpeg"
  }
];

export const ventures: Experience[] = [
  {
    title: "CTO and Co-Founder",
    company: "TOLO",
    period: "October 2022 - January 2025",
    description: "Startup building a content discovery platform for underground artists. Led technical execution from zero to App Store launch.",
    achievements: [
      "Led end-to-end development of React Native (Expo) mobile app on a Supabase backend with real-time subscriptions and role-based access",
      "Designed a viral content ranking algorithm and improved feed performance by 40% through SWR caching",
      "Owned sprints, backlog, code review, and iOS/Android releases through Expo Application Services",
      "Built swipe-based discovery UX with gesture-driven animations on a Zustand state store"
    ],
    technologies: ["React Native", "Expo", "Supabase", "TypeScript", "Zustand", "SWR", "Segment"],
    companyUrl: "https://tolo.app",
    logo: "/logos/tolo.jpeg"
  }
];

export const freelanceProjects: Experience[] = [
  {
    title: "That Aisle",
    company: "Mobile App Development Client",
    period: "2025-2026",
    description: "Comprehensive React Native mobile application and React admin portal for hair product discovery and community engagement.",
    achievements: [
      "Built React Native mobile app with emoji reactions, community forum, and advanced user profiles",
      "Created React admin portal with advanced reporting, content moderation, and partnership management",
      "Implemented Firebase real-time features across both mobile and web platforms",
      "Developed comprehensive product catalog system with 3,500+ products and custom search",
      "Delivered sole-developer across two phases from full app rebuild to live App Store release",
      "Integrated error logging system and real-time notifications"
    ],
    technologies: ["React Native", "React", "TypeScript", "Firebase", "Redux", "React Navigation", "Vite", "Tailwind CSS", "React Query"],
    companyUrl: "https://www.thataisle.com/",
    appStoreUrl: "https://apps.apple.com/ca/app/that-aisle/id6504048646",
    logo: "/projects/that_aisle/thataisle.png"
  },
  {
    title: "Simmr",
    company: "Full Stack Engineer (Freelance)",
    period: "July 2023 – January 2026",
    description: "A social platform serving the non-monogamous and polyamorous communities.",
    achievements: [
      "Engineered scalable discovery platform serving 2,000+ users with React, TypeScript, and Apollo GraphQL",
      "Designed and deployed AWS Lambda@Edge functions and CloudFront integrations for SEO performance",
      "Built global image caching pipeline using Sharp and S3, reducing bandwidth costs by 40%",
      "Developed event-driven architecture with Hasura event triggers and asynchronous job workers",
      "Integrated Twilio, Stripe, Mixpanel, and AWS SES for communication, payments, and analytics",
      "Managed infrastructure using Serverless Framework, Docker, and PostgreSQL"
    ],
    technologies: ["React", "TypeScript", "Next.js", "Apollo GraphQL", "Hasura", "AWS", "Twilio", "Stripe"],
    companyUrl: "https://simmr.app",
    logo: "/logos/simmr-heart.png"
  },
  {
    title: "Software Engineer",
    company: "Airbnb",
    period: "2020 - 2021",
    description: "Modernized Airbnb's host ambassador platform with significant improvements in user engagement and support efficiency.",
    achievements: [
      "Led full-stack modernization of host ambassador platform improving user engagement by 25%",
      "Implemented React components and Node.js APIs for enhanced platform functionality",
      "Optimized support workflows reducing response times and improving host satisfaction",
      "Collaborated with cross-functional teams to deliver scalable solutions"
    ],
    technologies: ["React", "Node.js", "Express", "MongoDB", "Ruby on Rails"],
    companyUrl: "https://airbnb.com",
    logo: "/projects/airbnb.png"
  },
  {
    title: "AMIR BLAQ",
    company: "Freelance Project",
    period: "2024",
    description: "Full-stack e-commerce platform with Next.js frontend and Django admin portal for luxury fashion brand.",
    achievements: [
      "Built responsive dark-themed UI with interactive product displays",
      "Implemented Django REST API for product management",
      "Created custom admin portal for client inventory management"
    ],
    technologies: ["Next.js", "Django", "PostgreSQL", "AWS S3"],
    companyUrl: "https://amirb-ui.vercel.app/",
    logo: "/projects/amir-b-preview.png"
  },
  {
    title: "Love & Service 1st",
    company: "Nonprofit Client",
    period: "2024",
    description: "Professional nonprofit landing page with community resources and mission-driven content.",
    achievements: [
      "Designed responsive landing page with Next.js and Tailwind CSS",
      "Created mission-driven content sections for community engagement",
      "Implemented resource links and community initiative connections"
    ],
    technologies: ["Next.js", "Tailwind CSS"],
    companyUrl: "https://loveandservice1st.com/",
    logo: "/projects/love-and-service-first.png"
  }
];

export const sideProjects: SideProject[] = [
  {
    title: "Daily Wick",
    period: "April 2025 - Present",
    description: "AI-assisted trading journal that helps traders log, analyze, and improve decision making with actionable insights.",
    highlights: [
      "Built full stack with Next.js, TypeScript, and Supabase",
      "AI-assisted trade reviews reduce manual analysis time",
      "Interactive charting for trade and performance insights",
      "Accessible UI with responsive layout and dark mode"
    ],
    technologies: ["Next.js", "TypeScript", "Supabase", "OpenAI API", "Tailwind CSS"],
    projectUrl: "https://dailywick.app",
    githubUrl: "https://github.com/theamazingmrb/daily-wick",
    logo: "/projects/daily-wick.png"
  },
  {
    title: "Baby Tracker",
    period: "2025 - Present",
    description: "Privacy-first baby tracking platform with Django REST, PostgreSQL, and AI-powered insights.",
    highlights: [
      "Multi-tenant architecture with complete data isolation",
      "AI insights for feeding and sleep patterns",
      "Comprehensive activity tracking",
      "Dockerized deploys for AWS EC2"
    ],
    technologies: ["Django", "PostgreSQL", "Docker", "Next.js", "Nginx"],
    projectUrl: "http://babytracker.xyz",
    githubUrl: "https://github.com/theamazingmrb/baby-tracker-api",
    logo: "/projects/baby-tracker.png"
  }
];
