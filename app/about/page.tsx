"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import AnimatedSection from "@/components/AnimatedSection";
import Footer from "@/components/Footer";
import Head from "next/head";

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
  logo?: string; // optional logo, will fallback to icon if absent
}

// Experiences (Smart Trader and Baby Tracker removed from here)
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
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "AWS (Lambda, CloudFront, S3)", "Redis", "SQS"],
    companyUrl: "https://simmr.co",
    logo: "/logos/simmr-heart.png"
  },
  {
    title: "Technical Trainer",
    company: "InvestCloud Inc.",
    period: "December 2021 - June 2025",
    description:
      "Designed onboarding and training for API and integration developers at a fintech platform serving large institutions.",
    achievements: [
      "Built developer onboarding programs covering ETL, data mapping, and integration workflows",
      "Created internal tools and documentation that reduced ramp-up time for new developers",
      "Supported production incidents and escalations across multiple financial clients",
      "Led workshops on REST API design, data quality, and troubleshooting processes"
    ],
    technologies: ["Java", "Groovy", "GlassFish", "SQL", "ETL", "REST APIs"],
    companyUrl: "https://www.investcloud.com",
    logo: "/logos/IC-Logo.svg"
  },
  {
    title: "Integration Developer",
    company: "InvestCloud Inc.",
    period: "December 2019 - December 2021",
    description:
      "Developed integrations and data services for financial clients with a focus on quality and reliability.",
    achievements: [
      "Built ETL pipelines for transactions, holdings, and account data",
      "Developed RESTful services and contributed to relational schema design",
      "Partnered with QA and support to resolve production data issues",
      "Improved processing reliability with batch jobs and ACL generation scripts"
    ],
    technologies: ["Java", "Groovy", "SQL", "API Development", "ETL", "Database Modeling"],
    companyUrl: "https://www.investcloud.com",
    logo: "/logos/IC-Logo.svg"
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
    technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Supabase"],
    companyUrl: "https://toloapp.com",
    logo: "/logos/tolo.jpeg"
  },
  {
    title: "Software Immersive Instructor",
    company: "General Assembly",
    period: "October 2020 - Present",
    description:
      "Instructor and mentor for full-time software engineering bootcamps focused on modern full stack development.",
    achievements: [
      "Taught React, Node.js, Express, MongoDB, Python, and Django across multiple cohorts",
      "Guided 150+ students through intensive project-based learning and code reviews",
      "Created supplemental resources and labs aligned to industry practices",
      "Provided structured interview prep, portfolio reviews, and career coaching"
    ],
    technologies: ["JavaScript", "React", "Node.js", "Express", "MongoDB", "Python", "Django"],
    companyUrl: "https://generalassemb.ly",
    logo: "/logos/GA.webp"
  },
  {
    title: "Front End Developer",
    company: "InvestCloud Inc.",
    period: "July 2018 - December 2019",
    description:
      "Front-end development for financial services software, building responsive interfaces and client-facing digital solutions.",
    achievements: [
      "Developed digital solutions for 20+ financial institutions managing $500M+ in assets",
      "Created responsive interfaces serving 5,000+ daily active users",
      "Collaborated with cross-functional teams to deliver 12+ major product releases on schedule",
      "Participated in agile processes achieving 95% sprint completion rate"
    ],
    technologies: ["JavaScript", "HTML", "CSS", "React", "UI/UX", "Responsive Design"],
    companyUrl: "https://www.investcloud.com",
    logo: "/logos/IC-Logo.svg"
  },
  {
    title: "Jr Front End Developer",
    company: "BBDO Los Angeles",
    period: "October 2017 - July 2018",
    description:
      "Built interactive campaign pages and motion-driven ad experiences with tight performance budgets.",
    achievements: [
      "Developed HTML5 and JavaScript campaign experiences for major brands",
      "Optimized animations and assets for performance and reach",
      "Partnered closely with creative to hit brand and accessibility goals",
      "Delivered on fast timelines across concurrent campaigns"
    ],
    technologies: ["JavaScript", "HTML", "CSS", "GSAP", "Responsive UI"],
    companyUrl: "https://bbdo.com",
    logo: "/logos/bbdo.jpeg"
  },
  {
    title: "Front End Developer (Contract)",
    company: "Airbnb",
    period: "June 2017 - August 2017",
    description:
      "Short term contract improving internal ambassador tooling and UX polish.",
    achievements: [
      "Refactored dashboard components to improve clarity and consistency",
      "Improved navigation and page structure for partner workflows",
      "Contributed fixes within a compressed delivery window",
      "Collaborated with product and design for smooth rollout"
    ],
    technologies: ["JavaScript", "React", "Node.js"],
    companyUrl: "https://airbnb.com",
    logo: "/logos/abnb.png"
  }
];

// Side projects (Smart Trader and Baby Tracker here)
const sideProjects: SideProject[] = [
  {
    title: "Smart Trader",
    period: "January 2025 - Present",
    description:
      "AI-assisted trading journal that helps traders log, analyze, and improve decision making with actionable insights.",
    highlights: [
      "Built the full stack with Next.js, TypeScript, and Supabase",
      "AI-assisted trade reviews reduce manual analysis time for users",
      "Interactive charting for trade and performance insights",
      "Accessible UI with responsive layout and dark mode"
    ],
    technologies: ["Next.js", "TypeScript", "Supabase", "OpenAI API", "Tailwind CSS"],
    projectUrl: "https://smarttrader.tech",
    githubUrl: "https://github.com/theamazingmrb/smart-trader",
    logo: "/logos/smart-trader-logo.svg"
  },
  {
    title: "Baby Tracker",
    period: "August 2025 - Present",
    description:
      "Privacy-first baby tracking API and app with self-hosting and data ownership focus.",
    highlights: [
      "Designed multi-tenant API with Django REST Framework and Postgres",
      "JWT auth, OpenAPI docs, and Docker-based deployment",
      "Exploring AI-assisted routines and insights for sleep and feeding"
    ],
    technologies: ["Django", "DRF", "PostgreSQL", "Docker", "Next.js"],
    projectUrl: "https://babytracker.xyz",
    githubUrl: "https://github.com/theamazingmrb/baby-tracker-api",
    // If you have a logo file, set it here. If not, the UI will render a baby icon.
    // logo: "/logos/baby-tracker.svg"
  }
];

// Skills
const skills: Skill[] = [
  {
    category: "Frontend",
    items: [
      { name: "React", level: 5 },
      { name: "TypeScript", level: 5 },
      { name: "Next.js", level: 4 },
      { name: "React Native", level: 4 }
    ]
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: 5 },
      { name: "GraphQL", level: 4 },
      { name: "PostgreSQL", level: 4 },
      { name: "AWS", level: 4 }
    ]
  },
  {
    category: "Other",
    items: [
      { name: "Git and GitHub", level: 5 },
      { name: "CI/CD", level: 4 },
      { name: "Docker", level: 3 },
      { name: "Testing", level: 4 }
    ]
  }
];

function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-700">{name}</span>
        <span className="text-sm text-gray-500">{level}/5</span>
      </div>
      <div
        className="w-full bg-gray-200 rounded-full h-2"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={5}
        aria-valuenow={level}
      >
        <div
          className="bg-blue-500 h-2 rounded-full transition-all duration-500"
          style={{ width: `${(level / 5) * 100}%` }}
        />
      </div>
    </div>
  );
}

// Baby icon fallback
function BabyIcon({ className = "w-10 h-10 text-pink-500" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 2a3 3 0 0 0-3 3v1H7a3 3 0 0 0-3 3v1h.5A5.5 5.5 0 0 0 10 6h4a5.5 5.5 0 0 0 5.5 5.5H20V9a3 3 0 0 0-3-3h-2V5a3 3 0 0 0-3-3Zm-6 9a6 6 0 1 0 12 0H6Zm3 3a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm8 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0ZM7 18a5 5 0 0 0 10 0H7Z"
      />
    </svg>
  );
}

export default function AboutPage() {
  const [copyFeedback, setCopyFeedback] = useState("");
  const [activeTab, setActiveTab] = useState<"experience" | "skills" | "teaching">("experience");

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
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
      <Head>
        <title>Billie Heidelberg Jr. — Full Stack Developer (React, TypeScript, Node.js)</title>
        <meta
          name="description"
          content="Full Stack Developer and educator specializing in React, TypeScript, Node.js, Next.js, and AWS. 7+ years shipping scalable products and mentoring engineers."
        />
        <meta property="og:title" content="Billie Heidelberg Jr. — Full Stack Developer" />
        <meta property="og:description" content="React, TypeScript, Node.js, Next.js, AWS. Builder, mentor, and collaborator focused on performance and great UX." />
        <meta property="og:type" content="profile" />
        <meta name="twitter:card" content="summary" />
      </Head>

      <Navbar />

      <main className="flex-grow">
        {/* Hero */}
        <section className="relative h-64 md:h-96 flex items-center justify-center overflow-hidden px-4 bg-gray-900 text-white">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-900 opacity-50" />
          <div className="z-10 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Billie Heidelberg Jr.
            </h1>
            <p className="text-lg md:text-xl">
              Full Stack Developer | Educator | Team Leader
            </p>
          </div>
        </section>

        {/* Intro */}
        <AnimatedSection animationType="fadeInUp" className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/3 flex justify-center">
                <div className="w-64 h-64 relative rounded-full shadow-xl overflow-hidden">
                  <Image
                    src="/me.png"
                    alt="Portrait of Billie Heidelberg Jr."
                    fill
                    className="rounded-full transform hover:scale-105 transition-transform duration-300 object-cover"
                  />
                </div>
              </div>

              <div className="md:w-2/3">
                <h2 className="text-3xl font-bold mb-6">Hi, I&apos;m Billie 👋</h2>

                <p className="text-lg text-gray-700 mb-6">
                  I am a results-driven full stack developer and technical leader with <strong>7+ years of experience</strong> building and scaling web applications. I specialize in <strong>React</strong>, <strong>TypeScript</strong>, <strong>Node.js</strong>, and cloud-native architectures. I have led <strong>teams of 5 to 8 developers</strong> and ship with a focus on performance, reliability, and user experience.
                </p>

                <p className="text-lg text-gray-700 mb-6">
                  I am also an educator and have mentored <strong>150+ developers</strong> through General Assembly’s Software Engineering Immersive. Teaching sharpened my ability to break down complex ideas, coach junior engineers, and collaborate closely with product and design. I care about building tools that make people’s lives easier and I value teams that lead with empathy and clear communication.
                </p>

                <p className="text-lg text-gray-700 mb-6">
                  I am currently exploring full-time opportunities where I can contribute hands-on code, lead by example, and help teams deliver user-focused products at scale. If you are looking for someone who blends strong fundamentals with mentorship and impact, let’s connect.
                </p>

                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={copyEmail}
                    className="flex items-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition duration-300 relative"
                    aria-live="polite"
                  >
                    ✉️ <span>{copyFeedback ? copyFeedback : "Email Me"}</span>
                  </button>
                  <a
                    href="https://github.com/theamazingmrb"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gray-800 text-white px-6 py-3 rounded-full hover:bg-gray-700 transition duration-300"
                    aria-label="View my GitHub profile"
                  >
                    <span>GitHub</span>
                  </a>
                  <a
                    href="https://linkedin.com/in/bheidelberg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-blue-700 text-white px-6 py-3 rounded-full hover:bg-blue-800 transition duration-300"
                    aria-label="View my LinkedIn profile"
                  >
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href="/documents/bheidelberg.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition duration-300"
                    aria-label="Download Resume"
                  >
                    <span>📄 Download Resume</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Tabs */}
        <div className="container mx-auto px-4 pb-16">
          <div className="border-b border-gray-200 mb-8" role="tablist" aria-label="About page sections">
            <div className="flex space-x-8">
              <button
                onClick={() => setActiveTab("experience")}
                className={`py-4 text-lg font-medium border-b-2 ${
                  activeTab === "experience"
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
                role="tab"
                aria-selected={activeTab === "experience"}
                aria-controls="tab-experience"
                id="tab-experience-trigger"
              >
                Experience
              </button>
              <button
                onClick={() => setActiveTab("skills")}
                className={`py-4 text-lg font-medium border-b-2 ${
                  activeTab === "skills"
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
                role="tab"
                aria-selected={activeTab === "skills"}
                aria-controls="tab-skills"
                id="tab-skills-trigger"
              >
                Skills
              </button>
              <button
                onClick={() => setActiveTab("teaching")}
                className={`py-4 text-lg font-medium border-b-2 ${
                  activeTab === "teaching"
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
                role="tab"
                aria-selected={activeTab === "teaching"}
                aria-controls="tab-teaching"
                id="tab-teaching-trigger"
              >
                Teaching
              </button>
            </div>
          </div>

          {/* Experience */}
          <div className="mt-8">
            {activeTab === "experience" && (
              <AnimatedSection animationType="fadeIn">
                <h3 className="text-2xl font-bold mb-8" id="tab-experience">Work Experience</h3>
                <div className="space-y-12" role="tabpanel" aria-labelledby="tab-experience-trigger">
                  {experiences.map((exp, index) => (
                    <div
                      key={`${exp.company}-${index}`}
                      className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                      <div className="mb-4">
                        <div className="flex items-center gap-4 mb-2">
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
                            <h4 className="text-xl font-bold">{exp.title}</h4>
                            <div className="flex flex-wrap items-center gap-2 text-gray-600">
                              {exp.companyUrl ? (
                                <a
                                  href={exp.companyUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="hover:text-blue-600"
                                >
                                  {exp.company}
                                </a>
                              ) : (
                                <span>{exp.company}</span>
                              )}
                              <span>•</span>
                              <span>{exp.period}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-700 mb-4">{exp.description}</p>

                      <div className="mb-4">
                        <h5 className="font-semibold mb-2">Key Achievements</h5>
                        <ul className="list-disc pl-5 space-y-1">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="text-gray-700">
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h5 className="font-semibold mb-2">Technologies</h5>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            )}

            {/* Skills */}
            {activeTab === "skills" && (
              <AnimatedSection animationType="fadeIn">
                <h3 className="text-2xl font-bold mb-8" id="tab-skills">Skills and Expertise</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" role="tabpanel" aria-labelledby="tab-skills-trigger">
                  {skills.map((skillGroup, index) => (
                    <div key={`${skillGroup.category}-${index}`} className="bg-white p-6 rounded-lg shadow-md">
                      <h4 className="text-xl font-bold mb-4 text-blue-600">
                        {skillGroup.category}
                      </h4>
                      <div>
                        {skillGroup.items.map((skill, i) => (
                          <SkillBar key={`${skillGroup.category}-${skill.name}-${i}`} name={skill.name} level={skill.level} />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            )}

            {/* Teaching */}
            {activeTab === "teaching" && (
              <AnimatedSection animationType="fadeIn">
                <h3 className="text-2xl font-bold mb-8" id="tab-teaching">Teaching Experience</h3>
                <div className="bg-white p-6 rounded-lg shadow-md" role="tabpanel" aria-labelledby="tab-teaching-trigger">
                  <div className="mb-6">
                    <h4 className="text-xl font-bold mb-2">My Teaching Philosophy</h4>
                    <p className="text-gray-700 mb-4">
                      I create an inclusive and supportive learning environment where students can take risks and learn through hands-on practice. I combine practical coding exercises with core concepts so learners build both technical skill and problem solving habits.
                    </p>
                    <p className="text-gray-700">
                      I emphasize real world applications and team workflows so students are ready for production work. My goal is to help learners build confidence, communicate clearly, and grow into effective collaborators.
                    </p>
                  </div>

                  <h4 className="text-xl font-bold mb-4">What I Teach</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h5 className="font-semibold mb-2">Full Stack Development</h5>
                      <p className="text-gray-700">
                        JavaScript and TypeScript, React, Node.js, databases, and deployment strategies.
                      </p>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h5 className="font-semibold mb-2">Modern Web Technologies</h5>
                      <p className="text-gray-700">
                        State management, authentication, API integration, and responsive design.
                      </p>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h5 className="font-semibold mb-2">Career Development</h5>
                      <p className="text-gray-700">
                        Technical interview prep, portfolio reviews, and job search strategies.
                      </p>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h5 className="font-semibold mb-2">Team Collaboration</h5>
                      <p className="text-gray-700">
                        Version control with Git, agile practices, code reviews, and clear communication.
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            )}
          </div>
        </div>

        {/* Side Projects */}
        <AnimatedSection animationType="fadeInUp" className="py-12 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">Side Projects</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Personal builds and experiments that inform my product thinking and engineering approach.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {sideProjects.map((sp, idx) => (
                <div key={`${sp.title}-${idx}`} className="bg-gray-50 border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 relative flex items-center justify-center">
                      {sp.logo ? (
                        <Image src={sp.logo} alt={`${sp.title} logo`} fill className="object-contain" />
                      ) : (
                        <BabyIcon />
                      )}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{sp.title}</h3>
                      <p className="text-gray-500">{sp.period}</p>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-4">{sp.description}</p>

                  <ul className="list-disc pl-5 space-y-1 mb-4">
                    {sp.highlights.map((h, i) => (
                      <li key={i} className="text-gray-700">{h}</li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {sp.technologies.map((t, i) => (
                      <span key={i} className="bg-white border border-gray-200 text-gray-800 px-3 py-1 rounded-full text-xs">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    {sp.projectUrl && (
                      <a
                        href={sp.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-700 font-medium"
                      >
                        Live
                      </a>
                    )}
                    {sp.githubUrl && (
                      <a
                        href={sp.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-black font-medium"
                      >
                        Code
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </main>

      <Footer />
    </div>
  );
}