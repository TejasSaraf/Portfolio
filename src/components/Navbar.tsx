'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Icon } from '@iconify/react'

const navLinks = [
  { label: 'Blog', href: '/' },
  { label: 'About', href: '/about' },
] as const

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/tejassaraf/', icon: 'mingcute:linkedin-line' },
  { label: 'GitHub', href: 'https://github.com/TejasSaraf', icon: 'mingcute:github-line' },
  { label: 'X', href: 'https://x.com/saraftejass', icon: 'mingcute:social-x-line' },
  { label: 'Instagram', href: 'https://www.instagram.com/tejaxss/', icon: 'mingcute:instagram-line' },
] as const

export default function Navbar() {
  const pathname = usePathname()

  return (
    <header className="fixed inset-x-0 top-0 z-50 h-14 bg-slate-50 backdrop-blur-sm">
      <div className="flex h-full items-center justify-between px-4 sm:px-8 md:px-16 lg:px-[8.5rem]">
        <Link href="/" className="flex items-center gap-2 sm:gap-3">
          <div className="flex h-6 w-6 items-center justify-center rounded-sm bg-slate-800 text-xs font-semibold text-white">
            TS
          </div>
          <span className="text-base font-bold text-slate-900 sm:text-xl">Tejas Saraf</span>
        </Link>

        <nav className="flex items-center gap-1">
          {navLinks.map(({ label, href }) => {
            const active = pathname === href
            return (
              <Link
                key={href}
                href={href}
                className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors sm:px-4 ${
                  active
                    ? 'text-slate-900'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {label}
              </Link>
            )
          })}
        </nav>

        <div className="hidden items-center gap-4 sm:flex">
          {socialLinks.map(({ label, href, icon }) => (
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
          <a
            href="/feed.xml"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="RSS Feed"
            className="flex items-center justify-center text-slate-500 transition-colors hover:text-slate-800"
          >
            <Icon icon="mingcute:rss-line" width={20} height={20} />
          </a>
        </div>
      </div>
    </header>
  )
}
