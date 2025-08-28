export interface Project {
  id: string;
  title: string;
  description: string;
  detailedDescription?: string;
  contributions?: string[];
  technologies?: string[];
  challenges?: string;
  outcomes?: string;
  image: string;
  url?: string;
}

export const projects: Project[] = [
  {
    id: "smart-trader",
    title: "Smart Trader",
    description: "AI-powered trading journal with analytics and trade performance insights.",
    detailedDescription: "Smart Trader is a comprehensive trading journal application that leverages AI to analyze trading patterns and provide actionable insights to improve trading performance.",
    contributions: [
      "Designed and implemented the entire front-end architecture using React and TypeScript",
      "Created a responsive dashboard with interactive charts for trade visualization",
      "Integrated AI analysis features to identify trading patterns and suggest improvements",
      "Implemented real-time data synchronization with WebSockets"
    ],
    technologies: ["Next.js", "TypeScript", "Supabase", "OpenAI", "Tailwind CSS"],
    challenges: "Creating a responsive and intuitive interface for complex financial data visualization while ensuring real-time updates and data consistency.",
    outcomes: "The application helps traders identify patterns in their trading behavior, leading to more informed decisions and improved trading performance.",
    image: "/projects/smart-trader.png",
    url: "https://smarttrader.tech"
  },
  {
    "id": "baby-tracker",
    "title": "Baby Tracker",
    "description": "A comprehensive, privacy-first baby tracking solution that helps parents monitor feedings, diapers, sleep, growth milestones, medications, and more.",
    "detailedDescription": "Baby Tracker is a privacy-first, self-hostable solution that gives parents complete control over their baby's data. Built with Django REST Framework and PostgreSQL, this comprehensive API allows parents to track all aspects of their baby's development and get AI-powered insights to help establish healthy routines.",
    "contributions": [
      "Designed and implemented a multi-tenant architecture with robust security measures",
      "Developed AI insights module for analyzing historical data and providing recommendations",
      "Created comprehensive API documentation using OpenAPI (drf-spectacular)",
      "Implemented Docker deployment for easy self-hosting on AWS EC2 or local environments"
    ],
    "technologies": ["Django", "Django REST Framework", "PostgreSQL", "JWT Authentication", "Docker", "Pandas", "OpenAPI", "Next.js", "Nginx", "Node.js"],
    "challenges": "Building a secure, privacy-focused alternative to commercial baby tracking apps while maintaining feature parity and ensuring complete data isolation between users.",
    "outcomes": "Created a fully-featured baby tracking solution that empowers parents with complete data ownership while delivering powerful insights to help establish healthy routines.",
    "image": "/projects/baby-tracker.png",
    "url": "https://babytracker.xyz"
  },
  {
    id: "simmr",
    title: "Simmr",
    description: "A platform for the ethically non-monogamous community to connect and build relationships.",
    detailedDescription: "Simmr is a social platform designed specifically for the ethically non-monogamous community, providing a safe space for connection, communication, and community building.",
    contributions: [
      "Built the web application using React and Node.js",
      "Implemented secure authentication and user verification",
      "Developed features for community building and event management"
    ],
    technologies: ["React", "Node.js", "MongoDB", "GraphQL"],
    challenges: "Creating a safe and inclusive platform while implementing robust privacy and security features.",
    outcomes: "Established a thriving community with active user engagement and positive feedback on the platform's features and security.",
    image: "/projects/simmr-preview.png",
    url: "https://simmr.co"
  },
  {
    id: "investcloud",
    title: "InvestCloud",
    description: "Financial software solutions for major financial institutions, focusing on data quality and API development.",
    detailedDescription: "InvestCloud provides comprehensive financial software solutions for major financial institutions, with a focus on data quality, API development, and digital transformation.",
    contributions: [
      "Created ETL processes for financial data processing",
      "Developed RESTful APIs for client data integration",
      "Built responsive dashboards for financial advisors"
    ],
    technologies: ["JavaScript", "SQL", "REST APIs", "Node.js"],
    challenges: "Handling large volumes of financial data while ensuring accuracy, security, and real-time processing.",
    outcomes: "Delivered robust financial solutions that improved data processing efficiency and provided better insights for financial advisors.",
    image: "/logos/IC-Logo.svg",
    url: "https://investcloud.com"
  },
  {
    id: "tolo",
    title: "TOLO",
    description: "A platform helping underground artists and content creators gain visibility through fair algorithm-based content discovery.",
    detailedDescription: "TOLO is a platform designed to help underground artists and content creators gain visibility through fair algorithm-based content discovery, providing tools for content distribution and audience engagement.",
    contributions: [
      "Led development of the React Native mobile app for iOS and Android",
      "Architected the content recommendation algorithm",
      "Scaled the platform to handle thousands of daily active users"
    ],
    technologies: ["React Native", "Node.js", "PostgreSQL", "AWS"],
    challenges: "Building a fair and transparent algorithm that promotes quality content while maintaining platform performance at scale.",
    outcomes: "Successfully launched the platform with a growing community of creators and users, with positive feedback on content discovery.",
    image: "/projects/tolo-preview.png",
    url: "https://tolo.live"
  },
  {
    id: "airbnb",
    title: "Airbnb",
    description: "Worked on the affiliate marketing platform, improving the user experience for ambassadors.",
    detailedDescription: "Contributed to Airbnb's affiliate marketing platform, focusing on enhancing the user experience for ambassadors and optimizing the referral program.",
    contributions: [
      "Redesigned the ambassador dashboard for better usability",
      "Implemented tracking systems for referral analytics",
      "Optimized page load performance for international users"
    ],
    technologies: ["React", "TypeScript", "GraphQL", "Next.js"],
    challenges: "Improving the performance of the ambassador dashboard while maintaining a seamless user experience across different regions and devices.",
    outcomes: "Enhanced the ambassador experience, leading to increased engagement and more effective referral marketing.",
    image: "/projects/airbnb.png",
    url: "https://www.airbnb.com"
  },
  {
    id: "bbdo",
    title: "BBDO",
    description: "Created interactive banner ads and animations for major advertising campaigns.",
    detailedDescription: "Developed interactive banner ads and animations for major advertising campaigns, working with creative teams to bring marketing concepts to life.",
    contributions: [
      "Designed animations using Greensock (GSAP)",
      "Optimized ad performance across platforms",
      "Collaborated with creative teams on campaign concepts"
    ],
    technologies: ["JavaScript", "GSAP", "HTML5", "CSS3"],
    challenges: "Creating engaging, performant animations that work consistently across different browsers and devices while meeting strict file size requirements.",
    outcomes: "Delivered high-impact ad campaigns that met client objectives and performed well across all platforms.",
    image: "/logos/bbdo.jpeg",
    url: "https://bbdo.com"
  }
];
