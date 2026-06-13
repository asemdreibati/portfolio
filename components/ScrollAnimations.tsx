'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function ScrollAnimations() {
  const pathname = usePathname()

  useEffect(() => {
    // Delay lets new page DOM settle after client-side navigation
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible')
            }
          })
        },
        { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
      )

      document
        .querySelectorAll(
          '.animate-on-scroll, .animate-on-scroll-left, .animate-on-scroll-right'
        )
        .forEach((el) => {
          el.classList.remove('visible')
          observer.observe(el)
        })

      return () => observer.disconnect()
    }, 50)

    return () => clearTimeout(timer)
  }, [pathname])

  return null
}
