'use client'

import { useState } from 'react'

type Category = 'all' | 'frontend' | 'backend' | 'database' | 'tools'

interface Skill {
  name: string
  icon: string
  level: number
  category: Exclude<Category, 'all'>
  color: string
  badge?: string
}

const skills: Skill[] = [
  // Frontend
  { name: 'Angular', icon: 'A', level: 94, category: 'frontend', color: '#dd1b16', badge: 'Expert' },
  { name: 'TypeScript', icon: 'TS', level: 89, category: 'frontend', color: '#3178c6' },
  { name: 'React', icon: '⚛', level: 74, category: 'frontend', color: '#61dafb', badge: 'Growing' },
  { name: 'Next.js', icon: '▲', level: 72, category: 'frontend', color: '#a78bfa', badge: 'Growing' },
  { name: 'RxJS', icon: 'Rx', level: 86, category: 'frontend', color: '#b7178c' },
  { name: 'Electron.js', icon: '⚡', level: 75, category: 'frontend', color: '#47848f' },
  { name: 'JavaScript', icon: 'JS', level: 90, category: 'frontend', color: '#f7df1e' },
  { name: 'HTML / CSS', icon: '🎨', level: 91, category: 'frontend', color: '#e34c26' },
  // Backend
  { name: 'NestJS', icon: 'N', level: 80, category: 'backend', color: '#e0234e', badge: 'Full-Stack' },
  { name: 'Node.js', icon: '🟢', level: 84, category: 'backend', color: '#68a063' },
  { name: 'Express.js', icon: 'Ex', level: 82, category: 'backend', color: '#ffffff' },
  { name: 'PHP / Laravel', icon: '🐘', level: 78, category: 'backend', color: '#8892be' },
  { name: 'C++', icon: 'C+', level: 92, category: 'backend', color: '#659ad2', badge: 'Expert' },
  { name: 'Java', icon: '☕', level: 84, category: 'backend', color: '#f89820', badge: 'Teaching' },
  { name: 'Design Patterns', icon: '◈', level: 88, category: 'backend', color: '#a855f7', badge: 'Teaching' },
  // Database
  { name: 'MySQL', icon: '🐬', level: 84, category: 'database', color: '#00758f' },
  { name: 'MongoDB', icon: '🍃', level: 79, category: 'database', color: '#47a248' },
  // Tools
  { name: 'Git', icon: '🌿', level: 92, category: 'tools', color: '#f05032' },
  { name: 'Docker', icon: '🐳', level: 78, category: 'tools', color: '#2496ed' },
  { name: 'GitHub Actions', icon: '⚙', level: 76, category: 'tools', color: '#2088ff' },
  { name: 'Qt Framework', icon: 'Qt', level: 70, category: 'tools', color: '#41cd52' },
  { name: 'Static Analysis', icon: '🔍', level: 80, category: 'tools', color: '#38bdf8', badge: 'Thesis' },
  { name: 'Jira', icon: 'J', level: 82, category: 'tools', color: '#0052cc' },
  { name: 'Auto. Anywhere', icon: '🤖', level: 72, category: 'tools', color: '#ff6600' },
]

const categories: { id: Category; label: string; count: number }[] = [
  { id: 'all', label: 'All Skills', count: skills.length },
  { id: 'frontend', label: 'Frontend', count: skills.filter((s) => s.category === 'frontend').length },
  { id: 'backend', label: 'Backend', count: skills.filter((s) => s.category === 'backend').length },
  { id: 'database', label: 'Database', count: skills.filter((s) => s.category === 'database').length },
  { id: 'tools', label: 'Tools & DevOps', count: skills.filter((s) => s.category === 'tools').length },
]

const badgeStyle: Record<string, { text: string; bg: string; border: string }> = {
  Expert: { text: 'text-amber-400', bg: 'bg-amber-400/10', border: 'border-amber-400/30' },
  'Full-Stack': { text: 'text-emerald-400', bg: 'bg-emerald-400/10', border: 'border-emerald-400/30' },
  Growing: { text: 'text-sky-400', bg: 'bg-sky-400/10', border: 'border-sky-400/30' },
  Teaching: { text: 'text-violet-400', bg: 'bg-violet-400/10', border: 'border-violet-400/30' },
  Thesis: { text: 'text-cyan-400', bg: 'bg-cyan-400/10', border: 'border-cyan-400/30' },
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<Category>('all')

  const filtered =
    activeCategory === 'all' ? skills : skills.filter((s) => s.category === activeCategory)

  return (
    <section id="skills" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-primary-500 font-semibold text-sm uppercase tracking-widest mb-3 animate-on-scroll">
            What I work with
          </p>
          <h2 className="section-heading animate-on-scroll stagger-1">
            Skills &amp;{' '}
            <span className="gradient-text">Technologies</span>
          </h2>
          <p className="section-subheading mx-auto animate-on-scroll stagger-2">
            Angular is my primary stack. I build full-stack apps with{' '}
            <span className="text-primary-500 font-medium">NestJS</span>, expanding into{' '}
            <span className="text-primary-500 font-medium">React / Next.js</span>.
            I also lecture on{' '}
            <span className="text-primary-500 font-medium">Java, C++, and Design Patterns</span>{' '}
            at university, with ongoing thesis research in{' '}
            <span className="text-primary-500 font-medium">static code analysis for vulnerability detection</span>.
          </p>

          {/* Category tabs */}
          <div className="inline-flex bg-[var(--bg-surface)] border border-[var(--border)] rounded-2xl p-1 gap-1 animate-on-scroll stagger-3 flex-wrap justify-center">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                  activeCategory === cat.id
                    ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/25'
                    : 'text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-[var(--bg-surface-2)]'
                }`}
              >
                {cat.label}
                <span
                  className={`text-xs px-1.5 py-0.5 rounded-full font-bold ${
                    activeCategory === cat.id
                      ? 'bg-white/20'
                      : 'bg-[var(--bg-surface-2)] text-[var(--text-muted)]'
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {filtered.map((skill, i) => (
            <div
              key={skill.name}
              className="animate-on-scroll group"
              style={{ transitionDelay: `${(i % 12) * 0.045}s` }}
            >
              <div className="card p-4 flex flex-col items-center gap-3 cursor-default hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden">
                {/* Badge */}
                {skill.badge && (
                  <div
                    className={`absolute top-2 right-2 text-[10px] px-1.5 py-0.5 rounded-md font-bold border ${badgeStyle[skill.badge].text} ${badgeStyle[skill.badge].bg} ${badgeStyle[skill.badge].border}`}
                  >
                    {skill.badge}
                  </div>
                )}

                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-sm font-extrabold shadow-md transition-all duration-300 group-hover:scale-110"
                  style={{
                    backgroundColor: `${skill.color}18`,
                    border: `1px solid ${skill.color}30`,
                    color: skill.color,
                  }}
                >
                  {skill.icon}
                </div>

                {/* Name */}
                <span className="text-xs font-semibold text-[var(--text)] text-center leading-tight">
                  {skill.name}
                </span>

                {/* Level bar */}
                <div className="w-full h-1 bg-[var(--bg-surface-2)] rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-700 opacity-60 group-hover:opacity-100"
                    style={{
                      width: `${skill.level}%`,
                      background: `linear-gradient(90deg, ${skill.color}, ${skill.color}99)`,
                    }}
                  />
                </div>

                {/* Level % on hover */}
                <span className="text-[10px] text-[var(--text-muted)] font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Open Source callout */}
        <div className="mt-16 animate-on-scroll">
          <div className="card p-6 flex flex-col sm:flex-row items-start gap-6">
            <div className="flex gap-4 w-full sm:w-auto">
              <div className="w-12 h-12 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center flex-shrink-0 text-2xl">
                🎓
              </div>
              <div className="flex-1 sm:flex-none">
                <p className="font-semibold text-[var(--text)] mb-1">University Lecturer</p>
                <p className="text-sm text-[var(--text-muted)] max-w-lg">
                  Teaching{' '}
                  <span className="text-violet-400 font-medium">Java, C++, and Design Patterns</span>{' '}
                  at Latakia University. Master&apos;s thesis: developing a{' '}
                  <span className="text-cyan-400 font-medium">static code analysis tool</span>{' '}
                  to detect security vulnerabilities in source code.
                  Also an open-source contributor — fixed a bug in{' '}
                  <a href="https://github.com/microsoft/vscode/pull/232134" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:underline font-medium">VSCode</a>{' '}
                  &amp; PR in{' '}
                  <a href="https://github.com/xtermjs/xterm.js/pull/5199" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:underline font-medium">xtermjs</a>.
                </p>
              </div>
            </div>
            <a
              href="https://github.com/asemdreibati"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline text-sm px-4 py-2 flex-shrink-0 sm:ml-auto"
            >
              GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
