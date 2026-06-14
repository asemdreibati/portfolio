# Asem Dreibati — Developer Portfolio

A modern, animated, fully-responsive developer portfolio built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**. Dark mode by default, light mode toggle, scroll animations, and 4 fully interactive demo projects.

## Live Features

### Main Portfolio
| Section | Features |
|---|---|
| **Hero** | Animated gradient blobs, typewriter role cycling, floating skill badges, stat counters |
| **Skills** | 22 skills with category filter (Frontend / Backend / Database / Tools), animated level bars, expertise badges |
| **Contact** | Form with loading state + success screen, 4 social links, location info |
| **Navbar** | Sticky with blur-on-scroll, dark/light toggle, mobile hamburger drawer |
| **Footer** | Social links, navigation, stack badges |

### Dark / Light Mode
- Dark by default (toggled via navbar sun/moon icon)
- Powered by `next-themes` with CSS custom properties — no flash on load
- Every component respects the theme automatically

### Scroll Animations
- `IntersectionObserver` fires CSS transitions when elements enter the viewport
- Three animation directions: `animate-on-scroll` (up), `animate-on-scroll-left`, `animate-on-scroll-right`
- Stagger delays via `.stagger-1` through `.stagger-8`

### 4 Demo Projects

| Project | Route | Tech Showcased |
|---|---|---|
| **Weather Dashboard** | `/projects/weather-app` | Multi-city data, °F/°C toggle, 7-day forecast, CSS gradients |
| **Task Manager** | `/projects/task-manager` | Kanban board, add/move/delete tasks, priority filters, modal |
| **Recipe Finder** | `/projects/recipe-finder` | Live search, category filter, click-to-expand recipe detail modal |
| **Finance Dashboard** | `/projects/finance-dashboard` | 3-tab layout, CSS bar chart, spending tracker, budget progress |

---

## Getting Started

### Prerequisites
- Node.js 18+
- npm 9+

### Run locally
```bash
cd portfolio
npm install
npm run dev
# → http://localhost:3000
```

### Build for production
```bash
npm run build
npm start
```

### Check for errors
```bash
npm run lint
npm run build   # TypeScript + build validation
```

---

## Customize for yourself

### Update personal info
| What to change | File |
|---|---|
| Name, bio, typewriter roles | `components/Hero.tsx` |
| Skills list + levels | `components/Skills.tsx` |
| Email, GitHub, social links | `components/Contact.tsx` + `components/Footer.tsx` |
| Page title + SEO metadata | `app/layout.tsx` |
| Navbar logo text | `components/Navbar.tsx` |

### Change the color theme
Edit `app/globals.css` CSS variables:
```css
:root {
  --primary: #7c3aed;   /* light mode accent */
}
.dark {
  --primary: #8b5cf6;   /* dark mode accent */
}
```
And update `tailwind.config.ts` → `theme.extend.colors.primary` to match.

### Add a new project
1. Create `app/projects/my-project/page.tsx`
2. Add an entry to the `projects` array in `app/projects/page.tsx`

---

## Deployment

### Vercel (Recommended)

Zero-config, made by the Next.js team. Free tier is generous.

```bash
npm i -g vercel
vercel
```

Or: push to GitHub → [vercel.com](https://vercel.com) → Import Project → done.

### Netlify

Add a `netlify.toml` to the repo root:
```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```
Then: [netlify.com](https://netlify.com) → New site from Git → connect repo → auto-deploys on push.

### GitHub Pages

Not recommended for Next.js App Router. If needed, add `output: 'export'` to `next.config.js` and configure `basePath`, but you lose all dynamic features. Stick with Vercel or Netlify.

---

## Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v3 |
| Theme | next-themes (CSS variables) |
| Icons | lucide-react |
| Animations | CSS keyframes + IntersectionObserver |
| Font | Inter (Google Fonts via `next/font`) |
| Deployment | Vercel (recommended) |

No animation library. No backend. No database. Zero external API calls.
