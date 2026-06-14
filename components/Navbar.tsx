'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { usePathname } from 'next/navigation'
import { Sun, Moon, Menu, X, Code2 } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/#skills', label: 'Skills' },
  { href: '/#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  // Always restore scroll on route change (catches zoom/resize edge cases)
  useEffect(() => {
    setMenuOpen(false)
    document.body.style.overflow = ''
  }, [pathname])

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    if (href.startsWith('/#')) return pathname === '/'
    return pathname?.startsWith(href) ?? false
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'py-3 bg-[var(--bg)]/80 backdrop-blur-xl border-b border-[var(--border)]'
            : 'py-5 bg-transparent'
        }`}
      >
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group"
            onClick={() => setMenuOpen(false)}
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-600 to-accent-500 flex items-center justify-center shadow-lg shadow-primary-500/25 group-hover:shadow-primary-500/40 transition-shadow duration-300">
              <Code2 className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-lg tracking-tight text-[var(--text)]">
              Asem<span className="text-primary-500">.</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(link.href)
                    ? 'text-primary-500 bg-primary-500/10'
                    : 'text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-[var(--bg-surface-2)]'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="w-9 h-9 rounded-lg flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-[var(--bg-surface-2)] transition-all duration-200"
              aria-label="Toggle theme"
            >
              {mounted ? (
                theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />
              ) : (
                <div className="w-4 h-4 rounded-full bg-[var(--border)]" />
              )}
            </button>

            <a
              href="/#contact"
              className="hidden md:inline-flex btn-primary text-xs px-4 py-2"
            >
              Hire Me
            </a>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden w-9 h-9 rounded-lg flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-[var(--bg-surface-2)] transition-all duration-200"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 h-full w-72 bg-[var(--bg-surface)] border-l border-[var(--border)] shadow-2xl flex flex-col pt-20 pb-8 px-6 transition-transform duration-300 ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                  isActive(link.href)
                    ? 'text-primary-500 bg-primary-500/10'
                    : 'text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-[var(--bg-surface-2)]'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-6">
            <a
              href="/#contact"
              onClick={() => setMenuOpen(false)}
              className="btn-primary w-full justify-center"
            >
              Hire Me
            </a>
          </div>
          <div className="mt-auto text-center text-xs text-[var(--text-muted)]">
            Angular · NestJS · Next.js
          </div>
        </div>
      </div>
    </>
  )
}
