import Link from 'next/link'
import { ArrowLeft, Lock, Globe, Zap, BarChart2, WifiOff } from 'lucide-react'

const tags = ['Angular 19', 'Signals', 'Multilingual', 'TypeScript', 'RxJS', 'Tailwind CSS', 'Jest', 'I18n']

const highlights = [
  {
    icon: Globe,
    title: 'Multilingual + RTL/LTR',
    body: 'Full support for English, Spanish, and Arabic with automatic RTL/LTR layout switching driven by the active locale — no manual CSS hacks.',
  },
  {
    icon: Zap,
    title: 'Signal Store Architecture',
    body: 'Built on Angular 19\'s Signal Store with a custom withService() orchestrator for unified loading/error states, race-condition prevention, and decoupled service layers.',
  },
  {
    icon: BarChart2,
    title: 'Real-time Analytics',
    body: 'Instant scoring feedback and a shareable results dashboard. Dynamic question generation with adaptive difficulty keeps every session fresh.',
  },
  {
    icon: WifiOff,
    title: 'Offline-Ready',
    body: 'A persistent state manager (withLocalStorage) provides auto-sync, type-safe storage, and migration support — the quiz works even without a network connection.',
  },
]

const patterns = [
  { name: 'withService()', description: 'Reactive Service Orchestrator for unified loading/error states and decoupled architecture' },
  { name: 'withLocalStorage', description: 'Persistent state manager with auto-sync, type-safe storage, and migrations' },
  { name: 'Cross-layer loading states', description: 'Smart loading state propagation with race-condition prevention across service boundaries' },
]

export default function ChromaQuizPage() {
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

        {/* Hero banner */}
        <div className="relative h-72 sm:h-80 rounded-2xl overflow-hidden mb-10 bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_40%,white,transparent_60%)]" />
          <span className="text-8xl font-black tracking-tighter opacity-20 select-none text-white">CQ</span>
          <div className="absolute bottom-6 left-6 flex gap-2">
            <span className="bg-purple-500/90 text-white text-xs font-semibold px-3 py-1 rounded-full">
              Angular 19
            </span>
            <span className="bg-black/50 backdrop-blur-sm border border-white/10 text-white text-xs font-semibold px-3 py-1 rounded-full">
              Open Source
            </span>
          </div>
        </div>

        {/* Title */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--text)] mb-4">
            Chroma <span className="gradient-text">Quiz</span>
          </h1>
          <p className="text-[var(--text-muted)] text-lg leading-relaxed">
            A multilingual color-knowledge challenge built with Angular 19 Signals that tests
            color-theory mastery across three languages with dynamic question generation and
            adaptive difficulty.
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-10">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-sm px-3 py-1 rounded-lg bg-purple-500/10 border border-purple-500/20 font-medium text-purple-500"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* About */}
        <div className="card p-6 mb-6">
          <h2 className="text-lg font-bold text-[var(--text)] mb-3">About</h2>
          <p className="text-[var(--text-muted)] leading-relaxed">
            Chroma Quiz is a dynamic quiz engine with algorithmic question generation. Players are
            challenged on color theory across English, Spanish, and Arabic — the layout automatically
            switches between LTR and RTL depending on the active language. The quiz is fully
            offline-capable through a persistent state manager that syncs to localStorage with
            type-safe migrations.
          </p>
        </div>

        {/* Custom patterns */}
        <div className="card p-6 mb-6">
          <h2 className="text-lg font-bold text-[var(--text)] mb-4">Custom Reactive Patterns</h2>
          <div className="space-y-3">
            {patterns.map(({ name, description }) => (
              <div key={name} className="flex gap-3 items-start">
                <code className="flex-shrink-0 text-xs px-2 py-1 rounded bg-purple-500/10 border border-purple-500/20 text-purple-400 font-mono mt-0.5">
                  {name}
                </code>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {highlights.map(({ icon: Icon, title, body }) => (
            <div key={title} className="card p-5">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-4 h-4 text-purple-500" />
                </div>
                <h3 className="font-semibold text-[var(--text)] text-sm">{title}</h3>
              </div>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed">{body}</p>
            </div>
          ))}
        </div>

        {/* Private notice */}
        <div className="card p-4 mb-6 flex items-center gap-3 border-purple-500/20 bg-purple-500/5">
          <Lock className="w-4 h-4 text-purple-400 flex-shrink-0" />
          <p className="text-sm text-[var(--text-muted)]">
            This is an internal project. Source code is private and not publicly available.
          </p>
        </div>

        {/* Source code link — commented out (internal / private project)
        <a
          href="https://github.com/aliabodaraa/chroma-quiz-application"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          View on GitHub
        </a>
        */}

        <div className="flex gap-3">
          <Link href="/projects" className="btn-outline">
            <ArrowLeft className="w-4 h-4" /> Back to Projects
          </Link>
        </div>
      </div>
    </div>
  )
}
