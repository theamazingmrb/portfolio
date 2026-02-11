"use client";

import { useState, useEffect } from 'react';

interface TocItem {
  id: string;
  text: string;
  level: number;
}

interface MobileTableOfContentsProps {
  content: string;
}

export default function MobileTableOfContents({ content }: MobileTableOfContentsProps) {
  const [headings, setHeadings] = useState<TocItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeHeading, setActiveHeading] = useState<string>("");

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
      window.removeEventListener('scroll', handleScroll);
    };
  }, [content]);

  // Track active heading with intersection observer
  useEffect(() => {
    if (headings.length === 0) return;

    const observerOptions = {
      root: null,
      rootMargin: '-80px 0px -50% 0px', // Account for header and center detection
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveHeading(entry.target.id);
        }
      });
    }, observerOptions);

    // Observe all heading elements
    headings.forEach((heading) => {
      const element = document.getElementById(heading.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      headings.forEach((heading) => {
        const element = document.getElementById(heading.id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [headings]);

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
      setIsOpen(false); // Close menu after clicking
    }
  };

  if (headings.length === 0) {
    return null;
  }

  return (
    <div className="xl:hidden fixed bottom-6 left-6 z-50">
      {/* Floating Button with Progress Ring */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-110 group"
        aria-label="Table of Contents"
      >
        {/* Progress Ring */}
        <svg className="absolute inset-0 w-full h-full -rotate-90">
          <circle
            cx="24"
            cy="24"
            r="20"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            className="text-blue-800 opacity-30"
          />
          <circle
            cx="24"
            cy="24"
            r="20"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeDasharray={`${2 * Math.PI * 20}`}
            strokeDashoffset={`${2 * Math.PI * 20 * (1 - scrollProgress / 100)}`}
            className="text-white transition-all duration-300"
          />
        </svg>
        
        {/* Icon */}
        <svg className="w-6 h-6 relative z-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M3 9h14V7H3v2zm0 4h14v-2H3v2zm0 4h14v-2H3v2zm16 0h2v-2h-2v2zm0-10v2h2V7h-2zm0 6h2v-2h-2v2z"/>
        </svg>
        
        {/* Progress percentage on hover */}
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          {Math.round(scrollProgress)}% read
        </div>
      </button>

      {/* Slide-in Menu */}
      <div className={`fixed inset-0 z-50 ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-black transition-all duration-300 ease-out ${
            isOpen ? 'bg-opacity-50 backdrop-blur-sm' : 'bg-opacity-0'
          }`}
          onClick={() => setIsOpen(false)}
        />
        
        {/* Menu Content - Slides in from left with spring animation */}
        <div className={`absolute left-0 top-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl transform transition-all duration-500 ease-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
          <div className="h-full flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gray-50">
              <h3 className="text-lg font-bold text-gray-900 flex items-center">
                <svg className="w-5 h-5 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 9h14V7H3v2zm0 4h14v-2H3v2zm0 4h14v-2H3v2zm16 0h2v-2h-2v2zm0-10v2h2V7h-2zm0 6h2v-2h-2v2z"/>
                </svg>
                Contents
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700 p-1 rounded-md hover:bg-gray-200 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 13.41 12z"/>
                </svg>
              </button>
            </div>

            {/* Progress */}
            <div className="p-4 border-b border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Reading Progress</span>
                <span className="text-sm font-medium text-blue-600">{Math.round(scrollProgress)}%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300"
                  style={{ width: `${scrollProgress}%` }}
                />
              </div>
            </div>

            {/* Navigation links */}
            <div className="flex-1 overflow-y-auto p-4">
              <nav className="space-y-2">
                {headings.map((heading, index) => {
                  const indentClass = heading.level === 3 ? 'ml-4' : heading.level === 4 ? 'ml-8' : '';
                  
                  return (
                    <button
                      key={heading.id}
                      onClick={() => scrollToHeading(heading.id)}
                      className={`w-full text-left px-3 py-3 rounded-lg text-sm transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] ${
                        indentClass
                      } ${
                        activeHeading === heading.id 
                          ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-500' 
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50 hover:shadow-sm'
                      }`}
                    >
                      <div className="flex items-center">
                        <span className={`text-xs mr-2 w-4 font-medium ${
                          activeHeading === heading.id ? 'text-blue-500' : 'text-gray-400'
                        }`}>{index + 1}.</span>
                        <span className="font-medium">{heading.text}</span>
                      </div>
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Quick actions */}
            <div className="p-4 border-t border-gray-200 space-y-2">
              <button
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  setIsOpen(false);
                }}
                className="w-full text-center px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
              >
                ↑ Back to top
              </button>
              <button
                onClick={() => {
                  window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
                  setIsOpen(false);
                }}
                className="w-full text-center px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
              >
                ↓ Jump to bottom
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
