'use client';

import Link from "next/link";
import Image from "next/image";
import { ProjectImage } from "@/components/ProjectImage";
import AnimatedSection from "@/components/AnimatedSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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

function ProjectCard({ id, title, description, image, technologies = [], url }: Project) {
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
      role: "CTO & Founder",
      period: "2025 - Present",
      description:
        "Developed an AI-powered trading journal application for active traders and financial professionals, providing analytics and performance insights.",
      achievements: [
        "Built a full-stack application using Next.js, TypeScript, and Supabase.",
        "Implemented AI-powered trade analysis using OpenAI's API.",
        "Created a responsive dashboard with interactive charts and data visualization.",
      ],
      technologies: ["Next.js", "TypeScript", "Supabase", "OpenAI", "Tailwind CSS"],
      logo: "/logos/smart-trader-logo.svg",
      logoBg: "bg-white p-2 rounded-lg"
    },
    {
      company: "TOLO",
      role: "Technical Co-Founder",
      period: "2024 - 2025",
      description:
        "Co-founded a platform helping underground artists and content creators gain visibility through fair algorithm-based content discovery.",
      achievements: [
        "Led development of the React Native mobile app for iOS and Android.",
        "Architected the content recommendation algorithm.",
        "Scaled the platform to handle thousands of daily active users.",
      ],
      technologies: ["React Native", "Node.js", "PostgreSQL", "AWS"],
      logo: "/logos/GA.webp",
      logoBg: "bg-white p-2 rounded-lg"
    },
    {
      company: "Simmr",
      role: "Lead Developer",
      period: "2023 - 2024",
      description:
        "Led development of a platform for the ethically non-monogamous community to connect and build relationships.",
      achievements: [
        "Built the web application using React and Node.js.",
        "Implemented secure authentication and user verification.",
        "Developed features for community building and event management.",
      ],
      technologies: ["React", "Node.js", "MongoDB", "GraphQL"],
      logo: "/logos/simmr.png",
      logoBg: "bg-white p-2 rounded-lg"
    },
    {
      company: "InvestCloud",
      role: "Software Engineer",
      period: "2021 - 2023",
      description:
        "Developed financial software solutions for major financial institutions, focusing on data quality and API development.",
      achievements: [
        "Created ETL processes for financial data processing.",
        "Developed RESTful APIs for client data integration.",
        "Built responsive dashboards for financial advisors.",
      ],
      technologies: ["JavaScript", "SQL", "REST APIs", "Node.js"],
      image: "/logos/investcloud.png",
    },
    {
      company: "Airbnb",
      role: "Frontend Engineer (Contract)",
      period: "2020 - 2021",
      description:
        "Worked on the affiliate marketing platform, improving the user experience for ambassadors.",
      achievements: [
        "Redesigned the ambassador dashboard for better usability.",
        "Implemented tracking systems for referral analytics.",
        "Optimized page load performance for international users.",
      ],
      technologies: ["React", "TypeScript", "GraphQL", "Next.js"],
      logo: "/logos/bbdo.jpeg",
      logoBg: "bg-white p-2 rounded-lg"
    },
    {
      company: "BBDO",
      role: "Frontend Developer",
      period: "2017 - 2018",
      description:
        "Created interactive banner ads and animations for major advertising campaigns.",
      achievements: [
        "Designed animations using Greensock (GSAP).",
        "Optimized ad performance across platforms.",
        "Collaborated with creative teams on campaign concepts.",
      ],
      technologies: ["JavaScript", "GSAP", "HTML5", "CSS3"],
      logo: "/logos/bbdo.png",
      logoBg: "bg-blue-100",
      image: "/logos/bbdo.png",
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
            {projects.map((project) => ({
              ...project,
              // Ensure we have a fallback image
              image: project.image || '/images/project-placeholder.jpg',
              // Ensure technologies is always an array
              technologies: project.technologies || []
            })).map((project) => (
              <ProjectCard
                key={project.id}
                id={project.id}
                title={project.title}
                description={project.description}
                image={project.image}
                technologies={project.technologies}
                url={project.url}
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
