'use client';

import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Copy, Check } from 'lucide-react';

interface BlogContentProps {
  content: string;
}

function highlightCode(code: string, language: string) {
  if (!language) return code;

  if (['javascript', 'js', 'typescript', 'ts', 'jsx', 'tsx'].includes(language)) {
    return code
      .replace(/(const|let|var|function|class|if|else|for|while|return|import|export|from|as|interface|type|async|await)\b/g, '<span class="text-blue-400">$1</span>')
      .replace(/('.*?'|".*?")/g, '<span class="text-green-400">$1</span>')
      .replace(/(\/\/.*$)/gm, '<span class="text-zinc-500">$1</span>')
      .replace(/(\d+)/g, '<span class="text-orange-400">$1</span>')
      .replace(/(\{|\}|\[|\]|\(|\))/g, '<span class="text-yellow-400">$1</span>');
  }

  if (['css', 'scss', 'sass'].includes(language)) {
    return code
      .replace(/([.#][\w-]+)/g, '<span class="text-green-400">$1</span>')
      .replace(/([\w-]+)(?=\s*:)/g, '<span class="text-blue-400">$1</span>')
      .replace(/(:.*?;)/g, '<span class="text-orange-400">$1</span>')
      .replace(/(\/\*[\s\S]*?\*\/)/g, '<span class="text-zinc-500">$1</span>');
  }

  if (['html', 'xml'].includes(language)) {
    return code
      .replace(/(<\/?[\w-]+)/g, '<span class="text-red-400">$1</span>')
      .replace(/([\w-]+)(?==)/g, '<span class="text-blue-400">$1</span>')
      .replace(/(=["'].*?["'])/g, '<span class="text-green-400">$1</span>');
  }

  return code;
}

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
      <div className="flex items-center justify-between bg-zinc-900 text-zinc-400 px-4 py-2 border-b border-zinc-700">
        <span className="font-mono text-xs uppercase tracking-widest">{language}</span>
        <button
          onClick={handleCopy}
          className="inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-zinc-100 transition-colors"
          type="button"
        >
          {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
          <span>{copied ? 'Kopyalandı' : 'Kopyala'}</span>
        </button>
      </div>

      <pre className="bg-zinc-900 text-zinc-100 p-4 overflow-x-auto font-mono text-sm leading-relaxed">
        <code
          dangerouslySetInnerHTML={{ __html: highlightedCode }}
          className="text-zinc-100"
        />
      </pre>
    </div>
  );
}

export default function BlogContent({ content }: BlogContentProps) {
  return (
    <div className="prose prose-zinc dark:prose-invert max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          code: ({ className, children, ...props }: any) => {
            const match = /language-(\w+)/.exec(className || '');

            if (!match) {
              return (
                <code
                  className="font-mono text-[0.9em] bg-zinc-100 dark:bg-zinc-800 text-primary-700 dark:text-primary-400 px-1.5 py-0.5"
                  {...props}
                >
                  {children}
                </code>
              );
            }

            const language = match[1];
            const codeString = String(children).replace(/\n$/, '');

            return <CodeBlock language={language} code={codeString} />;
          },
          h1: ({ children, ...props }: any) => (
            <h1 className="text-3xl font-medium tracking-tight mt-12 mb-6 text-zinc-900 dark:text-zinc-50 first:mt-0" {...props}>
              {children}
            </h1>
          ),
          h2: ({ children, ...props }: any) => (
            <h2 className="text-2xl font-medium tracking-tight mt-10 mb-4 text-zinc-900 dark:text-zinc-50" {...props}>
              {children}
            </h2>
          ),
          h3: ({ children, ...props }: any) => (
            <h3 className="text-xl font-medium tracking-tight mt-8 mb-3 text-zinc-900 dark:text-zinc-50" {...props}>
              {children}
            </h3>
          ),
          h4: ({ children, ...props }: any) => (
            <h4 className="text-lg font-medium mt-6 mb-2 text-zinc-900 dark:text-zinc-50" {...props}>
              {children}
            </h4>
          ),
          p: ({ children, ...props }: any) => (
            <p className="mb-5 text-zinc-700 dark:text-zinc-300 leading-relaxed" {...props}>
              {children}
            </p>
          ),
          a: ({ href, children, ...props }: any) => (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 dark:text-primary-400 underline underline-offset-2 decoration-primary-600/40 hover:decoration-primary-600 transition-colors"
              {...props}
            >
              {children}
            </a>
          ),
          ul: ({ children, ...props }: any) => (
            <ul className="list-disc list-outside pl-5 mb-5 space-y-2 text-zinc-700 dark:text-zinc-300 marker:text-zinc-400 dark:marker:text-zinc-600" {...props}>
              {children}
            </ul>
          ),
          ol: ({ children, ...props }: any) => (
            <ol className="list-decimal list-outside pl-5 mb-5 space-y-2 text-zinc-700 dark:text-zinc-300 marker:text-zinc-400 dark:marker:text-zinc-600" {...props}>
              {children}
            </ol>
          ),
          li: ({ children, ...props }: any) => (
            <li className="leading-relaxed" {...props}>{children}</li>
          ),
          strong: ({ children, ...props }: any) => (
            <strong className="font-semibold text-zinc-900 dark:text-zinc-50" {...props}>
              {children}
            </strong>
          ),
          em: ({ children, ...props }: any) => (
            <em className="italic text-zinc-700 dark:text-zinc-300" {...props}>{children}</em>
          ),
          blockquote: ({ children, ...props }: any) => (
            <blockquote className="border-l-2 border-primary-500 pl-5 my-6 italic text-zinc-600 dark:text-zinc-400" {...props}>
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
