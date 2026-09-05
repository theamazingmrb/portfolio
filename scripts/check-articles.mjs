import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';
import matter from 'gray-matter';
import { remark } from 'remark';
import ts from 'typescript';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const articles = path.join(root, 'blogs');
const load = name => matter(fs.readFileSync(path.join(articles, name), 'utf8')).content;
const codeBlocks = name => {
  const result = [];
  const visit = node => {
    if (node.type === 'code') result.push(node);
    node.children?.forEach(visit);
  };
  visit(remark().parse(load(name)));
  return result;
};

for (const name of fs.readdirSync(articles).filter(name => name.endsWith('.md'))) {
  test(`${name}: fenced examples have closing delimiters`, () => {
    const lines = load(name).split('\n');
    for (const block of codeBlocks(name)) {
      const opening = lines[block.position.start.line - 1].trim().match(/^(`{3,}|~{3,})/);
      if (!opening) continue;
      const closing = lines[block.position.end.line - 1].trim();
      assert.match(closing, new RegExp(`^${opening[1][0]}{${opening[1].length},}\\s*$`), `Unclosed example at content line ${block.position.start.line}`);
      assert.ok(block.position.end.line > block.position.start.line);
    }
  });
}

test('Next.js guide renders its sections outside code blocks', () => {
  const tree = remark().parse(load('nextjs_tutorial.md'));
  assert.ok(tree.children.filter(node => node.type === 'heading').length >= 12);
});

test('chatbot chunking returns consistently shaped records and terminates', () => {
  const code = codeBlocks('building-portfolio-chatbot-with-local-ai.md').find(block => block.lang === 'python' && block.value.includes('def chunk_text')).value;
  const assertions = `
for text in ['', 'A short sentence.', 'A longer sentence. ' * 300]:
    chunks = chunk_text(text, 'test')
    assert all(isinstance(chunk, dict) for chunk in chunks), 'Every chunk must be a record'
    assert all(set(['id', 'text', 'source']).issubset(chunk) for chunk in chunks)
    assert len({chunk['id'] for chunk in chunks}) == len(chunks)
    assert all(chunk['text'].strip() for chunk in chunks)
assert chunk_text('Short input.', 'test')[0]['text'] == 'Short input.'
for size, overlap in [(0, 0), (100, 100), (100, -1)]:
    try:
        chunk_text('example', 'test', size, overlap)
    except ValueError:
        pass
    else:
        raise AssertionError('Invalid chunk settings must be rejected')
`;
  execFileSync('python3', ['-c', `import re\n${code}\n${assertions}`], { timeout: 5000 });
});

test('typed React context provider accepts both theme modes', () => {
  const blocks = codeBlocks('react-usecontext-cheatsheet.md');
  const contextType = blocks.find(block => block.value.includes('interface ThemeContextType')).value;
  const provider = blocks.find(block => block.value.includes('interface ThemeProviderProps')).value;
  const source = `import React, { createContext, useContext, useState, useMemo, useCallback } from 'react';\n${contextType}\n${provider}`;
  const filename = path.join(root, 'article-context-example.tsx');
  const options = { noEmit: true, strict: true, skipLibCheck: true, esModuleInterop: true, jsx: ts.JsxEmit.ReactJSX, target: ts.ScriptTarget.ES2020, module: ts.ModuleKind.CommonJS, moduleResolution: ts.ModuleResolutionKind.Node10 };
  const host = ts.createCompilerHost(options);
  const originalGetSourceFile = host.getSourceFile.bind(host);
  host.getSourceFile = (name, languageVersion, ...rest) => name === filename ? ts.createSourceFile(name, source, languageVersion, true, ts.ScriptKind.TSX) : originalGetSourceFile(name, languageVersion, ...rest);
  const diagnostics = ts.getPreEmitDiagnostics(ts.createProgram([filename], options, host));
  assert.deepEqual(diagnostics.map(diagnostic => ts.flattenDiagnosticMessageText(diagnostic.messageText, '\n')), []);
});
