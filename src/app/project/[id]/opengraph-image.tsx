import { ImageResponse } from 'next/og'
import { projects } from '@/data/projects'

export const runtime = 'edge'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export async function generateImageMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const project = projects.find((p) => p.id === id)
  return [{ alt: project ? `${project.title} — Tejas Saraf` : 'Tejas Saraf' }]
}

export default async function OGImage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const project = projects.find((p) => p.id === id)

  const title = project?.title ?? 'Project'
  const description = project?.cardDesc ?? ''
  const emoji = project?.emoji ?? '💻'
  const bgFrom = project?.heroBgColor ?? '#18181b'
  const bgTo = project?.heroBgColor2 ?? '#27272a'
  const award = project?.cardAward

  return new ImageResponse(
    (
      <div
        style={{
          background: `linear-gradient(135deg, ${bgFrom}, ${bgTo})`,
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: '64px 80px',
        }}
      >
        <div style={{ fontSize: 80, lineHeight: 1 }}>{emoji}</div>
        <div
          style={{
            fontSize: 60,
            fontWeight: 700,
            color: '#ffffff',
            marginTop: 24,
            lineHeight: 1.1,
            letterSpacing: '-1px',
          }}
        >
          {title}
        </div>
        {award && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginTop: 16,
              background: 'rgba(255,255,255,0.2)',
              borderRadius: 999,
              padding: '6px 20px',
              width: 'fit-content',
              fontSize: 22,
              color: '#ffffff',
            }}
          >
            🏆 {award}
          </div>
        )}
        <div
          style={{
            fontSize: 26,
            color: 'rgba(255,255,255,0.8)',
            marginTop: 20,
            maxWidth: 900,
            lineHeight: 1.5,
          }}
        >
          {description}
        </div>
        <div
          style={{
            marginTop: 40,
            fontSize: 20,
            color: 'rgba(255,255,255,0.5)',
          }}
        >
          tejassaraf.com
        </div>
      </div>
    ),
    { ...size },
  )
}
