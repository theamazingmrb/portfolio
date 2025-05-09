import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import AnimatedSection from "@/components/AnimatedSection";
import TopCategories from "@/components/TopCategories";
import { getSortedPostsData, PostData } from "@/lib/posts";
import { ProjectCard } from "@/components/ProjectCard";
import { SkillGroup } from "@/components/SkillGroup";
import SkillItem from "@/components/SkillItem";

export default async function Home() {
  const allPostsData: PostData[] = getSortedPostsData();

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <Navbar />
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-gray-900/90"></div>
          <Image
            src="/hero-background.jpg"
            alt="Background"
            fill
            style={{ objectFit: "cover" }}
            priority
            className="opacity-30"
          />
          {/* Animated gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-purple-500/10 to-pink-500/10 animate-gradient-xy"></div>
        </div>
        
        <div className="z-10 max-w-4xl mx-auto text-center">
          <div className="mb-6 inline-block">
            <div className="relative inline-flex items-center justify-center p-1 overflow-hidden rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
              <div className="z-10 relative p-1">
                <Image 
                  src="/me.png" 
                  alt="Billie P Heidelberg" 
                  width={150} 
                  height={150} 
                  className="rounded-full object-cover"
                />
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-text">
            Billie P Heidelberg
          </h1>
          
          {/* <div className="mb-3">
            <span className="inline-block px-4 py-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-full animate-pulse">
              ✓ Available for Hire
            </span>
          </div> */}
          
          <p className="text-xl md:text-2xl mb-6 text-gray-300">
            <span className="font-semibold text-white">Full Stack Developer</span> | <span className="font-semibold text-white">Educator</span> | <span className="font-semibold text-white">Team Leader</span>
          </p>
          
          <p className="max-w-2xl mx-auto text-lg text-gray-300 mb-8">
            Specialized in React, TypeScript, and Node.js with 7+ years of experience building scalable web applications and leading development teams. Available for new opportunities.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/projects"
              className="px-8 py-3 rounded-full text-lg font-semibold bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              View My Work
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 rounded-full text-lg font-semibold border-2 border-white/30 hover:border-white/80 hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </Link>
          </div>
          
          <div className="absolute bottom-12 left-0 right-0 flex justify-center animate-bounce">
            <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <AnimatedSection
        animationType="fadeInUp"
        className="py-16 md:py-24 bg-gradient-to-b from-gray-800 to-gray-900 text-white"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 md:mb-16">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 relative inline-block">
                <span className="relative z-10">Featured Projects</span>
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></span>
              </h2>
              <p className="text-lg text-gray-300 max-w-xl">
                Innovative solutions built with modern technologies
              </p>
            </div>
            <Link 
              href="/projects" 
              className="mt-4 md:mt-0 group flex items-center text-blue-400 hover:text-blue-300 transition-colors"
            >
              View all projects
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProjectCard
              title="Smart Trader"
              description="AI-powered trading journal with analytics and performance insights. Built with Next.js, TypeScript, and OpenAI for professional traders."
              image="/projects/smart-trader.png"
              link="/projects/smart-trader"
              tags={["Next.js", "TypeScript", "Supabase", "AI"]}
              featured={true}
            />
            <ProjectCard
              title="TOLO"
              description="A virality engine helping content creators get discovered fast. Features innovative algorithms for fair content promotion."
              image="/projects/tolo-preview.png"
              link="/projects/tolo"
              tags={["React Native", "AWS", "Node.js"]}
              featured={true}
            />
            <ProjectCard
              title="Candid"
              description="An ENM network app for the non-monogamous community. Includes features like verification, discovery, events, and vouching system."
              image="/projects/candid-preview.png"
              link="/projects/candid"
              tags={["React", "Node.js", "PostgreSQL"]}
              featured={true}
            />
          </div>
        </div>
      </AnimatedSection>

      {/* <AnimatedSection
        animationType="fadeInLeft"
        className="py-12 md:py-20 bg-white text-black"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8">Blog</h2>
          <p className="text-lg md:text-xl mb-8 md:mb-12 max-w-2xl mx-auto">
            Dive into my thoughts on the latest trends in technology and design.
          </p>
          <TopCategories />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {allPostsData.map(({ id, title, date }) => (
              <BlogPostCard
                key={id}
                title={title}
                excerpt="Exploring upcoming trends in web design and user experience."
                link={`/blog/${id}`}
              />
            ))}
          </div>
        </div>
      </AnimatedSection> */}

      <AnimatedSection
        animationType="fadeInRight"
        className="py-16 md:py-24 bg-gray-100 text-gray-900"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 md:mb-16">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 relative inline-block">
                <span className="relative z-10">Skills & Expertise</span>
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></span>
              </h2>
              <p className="text-lg text-gray-600 max-w-xl">
                Technologies and tools I work with to build exceptional digital experiences
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-blue-500">
              <h3 className="text-xl font-bold mb-4 text-gray-800 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Frontend
              </h3>
              <div className="space-y-3">
                <SkillItem name="React" level={5} />
                <SkillItem name="Next.js" level={5} />
                <SkillItem name="TypeScript" level={4} />
                <SkillItem name="Tailwind CSS" level={5} />
                <SkillItem name="React Native" level={4} />
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-green-500">
              <h3 className="text-xl font-bold mb-4 text-gray-800 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
                Backend
              </h3>
              <div className="space-y-3">
                <SkillItem name="Node.js" level={5} />
                <SkillItem name="Express" level={5} />
                <SkillItem name="GraphQL" level={4} />
                <SkillItem name="RESTful APIs" level={5} />
                <SkillItem name="Python" level={3} />
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-purple-500">
              <h3 className="text-xl font-bold mb-4 text-gray-800 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
                Databases
              </h3>
              <div className="space-y-3">
                <SkillItem name="PostgreSQL" level={5} />
                <SkillItem name="MongoDB" level={4} />
                <SkillItem name="Supabase" level={5} />
                <SkillItem name="Firebase" level={4} />
                <SkillItem name="Redis" level={3} />
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-amber-500">
              <h3 className="text-xl font-bold mb-4 text-gray-800 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                DevOps & Tools
              </h3>
              <div className="space-y-3">
                <SkillItem name="Git/GitHub" level={5} />
                <SkillItem name="Docker" level={4} />
                <SkillItem name="AWS" level={4} />
                <SkillItem name="CI/CD" level={4} />
                <SkillItem name="Agile/Scrum" level={5} />
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Call to Action */}
      <AnimatedSection
        animationType="fadeInLeft"
        className="relative overflow-hidden py-16 md:py-24"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-purple-900"></div>
          {/* Add animated particles effect */}
          <div className="absolute inset-0 animate-pulse-slow opacity-30 bg-gradient-to-tr from-blue-500/20 via-purple-500/20 to-pink-500/20"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-transparent to-gray-900/70"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto bg-gray-900/60 backdrop-blur-md p-8 md:p-12 rounded-2xl shadow-2xl border border-white/20 hover:border-white/30 transition-all duration-500">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                Let&apos;s Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Extraordinary</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
                Looking for a skilled developer to join your team or help with a project? I&apos;m always open to discussing new opportunities and exciting challenges.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 rounded-full text-lg font-semibold bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white transition-all duration-300 transform hover:scale-105 shadow-lg text-center"
              >
                Start a Conversation
              </Link>
              <Link
                href="/projects"
                className="w-full sm:w-auto px-8 py-4 rounded-full text-lg font-semibold border-2 border-white/30 hover:border-white/80 text-white hover:bg-white/10 transition-all duration-300 transform hover:scale-105 text-center"
              >
                Explore My Work
              </Link>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </main>
  );
}

function BlogPostCard({
  title,
  excerpt,
  link,
}: {
  title: string;
  excerpt: string;
  link: string;
}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{excerpt}</p>
      <Link href={link} className="text-blue-500 font-semibold">
        Read More &rarr;
      </Link>
    </div>
  );
}

function SkillIcon({ name, icon }: { name: string; icon: string }) {
  return (
    <div className="text-center">
      <Image
        src={`/${icon}`}
        alt={name}
        width={64}
        height={64}
        className="mb-2 mx-auto"
      />
      <p className="font-semibold">{name}</p>
    </div>
  );
}
