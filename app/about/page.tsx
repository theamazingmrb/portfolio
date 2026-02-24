"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import AnimatedSection from "@/components/AnimatedSection";
import Footer from "@/components/Footer";
import Head from "next/head";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

// Types
interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
  companyUrl?: string;
  logo?: string;
}

interface Skill {
  category: string;
  items: { name: string; level: number }[];
}

interface SideProject {
  title: string;
  period: string;
  description: string;
  highlights: string[];
  technologies: string[];
  projectUrl?: string;
  githubUrl?: string;
  logo?: string;
}

// Experiences - Categorized
const fullTimeExperience = [
  {
    title: "Educator & Mentor",
    company: "General Assembly",
    period: "October 2020 - Present",
    description: "Led full-time software engineering bootcamps, training aspiring developers in modern full-stack web development.",
    achievements: [
      "Instructed 150+ students in full-stack development using React, Node.js, Express, MongoDB",
      "Designed project-based lessons emphasizing scalability and real-world application",
      "Mentored students 1-on-1 through portfolio projects and technical interviews",
      "Collaborated with instructional teams to evolve curriculum content"
    ],
    technologies: ["React", "Node.js", "Express", "MongoDB", "Python", "Django"],
    companyUrl: "https://generalassemb.ly",
    logo: "/logos/GA.webp"
  },
  {
    title: "Software Engineer and Technical Trainer",
    company: "InvestCloud Inc.",
    period: "July 2018 - June 2025",
    description: "Leading provider of flexible and fully integrated digital applets for financial services. Promoted through four roles over seven years.",
    achievements: [
      "Developed and maintained ETL pipelines for financial data transformation using PostgreSQL, MySQL, Python, and Groovy",
      "Designed and implemented SOAP and RESTful APIs and relational database models for enterprise-scale applications",
      "Built modular UI components and dashboards for client platforms, enhancing usability and accessibility",
      "Automated batch data workflows and integrations, reducing manual operations by 30%",
      "Trained 100+ developers across global teams in best practices and integration workflows"
    ],
    technologies: ["React", "TypeScript", "PostgreSQL", "Python", "Groovy", "REST APIs", "SOAP"],
    companyUrl: "https://investcloud.com",
    logo: "/logos/IC-Logo.svg"
  },
  {
    title: "Jr Front End Developer",
    company: "BBDO Los Angeles",
    period: "October 2017 - July 2018",
    description: "A major global advertising network known for award-winning campaigns.",
    achievements: [
      "Developed interactive campaign pages and microsites using JavaScript, HTML5, and CSS3",
      "Collaborated with creative and UX teams to deliver pixel-perfect, responsive designs",
      "Implemented reusable components and animation sequences reducing development time by 20%",
      "Partnered with QA and production teams for high-profile brand campaigns"
    ],
    technologies: ["JavaScript", "HTML5", "CSS3", "React"],
    companyUrl: "https://bbdo.com",
    logo: "/logos/bbdo.jpeg"
  }
];

const ventures = [
  {
    title: "CTO and Co-Founder",
    company: "TOLO",
    period: "October 2022 - January 2025",
    description:
      "Content discovery platform that promoted underground artists with engagement-focused ranking.",
    achievements: [
      "Led full stack development with React, Node, and Postgres",
      "Prototyped engagement-based ranking to reduce popularity bias",
      "Owned sprints, backlog, and delivery in a lean environment",
      "Implemented authentication, creator onboarding, and feed performance improvements"
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Redis"],
    companyUrl: "https://tolo.app",
    logo: "/logos/tolo.jpeg"
  }
];

// Freelance & Client Work
const freelanceProjects = [
  {
    title: "That Aisle",
    company: "Mobile App Development Client",
    period: "2025-2026",
    description: "Comprehensive React Native mobile application and React admin portal for hair product discovery and community engagement. Delivered full-stack solution including mobile app, admin dashboard, content moderation, and partnership management.",
    achievements: [
      "Built React Native mobile app with emoji reactions, community forum, and advanced user profiles",
      "Created React admin portal with advanced reporting, content moderation, and partnership management",
      "Implemented Firebase real-time features across both mobile and web platforms",
      "Developed comprehensive product catalog system with 3,500+ products and custom search",
      "Standardized UI components and modal designs across 200+ commits",
      "Integrated error logging system and real-time notifications"
    ],
    technologies: ["React Native", "React", "TypeScript", "Firebase", "Redux", "React Navigation", "Vite", "Tailwind CSS", "React Query"],
    companyUrl: "https://www.thataisle.com/",
    appStoreUrl: "https://apps.apple.com/ca/app/that-aisle/id6504048646",
    logo: "/projects/that_aisle/thataisle.png"
  },
  {
    title: "Simmr",
    company: "Full Stack Engineer (Freelance)",
    period: "July 2023 – January 2026",
    description: "A social platform serving the non-monogamous and polyamorous communities.",
    achievements: [
      "Engineered scalable discovery platform serving 2,000+ users with React, TypeScript, and Apollo GraphQL",
      "Designed and deployed AWS Lambda@Edge functions and CloudFront integrations for SEO performance",
      "Built global image caching pipeline using Sharp and S3, reducing bandwidth costs by 40%",
      "Developed event-driven architecture with Hasura event triggers and asynchronous job workers",
      "Integrated Twilio, Stripe, Mixpanel, and AWS SES for communication, payments, and analytics",
      "Managed infrastructure using Serverless Framework, Docker, and PostgreSQL"
    ],
    technologies: ["React", "TypeScript", "Next.js", "Apollo GraphQL", "Hasura", "AWS", "Twilio", "Stripe"],
    companyUrl: "https://simmr.app",
    logo: "/logos/simmr-heart.png"
  },
  {
    title: "Software Engineer",
    company: "Airbnb",
    period: "2020 - 2021",
    description: "Modernized Airbnb's host ambassador platform with significant improvements in user engagement and support efficiency.",
    achievements: [
      "Led full-stack modernization of host ambassador platform improving user engagement by 25%",
      "Implemented React components and Node.js APIs for enhanced platform functionality",
      "Optimized support workflows reducing response times and improving host satisfaction",
      "Collaborated with cross-functional teams to deliver scalable solutions"
    ],
    technologies: ["React", "Node.js", "Express", "MongoDB", "Ruby on Rails"],
    companyUrl: "https://airbnb.com",
    logo: "/projects/airbnb.png"
  },
  {
    title: "AMIR BLAQ",
    company: "Freelance Project",
    period: "2024",
    description: "Full-stack e-commerce platform with Next.js frontend and Django admin portal for luxury fashion brand.",
    achievements: [
      "Built responsive dark-themed UI with interactive product displays",
      "Implemented Django REST API for product management",
      "Created custom admin portal for client inventory management"
    ],
    technologies: ["Next.js", "Django", "PostgreSQL", "AWS S3"],
    companyUrl: "https://amirb-ui.vercel.app/",
    logo: "/projects/amir-b-preview.png"
  },
  {
    title: "Love & Service 1st",
    company: "Nonprofit Client",
    period: "2024",
    description: "Professional nonprofit landing page with community resources and mission-driven content.",
    achievements: [
      "Designed responsive landing page with Next.js and Tailwind CSS",
      "Created mission-driven content sections for community engagement",
      "Implemented resource links and community initiative connections"
    ],
    technologies: ["Next.js", "Tailwind CSS"],
    companyUrl: "https://loveandservice1st.com/",
    logo: "/projects/love-and-service-first.png"
  }
];

// Skills
const skills: Skill[] = [
  {
    category: "Frontend Development",
    items: [
      { name: "React/Next.js", level: 5 },
      { name: "TypeScript", level: 5 },
      { name: "Tailwind CSS", level: 5 },
      { name: "HTML/CSS", level: 5 }
    ]
  },
  {
    category: "Backend Development",
    items: [
      { name: "Node.js", level: 4 },
      { name: "Python", level: 4 },
      { name: "PostgreSQL", level: 4 },
      { name: "REST APIs", level: 5 }
    ]
  },
  {
    category: "Cloud & DevOps",
    items: [
      { name: "AWS", level: 4 },
      { name: "Vercel", level: 5 },
      { name: "Docker", level: 3 },
      { name: "CI/CD", level: 4 }
    ]
  },
  {
    category: "Tools & Others",
    items: [
      { name: "Git/GitHub", level: 5 },
      { name: "Testing", level: 4 },
      { name: "Agile/Scrum", level: 4 },
      { name: "Mentoring", level: 5 }
    ]
  }
];

// Side Projects
const sideProjects: SideProject[] = [
  {
    title: "Smart Trader",
    period: "April 2025 - Present",
    description: "AI-assisted trading journal that helps traders log, analyze, and improve decision making with actionable insights.",
    highlights: [
      "Built full stack with Next.js, TypeScript, and Supabase",
      "AI-assisted trade reviews reduce manual analysis time",
      "Interactive charting for trade and performance insights",
      "Accessible UI with responsive layout and dark mode"
    ],
    technologies: ["Next.js", "TypeScript", "Supabase", "OpenAI API", "Tailwind CSS"],
    projectUrl: "https://smarttrader.app",
    githubUrl: "https://github.com/theamazingmrb/smart-trader",
    logo: "/projects/smart-trader.png"
  },
  {
    title: "Baby Tracker",
    period: "2025 - Present",
    description: "Privacy-first baby tracking platform with Django REST, PostgreSQL, and AI-powered insights.",
    highlights: [
      "Multi-tenant architecture with complete data isolation",
      "AI insights for feeding and sleep patterns",
      "Comprehensive activity tracking",
      "Dockerized deploys for AWS EC2"
    ],
    technologies: ["Django", "PostgreSQL", "Docker", "Next.js", "Nginx"],
    projectUrl: "http://babytracker.xyz",
    githubUrl: "https://github.com/theamazingmrb/baby-tracker-api",
    logo: "/projects/baby-tracker.png"
  }
];

// Skill Bar Component
function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-sm text-muted-foreground">{level}/5</span>
      </div>
      <div className="w-full bg-secondary rounded-full h-2" role="progressbar" aria-valuemin={0} aria-valuemax={5} aria-valuenow={level}>
        <div
          className="bg-primary h-2 rounded-full transition-all duration-500"
          style={{ width: `${(level / 5) * 100}%` }}
        />
      </div>
    </div>
  );
}

export default function AboutPage() {
  const [copyFeedback, setCopyFeedback] = useState("");
  const [activeTab, setActiveTab] = useState<"experience" | "skills" | "teaching" | "projects">("experience");

  const copyEmail = useCallback(() => {
    navigator.clipboard
      .writeText("billie@houseofheidelberg.com")
      .then(() => {
        setCopyFeedback("Email copied!");
        setTimeout(() => setCopyFeedback(""), 2000);
      })
      .catch(() => {
        setCopyFeedback("Failed to copy");
        setTimeout(() => setCopyFeedback(""), 2000);
      });
  }, []);

  return (
    <>
      <Head>
        <title>Billie Heidelberg Jr. — About</title>
        <meta name="description" content="Full Stack Developer and educator specializing in React, TypeScript, Node.js, Next.js, and AWS. 7+ years shipping scalable products and mentoring engineers." />
        <meta property="og:title" content="Billie Heidelberg Jr. — Full Stack Developer" />
        <meta property="og:description" content="React, TypeScript, Node.js, Next.js, AWS. Builder, mentor, and collaborator focused on performance and great UX." />
        <meta property="og:type" content="profile" />
        <meta name="twitter:card" content="summary" />
      </Head>

      <Navbar />

      <main className="flex-grow bg-background text-foreground">
        {/* Hero */}
        <AnimatedSection animationType="fadeIn" className="relative py-12 sm:py-16 md:py-24 lg:py-32 bg-secondary/30 pt-20 sm:pt-24 md:pt-28 lg:pt-32">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 tracking-tight px-2">
                Billie Heidelberg Jr.
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground px-4">
                Full Stack Developer • Mobile Expert
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Intro */}
        <AnimatedSection animationType="fadeInUp" className="py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="md:w-1/3 flex justify-center">
                <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 relative rounded-full border-4 border-background shadow-lg overflow-hidden">
                  <Image
                    src="/me.png"
                    alt="Portrait of Billie Heidelberg Jr."
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
              </div>

              <div className="md:w-2/3">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 px-2">Full Stack Developer • Mobile Engineer</h2>

                <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-4 sm:mb-6 px-2">
                  I am a <strong>full stack developer</strong>, <strong>mobile engineer</strong>, and technical leader with <strong>7+ years of experience</strong> building scalable web and mobile applications. I specialize in <strong>React</strong>, <strong>TypeScript</strong>, <strong>Node.js</strong>, and modern cloud-native architectures, with a focus on performance, reliability, and thoughtful user experience. I have led <strong>teams of 5 to 8 developers</strong> while remaining deeply hands-on in architecture, product delivery, and clean, maintainable code.
                </p>

                <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-4 sm:mb-6 px-2">
                  Alongside engineering, I have mentored <strong>150+ developers</strong> through General Assembly's Software Engineering Immersive. Teaching strengthened my ability to communicate complex ideas clearly, support growing engineers, and collaborate closely with product and design teams. I bring a craftsman's mindset to building software and care deeply about creating tools that are both technically strong and genuinely helpful to users.
                </p>

                <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-6 sm:mb-8 px-2">
                  Today, I am focused on opportunities where I can contribute as a hands-on engineer, help shape technical direction, and build impactful products at scale. If you are looking for someone who blends strong fundamentals, leadership, and mentorship with a passion for shipping meaningful software, let's connect.
                </p>

                <div className="flex flex-wrap gap-2 sm:gap-3 px-2">
                  <Button onClick={copyEmail} aria-live="polite">
                    ✉️ <span>{copyFeedback ? copyFeedback : "Email Me"}</span>
                  </Button>
                  <Button variant="outline" asChild>
                    <a
                      href="https://github.com/theamazingmrb"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="View my GitHub profile"
                    >
                      GitHub
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a
                      href="https://linkedin.com/in/bheidelberg"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="View my LinkedIn profile"
                    >
                      LinkedIn
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a
                      href="/documents/Billie_Heidelberg_Software_Engineer_Resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Download Resume"
                    >
                      📄 Download Resume
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Tabs */}
        <div className="container mx-auto px-4 pb-12 sm:pb-16">
          <div className="border-b mb-6 sm:mb-8 overflow-x-auto" role="tablist" aria-label="About page sections">
            <div className="flex space-x-2 sm:space-x-4 md:space-x-8 min-w-max sm:min-w-0">
              <Button
                variant={activeTab === "experience" ? "default" : "ghost"}
                onClick={() => setActiveTab("experience")}
                className="rounded-b-none border-b-2 text-xs sm:text-sm md:text-base px-2 sm:px-3 md:px-4 whitespace-nowrap"
              >
                Experience
              </Button>
              <Button
                variant={activeTab === "skills" ? "default" : "ghost"}
                onClick={() => setActiveTab("skills")}
                className="rounded-b-none border-b-2 text-xs sm:text-sm md:text-base px-2 sm:px-3 md:px-4 whitespace-nowrap"
              >
                Skills
              </Button>
              <Button
                variant={activeTab === "teaching" ? "default" : "ghost"}
                onClick={() => setActiveTab("teaching")}
                className="rounded-b-none border-b-2 text-xs sm:text-sm md:text-base px-2 sm:px-3 md:px-4 whitespace-nowrap"
              >
                Teaching
              </Button>
              <Button
                variant={activeTab === "projects" ? "default" : "ghost"}
                onClick={() => setActiveTab("projects")}
                className="rounded-b-none border-b-2 text-xs sm:text-sm md:text-base px-2 sm:px-3 md:px-4 whitespace-nowrap"
              >
                Side Projects
              </Button>
            </div>
          </div>

          {/* Experience */}
          <div className="mt-8">
            {activeTab === "experience" && (
              <AnimatedSection animationType="fadeIn">
                <h3 className="text-3xl font-bold mb-8" id="tab-experience">Work Experience</h3>
                <div className="space-y-12" role="tabpanel" aria-labelledby="tab-experience-trigger">

                  {/* Full-Time Experience */}
                  <div>
                    <h4 className="text-2xl font-semibold mb-6 text-primary">Full-Time Experience</h4>
                    <div className="space-y-8">
                      {fullTimeExperience.map((exp: any, index: number) => (
                        <Card key={`fulltime-${exp.company}-${index}`} className="hover:shadow-lg transition-shadow duration-300">
                          <CardHeader>
                            <div className="flex items-center gap-4">
                              {exp.logo && (
                                <div className="flex-shrink-0 w-12 h-12 relative">
                                  <Image
                                    src={exp.logo}
                                    alt={`${exp.company} logo`}
                                    fill
                                    className="object-contain"
                                  />
                                </div>
                              )}
                              <div>
                                <CardTitle className="text-xl">{exp.title}</CardTitle>
                                <CardDescription className="flex flex-wrap items-center gap-2">
                                  {exp.companyUrl ? (
                                    <a
                                      href={exp.companyUrl}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="hover:text-primary transition-colors"
                                    >
                                      {exp.company}
                                    </a>
                                  ) : (
                                    exp.company
                                  )}
                                  <span>•</span>
                                  <span>{exp.period}</span>
                                  <Badge variant="outline" className="ml-2">Contract</Badge>
                                </CardDescription>
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <p className="text-muted-foreground mb-4">{exp.description}</p>
                            {exp.achievements && exp.achievements.length > 0 && (
                              <div className="mb-6">
                                <h5 className="font-semibold mb-3">Key Achievements:</h5>
                                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                                  {exp.achievements.map((achievement: any, i: number) => (
                                    <li key={i}>{achievement}</li>
                                  ))}
                                </ul>
                              </div>
                            )}
                            <div className="flex flex-wrap gap-2">
                              {exp.technologies.map((tech: string, i: number) => (
                                <Badge key={i} variant="secondary">{tech}</Badge>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>

                  {/* Freelance & Client Work */}
                  <div>
                    <h4 className="text-2xl font-semibold mb-6 text-primary">Freelance & Client Work</h4>
                    <div className="space-y-8">
                      {freelanceProjects.map((exp: any, index: number) => (
                        <Card key={`freelance-${exp.company}-${index}`} className="hover:shadow-lg transition-shadow duration-300">
                          <CardHeader>
                            <div className="flex items-center gap-4">
                              {exp.logo && (
                                <div className="flex-shrink-0 w-12 h-12 relative">
                                  <Image
                                    src={exp.logo}
                                    alt={`${exp.company} logo`}
                                    fill
                                    className="object-contain"
                                  />
                                </div>
                              )}
                              <div>
                                <CardTitle className="text-xl">{exp.title}</CardTitle>
                                <CardDescription className="flex flex-wrap items-center gap-2">
                                  {exp.companyUrl ? (
                                    <a
                                      href={exp.companyUrl}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="hover:text-primary transition-colors"
                                    >
                                      {exp.company}
                                    </a>
                                  ) : (
                                    exp.company
                                  )}
                                  <span>•</span>
                                  <span>{exp.period}</span>
                                  {exp.appStoreUrl && (
                                    <>
                                      <span>•</span>
                                      <a
                                        href={exp.appStoreUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 transition-colors"
                                      >
                                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                                        </svg>
                                        App Store
                                      </a>
                                    </>
                                  )}
                                </CardDescription>
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <p className="text-muted-foreground mb-4">{exp.description}</p>
                            {exp.achievements && exp.achievements.length > 0 && (
                              <div className="mb-6">
                                <h5 className="font-semibold mb-3">Key Achievements:</h5>
                                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                                  {exp.achievements.map((achievement: any, i: number) => (
                                    <li key={i}>{achievement}</li>
                                  ))}
                                </ul>
                              </div>
                            )}
                            <div className="flex flex-wrap gap-2">
                              {exp.technologies.map((tech: string, i: number) => (
                                <Badge key={i} variant="secondary">{tech}</Badge>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>

                  {/* Ventures & Co-Founded */}
                  <div>
                    <h4 className="text-2xl font-semibold mb-6 text-primary">Ventures & Co-Founded</h4>
                    <div className="space-y-8">
                      {ventures.map((exp: any, index: number) => (
                        <Card key={`venture-${exp.company}-${index}`} className="hover:shadow-lg transition-shadow duration-300">
                          <CardHeader>
                            <div className="flex items-center gap-4">
                              {exp.logo && (
                                <div className="flex-shrink-0 w-12 h-12 relative">
                                  <Image
                                    src={exp.logo}
                                    alt={`${exp.company} logo`}
                                    fill
                                    className="object-contain"
                                  />
                                </div>
                              )}
                              <div>
                                <CardTitle className="text-xl">{exp.title}</CardTitle>
                                <CardDescription className="flex flex-wrap items-center gap-2">
                                  {exp.companyUrl ? (
                                    <a
                                      href={exp.companyUrl}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="hover:text-primary transition-colors"
                                    >
                                      {exp.company}
                                    </a>
                                  ) : (
                                    exp.company
                                  )}
                                  <span>•</span>
                                  <span>{exp.period}</span>
                                </CardDescription>
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <p className="text-muted-foreground mb-4">{exp.description}</p>
                            {exp.achievements && exp.achievements.length > 0 && (
                              <div className="mb-6">
                                <h5 className="font-semibold mb-3">Key Achievements:</h5>
                                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                                  {exp.achievements.map((achievement: any, i: number) => (
                                    <li key={i}>{achievement}</li>
                                  ))}
                                </ul>
                              </div>
                            )}
                            <div className="flex flex-wrap gap-2">
                              {exp.technologies.map((tech: string, i: number) => (
                                <Badge key={i} variant="secondary">{tech}</Badge>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>

                </div>
              </AnimatedSection>
            )}

            {/* Skills */}
            {activeTab === "skills" && (
              <AnimatedSection animationType="fadeIn">
                <h3 className="text-3xl font-bold mb-8" id="tab-skills">Skills and Expertise</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" role="tabpanel" aria-labelledby="tab-skills-trigger">
                  {skills.map((skillGroup, index) => (
                    <Card key={`${skillGroup.category}-${index}`} className="hover:shadow-lg transition-shadow duration-300">
                      <CardHeader>
                        <CardTitle className="text-xl">{skillGroup.category}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        {skillGroup.items.map((skill, i) => (
                          <SkillBar key={`${skillGroup.category}-${skill.name}-${i}`} name={skill.name} level={skill.level} />
                        ))}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </AnimatedSection>
            )}

            {/* Teaching */}
            {activeTab === "teaching" && (
              <AnimatedSection animationType="fadeIn">
                <h3 className="text-3xl font-bold mb-8" id="tab-teaching">Teaching Experience</h3>
                <Card className="hover:shadow-lg transition-shadow duration-300" role="tabpanel" aria-labelledby="tab-teaching-trigger">
                  <CardHeader>
                    <CardTitle className="text-2xl">My Teaching Philosophy</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4 text-muted-foreground">
                      <p>
                        I create an inclusive and supportive learning environment where students can take risks and learn through hands-on practice. I combine practical coding exercises with core concepts so learners build both technical skill and problem solving habits.
                      </p>
                      <p>
                        I emphasize real world applications and team workflows so students are ready for production work. My goal is to help learners build confidence, communicate clearly, and grow into effective collaborators.
                      </p>
                      <Separator />
                      <div>
                        <h4 className="font-semibold mb-2">Teaching Experience:</h4>
                        <ul className="list-disc list-inside space-y-1">
                          <li>General Assembly Software Engineering Immersive - Instructor & Mentor</li>
                          <li>Mentored 150+ junior developers through career transitions</li>
                          <li>Taught full-stack development with React, Node.js, and Python</li>
                          <li>Developed curriculum and coding exercises for enterprise applications</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            )}

            {/* Side Projects */}
            {activeTab === "projects" && (
              <AnimatedSection animationType="fadeIn">
                <h3 className="text-3xl font-bold mb-8" id="tab-projects">Side Projects</h3>
                <div className="space-y-8" role="tabpanel" aria-labelledby="tab-projects-trigger">
                  {sideProjects.map((project, index) => (
                    <Card key={`${project.title}-${index}`} className="hover:shadow-lg transition-shadow duration-300">
                      <CardHeader>
                        <div className="flex items-center gap-4">
                          {project.logo && (
                            <div className="flex-shrink-0 w-12 h-12 relative">
                              <Image
                                src={project.logo}
                                alt={`${project.title} logo`}
                                fill
                                className="object-contain"
                              />
                            </div>
                          )}
                          <div className="flex-1">
                            <div className="flex justify-between items-start">
                              <div>
                                <CardTitle className="text-xl">{project.title}</CardTitle>
                                <CardDescription>{project.period}</CardDescription>
                              </div>
                              <div className="flex gap-2">
                                {project.projectUrl && (
                                  <Button variant="outline" size="sm" asChild>
                                    <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">
                                      Live Demo
                                    </a>
                                  </Button>
                                )}
                                {project.githubUrl && (
                                  <Button variant="outline" size="sm" asChild>
                                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                      GitHub
                                    </a>
                                  </Button>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4">{project.description}</p>

                        <div className="mb-4">
                          <h5 className="font-semibold mb-2">Highlights:</h5>
                          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                            {project.highlights.map((highlight, i) => (
                              <li key={i}>{highlight}</li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, i) => (
                            <Badge key={i} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </AnimatedSection>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
