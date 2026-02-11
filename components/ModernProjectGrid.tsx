'use client';

import { useState } from 'react';
import { Project } from '@/lib/projects';
import { UnifiedProjectCard } from '@/components/UnifiedProjectCard';

interface ModernProjectGridProps {
  projects: Project[];
}

export function ModernProjectGrid({ projects }: ModernProjectGridProps) {
  const [filter, setFilter] = useState<string>('all');
  
  // Extract unique technologies for filtering
  const allTechnologies = Array.from(
    new Set(projects.flatMap(project => project.techStack || []))
  ).sort();

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.techStack?.includes(filter));

  return (
    <div className="space-y-8">
      {/* Filter Pills */}
      <div className="flex flex-wrap gap-2 justify-center">
        <button
          onClick={() => setFilter('all')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
            filter === 'all'
              ? 'bg-blue-600 text-white shadow-lg'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          All Projects
        </button>
        {allTechnologies.map((tech) => (
          <button
            key={tech}
            onClick={() => setFilter(tech)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              filter === tech
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {tech}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <UnifiedProjectCard
            key={project.id}
            project={project}
            variant="projects"
          />
        ))}
      </div>

      {/* No Results */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 text-lg mb-2">No projects found</div>
          <div className="text-gray-500 text-sm">
            Try selecting a different technology filter
          </div>
        </div>
      )}
    </div>
  );
}
