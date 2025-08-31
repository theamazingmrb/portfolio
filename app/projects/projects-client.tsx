'use client';

import Link from "next/link";
import Image from "next/image";
import { ProjectImage } from "@/components/ProjectImage";
import AnimatedSection from "@/components/AnimatedSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Import the Project type from our unified data structure
import { Project } from "@/lib/projects";

function ProjectCard({ id, title, description, image, technologies = [], techStack = [], url }: Project) {
  // Use either technologies or techStack, whichever is available
  const techs = technologies?.length ? technologies : techStack || [];
  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full">
      <Link
        href={`/projects/${id}`}
        className="flex flex-col flex-grow"
      >
        <div className="relative h-48 w-full overflow-hidden bg-gray-100">
          <ProjectImage
            src={image}
            alt={`Screenshot of ${title}`}
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="p-6 flex-grow">
          <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 mb-4">{description}</p>
          
          {techs && techs.length > 0 && (
            <div className="mt-3">
              <div className="flex flex-wrap gap-1">
                {techs.slice(0, 3).map((tech, index) => (
                  <span 
                    key={index} 
                    className="inline-block bg-gray-100 text-gray-700 rounded-full px-2 py-1 text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
                {techs.length > 3 && (
                  <span className="inline-block bg-gray-100 text-gray-700 rounded-full px-2 py-1 text-xs font-medium">
                    +{techs.length - 3} more
                  </span>
                )}
              </div>
            </div>
          )}
        </div>
      </Link>
      <div className="px-6 pb-4 flex gap-2">
        <Link
          href={`/projects/${id}`}
          className="inline-block bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-sm font-semibold hover:bg-blue-200 transition-colors"
        >
          View Details
        </Link>
        {url && (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-100 text-green-800 rounded-full px-3 py-1 text-sm font-semibold hover:bg-green-200 transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            Visit Site
          </a>
        )}
      </div>
    </div>
  );
}

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
    <div className="space-y-8">
      {experiences.map((exp, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100"
        >
          <div className="p-6">
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
                  <h3 className="text-2xl font-bold text-gray-900">
                    {exp.company}
                  </h3>
                  <p className="text-lg text-gray-700 font-medium">{exp.role}</p>
                  <p className="text-sm text-gray-500">{exp.period}</p>
                </div>
              </div>
            </div>

            <p className="mt-4 text-gray-700 leading-relaxed">{exp.description}</p>

            {exp.achievements && exp.achievements.length > 0 && (
              <div className="mt-4">
                <h4 className="font-semibold text-gray-900 text-lg">Key Achievements:</h4>
                <ul className="list-disc list-inside mt-2 space-y-1.5 text-gray-700">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="leading-relaxed">{achievement}</li>
                  ))}
                </ul>
              </div>
            )}

            {exp.technologies && exp.technologies.length > 0 && (
              <div className="mt-4">
                <h4 className="font-semibold text-gray-900 text-lg">Technologies:</h4>
                <div className="flex flex-wrap gap-2 mt-2">
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-50 text-blue-800 text-sm font-medium px-3 py-1 rounded-full border border-blue-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function ProjectsClient({ projects }: { projects: Project[] }) {
  // Filter out work experiences from projects
  const actualProjects = projects.filter(project => 
    !['investcloud', 'bbdo'].includes(project.id)
  );
  
  // Log projects to help debug
  console.log('Projects after filtering:', actualProjects.map(p => p.id));
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-64 md:h-96 flex items-center justify-center overflow-hidden px-4 bg-gray-900 text-white">
        <div className="z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Projects and Related Experience</h1>
          <p className="text-lg md:text-xl">
            A collection of my work across various roles and organizations
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
            {actualProjects.map((project) => {
              // Create a complete project object with all required fields
              const completeProject = {
                ...project,
                // Ensure we have a fallback image
                image: project.image || '/images/project-placeholder.jpg',
                // Ensure technologies is always an array
                technologies: project.technologies || [],
                // Ensure details is present (required by Project interface)
                details: project.details || project.detailedDescription || ''
              };
              return (
                <ProjectCard
                  key={completeProject.id}
                  {...completeProject}
                />
              );
            })}

          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection
        animationType="fadeInUp"
        className="py-12 md:py-20 bg-gray-100"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Work Experience
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
