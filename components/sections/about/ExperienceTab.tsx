"use client";

import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import AnimatedSection from "@/components/AnimatedSection";
import { fullTimeExperience, ventures, freelanceProjects } from "@/data/experience";

export default function ExperienceTab() {
  return (
    <AnimatedSection animationType="fadeIn">
      <h3 className="text-3xl font-bold mb-8" id="tab-experience">Work Experience</h3>
      <div className="space-y-12" role="tabpanel" aria-labelledby="tab-experience-trigger">

        <div>
          <h4 className="text-2xl font-semibold mb-6 text-primary">Full-Time Experience</h4>
          <div className="space-y-8">
            {fullTimeExperience.map((exp, index) => (
              <Card key={`fulltime-${exp.company}-${index}`} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    {exp.logo && (
                      <div className="flex-shrink-0 w-12 h-12 relative">
                        <Image src={exp.logo} alt={`${exp.company} logo`} fill className="object-contain" />
                      </div>
                    )}
                    <div>
                      <CardTitle className="text-xl">{exp.title}</CardTitle>
                      <CardDescription className="flex flex-wrap items-center gap-2">
                        {exp.companyUrl ? (
                          <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">{exp.company}</a>
                        ) : (
                          exp.company
                        )}
                        <span>•</span>
                        <span>{exp.period}</span>
                        <Badge variant="outline" className="ml-2">Contract</Badge>
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{exp.description}</p>
                  {exp.achievements?.length > 0 && (
                    <div className="mb-6">
                      <h5 className="font-semibold mb-3">Key Achievements:</h5>
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        {exp.achievements.map((a, i) => <li key={i}>{a}</li>)}
                      </ul>
                    </div>
                  )}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => <Badge key={i} variant="secondary">{tech}</Badge>)}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-2xl font-semibold mb-6 text-primary">Freelance & Client Work</h4>
          <div className="space-y-8">
            {freelanceProjects.map((exp, index) => (
              <Card key={`freelance-${exp.company}-${index}`} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    {exp.logo && (
                      <div className="flex-shrink-0 w-12 h-12 relative">
                        <Image src={exp.logo} alt={`${exp.company} logo`} fill className="object-contain" />
                      </div>
                    )}
                    <div>
                      <CardTitle className="text-xl">{exp.title}</CardTitle>
                      <CardDescription className="flex flex-wrap items-center gap-2">
                        {exp.companyUrl ? (
                          <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">{exp.company}</a>
                        ) : (
                          exp.company
                        )}
                        <span>•</span>
                        <span>{exp.period}</span>
                        {exp.appStoreUrl && (
                          <>
                            <span>•</span>
                            <a href={exp.appStoreUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 transition-colors">
                              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                              </svg>
                              App Store
                            </a>
                          </>
                        )}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{exp.description}</p>
                  {exp.achievements?.length > 0 && (
                    <div className="mb-6">
                      <h5 className="font-semibold mb-3">Key Achievements:</h5>
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        {exp.achievements.map((a, i) => <li key={i}>{a}</li>)}
                      </ul>
                    </div>
                  )}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => <Badge key={i} variant="secondary">{tech}</Badge>)}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-2xl font-semibold mb-6 text-primary">Startup Experience</h4>
          <div className="space-y-8">
            {ventures.map((exp, index) => (
              <Card key={`venture-${exp.company}-${index}`} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    {exp.logo && (
                      <div className="flex-shrink-0 w-12 h-12 relative">
                        <Image src={exp.logo} alt={`${exp.company} logo`} fill className="object-contain" />
                      </div>
                    )}
                    <div>
                      <CardTitle className="text-xl">{exp.title}</CardTitle>
                      <CardDescription className="flex flex-wrap items-center gap-2">
                        {exp.companyUrl ? (
                          <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">{exp.company}</a>
                        ) : (
                          exp.company
                        )}
                        <span>•</span>
                        <span>{exp.period}</span>
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{exp.description}</p>
                  {exp.achievements?.length > 0 && (
                    <div className="mb-6">
                      <h5 className="font-semibold mb-3">Key Achievements:</h5>
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        {exp.achievements.map((a, i) => <li key={i}>{a}</li>)}
                      </ul>
                    </div>
                  )}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => <Badge key={i} variant="secondary">{tech}</Badge>)}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
