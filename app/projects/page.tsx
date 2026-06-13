import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Lock } from 'lucide-react'

const workProjects = [
  {
    slug: 'angular-forms',
    title: 'Angular Reactive Forms Library',
    shortDescription:
      'A powerful JSON-driven dynamic forms generator that revolutionizes form management in Angular applications. Eliminate boilerplate code and create complex forms with elegant configuration.',
    image: '/images/angular-forms.png',
    tags: ['Angular 17+', 'Reactive Forms', 'JSON Configuration', 'Dynamic Forms'],
    features: ['JSON-driven config', 'Nested groups & arrays', 'Built-in validation', 'Custom error messages'],
    gradient: 'from-orange-500 to-red-600',
    color: '#f97316',
    bg: 'bg-orange-500/10',
    border: 'border-orange-500/20',
  },
  {
    slug: 'chroma-quiz',
    title: 'Chroma Quiz',
    shortDescription:
      'A multilingual color-knowledge challenge built with Angular 19 Signals that tests color-theory mastery across three languages with dynamic question generation.',
    image: '/images/angular-chroma-quiz-1.png',
    tags: ['Angular 19', 'Signals', 'Multilingual', 'TypeScript', 'Tailwind CSS'],
    features: ['EN / ES / AR support', 'RTL/LTR switching', 'Signal Store', 'Offline-ready'],
    gradient: 'from-purple-500 to-pink-600',
    color: '#a855f7',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/20',
  },
  {
    slug: 'exam-management',
    title: 'Exam Management System',
    shortDescription:
      'An automated exam-management and observer-distribution system that ensures fair, auditable, and scalable assignment of observers to exam rooms while respecting user constraints.',
    image: '/images/exam-management.png',
    tags: ['PHP', 'Laravel', 'Blade', 'Max-Flow Algorithm'],
    features: ['Max-Flow distribution', 'Role-based assignment', 'Obligation management', 'Audit trail'],
    gradient: 'from-blue-500 to-indigo-600',
    color: '#3b82f6',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
  },
  {
    slug: 'microservices',
    title: 'Microservices Ticketing Platform',
    shortDescription:
      'An event-driven ticketing platform built on a microservices architecture with passwordless magic-link authentication.',
    image: '/images/microservices.png',
    tags: ['Node.js', 'TypeScript', 'NATS Streaming', 'MongoDB', 'Next.js', 'Kubernetes'],
    features: ['NATS Streaming', 'Magic-link auth', 'Kubernetes + Skaffold', 'Concurrency control'],
    gradient: 'from-green-500 to-teal-600',
    color: '#10b981',
    bg: 'bg-green-500/10',
    border: 'border-green-500/20',
  },
  {
    slug: 'signals-shop',
    title: 'The Signals Shop',
    shortDescription:
      'A cutting-edge e-commerce PWA built with Angular 19 featuring the NgRx Signal Store for ultra-responsive, signals-based state management.',
    image: '/images/angular.png',
    tags: ['Angular 19', 'NgRx SignalStore', 'TypeScript 5.3', 'Tailwind CSS', 'Vite'],
    features: ['PWA + offline', 'NgRx SignalStore', '95 Lighthouse score', 'Multi-tab sync'],
    gradient: 'from-rose-500 to-orange-500',
    color: '#f43f5e',
    bg: 'bg-rose-500/10',
    border: 'border-rose-500/20',
  },
  {
    slug: 'im-chat',
    title: 'IM-Chat (C++/Qt)',
    shortDescription:
      'A lightweight, cross-platform instant-messaging app built with C++ and Qt, featuring a clean client-server architecture with private, group, and broadcast messaging.',
    image: '/images/qt.png',
    tags: ['C++17', 'Qt 6', 'CMake', 'TCP Sockets'],
    features: ['Unicast / Multicast / Broadcast', 'Low-latency TCP', 'Cross-platform', 'Qt Widgets GUI'],
    gradient: 'from-slate-500 to-gray-700',
    color: '#64748b',
    bg: 'bg-slate-500/10',
    border: 'border-slate-500/20',
  },
]

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-28 pb-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-primary-500 transition-colors duration-200 mb-6"
          >
            ← Back to Home
          </Link>
          <p className="text-primary-500 font-semibold text-sm uppercase tracking-widest mb-3">
            My Work
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[var(--text)] mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-[var(--text-muted)] text-lg max-w-2xl mx-auto">
            A curated selection of production-grade systems, libraries, and research projects built
            across multiple domains and technology stacks.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {workProjects.map((project, i) => (
            <div
              key={project.slug}
              className="group card p-0 overflow-hidden hover:-translate-y-1 transition-all duration-300"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Project screenshot */}
              <div className="relative h-52 overflow-hidden bg-[var(--bg-surface)]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                {/* Internal badge */}
                <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-sm border border-white/10 rounded-lg px-2.5 py-1 text-xs font-medium text-white flex items-center gap-1.5">
                  <Lock className="w-3 h-3" /> Internal
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h2 className="text-xl font-bold text-[var(--text)] mb-2 group-hover:text-primary-500 transition-colors duration-200">
                  {project.title}
                </h2>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-4">
                  {project.shortDescription}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.features.map((feature) => (
                    <span
                      key={feature}
                      className={`text-xs px-2.5 py-1 rounded-lg ${project.bg} ${project.border} border font-medium`}
                      style={{ color: project.color }}
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-lg bg-[var(--bg-surface-2)] text-[var(--text-muted)] border border-[var(--border)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="btn-primary flex-1 justify-center text-sm"
                  >
                    View Details <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  {/* Source code links removed — projects are internal and private */}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20 p-10 card rounded-3xl">
          <h2 className="text-2xl font-bold text-[var(--text)] mb-3">
            Want to know more?
          </h2>
          <p className="text-[var(--text-muted)] text-sm max-w-md mx-auto mb-6">
            These projects are internal and private. Reach out directly if you&apos;d like to discuss
            the architecture, implementation details, or anything else.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link href="/#contact" className="btn-primary">
              Get in Touch <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
