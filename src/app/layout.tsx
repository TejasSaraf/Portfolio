import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'https://tejassaraf.me')

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Tejas Saraf — Software Engineer | Voice AI & Real-Time Streaming',
    template: '%s — Tejas Saraf',
  },
  description:
    'Software Engineer building voice AI agents and real-time streaming infrastructure. YC Hackathon Finalist. WebRTC, PyTorch, Pipecat, Kubernetes. Open to SWE, ML, and founding engineer roles.',
  authors: [{ name: 'Tejas Saraf' }],
  keywords: [
    'Software Engineer',
    'Voice AI',
    'Real-Time Streaming',
    'WebRTC',
    'PyTorch',
    'Pipecat',
    'Kubernetes',
    'Machine Learning',
    'LLM',
    'AI',
    'Full Stack',
    'Illinois Tech',
    'Next.js',
    'React',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Tejas Saraf',
    title: 'Tejas Saraf — Voice AI & Streaming Infrastructure',
    description:
      'I build voice agents and real-time streaming infrastructure in production. YC Hackathon Finalist.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tejas Saraf — Voice AI & Streaming Infrastructure',
    description:
      'I build voice agents and real-time streaming infrastructure in production. YC Hackathon Finalist.',
    creator: '@TejasRajendraS1',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: '/',
    types: {
      'application/rss+xml': '/feed.xml',
    },
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Tejas Saraf',
  url: siteUrl,
  jobTitle: 'Software Engineer',
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'Illinois Institute of Technology',
  },
  sameAs: [
    'https://github.com/TejasSaraf',
    'https://www.linkedin.com/in/tejassaraf/',
    'https://x.com/TejasRajendraS1',
    'https://www.instagram.com/tejaxss/',
  ],
  knowsAbout: [
    'Voice AI',
    'Real-Time Streaming',
    'WebRTC',
    'Machine Learning',
    'Distributed Systems',
    'Full-Stack Development',
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="alternate" type="application/rss+xml" title="Tejas Saraf — RSS Feed" href="/feed.xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning className="flex min-h-screen flex-col bg-slate-50 text-zinc-900 antialiased">
        <Navbar />
        <div className="flex flex-1 flex-col pt-14">{children}</div>
      </body>
    </html>
  )
}
