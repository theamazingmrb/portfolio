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
    id: "tolo",
    title: "TOLO",
    description: "A platform helping underground artists and content creators gain visibility through fair algorithm-based content discovery.",
    detailedDescription: "TOLO is a mobile platform designed to help underground artists and content creators gain visibility through a multi-tiered content ranking system (Feed, Trending, Viral) that promotes quality content based on engagement rather than just popularity metrics.",
    contributions: [
      "Led development of the React Native mobile app for iOS and Android",
      "Implemented multi-format content support (audio, video, images) with engagement-based promotion",
      "Built user engagement features including content sharing, saving, and promotion"
    ],
    technologies: ["React Native", "Expo", "Supabase", "SWR", "Zustand", "Segment Analytics"],
    challenges: "Creating a fair content discovery algorithm that balances new creator visibility with content quality, while maintaining performance across multiple content formats.",
    outcomes: "Successfully launched a platform that helps underground artists gain visibility through a transparent promotion system with features for content sharing and community engagement.",
    image: "/projects/tolo-preview.png",
    url: "https://apps.apple.com/us/app/tolo-social/id1668022575",
  },
  {
    id: "investcloud",
    title: "InvestCloud",
    description: "Financial software solutions for major financial institutions, focusing on data integration, ETL, and API development.",
    detailedDescription: "InvestCloud provides comprehensive financial software solutions for major financial institutions. I worked as both a Technical Trainer and Integration Developer, focusing on ETL processes, API development, and training other developers on integration workflows.",
    contributions: [
      "Built ETL pipelines for transactions, holdings, and account data",
      "Developed RESTful services and contributed to relational schema design",
      "Created developer onboarding programs covering ETL, data mapping, and integration workflows",
      "Led workshops on REST API design, data quality, and troubleshooting processes"
    ],
    technologies: ["Java", "Groovy", "GlassFish", "SQL", "ETL", "REST APIs"],
    challenges: "Handling large volumes of financial data while ensuring accuracy, security, and real-time processing. Additionally, creating effective training materials for complex integration workflows.",
    outcomes: "Delivered robust financial solutions that improved data processing efficiency and provided better insights for financial advisors. Reduced ramp-up time for new developers through improved documentation and training.",
    image: "/logos/IC-Logo.svg",
    url: "https://investcloud.com"
  },
  {
    id: "love-service",
    title: "Love & Service 1st",
    description: "A nonprofit landing page with links to community initiatives and resources.",
    detailedDescription: "Love & Service 1st is a nonprofit landing site built to provide a professional, welcoming presence online. The page is lightweight and responsive, with sections for mission statement, resources, and direct links to community initiatives.",
    contributions: [
      "Designed and built a responsive landing page with Next.js and Tailwind CSS",
      "Created mission-driven content sections for community engagement",
      "Implemented resource links and community initiative connections"
    ],
    technologies: ["Next.js", "Tailwind CSS", "Responsive Design"],
    challenges: "Delivering a polished, production-ready site quickly for a nonprofit with limited budget and timeline.",
    outcomes: "Gave the nonprofit a credible online presence, supporting outreach and community engagement.",
    image: "/projects/love-and-service-first.png",
    url: "https://loveandservice1st.com/"
  },
  {
    id: "amirblaq",
    title: "AMIR BLAQ",
    description: "A full-stack luxury fashion e-commerce platform with Next.js frontend and Django admin portal for content management.",
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
    technologies: ["Next.js", "React", "Type Script", "Tailwind CSS", "Django", "Django REST Framework", "PostgreSQL", "AWS S3", "Vercel"],
    challenges: "Creating a seamless integration between the headless Django backend and the Next.js frontend while ensuring proper data flow and image management. Additionally, implementing a dark theme across all components while maintaining accessibility and resolving complex React hydration issues.",
    outcomes: "Successfully delivered a full-stack e-commerce platform with an intuitive shopping experience on the frontend and a powerful admin portal that empowers the client to manage their product catalog without technical assistance.",
    image: "/projects/amir-b-preview.png",
    url: "https://amirb-ui.vercel.app/"
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
    id: "drink-drank-la",
    title: "Drink Drank LA",
    description: "A bar discovery app for Los Angeles using Mongo, Express, EJS, and the Yelp API.",
    detailedDescription: "Drink Drank LA helps users discover, track, and review LA bars with live Yelp data. Users can browse venues, save lists, and view details. The app demonstrates NoSQL modeling, third-party API integration, and MVC architecture with server-rendered templates.",
    contributions: [
      "Implemented real-time Yelp API integration for venue data",
      "Built personalized visited and wishlist tracking features",
      "Developed server-rendered MVC architecture with EJS templates"
    ],
    technologies: ["MongoDB", "Express.js", "EJS", "Yelp API", "Node.js"],
    challenges: "Integrating with third-party APIs while maintaining performance and creating an intuitive user experience for discovering and tracking venues.",
    outcomes: "Created a functional discovery platform with 500+ bars listed and 1000+ reviews, showcasing practical API integration and NoSQL design.",
    image: "/projects/drink-drank-la.png",
    url: "#"
  },
  {
    id: "artsy",
    title: "Artsy",
    description: "A creative community where artists share, collaborate, and sell artwork.",
    detailedDescription: "Artsy allows artists to publish portfolios, receive feedback, and list works for sale. Community features encourage sharing best practices and building audience. The platform emphasizes simplicity and collaboration to help artists grow their presence.",
    contributions: [
      "Built artist profiles and portfolio management features",
      "Implemented comments and community feedback system",
      "Created artwork listings with pricing and purchase options"
    ],
    technologies: ["Node.js", "MongoDB", "Express", "JavaScript"],
    challenges: "Creating an intuitive platform that balances community engagement with monetization opportunities while keeping the focus on the artwork.",
    outcomes: "Fostered a creative community with 200+ artist profiles and 1500+ artworks shared, providing collaboration and monetization opportunities for emerging artists.",
    image: "/projects/artsy-preview.jpg",
    url: "#"
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
