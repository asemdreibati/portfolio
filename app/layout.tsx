import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollAnimations from '@/components/ScrollAnimations'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Asem Dreibati — Software Engineer',
  description:
    'Portfolio of Asem Dreibati, a Software Engineer specializing in Angular, NestJS, and full-stack web development. Open-source contributor to VSCode and xtermjs.',
  keywords: ['software engineer', 'angular', 'nestjs', 'react', 'nextjs', 'typescript', 'fullstack', 'portfolio'],
  authors: [{ name: 'Asem Dreibati' }],
  openGraph: {
    title: 'Asem Dreibati — Software Engineer',
    description: 'Angular specialist & full-stack developer. Open-source contributor.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <ScrollAnimations />
        </ThemeProvider>
      </body>
    </html>
  )
}
