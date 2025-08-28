import { visit } from 'unist-util-visit';
import type { Plugin } from 'unified';
import type { Element, Root, Text } from 'hast';

interface Options {
  className?: string;
}

// Helper function to extract text content from a node
function getTextContent(node: Element): string {
  let text = '';
  if (node.children) {
    for (const child of node.children) {
      if (child.type === 'text') {
        text += (child as Text).value;
      } else if (child.type === 'element') {
        text += getTextContent(child as Element);
      }
    }
  }
  return text;
}

const rehypeCodeButtons: Plugin<[Options?], Root> = (options: Options = {}) => {
  const className = options.className || 'code-block-wrapper';

  return (tree: Root) => {
    visit(tree, 'element', (node: Element, index, parent) => {
      // Only process <pre> elements that contain a <code> element
      if (
        node.tagName !== 'pre' ||
        !node.children ||
        node.children.length !== 1 ||
        node.children[0].type !== 'element' ||
        node.children[0].tagName !== 'code'
      ) {
        return;
      }

      const codeNode = node.children[0] as Element;
      const codeContent = getTextContent(codeNode);
      
      // Extract language from className
      let language = '';
      if (codeNode.properties && codeNode.properties.className) {
        const classNames = codeNode.properties.className as string[];
        for (const className of classNames) {
          if (typeof className === 'string' && className.startsWith('language-')) {
            language = className.slice(9); // Remove 'language-' prefix
            break;
          }
        }
      }

      // Create a language badge element
      const languageBadge: Element = {
        type: 'element',
        tagName: 'div',
        properties: {
          className: ['language-badge'],
          'data-language': language,
        },
        children: [],
      };

      // Create wrapper div
      const wrapper: Element = {
        type: 'element',
        tagName: 'div',
        properties: {
          className: [className],
          'data-language': language,
          'data-code': codeContent,
          style: 'background-color: #000 !important; background: #000 !important;',
        },
        children: [languageBadge, node],
      };

      // Add Prism.js classes to code element if not already present
      if (codeNode.properties && codeNode.properties.className) {
        const classNames = codeNode.properties.className as string[];
        if (!classNames.includes(`language-${language}`)) {
          classNames.push(`language-${language}`);
        }
      } else if (codeNode.properties) {
        codeNode.properties.className = [`language-${language}`];
      }

      // Replace the original node with our wrapper
      if (parent && typeof index === 'number') {
        parent.children[index] = wrapper;
      }
    });
  };
}
