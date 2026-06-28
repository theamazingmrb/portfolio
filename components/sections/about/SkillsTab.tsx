"use client";

import AnimatedSection from "@/components/AnimatedSection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { skillCategories } from "@/data/skills";

export default function SkillsTab() {
  return (
    <AnimatedSection animationType="fadeIn">
      <h3 className="text-3xl font-bold mb-8" id="tab-skills">Technologies I Ship With</h3>
      <p className="text-muted-foreground mb-8 max-w-2xl">What I have actually built and shipped. Each item links to a real project.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" role="tabpanel" aria-labelledby="tab-skills-trigger">
        {skillCategories.map((group) => (
          <Card key={group.category} className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader><CardTitle className="text-lg">{group.category}</CardTitle></CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {group.items.map((item) => {
                  const [name, context] = item.split(" — ");
                  return (
                    <li key={item} className="text-sm">
                      <span className="font-medium">{name}</span>
                      {context && <span className="text-muted-foreground"> — {context}</span>}
                    </li>
                  );
                })}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </AnimatedSection>
  );
}
