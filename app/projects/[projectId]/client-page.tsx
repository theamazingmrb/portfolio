'use client';

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import { Project } from "@/lib/projects";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { useState, useCallback, useEffect, useRef } from "react";

interface ClientProjectPageProps {
  project: Project;
}

export default function ClientProjectPage({ project }: ClientProjectPageProps) {
  const [lightbox, setLightbox] = useState<null | { src: string; alt: string }>(null);
  const lightboxRef = useRef<HTMLDivElement>(null);

  // Close on ESC
  useEffect(() => {
    if (!lightbox) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [lightbox]);

  // Trap focus
  useEffect(() => {
    if (lightbox && lightboxRef.current) {
      lightboxRef.current.focus();
    }
  }, [lightbox]);

  const openLightbox = useCallback((src: string, alt: string) => {
    setLightbox({ src, alt });
  }, []);

  const closeLightbox = useCallback(() => setLightbox(null), []);

  const isClient = project.projectType === "Client";

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Lightbox Modal */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fadeIn"
          tabIndex={-1}
          ref={lightboxRef}
          onClick={closeLightbox}
          aria-modal="true"
          role="dialog"
        >
          <div
            className="relative max-w-3xl w-full mx-4 bg-transparent flex flex-col items-center"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-2 right-2 text-white bg-black/60 rounded-full p-2 hover:bg-black/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary z-10"
              aria-label="Close image preview"
              autoFocus
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <Image
              src={lightbox.src}
              alt={lightbox.alt}
              width={1200}
              height={800}
              className="w-full h-auto max-h-[80vh] object-contain rounded-xl shadow-2xl bg-white"
              priority
            />
            <div className="mt-4 text-white text-center text-lg drop-shadow-lg max-w-2xl mx-auto">
              {lightbox.alt}
            </div>
          </div>
        </div>
      )}

      <Navbar />

      {/* Hero */}
      <section className="editorial-page-header studio-container">
        <Link
          href="/projects"
          className="text-link mb-8 inline-flex"
        >
          <ArrowLeft size={16} aria-hidden="true" /> Back to Projects
        </Link>
        <span className="eyebrow section-kicker">{isClient ? "Client project" : "Independent project"}</span>
        <h1>{project.title.split(" - ")[0]}<br /><span className="serif-word">{project.title.split(" - ")[1] || "Case study"}</span></h1>
        <p>{project.description}</p>
        <div className="flex flex-wrap gap-3 mt-8">
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="studio-button"
            >
              {isClient ? "Visit Client Site" : "View Live Demo"} <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          )}
          {project.appStoreUrl && (
            <a
              href={project.appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="studio-button"
            >
              Download on App Store <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="studio-button"
            >
              View Code <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          )}
        </div>
      </section>

      {/* Gallery */}
      {Array.isArray(project.images) && project.images.length > 0 && (
        <AnimatedSection animationType="fadeInUp" className="studio-section">
          <div className="studio-container">
            <div className="section-heading">
              <div><span className="eyebrow section-kicker">The build</span><h2>Project <span className="serif-word">gallery.</span></h2></div>
            </div>
            <div className="grid grid-cols-1 gap-8">
              <button
                type="button"
                className="relative w-full h-[420px] md:h-[520px] rounded-2xl overflow-hidden bg-secondary/40 border border-border cursor-pointer group"
                onClick={() => project.images?.[0] && openLightbox(project.images[0], `${project.title} - Main Screenshot`)}
                aria-label="View full image"
              >
                <Image
                  src={project.images[0]}
                  alt={`${project.title} - Main Screenshot`}
                  fill
                  className="object-contain p-4 transition-transform duration-300 group-hover:scale-[1.02]"
                  sizes="(max-width: 768px) 100vw, 80vw"
                  priority
                />
              </button>
              {project.images.length > 1 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {project.images.slice(1).map((img, idx) => (
                    <button
                      key={idx}
                      type="button"
                      className="relative w-full h-[300px] md:h-[360px] rounded-2xl overflow-hidden bg-secondary/40 border border-border cursor-pointer group"
                      onClick={() => img && openLightbox(img, `${project.title} - Screenshot ${idx + 2}`)}
                      aria-label={`View screenshot ${idx + 2}`}
                    >
                      <Image
                        src={img}
                        alt={`${project.title} - Screenshot ${idx + 2}`}
                        fill
                        className="object-contain p-4 transition-transform duration-300 group-hover:scale-[1.02]"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </AnimatedSection>
      )}

      {/* Details */}
      <AnimatedSection animationType="fadeInUp" className="studio-section bg-secondary/50">
        <div className="studio-container">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-16">
              <div>
                <span className="eyebrow section-kicker">About the project</span>
                <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-8">The <span className="serif-word">story.</span></h2>
                <div className="space-y-6">
                  {project.details.split('\n\n').map((paragraph, idx) => (
                    <p key={idx} className="text-muted-foreground leading-relaxed text-lg">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {project.features && project.features.length > 0 && (
                <div>
                  <span className="eyebrow section-kicker">What I built</span>
                  <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-8">Key <span className="serif-word">features.</span></h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start p-4 bg-card rounded-xl border border-border">
                        <div className="h-6 w-6 text-primary mr-4 mt-0.5 flex-shrink-0 bg-primary/10 rounded-full flex items-center justify-center">
                          <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-foreground font-medium leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8 lg:sticky lg:top-24 lg:self-start">
              {project.metrics && project.metrics.length > 0 && (
                <div className="bg-card p-6 rounded-2xl border border-border">
                  <h3 className="eyebrow section-kicker mb-4">Key metrics</h3>
                  <div className="grid grid-cols-1 gap-3">
                    {project.metrics.map((metric, idx) => (
                      <div key={idx} className="flex items-center p-2 bg-secondary/40 rounded-lg">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        <span className="font-medium text-foreground text-sm">{metric}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {project.techStack && project.techStack.length > 0 && (
                <div className="bg-card p-6 rounded-2xl border border-border">
                  <h3 className="eyebrow section-kicker mb-4">Tech stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 bg-secondary/40 text-xs font-medium text-foreground rounded-full border border-border">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {project.businessImpact && (
                <div className="bg-card p-6 rounded-2xl border border-border">
                  <h3 className="eyebrow section-kicker mb-3">Impact</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{project.businessImpact}</p>
                </div>
              )}

              {(project.url || project.appStoreUrl || project.githubUrl) && (
                <div className="bg-card p-6 rounded-2xl border border-border">
                  <h3 className="eyebrow section-kicker mb-4">Links</h3>
                  <div className="space-y-3">
                    {project.url && (
                      <a href={project.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-3 bg-secondary/40 hover:bg-secondary rounded-lg text-foreground transition-colors group text-sm">
                        <ArrowUpRight className="w-4 h-4 group-hover:scale-110 transition-transform" />
                        <span className="font-medium">{isClient ? "Client Site" : "Live Demo"}</span>
                        <span className="ml-auto group-hover:translate-x-1 transition-transform">→</span>
                      </a>
                    )}
                    {project.appStoreUrl && (
                      <a href={project.appStoreUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-3 bg-secondary/40 hover:bg-secondary rounded-lg text-foreground transition-colors group text-sm">
                        <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                        </svg>
                        <span className="font-medium">App Store</span>
                        <span className="ml-auto group-hover:translate-x-1 transition-transform">→</span>
                      </a>
                    )}
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-3 bg-secondary/40 hover:bg-secondary rounded-lg text-foreground transition-colors group text-sm">
                        <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        <span className="font-medium">Source Code</span>
                        <span className="ml-auto group-hover:translate-x-1 transition-transform">→</span>
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Next step */}
      <div className="studio-container project-next-step">
        <span className="eyebrow">There&apos;s a story behind every build.</span>
        <Link href="/projects" className="text-link">View all projects <ArrowUpRight size={16} aria-hidden="true" /></Link>
      </div>

      <Footer />
    </div>
  );
}
