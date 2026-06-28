"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import AnimatedSection from "@/components/AnimatedSection";

export default function HeroSection() {
  return (
    <AnimatedSection animationType="fadeIn" className="relative min-h-[100vh] flex items-center justify-center bg-background py-12 sm:py-0 overflow-hidden">
      <div className="absolute inset-0 transform-gpu" style={{ transform: 'translateZ(-1px) scale(1.5)' }}>
        <Image
          src="/hero-background.jpg"
          alt="Background"
          fill
          style={{ objectFit: "cover" }}
          priority
          className="opacity-5"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background pointer-events-none" />
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6">
        <div className="mb-4 sm:mb-6 md:mb-8">
          <div className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 mx-auto rounded-full overflow-hidden border-4 border-background shadow-lg ring-4 ring-primary/20">
            <Image src="/me.png" alt="Billie P Heidelberg" width={128} height={128} sizes="(max-width: 640px) 80px, (max-width: 768px) 112px, 128px" className="w-full h-full object-cover" />
          </div>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-3 sm:mb-4 md:mb-6 tracking-tight px-2 gradient-text">
          Billie P Heidelberg
        </h1>
        <div className="mb-4 sm:mb-6">
          <Badge variant="secondary" className="text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2">
            <span className="relative flex items-center gap-2">Contract Full Stack & Senior Engineer Roles</span>
          </Badge>
        </div>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-3 sm:mb-4 md:mb-6 text-muted-foreground font-medium px-2">
          Full Stack Developer • Mobile Engineer
        </p>
        <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-muted-foreground mb-6 sm:mb-8 md:mb-10 leading-relaxed px-2">
          Full stack developer specialized in React, TypeScript, and Node.js with 8+ years of experience building scalable web and mobile applications. Expert in React Native, iOS/Android development, and cross-platform solutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center max-w-md sm:max-w-none mx-auto">
          <Button size="lg" asChild className="w-full sm:w-auto"><Link href="/projects">View My Work</Link></Button>
          <Button size="lg" variant="outline" asChild className="w-full sm:w-auto"><Link href="/contact">Get In Touch</Link></Button>
          <Button size="lg" variant="ghost" asChild className="w-full sm:w-auto">
            <a href="/documents/Billie_Heidelberg_Resume_Senior_Full_Stack_Engineer.pdf" target="_blank" rel="noopener noreferrer">Download Resume</a>
          </Button>
        </div>
      </div>
    </AnimatedSection>
  );
}
