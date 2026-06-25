'use client'

import { ReactNode, useState, useRef, useEffect } from 'react'

interface CollapsibleSectionProps {
  id: string
  label: string
  children: ReactNode
}

export default function CollapsibleSection({ id, label, children }: CollapsibleSectionProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [maxHeight, setMaxHeight] = useState('0px')
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!contentRef.current) return
    setMaxHeight(isOpen ? `${contentRef.current.scrollHeight}px` : '0px')
  }, [isOpen, children])

  return (
    <div id={id} className="mb-16">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-3 w-full group mb-0"
        aria-expanded={isOpen}
        aria-controls={`${id}-content`}
      >
        <h2 className="text-[22px] font-semibold text-[#1A1A1A] mb-0">{label}</h2>
        <div
          className={`flex-shrink-0 w-5 h-5 flex items-center justify-center text-[#C8641A] transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
          aria-hidden="true"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="6 9 10 13 14 9" />
          </svg>
        </div>
      </button>

      <div
        id={`${id}-content`}
        className="overflow-hidden transition-[max-height] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"
        style={{ maxHeight }}
      >
        <div ref={contentRef} className="mt-6">
          {children}
        </div>
      </div>
    </div>
  )
}
