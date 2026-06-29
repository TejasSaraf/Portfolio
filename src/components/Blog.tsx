'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { projects } from '@/data/projects'

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/tejassaraf/', icon: 'mingcute:linkedin-line' },
  { label: 'GitHub', href: 'https://github.com/TejasSaraf', icon: 'mingcute:github-line' },
  { label: 'X', href: 'https://x.com/saraftejass', icon: 'mingcute:social-x-line' },
  { label: 'Instagram', href: 'https://www.instagram.com/tejaxss/', icon: 'mingcute:instagram-line' },
] as const

const bentoIds = ['freightvoice', 'instamind', 'opusai', 'clinsearch']
const bentoProjects = bentoIds.map((id) => projects.find((p) => p.id === id)!).filter(Boolean)
const [featured, ...rest] = bentoProjects

export default function Blog() {
  return (
    <div className="min-h-full bg-slate-50">
      <div className="flex items-center flex-col gap-10 md:gap-16 lg:gap-18 mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 md:px-12">

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-10 lg:items-start">
          <div className="flex flex-col gap-4 lg:col-span-1">
            <h1 className="text-xl font-semibold text-slate-800 sm:text-2xl">Hi, I&apos;m Tejas</h1>
            <div className="overflow-hidden">
              <div className="float-left mr-4 h-[100px] w-[100px] shrink-0 sm:h-[150px] sm:w-[150px]">
                <Image
                  src="/profile.jpg"
                  alt="Tejas Saraf"
                  width={150}
                  height={150}
                  className="block h-[100px] w-[100px] rounded-sm object-cover sm:h-[150px] sm:w-[150px]"
                  priority
                />
              </div>
              <p className="text-sm font-normal leading-relaxed text-slate-500 sm:text-base">
                I build AI systems that make it to production and to the YC stage. My work has ranged from a self-improving voice agent in a Y Combinator Hackathon, to real-time streaming infrastructure at Jio Platforms, to production ML pipelines that cut cloud costs. I care about the full stack fine-tuning vision and language models, building the distributed systems underneath them, and making sure the end product is clean and usable.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-1">
              <span className="mr-1 text-sm text-slate-500">Let&apos;s connect:</span>
              {socialLinks.map(({ href, label, icon }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-8 w-8 items-center justify-center rounded-md text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-800"
                >
                  <Icon icon={icon} width={18} height={18} />
                </a>
              ))}
            </div>
          </div>

          {featured && (
            <Link
              href={`/project/${featured.id}`}
              className="group relative flex flex-col rounded-sm transition-shadow lg:col-span-2"
            >
              <div className="relative aspect-[16/10] w-full shrink-0 sm:aspect-auto sm:h-[280px] md:h-[360px] lg:h-[480px]">
                <Image
                  src="/freightvoice.jpg"
                  alt="FreightVoice"
                  fill
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  priority
                  className="object-cover rounded-sm"
                />
                <span className="absolute right-3 top-3 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-slate-700 backdrop-blur-sm">
                  Featured
                </span>
                <span className="absolute bottom-0 rounded-tr-sm bg-white/80 px-3 py-1 text-xs font-semibold text-slate-700 backdrop-blur-sm flex items-center gap-1">
                  <Icon icon="mingcute:time-line" width={12} height={12} />
                  April 2026
                </span>
              </div>
              <div className="flex flex-1 flex-col bg-slate-50 py-3">
                <h2 className="text-base font-bold text-slate-800 leading-snug sm:text-lg">
                  FreightVoice: AI Voice Agent for Freight Logistics
                </h2>
                <p className="mt-1 text-sm leading-relaxed text-slate-500 sm:text-base">
                  Carrier churn costs freight brokerages millions, but brokers can&apos;t monitor every call or catch dissatisfaction signals before carriers leave. FreightVoice fixes this with an AI voice agent that completes calls at sub-500ms latency, auto-scores agent performance after every conversation, and predicts churn risk earlier — built on Pipecat, NVIDIA Nemotron, Twilio, WebRTC, Cekura MCP, and XGBoost.
                </p>
                <span className="mt-auto flex items-center gap-1 pt-2 text-xs font-medium text-slate-500 transition-colors group-hover:text-slate-800">
                  Read more
                  <svg viewBox="0 0 16 16" fill="currentColor" className="h-3 w-3 transition-transform group-hover:translate-x-0.5">
                    <path d="M3 8a.5.5 0 01.5-.5h6.793L8.146 5.354a.5.5 0 11.708-.708l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L10.293 8.5H3.5A.5.5 0 013 8z" />
                  </svg>
                </span>
              </div>
            </Link>
          )}
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:items-start">
          {rest.map((project) => {
            const periodStart = project.period.split('–')[0].trim()
            return (
              <Link
                key={project.id}
                href={`/project/${project.id}`}
                className="group relative flex flex-col rounded-sm transition-shadow h-auto sm:h-[380px] lg:h-[420px]"
              >
                <div className="relative aspect-[16/10] w-full shrink-0 sm:aspect-auto sm:h-[220px] lg:h-[260px]">
                  <Image
                    src={`/${project.id}.jpg`}
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover rounded-sm"
                  />
                  <span className="absolute bottom-0 rounded-tr-sm bg-white/80 px-3 py-1 text-xs font-semibold text-slate-700 backdrop-blur-sm flex items-center gap-1">
                    <Icon icon="mingcute:time-line" width={12} height={12} />
                    {periodStart}
                  </span>
                </div>
                <div className="flex flex-1 flex-col bg-slate-50 py-3">
                  <h3 className="text-sm font-semibold text-slate-800 leading-snug">{project.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-500 line-clamp-5">{project.cardDesc}</p>
                  <span className="mt-auto flex items-center gap-1 pt-2 text-xs font-medium text-slate-500 transition-colors group-hover:text-slate-800">
                    Read more
                    <svg viewBox="0 0 16 16" fill="currentColor" className="h-3 w-3 transition-transform group-hover:translate-x-0.5">
                      <path d="M3 8a.5.5 0 01.5-.5h6.793L8.146 5.354a.5.5 0 11.708-.708l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L10.293 8.5H3.5A.5.5 0 013 8z" />
                    </svg>
                  </span>
                </div>
              </Link>
            )
          })}
        </div>

      </div>

      <footer className="border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 md:px-12 flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
          <span className="text-xs text-slate-500 sm:text-sm">&copy; 2026 Tejas Saraf &middot; All rights reserved.</span>
          <div className="flex items-center gap-4">
            {socialLinks.map(({ href, label, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex items-center justify-center text-slate-500 transition-colors hover:text-slate-800"
              >
                <Icon icon={icon} width={20} height={20} />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}
