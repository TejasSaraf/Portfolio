import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { compile, run } from '@mdx-js/mdx'
import * as runtime from 'react/jsx-runtime'
import { getAllPosts, getPostBySlug } from '@/lib/blog'
import ProjectDetail from '@/components/ProjectDetail'
import { useMDXComponents } from '../../../../mdx-components'

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ id: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const { id } = await params
  const post = getPostBySlug(id)
  if (!post) return {}

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      type: 'article',
      title: `${post.title} — Tejas Saraf`,
      description: post.description,
      url: `/project/${id}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post.title} — Tejas Saraf`,
      description: post.description,
    },
    alternates: {
      canonical: `/project/${id}`,
    },
  }
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const post = getPostBySlug(id)
  if (!post) notFound()

  const compiled = await compile(post.content, {
    outputFormat: 'function-body',
  })

  const { default: MDXContent } = await run(String(compiled), {
    ...runtime,
    baseUrl: import.meta.url,
  })

  const components = useMDXComponents({})

  return (
    <ProjectDetail post={post}>
      <MDXContent components={components} />
    </ProjectDetail>
  )
}
