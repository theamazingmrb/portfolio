"use client";

import AnimatedSection from "@/components/AnimatedSection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function TeachingTab() {
  return (
    <AnimatedSection animationType="fadeIn">
      <h3 className="text-3xl font-bold mb-8" id="tab-teaching">Teaching Experience</h3>
      <Card className="hover:shadow-lg transition-shadow duration-300" role="tabpanel" aria-labelledby="tab-teaching-trigger">
        <CardHeader><CardTitle className="text-2xl">My Teaching Philosophy</CardTitle></CardHeader>
        <CardContent>
          <div className="space-y-4 text-muted-foreground">
            <p>I create an inclusive and supportive learning environment where students can take risks and learn through hands-on practice. I combine practical coding exercises with core concepts so learners build both technical skill and problem solving habits.</p>
            <p>I emphasize real world applications and team workflows so students are ready for production work. My goal is to help learners build confidence, communicate clearly, and grow into effective collaborators.</p>
            <Separator />
            <div>
              <h4 className="font-semibold mb-2">Teaching Experience:</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>General Assembly Software Engineering Immersive - Instructor & Mentor</li>
                <li>Mentored 150+ junior developers through career transitions</li>
                <li>Taught full-stack development with React, Node.js, and Python</li>
                <li>Developed curriculum and coding exercises for enterprise applications</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </AnimatedSection>
  );
}
