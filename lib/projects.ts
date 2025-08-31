// Unified project data structure that serves both the main projects page and individual project pages
export interface Project {
  // Core fields (required)
  id: string;
  title: string;
  description: string;
  image: string;
  
  // Detailed information
  details: string;
  url?: string;
  githubUrl?: string;
  
  // Portfolio display fields
  techStack?: string[];
  features?: string[];
  metrics?: string[];
  businessImpact?: string;
  images?: string[];
  
  // Project page specific fields
  detailedDescription?: string;
  contributions?: string[];
  technologies?: string[]; // Same as techStack but with different name in projects page
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
    detailedDescription: "Smart Trader is a comprehensive trading journal application that leverages AI to analyze trading patterns and provide actionable insights to improve trading performance.",
    contributions: [
      "Designed and implemented the entire front-end architecture using React and TypeScript",
      "Created a responsive dashboard with interactive charts for trade visualization",
      "Integrated AI analysis features to identify trading patterns and suggest improvements",
      "Implemented real-time data synchronization with WebSockets"
    ],
    technologies: ["Next.js", "TypeScript", "Supabase", "OpenAI", "Tailwind CSS"],
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
    detailedDescription: "Baby Tracker is a privacy-first, self-hostable solution that gives parents complete control over their baby's data. Built with Django REST Framework and PostgreSQL, this comprehensive API allows parents to track all aspects of their baby's development and get AI-powered insights to help establish healthy routines.",
    contributions: [
      "Designed and implemented a multi-tenant architecture with robust security measures",
      "Developed AI insights module for analyzing historical data and providing recommendations",
      "Created comprehensive API documentation using OpenAPI (drf-spectacular)",
      "Implemented Docker deployment for easy self-hosting on AWS EC2 or local environments"
    ],
    technologies: ["Django", "Django REST Framework", "PostgreSQL", "JWT Authentication", "Docker", "Pandas", "OpenAPI", "Next.js", "Nginx", "Node.js"],
    challenges: "Building a secure, privacy-focused alternative to commercial baby tracking apps while maintaining feature parity and ensuring complete data isolation between users.",
    outcomes: "Created a fully-featured baby tracking solution that empowers parents with complete data ownership while delivering powerful insights to help establish healthy routines."
  },
  {
    id: "simmr",
    title: "Simmr",
    description: "A privacy-first social discovery platform with user availability planning, couples features, and a high-performance, resilient architecture.",
    image: "/projects/simmr-preview.png",
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
      "/projects/simmr-preview.png",
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
    detailedDescription: "Simmr is a social platform designed specifically for the ethically non-monogamous community, providing a safe space for connection, communication, and community building.",
    contributions: [
      "Built the web application using React and Node.js",
      "Implemented secure authentication and user verification",
      "Developed features for community building and event management"
    ],
    technologies: ["React", "Node.js", "MongoDB", "GraphQL"],
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
    detailedDescription: "TOLO is a mobile platform designed to help underground artists and content creators gain visibility through a multi-tiered content ranking system (Feed, Trending, Viral) that promotes quality content based on engagement rather than just popularity metrics.",
    contributions: [
      "Led development of the React Native mobile app for iOS and Android",
      "Implemented multi-format content support (audio, video, images) with engagement-based promotion",
      "Built user engagement features including content sharing, saving, and promotion"
    ],
    technologies: ["React Native", "Expo", "Supabase", "SWR", "Zustand", "Segment Analytics"],
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
    detailedDescription: "InvestCloud provides comprehensive financial software solutions for major financial institutions. I worked as both a Technical Trainer and Integration Developer, focusing on ETL processes, API development, and training other developers on integration workflows.",
    contributions: [
      "Built ETL pipelines for transactions, holdings, and account data",
      "Developed RESTful services and contributed to relational schema design",
      "Created developer onboarding programs covering ETL, data mapping, and integration workflows",
      "Led workshops on REST API design, data quality, and troubleshooting processes"
    ],
    technologies: ["Java", "Groovy", "GlassFish", "SQL", "ETL", "REST APIs"],
    challenges: "Handling large volumes of financial data while ensuring accuracy, security, and real-time processing. Additionally, creating effective training materials for complex integration workflows.",
    outcomes: "Delivered robust financial solutions that improved data processing efficiency and provided better insights for financial advisors. Reduced ramp-up time for new developers through improved documentation and training."
  },
  {
    id: "love-service",
    title: "Love & Service 1st",
    description: "A nonprofit landing page with links to community initiatives and resources.",
    image: "/projects/love-and-service-first.png",
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
    detailedDescription: "Love & Service 1st is a nonprofit landing site built to provide a professional, welcoming presence online. The page is lightweight and responsive, with sections for mission statement, resources, and direct links to community initiatives.",
    contributions: [
      "Designed and built a responsive landing page with Next.js and Tailwind CSS",
      "Created mission-driven content sections for community engagement",
      "Implemented resource links and community initiative connections"
    ],
    technologies: ["Next.js", "Tailwind CSS", "Responsive Design"],
    challenges: "Delivering a polished, production-ready site quickly for a nonprofit with limited budget and timeline.",
    outcomes: "Gave the nonprofit a credible online presence, supporting outreach and community engagement."
  },
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
    businessImpact: "Successfully delivered a full-stack e-commerce platform with an intuitive shopping experience on the frontend and a powerful admin portal that empowers the client to manage their product catalog without technical assistance.",
    
    // Project page specific fields
    detailedDescription: "AMIR BLAQ is a comprehensive e-commerce solution featuring a Next.js/React frontend with a sophisticated dark theme design and a Django backend admin portal that allows the client to manage products. The system includes RESTful APIs for product management, AWS S3 integration for image storage, and a custom admin interface for content management.",
    contributions: [
      "Developed a Next.js frontend with responsive dark-themed UI and interactive product displays",
      "Built a Django backend with REST API for product management and content administration",
      "Implemented AWS S3 integration for scalable product image storage",
      "Created a custom admin portal allowing the client to easily manage product inventory",
      "Designed database models with categorization for kids and adults product lines",
      "Fixed critical hydration issues to ensure consistent server-side and client-side rendering",
      "Deployed the frontend to Vercel and backend to a cloud provider with PostgreSQL database"
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Django", "Django REST Framework", "PostgreSQL", "AWS S3", "Vercel"],
    challenges: "Creating a seamless integration between the headless Django backend and the Next.js frontend while ensuring proper data flow and image management. Additionally, implementing a dark theme across all components while maintaining accessibility and resolving complex React hydration issues.",
    outcomes: "Successfully delivered a full-stack e-commerce platform with an intuitive shopping experience on the frontend and a powerful admin portal that empowers the client to manage their product catalog without technical assistance."
  },
  {
    id: "airbnb",
    title: "Airbnb Host Ambassador Platform",
    description: "Modernization of Airbnb's host ambassador platform with significant improvements in user engagement and support efficiency.",
    image: "/projects/airbnb.png",
    details: "As a lead contractor, I spearheaded the refactoring of core UI modules for Airbnb's host ambassador platform, focusing on improving navigation flow, visual consistency, and workflow clarity.\n\nThe project involved implementing responsive components, simplifying information hierarchy, and optimizing task flows for ambassador onboarding and management. We integrated with Airbnb's design system while adding custom components tailored to ambassador needs.\n\nThe platform serves over 1,000 ambassadors globally, helping them track referrals, manage bonuses, and access marketing resources. Post-implementation metrics showed significant improvements in ambassador satisfaction and operational efficiency.",
    url: "https://airbnb.com",
    techStack: ["Ruby on Rails", "JavaScript", "React", "SCSS", "PostgreSQL"],
    images: ["/projects/airbnb.png"],
    metrics: ["25% Higher Ambassador Engagement", "30% Reduction in Support Tickets", "1000+ Global Ambassadors", "15% Increase in Referral Conversion"],
    businessImpact: "Increased ambassador productivity and referral quality while reducing operational overhead for the partnerships team. The platform improvements directly contributed to more effective host acquisition through the ambassador program.",
    
    // Project page specific fields
    detailedDescription: "Contributed to Airbnb's affiliate marketing platform, focusing on enhancing the user experience for ambassadors and optimizing the referral program.",
    contributions: [
      "Redesigned the ambassador dashboard for better usability",
      "Implemented tracking systems for referral analytics",
      "Optimized page load performance for international users"
    ],
    technologies: ["React", "TypeScript", "GraphQL", "Next.js"],
    challenges: "Improving the performance of the ambassador dashboard while maintaining a seamless user experience across different regions and devices.",
    outcomes: "Enhanced the ambassador experience, leading to increased engagement and more effective referral marketing."
  },
  {
    id: "drink-drank-la",
    title: "Drink Drank LA",
    description: "A bar discovery app for Los Angeles using MongoDB, Express, EJS, and the Yelp API.",
    image: "/projects/drink-drank-la.png",
    githubUrl: "https://github.com/theamazingmrb/Drink-Drank",
    details: "Drink Drank LA helps users discover, track, and review LA bars with live Yelp data. Users can browse venues, save lists, and view details.\n\nThe app demonstrates NoSQL modeling, third-party API integration, and MVC architecture with server-rendered templates.",
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
    businessImpact: "Demonstrates practical API integration and NoSQL database design through a local discovery experience focused on user personalization.",
    
    // Project page specific fields
    detailedDescription: "Drink Drank LA helps users discover, track, and review LA bars with live Yelp data. Users can browse venues, save lists, and view details. The app demonstrates NoSQL modeling, third-party API integration, and MVC architecture with server-rendered templates.",
    contributions: [
      "Implemented real-time Yelp API integration for venue data",
      "Built personalized visited and wishlist tracking features",
      "Developed server-rendered MVC architecture with EJS templates"
    ],
    technologies: ["MongoDB", "Express.js", "EJS", "Yelp API", "Node.js"],
    challenges: "Integrating with third-party APIs while maintaining performance and creating an intuitive user experience for discovering and tracking venues.",
    outcomes: "Created a functional discovery platform with 500+ bars listed and 1000+ reviews, showcasing practical API integration and NoSQL design."
  },
  {
    id: "artsy",
    title: "Artsy",
    description: "A creative community where artists share their work, collaborate, and sell artwork.",
    image: "/projects/artsy-preview.jpg",
    details: "Artsy provides artists with a platform to publish portfolios, receive feedback through comments, and list works for sale. The community features encourage sharing best practices and building an audience.\n\nThe platform emphasizes simplicity and collaboration to help artists grow their presence and monetize their creative work.",
    techStack: ["Ruby on Rails", "PostgreSQL", "Bootstrap", "SASS", "jQuery", "AWS S3"],
    features: [
      "Artist profiles with portfolios",
      "Comments and community feedback",
      "Artwork listings with pricing",
      "Image uploads and galleries",
      "Secure user authentication"
    ],
    images: ["/projects/artsy-preview.jpg"],
    metrics: [
      "Full-stack Rails Application",
      "Implemented MVC Architecture",
      "RESTful API Design"
    ],
    businessImpact: "Fosters creative collaboration and monetization opportunities for emerging artists while building a supportive community for sharing best practices.",
    
    // Project page specific fields
    detailedDescription: "Artsy allows artists to publish portfolios, receive feedback, and list works for sale. Community features encourage sharing best practices and building audience. The platform emphasizes simplicity and collaboration to help artists grow their presence.",
    contributions: [
      "Built artist profiles and portfolio management features",
      "Implemented comments and community feedback system",
      "Created artwork listings with pricing and purchase options"
    ],
    technologies: ["Node.js", "MongoDB", "Express", "JavaScript"],
    challenges: "Creating an intuitive platform that balances community engagement with monetization opportunities while keeping the focus on the artwork.",
    outcomes: "Fostered a creative community with 200+ artist profiles and 1500+ artworks shared, providing collaboration and monetization opportunities for emerging artists."
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
    businessImpact: "Delivered high-impact ad campaigns that met client objectives and performed well across all platforms.",
    
    // Project page specific fields
    detailedDescription: "Developed interactive banner ads and animations for major advertising campaigns, working with creative teams to bring marketing concepts to life.",
    contributions: [
      "Designed animations using Greensock (GSAP)",
      "Optimized ad performance across platforms",
      "Collaborated with creative teams on campaign concepts"
    ],
    technologies: ["JavaScript", "GSAP", "HTML5", "CSS3"],
    challenges: "Creating engaging, performant animations that work consistently across different browsers and devices while meeting strict file size requirements.",
    outcomes: "Delivered high-impact ad campaigns that met client objectives and performed well across all platforms."
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
    detailedDescription: project.detailedDescription || project.details,
    contributions: project.contributions || [],
    technologies: project.technologies || project.techStack || [],
    challenges: project.challenges || "",
    outcomes: project.outcomes || project.businessImpact || "",
    image: project.image,
    url: project.url
  };
}
