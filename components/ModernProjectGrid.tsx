"use client";

import { useState } from "react";
import type { Project } from "@/lib/projects";
import EditorialProjectCard from "@/components/EditorialProjectCard";

interface ModernProjectGridProps {
  projects: Project[];
}

export function ModernProjectGrid({ projects }: ModernProjectGridProps) {
  const [filter, setFilter] = useState("all");

  // Extract unique technologies for filtering
  const allTechnologies = Array.from(new Set(projects.flatMap(project => project.techStack))).sort();
  const filteredProjects = filter === "all" ? projects : projects.filter(project => project.techStack.includes(filter));

  return (
    <div>
      {/* Filter Pills */}
      <div className="project-filter">
        <label htmlFor="project-technology">Explore by technology</label>
        <select id="project-technology" value={filter} onChange={event => setFilter(event.target.value)}>
          <option value="all">All technologies</option>
          {allTechnologies.map(tech => <option key={tech} value={tech}>{tech}</option>)}
        </select>
        <span role="status">{String(filteredProjects.length).padStart(2, "0")} projects / {filter === "all" ? "The full collection" : filter}</span>
      </div>
      {/* Projects Grid */}
      <div className="editorial-project-grid">
        {filteredProjects.map((project, index) => <EditorialProjectCard key={project.id} project={project} index={index} />)}
      </div>
      {/* No Results */}
      {filteredProjects.length === 0 && <div className="py-12 text-muted-foreground">No projects found. Try selecting a different technology.</div>}
    </div>
  );
}
