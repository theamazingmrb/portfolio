'use client';

import Image from "next/image";
import Link from "next/link";
import { FiExternalLink, FiArrowLeft, FiGithub } from "react-icons/fi";
import { Project } from "@/data/projects";
import { motion } from "framer-motion";

interface ClientProjectPageProps {
  project: Project;
}

import { useState, useCallback, useEffect, useRef } from "react";

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
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
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
              className="absolute top-2 right-2 text-white bg-black/60 rounded-full p-2 hover:bg-black/80 focus:outline-none focus:ring-2 focus:ring-blue-400 z-10"
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

      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30 z-0"></div>
        
        {/* Floating elements for visual interest */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-block"
          >
            <Link 
              href="/projects" 
              className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors group"
            >
              <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
              Back to Projects
            </Link>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-purple-100"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {project.title}
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl lg:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {project.description}
          </motion.p>
          
          <motion.div 
            className="mt-10 flex flex-wrap justify-center gap-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {project.url && (
              <a 
                href={project.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold transition-all duration-300 group shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <FiExternalLink className="w-5 h-5 transition-transform group-hover:scale-110" />
                Visit Live Site
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </a>
            )}
            {project.githubUrl && (
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gray-800/50 backdrop-blur-sm text-white hover:bg-gray-700/60 px-8 py-4 rounded-xl font-semibold transition-all duration-300 group border border-gray-600/50 hover:border-gray-500/50 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <FiGithub className="w-5 h-5 transition-transform group-hover:scale-110" />
                View Code
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </a>
            )}
          </motion.div>
        </div>
      </section>

      {/* Project Gallery */}
      {Array.isArray(project.images) && project.images.length > 0 && (
        <section className="py-16 md:py-20 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 flex items-center gap-3">
                <span className="inline-block w-2 h-10 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full mr-3"></span>Project Gallery
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 gap-8">
              {/* Main Image */}
              <motion.div 
                className="relative w-full rounded-3xl overflow-hidden shadow-xl bg-gradient-to-br from-gray-50 to-white flex items-center justify-center p-6 group transition-all duration-500 hover:shadow-2xl border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div
                  className="w-full h-[600px] md:h-[500px] relative cursor-pointer"
                  tabIndex={0}
                  aria-label="View full image"
                  onClick={() => project.images?.[0] && openLightbox(project.images[0], `${project.title} - Main Screenshot`)}
                  onKeyDown={e => { if ((e.key === 'Enter' || e.key === ' ') && project.images?.[0]) openLightbox(project.images[0], `${project.title} - Main Screenshot`); }}
                  role="button"
                >
                  <Image
                    src={project.images[0]}
                    alt={`${project.title} - Main Screenshot`}
                    fill
                    className="object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 80vw"
                    priority
                  />
                  {/* Optional: Add caption support here if data available */}
                </div> 
              </motion.div>
              {/* Secondary Images */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {project.images.slice(1).map((img, idx) => (
                  <motion.div 
                    key={idx} 
                    className="relative w-full rounded-3xl overflow-hidden shadow-lg group bg-gradient-to-br from-gray-50 to-white flex items-center justify-center p-6 transition-all duration-500 hover:shadow-xl border border-gray-100"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 + (idx * 0.1) }}
                    viewport={{ once: true }}
                  >
                    <div
                      className="w-full h-[350px] md:h-[400px] relative cursor-pointer"
                      tabIndex={0}
                      aria-label={`View screenshot ${idx + 2}`}
                      onClick={() => img && openLightbox(img, `${project.title} - Screenshot ${idx + 2}`)}
                      onKeyDown={e => { if ((e.key === 'Enter' || e.key === ' ') && img) openLightbox(img, `${project.title} - Screenshot ${idx + 2}`); }}
                      role="button"
                    >
                      <Image
                        src={img}
                        alt={`${project.title} - Screenshot ${idx + 2}`}
                        fill
                        className="object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                      />
                      {/* Optional: Add caption support here if data available */}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Project Details Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-16">
              {/* About the Project */}
              <motion.div 
                className="prose prose-lg max-w-none"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 flex items-center gap-3">
                  <span className="inline-block w-2 h-10 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full mr-3"></span>About the Project
                </h2>
                <div className="space-y-6">
                  {project.details.split('\n\n').map((paragraph, idx) => (
                    <p key={idx} className="text-gray-700 leading-relaxed text-lg">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </motion.div>

              {/* Key Features - moved to main content area */}
              {project.features && project.features.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 flex items-center gap-3">
                    <span className="inline-block w-2 h-10 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full mr-3"></span>Key Features
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
                        <div className="h-6 w-6 text-green-500 mr-4 mt-1 flex-shrink-0 bg-green-100 rounded-full flex items-center justify-center">
                          <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-800 font-medium leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
            
            {/* Sidebar with compact, focused information */}
            <motion.div 
              className="space-y-8 lg:sticky lg:top-8 lg:self-start"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {/* Project Metrics */}
              {project.metrics && project.metrics.length > 0 && (
                <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-6 rounded-2xl border border-blue-100/50 shadow-lg">
                  <h3 className="text-lg font-bold mb-4 text-gray-900 flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-2">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
                      </svg>
                    </div>
                    Key Metrics
                  </h3>
                  <div className="grid grid-cols-1 gap-3">
                    {project.metrics.map((metric, idx) => (
                      <div key={idx} className="flex items-center p-2 bg-white/60 rounded-lg">
                        <div className="w-2 h-2 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full mr-3"></div>
                        <span className="font-medium text-gray-900 text-sm">{metric}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Tech Stack */}
              {project.techStack && project.techStack.length > 0 && (
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                  <h3 className="text-lg font-bold mb-4 text-gray-900 flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg flex items-center justify-center mr-2">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                      </svg>
                    </div>
                    Tech Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, idx) => (
                      <span 
                        key={idx} 
                        className="px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-200 text-xs font-semibold text-gray-800 rounded-full shadow-sm border border-gray-300/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Business Impact */}
              {project.businessImpact && (
                <div className="bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 p-6 rounded-2xl border border-green-100/50 shadow-lg">
                  <h3 className="text-lg font-bold mb-3 text-gray-900 flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mr-2">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    </div>
                    Impact
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-sm p-3 bg-white/60 rounded-lg">{project.businessImpact}</p>
                </div>
              )}
              
              {/* Project Links */}
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-lg font-bold mb-4 text-gray-900 flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-2">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"/>
                    </svg>
                  </div>
                  Links
                </h3>
                <div className="space-y-3">
                  {project.url && (
                    <a 
                      href={project.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 p-3 bg-blue-50 hover:bg-blue-100 rounded-lg text-blue-700 hover:text-blue-800 transition-all duration-300 group text-sm"
                    >
                      <FiExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      <span className="font-medium">Live Demo</span>
                      <span className="ml-auto group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                  )}
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 p-3 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-700 hover:text-gray-800 transition-all duration-300 group text-sm"
                    >
                      <FiGithub className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      <span className="font-medium">Source Code</span>
                      <span className="ml-auto group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-purple-100">
              Ready to explore more?
            </h2>
            <p className="text-lg md:text-xl mb-10 text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Discover more innovative projects and see how I bring ideas to life through code.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/projects"
                className="bg-white text-gray-900 px-8 py-4 rounded-2xl text-lg font-bold hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 group"
              >
                View All Projects
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
              <Link
                href="/contact"
                className="bg-gray-800/50 backdrop-blur-sm text-white px-8 py-4 rounded-2xl text-lg font-bold hover:bg-gray-700/60 transition-all duration-300 border border-gray-600/50 hover:border-gray-500/50 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 group"
              >
                Get In Touch
                <span className="ml-2 group-hover:translate-x-1 transition-transform">✉</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
