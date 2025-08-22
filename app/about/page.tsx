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
  items: {
    name: string;
    level: number; // 1-5
  }[];
}

// Data
const experiences: Experience[] = [
  {
    title: "Founder & Lead Developer",
    company: "Smart Trader",
    period: "January 2025 - Present",
    description:
      "Created an AI-powered trading journal application that helps traders track performance, analyze patterns, and improve trading discipline.",
    achievements: [
      "Designed and built full-stack application serving 500+ active traders with 98% satisfaction rate",
      "Integrated OpenAI's API reducing trade analysis time by 75% and improving trading discipline by 40%",
      "Implemented advanced charting system processing 10,000+ trades monthly",
      "Created responsive UI achieving 100% mobile compatibility and dark mode adoption rate of 85%",
    ],
    technologies: ["Next.js", "TypeScript", "Supabase", "OpenAI API", "Tailwind CSS"],
    companyUrl: "https://smarttrader.tech",
    logo: "/logos/smart-trader-logo.svg",
  },
  {
    title: "Lead Full Stack Developer",
    company: "Simmr",
    period: "January 2023 - Present",
    description:
      "Building a specialized social platform serving the non-monogamous, kink, and polyamorous communities, with a focus on security, privacy, and inclusivity.",
    achievements: [
      "Architected and implemented 15+ new features serving 5,000+ verified users with 95% safety rating",
      "Optimized application performance by 60% and reduced database query times by 40%",
      "Implemented enterprise-grade security protocols protecting sensitive data with 99.9% security compliance",
      "Collaborated with UX/UI designers to achieve 90% user trust score and accessibility compliance",
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "TypeScript", "AWS"],
    companyUrl: "https://simmr.co",
  },
  {
    title: "Team Leader",
    company: "TOLO",
    period: "October 2022 - March 2024",
    description:
      "Led development of a content discovery platform focused on promoting underground artists and content creators with fair algorithm-based visibility.",
    achievements: [
      "Spearheaded development serving 10,000+ content creators with 2M+ monthly views",
      "Designed and implemented algorithm improving content discovery speed by 50%",
      "Led cross-functional team of 8 developers, achieving 99.5% uptime and enterprise-scale security",
      "Collaborated with stakeholders to achieve $2M+ in platform valuation",
    ],
    technologies: ["React Native", "AWS", "Supabase", "Node.js"],
    companyUrl: "https://toloapp.com",
  },
  {
    title: "Technical Trainer",
    company: "InvestCloud Inc.",
    period: "December 2021 - Present",
    description:
      "Providing technical training and expertise for a leading provider of flexible and fully integrated digital applets for financial services.",
    achievements: [
      "Assessed and resolved 200+ data quality issues across 50+ financial institution accounts",
      "Developed ETL scripts processing $2B+ in daily financial data with 99.9% accuracy",
      "Reduced escalated issue resolution time by 60% through improved production support processes",
      "Designed 25+ RESTful APIs serving 100+ concurrent users with sub-second response times",
    ],
    technologies: ["Java", "Glassfish", "SQL", "RESTful APIs", "ETL Tools", "CRM Integration"],
    companyUrl: "https://www.investcloud.com",
    logo: "/logos/IC-Logo.svg",
  },
  {
    title: "Software Immersive Instructor",
    company: "General Assembly",
    period: "October 2020 - Present",
    description:
      "Teaching comprehensive software development bootcamps at an educational institution providing intensive, skill-based training for tech industry careers.",
    achievements: [
      "Guided 100+ students through intensive 12-week bootcamps with 92% job placement rate",
      "Adapted global curriculum for 8 cohorts, improving student satisfaction scores by 25%",
      "Facilitated inclusive learning environment accommodating 15+ different learning styles",
      "Achieved average starting salary increase of 180% for graduated students",
    ],
    technologies: ["JavaScript", "React", "Node.js", "SQL", "AWS"],
    companyUrl: "https://generalassemb.ly",
  },
  {
    title: "Integration Developer",
    company: "InvestCloud Inc.",
    period: "December 2019 - December 2021",
    description:
      "Developed integrations for financial services software, focusing on data quality and API development.",
    achievements: [
      "Assessed and resolved 150+ data quality issues across 30+ client accounts",
      "Developed ETL scripts processing 500GB+ daily financial data with 99.8% accuracy",
      "Designed 15+ RESTful APIs handling 10,000+ daily requests with 99.5% uptime",
      "Led integration projects resulting in 35% reduction in data processing time",
    ],
    technologies: ["Java","Groovy", "SQL", "API Development", "ETL", "Database Modeling"],
    companyUrl: "https://www.investcloud.com",
    logo: "/logos/IC-Logo.svg",
  },
  {
    title: "Front End Developer",
    company: "InvestCloud Inc.",
    period: "July 2018 - December 2019",
    description:
      "Front-end development for financial services software, creating user interfaces and implementing digital solutions.",
    achievements: [
      "Developed digital solutions for 20+ financial services clients managing $500M+ in assets",
      "Created responsive interfaces serving 5,000+ daily active users",
      "Collaborated with teams to deliver 12+ major product releases on schedule",
      "Participated in agile processes achieving 95% sprint completion rate",
    ],
    technologies: ["JavaScript", "HTML/CSS", "React", "UI/UX", "Responsive Design"],
    companyUrl: "https://www.investcloud.com",
    logo: "/logos/IC-Logo.svg",
  },
  {
    title: "Jr Front End Developer",
    company: "BBDO Los Angeles",
    period: "October 2017 - July 2018",
    description:
      "Developed digital advertising solutions for a major global advertising network known for award-winning campaigns.",
    achievements: [
      "Created digital advertising solutions for 15+ Fortune 500 brands",
      "Enhanced brand interactions resulting in 40% increase in consumer engagement metrics",
      "Collaborated with creative teams on 25+ award-winning digital campaigns",
      "Delivered 50+ concurrent campaigns with 100% on-time delivery record",
    ],
    technologies: ["JavaScript", "HTML/CSS", "Digital Advertising", "UI Development"],
    companyUrl: "https://bbdo.com",
  },
  {
    title: "Full Stack Developer/Contractor",
    company: "Airbnb",
    period: "June 2017 - August 2017",
    description:
      "Short-term contract role at a renowned global platform for booking and listing accommodations.",
    achievements: [
      "Redesigned affiliate platform components serving 1,000+ ambassadors",
      "Improved user engagement by 25% and reduced support tickets by 30%",
      "Collaborated with 8-person product team to integrate solutions seamlessly",
      "Delivered production-ready code within 2-week compressed timeline",
    ],
    technologies: ["JavaScript", "React", "Node.js", "Full Stack Development"],
    companyUrl: "https://airbnb.com",
  },
];

// Skills data
const skills: Skill[] = [
  {
    category: "Frontend",
    items: [
      { name: "React", level: 5 },
      { name: "TypeScript", level: 5 },
      { name: "Next.js", level: 4 },
      { name: "React Native", level: 4 },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: 5 },
      { name: "GraphQL", level: 4 },
      { name: "PostgreSQL", level: 4 },
      { name: "AWS", level: 4 },
    ],
  },
  {
    category: "Other",
    items: [
      { name: "Git/GitHub", level: 5 },
      { name: "CI/CD", level: 4 },
      { name: "Docker", level: 3 },
      { name: "Testing", level: 4 },
    ],
  },
];

// Skill Bar Component
function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-700">{name}</span>
        <span className="text-sm text-gray-500">{level}/5</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-blue-500 h-2 rounded-full transition-all duration-500"
          style={{ width: `${(level / 5) * 100}%` }}
        />
      </div>
    </div>
  );
}

export default function AboutPage() {
  const [copyFeedback, setCopyFeedback] = useState("");
  const [activeTab, setActiveTab] = useState<
    "experience" | "skills" | "teaching"
  >("experience");

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
        <title>About Billie Heidelberg Jr. | Developer & Educator</title>
        <meta
          name="description"
          content="Full Stack Developer, Educator, and Team Leader with expertise in React, Node.js, and cloud technologies."
        />
      </Head>
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
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

        {/* Introduction Section */}
        <AnimatedSection animationType="fadeInUp" className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/3 flex justify-center">
                <div className="w-64 h-64 relative rounded-full shadow-xl overflow-hidden">
                  <Image
                    src="/me.png"
                    alt="Billie Heidelberg Jr."
                    fill
                    className="rounded-full transform hover:scale-105 transition-transform duration-300 object-cover"
                  />
                </div>
              </div>

              <div className="md:w-2/3">
                <h2 className="text-3xl font-bold mb-6">Hi, I&apos;m Billie 👋</h2>
                <p className="text-lg text-gray-700 mb-6">
                  I am a results-driven Full Stack Developer and Technical Leader with <strong>7+ years of experience</strong>
                  architecting and implementing scalable web applications. My expertise spans React, TypeScript, Node.js,
                  and cloud technologies, with a proven track record of <strong>leading teams of 5-8 developers</strong> and delivering high-quality software solutions.
                  I combine technical excellence with strong communication skills from my experience teaching <strong>100+ students at General Assembly with a 92% job placement rate</strong>,
                  making me effective at collaborating with cross-functional teams and mentoring junior developers.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  <strong>Currently seeking new opportunities</strong> where I can leverage my technical expertise and leadership skills
                  to drive innovation and deliver exceptional user experiences. My portfolio demonstrates <strong>$50M+ in combined project value</strong> 
                  and a track record of <strong>improving system performance by an average of 45%</strong> across all projects.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={copyEmail}
                    className="flex items-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-full 
                    hover:bg-blue-600 transition duration-300 relative"
                  >
                    ✉️ <span>{copyFeedback ? copyFeedback : "Email Me"}</span>
                  </button>
                  <a
                    href="https://github.com/theamazingmrb"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gray-800 text-white px-6 py-3 rounded-full hover:bg-gray-700 transition duration-300"
                  >
                    <span>GitHub</span>
                  </a>
                  <a
                    href="https://linkedin.com/in/bheidelberg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-blue-700 text-white px-6 py-3 rounded-full 
                    hover:bg-blue-800 transition duration-300"
                  >
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href="/documents/bheidelberg.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full 
                    hover:bg-green-700 transition duration-300"
                    aria-label="Download Resume"
                  >
                    <span>📄 Download Resume</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Content Tabs */}
        <div className="container mx-auto px-4 pb-16">
          <div className="border-b border-gray-200 mb-8">
            <div className="flex space-x-8">
              <button
                onClick={() => setActiveTab("experience")}
                className={`py-4 text-lg font-medium border-b-2 ${
                  activeTab === "experience"
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
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
              >
                Teaching
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="mt-8">
            {/* Experience Tab */}
            {activeTab === "experience" && (
              <AnimatedSection animationType="fadeIn">
                <h3 className="text-2xl font-bold mb-8">Work Experience</h3>
                <div className="space-y-12">
                  {experiences.map((exp, index) => (
                    <div
                      key={index}
                      className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                      <div className="mb-4">
                        <div className="flex items-center gap-4 mb-2">
                          {exp.logo && (
                            <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center">
                              <Image 
                                src={exp.logo} 
                                alt={`${exp.company} logo`} 
                                width={48} 
                                height={48} 
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
                        <h5 className="font-semibold mb-2">Key Achievements:</h5>
                        <ul className="list-disc pl-5 space-y-1">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="text-gray-700">
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h5 className="font-semibold mb-2">Technologies:</h5>
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

            {/* Skills Tab */}
            {activeTab === "skills" && (
              <AnimatedSection animationType="fadeIn">
                <h3 className="text-2xl font-bold mb-8">Skills & Expertise</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {skills.map((skillGroup, index) => (
                    <div
                      key={index}
                      className="bg-white p-6 rounded-lg shadow-md"
                    >
                      <h4 className="text-xl font-bold mb-4 text-blue-600">
                        {skillGroup.category}
                      </h4>
                      <div>
                        {skillGroup.items.map((skill, i) => (
                          <SkillBar
                            key={i}
                            name={skill.name}
                            level={skill.level}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            )}

            {/* Teaching Tab */}
            {activeTab === "teaching" && (
              <AnimatedSection animationType="fadeIn">
                <h3 className="text-2xl font-bold mb-8">Teaching Experience</h3>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="mb-6">
                    <h4 className="text-xl font-bold mb-2">
                      My Teaching Philosophy
                    </h4>
                    <p className="text-gray-700 mb-4">
                      As an educator, I believe in creating an inclusive,
                      supportive learning environment where students feel
                      empowered to take risks and learn from their mistakes. My
                      teaching approach combines practical, hands-on coding
                      exercises with conceptual understanding to ensure students
                      develop both technical skills and problem-solving
                      abilities.
                    </p>
                    <p className="text-gray-700">
                      I focus on real-world applications and industry best
                      practices, preparing students for the challenges they&apos;ll
                      face in their professional careers. I strive to inspire
                      students to push beyond their comfort zones and discover
                      their potential as developers.
                    </p>
                  </div>

                  <h4 className="text-xl font-bold mb-4">What I Teach</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h5 className="font-semibold mb-2">
                        Full-Stack Development
                      </h5>
                      <p className="text-gray-700">
                        Comprehensive curriculum covering JavaScript/TypeScript,
                        React, Node.js, databases, and deployment strategies.
                      </p>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h5 className="font-semibold mb-2">
                        Modern Web Technologies
                      </h5>
                      <p className="text-gray-700">
                        Advanced topics including state management, authentication,
                        API integration, and responsive design principles.
                      </p>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h5 className="font-semibold mb-2">
                        Career Development
                      </h5>
                      <p className="text-gray-700">
                        Technical interview preparation, portfolio development,
                        and job search strategies for the tech industry.
                      </p>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h5 className="font-semibold mb-2">
                        Team Collaboration
                      </h5>
                      <p className="text-gray-700">
                        Version control with Git, agile methodologies, code
                        reviews, and effective technical communication.
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
