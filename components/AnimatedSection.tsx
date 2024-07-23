"use client";

import { useEffect, useRef, ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animationType?: "fadeIn" | "fadeInUp" | "fadeInLeft" | "fadeInRight";
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = "",
  animationType = "fadeInUp",
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in", animationType);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [animationType]);

  return (
    <div
      ref={sectionRef}
      className={`opacity-0 ${className}`}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
