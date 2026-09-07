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
      role: "Co-Founder & CTO",
      period: "October 2022 - January 2025",
      description:
        "Content discovery platform that promoted underground artists with engagement-focused ranking.",
      achievements: [
        "Led technical execution from zero to App Store launch — React Native (Expo), Supabase, and a viral-ranking algorithm that improved feed performance by 40% via SWR caching.",
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
        "Owned API design, schema migration, and infrastructure for a platform serving 2,000+ active users (Node.js, Apollo GraphQL, Hasura, PostgreSQL, AWS).",
      ],
      technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "AWS (Lambda, CloudFront, S3)"],
      logo: "/logos/simmr-heart.png",
      logoBg: "bg-white p-2 rounded-lg"
    },
    {
      company: "InvestCloud",
      role: "Technical Trainer & Software Engineer",
      period: "July 2018 - June 2025",
      description:
        "Enterprise fintech platform serving 50+ financial institutions · promoted through four roles over seven years.",
      achievements: [
        "Owned API integrations across 50+ financial institutions — resolving issues for 100+ developers globally and cutting resolution time by 40% through runbooks and repeatable workflows.",
        "Led technical training and onboarding on REST/SOAP integration patterns and platform architecture, shortening new-developer ramp-up across global engineering teams.",
        "Built internal tooling and ETL pipelines with PostgreSQL, MySQL, Python, and Groovy, cutting integration setup time by 40%."
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
