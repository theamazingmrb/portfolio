"use client";

import AnimatedSection from "@/components/AnimatedSection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { skillCategories } from "@/data/skills";

export default function SkillsSection() {
  return (
    <AnimatedSection animationType="fadeInRight" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 px-2">Technologies I Ship With</h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">Stacks chosen for real products. Every item below was load-tested by users.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
      </div>
    </AnimatedSection>
  );
}
