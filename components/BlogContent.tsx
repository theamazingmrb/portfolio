'use client';

import React, { useEffect, useState } from 'react';
import BlogContentHydration from './BlogContentHydration';
import MermaidChart from './MermaidChart';

interface BlogContentProps {
  content: string;
}

export default function BlogContent({ content }: BlogContentProps) {
  const [processedContent, setProcessedContent] = useState(content);
  
  useEffect(() => {
    // Process the content to extract and replace Mermaid code blocks
    const processMermaidBlocks = () => {
      // Regular expression to match Mermaid code blocks
      const mermaidRegex = /<pre><code class="language-mermaid">([\s\S]*?)<\/code><\/pre>/g;
      
      // Replace Mermaid code blocks with placeholders that we'll replace with actual components
      let newContent = content;
      const mermaidCharts: string[] = [];
      
      // Extract Mermaid chart definitions and replace with placeholders
      newContent = newContent.replace(mermaidRegex, (match, chartDefinition) => {
        const chartId = `mermaid-chart-${mermaidCharts.length}`;
        mermaidCharts.push(chartDefinition);
        return `<div id="${chartId}" class="mermaid-placeholder"></div>`;
      });
      
      setProcessedContent(newContent);
      
      // After the content is rendered, replace placeholders with actual Mermaid charts
      setTimeout(() => {
        mermaidCharts.forEach((chartDefinition, index) => {
          const placeholder = document.getElementById(`mermaid-chart-${index}`);
          if (placeholder) {
            // Create a new div for the Mermaid chart
            const chartContainer = document.createElement('div');
            chartContainer.className = 'my-6';
            placeholder.parentNode?.replaceChild(chartContainer, placeholder);
            
            // Render the Mermaid chart
            const chart = document.createElement('div');
            chart.className = 'mermaid';
            chart.textContent = chartDefinition;
            chartContainer.appendChild(chart);
            
            // Initialize Mermaid on this element
            try {
              // @ts-ignore - mermaid will be loaded globally
              window.mermaid?.init(undefined, chart);
            } catch (error) {
              console.error('Error initializing Mermaid chart:', error);
            }
          }
        });
      }, 100);
    };
    
    processMermaidBlocks();
  }, [content]);
  
  return <BlogContentHydration content={processedContent} />;
}
