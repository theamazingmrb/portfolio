"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import AnimatedSection from "@/components/AnimatedSection";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import ExperienceTab from "@/components/sections/about/ExperienceTab";
import SkillsTab from "@/components/sections/about/SkillsTab";
import TeachingTab from "@/components/sections/about/TeachingTab";
import SideProjectsTab from "@/components/sections/about/SideProjectsTab";

export default function AboutPageClient() {
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
                Full Stack Engineer • Mobile Engineer
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
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 px-2">Full Stack Engineer • Mobile Engineer</h2>

                <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-4 sm:mb-6 px-2">
                  I am a <strong>full stack engineer</strong> and <strong>mobile engineer</strong> with <strong>8+ years</strong> building production web and mobile platforms. I have shipped iOS and Android contract work, founded a trading journal SaaS, and spent seven years at InvestCloud supporting 100+ developers on enterprise API integrations at scale. Across React, Next.js, TypeScript, Node.js, and PostgreSQL, I care about performance, reliability, and thoughtful user experience.
                </p>

                <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-4 sm:mb-6 px-2">
                  Alongside engineering, I have <strong>taught 150+ students</strong> through General Assembly&apos;s Web Development Immersive. Teaching rewired how I communicate — I explain complex ideas simply, support growing engineers, and collaborate naturally with product and design. I bring a craftsman&apos;s mindset to software: build things that are technically strong and genuinely helpful to the people who use them.
                </p>

                <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-6 sm:mb-8 px-2">
                  Today I am focused on full-time senior engineering work — a hands-on engineer who helps shape technical direction and ships impactful products at scale. If you want strong fundamentals, teaching experience, and a passion for building meaningful software, let&apos;s talk.
                </p>

                <div className="flex flex-wrap gap-2 sm:gap-3 px-2">
                  <Button onClick={copyEmail} aria-live="polite">
                    {copyFeedback ? copyFeedback : "Email Me"}
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="https://github.com/theamazingmrb" target="_blank" rel="noopener noreferrer" aria-label="View my GitHub profile">GitHub</a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="https://linkedin.com/in/bheidelberg" target="_blank" rel="noopener noreferrer" aria-label="View my LinkedIn profile">LinkedIn</a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="/documents/Billie_Heidelberg_Resume.pdf" target="_blank" rel="noopener noreferrer" aria-label="Download Resume">Download Resume</a>
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
