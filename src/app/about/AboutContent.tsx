'use client'

import Image from 'next/image'
import { Icon } from '@iconify/react'

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/tejassaraf/', icon: 'mingcute:linkedin-line' },
  { label: 'GitHub', href: 'https://github.com/TejasSaraf', icon: 'mingcute:github-line' },
  { label: 'X', href: 'https://x.com/saraftejass', icon: 'mingcute:social-x-line' },
  { label: 'Instagram', href: 'https://www.instagram.com/tejaxss/', icon: 'mingcute:instagram-line' },
] as const

const experiences = [
  {
    company: 'PM Accelerator',
    role: 'Software Engineer Intern',
    location: 'Chicago, IL',
    period: 'Sep 2025 – Nov 2025',
    context:
      "The team's NLP pipeline was expensive (GPT-3 inference costs), slow (high response latency on RAG queries), and lacked scalable preprocessing for meeting transcripts at volume.",
    bullets: [
      { label: 'Model Deployment', body: 'Trained and deployed a RoBERTa model on AWS SageMaker achieving 1.2x inference improvement, implemented unsupervised topic clustering on meeting transcripts, and integrated Spark for large-scale preprocessing and inference.' },
      { label: 'RAG System', body: 'Deployed an AWS Kendra RAG system handling 2,000+ user interactions, reducing response time by 35% through semantic chunking, vector retrieval, and guardrails.' },
      { label: 'Cost Optimization', body: 'Transitioned sentiment analysis from GPT-3 to Llama 3.1 via shadow mode A/B testing, achieving 90% cost reduction while maintaining an F1 score of 0.92.' },
    ],
    tech: ['PyTorch', 'Python', 'Spark', 'FastAPI', 'PostgreSQL', 'AWS SageMaker', 'AWS Kendra', 'AWS Lambda', 'S3', 'HuggingFace Transformers', 'Unsloth', 'RAG'],
  },
  {
    company: 'Jio Platforms Limited',
    role: 'Software Engineer',
    location: 'Mumbai, India',
    period: 'Jun 2023 – Jul 2024',
    context:
      'JioEvents needed to scale from hundreds to 10,000+ concurrent attendees without compromising audio/video quality or adding latency — all while contributing to a product generating $1M in annual revenue.',
    bullets: [
      { label: 'Streaming Pipeline', body: 'Deployed a real-time audio/video streaming pipeline by building a WebRTC and Agora SDK layer with RTMP fallback and a custom sliding window buffer system, serving 10,000+ concurrent attendees and directly contributing to $1M in annual product revenue.' },
      { label: 'Media SDK', body: 'Developed a WebRTC-based Media SDK using MediaSoup, enabling seamless audio/video communication via SFU, P2P, and MCU architectures and reducing call drop rates by 30% across all event types.' },
      { label: 'Authentication Reliability', body: 'Reduced OTP authentication error rate from 8% to under 1% within 6 weeks by building 200+ integration tests, implementing Test-Driven Development with 90% code coverage, and adding DataDog logging and alerting for early issue detection.' },
      { label: 'CI/CD & Microservices', body: 'Designed Node.js microservices on Google Cloud Run, reducing multi-repo CI failures from 2,500/week to 20/week within one quarter through automated testing and CI/CD integration via GitHub Actions and Docker.' },
    ],
    tech: ['Node.js', 'Python', 'Angular', 'TypeScript', 'MongoDB', 'Express.js', 'RabbitMQ', 'GCP', 'WebRTC', 'Agora SDK', 'MediaSoup', 'Docker', 'GitHub Actions', 'DataDog'],
  },
  {
    company: 'Elite Softwares',
    role: 'Software Engineer',
    location: 'Pune, India',
    period: 'Jan 2022 – May 2023',
    context:
      "The company's CRM platform was a monolithic system struggling with 600ms response times, frequent security vulnerabilities, and cloud bills growing faster than revenue. It needed a ground-up infrastructure overhaul.",
    bullets: [
      { label: 'Microservices Migration', body: 'Led migration from a monolithic CRM to a microservices-based architecture using Java, Spring Boot, React, Kubernetes (AWS EKS), and AWS App Runner, reducing security vulnerabilities by 50% and doubling service scalability with independent fault isolation.' },
      { label: 'Latency Optimization', body: 'Improved system latency from 600ms to 80ms by implementing Redis for caching and asynchronous processing, achieving a 10x reduction in database load.' },
      { label: 'Cloud Cost Reduction', body: 'Optimized AWS infrastructure across 3 regions, reducing cloud compute costs by 62% through rightsizing services and automated cost monitoring with AWS Cost Explorer.' },
      { label: 'DevOps & Observability', body: 'Created Kubernetes deployments using Helm charts, Argo CD, and GitHub Actions for fully automated CI/CD pipelines; built production monitoring dashboards with AWS CloudWatch and Grafana for actionable operational insights.' },
    ],
    tech: ['Java', 'Spring Boot', 'React', 'TypeScript', 'Kubernetes', 'Helm', 'Kafka', 'AWS EKS', 'AWS App Runner', 'Argo CD', 'GitHub Actions', 'PostgreSQL', 'Redis', 'Grafana', 'Docker'],
  },
]

const education = [
  {
    school: 'Illinois Institute of Technology',
    degree: 'Master of Science in Information Technology and Management',
    location: 'Chicago, IL',
    period: 'Aug 2024 – May 2026',
    gpa: '3.9 / 4.0',
    coursework: 'Applied Artificial Intelligence and Deep Learning, Object-Oriented Application Development, Advanced Software Programming',
    activities: 'YC Voice Agents Hackathon Finalist (FreightVoice) · Google DeepMind × InstaLILY AI Hackathon (instaMIND) · ScarletHacks 2026 Winner (OpusAI) · Vivpro.ai Hackathon Runner-Up (ClinSearch)',
  },
  {
    school: 'Savitribai Phule Pune University',
    degree: 'Bachelor of Technology in Information Technology',
    location: 'Pune, India',
    period: 'Jul 2020 – May 2023',
    gpa: '3.5 / 4.0',
    coursework: 'Natural Language Processing, Data Structures and Algorithms, Object-Oriented Programming, Computer Networking',
    activities: 'Patent Filed: Quantum Hardware Design and Fabrication and Quantum Algorithms for Machine Learning (202321086733)',
  },
]

const skillGroups = [
  {
    category: 'Voice AI & Agents',
    skills: ['Pipecat', 'Twilio', 'WebRTC', 'NVIDIA Nemotron', 'ASR/TTS Pipelines', 'Cekura MCP', 'Agent Evaluation'],
  },
  {
    category: 'ML & AI',
    skills: ['PyTorch', 'TensorFlow', 'LLM Fine-Tuning', 'LoRA', 'QLoRA', 'Unsloth', 'LangChain', 'LangGraph', 'RAG', 'Ollama', 'llama.cpp', 'HuggingFace', 'vLLM', 'XGBoost', 'OpenCV'],
  },
  {
    category: 'Languages',
    skills: ['Python', 'Java', 'TypeScript', 'JavaScript', 'C++', 'Go', 'SQL'],
  },
  {
    category: 'Frontend',
    skills: ['React', 'Next.js', 'Angular', 'Redux', 'Tailwind CSS'],
  },
  {
    category: 'Backend & APIs',
    skills: ['Node.js', 'FastAPI', 'Spring Boot', 'Kafka', 'RabbitMQ', 'GraphQL', 'WebSockets'],
  },
  {
    category: 'Databases',
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch', 'DynamoDB', 'MySQL', 'Supabase'],
  },
  {
    category: 'Cloud & Infrastructure',
    skills: ['AWS ECS', 'AWS Lambda', 'SageMaker', 'AWS EKS', 'S3', 'ECR', 'Kendra', 'GCP Cloud Run', 'Docker', 'Kubernetes', 'Helm', 'Argo CD'],
  },
  {
    category: 'DevOps & Observability',
    skills: ['GitHub Actions', 'DataDog', 'Grafana', 'AWS CloudWatch', 'CI/CD', 'TDD', 'Linux'],
  },
]

const achievements = [
  { icon: 'mingcute:trophy-line', label: 'Finalist — Y Combinator Voice Agents Hackathon', sub: 'San Francisco · May 2026 · 150+ participants' },
  { icon: 'mingcute:certificate-line', label: 'Patent Filed — Quantum Hardware Design & Quantum Algorithms for ML', sub: '202321086733 · Dec 2023' },
  { icon: 'mingcute:book-2-line', label: '2 Published Research Papers', sub: 'Quantum Cryptography for UAVs · AI for Cloud Applications' },
  { icon: 'mingcute:trophy-line', label: 'Runner-Up — Vivpro.ai Hackathon', sub: 'ClinSearch — Clinical Trial NLP' },
]

export default function AboutContent() {
  return (
    <div className="min-h-full bg-slate-50">
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12 md:px-12 flex flex-col gap-10 md:gap-12">

        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold text-slate-800 sm:text-3xl md:text-4xl">Tejas Saraf</h1>
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
              I started my career solving real-time infrastructure problems at scale. At Jio Platforms, I designed
              a WebRTC and Agora SDK streaming pipeline serving 10,000+ concurrent attendees, built a Media SDK on
              MediaSoup supporting SFU, P2P, and MCU architectures, and reduced call drop rates by 30%
              contributing to $1M in annual product revenue. At Elite Softwares, I led the migration of a legacy monolithic CRM to microservices on Kubernetes and
            AWS EKS, cut system latency from 600ms to 80ms with Redis caching, and reduced cloud costs by 62%
            across three AWS regions.
            </p>
          </div>
          <p className="text-sm font-normal leading-relaxed text-slate-500 sm:text-base">
            More recently, I&apos;ve been working at the intersection of AI and real-time systems voice agents,
            shipper-carrier calls end-to-end at sub-500ms latency and predicts churn risk 7× earlier.
            instaMIND detects security incidents in under 100ms entirely on-device. OpusAI compresses diabetic
            retinopathy screening from weeks to under 8 seconds.
          </p>
          <p className="text-sm font-normal leading-relaxed text-slate-500 sm:text-base">
            I hold a filed patent in quantum hardware design and quantum algorithms for machine learning, and
            I&apos;ve published research on quantum cryptography for UAV communication and AI-driven cloud
            application performance.
          </p>
          <p className="text-sm font-normal leading-relaxed text-slate-500 sm:text-base">
            I&apos;m looking for software engineer, ML engineer, or founding engineer roles where I can own
            real-time AI systems end-to-end. If that sounds like your team, let&apos;s talk:{' '}
            <a href="mailto:saraftejas12@gmail.com" className="text-slate-700 underline underline-offset-2 hover:text-slate-900">
              saraftejas12@gmail.com
            </a>
          </p>
          <div className="flex flex-wrap items-center gap-1">
            <span className="mr-1 text-sm text-slate-500">Share:</span>
              <a
                href="https://www.linkedin.com/messaging/compose/?subject=Tejas%20Saraf%20Resume&body=Check%20out%20Tejas%20Saraf%27s%20resume%3A%20https%3A%2F%2Ftejassaraf.me%2Fabout"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Message on LinkedIn"
                className="flex h-8 w-8 items-center justify-center rounded-md text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-800"
              >
                <Icon icon="mingcute:linkedin-line" width={18} height={18} />
              </a>
              <a
                href="mailto:?subject=Tejas%20Saraf%20Resume&body=Check%20out%20Tejas%20Saraf%27s%20resume%3A%20https%3A%2F%2Ftejassaraf.me%2Fabout"
                aria-label="Share via Email"
                className="flex h-8 w-8 items-center justify-center rounded-md text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-800"
              >
                <Icon icon="mingcute:mail-send-line" width={18} height={18} />
              </a>
              <a
                href="https://x.com/messages/compose?recipient_id=TejasRajendraS1&text=Tejas%20Saraf%20Resume%3A%20https%3A%2F%2Ftejassaraf.me%2Fabout"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Message on X"
                className="flex h-8 w-8 items-center justify-center rounded-md text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-800"
              >
                <Icon icon="mingcute:social-x-line" width={18} height={18} />
              </a>
              <a
                href="https://www.facebook.com/sharer/sharer.php?u=https://tejassaraf.me/about"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on Facebook"
                className="flex h-8 w-8 items-center justify-center rounded-md text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-800"
              >
                <Icon icon="mingcute:facebook-line" width={18} height={18} />
              </a>
              <a
                href="https://wa.me/13126786429?text=Check%20out%20Tejas%20Saraf%27s%20resume%3A%20https%3A%2F%2Ftejassaraf.me%2Fabout"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on WhatsApp"
                className="flex h-8 w-8 items-center justify-center rounded-md text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-800"
              >
                <Icon icon="mingcute:whatsapp-line" width={18} height={18} />
              </a>
          </div>
        </div>

        <section className="flex flex-col gap-3 border-t border-slate-200 pt-6 sm:pt-8">
          <h2 className="text-xl font-bold text-slate-800 sm:text-2xl md:text-3xl">Professional Summary</h2>
          <p className="text-sm leading-relaxed text-slate-500 sm:text-base">
            Software engineer with 2.5+ years of production experience building real-time streaming infrastructure,
            voice AI agents, and cloud-native backend systems. Architected WebRTC pipelines serving 10,000+
            concurrent users at Jio Platforms ($1M annual revenue), led monolith-to-microservices migrations
            cutting latency from 600ms to 80ms, and deployed LLM-powered systems with 90% cost reductions. Built
            FreightVoice and instaMIND (on-device ML at sub-100ms latency).
            Patent holder in quantum algorithms for ML. M.S. in IT Management from Illinois Institute of
            Technology (3.9 GPA).
          </p>
        </section>

        <section className="flex flex-col gap-6 border-t border-slate-200 pt-6 sm:gap-8 sm:pt-8">
          <h2 className="text-xl font-bold text-slate-800 sm:text-2xl md:text-3xl">Employment History</h2>
          <div className="flex flex-col gap-8 border-l border-slate-200 pl-4 sm:gap-10 sm:pl-5">
            {experiences.map((exp) => (
              <div key={exp.company} className="relative">
                <div className="absolute -left-[1.15rem] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-slate-300 bg-slate-50 sm:-left-[1.4rem]" />
                <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                  <span className="text-sm font-bold text-slate-800 sm:text-base">{exp.company}</span>
                  <span className="text-xs text-slate-400">{exp.period}</span>
                </div>
                <div className="mt-0.5 text-sm text-slate-600 sm:text-base">{exp.role} · {exp.location}</div>
                <p className="mt-2 text-xs italic leading-relaxed text-slate-500 sm:text-sm">{exp.context}</p>
                <ul className="mt-3 flex flex-col gap-2">
                  {exp.bullets.map((b) => (
                    <li key={b.label} className="text-sm leading-relaxed text-slate-600 sm:text-base">
                      <span className="font-medium text-slate-800">{b.label}: </span>
                      {b.body}
                    </li>
                  ))}
                </ul>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {exp.tech.map((t) => (
                    <span key={t} className="rounded-md border border-slate-200 bg-white px-2 py-0.5 text-xs text-slate-500">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-4 border-t border-slate-200 pt-6 sm:gap-6 sm:pt-8">
          <h2 className="text-xl font-bold text-slate-800 sm:text-2xl md:text-3xl">Education</h2>
          <div className="flex flex-col gap-6 border-l border-slate-200 pl-4 sm:gap-8 sm:pl-5">
            {education.map((edu) => (
              <div key={edu.school} className="relative">
                <div className="absolute -left-[1.15rem] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-slate-300 bg-slate-50 sm:-left-[1.4rem]" />
                <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                  <span className="text-sm font-bold text-slate-800 sm:text-base">{edu.school}</span>
                  <span className="shrink-0 text-xs text-slate-400">{edu.period}</span>
                </div>
                <div className="mt-0.5 text-sm text-slate-600 sm:text-base">{edu.degree} · {edu.location}</div>
                <div className="mt-0.5 text-xs font-medium text-slate-600 sm:text-sm">GPA: {edu.gpa}</div>
                <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
                  <span className="font-medium text-slate-800">Coursework: </span>{edu.coursework}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-slate-600">
                  <span className="font-medium text-slate-800">Activities: </span>{edu.activities}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-4 border-t border-slate-200 pt-6 sm:gap-5 sm:pt-8">
          <h2 className="text-xl font-bold text-slate-800 sm:text-2xl md:text-3xl">Core Competencies</h2>
          <div className="flex flex-col gap-4">
            {skillGroups.map(({ category, skills }) => (
              <div key={category} className="flex flex-col gap-2">
                <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">{category}</span>
                <div className="flex flex-wrap gap-1.5">
                  {skills.map((skill) => (
                    <span key={skill} className="rounded-md border border-slate-200 bg-white px-2 py-0.5 text-xs text-slate-600 sm:px-2.5">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-4 border-t border-slate-200 pt-6 sm:gap-5 sm:pt-8">
          <h2 className="text-xl font-bold text-slate-800 sm:text-2xl md:text-3xl">Achievements</h2>
          <div className="flex flex-col gap-3">
            {achievements.map((a) => (
              <div key={a.label} className="flex items-start gap-3">
                <Icon icon={a.icon} width={18} height={18} className="mt-0.5 shrink-0 text-slate-400" />
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs font-medium text-slate-700 sm:text-sm">{a.label}</span>
                  <span className="text-xs text-slate-400">{a.sub}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-3 border-t border-slate-200 pt-6 sm:gap-4 sm:pt-8">
          <h2 className="text-base font-semibold text-slate-800 sm:text-lg">Contact Information</h2>
          <a
            href="mailto:saraftejas12@gmail.com"
            className="flex items-center gap-3 text-xs text-slate-500 transition-colors hover:text-slate-800 sm:text-sm"
          >
            <Icon icon="mingcute:mail-line" width={18} height={18} className="shrink-0" />
            <span>saraftejas12@gmail.com</span>
          </a>
          {socialLinks.map(({ href, label, icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-xs text-slate-500 transition-colors hover:text-slate-800 sm:text-sm"
            >
              <Icon icon={icon} width={18} height={18} className="shrink-0" />
              <span className="break-all">{href.replace('https://', '')}</span>
            </a>
          ))}
        </section>

        <section className="flex flex-col gap-3 border-t border-slate-200 pt-6 sm:gap-4 sm:pt-8">
          <h2 className="text-base font-semibold text-slate-800 sm:text-lg">Share</h2>
          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/messaging/compose/?subject=Tejas%20Saraf%20Resume&body=Check%20out%20Tejas%20Saraf%27s%20resume%3A%20https%3A%2F%2Ftejassaraf.me%2Fabout"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Message on LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-md text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-800"
            >
              <Icon icon="mingcute:linkedin-line" width={22} height={22} />
            </a>
            <a
              href="mailto:?subject=Tejas%20Saraf%20Resume&body=Check%20out%20Tejas%20Saraf%27s%20resume%3A%20https%3A%2F%2Ftejassaraf.me%2Fabout"
              aria-label="Share via Email"
              className="flex h-10 w-10 items-center justify-center rounded-md text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-800"
            >
              <Icon icon="mingcute:mail-send-line" width={22} height={22} />
            </a>
            <a
              href="https://x.com/messages/compose?recipient_id=TejasRajendraS1&text=Tejas%20Saraf%20Resume%3A%20https%3A%2F%2Ftejassaraf.me%2Fabout"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Message on X"
              className="flex h-10 w-10 items-center justify-center rounded-md text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-800"
            >
              <Icon icon="mingcute:social-x-line" width={22} height={22} />
            </a>
            <a
              href="https://www.facebook.com/sharer/sharer.php?u=https://tejassaraf.me/about"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-md text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-800"
            >
              <Icon icon="mingcute:facebook-line" width={22} height={22} />
            </a>
            <a
              href="https://wa.me/13126786429?text=Check%20out%20Tejas%20Saraf%27s%20resume%3A%20https%3A%2F%2Ftejassaraf.me%2Fabout"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on WhatsApp"
              className="flex h-10 w-10 items-center justify-center rounded-md text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-800"
            >
              <Icon icon="mingcute:whatsapp-line" width={22} height={22} />
            </a>
          </div>
        </section>

      </div>

      <footer className="border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 md:px-12 flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
          <span className="text-xs text-slate-500 sm:text-sm">© 2026 Tejas Saraf · All rights reserved.</span>
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
