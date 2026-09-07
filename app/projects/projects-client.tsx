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
        "Modernization and redevelopment of WinkIntel.com — building and improving production features across the application stack.",
      achievements: [
        "Contribute to the modernization and redevelopment of WinkIntel.com, building and improving production features across the application stack.",
        "Develop and maintain full-stack functionality using React, Next.js, Node.js, PostgreSQL, and cloud-based services, with a focus on maintainable and scalable implementation.",
        "Diagnose and resolve issues across existing application code, APIs, and data flows while supporting the transition to a modernized platform architecture.",
        "Collaborate directly with technical leadership to translate business and product requirements into production-ready engineering solutions."
      ],
      technologies: ["React", "Next.js", "Node.js", "PostgreSQL", "TypeScript"],
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
      role: "Co-Founder & CTO",
      period: "October 2022 - January 2025",
      description:
        "Content discovery platform that promoted underground artists with engagement-focused ranking.",
      achievements: [
        "Led end-to-end development of a React Native (Expo) mobile app with a Supabase backend — real-time subscriptions, role-based access, and media upload infrastructure.",
        "Built a viral content ranking algorithm and improved feed performance by 40% through SWR caching.",
        "Directed sprint planning, code reviews, and iOS/Android deployments via Expo Application Services.",
        "Implemented authentication, creator onboarding, and feed performance improvements."
      ],
      technologies: ["React Native", "Expo", "Supabase", "SWR", "TypeScript"],
      logo: "/logos/tolo.jpeg",
      logoBg: "bg-white p-2 rounded-lg"
    },
    {
      company: "Simmr",
      role: "Full Stack Engineer (Contract)",
      period: "July 2023 - December 2025",
      description:
        "Specialized social platform focused on safety, privacy, and inclusive discovery for an ENM and polyamorous community.",
      achievements: [
        "Implemented client-side distance filtering and a virtualized discovery grid for performant browsing.",
        "Built Lambda@Edge SEO previews and integrated with CloudFront via CloudFormation.",
        "Delivered global image caching and optimization, improving perceived load and reducing bandwidth.",
        "Hardened the app with error boundaries, defensive checks, retries, and graceful fallbacks."
      ],
      technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "AWS (Lambda, CloudFront, S3)", "Redis", "SQS"],
      logo: "/logos/simmr-heart.png",
      logoBg: "bg-white p-2 rounded-lg"
    },
    {
      company: "InvestCloud",
      role: "Technical Trainer & Software Engineer",
      period: "July 2018 - June 2025",
      description:
        "Designed onboarding and training for API and integration developers at a fintech platform serving large institutions.",
      achievements: [
        "Built ETL pipelines for transactions, holdings, and account data.",
        "Developed RESTful services and contributed to relational schema design.",
        "Created developer onboarding programs covering ETL, data mapping, and integration workflows.",
        "Led workshops on API design, data quality, and troubleshooting processes."
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
