'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface BlogContentProps {
  content: string;
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
                  className="bg-gray-100 dark:bg-gray-800 text-red-600 dark:text-red-400 px-2 py-1 rounded text-sm font-mono"
                  {...props}
                >
                  {children}
                </code>
              );
            }
            
            // Code block
            const language = match[1];
            return (
              <div className="my-6">
                <div className="bg-gray-800 text-gray-300 px-4 py-2 text-sm rounded-t-lg">
                  <span className="text-blue-400 font-mono">{language}</span>
                </div>
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-b-lg overflow-x-auto font-mono text-sm">
                  <code>{String(children).replace(/\n$/, '')}</code>
                </pre>
              </div>
            );
          },
          h1: ({ children, ...props }: any) => (
            <h1 className="text-3xl font-bold mt-8 mb-4 text-gray-900 dark:text-white first:mt-0" {...props}>
              {children}
            </h1>
          ),
          h2: ({ children, ...props }: any) => (
            <h2 className="text-2xl font-bold mt-6 mb-3 text-gray-900 dark:text-white" {...props}>
              {children}
            </h2>
          ),
          h3: ({ children, ...props }: any) => (
            <h3 className="text-xl font-semibold mt-5 mb-3 text-gray-900 dark:text-white" {...props}>
              {children}
            </h3>
          ),
          p: ({ children, ...props }: any) => (
            <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed" {...props}>
              {children}
            </p>
          ),
          a: ({ href, children, ...props }: any) => (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 underline transition-colors"
              {...props}
            >
              {children}
            </a>
          ),
          ul: ({ children, ...props }: any) => (
            <ul className="list-disc list-inside mb-4 space-y-1 text-gray-700 dark:text-gray-300" {...props}>
              {children}
            </ul>
          ),
          ol: ({ children, ...props }: any) => (
            <ol className="list-decimal list-inside mb-4 space-y-1 text-gray-700 dark:text-gray-300" {...props}>
              {children}
            </ol>
          ),
          li: ({ children, ...props }: any) => (
            <li className="mb-1" {...props}>{children}</li>
          ),
          strong: ({ children, ...props }: any) => (
            <strong className="font-semibold text-gray-900 dark:text-white" {...props}>
              {children}
            </strong>
          ),
          em: ({ children, ...props }: any) => (
            <em className="italic" {...props}>{children}</em>
          ),
          blockquote: ({ children, ...props }: any) => (
            <blockquote className="border-l-4 border-blue-500 pl-4 my-4 italic text-gray-600 dark:text-gray-400" {...props}>
              {children}
            </blockquote>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
