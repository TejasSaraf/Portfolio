import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { projects } from '../data/projects'

const navItems = [
  { label: 'About', href: '#introduction' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
] as const

const sectionIds = navItems.map((item) => item.href.slice(1))

const socialLinks = [
  {
    href: 'https://github.com/TejasSaraf',
    label: 'GitHub',
    icon: 'github' as const,
  },
  {
    href: 'https://www.linkedin.com/in/tejassaraf/',
    label: 'LinkedIn',
    icon: 'linkedin' as const,
  },
  {
    href: 'https://www.instagram.com/tejaxss/',
    label: 'Instagram',
    icon: 'instagram' as const,
  },
  {
    href: 'https://x.com/TejasRajendraS1',
    label: 'X',
    icon: 'x' as const,
  },
] as const

function SocialIcon({ name }: { name: (typeof socialLinks)[number]['icon'] }) {
  const cls = 'h-5 w-5 shrink-0'
  switch (name) {
    case 'github':
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
        </svg>
      )
    case 'linkedin':
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      )
    case 'instagram':
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
      )
    case 'x':
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      )
  }
}

const experiences = [
  {
    period: 'Sep 2025 – Nov 2025',
    company: 'PM Accelerator',
    location: 'Chicago, IL',
    role: 'Software Engineer Intern – AI/ML',
    current: false,
    body: (
      <>
        I designed and deployed a distributed{' '}
        <strong className="font-medium text-zinc-800">AI/NLP pipeline</strong> for
        meeting intelligence, integrating RAG with Top-K ranking across a
        microservices architecture on AWS ECS Fargate, Step Functions, and Kafka to
        process real-time meeting streams end-to-end. I cut database load and latency
        by{' '}
        <strong className="font-medium text-zinc-800">10x</strong> via Redis caching
        and async processing, improving production reliability under concurrent
        workloads. I also redesigned the speaker-identification pipeline using speech
        diarization,{' '}
        <strong className="font-medium text-zinc-800">OpenAI Whisper</strong> for
        transcription, and{' '}
        <strong className="font-medium text-zinc-800">GPT-OSS 120B</strong> with Groq
        Cloud for real-time chat and suggestions.
      </>
    ),
    stack: [
      'Python',
      'React',
      'Node.js',
      'PostgreSQL',
      'MongoDB',
      'Redis',
      'Kafka',
      'Langchain',
      'AWS ECS Fargate',
      'AWS Step Functions',
      'S3',
      'Lambda',
      'Pinecone',
      'Groq Cloud',
    ],
  },
  {
    period: 'Aug 2023 – Jul 2024',
    company: 'Jio Platforms',
    location: 'Mumbai, IN',
    role: 'Software Engineer',
    current: false,
    body: (
      <>
        I led the implementation of{' '}
        <strong className="font-medium text-zinc-800">
          real-time video and audio streaming
        </strong>{' '}
        for JioEvents, engineering a WebRTC + Agora SDK + RTMP system with a
        sliding window architecture that reliably handled{' '}
        <strong className="font-medium text-zinc-800">
          10,000+ concurrent attendees
        </strong>{' '}
        and contributed to $1M in annual revenue. I also drove the reliability of
        the OTP authentication service — applying comprehensive TDD and DataDog-based
        logging to bring the error rate{' '}
        <strong className="font-medium text-zinc-800">below 1%</strong>. On
        infrastructure, I automated the full CI/CD pipeline on Google Cloud Run with
        GitHub Actions and Argo CD, slashing{' '}
        <strong className="font-medium text-zinc-800">
          deployment turnaround by 90%
        </strong>
        .
      </>
    ),
    stack: [
      'Angular',
      'TypeScript',
      'Node.js',
      'MongoDB',
      'RabbitMQ',
      'GCP',
      'WebRTC',
      'Agora SDK',
      'Docker',
      'GitHub Actions',
    ],
  },
  {
    period: 'Jun 2022 – Aug 2023',
    company: 'Elite Softwares',
    location: 'Pune, IN',
    role: 'Software Engineer',
    current: false,
    body: (
      <>
        I optimized the company&apos;s AWS infrastructure and ETL pipeline end-to-end,
        reducing{' '}
        <strong className="font-medium text-zinc-800">compute costs by 62%</strong>{' '}
        through systematic rightsizing and automated cost monitoring. The most
        significant undertaking was leading the migration of a monolithic CRM to a{' '}
        <strong className="font-medium text-zinc-800">
          microservices architecture
        </strong>{' '}
        built on Java, Spring Boot, and Kubernetes (AWS EKS) with AWS App Runner —
        scaling services <strong className="font-medium text-zinc-800">2x</strong> and
        enabling independent fault isolation. I also established the team&apos;s
        deployment practices by building Kubernetes manifests with Helm and Argo CD and
        creating operational dashboards in{' '}
        <strong className="font-medium text-zinc-800">
          AWS CloudWatch and Grafana
        </strong>{' '}
        for proactive infrastructure monitoring.
      </>
    ),
    stack: [
      'Java',
      'Spring Boot',
      'Angular',
      'Kubernetes',
      'Helm',
      'Kafka',
      'AWS EKS',
      'Grafana',
      'Argo CD',
      'Docker',
    ],
  },
] as const

function About() {
  const mainRef = useRef<HTMLElement>(null)
  const [activeSection, setActiveSection] = useState(() => {
    if (typeof window === 'undefined') return sectionIds[0]
    const id = window.location.hash.slice(1)
    return sectionIds.includes(id) ? id : sectionIds[0]
  })

  useEffect(() => {
    const main = mainRef.current
    if (!main) return

    const updateActive = () => {
      const md = window.matchMedia('(min-width: 768px)').matches
      const markerY = md
        ? main.getBoundingClientRect().top + 96
        : 96

      let next = sectionIds[0]
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (!el) continue
        if (el.getBoundingClientRect().top <= markerY) next = id
      }
      setActiveSection(next)
    }

    const onHash = () => {
      const id = window.location.hash.slice(1)
      if (sectionIds.includes(id)) setActiveSection(id)
    }

    window.addEventListener('scroll', updateActive, { passive: true })
    main.addEventListener('scroll', updateActive, { passive: true })
    window.addEventListener('hashchange', onHash)
    updateActive()

    return () => {
      window.removeEventListener('scroll', updateActive)
      main.removeEventListener('scroll', updateActive)
      window.removeEventListener('hashchange', onHash)
    }
  }, [])

  return (
    <div className="min-h-screen w-full md:min-h-0 md:h-dvh">
      <aside className="flex min-h-[100dvh] flex-col border-b border-zinc-200 bg-white py-12 pl-16 pr-4 md:fixed md:inset-y-0 md:left-0 md:z-10 md:flex md:h-dvh md:min-h-0 md:w-1/2 md:border-b-0 md:py-16 md:overflow-hidden">
        <div className="flex h-full min-h-0 w-full max-w-2xl flex-1 flex-col px-10 py-8">
          <div className="flex min-h-0 flex-1 flex-col">
            <p className="text-5xl font-bold tracking-tight text-zinc-900">
              Tejas Saraf
            </p>
            <p className="mt-6 text-xl font-normal text-zinc-800">
              Grad at Illinois Institute of Technology
            </p>
            <p className="mt-6 text-xl leading-relaxed text-zinc-800">
              I&apos;m a Software Engineer interested in training large language models to
              reason about the world.
            </p>
            <nav
              className="mt-10 flex flex-col gap-2"
              aria-label="On this page"
            >
              {navItems.map(({ label, href }) => {
                const id = href.slice(1)
                const active = activeSection === id
                return (
                  <a
                    key={href}
                    href={href}
                    aria-current={active ? 'location' : undefined}
                    onClick={() => setActiveSection(id)}
                    className={`group flex items-center gap-4 rounded-md px-3 py-3 text-sm font-normal transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 md:text-lg ${
                      active
                        ? 'text-black'
                        : 'text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900'
                    }`}
                  >
                    <span
                      className={`inline-block h-0.5 w-7 shrink-0 rounded-full transition-colors ${
                        active
                          ? 'bg-zinc-900'
                          : 'bg-zinc-400 group-hover:bg-zinc-600'
                      }`}
                      aria-hidden
                    />
                    {label}
                  </a>
                )
              })}
            </nav>
          </div>
          <ul
            className="flex flex-wrap items-center justify-start gap-1 self-start pt-12"
            aria-label="Social profiles"
          >
            {socialLinks.map(({ href, label, icon }) => (
              <li key={href}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-md text-zinc-800 transition-colors hover:bg-zinc-100 hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900"
                >
                  <SocialIcon name={icon} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      <main
        ref={mainRef}
        className="bg-white py-12 px-4 md:ml-[50%] md:w-1/2 md:py-16 md:pr-16"
      >
        <div className="space-y-40 md:space-y-40 px-10 py-8">
          <section
            id="introduction"
            className="scroll-mt-8"
            aria-labelledby="introduction-heading"
          >
            <div className="mt-4 space-y-4 text-base leading-relaxed text-zinc-600">
              <p>
                I build AI-native products that drive measurable business outcomes —
                from fine-tuned vision models that cut diagnostic wait times from days
                to seconds, to revenue pipelines serving the top US fundraising
                organizations. Currently completing an MS at Illinois Tech.
              </p>
              <p>
                My work spans the full stack: production ML (LoRA, VLMs, RAG),
                distributed backend systems (Kafka, Redis, microservices), and clean
                front-ends — always focused on real impact over impressive demos.
              </p>
            </div>
          </section>

          <section
            id="experience"
            className="scroll-mt-8"
            aria-labelledby="experience-heading"
          >

            <ul className="mt-10 space-y-14">
              {experiences.map((job) => (
                <li key={`${job.company}-${job.period}`}>
                  <div className="flex flex-col gap-2 sm:flex-row sm:gap-2">
                    <div className="shrink-0 sm:w-40">
                      <p className="font-mono text-xs text-zinc-500">{job.period}</p>
                      <p className="mt-1 text-sm font-semibold text-zinc-900">
                        {job.company}
                      </p>
                      <p className="mt-0.5 text-sm text-zinc-500">{job.location}</p>
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-base font-semibold text-zinc-900">
                        {job.role}
                      </p>
                      <p className="mt-3 text-base leading-relaxed text-zinc-600">
                        {job.body}
                      </p>
                      <ul className="mt-4 flex flex-wrap gap-2" aria-label="Tech stack">
                        {job.stack.map((tech) => (
                          <li key={tech}>
                            <span className="inline-block rounded-md border border-zinc-200 bg-white px-2 py-1 text-xs font-medium text-zinc-600">
                              {tech}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section
            id="projects"
            className="scroll-mt-8"
            aria-labelledby="projects-heading"
          >
            <h2
              id="projects-heading"
              className="text-lg font-semibold tracking-tight text-zinc-900"
            >
              Projects
            </h2>
            <ul className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
              {projects.map((project) => (
                <li key={project.id}>
                  <Link
                    to={`/project/${project.id}`}
                    className="group flex flex-col overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm transition-shadow hover:shadow-md"
                  >
                    {/* Gradient image area */}
                    <div
                      className="relative flex h-36 items-center justify-center overflow-hidden"
                      style={{
                        background: `linear-gradient(135deg, ${project.bgColor}, ${project.bgColor2})`,
                      }}
                    >
                      <div className="absolute -right-6 -top-6 h-28 w-28 rounded-full bg-black/5" />
                      <div className="absolute -bottom-8 -left-4 h-24 w-24 rounded-full bg-black/5" />
                      <span className="relative text-5xl">{project.emoji}</span>
                      {project.cardAward && (
                        <span className="absolute bottom-2 left-3 rounded-full bg-white/70 px-2 py-0.5 text-xs font-medium text-zinc-700 backdrop-blur-sm">
                          🏆 {project.cardAward}
                        </span>
                      )}
                    </div>
                    {/* Card body */}
                    <div className="flex flex-1 flex-col p-4">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-semibold text-zinc-900 leading-tight">
                          {project.title}
                        </h3>
                        <span className="shrink-0 font-mono text-xs text-zinc-400">
                          {project.period.split(' – ')[1]}
                        </span>
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-zinc-500 line-clamp-2">
                        {project.cardDesc}
                      </p>
                      <ul className="mt-3 flex flex-wrap gap-1.5">
                        {project.stack.slice(0, 3).map((tech) => (
                          <li key={tech}>
                            <span className="inline-block rounded border border-zinc-200 px-1.5 py-0.5 text-xs text-zinc-500">
                              {tech}
                            </span>
                          </li>
                        ))}
                        {project.stack.length > 3 && (
                          <li>
                            <span className="inline-block rounded border border-zinc-200 px-1.5 py-0.5 text-xs text-zinc-400">
                              +{project.stack.length - 3}
                            </span>
                          </li>
                        )}
                      </ul>
                      <div className="mt-4 flex items-center gap-1 text-xs font-medium text-zinc-400 transition-colors group-hover:text-zinc-600">
                        Read more
                        <svg
                          viewBox="0 0 16 16"
                          fill="currentColor"
                          className="h-3 w-3 transition-transform group-hover:translate-x-0.5"
                        >
                          <path d="M3 8a.5.5 0 01.5-.5h6.793L8.146 5.354a.5.5 0 11.708-.708l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L10.293 8.5H3.5A.5.5 0 013 8z" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
    </div>
  )
}

export default About
