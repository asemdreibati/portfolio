import Link from 'next/link'
import { ArrowLeft, Lock, Code2, Layers, ShieldCheck, Repeat2 } from 'lucide-react'

const tags = ['Angular 17+', 'Reactive Forms', 'JSON Configuration', 'Dynamic Forms', 'TypeScript']

const controlTypes = ['input', 'select', 'checkbox', 'radio', 'group', 'array']

const highlights = [
  {
    icon: Code2,
    title: 'JSON-Driven Schema',
    body: 'Define your entire form with a structured JSON schema — controlType, label, value, order, and validators — instead of manually wiring FormControls and FormGroups.',
  },
  {
    icon: Layers,
    title: 'Deeply Nested Forms',
    body: 'Handle nested FormGroups and FormArrays out of the box. Arrays within arrays are supported through a childSkeleton descriptor, removing structural complexity from your templates.',
  },
  {
    icon: ShieldCheck,
    title: 'Built-in Validation',
    body: 'Standard Angular validators work automatically from the schema. Custom validation messages are centralised through a VALIDATION_ERROR_MESSAGES injection token.',
  },
  {
    icon: Repeat2,
    title: 'Reusability & Maintainability',
    body: 'One library import replaces hundreds of lines of template boilerplate across your app. Change a form by editing JSON — no component refactoring required.',
  },
]

export default function AngularFormsPage() {
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
        <div className="relative h-72 sm:h-80 rounded-2xl overflow-hidden mb-10 bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_40%,white,transparent_60%)]" />
          <span className="text-8xl font-black tracking-tighter opacity-20 select-none text-white">AF</span>
          <div className="absolute bottom-6 left-6">
            <span className="bg-orange-500/90 text-white text-xs font-semibold px-3 py-1 rounded-full">
              Angular Library
            </span>
          </div>
        </div>

        {/* Title */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--text)] mb-4">
            Angular <span className="gradient-text">Reactive Forms</span> Library
          </h1>
          <p className="text-[var(--text-muted)] text-lg leading-relaxed">
            A powerful JSON-driven dynamic forms generator that revolutionizes form management in
            Angular applications. Eliminate boilerplate code and create complex forms with elegant
            configuration.
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-10">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-sm px-3 py-1 rounded-lg bg-orange-500/10 border border-orange-500/20 font-medium text-orange-500"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* About */}
        <div className="card p-6 mb-6">
          <h2 className="text-lg font-bold text-[var(--text)] mb-3">About the Library</h2>
          <p className="text-[var(--text-muted)] leading-relaxed">
            This library lets Angular developers configure Reactive Forms via a structured JSON
            schema instead of manually defining controls and groups. Each control is described by
            a plain object with fields like <code className="text-orange-500 text-sm">controlType</code>,{' '}
            <code className="text-orange-500 text-sm">label</code>,{' '}
            <code className="text-orange-500 text-sm">value</code>,{' '}
            <code className="text-orange-500 text-sm">order</code>, and{' '}
            <code className="text-orange-500 text-sm">validators</code>. The library
            translates that schema into a fully functional Angular{' '}
            <code className="text-orange-500 text-sm">FormGroup</code> at runtime.
          </p>
        </div>

        {/* Supported control types */}
        <div className="card p-6 mb-6">
          <h2 className="text-lg font-bold text-[var(--text)] mb-4">Supported Control Types</h2>
          <div className="flex flex-wrap gap-2">
            {controlTypes.map((ct) => (
              <span
                key={ct}
                className="font-mono text-sm px-3 py-1.5 rounded-lg bg-[var(--bg-surface-2)] border border-[var(--border)] text-[var(--text)]"
              >
                {ct}
              </span>
            ))}
          </div>
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {highlights.map(({ icon: Icon, title, body }) => (
            <div key={title} className="card p-5">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-4 h-4 text-orange-500" />
                </div>
                <h3 className="font-semibold text-[var(--text)] text-sm">{title}</h3>
              </div>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed">{body}</p>
            </div>
          ))}
        </div>

        {/* Private notice */}
        <div className="card p-4 mb-6 flex items-center gap-3 border-orange-500/20 bg-orange-500/5">
          <Lock className="w-4 h-4 text-orange-400 flex-shrink-0" />
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
