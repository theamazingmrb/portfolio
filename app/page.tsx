import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { getSortedPostsData, PostData } from "@/lib/posts";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ProjectCarousel } from "@/components/ProjectCarousel";

export default async function Home() {
  const allPostsData: PostData[] = getSortedPostsData();

  // Create clean project objects to avoid serialization issues
  const smartTraderProject = {
    id: "smart-trader",
    title: "Smart Trader",
    description: "AI-powered trading journal with analytics and performance insights. Built with Next.js, TypeScript, and OpenAI for professional traders.",
    image: "/projects/smart-trader.png",
    url: "/projects/smart-trader",
    techStack: ["Next.js", "TypeScript", "Supabase", "AI"],
    metrics: ["Risk Management Tools", "Performance Dashboard", "Strategy Backtesting", "40% Better Discipline"],
    details: "",
    features: []
  };

  const babyTrackerProject = {
    id: "baby-trader",
    title: "Baby Tracker",
    description: "An open source, privacy-first baby tracking solution that helps parents monitor feedings, diapers, sleep, and more while maintaining complete data ownership.",
    image: "/projects/baby-trader.png",
    url: "/projects/baby-trader",
    techStack: ["Django", "PostgreSQL", "Docker", "Next.js", "Open Source"],
    metrics: ["MIT Licensed", "Self-Hostable", "Complete Data Ownership", "AI-powered Insights"],
    details: "",
    features: []
  };

  const simmrProject = {
    id: "simmr",
    title: "Simmr",
    description: "The premier discovery and connection platform for the ethically non-monogamous community. Features include verification, discovery, events, and secure messaging.",
    image: "/projects/simmr-about.png",
    url: "/projects/simmr",
    techStack: ["React", "Node.js", "PostgreSQL", "TypeScript"],
    metrics: ["2,000+ Users", "4.5 Star Rating on IOS App Store", "Monthly Events", "Private Messaging System", "Identity Verification"],
    details: "",
    features: []
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      {/* Hero Section */}
      <AnimatedSection animationType="fadeIn" className="relative min-h-[100vh] flex items-center justify-center bg-background py-12 sm:py-0 overflow-hidden">
        {/* Parallax Background */}
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

        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6">
          <div className="mb-4 sm:mb-6 md:mb-8">
            <div className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 mx-auto rounded-full overflow-hidden border-4 border-background shadow-lg ring-4 ring-primary/20">
              <Image
                src="/me.png"
                alt="Billie P Heidelberg"
                width={128}
                height={128}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-3 sm:mb-4 md:mb-6 tracking-tight px-2 gradient-text">
            Billie P Heidelberg
          </h1>

          <div className="mb-4 sm:mb-6">
            <Badge variant="secondary" className="text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 relative">
              <span className="absolute inset-0 rounded-full bg-green-500/20 animate-pulse-ring" />
              <span className="relative flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Available for New Opportunities
              </span>
            </Badge>
          </div>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-3 sm:mb-4 md:mb-6 text-muted-foreground font-medium px-2">
            Full Stack Developer • Mobile Engineer
          </p>

          <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-muted-foreground mb-6 sm:mb-8 md:mb-10 leading-relaxed px-2">
            Full stack developer specialized in React, TypeScript, and Node.js with 8+ years of experience building scalable web and mobile applications. Expert in React Native, iOS/Android development, and cross-platform solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center max-w-md sm:max-w-none mx-auto">
            <Button size="lg" asChild className="w-full sm:w-auto">
              <Link href="/projects">
                View My Work
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="w-full sm:w-auto">
              <Link href="/contact">
                Get In Touch
              </Link>
            </Button>
            <Button size="lg" variant="ghost" asChild className="w-full sm:w-auto">
              <a
                href="/documents/Billie_Heidelberg_Software_Engineer_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Resume
              </a>
            </Button>
          </div>
        </div>
      </AnimatedSection>

      {/* Projects Carousel */}
      <AnimatedSection animationType="fadeInUp" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-secondary/50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 px-2">
              Featured Projects
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              Innovative solutions built with modern technologies
            </p>
          </div>

          {/* Embla Carousel */}
          <ProjectCarousel className="mb-8 sm:mb-12 md:mb-16">
            {/* That Aisle - Featured Hero */}
            <div className="flex-shrink-0 w-full max-w-[500px] px-2">
              <Card className="h-full group hover:shadow-2xl transition-all duration-500 border-2 border-blue-500/20 hover:border-blue-500/40 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-950/10 dark:to-purple-950/10">
                <CardHeader className="pb-3 sm:pb-4">
                  <div className="relative">
                    <Image
                      src="/projects/that_aisle/TA_App Screens_6.5 Display_Frame_1.png"
                      alt="That Aisle"
                      width={400}
                      height={250}
                      className="w-full h-40 sm:h-48 object-cover rounded-t-lg transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-2 right-2 flex gap-1 sm:gap-2">
                      <Badge className="bg-green-600 text-white shadow-lg text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1">
                        Client
                      </Badge>
                      <Badge className="bg-blue-600 text-white shadow-lg text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1">
                        App Store
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-3 sm:pt-4">
                  <CardTitle className="text-base sm:text-lg md:text-xl mb-2 sm:mb-3 text-blue-600 dark:text-blue-400">
                    That Aisle Platform
                  </CardTitle>
                  <CardDescription className="text-xs sm:text-sm md:text-base mb-3 sm:mb-4 line-clamp-2 sm:line-clamp-none">
                    Complete platform solution with React Native mobile app and React admin portal for hair product discovery and community engagement.
                  </CardDescription>
                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4 md:mb-6">
                    {["React Native", "React", "Firebase", "Admin Portal"].map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <Button asChild className="flex-1 text-xs sm:text-sm h-9 sm:h-10">
                      <Link href="/projects/thataisle">
                        View Project
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm" asChild className="text-xs sm:text-sm h-9 sm:h-10">
                      <Link href="https://apps.apple.com/ca/app/that-aisle/id6504048646" target="_blank" rel="noopener noreferrer">
                        App Store
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Smart Trader */}
            <div className="flex-shrink-0 w-full max-w-[500px] px-2">
              <Card className="h-full group hover:shadow-2xl transition-all duration-500 border-2 border-purple-500/20 hover:border-purple-500/40 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-950/10 dark:to-pink-950/10">
                <CardHeader className="pb-3 sm:pb-4">
                  <div className="relative">
                    <Image
                      src="/projects/smart-trader.png"
                      alt="Smart Trader"
                      width={400}
                      height={250}
                      className="w-full h-40 sm:h-48 object-cover rounded-t-lg transition-transform duration-500 group-hover:scale-105"
                    />
                    <Badge className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-purple-600 text-white shadow-lg text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1">
                      Featured
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-3 sm:pt-4">
                  <CardTitle className="text-base sm:text-lg md:text-xl mb-2 sm:mb-3 text-purple-600 dark:text-purple-400">
                    Smart Trader
                  </CardTitle>
                  <CardDescription className="text-xs sm:text-sm md:text-base mb-3 sm:mb-4 line-clamp-2 sm:line-clamp-none">
                    AI-powered trading journal with analytics and performance insights for professional traders.
                  </CardDescription>
                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4 md:mb-6">
                    {["Next.js", "TypeScript", "Supabase", "AI"].map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button asChild className="w-full text-xs sm:text-sm h-9 sm:h-10">
                    <Link href="/projects/smart-trader">
                      View Project
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Baby Tracker */}
            <div className="flex-shrink-0 w-full max-w-[500px] px-2">
              <Card className="h-full group hover:shadow-2xl transition-all duration-500 border-2 border-green-500/20 hover:border-green-500/40 bg-gradient-to-br from-green-50/50 to-blue-50/50 dark:from-green-950/10 dark:to-blue-950/10">
                <CardHeader className="pb-3 sm:pb-4">
                  <div className="relative">
                    <Image
                      src="/projects/baby-tracker.png"
                      alt="Baby Tracker"
                      width={400}
                      height={250}
                      className="w-full h-40 sm:h-48 object-cover rounded-t-lg transition-transform duration-500 group-hover:scale-105"
                    />
                    <Badge className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-green-600 text-white shadow-lg text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1">
                      Privacy-First
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-3 sm:pt-4">
                  <CardTitle className="text-base sm:text-lg md:text-xl mb-2 sm:mb-3 text-green-600 dark:text-green-400">
                    Baby Tracker
                  </CardTitle>
                  <CardDescription className="text-xs sm:text-sm md:text-base mb-3 sm:mb-4 line-clamp-2 sm:line-clamp-none">
                    Privacy-first baby tracking app for parents with secure data storage and offline functionality.
                  </CardDescription>
                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4 md:mb-6">
                    {["React Native", "TypeScript", "Secure Storage", "Offline"].map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button asChild className="w-full text-xs sm:text-sm h-9 sm:h-10">
                    <Link href="/projects/baby-trader">
                      View Project
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Simmr */}
            <div className="flex-shrink-0 w-full max-w-[500px] px-2">
              <Card className="h-full group hover:shadow-2xl transition-all duration-500 border-2 border-pink-500/20 hover:border-pink-500/40 bg-gradient-to-br from-pink-50/50 to-purple-50/50 dark:from-pink-950/10 dark:to-purple-950/10">
                <CardHeader className="pb-3 sm:pb-4">
                  <div className="relative">
                    <Image
                      src="/projects/simmr-about.png"
                      alt="Simmr"
                      width={400}
                      height={250}
                      className="w-full h-40 sm:h-48 object-cover rounded-t-lg transition-transform duration-500 group-hover:scale-105"
                    />
                    <Badge className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-pink-600 text-white shadow-lg text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1">
                      Social Platform
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-3 sm:pt-4">
                  <CardTitle className="text-base sm:text-lg md:text-xl mb-2 sm:mb-3 text-pink-600 dark:text-pink-400">
                    Simmr
                  </CardTitle>
                  <CardDescription className="text-xs sm:text-sm md:text-base mb-3 sm:mb-4 line-clamp-2 sm:line-clamp-none">
                    Privacy-first social discovery platform for non-monogamous and polyamorous communities with real-time features.
                  </CardDescription>
                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4 md:mb-6">
                    {["React", "TypeScript", "Next.js", "GraphQL"].map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button asChild className="w-full text-xs sm:text-sm h-9 sm:h-10">
                    <Link href="/projects/simmr">
                      View Project
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* TOLO */}
            <div className="flex-shrink-0 w-full max-w-[500px] px-2">
              <Card className="h-full group hover:shadow-2xl transition-all duration-500 border-2 border-orange-500/20 hover:border-orange-500/40 bg-gradient-to-br from-orange-50/50 to-red-50/50 dark:from-orange-950/10 dark:to-red-950/10">
                <CardHeader className="pb-3 sm:pb-4">
                  <div className="relative">
                    <Image
                      src="/projects/tolo-preview.png"
                      alt="TOLO"
                      width={400}
                      height={250}
                      className="w-full h-40 sm:h-48 object-cover rounded-t-lg transition-transform duration-500 group-hover:scale-105"
                    />
                    <Badge className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-orange-600 text-white shadow-lg text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1">
                      Venture
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-3 sm:pt-4">
                  <CardTitle className="text-base sm:text-lg md:text-xl mb-2 sm:mb-3 text-orange-600 dark:text-orange-400">
                    TOLO
                  </CardTitle>
                  <CardDescription className="text-xs sm:text-sm md:text-base mb-3 sm:mb-4 line-clamp-2 sm:line-clamp-none">
                    Content discovery platform helping underground artists get discovered through fair algorithm-based ranking.
                  </CardDescription>
                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4 md:mb-6">
                    {["React Native", "TypeScript", "Supabase", "Segment"].map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button asChild className="w-full text-xs sm:text-sm h-9 sm:h-10">
                    <Link href="/projects/tolo">
                      View Project
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* AMIR BLAQ */}
            <div className="flex-shrink-0 w-full max-w-[500px] px-2">
              <Card className="h-full group hover:shadow-2xl transition-all duration-500 border-2 border-gray-500/20 hover:border-gray-500/40 bg-gradient-to-br from-gray-50/50 to-slate-50/50 dark:from-gray-950/10 dark:to-slate-950/10">
                <CardHeader className="pb-3 sm:pb-4">
                  <div className="relative">
                    <Image
                      src="/projects/amir-b-preview.png"
                      alt="AMIR BLAQ"
                      width={400}
                      height={250}
                      className="w-full h-40 sm:h-48 object-cover rounded-t-lg transition-transform duration-500 group-hover:scale-105"
                    />
                    <Badge className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-gray-600 text-white shadow-lg text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1">
                      E-commerce
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-3 sm:pt-4">
                  <CardTitle className="text-base sm:text-lg md:text-xl mb-2 sm:mb-3 text-gray-600 dark:text-gray-400">
                    AMIR BLAQ
                  </CardTitle>
                  <CardDescription className="text-xs sm:text-sm md:text-base mb-3 sm:mb-4 line-clamp-2 sm:line-clamp-none">
                    Luxury fashion e-commerce platform with Next.js frontend and Django admin portal for content management.
                  </CardDescription>
                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4 md:mb-6">
                    {["Next.js", "Django", "PostgreSQL", "AWS"].map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button asChild className="w-full text-xs sm:text-sm h-9 sm:h-10">
                    <Link href="/projects/amirblaq">
                      View Project
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Love & Service 1st */}
            <div className="flex-shrink-0 w-full max-w-[500px] px-2">
              <Card className="h-full group hover:shadow-2xl transition-all duration-500 border-2 border-blue-500/20 hover:border-blue-500/40 bg-gradient-to-br from-blue-50/50 to-green-50/50 dark:from-blue-950/10 dark:to-green-950/10">
                <CardHeader className="pb-3 sm:pb-4">
                  <div className="relative">
                    <Image
                      src="/projects/love-and-service-first.png"
                      alt="Love & Service 1st"
                      width={400}
                      height={250}
                      className="w-full h-40 sm:h-48 object-cover rounded-t-lg transition-transform duration-500 group-hover:scale-105"
                    />
                    <Badge className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-blue-600 text-white shadow-lg text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1">
                      Nonprofit
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-3 sm:pt-4">
                  <CardTitle className="text-base sm:text-lg md:text-xl mb-2 sm:mb-3 text-blue-600 dark:text-blue-400">
                    Love & Service 1st
                  </CardTitle>
                  <CardDescription className="text-xs sm:text-sm md:text-base mb-3 sm:mb-4 line-clamp-2 sm:line-clamp-none">
                    Professional nonprofit landing page with community resources and mission-driven content sections.
                  </CardDescription>
                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4 md:mb-6">
                    {["Next.js", "Tailwind CSS", "Responsive"].map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button asChild className="w-full text-xs sm:text-sm h-9 sm:h-10">
                    <Link href="/projects/love-service">
                      View Project
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </ProjectCarousel>

          <div className="text-center">
            <Button size="lg" variant="outline" asChild>
              <Link href="/projects">
                View All Projects
              </Link>
            </Button>
          </div>
        </div>
      </AnimatedSection>

      {/* Skills Section */}
      <AnimatedSection animationType="fadeInRight" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 px-2">
              Skills & Expertise
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              Technologies and tools I work with to build exceptional digital experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  Mobile Development
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { name: "React Native", level: 5 },
                    { name: "iOS (Swift)", level: 4 },
                    { name: "Android (Kotlin)", level: 4 },
                    { name: "Flutter", level: 3 },
                  ].map((skill) => (
                    <div key={skill.name} className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}/5</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full transition-all duration-500"
                          style={{ width: `${(skill.level / 5) * 100}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Frontend
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { name: "React", level: 5 },
                    { name: "TypeScript", level: 5 },
                    { name: "Next.js", level: 5 },
                    { name: "Tailwind CSS", level: 4 },
                  ].map((skill) => (
                    <div key={skill.name} className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}/5</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full transition-all duration-500"
                          style={{ width: `${(skill.level / 5) * 100}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                  </svg>
                  Backend
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { name: "Node.js", level: 5 },
                    { name: "Python", level: 4 },
                    { name: "PostgreSQL", level: 4 },
                    { name: "MongoDB", level: 3 },
                  ].map((skill) => (
                    <div key={skill.name} className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}/5</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full transition-all duration-500"
                          style={{ width: `${(skill.level / 5) * 100}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                  Cloud & DevOps
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { name: "AWS", level: 4 },
                    { name: "Docker", level: 4 },
                    { name: "Vercel", level: 5 },
                    { name: "CI/CD", level: 4 },
                  ].map((skill) => (
                    <div key={skill.name} className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}/5</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full transition-all duration-500"
                          style={{ width: `${(skill.level / 5) * 100}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  Other Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { name: "Git", level: 5 },
                    { name: "Agile", level: 4 },
                    { name: "Testing", level: 4 },
                    { name: "UI/UX", level: 3 },
                  ].map((skill) => (
                    <div key={skill.name} className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}/5</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full transition-all duration-500"
                          style={{ width: `${(skill.level / 5) * 100}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  AI & Integrations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { name: "OpenAI API", level: 4 },
                    { name: "Prompt Engineering", level: 4 },
                    { name: "Stripe", level: 4 },
                    { name: "Firebase", level: 5 },
                  ].map((skill) => (
                    <div key={skill.name} className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}/5</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full transition-all duration-500"
                          style={{ width: `${(skill.level / 5) * 100}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </AnimatedSection>

      {/* Technical Achievements & Impact Section */}
      <AnimatedSection animationType="fadeInUp" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 px-2">
              Technical Achievements & Impact
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              Building great products and contributing to team success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">11+</div>
                <div className="text-muted-foreground font-medium mb-2">Technical Articles</div>
                <p className="text-sm text-muted-foreground">Sharing knowledge with the developer community</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">8+</div>
                <div className="text-muted-foreground font-medium mb-2">Years Building</div>
                <p className="text-sm text-muted-foreground">Production applications people use daily</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">50K+</div>
                <div className="text-muted-foreground font-medium mb-2">Lines of Code</div>
                <p className="text-sm text-muted-foreground">Clean, tested, production-ready code</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-muted-foreground font-medium mb-2">Mobile-First</div>
                <p className="text-sm text-muted-foreground">Cross-platform development expertise</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="p-8">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="flex items-center text-2xl">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Technical Contributions
                </CardTitle>
              </CardHeader>
              <CardContent className="px-0">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Built scalable systems serving 100K+ daily users</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Improved application performance by 60%</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Set up CI/CD pipelines, cut deployment time by 80%</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="flex items-center text-2xl">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  Team Collaboration
                </CardTitle>
              </CardHeader>
              <CardContent className="px-0">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Collaborated in cross-functional teams of 5+ developers</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Helped mentor 15+ developers grow their skills</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Contributed to coding standards and best practices</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </AnimatedSection>

      <Footer />
    </main>
  );
}
