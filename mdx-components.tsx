import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h2: ({ children }) => (
      <h2 className="mt-12 text-xl font-semibold text-slate-900">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-8 text-lg font-semibold text-slate-800">{children}</h3>
    ),
    p: ({ children }) => (
      <p className="mt-4 text-base leading-relaxed text-slate-600">{children}</p>
    ),
    strong: ({ children }) => (
      <strong className="font-semibold text-slate-800">{children}</strong>
    ),
    ul: ({ children }) => (
      <ul className="mt-4 list-disc space-y-2 pl-6 text-base leading-relaxed text-slate-600">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="mt-4 list-decimal space-y-2 pl-6 text-base leading-relaxed text-slate-600">
        {children}
      </ol>
    ),
    li: ({ children }) => <li className="text-slate-600">{children}</li>,
    blockquote: ({ children }) => (
      <blockquote className="mt-4 border-l-2 border-slate-300 pl-4 italic text-slate-500">
        {children}
      </blockquote>
    ),
    code: ({ children }) => (
      <code className="rounded bg-slate-100 px-1.5 py-0.5 text-sm font-mono text-slate-700">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="mt-4 overflow-x-auto rounded-lg bg-slate-900 p-4 text-sm text-slate-100">
        {children}
      </pre>
    ),
    a: ({ href, children }) => (
      <a
        href={href}
        className="font-medium text-slate-700 underline decoration-slate-300 underline-offset-2 hover:text-slate-900 hover:decoration-slate-500"
        target={href?.startsWith('http') ? '_blank' : undefined}
        rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    ),
    ...components,
  }
}
