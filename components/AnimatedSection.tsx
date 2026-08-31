"use client";

import { useEffect, useRef, ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animationType?: "fadeIn" | "fadeInUp" | "fadeInLeft" | "fadeInRight";
  id?: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = "",
  animationType = "fadeInUp",
  id,
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const reveal = () => {
      el.classList.remove("opacity-0");
      el.classList.add("animate-in", animationType);
    };

    // Reduced motion: never rely on JS animation — show immediately.
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      reveal();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reveal();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(el);

    // If already in viewport on mount, trigger immediately.
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      reveal();
      observer.unobserve(el);
    }

    // Fallback: if the observer never fires (scroll race, JS timing, older
    // browsers), guarantee the section reveals after a bounded window so
    // content is never left permanently invisible at opacity-0.
    const fallback = window.setTimeout(reveal, 500);

    return () => {
      observer.unobserve(el);
      window.clearTimeout(fallback);
    };
  }, [animationType]);

  return (
    <div ref={sectionRef} id={id} className={`opacity-0 ${className}`}>
      {children}
    </div>
  );
};

export default AnimatedSection;
