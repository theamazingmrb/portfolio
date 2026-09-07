'use client';

import Link from "next/link";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ModernProjectGrid } from "@/components/ModernProjectGrid";

// Import the Project type from our unified data structure
import { Project } from "@/lib/projects";

function ProfessionalExperience() {
  const experiences = [
    {
      company: "Wink, Inc.",
      role: "Full Stack Developer (Contract)",
      period: "July 2026 - Present",
      description:
        "Full-stack development for enterprise B2B intelligence platform",
      achievements: [
        "Architected and delivered full-stack features for a SaaS platform serving enterprise clients, including user authentication, role-based permissions, and data management interfaces.",
        "Built responsive web applications using SvelteKit and TypeScript with a focus on type safety, maintainability, and scalable component architecture.",
        "Designed and implemented secure server-side APIs and database access layers with MySQL, ensuring data integrity and proper authorization controls.",
        "Participated in code reviews and contributed to engineering standards, improving code quality and team development practices."
      ],
      technologies: ["SvelteKit", "Svelte", "TypeScript", "Node.js", "MySQL", "Git"],
      logo: "/logos/wink.png",
      logoBg: "bg-white p-2 rounded-lg"
    },
    {
      company: "Daily Wick",
      role: "Founder & Full Stack Engineer",
      period: "April 2025 - Present",
      description:
        "AI-assisted trading journal that helps traders log, analyze, and improve decision making with actionable insights.",
      achievements: [
        "Built the full stack with Next.js, TypeScript, and Supabase.",
        "AI-assisted trade reviews reduce manual analysis time for users.",
        "Interactive charting for trade and performance insights.",
        "Accessible UI with responsive layout and dark mode."
      ],
      technologies: ["Next.js", "TypeScript", "Supabase", "OpenAI API", "Tailwind CSS"],
      logo: "/logos/daily-wick-logo.svg",
      logoBg: "bg-white p-2 rounded-lg"
    },
    {
      company: "TOLO",
      role: "CTO & Co-Founder (Part-time, nights)",
      period: "October 2022 - January 2025",
      description:
        "Mobile content discovery platform for independent artists.",
      achievements: [
        "Led end-to-end development of a React Native (Expo) app with a Supabase backend, including real-time subscriptions, role-based access, and media upload infrastructure.",
        "Designed a viral content ranking algorithm and improved feed performance by 40% through SWR caching.",
        "Directed sprint planning, code reviews, and iOS/Android release management via Expo Application Services."
      ],
      technologies: ["React Native", "Expo", "Supabase", "SWR", "TypeScript"],
      logo: "/logos/tolo.jpeg",
      logoBg: "bg-white p-2 rounded-lg"
    },
    {
      company: "Simmr",
      role: "Full Stack Engineer (Freelance)",
      period: "July 2023 - December 2025",
      description:
        "Social discovery platform · 2,000+ active users.",
      achievements: [
        "Engineered scalable APIs and event-driven architecture using Apollo GraphQL, Hasura, and Node.js, including real-time notifications and async job workers.",
        "Built a global image caching pipeline using Sharp and S3, reducing bandwidth costs and improving load times by 40%.",
        "Integrated Twilio, Stripe, Mixpanel, and AWS SES for communications, payments, and analytics.",
        "Managed deployment and provisioning with Serverless Framework and Docker, automating migrations and reducing environment inconsistencies."
      ],
      technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "AWS (Lambda, CloudFront, S3)", "Redis", "SQS"],
      logo: "/logos/simmr-heart.png",
      logoBg: "bg-white p-2 rounded-lg"
    },
    {
      company: "InvestCloud",
      role: "Software Engineer & Technical Trainer",
      period: "July 2018 - June 2025",
      description:
        "Leading provider of digital financial services applications · Promoted through four roles over seven years.",
      achievements: [
        "Built and maintained ETL pipelines and internal automation tools using PostgreSQL, MySQL, Python, and Groovy, improving data processing efficiency by 25% and cutting integration setup time by 40%.",
        "Designed and implemented SOAP/RESTful APIs and relational database models supporting enterprise-scale financial applications for 50+ institutions.",
        "Debugged and resolved integration issues for 100+ developers globally, reducing resolution time through documentation and repeatable runbooks.",
        "Partnered with Engineering, QA, and Product teams to diagnose root causes of production data issues and verify fixes before rollout, cutting production incidents by 30%.",
        "Led technical training for the broader engineering org on debugging, integration patterns, and best practices, improving team efficiency by 30%."
      ],
      technologies: ["Java", "Groovy", "GlassFish", "SQL", "ETL", "REST APIs"],
      logo: "/logos/IC-Logo.svg",
      logoBg: "bg-white p-2 rounded-lg"
    },
    {
      company: "Airbnb",
      role: "Front End Developer (Contract)",
      period: "June 2017 - August 2017",
      description:
        "Short-term contract focused on modernizing Airbnb's host ambassador platform with measurable engagement and support improvements.",
      achievements: [
        "Built and modernized frontend UI components for Airbnb’s host management platform, improving the host onboarding and listing management experience.",
        "Refactored core UI modules to improve navigation flow, visual consistency, and workflow clarity.",
        "Implemented responsive components and simplified information hierarchy for the ambassador dashboard.",
        "Collaborated with product and design teams to ensure seamless integration with Airbnb's design system."
      ],
      technologies: ["JavaScript", "React", "Ruby on Rails", "SCSS", "PostgreSQL"],
      logo: "/logos/abnb.png",
      logoBg: "bg-white p-2 rounded-lg"
    },
    {
      company: "BBDO Los Angeles",
      role: "Jr. Front End Developer",
      period: "October 2017 - July 2018",
      description:
        "Built interactive campaign pages and motion-driven ad experiences with tight performance budgets.",
      achievements: [
        "Developed HTML5 and JavaScript campaign experiences for major brands.",
        "Optimized animations and assets for performance and reach.",
        "Partnered closely with creative to hit brand and accessibility goals.",
        "Delivered on fast timelines across concurrent campaigns."
      ],
      technologies: ["JavaScript", "HTML", "CSS", "GSAP", "Responsive UI"],
      logo: "/logos/bbdo.jpeg",
      logoBg: "bg-white p-2 rounded-lg"
    },
  ];

  return (
    <div className="experience-timeline">
      {experiences.map(exp => (
        <details key={exp.company}>
          <summary>
            <span className="experience-company"><Image src={exp.logo} alt="" width={38} height={38} /><span>{exp.company}<span className="experience-role">{exp.role}</span></span></span>
            <span className="experience-period">{exp.period}</span>
            <span className="experience-expand" aria-hidden="true">+</span>
          </summary>
          <div className="experience-detail">
            <p>{exp.description}</p>
            <ul>{exp.achievements.map(achievement => <li key={achievement}>{achievement}</li>)}</ul>
            <div className="project-technologies">{exp.technologies.map(tech => <span key={tech}>{tech}</span>)}</div>
          </div>
        </details>
      ))}
    </div>
  );
}

export default function ProjectsClient({ projects }: { projects: Project[] }) {
  // Filter out work experiences from projects
  const actualProjects = projects.filter(project => 
    !['investcloud', 'bbdo'].includes(project.id)
  );
  
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero Section */}
      <section className="editorial-page-header studio-container">
        <span className="eyebrow section-kicker">The portfolio / Selected projects</span>
        <h1>Less theory.<br /><span className="serif-word">More shipped.</span></h1>
        <p>From independent experiments to platforms people rely on. A collection of products built with care, curiosity, and a full-stack perspective.</p>
      </section>

      {/* Projects Section */}
      <section className="studio-container studio-section" aria-label="Project collection">
        <ModernProjectGrid projects={actualProjects} />
      </section>

      <AnimatedSection animationType="fadeInUp" className="studio-section bg-secondary/50">
        <div className="studio-container">
          <div className="section-heading">
            <div><span className="eyebrow section-kicker">The journey / Professional experience</span><h2>Good work.<br /><span className="serif-word">Good company.</span></h2></div>
            <span className="eyebrow text-muted-foreground">Select a role to explore</span>
          </div>
          
          <ProfessionalExperience />
        </div>
      </AnimatedSection>

      {/* Call to Action */}
      <div className="studio-container project-next-step">
        <span className="eyebrow">There’s a story behind every build.</span>
        <Link href="/blog" className="text-link">Read the field notes ↗</Link>
      </div>

      <Footer />
    </main>
  );
}
