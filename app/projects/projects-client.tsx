'use client';

import Link from "next/link";
import Image from "next/image";
import { ProjectImage } from "@/components/ProjectImage";
import AnimatedSection from "@/components/AnimatedSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { UnifiedProjectCard } from "@/components/UnifiedProjectCard";
import { ModernProjectGrid } from "@/components/ModernProjectGrid";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

// Import the Project type from our unified data structure
import { Project } from "@/lib/projects";

function ProfessionalExperience() {
  const experiences = [
    {
      company: "Smart Trader",
      role: "Founder & Lead Developer",
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
      logo: "/logos/smart-trader-logo.svg",
      logoBg: "bg-white p-2 rounded-lg"
    },
    {
      company: "TOLO",
      role: "CTO and Co-Founder",
      period: "October 2022 - January 2025",
      description:
        "Content discovery platform that promoted underground artists with engagement-focused ranking.",
      achievements: [
        "Led full stack development with React, Node, and Postgres.",
        "Prototyped engagement-based ranking to reduce popularity bias.",
        "Owned sprints, backlog, and delivery in a lean environment.",
        "Implemented authentication, creator onboarding, and feed performance improvements."
      ],
      technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Redis"],
      logo: "/logos/tolo.jpeg",
      logoBg: "bg-white p-2 rounded-lg"
    },
    {
      company: "Simmr",
      role: "Full Stack Engineer",
      period: "January 2023 - July 2025",
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
      role: "Technical Trainer & Integration Developer",
      period: "December 2019 - June 2025",
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
        "Refactored core UI modules to improve navigation flow, visual consistency, and workflow clarity",
        "Implemented responsive components and simplified information hierarchy for ambassador dashboard",
        "Delivered optimized task flows that reduced support escalations by 30%",
        "Collaborated with product and design teams to ensure seamless integration with Airbnb's design system"
      ],
      technologies: ["JavaScript", "React", "Ruby on Rails", "SCSS", "PostgreSQL"],
      logo: "/logos/abnb.png",
      logoBg: "bg-white p-2 rounded-lg",
      impact: "Increased ambassador productivity and reduced operational overhead for the partnerships team"
    },
    {
      company: "BBDO Los Angeles",
      role: "Jr Front End Developer",
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
    <div className="space-y-6">
      {experiences.map((exp, index) => (
        <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <div className="flex flex-col sm:flex-row justify-between gap-4">
              <div className="flex items-start gap-4">
                {exp.logo && (
                  <div className={`${exp.logoBg} h-16 w-16 flex-shrink-0 flex items-center justify-center rounded-lg shadow-sm`}>
                    <div className="relative h-10 w-10">
                      <Image
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                )}
                <div>
                  <CardTitle className="text-2xl">{exp.company}</CardTitle>
                  <CardDescription className="text-lg font-medium">{exp.role}</CardDescription>
                  <p className="text-sm text-muted-foreground">{exp.period}</p>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">{exp.description}</p>
            
            <div className="mb-4">
              <h4 className="font-semibold mb-2">Key Achievements:</h4>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                {exp.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {exp.technologies.map((tech) => (
                <Badge key={tech} variant="secondary" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
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
      <AnimatedSection animationType="fadeIn" className="relative py-24 md:py-32 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              Projects & Experience
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              A curated collection of innovative projects and professional work across various technologies and industries
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Projects Section */}
      <AnimatedSection animationType="fadeInUp" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore a diverse range of projects showcasing expertise in modern web development, 
              mobile applications, and innovative solutions.
            </p>
          </div>
          
          <ModernProjectGrid projects={actualProjects} />
        </div>
      </AnimatedSection>

      <AnimatedSection animationType="fadeInUp" className="py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Professional Experience
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A journey through various roles and organizations, contributing to impactful projects 
              and growing as a developer and leader.
            </p>
          </div>
          
          <ProfessionalExperience />
        </div>
      </AnimatedSection>

      {/* Call to Action */}
      <AnimatedSection animationType="fadeInUp" className="py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Let's Build Something Amazing
          </h2>
          <p className="text-lg md:text-xl mb-10 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I'm always excited to take on new challenges and collaborate on innovative projects. 
            Let's discuss how we can work together to bring your ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/contact">
                Get In Touch
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/blog">
                Read My Blog
              </Link>
            </Button>
          </div>
        </div>
      </AnimatedSection>

      <Footer />
    </main>
  );
}
