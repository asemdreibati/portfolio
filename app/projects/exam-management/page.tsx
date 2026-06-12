import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Lock, GitBranch, Users, Shield, Scale } from 'lucide-react'

const tags = ['PHP', 'Laravel', 'Blade', 'Max-Flow Algorithm', 'Bipartite Graph']

const roles = ['Head Observer', 'Secretary', 'Normal Observer']

const highlights = [
  {
    icon: GitBranch,
    title: 'Max-Flow Algorithm',
    body: 'Observer distribution runs on a layered bipartite graph: Source → Users → SameTime → Courses → Rooms → Sink. Edge weights encode the constraint that a user cannot be in two places at once.',
  },
  {
    icon: Users,
    title: 'Role-Based Assignment',
    body: 'The algorithm runs once per role (Head, Secretary, Normal Observer), allowing different assignment caps and rules for each role without coupling their logic.',
  },
  {
    icon: Shield,
    title: 'Obligation Management',
    body: 'Users can mark time slots as unavailable. These constraints are encoded as zero-capacity edges so the flow algorithm respects them automatically.',
  },
  {
    icon: Scale,
    title: 'Fair & Auditable',
    body: 'Every assignment traces back through the Max-Flow solution. Room allocation scales with student count, and each user\'s maximum number of observations is capped via edge capacity.',
  },
]

const graphLayers = [
  { label: 'Source', description: 'Single source node' },
  { label: 'Users', description: 'One node per available observer' },
  { label: 'SameTime', description: 'Temporal conflict resolution layer' },
  { label: 'Courses', description: 'One node per exam course' },
  { label: 'Rooms', description: 'One node per exam room' },
  { label: 'Sink', description: 'Single sink node' },
]

export default function ExamManagementPage() {
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
        <div className="relative h-72 sm:h-80 rounded-2xl overflow-hidden mb-10 card p-0">
          <Image
            src="/images/exam-management.png"
            alt="Exam Management System screenshot"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 896px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6">
            <span className="bg-blue-500/90 text-white text-xs font-semibold px-3 py-1 rounded-full">
              PHP / Laravel
            </span>
          </div>
        </div>

        {/* Title */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--text)] mb-4">
            Exam <span className="gradient-text">Management</span> System
          </h1>
          <p className="text-[var(--text-muted)] text-lg leading-relaxed">
            An automated observer-distribution system that ensures fair, auditable, and scalable
            assignment of exam observers to rooms while respecting individual availability
            constraints.
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-10">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-sm px-3 py-1 rounded-lg bg-blue-500/10 border border-blue-500/20 font-medium text-blue-500"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* About */}
        <div className="card p-6 mb-6">
          <h2 className="text-lg font-bold text-[var(--text)] mb-3">About the System</h2>
          <p className="text-[var(--text-muted)] leading-relaxed mb-4">
            Manual observer scheduling for university exams is error-prone and time-consuming. This
            system automates the entire process using a Max-Flow algorithm on a layered bipartite
            graph, guaranteeing that every assignment is valid (no double-booking), fair
            (observations capped per user), and fully traceable.
          </p>
          <p className="text-[var(--text-muted)] leading-relaxed">
            The backend is built with PHP and Laravel; the frontend uses Blade templates. The system
            supports three observer roles and is modular enough to accommodate new roles or
            constraints without reworking the core algorithm.
          </p>
        </div>

        {/* Graph layers */}
        <div className="card p-6 mb-6">
          <h2 className="text-lg font-bold text-[var(--text)] mb-4">Bipartite Graph Structure</h2>
          <div className="flex flex-wrap items-center gap-2">
            {graphLayers.map(({ label, description }, idx) => (
              <div key={label} className="flex items-center gap-2">
                <div className="text-center">
                  <div className="text-xs font-mono font-semibold px-3 py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-1">
                    {label}
                  </div>
                  <div className="text-[10px] text-[var(--text-muted)] max-w-[80px] leading-tight">
                    {description}
                  </div>
                </div>
                {idx < graphLayers.length - 1 && (
                  <span className="text-[var(--text-muted)] text-lg font-light mb-4">→</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Observer roles */}
        <div className="card p-6 mb-6">
          <h2 className="text-lg font-bold text-[var(--text)] mb-4">Observer Roles</h2>
          <div className="flex flex-wrap gap-3">
            {roles.map((role) => (
              <span
                key={role}
                className="text-sm px-4 py-2 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 font-medium"
              >
                {role}
              </span>
            ))}
          </div>
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {highlights.map(({ icon: Icon, title, body }) => (
            <div key={title} className="card p-5">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-4 h-4 text-blue-500" />
                </div>
                <h3 className="font-semibold text-[var(--text)] text-sm">{title}</h3>
              </div>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed">{body}</p>
            </div>
          ))}
        </div>

        {/* Private notice */}
        <div className="card p-4 mb-6 flex items-center gap-3 border-blue-500/20 bg-blue-500/5">
          <Lock className="w-4 h-4 text-blue-400 flex-shrink-0" />
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
