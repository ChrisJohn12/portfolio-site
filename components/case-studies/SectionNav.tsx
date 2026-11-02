'use client'

import { useEffect, useRef, useState } from 'react'

interface SectionNavItem {
  label: string
  href: string
}

/**
 * Quiet, single-row section bar: left-aligned with the content column, short labels,
 * and sideways scrolling on small screens instead of wrapping onto a second line.
 */
export default function SectionNav({ items }: { items: SectionNavItem[] }) {
  const [activeId, setActiveId] = useState('')
  const [showTop, setShowTop] = useState(false)
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.href.slice(1)))
      .filter((el): el is HTMLElement => Boolean(el))
    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting)
        if (!visible.length) return
        const top = visible.reduce((a, b) => (a.boundingClientRect.top < b.boundingClientRect.top ? a : b))
        setActiveId(`#${top.target.id}`)
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: 0.1 }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [items])

  // Keep the active pill in view when the bar scrolls sideways.
  useEffect(() => {
    const nav = navRef.current
    const active = nav?.querySelector<HTMLElement>('[aria-current="location"]')
    if (!nav || !active) return
    nav.scrollTo({ left: active.offsetLeft - nav.clientWidth / 2 + active.clientWidth / 2, behavior: 'smooth' })
  }, [activeId])

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const jump = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const target = document.getElementById(href.slice(1))
    if (!target) return
    e.preventDefault()
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' })
    window.history.replaceState(null, '', href)
  }

  return (
    <>
      <div className="sticky top-16 z-40 border-b border-[#E5E5E5] bg-white/90 backdrop-blur-[8px]">
        <div className="mx-auto max-w-4xl px-6">
          <nav
            ref={navRef}
            aria-label="Sections on this page"
            className="flex items-center gap-1 overflow-x-auto py-2.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {items.map((item) => {
              const active = activeId === item.href
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => jump(e, item.href)}
                  aria-current={active ? 'location' : undefined}
                  className={`whitespace-nowrap rounded-full px-3 py-1.5 text-[13px] font-medium transition-colors duration-150 ${
                    active
                      ? 'bg-[#EFF6FF] text-[#2563EB]'
                      : 'text-[#717171] hover:bg-[#F3F2EF] hover:text-[#1A1A1A]'
                  }`}
                >
                  {item.label}
                </a>
              )
            })}
          </nav>
        </div>
      </div>

      {showTop && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-40 inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#F3F2EF] border border-[#E5E5E5] text-[#1A1A1A] shadow-sm transition-colors hover:bg-white"
          aria-label="Back to top"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M18 15l-6-6-6 6" />
          </svg>
        </button>
      )}
    </>
  )
}
