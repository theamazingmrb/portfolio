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

// Experiences
const experiences: Experience[] = [
  {
    title: "Full Stack Engineer",
    company: "Simmr",
    period: "January 2023 - July 2025",
    description:
      "Specialized social platform focused on safety, privacy, and inclusive discovery for an ENM and polyamorous community.",
    achievements: [
      "Implemented client-side distance filtering and a virtualized discovery grid for performant browsing",
      "Built Lambda@Edge SEO previews and integrated with CloudFront via CloudFormation",
      "Delivered global image caching and optimization, improving perceived load and reducing bandwidth",
      "Hardened the app with error boundaries, defensive checks, retries, and graceful fallbacks"
    ],
    technologies: ["React", "Next.js", "TypeScript", "AWS", "CloudFront", "Lambda@Edge"],
    companyUrl: "https://simmr.app",
    logo: "/logos/simmr-heart.png"
  },
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
  },
  {
    title: "Software Engineer",
    company: "InvestCloud",
    period: "July 2021 - October 2022",
    description:
      "Built enterprise wealth management platform serving financial institutions with portfolio analytics and reporting.",
    achievements: [
      "Developed React components for complex financial data visualization",
      "Implemented real-time data streaming with WebSocket connections",
      "Created reusable component library used across multiple products",
      "Optimized application performance reducing load times by 40%"
    ],
    technologies: ["React", "TypeScript", "Node.js", "WebSocket", "D3.js"],
    companyUrl: "https://investcloud.com",
    logo: "/logos/IC-Logo.svg"
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
    githubUrl: "https://github.com/theamazingmrb/smart-trader"
  },
  {
    title: "Baby Tracker",
    period: "2024 - Present",
    description: "Privacy-first baby tracking platform with Django REST, PostgreSQL, and AI-powered insights.",
    highlights: [
      "Multi-tenant architecture with complete data isolation",
      "AI insights for feeding and sleep patterns",
      "Comprehensive activity tracking",
      "Dockerized deploys for AWS EC2"
    ],
    technologies: ["Django", "PostgreSQL", "Docker", "Next.js", "Nginx"],
    projectUrl: "http://babytracker.xyz",
    githubUrl: "https://github.com/theamazingmrb/baby-tracker-api"
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
        <AnimatedSection animationType="fadeIn" className="relative py-24 md:py-32 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                Billie Heidelberg Jr.
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                Full Stack Developer | Educator | Team Leader
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Intro */}
        <AnimatedSection animationType="fadeInUp" className="py-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/3 flex justify-center">
                <div className="w-64 h-64 relative rounded-full border-4 border-background shadow-lg overflow-hidden">
                  <Image
                    src="/me.png"
                    alt="Portrait of Billie Heidelberg Jr."
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
              </div>

              <div className="md:w-2/3">
                <h2 className="text-4xl font-bold mb-6">Hi, I&apos;m Billie 👋</h2>

                <p className="text-lg text-muted-foreground mb-6">
                  I am a results-driven full stack developer and technical leader with <strong>7+ years of experience</strong> building and scaling web applications. I specialize in <strong>React</strong>, <strong>TypeScript</strong>, <strong>Node.js</strong>, and cloud-native architectures. I have led <strong>teams of 5 to 8 developers</strong> and ship with a focus on performance, reliability, and user experience.
                </p>

                <p className="text-lg text-muted-foreground mb-6">
                  I am also an educator and have mentored <strong>150+ developers</strong> through General Assembly's Software Engineering Immersive. Teaching sharpened my ability to break down complex ideas, coach junior engineers, and collaborate closely with product and design. I care about building tools that make people's lives easier and I value teams that lead with empathy and clear communication.
                </p>

                <p className="text-lg text-muted-foreground mb-8">
                  I am currently exploring full-time opportunities where I can contribute hands-on code, lead by example, and help teams deliver user-focused products at scale. If you are looking for someone who blends strong fundamentals with mentorship and impact, let's connect.
                </p>

                <div className="flex flex-wrap gap-3">
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
        <div className="container mx-auto px-4 pb-16">
          <div className="border-b mb-8" role="tablist" aria-label="About page sections">
            <div className="flex space-x-8">
              <Button
                variant={activeTab === "experience" ? "default" : "ghost"}
                onClick={() => setActiveTab("experience")}
                className="rounded-b-none border-b-2"
              >
                Experience
              </Button>
              <Button
                variant={activeTab === "skills" ? "default" : "ghost"}
                onClick={() => setActiveTab("skills")}
                className="rounded-b-none border-b-2"
              >
                Skills
              </Button>
              <Button
                variant={activeTab === "teaching" ? "default" : "ghost"}
                onClick={() => setActiveTab("teaching")}
                className="rounded-b-none border-b-2"
              >
                Teaching
              </Button>
              <Button
                variant={activeTab === "projects" ? "default" : "ghost"}
                onClick={() => setActiveTab("projects")}
                className="rounded-b-none border-b-2"
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
                <div className="space-y-8" role="tabpanel" aria-labelledby="tab-experience-trigger">
                  {experiences.map((exp, index) => (
                    <Card key={`${exp.company}-${index}`} className="hover:shadow-lg transition-shadow duration-300">
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
                                <span>{exp.company}</span>
                              )}
                              <span>•</span>
                              <span>{exp.period}</span>
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4">{exp.description}</p>
                        
                        <div className="mb-4">
                          <h5 className="font-semibold mb-2">Key Achievements:</h5>
                          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                            {exp.achievements.map((achievement, i) => (
                              <li key={i}>{achievement}</li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, i) => (
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
