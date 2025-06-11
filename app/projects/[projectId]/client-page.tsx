'use client';

import Image from "next/image";
import Link from "next/link";
import { FiExternalLink, FiArrowLeft } from "react-icons/fi";
import { Project } from "@/data/projects";
import { motion } from "framer-motion";

interface ClientProjectPageProps {
  project: Project;
}

export default function ClientProjectPage({ project }: ClientProjectPageProps) {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
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
      {project.images && project.images.length > 0 && (
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl">
                  <Image
                    src={project.images[0]}
                    alt={`${project.title} - Main Screenshot`}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
              {project.images.slice(1).map((img, idx) => (
                <div key={idx} className="relative aspect-video rounded-xl overflow-hidden shadow-xl">
                  <Image
                    src={img}
                    alt={`${project.title} - Screenshot ${idx + 2}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
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
