'use client';

import Image from "next/image";
import Link from "next/link";
import { FiExternalLink, FiArrowLeft } from "react-icons/fi";
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
      <section className="relative h-96 md:h-[32rem] flex items-center justify-center overflow-hidden px-4 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-0"></div>
        
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
            className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {project.title}
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {project.description}
          </motion.p>
          
          {project.url && (
            <motion.div 
              className="mt-8 flex flex-wrap justify-center gap-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {project.url && (
                <a 
                  href={project.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-gray-900 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-colors group"
                >
                  <FiExternalLink className="w-5 h-5" />
                  Visit Site
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              )}

            </motion.div>
          )}
        </div>
      </section>

      {/* Project Gallery */}
      {Array.isArray(project.images) && project.images.length > 0 && (
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <span className="inline-block w-2 h-8 bg-blue-500 rounded-full mr-2"></span>Gallery
            </h2>
            <div className="grid grid-cols-1 gap-6">
              {/* Main Image */}
              <div className="relative w-full rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-gray-50 to-white flex items-center justify-center p-4 group transition-all duration-300 hover:shadow-2xl">
                <div
                  className="w-full h-[500px] relative cursor-pointer"
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
              </div>
              {/* Secondary Images */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.images.slice(1).map((img, idx) => (
                  <div key={idx} className="relative w-full rounded-2xl overflow-hidden shadow group bg-gradient-to-br from-gray-50 to-white flex items-center justify-center p-4 transition-all duration-300 hover:shadow-xl">
                    <div
                      className="w-full h-[400px] relative cursor-pointer"
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
                  </div>
                ))}
              </div>
            </div>
            <div className="my-12 border-t border-gray-200"></div>
          </div>
        </section>
      )}

      {/* Project Details Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <div className="prose max-w-none">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">About the Project</h2>
                {project.details.split('\n\n').map((paragraph, idx) => (
                  <p key={idx} className="mb-4 text-gray-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            
            <div className="space-y-8">
              {/* Project Metrics */}
              {project.metrics && project.metrics.length > 0 && (
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl border border-blue-100">
                  <h3 className="text-lg font-semibold mb-4 text-gray-900 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
                    </svg>
                    Key Metrics
                  </h3>
                  <div className="grid grid-cols-1 gap-3">
                    {project.metrics.map((metric, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        <span className="font-medium text-gray-900">{metric}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Business Impact */}
              {project.businessImpact && (
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-100">
                  <h3 className="text-lg font-semibold mb-3 text-gray-900 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                    Business Impact
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{project.businessImpact}</p>
                </div>
              )}
              
              {/* Tech Stack */}
              {project.techStack && project.techStack.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, idx) => (
                      <span 
                        key={idx} 
                        className="px-3 py-1.5 bg-white text-sm font-medium text-gray-700 rounded-full shadow-sm border border-gray-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Key Features */}
              {project.features && project.features.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900">Key Features</h3>
                  <ul className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {/* Project Links */}
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900">Project Links</h3>
                <div className="space-y-3">
                  {project.url && (
                    <a 
                      href={project.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <FiExternalLink className="w-5 h-5" />
                      <span>Live Demo</span>
                    </a>
                  )}

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-900 text-white py-12 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Want to see more projects?
          </h2>
          <p className="text-lg md:text-xl mb-8">
            Check out my other work and innovations.
          </p>
          <Link
            href="/projects"
            className="bg-white text-gray-900 px-6 md:px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition duration-300"
          >
            View All Projects
          </Link>
        </div>
      </section>
    </div>
  );
}
