'use client'

import { useEffect, useState } from 'react'

interface AnchorNavItem {
  label: string
  href: string
}

interface AnchorNavProps {
  items: AnchorNavItem[]
}

export default function AnchorNav({ items }: AnchorNavProps) {
  const [activeId, setActiveId] = useState(items[0]?.href ?? '')
  const [showTopButton, setShowTopButton] = useState(false)

  useEffect(() => {
    if (!items.length) return

    const sectionIds = items.map((item) => item.href.replace('#', ''))
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section))

    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((entry) => entry.isIntersecting)
        if (!visibleEntries.length) return

        const nearest = visibleEntries.reduce((current, next) => {
          return current.boundingClientRect.top < next.boundingClientRect.top ? current : next
        })

        setActiveId(`#${nearest.target.id}`)
      },
      {
        rootMargin: '-35% 0px -55% 0px',
        threshold: 0.1,
      }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [items])

  useEffect(() => {
    const updateScroll = () => {
      setShowTopButton(window.scrollY > 400)
    }

    updateScroll()
    window.addEventListener('scroll', updateScroll, { passive: true })
    return () => window.removeEventListener('scroll', updateScroll)
  }, [])

  return (
    <>
      <div className="sticky top-16 z-50 border-b border-[#E5E5E5] bg-white/95 backdrop-blur-[8px]">
        <nav className="mx-auto flex flex-wrap items-center justify-center gap-8 px-6 py-3.5 max-w-7xl">
          {items.map((link, index) => {
            const isActive = activeId === link.href
            return (
              <span key={link.href} className="inline-flex items-center">
                <a
                  href={link.href}
                  aria-current={isActive ? 'location' : undefined}
                  className={`text-[14px] font-medium transition duration-150 ease-in-out border-b-2 pb-0.5 ${
                    isActive
                      ? 'border-[#E20074] text-[#E20074]'
                      : 'border-transparent text-[#555555] hover:text-[#E20074] hover:border-[#E20074]'
                  }`}
                >
                  {link.label}
                </a>
                {index !== items.length - 1 && (
                  <span className="text-[#D1D5DB] px-3 select-none">|</span>
                )}
              </span>
            )
          })}
        </nav>
      </div>

      {showTopButton && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-50 inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#F3F2EF] border border-[#E5E5E5] text-[#1A1A1A] shadow-sm transition-all duration-150 hover:bg-white"
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
