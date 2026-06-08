import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { projects } from '../data/projects'

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

function ExternalLink() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="h-4 w-4"
    >
      <path
        fillRule="evenodd"
        d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z"
        clipRule="evenodd"
      />
    </svg>
  )
}

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>()
  const project = projects.find((p) => p.id === id)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [id])

  if (!project) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white">
        <div className="text-center">
          <p className="text-2xl font-bold text-zinc-900">Project not found</p>
          <Link
            to="/"
            className="mt-4 inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-900 transition-colors"
          >
            <ArrowLeft />
            Back to portfolio
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Top nav */}
      <nav className="sticky top-0 z-50 border-b border-zinc-200 bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-3xl items-center gap-3 px-4 py-3 md:px-6 md:py-4">
          <Link
            to="/#projects"
            className="flex items-center gap-1.5 text-sm text-zinc-500 hover:text-zinc-900 transition-colors"
          >
            <ArrowLeft />
            Portfolio
          </Link>
          <span className="text-zinc-300">/</span>
          <span className="truncate text-sm font-medium text-zinc-900">
            {project.title}
          </span>
        </div>
      </nav>

      {/* Hero */}
      <div
        className="px-5 py-12 md:px-6 md:py-20"
        style={{
          background: `linear-gradient(135deg, ${project.heroBgColor}, ${project.heroBgColor2})`,
        }}
      >
        <div className="mx-auto max-w-3xl">
          <div className="text-5xl">{project.emoji}</div>
          <h1 className="mt-4 text-3xl font-bold text-white md:text-4xl">{project.title}</h1>
          <p className="mt-2 text-base text-white/90 md:text-lg">{project.subtitle}</p>
          <p className="mt-1 font-mono text-sm text-white/70">{project.period}</p>
          {project.award && (
            <span className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-sm font-medium text-white backdrop-blur-sm">
              🏆 {project.award}
            </span>
          )}
        </div>
      </div>

      {/* Metrics */}
      <div className="border-b border-zinc-100 bg-zinc-50">
        <div className="mx-auto max-w-3xl px-4 py-6 md:px-6 md:py-8">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
            {project.metrics.map((m) => (
              <div key={m.label}>
                <p className="text-2xl font-bold text-zinc-900">{m.value}</p>
                <p className="mt-0.5 text-sm text-zinc-500">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Article body */}
      <article className="mx-auto max-w-3xl px-4 py-10 md:px-6 md:py-14">
        {/* Overview lead */}
        <p className="text-lg leading-relaxed text-zinc-700">{project.blogOverview}</p>

        {/* Blog sections */}
        {project.blogSections.map((section) => (
          <div key={section.title} className="mt-12">
            <h2 className="text-xl font-semibold text-zinc-900">{section.title}</h2>
            {section.paragraphs.map((para, i) => (
              <p key={i} className="mt-4 text-base leading-relaxed text-zinc-600">
                {para}
              </p>
            ))}
          </div>
        ))}

        {/* Tech stack */}
        <div className="mt-14 border-t border-zinc-200 pt-10">
          <h2 className="text-lg font-semibold text-zinc-900">Tech Stack</h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <li key={tech}>
                <span className="inline-block rounded-md border border-zinc-200 bg-white px-3 py-1.5 text-sm font-medium text-zinc-700">
                  {tech}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* External link */}
        {project.link && project.link !== '#' && (
          <div className="mt-8">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-zinc-900 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-700"
            >
              View Project
              <ExternalLink />
            </a>
          </div>
        )}

        {/* Back link */}
        <div className="mt-16 border-t border-zinc-100 pt-8">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-900 transition-colors"
          >
            <ArrowLeft />
            Back to portfolio
          </Link>
        </div>
      </article>
    </div>
  )
}
