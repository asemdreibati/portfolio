'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  Github,
  Linkedin,
  ExternalLink,
} from 'lucide-react';

const roles = [
  'Software Engineer',
  'Angular Expert',
  'Full-Stack Developer',
  'NestJS Developer',
  'University Lecturer',
  'Open Source Contributor',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) {
      const timer = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, 2200);
      return () => clearTimeout(timer);
    }

    const current = roles[roleIndex];
    const speed = isDeleting ? 45 : 90;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        const next = current.slice(0, displayText.length + 1);
        setDisplayText(next);
        if (next === current) setIsPaused(true);
      } else {
        const next = current.slice(0, displayText.length - 1);
        setDisplayText(next);
        if (next === '') {
          setIsDeleting(false);
          setRoleIndex((i) => (i + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, isPaused, roleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid opacity-60" />

      {/* Animated blobs */}
      <div className="blob-1 absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary-600/20 dark:bg-primary-600/15 blur-[100px]" />
      <div className="blob-2 absolute top-1/3 -right-32 w-80 h-80 rounded-full bg-accent-500/20 dark:bg-accent-500/15 blur-[100px]" />
      <div className="blob-3 absolute bottom-1/4 left-1/3 w-72 h-72 rounded-full bg-primary-400/15 dark:bg-primary-400/10 blur-[80px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          {/* Left: Text content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-medium mb-6 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Available for opportunities
            </div>

            {/* Name */}
            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4 animate-fade-up"
              style={{ animationDelay: '0.1s', animationFillMode: 'both' }}
            >
              <span className="text-[var(--text-muted)] text-2xl sm:text-3xl lg:text-4xl font-medium block mb-2">
                Hello, I&apos;m
              </span>
              <span className="gradient-text">Asem Dreibati</span>
            </h1>

            {/* Typewriter role */}
            <div
              className="h-10 sm:h-12 flex items-center justify-center lg:justify-start mb-6 animate-fade-up"
              style={{ animationDelay: '0.2s', animationFillMode: 'both' }}
            >
              <span className="text-xl sm:text-2xl font-semibold text-[var(--text-muted)]">
                {displayText}
                <span className="cursor-blink ml-0.5 inline-block w-0.5 h-6 bg-primary-500 align-middle" />
              </span>
            </div>

            {/* Bio */}
            <p
              className="text-base sm:text-lg text-[var(--text-muted)] leading-relaxed max-w-lg mx-auto lg:mx-0 mb-8 animate-fade-up"
              style={{ animationDelay: '0.3s', animationFillMode: 'both' }}
            >
              Software engineer &amp; lecturer with{' '}
              <span className="text-[var(--text)] font-medium">
                5+ years of experience
              </span>
              . Specializing in Angular and full-stack development with{' '}
              <span className="text-[var(--text)] font-medium">NestJS</span> and{' '}
              <span className="text-[var(--text)] font-medium">Next.js</span>.
              Teaching{' '}
              <span className="text-[var(--text)] font-medium">
                Java, C++, and Design Patterns
              </span>{' '}
              at Latakia University. Master&apos;s thesis:{' '}
              <span className="text-[var(--text)] font-medium">
                static code analysis for vulnerability detection
              </span>
              .
            </p>

            {/* Stack badges */}
            <div
              className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-8 animate-fade-up"
              style={{ animationDelay: '0.35s', animationFillMode: 'both' }}
            >
              {[
                {
                  label: 'Angular',
                  color: '#dd1b16',
                  bg: 'rgba(221,27,22,0.12)',
                },
                {
                  label: 'NestJS',
                  color: '#e0234e',
                  bg: 'rgba(224,35,78,0.12)',
                },
                {
                  label: 'Next.js',
                  color: '#a78bfa',
                  bg: 'rgba(167,139,250,0.12)',
                },
                {
                  label: 'TypeScript',
                  color: '#3178c6',
                  bg: 'rgba(49,120,198,0.12)',
                },
                {
                  label: 'Node.js',
                  color: '#68a063',
                  bg: 'rgba(104,160,99,0.12)',
                },
              ].map(({ label, color, bg }) => (
                <span
                  key={label}
                  className="text-xs font-semibold px-3 py-1.5 rounded-full border"
                  style={{
                    color,
                    backgroundColor: bg,
                    borderColor: `${color}40`,
                  }}
                >
                  {label}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 mb-10 animate-fade-up"
              style={{ animationDelay: '0.4s', animationFillMode: 'both' }}
            >
              <Link
                href="/projects"
                className="btn-primary w-full sm:w-auto justify-center"
              >
                View Projects <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="/#contact"
                className="btn-outline w-full sm:w-auto justify-center"
              >
                Get In Touch
              </a>
              <a
                href="https://github.com/asemdreibati"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm text-[var(--text-muted)] hover:text-[var(--text)] transition-colors duration-200"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </div>

            {/* Social links */}
            <div
              className="flex items-center justify-center lg:justify-start gap-4 animate-fade-up"
              style={{ animationDelay: '0.5s', animationFillMode: 'both' }}
            >
              <span className="text-xs text-[var(--text-muted)] uppercase tracking-widest">
                Find me
              </span>
              <div className="w-8 h-px bg-[var(--border)]" />
              {[
                {
                  icon: Github,
                  href: 'https://github.com/asemdreibati',
                  label: 'GitHub',
                },
                {
                  icon: Linkedin,
                  href: 'https://linkedin.com/in/asem-dreibati-867330258',
                  label: 'LinkedIn',
                },
                {
                  icon: ExternalLink,
                  href: 'https://stackoverflow.com/users/25239770/asem-dreibati',
                  label: 'StackOverflow',
                },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-[var(--text-muted)] hover:text-primary-500 transition-all duration-200 hover:-translate-y-0.5"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Right: Avatar / Visual */}
          <div
            className="relative flex-shrink-0 animate-fade-in"
            style={{ animationDelay: '0.3s', animationFillMode: 'both' }}
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80">
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary-500/30 animate-spin-slow" />
              {/* Inner ring */}
              <div className="absolute inset-4 rounded-full border border-primary-500/20" />
              {/* Avatar */}
              <div className="absolute inset-6 rounded-full overflow-hidden bg-gradient-to-br from-primary-600 via-primary-500 to-accent-500 flex items-center justify-center shadow-2xl shadow-primary-500/30">
                <span className="text-6xl font-extrabold text-white select-none">
                  AD
                </span>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-2 -right-2 bg-[var(--bg-surface)] border border-[var(--border)] rounded-xl px-3 py-2 shadow-xl animate-float text-xs font-semibold text-[var(--text)] flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-green-400" />
                Open to Work
              </div>

              <div className="absolute -bottom-2 -left-4 bg-[var(--bg-surface)] border border-[var(--border)] rounded-xl px-3 py-2 shadow-xl animate-float-slow text-xs font-semibold text-[var(--text)]">
                5+ Years Exp.
              </div>

              <div className="absolute top-1/2 -right-10 bg-[var(--bg-surface)] border border-[var(--border)] rounded-xl px-3 py-2 shadow-xl animate-float-fast text-xs font-semibold text-[var(--text)] flex items-center gap-1.5">
                <span style={{ color: '#dd1b16' }}>▲</span> Angular
              </div>
            </div>

            {/* Stats below avatar */}
            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              {[
                { value: '5+', label: 'Years' },
                { value: '3', label: 'Companies' },
                { value: '2', label: 'OS PRs' },
              ].map(({ value, label }) => (
                <div
                  key={label}
                  className="bg-[var(--bg-surface)] border border-[var(--border)] rounded-xl p-3 hover:border-primary-500/50 transition-colors duration-200"
                >
                  <div className="text-2xl font-extrabold gradient-text">
                    {value}
                  </div>
                  <div className="text-xs text-[var(--text-muted)]">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
