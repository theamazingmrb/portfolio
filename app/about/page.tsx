"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import AnimatedSection from "@/components/AnimatedSection";
import Footer from "@/components/Footer";
import Head from "next/head";
import { Button } from "@/components/ui/button";
import ExperienceTab from "@/components/sections/about/ExperienceTab";
import SkillsTab from "@/components/sections/about/SkillsTab";
import TeachingTab from "@/components/sections/about/TeachingTab";
import SideProjectsTab from "@/components/sections/about/SideProjectsTab";

export default function AboutPage() {
  const [copyFeedback, setCopyFeedback] = useState("");
  const [activeTab, setActiveTab] = useState<"experience" | "skills" | "teaching" | "projects">("experience");

  const handleTabChange = useCallback((tab: typeof activeTab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

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
        <meta name="description" content="Full Stack Developer and educator specializing in React, TypeScript, Node.js, Next.js, and AWS. 8+ years shipping scalable products and mentoring engineers." />
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
                  <Image src="/me.png" alt="Portrait of Billie Heidelberg Jr." fill className="rounded-full object-cover" />
                </div>
              </div>

              <div className="md:w-2/3">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 px-2">Full Stack Developer • Mobile Engineer</h2>

                <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-4 sm:mb-6 px-2">
                  I am a <strong>full stack developer</strong>, <strong>mobile engineer</strong>, and technical leader with <strong>8+ years of experience</strong> building scalable web and mobile applications. I specialize in <strong>React</strong>, <strong>TypeScript</strong>, <strong>Node.js</strong>, and modern cloud-native architectures, with a focus on performance, reliability, and thoughtful user experience. I have led <strong>teams of 5 to 8 developers</strong> while remaining deeply hands-on in architecture, product delivery, and clean, maintainable code.
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
                    <a href="https://github.com/theamazingmrb" target="_blank" rel="noopener noreferrer" aria-label="View my GitHub profile">GitHub</a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="https://linkedin.com/in/bheidelberg" target="_blank" rel="noopener noreferrer" aria-label="View my LinkedIn profile">LinkedIn</a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="/documents/Billie_Heidelberg_Resume_Senior_Full_Stack_Engineer.pdf" target="_blank" rel="noopener noreferrer" aria-label="Download Resume">📄 Download Resume</a>
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
              {[
                { key: "experience", label: "Experience" },
                { key: "skills", label: "Skills" },
                { key: "teaching", label: "Teaching" },
                { key: "projects", label: "Side Projects" },
              ].map((tab) => (
                <Button
                  key={tab.key}
                  variant={activeTab === tab.key ? "default" : "ghost"}
                  onClick={() => handleTabChange(tab.key as typeof activeTab)}
                  className="rounded-b-none border-b-2 text-xs sm:text-sm md:text-base px-2 sm:px-3 md:px-4 whitespace-nowrap"
                >
                  {tab.label}
                </Button>
              ))}
            </div>
          </div>

          <div className="mt-8">
            {activeTab === "experience" && <ExperienceTab />}
            {activeTab === "skills" && <SkillsTab />}
            {activeTab === "teaching" && <TeachingTab />}
            {activeTab === "projects" && <SideProjectsTab />}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
