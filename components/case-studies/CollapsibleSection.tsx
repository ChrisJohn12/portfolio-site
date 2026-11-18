'use client'

import { ReactNode, useCallback, useEffect, useRef, useState } from 'react'

interface CollapsibleSectionProps {
  id: string
  label: string
  children: ReactNode
}

/**
 * A collapsed-by-default section for supporting material.
 * - The heading wraps the button, so screen readers still list it as a heading.
 * - Closed content is inert: no tab stops, no screen reader reads of hidden text.
 * - A jump link or URL hash that targets this section (or anything inside it) opens it.
 * - Height follows the content, so images that load late are not clipped.
 */
export default function CollapsibleSection({ id, label, children }: CollapsibleSectionProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [height, setHeight] = useState(0)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)

  // Keep the animated height in step with the content, including late-loading images.
  useEffect(() => {
    const inner = innerRef.current
    if (!inner) return
    const measure = () => setHeight(inner.scrollHeight)
    measure()
    const observer = new ResizeObserver(measure)
    observer.observe(inner)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (panelRef.current) panelRef.current.inert = !isOpen
  }, [isOpen])

  // Open when a hash points at this section or at an element inside it.
  const openForHash = useCallback(() => {
    const hash = window.location.hash.slice(1)
    if (!hash) return
    const target = document.getElementById(hash)
    if (target && wrapperRef.current?.contains(target)) setIsOpen(true)
  }, [])

  useEffect(() => {
    openForHash()
    window.addEventListener('hashchange', openForHash)
    // SectionNav updates the hash with replaceState, which does not fire hashchange.
    window.addEventListener('case-study:jump', openForHash)
    return () => {
      window.removeEventListener('hashchange', openForHash)
      window.removeEventListener('case-study:jump', openForHash)
    }
  }, [openForHash])

  return (
    <div ref={wrapperRef} id={id} className="mb-6 scroll-mt-36 border-b border-[#E5E5E5] pb-6">
      <h2 className="m-0 text-[22px] font-semibold text-[#1A1A1A]">
        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
          aria-controls={`${id}-content`}
          className="group flex min-h-[44px] w-full items-center justify-between gap-4 rounded-md py-2 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB]"
        >
          <span className="group-hover:text-[#2563EB] transition-colors">{label}</span>
          <span className="flex flex-shrink-0 items-center gap-2 text-sm font-medium text-[#717171] group-hover:text-[#2563EB] transition-colors">
            {isOpen ? 'Hide details' : 'Show details'}
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
              className={`transition-transform duration-200 motion-reduce:transition-none ${isOpen ? 'rotate-180' : ''}`}
            >
              <polyline points="6 9 10 13 14 9" />
            </svg>
          </span>
        </button>
      </h2>

      <div
        ref={panelRef}
        id={`${id}-content`}
        role="region"
        aria-label={label}
        className="overflow-hidden transition-[max-height] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] motion-reduce:transition-none"
        style={{ maxHeight: isOpen ? height : 0 }}
      >
        <div ref={innerRef} className="flow-root pt-4 pb-2">
          {children}
        </div>
      </div>
    </div>
  )
}
