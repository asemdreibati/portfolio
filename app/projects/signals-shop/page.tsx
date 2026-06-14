import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Lock, ShoppingCart, Gauge, WifiOff, Layers } from 'lucide-react'

const tags = ['Angular 19', 'TypeScript 5.3', 'NgRx SignalStore', 'RxJS 7', 'Material 3', 'Tailwind CSS', 'Vite', 'Jest', 'Cypress']

const highlights = [
  {
    icon: ShoppingCart,
    title: 'Signal-Based Cart',
    body: 'The cart experience is powered by NgRx SignalStore + RxJS 7, providing offline persistence, multi-tab sync, and one-click checkout without any Redux-style boilerplate.',
  },
  {
    icon: Gauge,
    title: '95 Lighthouse Score',
    body: '0.5-second TTI achieved through lazy-loaded modules, Vite/ESBuild bundling, and PWA-optimised asset caching. Tested with Jest, Cypress, and Storybook.',
  },
  {
    icon: WifiOff,
    title: 'PWA + Offline-Ready',
    body: 'Service workers cache the product catalog and cart state. Customers can browse and add items even without a connection; purchases sync on reconnect.',
  },
  {
    icon: Layers,
    title: 'Product Catalog Features',
    body: 'AI-powered semantic search, 3D product previews with zoom and rotate, and a dynamic rating system — all built without a dedicated 3D library.',
  },
]

const metrics = [
  { label: 'Lighthouse Score', value: '95' },
  { label: 'TTI', value: '0.5s' },
  { label: 'Bundle Strategy', value: 'Lazy modules' },
  { label: 'State Layer', value: 'NgRx SignalStore' },
]

export default function SignalsShopPage() {
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
        <div className="relative h-72 sm:h-80 rounded-2xl overflow-hidden mb-10 bg-[var(--bg-surface-2)]">
          <Image src="/images/angular.png" alt="The Signals Shop" fill className="object-cover" sizes="(max-width: 896px) 100vw, 896px" />
        </div>

        {/* Title */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--text)] mb-4">
            The <span className="gradient-text">Signals</span> Shop
          </h1>
          <p className="text-[var(--text-muted)] text-lg leading-relaxed">
            A cutting-edge e-commerce PWA built with Angular 19 featuring the NgRx Signal Store for
            ultra-responsive, signals-based state management with offline capability and multi-tab
            sync.
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-10">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-sm px-3 py-1 rounded-lg bg-rose-500/10 border border-rose-500/20 font-medium text-rose-500"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Performance metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
          {metrics.map(({ label, value }) => (
            <div key={label} className="card p-4 text-center">
              <div className="text-2xl font-extrabold text-rose-500 mb-1">{value}</div>
              <div className="text-xs text-[var(--text-muted)]">{label}</div>
            </div>
          ))}
        </div>

        {/* About */}
        <div className="card p-6 mb-6">
          <h2 className="text-lg font-bold text-[var(--text)] mb-3">About</h2>
          <p className="text-[var(--text-muted)] leading-relaxed">
            The Signals Shop demonstrates what a production-grade Angular 19 e-commerce experience
            looks like. The UI is built with Material 3 components and Tailwind CSS Grid, while the
            state layer relies entirely on NgRx SignalStore and RxJS 7 — no imperative subscription
            management. Vite and ESBuild keep the development loop fast and the bundle lean.
          </p>
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {highlights.map(({ icon: Icon, title, body }) => (
            <div key={title} className="card p-5">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg bg-rose-500/10 border border-rose-500/20 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-4 h-4 text-rose-500" />
                </div>
                <h3 className="font-semibold text-[var(--text)] text-sm">{title}</h3>
              </div>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed">{body}</p>
            </div>
          ))}
        </div>

        {/* Private notice */}
        <div className="card p-4 mb-6 flex items-center gap-3 border-rose-500/20 bg-rose-500/5">
          <Lock className="w-4 h-4 text-rose-400 flex-shrink-0" />
          <p className="text-sm text-[var(--text-muted)]">
            This is an internal project. Source code is private and not publicly available.
          </p>
        </div>

        {/* Source code link — commented out (internal / private project)
        <a
          href="https://github.com/aliabodaraa/online-shop-application-using-angular-signalStore"
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
