"use client";

import Navbar from "@/components/Navbar";
import AnimatedSection from "@/components/AnimatedSection";
import Footer from "@/components/Footer";
import Head from "next/head";
import Image from "next/image";
import { useState, useCallback } from "react";

export default function AboutPage() {
  const [copyFeedback, setCopyFeedback] = useState("");

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
        <title>About Billie Heidelberg Jr.</title>
        <meta
          name="description"
          content="Full Stack Developer, Educator, and Technical Co-Founder"
        />
      </Head>
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-64 md:h-96 flex items-center justify-center overflow-hidden px-4 bg-gray-900 text-white">
          <div className="z-10 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Billie Heidelberg Jr.
            </h1>
            <p className="text-lg md:text-xl">
              Full Stack Developer | Educator | Technical Co-Founder
            </p>
          </div>
        </section>

        {/* Introduction Section */}
        <AnimatedSection animationType="fadeInUp" className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center mb-12">
              <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
                <div className="w-64 h-64 relative overflow-hidden rounded-full shadow-lg">
                  <div className="absolute inset-0">
                    <Image
                      src="/me.png"
                      alt="Billie Heidelberg Jr."
                      layout="fill"
                      objectFit="cover"
                      className="rounded-full transform"
                    />
                  </div>
                </div>
              </div>

              <div className="md:w-2/3 md:pl-12">
                <h2 className="text-3xl font-bold mb-4">About Me</h2>
                <p className="text-lg mb-4">
                  I am a highly skilled and passionate Full Stack Developer,
                  Educator, and Technical Co-Founder. With a robust background
                  in creating innovative solutions, I excel at nurturing the
                  next generation of developers. My journey has taken me from
                  startups to established companies, where I have consistently
                  delivered high-quality results through my diverse skill set
                  and problem-solving mindset.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={copyEmail}
                    className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300 relative"
                  >
                    {copyFeedback ? copyFeedback : "Email"}
                    {copyFeedback && (
                      <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2 mb-2">
                        {copyFeedback}
                      </span>
                    )}
                  </button>

                  <a
                    href="https://github.com/theamazingmrb"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-700 transition duration-300"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://linkedin.com/in/bheidelberg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-700 text-white px-4 py-2 rounded-full hover:bg-blue-800 transition duration-300"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>

            {/* Technical Skills Section */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6">Technical Skills</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "Languages",
                    skills: ["JavaScript", "Python", "Java", "HTML5", "CSS3"],
                  },
                  {
                    title: "Frameworks",
                    skills: ["React", "Next.js", "Express", "Django"],
                  },
                  {
                    title: "Databases",
                    skills: ["MongoDB", "PostgreSQL", "MySQL"],
                  },
                  {
                    title: "Tools",
                    skills: ["Git", "Docker", "GraphQL", "RESTful APIs"],
                  },
                  {
                    title: "Concepts",
                    skills: [
                      "Responsive Design",
                      "ETL Processes",
                      "Agile Development",
                    ],
                  },
                  {
                    title: "Cloud Services",
                    skills: ["Supabase", "Hasura", "AWS"],
                  },
                ].map((category, index) => (
                  <div
                    key={index}
                    className="bg-white p-4 rounded-lg shadow-md"
                  >
                    <h4 className="font-semibold mb-2">{category.title}</h4>
                    <ul className="list-disc ml-5">
                      {category.skills.map((skill, skillIndex) => (
                        <li key={skillIndex}>{skill}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Professional Experience Section */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6">
                Professional Experience
              </h3>
              <div className="space-y-8">
                {[
                  {
                    title: "Technical Co-Founder",
                    company: "TOLO",
                    period: "October 2022 - Present",
                    description:
                      "As a Technical Co-Founder at TOLO, I spearhead the development of a groundbreaking content discovery app. I lead the implementation of innovative algorithms and manage cross-functional teams to ensure the app's scalability, security, and seamless user experience. My role involves aligning technology strategies with business goals to significantly enhance content visibility and user engagement.",
                  },
                  {
                    title: "Full Stack Developer / Contractor",
                    company: "Candid",
                    period: "2023 - Present",
                    description:
                      "At Candid, I lead the development of an app tailored for the non-monogamous, kink, and polyamorous community. My responsibilities include creating new features, improving existing functionalities, and ensuring the platform's scalability and security to provide a diverse and inclusive user experience.",
                  },
                  {
                    title: "Software Development Instructor",
                    company: "General Assembly",
                    period: "October 2020 - Present",
                    description:
                      "At General Assembly, I have successfully taught over 200+ students in an intensive software development program. I adapt the curriculum to meet the needs of diverse learners, fostering a supportive learning environment that prepares students for successful careers in technology.",
                  },
                  {
                    title: "Training Business Partner (Technical Writer)",
                    company: "InvestCloud Inc.",
                    period: "2021 - Present",
                    description:
                      "In my role as a Training Business Partner at InvestCloud Inc., I focus on technical writing and developing comprehensive training materials. I ensure the effective communication of complex technical concepts to both technical and non-technical stakeholders, enhancing the overall learning experience.",
                  },
                  {
                    title: "Integration Developer",
                    company: "InvestCloud Inc.",
                    period: "December 2019 - 2021",
                    description:
                      "As an Integration Developer, I developed ETL scripts, designed RESTful APIs, and resolved complex data quality issues for financial services platforms. My work involved ensuring seamless data integration and maintaining high data quality standards.",
                  },
                  {
                    title: "Front End Developer",
                    company: "InvestCloud Inc.",
                    period: "July 2018 - December 2019",
                    description:
                      "In my role as a Front End Developer, I developed and implemented digital advertising solutions, enhancing brand interactions and consumer engagement. My focus was on creating responsive and interactive user interfaces that elevate the user experience.",
                  },
                  {
                    title: "Jr Front End Developer",
                    company: "BBDO Los Angeles",
                    period: "October 2017 - July 2018",
                    description:
                      "At BBDO Los Angeles, I developed and implemented award-winning digital advertising solutions, enhancing brand interactions and consumer engagement. My role involved collaborating with creative teams to deliver high-quality digital campaigns.",
                  },
                  {
                    title: "Full Stack Developer/Contractor",
                    company: "Airbnb",
                    period: "June 2017 - August 2017",
                    description:
                      "During my tenure at Airbnb, I redesigned key components of the affiliate management platform to improve navigation and aesthetic coherence. My contributions significantly enhanced the user experience and streamlined platform functionalities.",
                  },
                ].map((job, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-md"
                  >
                    <h4 className="font-semibold text-xl mb-2">{job.title}</h4>
                    <p className="text-gray-600 mb-2">
                      {job.company} | {job.period}
                    </p>
                    <p>{job.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Section */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Education</h3>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="font-semibold text-xl mb-2">
                  Web Development Immersive
                </h4>
                <p className="text-gray-600">
                  General Assembly, Santa Monica, CA | January 2017 - April 2017
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </main>

      <Footer />
    </div>
  );
}
