'use client';

import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Copy, Check } from 'lucide-react';

interface BlogContentProps {
  content: string;
}

// Basit syntax highlighting fonksiyonu
function highlightCode(code: string, language: string) {
  if (!language) return code;
  
  // JavaScript/TypeScript
  if (['javascript', 'js', 'typescript', 'ts', 'jsx', 'tsx'].includes(language)) {
    return code
      .replace(/(const|let|var|function|class|if|else|for|while|return|import|export|from|as|interface|type|async|await)\b/g, '<span class="text-blue-400">$1</span>')
      .replace(/('.*?'|".*?")/g, '<span class="text-green-400">$1</span>')
      .replace(/(\/\/.*$)/gm, '<span class="text-gray-500">$1</span>')
      .replace(/(\d+)/g, '<span class="text-orange-400">$1</span>')
      .replace(/(\{|\}|\[|\]|\(|\))/g, '<span class="text-yellow-400">$1</span>');
  }
  
  // CSS
  if (['css', 'scss', 'sass'].includes(language)) {
    return code
      .replace(/([.#][\w-]+)/g, '<span class="text-green-400">$1</span>')
      .replace(/([\w-]+)(?=\s*:)/g, '<span class="text-blue-400">$1</span>')
      .replace(/(:.*?;)/g, '<span class="text-orange-400">$1</span>')
      .replace(/(\/\*[\s\S]*?\*\/)/g, '<span class="text-gray-500">$1</span>');
  }
  
  // HTML
  if (['html', 'xml'].includes(language)) {
    return code
      .replace(/(<\/?[\w-]+)/g, '<span class="text-red-400">$1</span>')
      .replace(/([\w-]+)(?==)/g, '<span class="text-blue-400">$1</span>')
      .replace(/(=["'].*?["'])/g, '<span class="text-green-400">$1</span>');
  }
  
  return code;
}

// CodeBlock component with copy functionality
function CodeBlock({ language, code }: { language: string; code: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const highlightedCode = highlightCode(code, language);

  return (
    <div className="relative my-6 group">
      {/* Header */}
      <div className="flex items-center justify-between bg-gradient-to-r from-gray-800 to-gray-700 text-gray-300 px-4 py-3 rounded-t-lg border-b border-gray-600">
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <span className="text-blue-400 font-mono text-sm font-medium">{language}</span>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center space-x-2 text-gray-400 hover:text-white transition-all duration-200 px-3 py-1 rounded hover:bg-gray-600"
          type="button"
        >
          {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
          <span className="text-xs font-medium">{copied ? 'Kopyalandı!' : 'Kopyala'}</span>
        </button>
      </div>
      
      {/* Code content */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-b-lg overflow-x-auto font-mono text-sm leading-relaxed border border-gray-700 border-t-0">
        <code 
          dangerouslySetInnerHTML={{ __html: highlightedCode }}
          className="text-gray-100"
        />
      </pre>
    </div>
  );
}

export default function BlogContent({ content }: BlogContentProps) {
  return (
    <div className="prose prose-lg max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          code: ({ className, children, ...props }: any) => {
            const match = /language-(\w+)/.exec(className || '');
            
            if (!match) {
              // Inline code
              return (
                <code
                  className="bg-gray-100 dark:bg-gray-800 text-pink-600 dark:text-pink-400 px-2 py-1 rounded text-sm font-mono font-medium"
                  {...props}
                >
                  {children}
                </code>
              );
            }
            
            // Code block
            const language = match[1];
            const codeString = String(children).replace(/\n$/, '');
            
            return <CodeBlock language={language} code={codeString} />;
          },
          h1: ({ children, ...props }: any) => (
            <h1 className="text-4xl font-bold mt-12 mb-6 text-gray-900 dark:text-white first:mt-0 pb-2 border-b border-gray-200 dark:border-gray-700" {...props}>
              {children}
            </h1>
          ),
          h2: ({ children, ...props }: any) => (
            <h2 className="text-3xl font-bold mt-10 mb-5 text-gray-900 dark:text-white" {...props}>
              {children}
            </h2>
          ),
          h3: ({ children, ...props }: any) => (
            <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white" {...props}>
              {children}
            </h3>
          ),
          h4: ({ children, ...props }: any) => (
            <h4 className="text-xl font-semibold mt-6 mb-3 text-gray-900 dark:text-white" {...props}>
              {children}
            </h4>
          ),
          p: ({ children, ...props }: any) => (
            <p className="mb-6 text-gray-700 dark:text-gray-300 leading-relaxed text-lg" {...props}>
              {children}
            </p>
          ),
          a: ({ href, children, ...props }: any) => (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 underline decoration-2 underline-offset-2 transition-all duration-200 hover:decoration-blue-600"
              {...props}
            >
              {children}
            </a>
          ),
          ul: ({ children, ...props }: any) => (
            <ul className="list-none mb-6 space-y-3 text-gray-700 dark:text-gray-300" {...props}>
              {children}
            </ul>
          ),
          ol: ({ children, ...props }: any) => (
            <ol className="list-decimal list-inside mb-6 space-y-3 text-gray-700 dark:text-gray-300 pl-4" {...props}>
              {children}
            </ol>
          ),
          li: ({ children, ...props }: any) => (
            <li className="flex items-start space-x-3" {...props}>
              <span className="text-blue-500 mt-2 flex-shrink-0">•</span>
              <span className="flex-1">{children}</span>
            </li>
          ),
          strong: ({ children, ...props }: any) => (
            <strong className="font-bold text-gray-900 dark:text-white bg-yellow-100 dark:bg-yellow-900 px-1 py-0.5 rounded" {...props}>
              {children}
            </strong>
          ),
          em: ({ children, ...props }: any) => (
            <em className="italic text-gray-600 dark:text-gray-400" {...props}>{children}</em>
          ),
          blockquote: ({ children, ...props }: any) => (
            <blockquote className="border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-900/20 pl-6 pr-4 py-4 my-6 italic text-gray-700 dark:text-gray-300 rounded-r-lg" {...props}>
              <div className="flex items-start space-x-3">
                <span className="text-blue-500 text-2xl leading-none">"</span>
                <div className="flex-1">{children}</div>
              </div>
            </blockquote>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}