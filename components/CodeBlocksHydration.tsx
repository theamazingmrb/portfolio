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

export default function CodeBlocksHydration() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Force black background on all code blocks
    document.querySelectorAll('.code-block-wrapper, .code-block-wrapper pre, pre[class*="language-"]').forEach(el => {
      if (el instanceof HTMLElement) {
        el.style.backgroundColor = '#000';
        el.style.background = '#000';
      }
    });

    // Find all code block wrappers
    const codeBlocks = document.querySelectorAll('.code-block-wrapper');
    
    codeBlocks.forEach((block) => {
      if (!(block instanceof HTMLElement)) return;
      
      const code = block.getAttribute('data-code') || '';
      const language = block.getAttribute('data-language') || '';
      
      // Handle existing pre element if it exists
      const existingPre = block.querySelector('pre');
      if (existingPre) {
        // Add line numbers class
        existingPre.classList.add('line-numbers');
        
        // Make sure language class is applied
        if (language) {
          existingPre.classList.add(`language-${language}`);
        }
        
        // Get code element
        const codeElement = existingPre.querySelector('code');
        if (codeElement) {
          // Make sure language class is applied to code element
          if (language) {
            codeElement.classList.add(`language-${language}`);
          }
        }
      } else {
        // Create pre and code elements with line numbers
        const preElement = document.createElement('pre');
        preElement.className = `line-numbers language-${language}`;
        
        const codeElement = document.createElement('code');
        codeElement.className = `language-${language}`;
        codeElement.textContent = code;
        
        // Append code to pre
        preElement.appendChild(codeElement);
        
        // Add pre to block
        block.appendChild(preElement);
      }
      
      // Create copy button with improved styling
      const copyButton = document.createElement('button');
      copyButton.className = 'copy-button';
      copyButton.setAttribute('aria-label', 'Copy code');
      copyButton.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
          <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
          <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
        </svg>
      `;
      
      // Add copy functionality
      copyButton.addEventListener('click', () => {
        navigator.clipboard.writeText(code);
        
        // Show copied state
        copyButton.classList.add('copied');
        copyButton.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>
        `;
        
        // Reset after 2 seconds
        setTimeout(() => {
          copyButton.classList.remove('copied');
          copyButton.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
              <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
            </svg>
          `;
        }, 2000);
      });
      
      // Add the button to the block if it doesn't already exist
      if (!block.querySelector('.copy-button')) {
        block.appendChild(copyButton);
      }
      
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
