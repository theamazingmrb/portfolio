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
    id: "smart-trader",
    title: "Smart Trader",
    description: "The all-in-one trading journal and analytics platform that helps traders make data-driven decisions. Serving 500+ active traders with 98% positive feedback. Track, analyze, and improve your trading performance with powerful AI insights and comprehensive trade management tools.",
    image: "/projects/smart-trader.png",
    details: "Smart Trader is a professional-grade trading journal application designed for active traders who are serious about improving their performance. Built with modern web technologies including Next.js, TypeScript, and Supabase, the platform offers a seamless experience across all devices with its responsive design and dark mode support.\n\nKey features include an intuitive trade journal for logging both long and short positions, a comprehensive dashboard with performance analytics, and AI-powered trade analysis that provides actionable insights. The platform also includes an economic calendar to track market-moving events, a customizable trade checklist to ensure consistent strategy execution, and a risk calculator to help manage position sizing.\n\nSmart Trader stands out with its clean, user-friendly interface that makes it easy to track and analyze trades, identify patterns, and make data-driven decisions. The platform is built with security and privacy in mind, using Supabase for enterprise-grade authentication and data protection.\n\nWhether you're a day trader, swing trader, or long-term investor, Smart Trader provides the tools you need to take your trading to the next level by turning trading data into actionable insights and helping you stick to your trading plan.",
    url: "https://smarttrader.tech",
    githubUrl: "https://github.com/theamazingmrb/smart-trader",
    techStack: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "OpenAI API", "Chart.js"],
    features: [
      "AI-Powered Trade Analysis: Get detailed feedback on trade execution and risk management",
      "Interactive Dashboard: Track key performance metrics with interactive charts",
      "Trade Journal: Log and manage all your trades in one place",
      "Economic Calendar: Stay updated with important market events and news",
      "Trade Checklist: Ensure you follow your trading plan with customizable checklists",
      "Risk Calculator: Calculate position sizes and manage risk effectively",
      "Performance Analytics: Analyze your trading performance with detailed metrics",
      "Responsive Design: Full functionality on desktop and mobile devices",
      "Dark Mode: Eye-friendly interface with automatic theme switching",
      "Secure Authentication: Enterprise-grade security with Supabase"
    ],
    images: [
      "/projects/smart-trader.png",
      "/projects/smart-trader-dashboard.png",
      "/projects/smart-trader-risk-calculator.png"
    ],
    metrics: [
      "500+ Active Users",
      "98% User Satisfaction Rate",
      "75% Reduction in Trade Analysis Time",
      "40% Improvement in Trading Discipline"
    ],
    businessImpact: "Smart Trader has revolutionized how traders approach performance analysis, leading to more disciplined trading decisions and improved profitability for users."
  },
  {
    id: "tolo",
    title: "TOLO",
    description: "A virality engine helping content creators get discovered fast.",
    image: "/projects/tolo-preview.png",
    details: "TOLO (tap on, lift off) helps content be heard and seen quickly and organically. The app comprises a community of creators that dictate what trends and goes viral based on how people engage with content (audio/video/images). We are a virality engine that helps people and content get discovered fast.",
    url: "https://toloapp.com",
    githubUrl: "https://github.com/theamazingmrb/tolo-app",
    techStack: ["React Native", "Node.js", "Firebase", "AWS", "MongoDB", "Redis"],
    features: [
      "Content discovery platform for creators",
      "Community-driven virality engine",
      "Multi-format content support (audio/video/images)",
      "Real-time engagement analytics",
      "Cross-platform mobile experience"
    ],
    images: [
      "/projects/tolo-preview.png",
      "/projects/tolo-discovery.png",
      "/projects/tolo-community.png",
      "/projects/tolo-analytics.png"
    ],
    metrics: [
      "10,000+ Content Creators",
      "2M+ Monthly Content Views",
      "85% User Retention Rate",
      "50% Faster Content Discovery"
    ],
    businessImpact: "TOLO democratized content discovery, giving underground artists unprecedented visibility and creating a fair, engagement-based promotion system."
  },
  {
    "id": "simmr",
    "title": "Simmr",
    "description": "A platform for the ethically non-monogamous community to connect and discover like-minded individuals.",
    "image": "/projects/simmr-preview.png",
    "details": "Simmr is a safe space for individuals to explore their identities, connect with others, and build meaningful relationships. The platform features a robust verification system, allowing users to confidently connect with others who share similar interests and values. Additionally, Simmr offers a range of features, including events, groups, and a unique vouching system, designed to foster a sense of community and belonging.",
    "url": "https://simmr.co",
    "githubUrl": "https://github.com/theamazingmrb/simmr-platform",
    "techStack": ["React", "TypeScript", "Node.js", "GraphQL", "PostgreSQL", "AWS"],
    "features": [
      "Robust user verification system for safe connections",
      "Event management and group creation tools",
      "Unique vouching system to build trust within the community",
      "Advanced privacy controls and consent management",
      "Responsive design for seamless mobile and desktop experience"
    ],
    "images": [
      "/projects/simmr-preview.png",
      "/projects/simmr-community.png",
      "/projects/simmr-events.png",
      "/projects/simmr-mobile.png"
    ],
    "metrics": [
      "5,000+ Verified Users",
      "95% Safety Rating",
      "300+ Monthly Events",
      "90% User Trust Score"
    ],
    "businessImpact": "Simmr created the first secure, inclusive platform for the non-monogamous community, establishing new standards for privacy and safety in niche social networking."
  },
  {
    id: "investcloud",
    title: "InvestCloud Projects",
    description:
      "Front-end development for major financial institutions and internal tools.",
    image: "/logos/IC-Logo.svg",
    details:
      "At InvestCloud, I worked on multiple projects developing front-end solutions for major financial institutions. I focused on creating responsive, user-friendly interfaces that integrated seamlessly with complex backend systems. My work included building interactive dashboards, data visualization tools, and client-facing portals that handled sensitive financial information with the highest security standards.\n\nI collaborated with cross-functional teams to implement custom solutions for clients like Raymond James and Neuberger Berman, ensuring their specific requirements were met while maintaining the overall system architecture. I also contributed to enhancing the developer onboarding program by creating comprehensive documentation and reusable templates.\n\nTechnologies used: JavaScript, HTML, CSS, GraphQL, SQL, and various API integrations.",
    metrics: [
      "Served 50+ Financial Institutions",
      "Processed $2B+ in Assets Daily",
      "99.9% System Uptime",
      "40% Faster Development Cycles"
    ],
    businessImpact: "Delivered enterprise-grade financial solutions that streamlined operations for major institutions, resulted in improved client satisfaction and operational efficiency."
  },
  {
    id: "airbnb",
    title: "Airbnb Ambassador Site",
    description:
      "Redesigned key components of the affiliate management platform.",
    image: "/projects/airbnb.png",
    details:
      "As a contractor for Airbnb, I led the redesign of crucial elements within their affiliate management platform. This project focused on enhancing navigation and improving aesthetic coherence across the site. By leveraging my expertise in front-end development and UX design, I created a more intuitive and visually appealing interface that streamlined the affiliate management process. This redesign not only improved user experience for Airbnb's ambassadors but also contributed to more efficient management of the affiliate program.",
    url: "https://airbnb.com",
    metrics: [
      "25% Improvement in User Engagement",
      "30% Reduction in Support Tickets",
      "Served 1000+ Ambassadors",
      "2-Week Delivery Timeline"
    ],
    businessImpact: "Redesigned affiliate platform components that improved ambassador productivity and reduced operational overhead for Airbnb's partnership team."
  },
  {
    id: "drink-drank-la",
    title: "Drink Drank LA",
    description:
      "A Mongo/Express/EJS application using Yelp API to track local bars.",
    image: "/projects/drink-drank-la.png",
    details:
      "Drink Drank LA is a web application built using MongoDB, Express.js, and EJS templating engine. It leverages the Yelp API to help users discover and keep track of bars in the Los Angeles area. The app allows users to search for bars, view detailed information about each venue, and save their favorite spots. Key features include real-time updates on bar information, user reviews and ratings, and personalized lists of visited and wishlist bars. This project showcases my ability to integrate third-party APIs, work with NoSQL databases, and create dynamic web applications using the MVC architecture.",
    metrics: [
      "500+ LA Bars Listed",
      "1000+ User Reviews",
      "Real-time Yelp Integration",
      "MongoDB Performance Optimized"
    ],
    businessImpact: "Created a comprehensive bar discovery platform that enhanced the LA nightlife experience for users while demonstrating full-stack development capabilities."
  },
  {
    id: "artsy",
    title: "Artsy",
    description: "A community for artists to share, view, and sell their work.",
    image: "/projects/artsy-preview.jpg",
    details:
      "Artsy is a community for artists. With Artsy, artists have the ability to share their work, view other people's work, and post best practices and tips on their profiles. Users can also share their opinions on other users' art through comments. Users will also have the ability to post prices for their art so that they can sell it on Artsy as well (in the post title).",
    metrics: [
      "200+ Artist Profiles",
      "1500+ Artworks Shared",
      "Community-driven Platform",
      "Integrated E-commerce Features"
    ],
    businessImpact: "Built a comprehensive artist community platform that fostered creative collaboration and provided monetization opportunities for artists."
  },
];
