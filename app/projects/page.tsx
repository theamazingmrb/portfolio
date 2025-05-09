import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import AnimatedSection from "@/components/AnimatedSection";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Projects",
};

interface Project {
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

const projects: Project[] = [
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
    technologies: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "TensorFlow.js", "Chart.js", "WebSockets"],
    challenges: "The main challenge was processing large datasets of trading information in real-time while maintaining application performance. We also needed to create intuitive visualizations of complex trading patterns.",
    outcomes: "Increased user trading performance by an average of 23% based on user feedback. The platform now serves over 5,000 active traders with a 4.8/5 satisfaction rating.",
    image: "/projects/smart-trader.png",
    url: "https://smarttrader.io"
  },
  {
    id: "tolo",
    title: "TOLO",
    description: "A virality engine helping content creators get discovered fast.",
    detailedDescription: "TOLO is a platform designed to help underground artists and content creators gain visibility through a fair algorithm-based content discovery system.",
    contributions: [
      "Led the development team as Technical Co-Founder",
      "Architected the content recommendation algorithm using engagement metrics",
      "Built the React Native mobile application for iOS and Android",
      "Implemented secure user authentication and content management systems"
    ],
    technologies: ["React Native", "AWS", "Supabase", "Node.js", "PostgreSQL", "Firebase Analytics"],
    challenges: "Creating a fair and transparent algorithm that promotes quality content without being influenced by existing popularity was our biggest challenge. We also needed to ensure the platform could scale to handle thousands of content uploads daily.",
    outcomes: "Successfully launched with over 10,000 content creators onboarded in the first three months. Several creators achieved viral status through our platform, with some gaining over 100,000 new followers.",
    image: "/projects/tolo-preview.png",
    url: "https://toloapp.com"
  },
  {
    id: "candid",
    title: "Candid",
    description: "An ENM network app for the non-monogamous community.",
    detailedDescription: "Candid is a specialized social platform serving the non-monogamous, kink, and polyamorous communities, with a focus on security, privacy, and inclusivity.",
    contributions: [
      "Led full-stack development as Lead Developer",
      "Implemented robust privacy features and content moderation tools",
      "Designed and built the matching algorithm based on relationship preferences",
      "Created an inclusive and accessible user interface"
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "TypeScript", "AWS", "Socket.io", "Redis"],
    challenges: "Building a platform that maintains the highest standards of privacy and security while still providing a seamless user experience was challenging. We also needed to create sophisticated matching algorithms that account for complex relationship structures.",
    outcomes: "The platform now serves over 15,000 users with a strong focus on community safety. User retention rates exceed industry standards at 78% monthly active users.",
    image: "/projects/candid-preview.png",
    url: "https://simmr.co"
  },
  {
    id: "investcloud",
    title: "InvestCloud Projects",
    description: "Front-end development for major financial institutions and internal tools.",
    detailedDescription: "At InvestCloud, I worked on developing and maintaining financial software solutions for major institutions, focusing on data quality, API development, and user interface design.",
    contributions: [
      "Developed front-end interfaces for financial data visualization",
      "Created ETL scripts for processing and mapping financial data",
      "Designed RESTful APIs for client data extraction from CRM systems",
      "Implemented responsive dashboards for financial advisors"
    ],
    technologies: ["JavaScript", "SQL", "RESTful APIs", "ETL Tools", "CRM Integration", "HTML/CSS", "Responsive Design"],
    challenges: "Working with sensitive financial data required strict adherence to security protocols and regulations. We also needed to ensure data accuracy across multiple client accounts while maintaining system performance.",
    outcomes: "Successfully delivered projects for multiple Fortune 500 financial institutions, improving their data processing efficiency by 35% and enhancing advisor productivity through intuitive interfaces.",
    image: "/logos/IC-Logo.svg"
  },
  {
    id: "airbnb",
    title: "Airbnb Ambassador Site",
    description: "A site and portal for ambassadors to refer others and earn money.",
    detailedDescription: "During my contract role at Airbnb, I worked on redesigning key components of their affiliate management platform, focusing on improving navigation and aesthetic coherence.",
    contributions: [
      "Redesigned the ambassador dashboard for improved usability",
      "Implemented tracking systems for referral analytics",
      "Created responsive interfaces for both desktop and mobile users",
      "Optimized page load performance for international users"
    ],
    technologies: ["JavaScript", "React", "Node.js", "CSS3", "Responsive Design", "Analytics Integration"],
    challenges: "The platform needed to support multiple languages and currencies while maintaining a consistent user experience. We also had to ensure accurate tracking of referrals across different devices and platforms.",
    outcomes: "The redesigned platform resulted in a 27% increase in ambassador program participation and a 42% improvement in user satisfaction scores based on post-implementation surveys.",
    image: "/projects/airbnb.png",
    url: "https://airbnb.com"
  },
  {
    id: "drink-drank-la",
    title: "Drink Drank LA",
    description:
      "A Mongo/Express/EJS application using Yelp API to track local bars.",
    image: "/projects/drink-drank-la.png",
  },
  {
    id: "artsy",
    title: "Artsy",
    description: "A community for artists to share, view, and sell their work.",
    image: "/projects/artsy-preview.jpg",
  },
];

// Personal projects section removed

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-64 md:h-96 flex items-center justify-center overflow-hidden px-4 bg-gray-900 text-white">
        <div className="z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">My Work</h1>
          <p className="text-lg md:text-xl">
            Professional projects and experiences
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <AnimatedSection
        animationType="fadeInUp"
        className="py-12 md:py-20 bg-white"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                id={project.id}
                title={project.title}
                description={project.description}
                image={project.image}
              />
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection
        animationType="fadeInUp"
        className="py-12 md:py-20 bg-gray-100"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Professional Experience
          </h2>
          <ProfessionalExperience />
        </div>
      </AnimatedSection>

      {/* Call to Action */}
      <AnimatedSection
        animationType="fadeInLeft"
        className="bg-gray-900 text-white py-12 md:py-20"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Interested in collaboration?
          </h2>
          <p className="text-lg md:text-xl mb-8">
            Let&apos;s discuss how we can work together on your next project.
          </p>
          <Link
            href="/contact"
            className="bg-white text-gray-900 px-6 md:px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition duration-300"
          >
            Get in Touch
          </Link>
        </div>
      </AnimatedSection>

      <Footer />
    </main>
  );
}

function ProjectCard({ id, title, description, image, technologies }: Project) {
  return (
    <Link
      href={`/projects/${id}`}
      className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full"
    >
      <div className="relative h-48 w-full overflow-hidden bg-gray-100">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6 flex-grow">
        <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        {technologies && (
          <div className="mt-3">
            <div className="flex flex-wrap gap-1">
              {technologies.slice(0, 3).map((tech, index) => (
                <span 
                  key={index} 
                  className="inline-block bg-gray-100 text-gray-700 rounded-full px-2 py-1 text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
              {technologies.length > 3 && (
                <span className="inline-block bg-gray-100 text-gray-700 rounded-full px-2 py-1 text-xs font-medium">
                  +{technologies.length - 3} more
                </span>
              )}
            </div>
          </div>
        )}
      </div>
      <div className="px-6 pb-4">
        <span className="inline-block bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-sm font-semibold">
          View Details
        </span>
      </div>
    </Link>
  );
}

function ProfessionalExperience() {
  const experiences = [
    {
      company: "Smart Trader",
      role: "CTO & Founder",
      period: "2025 - Present",
      description:
        "Developed an AI-powered trading journal application for active traders and financial professionals, providing analytics and performance insights.",
      achievements: [
        "Built a comprehensive trading journal with customizable setup types and detailed performance analytics.",
        "Integrated OpenAI's GPT-4 for AI-powered trade analysis and personalized feedback.",
        "Implemented enterprise-level security with row-level security policies in Supabase.",
        "Created a responsive design that works seamlessly across desktop and mobile devices."
      ],
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "OpenAI API"],
      image: "/logos/smart-trader-logo.svg",
    },
    {
      company: "Candid",
      role: "Lead Developer",
      period: "2024 - Present",
      description:
        "Took over as the main developer for this social networking app for the non-monogamous, kink, and polyamorous community after the previous developer left.",
      achievements: [
        "Maintained and enhanced the secure verification system to ensure user authenticity and community safety.",
        "Improved the matching algorithm that connects users based on relationship preferences and interests.",
        "Optimized the events discovery platform for community gatherings and meetups.",
        "Enhanced the unique vouching system to build trust within the community."
      ],
      technologies: ["Capacitor", "TypeScript", "React", "Hasura", "GraphQL", "AWS"],
      image: "/projects/candid-preview.png",
    },
    {
      company: "InvestCloud",
      role: "Technical Trainer for Integration Developers",
      period: "2021 - Present",
      description:
        "Lead technical training programs for integration developers, empowering them to deliver high-quality solutions for financial institutions.",
      achievements: [
        "Trained over 50 developers in system integration, API usage, and front-end development best practices.",
        "Redesigned the Integration Developer Training Program to improve efficiency and engagement.",
        "Built interactive dashboards and training tools for use in onboarding programs.",
      ],
      technologies: ["Java", "JPA", "GlassFish", "Groovy", "APIs", "ETL",],
      image: "/logos/IC-Logo.svg",
    },
    {
      company: "General Assembly",
      role: "Lead Instructor, Software Development",
      period: "2020 - Present",
      description:
        "Lead and mentor students through an immersive software development curriculum, preparing them for careers in tech.",
      achievements: [
        "Taught over 100 students in software development fundamentals, including full-stack development, JavaScript, and React.",
        "Developed and delivered course content covering front-end, backend, and cloud technologies.",
        "Mentored students on capstone projects, career guidance, and interview preparation.",
      ],
      technologies: ["JavaScript", "React", "Node.js", "SQL", "AWS", "DJango", "Python", "APIs"],
      image: "/logos/GA.webp",
    },
    {
      company: "InvestCloud",
      role: "Integration Developer",
      period: "2018 - 2020",
      description:
        "Developed and integrated custom front-end solutions for financial clients, ensuring smooth connectivity with backend services.",
      achievements: [
        "Collaborated with cross-functional teams to implement responsive web applications for Raymond James and Neuberger Berman.",
        "Enhanced data visualization tools by integrating APIs and delivering interactive dashboards.",
        "Optimized the onboarding program for integration developers by creating step-by-step documentation and reusable templates.",
      ],
      technologies: [
        "JavaScript",
        "HTML",
        "CSS",
        "GraphQL",
        "SQL",
        "API Integration",
      ],
      image: "/logos/IC-Logo.svg",
    },
    {
      company: "TOLO",
      role: "Technical Co-founder / Lead Developer",
      period: "2022 - Present",
      description:
        "Spearheaded the development of a virality engine to help content creators grow their audience and gain visibility.",
      achievements: [
        "Led the development of the mobile app using React Native and Supabase.",
        "Built backend infrastructure using AWS Lambda to support high-traffic environments.",
        "Managed the entire development lifecycle, from architecture to app store deployment.",
      ],
      technologies: ["React Native", "Supabase", "AWS Lambda", "Node.js"],
      image: "/projects/tolo-preview.png",
      appLinks: {
        ios: "https://apps.apple.com/link-to-tolo-ios",
        android: "https://play.google.com/store/apps/details?id=tolo",
      },
    },
    {
      company: "Airbnb",
      role: "Contract Developer",
      period: "2017",
      description:
        "Built a referral platform to enable Airbnb ambassadors to refer new users and earn rewards.",
      achievements: [
        "Integrated Airbnb’s API for seamless referral tracking and reward management.",
        "Developed real-time systems for reward calculation across multiple channels.",
        "Optimized the platform for mobile and web environments to ensure a smooth user experience.",
      ],
      technologies: ["JavaScript", "API Integration"],
      image: "/projects/airbnb.png",
    },
    {
      company: "BBDO",
      role: "Frontend Developer",
      period: "2017 - 2018",
      description:
        "Created interactive banner ads and animations for major advertising campaigns.",
      achievements: [
        "Designed animations using Greensock (GSAP) for smooth, engaging user experiences.",
        "Optimized ad performance across multiple platforms and devices.",
        "Collaborated closely with creative teams to bring campaign concepts to life.",
      ],
      technologies: ["JavaScript", "GSAP"],
      image: "/logos/bbdo.jpeg",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {experiences.map((exp, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl"
        >
          <div className="flex items-center mb-4">
            <Image
              src={exp.image}
              alt={exp.company}
              width={64}
              height={64}
              className="w-16 h-16 object-contain mr-4"
            />
            <div>
              <h3 className="text-xl font-semibold text-blue-500">
                {exp.company}
              </h3>
              <p className="text-gray-600">{exp.role}</p>
              <p className="text-sm text-gray-500">{exp.period}</p>
            </div>
          </div>
          <p className="text-gray-800 mb-4">{exp.description}</p>
          <h4 className="font-semibold mb-2 text-gray-800">
            Key Achievements:
          </h4>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            {exp.achievements.map((achievement, i) => (
              <li key={i}>{achievement}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
