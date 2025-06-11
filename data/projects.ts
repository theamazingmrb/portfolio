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
  images?: string[];
}

export const projects: Project[] = [
  {
    id: "smart-trader",
    title: "Smart Trader",
    description:
      "AI-powered trading journal with analytics and trade performance insights for professional traders.",
    image: "/projects/smart-trader.png",
    details: "Smart Trader is a professional-grade trading journal application I developed for active traders and financial professionals. Built with Next.js, TypeScript, and Supabase, this platform helps traders track their performance, analyze patterns, and improve their strategies through data-driven insights and AI analysis.\n\nAs the lead developer on this project, I implemented several innovative features including customizable trade journaling with support for various setup types (FVG, order blocks, etc.), a comprehensive performance analytics dashboard with advanced filtering capabilities, and AI-powered trade analysis using OpenAI's GPT-4 model that provides personalized feedback on trade execution and risk management.",
    url: "https://smarttrader.io",
    githubUrl: "#",
    techStack: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "OpenAI API", "Chart.js"],
    features: [
      "AI-powered trade analysis and feedback",
      "Comprehensive performance analytics dashboard",
      "Customizable trade journaling",
      "Enterprise-grade security with Supabase",
      "Responsive design for all devices"
    ],
    images: [
      "/projects/smart-trader.png",
      "/projects/smart-trader-dashboard.png",
      "/projects/smart-trader-mobile.png"
    ]
  },
  {
    id: "tolo",
    title: "TOLO",
    description: "A virality engine helping content creators get discovered fast.",
    image: "/projects/tolo-preview.png",
    details: "TOLO (tap on, lift off) helps content be heard and seen quickly and organically. The app comprises a community of creators that dictate what trends and goes viral based on how people engage with content (audio/video/images). We are a virality engine that helps people and content get discovered fast.",
    url: "https://toloapp.com",
    githubUrl: "#",
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
    ]
  },
  {
    "id": "simmr",
    "title": "Simmr",
    "description": "A platform for the ethically non-monogamous community to connect and discover like-minded individuals.",
    "image": "/projects/simmr-preview.png",
    "details": "Simmr is a safe space for individuals to explore their identities, connect with others, and build meaningful relationships. The platform features a robust verification system, allowing users to confidently connect with others who share similar interests and values. Additionally, Simmr offers a range of features, including events, groups, and a unique vouching system, designed to foster a sense of community and belonging.",
    "url": "https://simmr.co",
    "githubUrl": "#",
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
    ]
  },
  {
    id: "investcloud",
    title: "InvestCloud Projects",
    description:
      "Front-end development for major financial institutions and internal tools.",
    image: "/logos/IC-Logo.svg",
    details:
      "At InvestCloud, I worked on multiple projects developing front-end solutions for major financial institutions. I focused on creating responsive, user-friendly interfaces that integrated seamlessly with complex backend systems. My work included building interactive dashboards, data visualization tools, and client-facing portals that handled sensitive financial information with the highest security standards.\n\nI collaborated with cross-functional teams to implement custom solutions for clients like Raymond James and Neuberger Berman, ensuring their specific requirements were met while maintaining the overall system architecture. I also contributed to enhancing the developer onboarding program by creating comprehensive documentation and reusable templates.\n\nTechnologies used: JavaScript, HTML, CSS, GraphQL, SQL, and various API integrations.",
  },
  {
    id: "airbnb",
    title: "Airbnb Ambassador Site",
    description:
      "Redesigned key components of the affiliate management platform.",
    image: "/projects/airbnb.png",
    details:
      "As a contractor for Airbnb, I led the redesign of crucial elements within their affiliate management platform. This project focused on enhancing navigation and improving aesthetic coherence across the site. By leveraging my expertise in front-end development and UX design, I created a more intuitive and visually appealing interface that streamlined the affiliate management process. This redesign not only improved user experience for Airbnb's ambassadors but also contributed to more efficient management of the affiliate program.",
    url: "https://airbnb.com"
  },
  {
    id: "drink-drank-la",
    title: "Drink Drank LA",
    description:
      "A Mongo/Express/EJS application using Yelp API to track local bars.",
    image: "/projects/drink-drank-la.png",
    details:
      "Drink Drank LA is a web application built using MongoDB, Express.js, and EJS templating engine. It leverages the Yelp API to help users discover and keep track of bars in the Los Angeles area. The app allows users to search for bars, view detailed information about each venue, and save their favorite spots. Key features include real-time updates on bar information, user reviews and ratings, and personalized lists of visited and wishlist bars. This project showcases my ability to integrate third-party APIs, work with NoSQL databases, and create dynamic web applications using the MVC architecture.",
  },
  {
    id: "artsy",
    title: "Artsy",
    description: "A community for artists to share, view, and sell their work.",
    image: "/projects/artsy-preview.jpg",
    details:
      "Artsy is a community for artists. With Artsy, artists have the ability to share their work, view other people's work, and post best practices and tips on their profiles. Users can also share their opinions on other users' art through comments. Users will also have the ability to post prices for their art so that they can sell it on Artsy as well (in the post title).",
  },
];
