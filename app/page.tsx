import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { getSortedPostsData, PostData } from "@/lib/posts";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
      <AnimatedSection animationType="fadeIn" className="relative min-h-screen flex items-center justify-center bg-background">
        <div className="absolute inset-0">
          <Image
            src="/hero-background.jpg"
            alt="Background"
            fill
            style={{ objectFit: "cover" }}
            priority
            className="opacity-5"
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-background shadow-lg">
              <Image
                src="/me.png"
                alt="Billie P Heidelberg"
                width={128}
                height={128}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
            Billie P Heidelberg
          </h1>

          <div className="mb-8">
            <Badge variant="secondary" className="text-sm px-4 py-2">
              Available for New Opportunities
            </Badge>
          </div>

          <p className="text-xl md:text-2xl mb-6 text-muted-foreground font-medium">
            Full Stack Developer • Mobile Expert • Technical Leader
          </p>

          <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-12 leading-relaxed">
            Full stack developer specialized in React, TypeScript, and Node.js with 7+ years of experience building scalable web and mobile applications. Expert in React Native, iOS/Android development, and cross-platform solutions. Proven track record delivering production-ready platforms with a focus on performance, security, and exceptional user experiences across all devices.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/projects">
                View My Work
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">
                Get In Touch
              </Link>
            </Button>
            <Button size="lg" variant="ghost" asChild>
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

      {/* Featured Projects Section */}
      <AnimatedSection animationType="fadeInUp" className="py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Innovative solutions built with modern technologies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <Card className="group hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="relative">
                  <Image
                    src="/projects/smart-trader.png"
                    alt="Smart Trader"
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <Badge className="absolute top-4 right-4">
                    Featured
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="mb-2">Smart Trader</CardTitle>
                <CardDescription className="mb-4">
                  AI-powered trading journal with analytics and performance insights. Built with Next.js, TypeScript, and OpenAI for professional traders.
                </CardDescription>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["Next.js", "TypeScript", "Supabase", "AI"].map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/projects/smart-trader">
                    View Project
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="relative">
                  <Image
                    src="/projects/baby-tracker.png"
                    alt="Baby Tracker"
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <Badge className="absolute top-4 right-4">
                    Open Source
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="mb-2">Baby Tracker</CardTitle>
                <CardDescription className="mb-4">
                  An open source, privacy-first baby tracking solution that helps parents monitor feedings, diapers, sleep, and more while maintaining complete data ownership.
                </CardDescription>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["Django", "PostgreSQL", "Docker", "Next.js"].map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/projects/baby-trader">
                    View Project
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="relative">
                  <Image
                    src="/projects/simmr-about.png"
                    alt="Simmr"
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <Badge className="absolute top-4 right-4">
                    2k+ Users
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="mb-2">Simmr</CardTitle>
                <CardDescription className="mb-4">
                  The premier discovery and connection platform for the ethically non-monogamous community. Features include verification, discovery, events, and secure messaging.
                </CardDescription>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["React", "Node.js", "PostgreSQL", "TypeScript"].map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/projects/simmr">
                    View Project
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>

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
      <AnimatedSection animationType="fadeInRight" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Skills & Expertise
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Technologies and tools I work with to build exceptional digital experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
          </div>
        </div>
      </AnimatedSection>

      <Footer />
    </main>
  );
}
