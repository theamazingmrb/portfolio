"use client";

import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import { sideProjects } from "@/data/experience";

export default function SideProjectsTab() {
  return (
    <AnimatedSection animationType="fadeIn">
      <h3 className="text-3xl font-bold mb-8" id="tab-projects">Side Projects</h3>
      <div className="space-y-8" role="tabpanel" aria-labelledby="tab-projects-trigger">
        {sideProjects.map((project, index) => (
          <Card key={`${project.title}-${index}`} className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="flex items-center gap-4">
                {project.logo && (
                  <div className="flex-shrink-0 w-12 h-12 relative">
                    <Image src={project.logo} alt={`${project.title} logo`} fill className="object-contain" />
                  </div>
                )}
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                      <CardDescription>{project.period}</CardDescription>
                    </div>
                    <div className="flex gap-2">
                      {project.projectUrl && (
                        <Button variant="outline" size="sm" asChild>
                          <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">Live Demo</a>
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button variant="outline" size="sm" asChild>
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <div className="mb-4">
                <h5 className="font-semibold mb-2">Highlights:</h5>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  {project.highlights.map((h, i) => <li key={i}>{h}</li>)}
                </ul>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => <Badge key={i} variant="secondary" className="text-xs">{tech}</Badge>)}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </AnimatedSection>
  );
}
