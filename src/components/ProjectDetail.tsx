import Image from 'next/image'
import Link from 'next/link'
import type { BlogPost } from '@/lib/blog'

function ArrowLeft() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="h-4 w-4"
    >
      <path
        fillRule="evenodd"
        d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z"
        clipRule="evenodd"
      />
    </svg>
  )
}

const categoryColors: Record<string, string> = {
  'Voice AI': 'bg-emerald-50 text-emerald-700',
  'Streaming': 'bg-blue-50 text-blue-700',
  'On-device ML': 'bg-violet-50 text-violet-700',
  'Infrastructure': 'bg-amber-50 text-amber-700',
}

export default function ProjectDetail({
  post,
  children,
}: {
  post: BlogPost
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-white">
      <nav className="sticky top-14 z-40 border-b border-slate-200 bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-3xl items-center gap-3 px-4 py-3 md:px-6 md:py-4">
          <Link
            href="/"
            className="flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-900 transition-colors"
          >
            <ArrowLeft />
            Blog
          </Link>
          <span className="text-slate-300">/</span>
          <span className="truncate text-sm font-medium text-slate-900">
            {post.title}
          </span>
        </div>
      </nav>

      <div className="relative aspect-[16/7] w-full overflow-hidden">
        <Image
          src={`/${post.slug}.jpg`}
          alt={post.title}
          fill
          sizes="100vw"
          priority
          className="object-cover opacity-80"
        />
      </div>

      <div className="border-b border-slate-100 bg-slate-50 px-5 py-10 md:px-6 md:py-14">
        <div className="mx-auto max-w-3xl">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            {post.categories.map((cat) => (
              <span
                key={cat}
                className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${categoryColors[cat] ?? 'bg-slate-100 text-slate-600'}`}
              >
                {cat}
              </span>
            ))}
          </div>
          <div className="text-5xl">{post.emoji}</div>
          <h1 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl">
            {post.title}
          </h1>
          <p className="mt-3 text-base text-slate-500 md:text-lg">
            {post.description}
          </p>
          <p className="mt-2 font-mono text-sm text-slate-400">
            {new Date(post.date).toLocaleDateString('en-US', {
              month: 'long',
              year: 'numeric',
            })}
          </p>
          {post.award && (
            <span className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-slate-200/60 px-3 py-1 text-sm font-medium text-slate-700">
              🏆 {post.award}
            </span>
          )}
        </div>
      </div>

      {post.metrics.length > 0 && (
        <div className="border-b border-slate-100 bg-slate-50">
          <div className="mx-auto max-w-3xl px-4 py-6 md:px-6 md:py-8">
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
              {post.metrics.map((m) => (
                <div key={m.label}>
                  <p className="text-2xl font-bold text-slate-900">
                    {m.value}
                  </p>
                  <p className="mt-0.5 text-sm text-slate-500">{m.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <article className="mx-auto max-w-3xl px-4 py-10 md:px-6 md:py-14">
        {children}

        <div className="mt-14 border-t border-slate-200 pt-10">
          <h2 className="text-lg font-semibold text-slate-900">Tech Stack</h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {post.stack.map((tech) => (
              <li key={tech}>
                <span className="inline-block rounded-md border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-700">
                  {tech}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-16 border-t border-slate-100 pt-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 transition-colors"
          >
            <ArrowLeft />
            Back to blog
          </Link>
        </div>
      </article>
    </div>
  )
}
