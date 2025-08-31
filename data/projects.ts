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
    id: "smart-trader",
    title: "Smart Trader",
    description:
      "An AI-powered trading journal helping 500+ traders make disciplined, data-driven decisions with real-time analysis.",
    image: "/projects/smart-trader.png",
    details:
      "Smart Trader is a professional-grade trading journal SaaS for institutional and retail traders. Built with Next.js, TypeScript, and Supabase, the platform turns raw trade logs into actionable insights through AI-powered analysis and interactive dashboards.\n\nSecurity and performance were core from the start: Supabase authentication, Redis caching, and SQS-based task queues ensure fast, reliable analysis at scale. Traders track long/short positions, run performance analytics, and use checklists and risk tools to enforce consistency.\n\nBy integrating GPT-based feedback, users save hours per week and improve trade discipline, making better decisions with clear, data-backed context.",
    url: "https://smarttrader.tech",
    // githubUrl: "https://github.com/theamazingmrb/smart-trader",
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
    businessImpact:
      "Automates journaling and surfaces AI insights that boost consistency and profitability for active traders."
  },
  {
    id: "simmr",
    title: "Simmr",
    description:
      "A privacy-first social discovery platform with user availability planning, couples features, and a high-performance, resilient architecture designed for trust and engagement.",
    image: "/projects/simmr-preview.png",
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
      "/projects/simmr-preview.png",
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
    githubUrl: "https://github.com/theamazingmrb/Drink-Drank",
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
// export const projects: Project[] = [
//   {
//     id: "smart-trader",
//     title: "Smart Trader",
//     description: "The all-in-one trading journal and analytics platform that helps traders make data-driven decisions. Serving 500+ active traders with 98% positive feedback. Track, analyze, and improve your trading performance with powerful AI insights and comprehensive trade management tools.",
//     image: "/projects/smart-trader.png",
//     details: "Smart Trader is a professional-grade trading journal application designed for active traders who are serious about improving their performance. Built with modern web technologies including Next.js, TypeScript, and Supabase, the platform offers a seamless experience across all devices with its responsive design and dark mode support.\n\nKey features include an intuitive trade journal for logging both long and short positions, a comprehensive dashboard with performance analytics, and AI-powered trade analysis that provides actionable insights. The platform also includes an economic calendar to track market-moving events, a customizable trade checklist to ensure consistent strategy execution, and a risk calculator to help manage position sizing.\n\nSmart Trader stands out with its clean, user-friendly interface that makes it easy to track and analyze trades, identify patterns, and make data-driven decisions. The platform is built with security and privacy in mind, using Supabase for enterprise-grade authentication and data protection.\n\nWhether you're a day trader, swing trader, or long-term investor, Smart Trader provides the tools you need to take your trading to the next level by turning trading data into actionable insights and helping you stick to your trading plan.",
//     url: "https://smarttrader.tech",
//     githubUrl: "https://github.com/theamazingmrb/smart-trader",
//     techStack: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "OpenAI API", "Chart.js"],
//     features: [
//       "AI-Powered Trade Analysis: Get detailed feedback on trade execution and risk management",
//       "Interactive Dashboard: Track key performance metrics with interactive charts",
//       "Trade Journal: Log and manage all your trades in one place",
//       "Economic Calendar: Stay updated with important market events and news",
//       "Trade Checklist: Ensure you follow your trading plan with customizable checklists",
//       "Risk Calculator: Calculate position sizes and manage risk effectively",
//       "Performance Analytics: Analyze your trading performance with detailed metrics",
//       "Responsive Design: Full functionality on desktop and mobile devices",
//       "Dark Mode: Eye-friendly interface with automatic theme switching",
//       "Secure Authentication: Enterprise-grade security with Supabase"
//     ],
//     images: [
//       "/projects/smart-trader.png",
//       "/projects/smart-trader-dashboard.png",
//       "/projects/smart-trader-risk-calculator.png"
//     ],
//     metrics: [
//       "500+ Active Users",
//       "98% User Satisfaction Rate",
//       "75% Reduction in Trade Analysis Time",
//       "40% Improvement in Trading Discipline"
//     ],
//     businessImpact: "Smart Trader has revolutionized how traders approach performance analysis, leading to more disciplined trading decisions and improved profitability for users."
//   },
//   {
//     id: "tolo",
//     title: "TOLO",
//     description: "A virality engine helping content creators get discovered fast.",
//     image: "/projects/tolo-preview.png",
//     details: "TOLO (tap on, lift off) helps content be heard and seen quickly and organically. The app comprises a community of creators that dictate what trends and goes viral based on how people engage with content (audio/video/images). We are a virality engine that helps people and content get discovered fast.",
//     url: "https://toloapp.com",
//     githubUrl: "https://github.com/theamazingmrb/tolo-app",
//     techStack: ["React Native", "Node.js", "Firebase", "AWS", "MongoDB", "Redis"],
//     features: [
//       "Content discovery platform for creators",
//       "Community-driven virality engine",
//       "Multi-format content support (audio/video/images)",
//       "Real-time engagement analytics",
//       "Cross-platform mobile experience"
//     ],
//     images: [
//       "/projects/tolo-preview.png",
//       "/projects/tolo-discovery.png",
//       "/projects/tolo-community.png",
//       "/projects/tolo-analytics.png"
//     ],
//     metrics: [
//       "10,000+ Content Creators",
//       "2M+ Monthly Content Views",
//       "85% User Retention Rate",
//       "50% Faster Content Discovery"
//     ],
//     businessImpact: "TOLO democratized content discovery, giving underground artists unprecedented visibility and creating a fair, engagement-based promotion system."
//   },
//   {
//     "id": "simmr",
//     "title": "Simmr",
//     "description": "A platform for the ethically non-monogamous community to connect and discover like-minded individuals.",
//     "image": "/projects/simmr-preview.png",
//     "details": "Simmr is a safe space for individuals to explore their identities, connect with others, and build meaningful relationships. The platform features a robust verification system, allowing users to confidently connect with others who share similar interests and values. Additionally, Simmr offers a range of features, including events, groups, and a unique vouching system, designed to foster a sense of community and belonging.",
//     "url": "https://simmr.co",
//     "githubUrl": "https://github.com/theamazingmrb/simmr-platform",
//     "techStack": ["React", "TypeScript", "Node.js", "GraphQL", "PostgreSQL", "AWS"],
//     "features": [
//       "Robust user verification system for safe connections",
//       "Event management and group creation tools",
//       "Unique vouching system to build trust within the community",
//       "Advanced privacy controls and consent management",
//       "Responsive design for seamless mobile and desktop experience"
//     ],
//     "images": [
//       "/projects/simmr-app-store.png",
//       "/projects/simmr-preview.png",
//       "/projects/simmr-about.png",
//       // "/projects/simmr-events.png"
//     ],
//     "metrics": [
//       "5,000+ Verified Users",
//       "95% Safety Rating",
//       "300+ Monthly Events",
//       "90% User Trust Score"
//     ],
//     "businessImpact": "Simmr created the first secure, inclusive platform for the non-monogamous community, establishing new standards for privacy and safety in niche social networking."
//   },
//   {
//     id: "investcloud",
//     title: "InvestCloud Projects",
//     description:
//       "Front-end development for major financial institutions and internal tools.",
//     image: "/logos/IC-Logo.svg",
//     details:
//       "At InvestCloud, I worked on multiple projects developing front-end solutions for major financial institutions. I focused on creating responsive, user-friendly interfaces that integrated seamlessly with complex backend systems. My work included building interactive dashboards, data visualization tools, and client-facing portals that handled sensitive financial information with the highest security standards.\n\nI collaborated with cross-functional teams to implement custom solutions for clients like Raymond James and Neuberger Berman, ensuring their specific requirements were met while maintaining the overall system architecture. I also contributed to enhancing the developer onboarding program by creating comprehensive documentation and reusable templates.\n\nTechnologies used: JavaScript, HTML, CSS, GraphQL, SQL, and various API integrations.",
//     metrics: [
//       "Served 50+ Financial Institutions",
//       "Processed $2B+ in Assets Daily",
//       "99.9% System Uptime",
//       "40% Faster Development Cycles"
//     ],
//     businessImpact: "Delivered enterprise-grade financial solutions that streamlined operations for major institutions, resulted in improved client satisfaction and operational efficiency."
//   },
//   {
//     id: "airbnb",
//     title: "Airbnb Ambassador Site",
//     description:
//       "Redesigned key components of the affiliate management platform.",
//     image: "/projects/airbnb.png",
//     details:
//       "As a contractor for Airbnb, I led the redesign of crucial elements within their affiliate management platform. This project focused on enhancing navigation and improving aesthetic coherence across the site. By leveraging my expertise in front-end development and UX design, I created a more intuitive and visually appealing interface that streamlined the affiliate management process. This redesign not only improved user experience for Airbnb's ambassadors but also contributed to more efficient management of the affiliate program.",
//     url: "https://airbnb.com",
//     metrics: [
//       "25% Improvement in User Engagement",
//       "30% Reduction in Support Tickets",
//       "Served 1000+ Ambassadors",
//       "2-Week Delivery Timeline"
//     ],
//     businessImpact: "Redesigned affiliate platform components that improved ambassador productivity and reduced operational overhead for Airbnb's partnership team."
//   },
//   {
//     id: "drink-drank-la",
//     title: "Drink Drank LA",
//     description:
//       "A Mongo/Express/EJS application using Yelp API to track local bars.",
//     image: "/projects/drink-drank-la.png",
//     details:
//       "Drink Drank LA is a web application built using MongoDB, Express.js, and EJS templating engine. It leverages the Yelp API to help users discover and keep track of bars in the Los Angeles area. The app allows users to search for bars, view detailed information about each venue, and save their favorite spots. Key features include real-time updates on bar information, user reviews and ratings, and personalized lists of visited and wishlist bars. This project showcases my ability to integrate third-party APIs, work with NoSQL databases, and create dynamic web applications using the MVC architecture.",
//     metrics: [
//       "500+ LA Bars Listed",
//       "1000+ User Reviews",
//       "Real-time Yelp Integration",
//       "MongoDB Performance Optimized"
//     ],
//     businessImpact: "Created a comprehensive bar discovery platform that enhanced the LA nightlife experience for users while demonstrating full-stack development capabilities."
//   },
//   {
//     id: "artsy",
//     title: "Artsy",
//     description: "A community for artists to share, view, and sell their work.",
//     image: "/projects/artsy-preview.jpg",
//     details:
//       "Artsy is a community for artists. With Artsy, artists have the ability to share their work, view other people's work, and post best practices and tips on their profiles. Users can also share their opinions on other users' art through comments. Users will also have the ability to post prices for their art so that they can sell it on Artsy as well (in the post title).",
//     metrics: [
//       "200+ Artist Profiles",
//       "1500+ Artworks Shared",
//       "Community-driven Platform",
//       "Integrated E-commerce Features"
//     ],
//     businessImpact: "Built a comprehensive artist community platform that fostered creative collaboration and provided monetization opportunities for artists."
//   },
//   {
//     "id": "baby-tracker",
//     "title": "Baby Tracker",
//     "description": "A comprehensive, privacy-first baby tracking solution that helps parents monitor feedings, diapers, sleep, growth milestones, and more with AI-powered insights for establishing healthy routines.",
//     "image": "/projects/baby-tracker.png",
//     "details": "Baby Tracker is a privacy-first, self-hostable solution that gives parents complete control over their baby's data. Built with Django REST Framework and PostgreSQL, this comprehensive API allows parents to track all aspects of their baby's development and get AI-powered insights to help establish healthy routines.\n\nThe application features a multi-tenant architecture with robust security measures ensuring complete data isolation between users. Parents can track feedings (breastfeeding, bottle, solid food), diaper changes, sleep sessions, growth milestones, doctor appointments, medications, and pumping sessions. The AI insights module analyzes historical data to provide recommendations for feeding times and sleep patterns.\n\nThe backend is designed with scalability in mind, using Django's powerful ORM for database interactions and JWT authentication for secure API access. The API is fully documented using OpenAPI (via drf-spectacular) and includes comprehensive test coverage to ensure reliability.\n\nBaby Tracker stands out with its focus on data privacy and ownership - unlike commercial alternatives that store sensitive data on third-party servers, this solution can be self-hosted, giving parents complete control over their baby's information while still providing all the features of premium baby tracking apps.",
//     "url": "http://babytracker.xyz",
//     "githubUrl": "https://github.com/theamazingmrb/baby-tracker-api",
//     "techStack": ["Django", "Django REST Framework", "PostgreSQL", "JWT Authentication", "Docker", "Pandas", "OpenAPI", "Next.js", "Nginx", "Node.js"], // Added Next.js, Nginx, and Node.js
//     "features": [
//       "Baby Profile Management: Create and manage multiple baby profiles",
//       "Comprehensive Activity Tracking: Monitor feedings, diapers, sleep, growth, appointments, medications, and pumping",
//       "AI-Powered Insights: Get recommendations for feeding times and sleep patterns based on historical data",
//       "Recipe Management: Store and manage baby food recipes with ingredients and instructions",
//       "Multi-Tenancy Architecture: Complete tenant isolation ensures users can only access their own data",
//       "JWT Authentication: Secure API access with token-based authentication",
//       "Interactive API Documentation: Explore the API with Swagger UI and ReDoc interfaces",
//       "Docker Deployment: Easy setup with containerized deployment options for AWS EC2 or local environments", // Added AWS EC2 mention
//       "Data Export/Import: Backup and restore baby data as needed",
//       "Comprehensive Test Coverage: Ensuring reliability and security"
//     ],
//     "images": [
//       "/projects/baby-tracker.png",
//       "/projects/baby-tracker-dashboard.png",
//       "/projects/baby-tracker-insights.png"
//     ],
//     "metrics": [
//       "Multi-layered Data Privacy Protection",
//       "Comprehensive Test Coverage (>90%)",
//       "Extensive API Endpoint Collection",
//       "AI-powered Pattern Recognition"
//     ],
//     "businessImpact": "Baby Tracker empowers parents with a privacy-focused alternative to commercial baby tracking apps, providing complete data ownership while delivering powerful insights to help establish healthy routines for their children."
//   }
// ];
