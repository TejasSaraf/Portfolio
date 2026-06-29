import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Tejas Saraf — Software Engineer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#18181b',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px 96px',
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: '#ffffff',
            letterSpacing: '-2px',
            lineHeight: 1,
          }}
        >
          Tejas Saraf
        </div>
        <div
          style={{
            fontSize: 32,
            color: '#a1a1aa',
            marginTop: 20,
            fontWeight: 400,
          }}
        >
          Software Engineer · AI/ML · Full-Stack
        </div>
        <div
          style={{
            fontSize: 24,
            color: '#71717a',
            marginTop: 28,
            maxWidth: 860,
            lineHeight: 1.5,
          }}
        >
          Building AI-native products — YC Hackathon finalist, MS @ Illinois Tech.
          Production ML, distributed systems, voice AI.
        </div>
        <div
          style={{
            display: 'flex',
            gap: 12,
            marginTop: 48,
          }}
        >
          {['Python', 'PyTorch', 'Next.js', 'AWS', 'LLMs'].map((tag) => (
            <div
              key={tag}
              style={{
                border: '1px solid #3f3f46',
                borderRadius: 8,
                padding: '6px 16px',
                fontSize: 18,
                color: '#a1a1aa',
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size },
  )
}
