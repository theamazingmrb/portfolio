"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface TocItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  content: string;
  className?: string;
}

export default function TableOfContents({ content, className = "" }: TableOfContentsProps) {
  const [headings, setHeadings] = useState<TocItem[]>([]);
  const [activeHeading, setActiveHeading] = useState<string>("");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // Parse the HTML content to extract headings
    const parser = new DOMParser();
    const doc = parser.parseFromString(content, 'text/html');
    const headingElements = doc.querySelectorAll('h2, h3, h4');
    
    const tocItems: TocItem[] = Array.from(headingElements).map((heading) => ({
      id: heading.textContent?.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') || '',
      text: heading.textContent || '',
      level: parseInt(heading.tagName.charAt(1)),
    }));

    setHeadings(tocItems);

    // Add IDs to the headings in the content
    headingElements.forEach((heading, index) => {
      const id = tocItems[index].id;
      if (id) {
        heading.id = id;
      }
    });

    // Set up intersection observer for active heading tracking
    const observerOptions = {
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveHeading(entry.target.id);
        }
      });
    }, observerOptions);

    // Observe all headings
    headingElements.forEach((heading) => {
      if (heading.id) {
        const element = document.getElementById(heading.id);
        if (element) observer.observe(element);
      }
    });

    // Track scroll progress
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (scrollTop / scrollHeight) * 100;
      setScrollProgress(Math.min(100, Math.max(0, progress)));
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [content]);

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Account for sticky header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  if (headings.length === 0) {
    return null;
  }

  return (
    <div className={`hidden lg:block ${className}`}>
      <div className="fixed left-4 top-1/2 -translate-y-1/2 w-64 max-h-[70vh] overflow-y-auto">
        <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-lg border border-gray-200 p-4">
          <h3 className="text-sm font-bold text-gray-900 mb-3 flex items-center sticky top-0 bg-white/95 backdrop-blur-sm py-2 -mx-4 px-4 border-b border-gray-100">
            <svg className="w-4 h-4 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 9h14V7H3v2zm0 4h14v-2H3v2zm0 4h14v-2H3v2zm16 0h2v-2h-2v2zm0-10v2h2V7h-2zm0 6h2v-2h-2v2z"/>
            </svg>
            Contents
          </h3>
          
          {/* Progress indicator */}
          <div className="mb-3">
            <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300"
                style={{ width: `${scrollProgress}%` }}
              />
            </div>
            <div className="text-xs text-gray-500 mt-1">
              {Math.round(scrollProgress)}% complete
            </div>
          </div>

          {/* Navigation links */}
          <nav className="space-y-1">
            {headings.map((heading) => {
              const isActive = heading.id === activeHeading;
              const indentClass = heading.level === 3 ? 'ml-3' : heading.level === 4 ? 'ml-6' : '';
              
              return (
                <button
                  key={heading.id}
                  onClick={() => scrollToHeading(heading.id)}
                  className={`w-full text-left px-2 py-1.5 rounded text-xs transition-all duration-200 ${
                    indentClass
                  } ${
                    isActive
                      ? 'bg-blue-50 text-blue-700 font-medium border-l-2 border-blue-500'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  {heading.text.length > 25 ? heading.text.substring(0, 25) + '...' : heading.text}
                </button>
              );
            })}
          </nav>

          {/* Quick actions */}
          <div className="mt-4 pt-3 border-t border-gray-200 space-y-1">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="w-full text-center px-2 py-1 text-xs text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded transition-colors"
            >
              ↑ Top
            </button>
            <button
              onClick={() => window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' })}
              className="w-full text-center px-2 py-1 text-xs text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded transition-colors"
            >
              ↓ Bottom
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
