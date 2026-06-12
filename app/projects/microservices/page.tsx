import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Lock, Server, GitBranch, Zap } from 'lucide-react'

const tags = ['Node.js', 'TypeScript', 'NATS Streaming', 'MongoDB', 'Next.js', 'JWT', 'Kubernetes', 'Skaffold']

const services = ['Auth', 'Tickets', 'Orders', 'Payments', 'Expiration']

const events = [
  'ticket:created', 'ticket:updated',
  'order:created', 'order:cancelled',
  'payment:created', 'expiration:complete',
]

const highlights = [
  {
    icon: Server,
    title: 'NATS Streaming + Kubernetes',
    body: 'Five independent microservices communicate through NATS Streaming events. The cluster is orchestrated with Kubernetes and Skaffold for fast local development iteration.',
  },
  {
    icon: Lock,
    title: 'Passwordless Magic-Link Auth',
    body: '32-character secure tokens with a 1-minute expiry are delivered via Nodemailer/Gmail. JWT sessions replace traditional passwords entirely.',
  },
  {
    icon: GitBranch,
    title: 'Shared Common Library',
    body: '@aaticketsaa/common holds shared event types, custom error classes, and Express middlewares — keeping service contracts in sync across the monorepo.',
  },
  {
    icon: Zap,
    title: 'Optimistic Concurrency',
    body: 'Document versioning prevents stale-data conflicts across services. Order expiration is handled by a timed background job that emits an expiration:complete event.',
  },
]

export default function MicroservicesPage() {
  return (
    <div className="min-h-screen pt-28 pb-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        {/* Back */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-primary-500 transition-colors duration-200 mb-10"
        >
          <ArrowLeft className="w-4 h-4" /> All Projects
        </Link>

        {/* Hero image */}
        <div className="relative h-72 sm:h-80 rounded-2xl overflow-hidden mb-10 card p-0 bg-[var(--bg-surface)]">
          <Image
            src="/images/microservices.png"
            alt="Microservices Ticketing Platform architecture diagram"
            fill
            className="object-contain p-8"
            priority
            sizes="(max-width: 768px) 100vw, 896px"
          />
          <div className="absolute bottom-6 left-6">
            <span className="bg-green-500/90 text-white text-xs font-semibold px-3 py-1 rounded-full">
              Microservices
            </span>
          </div>
        </div>

        {/* Title */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--text)] mb-4">
            Microservices <span className="gradient-text">Ticketing</span> Platform
          </h1>
          <p className="text-[var(--text-muted)] text-lg leading-relaxed">
            An event-driven ticketing platform built on a microservices architecture with
            passwordless magic-link authentication, optimistic concurrency control, and a CI
            pipeline.
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-10">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-sm px-3 py-1 rounded-lg bg-green-500/10 border border-green-500/20 font-medium text-green-500"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Services */}
        <div className="card p-6 mb-6">
          <h2 className="text-lg font-bold text-[var(--text)] mb-4">Services</h2>
          <div className="flex flex-wrap gap-3">
            {services.map((svc) => (
              <span
                key={svc}
                className="font-mono text-sm px-4 py-2 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 font-medium"
              >
                {svc}
              </span>
            ))}
          </div>
        </div>

        {/* Event flow */}
        <div className="card p-6 mb-6">
          <h2 className="text-lg font-bold text-[var(--text)] mb-4">Event Flow</h2>
          <div className="flex flex-wrap gap-2">
            {events.map((evt) => (
              <code
                key={evt}
                className="text-xs px-2.5 py-1 rounded-lg bg-[var(--bg-surface-2)] border border-[var(--border)] text-[var(--text-muted)]"
              >
                {evt}
              </code>
            ))}
          </div>
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {highlights.map(({ icon: Icon, title, body }) => (
            <div key={title} className="card p-5">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-4 h-4 text-green-500" />
                </div>
                <h3 className="font-semibold text-[var(--text)] text-sm">{title}</h3>
              </div>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed">{body}</p>
            </div>
          ))}
        </div>

        {/* Private notice */}
        <div className="card p-4 mb-6 flex items-center gap-3 border-green-500/20 bg-green-500/5">
          <Lock className="w-4 h-4 text-green-400 flex-shrink-0" />
          <p className="text-sm text-[var(--text-muted)]">
            This is an internal project. Source code is private and not publicly available.
          </p>
        </div>

        <div className="flex gap-3">
          <Link href="/projects" className="btn-outline">
            <ArrowLeft className="w-4 h-4" /> Back to Projects
          </Link>
        </div>
      </div>
    </div>
  )
}
