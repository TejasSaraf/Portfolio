import type { Metadata } from 'next'
import AboutContent from './AboutContent'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Tejas Saraf — Software Engineer with 2.5+ years building real-time streaming, voice AI agents, and cloud-native systems. YC Hackathon Finalist, MS @ Illinois Tech.',
  openGraph: {
    title: 'About — Tejas Saraf',
    description:
      'Software Engineer with 2.5+ years building real-time streaming, voice AI agents, and cloud-native systems.',
    url: '/about',
  },
  twitter: {
    title: 'About — Tejas Saraf',
    description:
      'Software Engineer with 2.5+ years building real-time streaming, voice AI agents, and cloud-native systems.',
  },
  alternates: {
    canonical: '/about',
  },
}

export default function AboutPage() {
  return <AboutContent />
}
