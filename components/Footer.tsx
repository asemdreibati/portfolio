import Link from 'next/link';
import {
  Github,
  Linkedin,
  Mail,
  Code2,
  Heart,
  ExternalLink,
} from 'lucide-react';

const socialLinks = [
  { href: 'https://github.com/asemdreibati', icon: Github, label: 'GitHub' },
  {
    href: 'https://linkedin.com/in/asem-dreibati-867330258',
    icon: Linkedin,
    label: 'LinkedIn',
  },
  { href: 'mailto:asemdreibati97@gmail.com', icon: Mail, label: 'Email' },
  {
    href: 'https://stackoverflow.com/users/25239770/asem-dreibati',
    icon: ExternalLink,
    label: 'StackOverflow',
  },
];

const footerLinks = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/#skills', label: 'Skills' },
  { href: '/#contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg-surface)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-600 to-accent-500 flex items-center justify-center shadow-lg shadow-primary-500/25">
                <Code2 className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-lg text-[var(--text)]">
                Asem<span className="text-primary-500">.</span>
              </span>
            </div>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed max-w-xs mb-3">
              Software engineer specializing in Angular, NestJS, and Next.js.
              Open-source contributor. MSc Software Engineering student.
            </p>
            <div className="flex gap-1.5 flex-wrap">
              {['Angular', 'NestJS', 'Next.js'].map((t) => (
                <span
                  key={t}
                  className="text-xs px-2 py-0.5 rounded-md bg-primary-500/10 border border-primary-500/20 text-primary-400"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-sm text-[var(--text)] mb-4 uppercase tracking-wider">
              Navigation
            </h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--text-muted)] hover:text-primary-500 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold text-sm text-[var(--text)] mb-4 uppercase tracking-wider">
              Connect
            </h3>
            <div className="flex gap-3 flex-wrap">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center bg-[var(--bg-surface-2)] border border-[var(--border)] text-[var(--text-muted)] hover:text-primary-500 hover:border-primary-500/50 hover:bg-primary-500/10 transition-all duration-200 hover:-translate-y-0.5"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            <p className="mt-4 text-sm text-[var(--text-muted)]">
              asemdreibati97@gmail.com
            </p>
            <p className="mt-1 text-xs text-[var(--text-muted)]">
              Latakia, Syria · Open to Remote
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[var(--text-muted)]">
            © {new Date().getFullYear()} Asem Dreibati. All rights reserved.
          </p>
          <p className="text-sm text-[var(--text-muted)] flex items-center gap-1.5">
            Built with{' '}
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" /> using{' '}
            <span className="text-primary-500 font-medium">Next.js</span> &{' '}
            <span className="text-primary-500 font-medium">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
