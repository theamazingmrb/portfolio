// Unified project data structure that serves both the main projects page and individual project pages
export interface Project {
  // Core fields (required)
  id: string;
  title: string;
  description: string;
  image: string;
  projectType?: "Personal" | "Client" | "Venture" | "Employment";

  // Detailed information
  details: string;
  url?: string;
  appStoreUrl?: string;
  relatedAppUrl?: string;
  githubUrl?: string;

  // Portfolio display fields (normalized)
  techStack: string[]; // Unified field name
  features?: string[];
  metrics?: string[];
  businessImpact?: string;
  images?: string[];

  // Project page specific fields
  contributions?: string[];
  challenges?: string;
  outcomes?: string;
}

export const projects: Project[] = [
  {
    id: "smart-trader",
    title: "Smart Trader",
    description: "AI-powered trading journal with analytics and trade performance insights.",
    image: "/projects/smart-trader.png",
    details: "Smart Trader is a professional-grade trading journal SaaS for institutional and retail traders. Built with Next.js, TypeScript, and Supabase, the platform turns raw trade logs into actionable insights through AI-powered analysis and interactive dashboards.\n\nSecurity and performance were core from the start: Supabase authentication, Redis caching, and SQS-based task queues ensure fast, reliable analysis at scale. Traders track long/short positions, run performance analytics, and use checklists and risk tools to enforce consistency.\n\nBy integrating GPT-based feedback, users save hours per week and improve trade discipline, making better decisions with clear, data-backed context.",
    url: "https://smarttrader.tech",
    techStack: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "AWS",
      "Redis",
      "SQS",
      "Tailwind CSS",
      "OpenAI API",
      "Chart.js"
    ],
    features: [
      "AI-powered trade feedback for execution and risk",
      "Interactive dashboards and custom charts",
      "Trade journal with tagging and notes",
      "Economic calendar and market events",
      "Checklists and risk calculator",
      "Responsive UI with dark mode",
      "Secure auth with Supabase"
    ],
    images: [
      "/projects/smart-trader.png",
      "/projects/smart-trader-dashboard.png",
      "/projects/smart-trader-risk-calculator.png"
    ],
    metrics: [
      "Early Access: 10-15 Active Traders",
      "100% Uptime Since Launch",
      "10+ Key Features Implemented",
      "Positive Initial User Feedback"
    ],
    businessImpact: "Automates journaling and surfaces AI insights that boost consistency and profitability for active traders.",

    // Project page specific fields
    contributions: [
      "Designed and implemented the entire front-end architecture using React and TypeScript",
      "Created a responsive dashboard with interactive charts for trade visualization",
      "Integrated AI analysis features to identify trading patterns and suggest improvements",
      "Implemented real-time data synchronization with WebSockets"
    ],
    challenges: "Creating a responsive and intuitive interface for complex financial data visualization while ensuring real-time updates and data consistency.",
    outcomes: "The application helps traders identify patterns in their trading behavior, leading to more informed decisions and improved trading performance."
  },
  {
    id: "baby-tracker",
    title: "Baby Tracker",
    description: "A privacy-first baby tracking solution helping parents monitor feedings, diapers, sleep, growth milestones, and more.",
    image: "/projects/baby-tracker.png",
    details: "Baby Tracker is a self-hostable, privacy-focused API and UI for tracking feeding, sleep, growth, and milestones. The backend uses Django REST Framework with a multi-tenant architecture and JWT auth; the frontend leverages Next.js.\n\nDockerized deployments with Nginx make it easy to run on AWS EC2 or locally. The API is fully documented (OpenAPI) and covered by comprehensive tests.\n\nAI modules analyze history to suggest routines and patterns without compromising data ownership.",
    url: "http://babytracker.xyz",
    githubUrl: "https://github.com/theamazingmrb/baby-tracker-api",
    techStack: [
      "Django",
      "Django REST",
      "PostgreSQL",
      "JWT",
      "Docker",
      "Next.js",
      "Nginx",
      "Node.js",
      "Pandas",
      "OpenAPI"
    ],
    features: [
      "Multi-tenant architecture with strict isolation",
      "AI insights for feeding and sleep patterns",
      "Comprehensive activity tracking",
      "Interactive OpenAPI docs",
      "Dockerized deploys for AWS EC2"
    ],
    images: [
      "/projects/baby-tracker.png",
      "/projects/baby-tracker-api-examples.png",
      "/projects/baby-tracker-features.png"
    ],
    metrics: ["90%+ Test Coverage", "Multi-layered Privacy Controls", "AI-driven Pattern Recognition"],
    businessImpact: "Gives parents a secure, self-hosted alternative to commercial apps while delivering actionable guidance.",

    // Project page specific fields
    contributions: [
      "Designed and implemented a multi-tenant architecture with robust security measures",
      "Developed AI insights module for analyzing historical data and providing recommendations",
      "Created comprehensive API documentation using OpenAPI (drf-spectacular)",
      "Implemented Docker deployment for easy self-hosting on AWS EC2 or local environments"
    ],
    challenges: "Building a secure, privacy-focused alternative to commercial baby tracking apps while maintaining feature parity and ensuring complete data isolation between users.",
    outcomes: "Created a fully-featured baby tracking solution that empowers parents with complete data ownership while delivering powerful insights to help establish healthy routines."
  },
  {
    id: "simmr",
    title: "Simmr",
    description: "A privacy-first social discovery platform with user availability planning, couples features, and a high-performance, resilient architecture.",
    image: "/projects/simmr-about.png",
    projectType: "Client",
    details: "Simmr is a niche social platform built with React, TypeScript, Node.js, GraphQL, and PostgreSQL on AWS. The experience centers on privacy, trust, and meaningful connections.\n\nKey engineering work included a comprehensive plans and availability system, client-side distance filtering for discovery, specialized couples account flows, and Lambda@Edge rendering for SEO and rich previews. The platform features a sophisticated image optimization system with context-aware sizing and global caching to ensure consistent performance across devices.\n\nDefensive programming techniques including error boundaries, retry logic, and memory management protect the UI from crashes even when handling thousands of profiles. The platform's messaging system supports rich media sharing with MMS capabilities and public/private bucket management for media assets.\n\nThe result was a performant, reliable product that scaled smoothly, earned user trust, and facilitated meaningful connections through innovative features like the availability calendar and couples discovery.",
    url: "https://simmr.co",
    githubUrl: "https://github.com/theamazingmrb/simmr-platform",
    techStack: [
      "React",
      "TypeScript",
      "Node.js",
      "GraphQL",
      "PostgreSQL",
      "AWS",
      "Lambda@Edge",
      "Redis",
      "SQS",
      "CloudFormation",
      "Twilio API",
      "S3 Media Management"
    ],
    features: [
      "Plans & Availability Calendar System",
      "Couples Account Management with Partner Flows",
      "Distance-based Discovery Filtering",
      "Global Image Caching with Context-aware Sizing",
      "SEO-friendly Previews via Lambda@Edge",
      "MMS Support for Rich Media Messaging",
      "Error Boundaries and Defensive Programming",
      "Animated UI Elements for Enhanced Engagement",
      "Streamlined Onboarding with Conditional Flows"
    ],
    images: [
      "/projects/simmr-app-store.png",
      "/projects/simmr-about.png"
    ],
    metrics: [
      "Thousands of Verified Users",
      "300+ Monthly Events",
      "95% Trust Rating",
      "40% Increase in User Engagement with Plans Feature",
      "30% Growth in Couple Accounts"
    ],
    businessImpact: "Set a new bar for privacy and safety in niche social platforms, improving trust, reliability, and engagement.",

    // Project page specific fields
    contributions: [
      "Built the web application using React and Node.js",
      "Implemented secure authentication and user verification",
      "Developed features for community building and event management"
    ],
    challenges: "Creating a safe and inclusive platform while implementing robust privacy and security features.",
    outcomes: "Established a thriving community with active user engagement and positive feedback on the platform's features and security."
  },
  {
    id: "tolo",
    title: "TOLO",
    description: "A platform helping underground artists and content creators gain visibility through fair algorithm-based content discovery.",
    image: "/projects/tolo-preview.png",
    details: "TOLO is a React Native mobile platform that helps underground artists get discovered through a multi-tiered ranking system (Feed, Trending, Viral) rather than pure popularity metrics.\n\nBacked by Supabase with state management via Zustand, the system supports real-time content interaction, creator profiles, and multi-format content uploads. The platform uses SWR for data fetching and Segment for analytics tracking.",
    url: "https://apps.apple.com/us/app/tolo-social/id1668022575",
    techStack: ["React Native", "Expo", "Supabase", "SWR", "Zustand", "Segment Analytics"],
    features: [
      "Multi-tiered content promotion system (Feed, Trending, Viral)",
      "Multi-format content support (audio, video, images)",
      "Content tagging and categorization",
      "User engagement features (save, share, promote)",
      "Creator profiles with customizable links"
    ],
    images: [
      "/projects/tolo-preview.png"
    ],
    metrics: [
      "Multi-format content support",
      "Engagement-based ranking",
      "Creator-focused platform",
      "Community-driven discovery"
    ],
    businessImpact: "Provides underground artists with a platform for content distribution and audience building through a transparent, engagement-driven promotion system.",

    // Project page specific fields
    contributions: [
      "Led development of the React Native mobile app for iOS and Android",
      "Implemented multi-format content support (audio, video, images) with engagement-based promotion",
      "Built user engagement features including content sharing, saving, and promotion"
    ],
    challenges: "Creating a fair content discovery algorithm that balances new creator visibility with content quality, while maintaining performance across multiple content formats.",
    outcomes: "Successfully launched a platform that helps underground artists gain visibility through a transparent promotion system with features for content sharing and community engagement."
  },
  {
    id: "investcloud",
    title: "InvestCloud",
    description: "Enterprise fintech engineering for 50+ institutions processing $2B+ in assets daily with secure dashboards and ETL.",
    image: "/logos/IC-Logo.svg",
    details: "At InvestCloud, I built financial dashboards, ETL pipelines, and APIs for clients like Raymond James and Neuberger Berman. Work spanned schema design, ingestion, and UI integration.\n\nTech included Groovy services on GlassFish, Oracle/PostgreSQL/MySQL for data, and modern JS for front-end modules. I also led training and onboarding, creating documentation and reusable templates to accelerate delivery.\n\nReliability, security, and performance were the priority across all client implementations.",
    techStack: [
      "Groovy",
      "GlassFish",
      "Oracle",
      "PostgreSQL",
      "MySQL",
      "JavaScript",
      "GraphQL",
      "ETL"
    ],
    metrics: [
      "50+ Financial Institutions",
      "$2B+ Daily Assets Processed",
      "99.9% Uptime",
      "40% Faster Dev Cycles"
    ],
    businessImpact: "Delivered secure, scalable fintech tools that streamlined operations and improved client satisfaction.",

    // Project page specific fields
    contributions: [
      "Built ETL pipelines for transactions, holdings, and account data",
      "Developed RESTful services and contributed to relational schema design",
      "Created developer onboarding programs covering ETL, data mapping, and integration workflows",
      "Led workshops on REST API design, data quality, and troubleshooting processes"
    ],
    challenges: "Handling large volumes of financial data while ensuring accuracy, security, and real-time processing. Additionally, creating effective training materials for complex integration workflows.",
    outcomes: "Delivered robust financial solutions that improved data processing efficiency and provided better insights for financial advisors. Reduced ramp-up time for new developers through improved documentation and training."
  },
  {
    id: "love-service",
    title: "Love & Service 1st",
    description: "A nonprofit landing page with links to community initiatives and resources.",
    image: "/projects/love-and-service-first.png",
    projectType: "Client",
    details: "Love & Service 1st is a nonprofit landing site built to provide a professional, welcoming presence online. The page is lightweight and responsive, with sections for mission statement, resources, and direct links to community initiatives.\n\nWhile simple in scope, it highlights the ability to deliver polished, production-ready sites quickly for nonprofits with limited budgets or timelines.",
    url: "https://loveandservice1st.com/",
    techStack: ["Next.js", "Tailwind CSS"],
    features: [
      "Responsive landing page",
      "Mission-driven content",
      "Community resource links"
    ],
    images: ["/projects/love-and-service-first.png", "/projects/las1-pay-it-forward.png", "/projects/las1-about.png"],
    businessImpact: "Gave the nonprofit a credible online presence, supporting outreach and community engagement.",

    // Project page specific fields
    contributions: [
      "Designed and built a responsive landing page with Next.js and Tailwind CSS",
      "Created mission-driven content sections for community engagement",
      "Implemented resource links and community initiative connections"
    ],
    challenges: "Delivering a polished, production-ready site quickly for a nonprofit with limited budget and timeline.",
    outcomes: "Gave the nonprofit a credible online presence, supporting outreach and community engagement."
  },
  {
    id: "thataisle",
    title: "That Aisle - Complete Platform Solution",
    description: "Built the React Native mobile app and React admin portal for a hair product discovery and community platform — delivering the full ecosystem from consumer experience to platform operations.",
    image: "/projects/that_aisle/TA_App Screens_6.5 Display_Frame_1.png",
    projectType: "Client",
    details: "That Aisle is a hair product discovery and community platform that helps users find the right products for their hair type, share recommendations, and connect with others on their hair care journey.\n\nAs the lead freelance developer, I built two core pieces of their platform: a React Native mobile app and a React-based admin portal. The mobile app is the consumer-facing product — featuring an emoji reaction system, community forum with nested comments, user profiles with favorites and onboarding flows, and real-time updates powered by Firebase. I contributed 200+ commits standardizing UI components and building out core features.\n\nThe admin portal gives the That Aisle team full control over their platform operations — including product catalog management for 3,500+ products, content moderation with soft-delete and restoration, user management, partnership tracking, and real-time error logging synced from the mobile app. Together, these two applications form the complete ecosystem the client uses to run and grow their business.",
    url: "https://www.thataisle.com/",
    appStoreUrl: "https://apps.apple.com/ca/app/that-aisle/id6504048646",
    techStack: ["React Native", "React", "TypeScript", "Next.js", "Firebase", "Redux", "React Navigation", "Vite", "Tailwind CSS", "React Query"],
    features: [
      "React Native mobile app with emoji reactions and community forum",
      "React admin portal with advanced reporting and content moderation",
      "Enhanced user profiles with favorites and authentication flows",
      "Product catalog management with 3,500+ products and custom search",
      "Partnership management system with status tracking",
      "Real-time features with Firebase integration across platforms",
      "Advanced reporting system with soft-delete content restoration",
      "Cross-platform data synchronization and notifications",
      "Standardized UI components and modal designs"
    ],
    images: [
      "/projects/that_aisle/TA_App Screens_6.5 Display_Frame_1.png",
      "/projects/that_aisle/TA_App Screens_6.5 Display_Frame_2.png",
      "/projects/that_aisle/TA_App Screens_6.5 Display_Frame_3.png",
      "/projects/that_aisle/TA_App Screens_6.5 Display_Frame_4.png",
      "/projects/that_aisle/TA_App Screens_6.5 Display_Frame_5.png"
    ],
    metrics: [
      "200+ commits with standardized UI across mobile app",
      "3,500+ products in admin catalog management",
      "Real-time emoji reactions and forum features",
      "Advanced content moderation and reporting systems",
      "Cross-platform Firebase integration",
      "Partnership management and user administration"
    ],
    businessImpact: "Delivered a complete platform solution with mobile app for community engagement and admin portal for efficient platform management, content moderation, and partnership coordination.",

    // Project page specific fields
    contributions: [
      "Built React Native mobile app with advanced emoji reaction system and community forum",
      "Created React admin portal with comprehensive user management and content moderation",
      "Implemented partnership management system with status tracking and product catalog",
      "Developed cross-platform Firebase integration for real-time features and data sync",
      "Standardized UI components across 200+ commits for consistent user experience",
      "Integrated advanced reporting system with soft-delete content restoration"
    ],
    challenges: "Building a comprehensive platform solution with both mobile app and admin portal while maintaining consistent UI/UX, real-time synchronization, and managing large-scale product catalog with content moderation.",
    outcomes: "Successfully delivered a complete ecosystem with mobile app deployed to App Store and powerful admin portal enabling efficient platform management and community engagement."
  },
  {
    id: "amirblaq",
    title: "AMIR BLAQ",
    description: "A full-stack luxury fashion e-commerce platform with Next.js frontend and Django admin portal for content management.",
    image: "/projects/amir-b-preview.png",
    projectType: "Client",
    details: "AMIR BLAQ is a comprehensive e-commerce solution featuring a Next.js/React frontend with a sophisticated dark theme design and a Django backend admin portal that allows the client to manage products. The system includes RESTful APIs for product management, AWS S3 integration for image storage, and a custom admin interface for content management.",
    url: "https://amirb-ui.vercel.app/",
    githubUrl: "https://github.com/theamazingmrb/amir-blaq",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Django", "Django REST Framework", "PostgreSQL", "AWS S3", "Vercel"],
    features: [
      "Next.js frontend with responsive dark-themed UI and interactive product displays",
      "Django backend with REST API for product management and content administration",
      "AWS S3 integration for scalable product image storage",
      "Custom admin portal for product inventory management",
      "Database models with categorization for kids and adults product lines",
      "Deployed frontend to Vercel and backend to cloud provider with PostgreSQL database"
    ],
    images: [
      "/projects/amir-b-preview.png"
    ],
    metrics: [
      "Seamless Product Management",
      "Responsive Dark Theme Design",
      "Integrated Content Administration"
    ],
    businessImpact: "Successfully delivered a full-stack e-commerce platform with an intuitive shopping experience on the frontend and a powerful admin portal that empowers the client to manage their product catalog without technical assistance.",

    // Project page specific fields
    contributions: [
      "Developed a Next.js frontend with responsive dark-themed UI and interactive product displays",
      "Built a Django backend with REST API for product management and content administration",
      "Implemented AWS S3 integration for scalable product image storage",
      "Created a custom admin portal allowing the client to easily manage product inventory",
      "Designed database models with categorization for kids and adults product lines",
      "Fixed critical hydration issues to ensure consistent server-side and client-side rendering",
      "Deployed the frontend to Vercel and backend to a cloud provider with PostgreSQL database"
    ],
    challenges: "Creating a seamless integration between the headless Django backend and the Next.js frontend while ensuring proper data flow and image management. Additionally, implementing a dark theme across all components while maintaining accessibility and resolving complex React hydration issues.",
    outcomes: "Successfully delivered a full-stack e-commerce platform with an intuitive shopping experience on the frontend and a powerful admin portal that empowers the client to manage their product catalog without technical assistance."
  }
];

// Helper functions to get projects for different parts of the site
export function getProjectById(id: string): Project | undefined {
  return projects.find(project => project.id === id);
}

export function getProjectsForPortfolio() {
  return projects;
}

export function getProjectsForProjectsPage() {
  // Filter out work experiences if needed
  const filteredProjects = projects.filter(project =>
    !['investcloud', 'bbdo'].includes(project.id)
  );
  return filteredProjects;
}

// Convert between data formats if needed
export function projectToProjectPageFormat(project: Project) {
  return {
    id: project.id,
    title: project.title,
    description: project.description,
    techStack: project.techStack || [],
    details: project.details || '',
    contributions: project.contributions || [],
    challenges: project.challenges || "",
    outcomes: project.outcomes || project.businessImpact || "",
    image: project.image,
    url: project.url
  };
}
