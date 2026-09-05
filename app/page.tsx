import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Asterisk } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import EditorialProjectCard from "@/components/EditorialProjectCard";
import { getSortedPostsData } from "@/lib/posts";
import { projects } from "@/lib/projects";

export default function Home() {
  const posts = getSortedPostsData();
  const featuredPost = posts[0];
  const projectById = (id: string, index: number) => {
    const project = projects.find(project => project.id === id);
    return project ? <EditorialProjectCard project={project} index={index} /> : null;
  };
  const archiveProject = (id: string) => {
    const project = projects.find(project => project.id === id);
    return project ? <Link href={`/projects/${id}`} className="archive-link"><span>{project.title}</span><span>{project.techStack.slice(0, 2).join(" / ")}</span><ArrowUpRight size={18} aria-hidden="true" /></Link> : null;
  };

  return (
    <main className="studio-home min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />

      <div className="experience-strip studio-container">
        <span className="eyebrow">A few places I’ve<br />made an impact</span>
        <span className="company-wordmark">airbnb</span>
        <span className="company-wordmark company-investcloud">InvestCloud</span>
        <span className="company-wordmark company-ga">General Assembly</span>
        <span className="company-wordmark company-bbdo">BBDO</span>
      </div>

      {/* Projects Carousel */}
      <section id="work" className="studio-section studio-container" aria-labelledby="work-title">
        <div className="section-heading">
          <div><span className="eyebrow section-kicker">01 / Selected work</span><h2 id="work-title">Ideas made <span className="serif-word">real.</span></h2></div>
          <Link href="/projects" className="text-link">All projects <span className="link-count">{projects.length}</span><ArrowUpRight size={18} aria-hidden="true" /></Link>
        </div>
        <div className="editorial-project-grid">
          {/* That Aisle - Featured Hero */}
          {projectById("thataisle", 0)}
          {/* Daily Wick */}
          {projectById("daily-wick", 1)}
          {/* Baby Tracker */}
          {projectById("baby-tracker", 2)}
          {/* Simmr */}
          {projectById("simmr", 3)}
        </div>
        <div className="project-archive">
          <span className="eyebrow">More from the archive</span>
          <div>
            {/* TOLO */}
            {archiveProject("tolo")}
            {/* AMIR BLAQ */}
            {archiveProject("amirblaq")}
            {/* Love & Service 1st */}
            {archiveProject("love-service")}
          </div>
        </div>
      </section>

      <section id="writing" className="writing-section" aria-labelledby="writing-title">
        <div className="studio-container studio-section">
          <div className="section-heading">
            <div><span className="eyebrow section-kicker">02 / Field notes</span><h2 id="writing-title">Learn. Build. <span className="serif-word">Share.</span></h2></div>
            <Link href="/blog" className="text-link">All writing <span className="link-count">{posts.length}</span><ArrowUpRight size={18} aria-hidden="true" /></Link>
          </div>
          <p className="section-description">Notes from the workbench. Practical guides, honest lessons, and the things I’m figuring out along the way.</p>
          {featuredPost && (
            <div className="writing-layout">
              <Link href={`/blog/${featuredPost.id}`} className="featured-writing">
                <div className="writing-cover"><Image src={featuredPost.coverImage || "/blog-images/default-cover.svg"} alt="" fill sizes="(max-width: 767px) 90vw, 45vw" /><span className="latest-label">Latest dispatch</span></div>
                <div className="featured-writing-copy">
                  <div className="eyebrow article-meta"><span>{featuredPost.tags?.[0] || featuredPost.category}</span><span>{featuredPost.readingTime} min read</span></div>
                  <h3>{featuredPost.title}</h3>
                  <span className="text-link">Read the story <ArrowUpRight size={18} aria-hidden="true" /></span>
                </div>
              </Link>
              <div className="writing-list">
                {posts.slice(1, 4).map((post, index) => (
                  <Link key={post.id} href={`/blog/${post.id}`} className="writing-row">
                    <span className="writing-index">0{index + 1}</span>
                    <div><span className="eyebrow">{post.tags?.[0] || post.category} / {post.readingTime} min read</span><h3>{post.title}</h3><time dateTime={post.date}>{new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" })}</time></div>
                    <ArrowUpRight size={21} aria-hidden="true" />
                  </Link>
                ))}
                <div className="writing-footnote"><Asterisk size={23} aria-hidden="true" /><p>Good knowledge is better shared.<br />Always learning, always passing it on.</p></div>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="studio-section studio-container about-preview" aria-labelledby="about-title">
        <div className="about-portrait"><Image src="/me.png" alt="Billie Heidelberg" fill sizes="(max-width: 767px) 90vw, 30vw" /><span className="portrait-label">The human behind the code.</span></div>
        <div className="about-copy">
          <span className="eyebrow section-kicker">03 / A little about me</span>
          <h2 id="about-title">Builder’s mindset.<br /><span className="serif-word">Teacher’s heart.</span></h2>
          <p>I care about what happens on the other side of the screen. Whether I’m building a product, untangling a system, or helping a developer find their footing, the goal is the same: make something genuinely useful.</p>
          <div className="about-stats"><div><strong>8+</strong><span>years of building</span></div><div><strong>100+</strong><span>developers taught</span></div><div><strong>Full stack.</strong><span>from idea to production</span></div></div>
          <Link href="/about" className="text-link">A bit more about me <ArrowUpRight size={18} aria-hidden="true" /></Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
