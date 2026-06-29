import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface BlogPostMeta {
  slug: string
  title: string
  date: string
  categories: string[]
  description: string
  stack: string[]
  emoji: string
  award?: string
  metrics: { value: string; label: string }[]
}

export interface BlogPost extends BlogPostMeta {
  content: string
}

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog')

export function getAllPosts(): BlogPostMeta[] {
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.mdx'))

  const posts = files.map((filename) => {
    const filePath = path.join(BLOG_DIR, filename)
    const raw = fs.readFileSync(filePath, 'utf-8')
    const { data } = matter(raw)

    return {
      slug: data.slug ?? filename.replace(/\.mdx$/, ''),
      title: data.title,
      date: data.date,
      categories: data.categories ?? [],
      description: data.description ?? '',
      stack: data.stack ?? [],
      emoji: data.emoji ?? '',
      award: data.award,
      metrics: data.metrics ?? [],
    } satisfies BlogPostMeta
  })

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  )
}

export function getPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`)

  if (!fs.existsSync(filePath)) return null

  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)

  return {
    slug: data.slug ?? slug,
    title: data.title,
    date: data.date,
    categories: data.categories ?? [],
    description: data.description ?? '',
    stack: data.stack ?? [],
    emoji: data.emoji ?? '',
    award: data.award,
    metrics: data.metrics ?? [],
    content,
  }
}
