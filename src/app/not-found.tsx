import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div className="text-center">
        <p className="text-2xl font-bold text-zinc-900">Page not found</p>
        <Link
          href="/"
          className="mt-4 inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-900 transition-colors"
        >
          Back to portfolio
        </Link>
      </div>
    </div>
  )
}
