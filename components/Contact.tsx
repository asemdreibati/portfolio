'use client';

import { useState } from 'react';
import {
  Github,
  Linkedin,
  Mail,
  Send,
  MapPin,
  MessageSquare,
  ExternalLink,
} from 'lucide-react';

const socials = [
  {
    icon: Github,
    label: 'GitHub',
    handle: '@asemdreibati',
    href: 'https://github.com/asemdreibati',
    color: '#ffffff',
    desc: 'VSCode & xtermjs contributor',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    handle: 'Asem Dreibati',
    href: 'https://linkedin.com/in/asem-dreibati-867330258',
    color: '#0a66c2',
    desc: 'Professional network',
  },
  {
    icon: Mail,
    label: 'Email',
    handle: 'asemdreibati97@gmail.com',
    href: 'mailto:asemdreibati97@gmail.com',
    color: '#ea4335',
    desc: 'Fastest response',
  },
  {
    icon: ExternalLink,
    label: 'StackOverflow',
    handle: 'asem-dreibati',
    href: 'https://stackoverflow.com/users/25239770/asem-dreibati',
    color: '#f48024',
    desc: 'Angular answers',
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const subject = encodeURIComponent(form.subject || 'Portfolio Contact');
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:asemdreibati97@gmail.com?subject=${subject}&body=${body}`;
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 bg-[var(--bg-surface)]">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-primary-500 font-semibold text-sm uppercase tracking-widest mb-3 animate-on-scroll">
            Let&apos;s work together
          </p>
          <h2 className="section-heading animate-on-scroll stagger-1">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="section-subheading mx-auto animate-on-scroll stagger-2">
            Have a project in mind or want to collaborate? I&apos;d love to hear
            from you. Drop me a message and I&apos;ll get back to you within 24
            hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left: Contact info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Info card */}
            <div className="card p-6 animate-on-scroll-left">
              <h3 className="font-bold text-lg text-[var(--text)] mb-4 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-primary-500" />
                Contact Info
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-[var(--text-muted)]">
                  <MapPin className="w-4 h-4 text-primary-500 flex-shrink-0" />
                  Latakia, Syria · Open to Remote
                </div>
                <div className="flex items-center gap-3 text-sm text-[var(--text-muted)]">
                  <Mail className="w-4 h-4 text-primary-500 flex-shrink-0" />
                  asemdreibati97@gmail.com
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-[var(--border)]">
                <div className="flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-green-400 font-medium">
                    Available for work
                  </span>
                </div>
                <p className="text-xs text-[var(--text-muted)] mt-1">
                  Typical response time: &lt; 24 hours
                </p>
              </div>

              {/* Specializations */}
              <div className="mt-4 pt-4 border-t border-[var(--border)]">
                <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-2">
                  Specializations
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    'Angular',
                    'NestJS',
                    'Next.js',
                    'Full-Stack',
                    'TypeScript',
                  ].map((s) => (
                    <span
                      key={s}
                      className="text-xs px-2 py-0.5 rounded-md bg-primary-500/10 border border-primary-500/20 text-primary-400"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="space-y-3 animate-on-scroll-left stagger-2">
              {socials.map(
                ({ icon: Icon, label, handle, href, color, desc }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 card rounded-xl hover:-translate-y-0.5 group"
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                      style={{
                        backgroundColor: `${color}18`,
                        border: `1px solid ${color}30`,
                      }}
                    >
                      <Icon className="w-4 h-4" style={{ color }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-semibold text-[var(--text)]">
                        {label}
                      </div>
                      <div className="text-xs text-[var(--text-muted)] truncate">
                        {handle}
                      </div>
                      <div className="text-xs text-primary-400/70">{desc}</div>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-[var(--text-muted)] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </a>
                )
              )}
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3 animate-on-scroll-right">
            <div className="card p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center mb-4">
                    <svg
                      className="w-8 h-8 text-green-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[var(--text)] mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-[var(--text-muted)] text-sm max-w-sm">
                    Thanks for reaching out! I&apos;ll get back to you within 24
                    hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({
                        name: '',
                        email: '',
                        subject: '',
                        message: '',
                      });
                    }}
                    className="mt-6 btn-outline text-sm px-4 py-2"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-[var(--text)] mb-2">
                        Full Name <span className="text-primary-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) =>
                          setForm({ ...form, name: e.target.value })
                        }
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-[var(--bg-surface-2)] border border-[var(--border)] text-[var(--text)] placeholder-[var(--text-muted)] text-sm focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-200"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[var(--text)] mb-2">
                        Email Address{' '}
                        <span className="text-primary-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) =>
                          setForm({ ...form, email: e.target.value })
                        }
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-[var(--bg-surface-2)] border border-[var(--border)] text-[var(--text)] placeholder-[var(--text-muted)] text-sm focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-200"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[var(--text)] mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={form.subject}
                      onChange={(e) =>
                        setForm({ ...form, subject: e.target.value })
                      }
                      placeholder="Project inquiry, collaboration..."
                      className="w-full px-4 py-3 rounded-xl bg-[var(--bg-surface-2)] border border-[var(--border)] text-[var(--text)] placeholder-[var(--text-muted)] text-sm focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-200"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[var(--text)] mb-2">
                      Message <span className="text-primary-500">*</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      placeholder="Tell me about your project or idea..."
                      className="w-full px-4 py-3 rounded-xl bg-[var(--bg-surface-2)] border border-[var(--border)] text-[var(--text)] placeholder-[var(--text-muted)] text-sm focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-200 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                  >
                    {loading ? (
                      <>
                        <svg
                          className="w-4 h-4 animate-spin"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                          />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-xs text-[var(--text-muted)] text-center">
                    No spam. Your info is only used to respond to your message.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
