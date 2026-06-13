import Link from 'next/link'
import { ArrowLeft, Lock, Radio, Monitor, Wifi, BookOpen } from 'lucide-react'

const tags = ['C++17', 'Qt 6', 'CMake', 'TCP Sockets', 'Doxygen']

const messagingModes = [
  { label: 'Unicast', description: 'Private 1-to-1 messages between connected clients' },
  { label: 'Multicast', description: 'Group chats with online-user management and member lists' },
  { label: 'Broadcast', description: 'Send a message to every connected client simultaneously' },
]

const highlights = [
  {
    icon: Wifi,
    title: 'TCP Socket Architecture',
    body: 'The server listens on a configurable TCP port; each client connects by entering the server IP and a display name. The server routes packets between clients with minimal latency.',
  },
  {
    icon: Radio,
    title: 'Three Messaging Modes',
    body: 'Unicast (private DM), Multicast (named group with online-user list), and Broadcast (global announce) are all supported through a unified packet protocol.',
  },
  {
    icon: Monitor,
    title: 'Cross-Platform Qt Widgets',
    body: 'The GUI is built with Qt 6 Widgets, producing native window chrome on Windows, macOS, and Linux. No web runtime or Electron overhead.',
  },
  {
    icon: BookOpen,
    title: 'Doxygen Docs',
    body: 'Every class and public method is documented inline. Running cmake --build . --target docs generates full HTML API documentation via Doxygen.',
  },
]

const prerequisites = [
  { name: 'Qt', version: '6.9+' },
  { name: 'CMake', version: '3.31+' },
  { name: 'C++ Compiler', version: 'C++17' },
]

export default function ImChatPage() {
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
        <div className="relative h-72 sm:h-80 rounded-2xl overflow-hidden mb-10 bg-gradient-to-br from-slate-500 to-gray-700 flex items-center justify-center">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_40%,white,transparent_60%)]" />
          <span className="text-8xl font-black tracking-tighter opacity-20 select-none text-white">IM</span>
          <div className="absolute bottom-6 left-6 flex gap-2">
            <span className="bg-slate-600/90 text-white text-xs font-semibold px-3 py-1 rounded-full">
              C++ / Qt 6
            </span>
            <span className="bg-black/50 backdrop-blur-sm border border-white/10 text-white text-xs font-semibold px-3 py-1 rounded-full">
              Open Source
            </span>
          </div>
        </div>

        {/* Title */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--text)] mb-4">
            IM-<span className="gradient-text">Chat</span>
          </h1>
          <p className="text-[var(--text-muted)] text-lg leading-relaxed">
            A lightweight, cross-platform instant-messaging application built with C++17 and Qt 6,
            featuring a clean client-server architecture and support for private, group, and
            broadcast messaging over TCP.
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-10">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-sm px-3 py-1 rounded-lg bg-slate-500/10 border border-slate-500/20 font-medium text-slate-400"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Messaging modes */}
        <div className="card p-6 mb-6">
          <h2 className="text-lg font-bold text-[var(--text)] mb-4">Messaging Modes</h2>
          <div className="space-y-3">
            {messagingModes.map(({ label, description }) => (
              <div key={label} className="flex gap-3 items-start">
                <span className="flex-shrink-0 text-xs font-semibold px-2.5 py-1 rounded-lg bg-slate-500/10 border border-slate-500/20 text-slate-400 mt-0.5">
                  {label}
                </span>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Prerequisites */}
        <div className="card p-6 mb-6">
          <h2 className="text-lg font-bold text-[var(--text)] mb-4">Prerequisites</h2>
          <div className="flex flex-wrap gap-3">
            {prerequisites.map(({ name, version }) => (
              <div
                key={name}
                className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[var(--bg-surface-2)] border border-[var(--border)]"
              >
                <span className="text-sm font-semibold text-[var(--text)]">{name}</span>
                <span className="text-xs text-[var(--text-muted)]">{version}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-[var(--text-muted)] mt-4">
            Start the server first, then launch one or more clients — enter the server IP and your
            display name, then click <strong>Join</strong>.
          </p>
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {highlights.map(({ icon: Icon, title, body }) => (
            <div key={title} className="card p-5">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg bg-slate-500/10 border border-slate-500/20 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-4 h-4 text-slate-400" />
                </div>
                <h3 className="font-semibold text-[var(--text)] text-sm">{title}</h3>
              </div>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed">{body}</p>
            </div>
          ))}
        </div>

        {/* Private notice */}
        <div className="card p-4 mb-6 flex items-center gap-3 border-slate-500/20 bg-slate-500/5">
          <Lock className="w-4 h-4 text-slate-400 flex-shrink-0" />
          <p className="text-sm text-[var(--text-muted)]">
            This is an internal project. Source code is private and not publicly available.
          </p>
        </div>

        {/* Source code link — commented out (internal / private project)
        <a
          href="https://github.com/asemdreibati/IM-chat"
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
