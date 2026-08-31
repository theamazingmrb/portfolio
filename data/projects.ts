export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  details: string;
  url?: string;
  githubUrl?: string;
  techStack?: string[];
  features?: string[];
  metrics?: string[];
  businessImpact?: string;
  images?: string[];
}
export const projects: Project[] = [
  {
    id: "amirblaq",
    title: "AMIR BLAQ",
    description: "A full-stack luxury fashion e-commerce platform with Next.js frontend and Django admin portal for content management.",
    image: "/projects/amir-b-preview.png",
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
    businessImpact: "Successfully delivered a full-stack e-commerce platform with an intuitive shopping experience on the frontend and a powerful admin portal that empowers the client to manage their product catalog without technical assistance."
  },
  {
    id: "daily-wick",
    title: "Daily Wick",
    description:
      "AI trading journal for prop traders that logs trades, spots patterns, and coaches you with personalized insights.",
    image: "/projects/daily-wick.png",
    details:
      "Daily Wick is a trading journal built for active and prop traders. It turns raw trade logs into personalized, data-backed coaching — logging trades, surfacing losing habits automatically, and letting traders ask an AI Coach to analyze their history and psychology.",
    url: "https://dailywick.app",
//     githubUrl: "https://github.com/theamazingmrb/daily-wick"
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
      "/projects/daily-wick.png",
      "/projects/daily-wick-full.png",
      "/projects/daily-wick-dashboard.png",
      "/projects/daily-wick-risk-calculator.png"
    ],
    metrics: [
      "Early Access: 10-15 Active Traders",
      "100% Uptime Since Launch",
      "10+ Key Features Implemented",
      "Positive Initial User Feedback"
    ],
    businessImpact:
      "Automates journaling and surfaces AI insights that boost consistency and profitability for active traders."
  },
  {
    id: "simmr",
    title: "Simmr",
    description:
      "A privacy-first social discovery platform with user availability planning, couples features, and a high-performance, resilient architecture designed for trust and engagement.",
    image: "/projects/simmr-about.png",
    details:
      "Simmr is a niche social platform built with React, TypeScript, Node.js, GraphQL, and PostgreSQL on AWS. The experience centers on privacy, trust, and meaningful connections.\n\nKey engineering work included a comprehensive plans and availability system, client-side distance filtering for discovery, specialized couples account flows, and Lambda@Edge rendering for SEO and rich previews. The platform features a sophisticated image optimization system with context-aware sizing and global caching to ensure consistent performance across devices.\n\nDefensive programming techniques including error boundaries, retry logic, and memory management protect the UI from crashes even when handling thousands of profiles. The platform's messaging system supports rich media sharing with MMS capabilities and public/private bucket management for media assets.\n\nThe result was a performant, reliable product that scaled smoothly, earned user trust, and facilitated meaningful connections through innovative features like the availability calendar and couples discovery.",
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
      "30% Growth in Couple Accounts",
    ],
    businessImpact:
      "Set a new bar for privacy and safety in niche social platforms, improving trust, reliability, and engagement. The plans feature transformed how users connect, while specialized couple accounts opened a new market segment. The platform rebrand from Candid to Simmr established a distinctive identity in the social discovery space, supported by robust architecture that maintained performance even under high load."
  },
  {
    id: "baby-tracker",
    title: "Baby Tracker",
    description:
      "A privacy-first baby tracking platform with Django REST, PostgreSQL, and AI-powered insights.",
    image: "/projects/baby-tracker.png",
    details:
      "Baby Tracker is a self-hostable, privacy-focused API and UI for tracking feeding, sleep, growth, and milestones. The backend uses Django REST Framework with a multi-tenant architecture and JWT auth; the frontend leverages Next.js.\n\nDockerized deployments with Nginx make it easy to run on AWS EC2 or locally. The API is fully documented (OpenAPI) and covered by comprehensive tests.\n\nAI modules analyze history to suggest routines and patterns without compromising data ownership.",
    url: "http://babytracker.xyz",
//     githubUrl: "https://github.com/theamazingmrb/daily-wick"
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
    businessImpact:
      "Gives parents a secure, self-hosted alternative to commercial apps while delivering actionable guidance."
  },
  {
    id: "tolo",
    title: "TOLO",
    description: "A platform helping underground artists and content creators gain visibility through fair algorithm-based content discovery.",
    image: "/projects/tolo-preview.png",
    details:
      "TOLO is a React Native mobile platform that helps underground artists get discovered through a multi-tiered ranking system (Feed, Trending, Viral) rather than pure popularity metrics.\n\nBacked by Supabase with state management via Zustand, the system supports real-time content interaction, creator profiles, and multi-format content uploads. The platform uses SWR for data fetching and Segment for analytics tracking.",
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
    businessImpact:
      "Provides underground artists with a platform for content distribution and audience building through a transparent, engagement-driven promotion system."
  },
  {
    id: "investcloud",
    title: "InvestCloud Projects",
    description:
      "Enterprise fintech engineering for 50+ institutions processing $2B+ in assets daily with secure dashboards and ETL.",
    image: "/logos/IC-Logo.svg",
    details:
      "At InvestCloud, I built financial dashboards, ETL pipelines, and APIs for clients like Raymond James and Neuberger Berman. Work spanned schema design, ingestion, and UI integration.\n\nTech included Groovy services on GlassFish, Oracle/PostgreSQL/MySQL for data, and modern JS for front-end modules. I also led training and onboarding, creating documentation and reusable templates to accelerate delivery.\n\nReliability, security, and performance were the priority across all client implementations.",
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
    businessImpact:
      "Delivered secure, scalable fintech tools that streamlined operations and improved client satisfaction."
  },
  {
    id: "airbnb",
    title: "Airbnb Host Ambassador Platform",
    description:
      "Modernization of Airbnb's host ambassador platform with significant improvements in user engagement and support efficiency.",
    image: "/projects/airbnb.png",
    details:
      "As a lead contractor, I spearheaded the refactoring of core UI modules for Airbnb's host ambassador platform, focusing on improving navigation flow, visual consistency, and workflow clarity.\n\nThe project involved implementing responsive components, simplifying information hierarchy, and optimizing task flows for ambassador onboarding and management. We integrated with Airbnb's design system while adding custom components tailored to ambassador needs.\n\nThe platform serves over 1,000 ambassadors globally, helping them track referrals, manage bonuses, and access marketing resources. Post-implementation metrics showed significant improvements in ambassador satisfaction and operational efficiency.",
    url: "https://airbnb.com",
    techStack: ["Ruby on Rails", "JavaScript", "React", "SCSS", "PostgreSQL"],
    images: ["/projects/airbnb.png"],
    metrics: ["25% Higher Ambassador Engagement", "30% Reduction in Support Tickets", "1000+ Global Ambassadors", "15% Increase in Referral Conversion"],
    businessImpact:
      "Increased ambassador productivity and referral quality while reducing operational overhead for the partnerships team. The platform improvements directly contributed to more effective host acquisition through the ambassador program."
  },
  {
    id: "love-service",
    title: "Love & Service 1st",
    description:
      "A nonprofit landing page with links to community initiatives and resources.",
    image: "/projects/love-service-preview.png",
    details:
      "Love & Service 1st is a nonprofit landing site built to provide a professional, welcoming presence online. The page is lightweight and responsive, with sections for mission statement, resources, and direct links to community initiatives.\n\nWhile simple in scope, it highlights the ability to deliver polished, production-ready sites quickly for nonprofits with limited budgets or timelines.",
    url: "https://loveandservice1st.com/",
    techStack: ["Next.js", "Tailwind CSS"],
    features: [
      "Responsive landing page",
      "Mission-driven content",
      "Community resource links"
    ],
    images: ["/projects/love-and-service-first.png", "/projects/las1-pay-it-forward.png", "/projects/las1-about.png"],
    businessImpact:
      "Gave the nonprofit a credible online presence, supporting outreach and community engagement."
  },
  {
    id: "drink-drank-la",
    title: "Drink Drank LA",
    description:
      "A bar discovery app for Los Angeles using MongoDB, Express, EJS, and the Yelp API.",
    image: "/projects/drink-drank-la.png",
//     githubUrl: "https://github.com/theamazingmrb/daily-wick"
    details:
      "Drink Drank LA helps users discover, track, and review LA bars with live Yelp data. Users can browse venues, save lists, and view details.\n\nThe app demonstrates NoSQL modeling, third-party API integration, and MVC architecture with server-rendered templates.",
    techStack: ["MongoDB", "Express.js", "EJS", "Yelp API", "Passport.js"],
    features: [
      "Real-time Yelp API integration",
      "Personalized visited and wishlist tracking",
      "Facebook OAuth authentication",
      "Full CRUD operations for user bar lists"
    ],
    images: ["/projects/drink-drank-la.png"],
    metrics: [
      "MVC pattern with MongoDB NoSQL database design",
      "Real-time integration with Yelp API for LA bar data",
      "Facebook OAuth authentication with personalized bar tracking",
      "Mobile-responsive design with EJS templating"
    ],
    businessImpact:
      "Demonstrates practical API integration and NoSQL database design through a local discovery experience focused on user personalization."
  },
  {
    "id": "artsy",
    "title": "Artsy",
    "description": "A creative community where artists share their work, collaborate, and sell artwork.",
    "image": "/projects/artsy-preview.jpg",
    "details": "Artsy provides artists with a platform to publish portfolios, receive feedback through comments, and list works for sale. The community features encourage sharing best practices and building an audience.\n\nThe platform emphasizes simplicity and collaboration to help artists grow their presence and monetize their creative work.",
    "techStack": ["Ruby on Rails", "PostgreSQL", "Bootstrap", "SASS", "jQuery", "AWS S3"],
    "features": [
      "Artist profiles with portfolios",
      "Comments and community feedback",
      "Artwork listings with pricing",
      "Image uploads and galleries",
      "Secure user authentication"
    ],
    "images": ["/projects/artsy-preview.jpg"],
    "metrics": [
      "Full-stack Rails Application",
      "Implemented MVC Architecture",
      "RESTful API Design"
    ],
    "businessImpact": "Fosters creative collaboration and monetization opportunities for emerging artists while building a supportive community for sharing best practices."
  },
  {
    id: "bbdo",
    title: "BBDO",
    description: "Created interactive banner ads and animations for major advertising campaigns.",
    image: "/logos/bbdo.jpeg",
    details: "Developed interactive banner ads and animations for major advertising campaigns, working with creative teams to bring marketing concepts to life. Designed animations using Greensock (GSAP), optimized ad performance across platforms, and collaborated with creative teams on campaign concepts.",
    url: "https://bbdo.com",
    techStack: ["JavaScript", "GSAP", "HTML5", "CSS3"],
    features: [
      "Designed animations using Greensock (GSAP)",
      "Optimized ad performance across platforms",
      "Collaborated with creative teams on campaign concepts"
    ],
    images: [
      "/logos/bbdo.jpeg"
    ],
    metrics: [
      "High-Impact Ad Campaigns",
      "Cross-Platform Compatibility",
      "Engaging User Interactions"
    ],
    businessImpact: "Delivered high-impact ad campaigns that met client objectives and performed well across all platforms."
  }
];