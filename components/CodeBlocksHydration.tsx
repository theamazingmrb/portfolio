'use client';

import { useEffect, useState } from 'react';
import Prism from 'prismjs';

// Import Prism CSS themes and languages
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-tsx';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-markdown';
import 'prismjs/components/prism-yaml';
import 'prismjs/components/prism-docker';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-go';
import 'prismjs/components/prism-sql';
import 'prismjs/components/prism-graphql';
import 'prismjs/components/prism-rust';

// Import line numbers plugin
import 'prismjs/plugins/line-numbers/prism-line-numbers';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';

// Helper function to add copy button to code blocks
function addCopyButton(container: Element, code: string) {
  // Check if button already exists
  if (container.querySelector('.copy-button')) return;
  
  // Create copy button
  const copyButton = document.createElement('button');
  copyButton.className = 'copy-button';
  copyButton.setAttribute('aria-label', 'Copy code');
  copyButton.setAttribute('title', 'Copy code');
  
  // Style the button
  copyButton.style.position = 'absolute';
  copyButton.style.top = '0.75rem';
  copyButton.style.right = '0.75rem';
  copyButton.style.padding = '0.6rem 0.85rem';
  copyButton.style.backgroundColor = 'rgba(255, 255, 255, 0.25)';
  copyButton.style.border = '2px solid rgba(255, 255, 255, 0.4)';
  copyButton.style.borderRadius = '0.375rem';
  copyButton.style.color = '#ffffff';
  copyButton.style.fontSize = '0.9rem';
  copyButton.style.fontWeight = '600';
  copyButton.style.cursor = 'pointer';
  copyButton.style.display = 'flex';
  copyButton.style.alignItems = 'center';
  copyButton.style.justifyContent = 'center';
  copyButton.style.gap = '0.35rem';
  copyButton.style.zIndex = '50';
  copyButton.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.3)';
  copyButton.style.transition = 'all 0.2s ease';
  copyButton.style.opacity = '1';
  
  // Set button content
  copyButton.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
    </svg>
    <span style="font-size: 1rem;">Copy</span>
  `;
  
  // Add hover effect
  copyButton.addEventListener('mouseover', () => {
    copyButton.style.backgroundColor = 'rgba(255, 255, 255, 0.35)';
    copyButton.style.transform = 'scale(1.05)';
    copyButton.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.4)';
  });
  
  copyButton.addEventListener('mouseout', () => {
    copyButton.style.backgroundColor = 'rgba(255, 255, 255, 0.25)';
    copyButton.style.transform = 'scale(1)';
    copyButton.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.3)';
  });
  
  // Add click handler
  copyButton.addEventListener('click', () => {
    navigator.clipboard.writeText(code).then(() => {
      // Change button appearance to indicate success
      copyButton.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M20 6L9 17l-5-5"></path>
        </svg>
        <span style="color: #10b981;">Copied!</span>
      `;
      copyButton.style.borderColor = '#10b981';
      copyButton.style.backgroundColor = 'rgba(16, 185, 129, 0.3)';
      copyButton.style.boxShadow = '0 0 15px rgba(16, 185, 129, 0.5)';
      copyButton.style.transform = 'scale(1.05)';
      
      // Show a temporary notification
      const notification = document.createElement('div');
      notification.textContent = 'Code copied to clipboard!';
      notification.style.position = 'fixed';
      notification.style.bottom = '20px';
      notification.style.right = '20px';
      notification.style.backgroundColor = 'rgba(16, 185, 129, 0.9)';
      notification.style.color = 'white';
      notification.style.padding = '10px 20px';
      notification.style.borderRadius = '4px';
      notification.style.zIndex = '9999';
      notification.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.2)';
      document.body.appendChild(notification);
      
      setTimeout(() => {
        // Remove notification after 2 seconds
        if (document.body.contains(notification)) {
          document.body.removeChild(notification);
        }
        
        // Reset button appearance
        copyButton.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
          </svg>
          <span style="font-size: 1rem;">Copy</span>
        `;
        copyButton.style.borderColor = 'rgba(255, 255, 255, 0.4)';
        copyButton.style.backgroundColor = 'rgba(255, 255, 255, 0.25)';
        copyButton.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.3)';
        copyButton.style.transform = 'none';
      }, 2000);
    });
  });
  
  // Add the button to the container
  container.appendChild(copyButton);
}

export default function CodeBlocksHydration() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;

    // Find all code blocks - both with wrapper and direct pre elements
    const codeBlockWrappers = document.querySelectorAll('.code-block-wrapper');
    const standalonePreBlocks = document.querySelectorAll('pre:not(.code-block-wrapper pre)');
    
    // Process standalone pre blocks first
    standalonePreBlocks.forEach((preElement) => {
      // Set position relative for proper button positioning
      preElement.setAttribute('style', 'position: relative !important; background-color: #000 !important; background: #000 !important;');
      
      // Get code content and language
      const codeElement = preElement.querySelector('code');
      if (!codeElement) return;
      
      const code = codeElement.textContent || '';
      let language = 'plaintext';
      
      // Try to extract language from class
      const classNames = codeElement.className.split(' ');
      for (const className of classNames) {
        if (className.startsWith('language-')) {
          language = className.replace('language-', '');
          break;
        }
      }
      
      // Ensure pre has line-numbers class
      if (!preElement.classList.contains('line-numbers')) {
        preElement.classList.add('line-numbers');
      }
      
      // Add copy button
      addCopyButton(preElement, code);
    });
    
    // Process code block wrappers
    const codeBlocks = codeBlockWrappers;
    
    codeBlocks.forEach((block) => {
      // Get code content and language from data attributes
      const code = block.getAttribute('data-code') || '';
      const language = block.getAttribute('data-language') || 'plaintext';
      
      // Force black background styling
      block.setAttribute('style', 'background-color: #000 !important; background: #000 !important; position: relative !important;');
      
      // Find or create pre element
      let preElement = block.querySelector('pre');
      
      if (preElement) {
        // If pre exists, ensure it has the right classes
        preElement.className = `language-${language} line-numbers`;
        
        // Find or create code element
        let codeElement = preElement.querySelector('code');
        
        if (!codeElement) {
          codeElement = document.createElement('code');
          codeElement.className = `language-${language}`;
          codeElement.textContent = code;
          preElement.appendChild(codeElement);
        } else {
          // Ensure code element has the right class
          codeElement.className = `language-${language}`;
        }
      } else {
        // Create pre and code elements if they don't exist
        preElement = document.createElement('pre');
        preElement.className = `language-${language} line-numbers`;
        
        const codeElement = document.createElement('code');
        codeElement.className = `language-${language}`;
        codeElement.textContent = code;
        
        preElement.appendChild(codeElement);
        
        // Add pre to block
        block.appendChild(preElement);
      }
      
      // Add copy button to the block
      addCopyButton(block, code);
      
      // Add line highlighting functionality
      const pre = block.querySelector('pre');
      if (pre) {
        // Add line hover effect
        pre.addEventListener('mousemove', (e) => {
          if (e.target && (e.target as HTMLElement).tagName === 'SPAN' && 
              (e.target as HTMLElement).parentElement?.classList.contains('line-numbers-rows')) {
            const lineSpan = e.target as HTMLElement;
            const lineNumber = parseInt(lineSpan.getAttribute('data-line-number') || '0', 10);
            
            // Remove highlight from all lines
            const allLines = pre.querySelectorAll('.line-highlight');
            allLines.forEach(line => line.classList.remove('line-highlight'));
            
            // Add highlight to current line
            if (lineNumber > 0) {
              const codeLine = pre.querySelector(`[data-line="${lineNumber}"]`);
              if (codeLine) {
                codeLine.classList.add('line-highlight');
              }
            }
          }
        });
      }
    });

    // Apply Prism.js syntax highlighting to all code blocks
    if (typeof window !== 'undefined') {
      // Highlight all existing code blocks
      Prism.highlightAll();
      
      // Add line numbers to each line for styling
      document.querySelectorAll('.line-numbers-rows > span').forEach((span, index) => {
        span.setAttribute('data-line-number', String(index + 1));
      });
      
      // Add suppressHydrationWarning to prevent hydration errors
      document.querySelectorAll('.code-block-wrapper pre').forEach(pre => {
        pre.setAttribute('suppressHydrationWarning', 'true');
      });
    }
  }, []);

  return null;
}
