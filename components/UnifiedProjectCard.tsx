'use client';

import Image from "next/image";
import Link from "next/link";
import { Project } from "@/lib/projects";

interface UnifiedProjectCardProps {
  project: Project;
  variant?: "home" | "projects" | "grid";
  featured?: boolean;
}

export function UnifiedProjectCard({ 
  project, 
  variant = "projects", 
  featured = false 
}: UnifiedProjectCardProps) {
  // Normalize tech stack data
  const techs = project.techStack || [];
  
  // Variant-specific styling
  const isHomeVariant = variant === "home";
  const isProjectsVariant = variant === "projects";
  
  return (
    <div className={`
      group rounded-xl overflow-hidden transition-all duration-300 border
      ${isHomeVariant 
        ? 'bg-gray-900 border-gray-700 shadow-xl hover:shadow-2xl shadow-blue-500/20 hover:shadow-blue-500/30' 
        : 'bg-white border-gray-200 shadow-md hover:shadow-xl'
      }
      ${featured ? 'ring-2 ring-blue-500/50' : ''}
    `}>
      {/* Image Section */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          width={600}
          height={300}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Featured Badge */}
        {featured && (
          <div className="absolute top-3 right-3 z-30 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-bold px-3 py-1 rounded-full shadow-lg">
            Featured
          </div>
        )}
        
        {/* Overlay gradient for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content Section */}
      <div className={`
        p-6
        ${isHomeVariant ? 'border-t border-gray-800' : ''}
      `}>
        {/* Title and Badge */}
        <div className="flex items-start justify-between mb-2">
          <h3 className={`
            text-xl font-bold transition-colors
            ${isHomeVariant 
              ? 'text-white group-hover:text-blue-300' 
              : 'text-gray-900 group-hover:text-blue-600'
            }
          `}>
            {project.title}
          </h3>
          {project.projectType && (
            <span className={`
              text-xs px-2 py-1 rounded-md font-medium flex-shrink-0 ml-2
              ${project.projectType === 'Client' ? (
                isHomeVariant ? 'bg-green-900 text-green-200' : 'bg-green-100 text-green-700'
              ) : project.projectType === 'Venture' ? (
                isHomeVariant ? 'bg-purple-900 text-purple-200' : 'bg-purple-100 text-purple-700'
              ) : project.projectType === 'Employment' ? (
                isHomeVariant ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-700'
              ) : (
                isHomeVariant ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-600'
              )}
            `}>
              {project.projectType}
            </span>
          )}
        </div>

        {/* Description */}
        <p className={`
          mb-4 line-clamp-2 text-sm leading-relaxed
          ${isHomeVariant ? 'text-gray-200' : 'text-gray-600'}
        `}>
          {project.description}
        </p>

        {/* Tech Stack */}
        {techs.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {techs.slice(0, 3).map((tech: string, index: number) => (
              <span 
                key={index} 
                className={`
                  px-2 py-1 rounded-full text-xs font-medium
                  ${isHomeVariant 
                    ? 'bg-gray-800 text-blue-200' 
                    : 'bg-gray-100 text-gray-700'
                  }
                `}
              >
                {tech}
              </span>
            ))}
            {techs.length > 3 && (
              <span className={`
                px-2 py-1 rounded-full text-xs font-medium
                ${isHomeVariant 
                  ? 'bg-gray-800 text-gray-400' 
                  : 'bg-gray-100 text-gray-500'
                }
              `}>
                +{techs.length - 3}
              </span>
            )}
          </div>
        )}

        {/* Metrics (Home variant only) */}
        {isHomeVariant && project.metrics && project.metrics.length > 0 && (
          <div className="mb-4">
            <div className="grid grid-cols-2 gap-1 text-xs">
              {project.metrics.slice(0, 4).map((metric, index) => (
                <div key={index} className="text-green-400 flex items-center">
                  <span className="mr-1">✓</span>
                  <span>{metric}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-2 flex-wrap">
          <Link
            href={`/projects/${project.id}`}
            className={`
              inline-flex items-center justify-center px-4 py-2 rounded-md font-medium transition-all duration-300 flex-1 min-w-[120px]
              ${isHomeVariant 
                ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                : 'bg-blue-100 hover:bg-blue-200 text-blue-800'
              }
            `}
          >
            <span>View Details</span>
            <svg 
              className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
          
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                inline-flex items-center justify-center px-3 py-2 rounded-md font-medium transition-all duration-300
                ${isHomeVariant 
                  ? 'bg-gray-800 hover:bg-gray-700 text-gray-200' 
                  : 'bg-green-100 hover:bg-green-200 text-green-800'
                }
              `}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
          
          {(project.appStoreUrl || project.relatedAppUrl) && (
            <a
              href={project.appStoreUrl || project.relatedAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                inline-flex items-center justify-center px-3 py-2 rounded-md font-medium transition-all duration-300
                ${isHomeVariant 
                  ? 'bg-black hover:bg-gray-800 text-white' 
                  : 'bg-gray-900 hover:bg-gray-800 text-white'
                }
              `}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
