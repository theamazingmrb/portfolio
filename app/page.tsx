import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ProjectCarousel } from "@/components/ProjectCarousel";
import HeroSection from "@/components/sections/HeroSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ImpactSection from "@/components/sections/ImpactSection";
import { getSortedPostsData } from "@/lib/posts";

export default async function Home() {
  const articlesCount = getSortedPostsData().length;
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />

      {/* Projects Carousel */}
      <AnimatedSection animationType="fadeInUp" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-secondary/50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 px-2">Featured Projects</h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">Innovative solutions built with modern technologies</p>
          </div>
          <ProjectCarousel className="mb-8 sm:mb-12 md:mb-16">
            {/* That Aisle - Featured Hero */}
            <div className="flex-shrink-0 w-full max-w-[500px] px-2">
              <Card className="h-full group hover:shadow-2xl transition-all duration-500 border-2 border-blue-500/20 hover:border-blue-500/40 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-950/10 dark:to-purple-950/10">
                <CardHeader className="pb-3 sm:pb-4">
                  <div className="relative">
                    <Image src="/projects/that_aisle/TA_App Screens_6.5 Display_Frame_1.png" alt="That Aisle" width={400} height={250} className="w-full h-40 sm:h-48 object-cover rounded-t-lg transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute top-2 right-2 flex gap-1 sm:gap-2">
                      <Badge className="bg-green-600 text-white shadow-lg text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1">Client</Badge>
                      <Badge className="bg-blue-600 text-white shadow-lg text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1">App Store</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-3 sm:pt-4">
                  <CardTitle className="text-base sm:text-lg md:text-xl mb-2 sm:mb-3 text-blue-600 dark:text-blue-400">That Aisle Platform</CardTitle>
                  <CardDescription className="text-xs sm:text-sm md:text-base mb-3 sm:mb-4 line-clamp-2 sm:line-clamp-none">Complete platform solution with React Native mobile app and React admin portal for hair product discovery and community engagement.</CardDescription>
                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4 md:mb-6">
                    {["React Native", "React", "Firebase", "Admin Portal"].map((tech) => <Badge key={tech} variant="secondary" className="text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1">{tech}</Badge>)}
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <Button asChild className="flex-1 text-xs sm:text-sm h-9 sm:h-10"><Link href="/projects/thataisle">View Project</Link></Button>
                    <Button variant="outline" size="sm" asChild className="text-xs sm:text-sm h-9 sm:h-10">
                      <Link href="https://apps.apple.com/ca/app/that-aisle/id6504048646" target="_blank" rel="noopener noreferrer">App Store</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Daily Wick */}
            <div className="flex-shrink-0 w-full max-w-[500px] px-2">
              <Card className="h-full group hover:shadow-2xl transition-all duration-500 border-2 border-purple-500/20 hover:border-purple-500/40 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-950/10 dark:to-pink-950/10">
                <CardHeader className="pb-3 sm:pb-4">
                  <div className="relative">
                    <Image src="/projects/daily-wick.png" alt="Daily Wick" width={400} height={250} className="w-full h-40 sm:h-48 object-cover rounded-t-lg transition-transform duration-500 group-hover:scale-105" />
                    <Badge className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-purple-600 text-white shadow-lg text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1">Featured</Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-3 sm:pt-4">
                  <CardTitle className="text-base sm:text-lg md:text-xl mb-2 sm:mb-3 text-purple-600 dark:text-purple-400">Daily Wick</CardTitle>
                  <CardDescription className="text-xs sm:text-sm md:text-base mb-3 sm:mb-4 line-clamp-2 sm:line-clamp-none">AI trading journal for prop traders that logs trades, spots patterns, and coaches you with personalized insights — not generic advice.</CardDescription>
                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4 md:mb-6">
                    {["Next.js", "TypeScript", "Supabase", "AI Coach"].map((tech) => <Badge key={tech} variant="secondary" className="text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1">{tech}</Badge>)}
                  </div>
                  <Button asChild className="w-full text-xs sm:text-sm h-9 sm:h-10"><Link href="/projects/daily-wick">View Project</Link></Button>
                </CardContent>
              </Card>
            </div>

            {/* Baby Tracker */}
            <div className="flex-shrink-0 w-full max-w-[500px] px-2">
              <Card className="h-full group hover:shadow-2xl transition-all duration-500 border-2 border-green-500/20 hover:border-green-500/40 bg-gradient-to-br from-green-50/50 to-blue-50/50 dark:from-green-950/10 dark:to-blue-950/10">
                <CardHeader className="pb-3 sm:pb-4">
                  <div className="relative">
                    <Image src="/projects/baby-tracker.png" alt="Baby Tracker" width={400} height={250} className="w-full h-40 sm:h-48 object-cover rounded-t-lg transition-transform duration-500 group-hover:scale-105" />
                    <Badge className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-green-600 text-white shadow-lg text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1">Privacy-First</Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-3 sm:pt-4">
                  <CardTitle className="text-base sm:text-lg md:text-xl mb-2 sm:mb-3 text-green-600 dark:text-green-400">Baby Tracker</CardTitle>
                  <CardDescription className="text-xs sm:text-sm md:text-base mb-3 sm:mb-4 line-clamp-2 sm:line-clamp-none">Privacy-first baby tracking app for parents with secure data storage and offline functionality.</CardDescription>
                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4 md:mb-6">
                    {["React Native", "TypeScript", "Secure Storage", "Offline"].map((tech) => <Badge key={tech} variant="secondary" className="text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1">{tech}</Badge>)}
                  </div>
                  <Button asChild className="w-full text-xs sm:text-sm h-9 sm:h-10"><Link href="/projects/baby-tracker">View Project</Link></Button>
                </CardContent>
              </Card>
            </div>

            {/* Simmr */}
            <div className="flex-shrink-0 w-full max-w-[500px] px-2">
              <Card className="h-full group hover:shadow-2xl transition-all duration-500 border-2 border-pink-500/20 hover:border-pink-500/40 bg-gradient-to-br from-pink-50/50 to-purple-50/50 dark:from-pink-950/10 dark:to-purple-950/10">
                <CardHeader className="pb-3 sm:pb-4">
                  <div className="relative">
                    <Image src="/projects/simmr-about.png" alt="Simmr" width={400} height={250} className="w-full h-40 sm:h-48 object-cover rounded-t-lg transition-transform duration-500 group-hover:scale-105" />
                    <Badge className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-pink-600 text-white shadow-lg text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1">Social Platform</Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-3 sm:pt-4">
                  <CardTitle className="text-base sm:text-lg md:text-xl mb-2 sm:mb-3 text-pink-600 dark:text-pink-400">Simmr</CardTitle>
                  <CardDescription className="text-xs sm:text-sm md:text-base mb-3 sm:mb-4 line-clamp-2 sm:line-clamp-none">Privacy-first social discovery platform for non-monogamous and polyamorous communities with real-time features.</CardDescription>
                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4 md:mb-6">
                    {["React", "TypeScript", "Next.js", "GraphQL"].map((tech) => <Badge key={tech} variant="secondary" className="text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1">{tech}</Badge>)}
                  </div>
                  <Button asChild className="w-full text-xs sm:text-sm h-9 sm:h-10"><Link href="/projects/simmr">View Project</Link></Button>
                </CardContent>
              </Card>
            </div>

            {/* TOLO */}
            <div className="flex-shrink-0 w-full max-w-[500px] px-2">
              <Card className="h-full group hover:shadow-2xl transition-all duration-500 border-2 border-orange-500/20 hover:border-orange-500/40 bg-gradient-to-br from-orange-50/50 to-red-50/50 dark:from-orange-950/10 dark:to-red-950/10">
                <CardHeader className="pb-3 sm:pb-4">
                  <div className="relative">
                    <Image src="/projects/tolo-preview.png" alt="TOLO" width={400} height={250} className="w-full h-40 sm:h-48 object-cover rounded-t-lg transition-transform duration-500 group-hover:scale-105" />
                    <Badge className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-orange-600 text-white shadow-lg text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1">Venture</Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-3 sm:pt-4">
                  <CardTitle className="text-base sm:text-lg md:text-xl mb-2 sm:mb-3 text-orange-600 dark:text-orange-400">TOLO</CardTitle>
                  <CardDescription className="text-xs sm:text-sm md:text-base mb-3 sm:mb-4 line-clamp-2 sm:line-clamp-none">Content discovery platform helping underground artists get discovered through fair algorithm-based ranking.</CardDescription>
                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4 md:mb-6">
                    {["React Native", "TypeScript", "Supabase", "Segment"].map((tech) => <Badge key={tech} variant="secondary" className="text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1">{tech}</Badge>)}
                  </div>
                  <Button asChild className="w-full text-xs sm:text-sm h-9 sm:h-10"><Link href="/projects/tolo">View Project</Link></Button>
                </CardContent>
              </Card>
            </div>

            {/* AMIR BLAQ */}
            <div className="flex-shrink-0 w-full max-w-[500px] px-2">
              <Card className="h-full group hover:shadow-2xl transition-all duration-500 border-2 border-gray-500/20 hover:border-gray-500/40 bg-gradient-to-br from-gray-50/50 to-slate-50/50 dark:from-gray-950/10 dark:to-slate-950/10">
                <CardHeader className="pb-3 sm:pb-4">
                  <div className="relative">
                    <Image src="/projects/amir-b-preview.png" alt="AMIR BLAQ" width={400} height={250} className="w-full h-40 sm:h-48 object-cover rounded-t-lg transition-transform duration-500 group-hover:scale-105" />
                    <Badge className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-gray-600 text-white shadow-lg text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1">E-commerce</Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-3 sm:pt-4">
                  <CardTitle className="text-base sm:text-lg md:text-xl mb-2 sm:mb-3 text-gray-600 dark:text-gray-400">AMIR BLAQ</CardTitle>
                  <CardDescription className="text-xs sm:text-sm md:text-base mb-3 sm:mb-4 line-clamp-2 sm:line-clamp-none">Luxury fashion e-commerce platform with Next.js frontend and Django admin portal for content management.</CardDescription>
                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4 md:mb-6">
                    {["Next.js", "Django", "PostgreSQL", "AWS"].map((tech) => <Badge key={tech} variant="secondary" className="text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1">{tech}</Badge>)}
                  </div>
                  <Button asChild className="w-full text-xs sm:text-sm h-9 sm:h-10"><Link href="/projects/amirblaq">View Project</Link></Button>
                </CardContent>
              </Card>
            </div>

            {/* Love & Service 1st */}
            <div className="flex-shrink-0 w-full max-w-[500px] px-2">
              <Card className="h-full group hover:shadow-2xl transition-all duration-500 border-2 border-blue-500/20 hover:border-blue-500/40 bg-gradient-to-br from-blue-50/50 to-green-50/50 dark:from-blue-950/10 dark:to-green-950/10">
                <CardHeader className="pb-3 sm:pb-4">
                  <div className="relative">
                    <Image src="/projects/love-and-service-first.png" alt="Love & Service 1st" width={400} height={250} className="w-full h-40 sm:h-48 object-cover rounded-t-lg transition-transform duration-500 group-hover:scale-105" />
                    <Badge className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-blue-600 text-white shadow-lg text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1">Nonprofit</Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-3 sm:pt-4">
                  <CardTitle className="text-base sm:text-lg md:text-xl mb-2 sm:mb-3 text-blue-600 dark:text-blue-400">Love & Service 1st</CardTitle>
                  <CardDescription className="text-xs sm:text-sm md:text-base mb-3 sm:mb-4 line-clamp-2 sm:line-clamp-none">Professional nonprofit landing page with community resources and mission-driven content sections.</CardDescription>
                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4 md:mb-6">
                    {["Next.js", "Tailwind CSS", "Responsive"].map((tech) => <Badge key={tech} variant="secondary" className="text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1">{tech}</Badge>)}
                  </div>
                  <Button asChild className="w-full text-xs sm:text-sm h-9 sm:h-10"><Link href="/projects/love-service">View Project</Link></Button>
                </CardContent>
              </Card>
            </div>
          </ProjectCarousel>

          <div className="text-center">
            <Button size="lg" variant="outline" asChild>
              <Link href="/projects">View All Projects</Link>
            </Button>
          </div>
        </div>
      </AnimatedSection>

      <SkillsSection />
      <ImpactSection articlesCount={articlesCount} />

      <Footer />
    </main>
  );
}
