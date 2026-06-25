'use client'

import { useState } from 'react'
import ArchitectureFlow from '@/components/case-studies/ArchitectureFlow'

const systemPromptRows = [
  ['Name one specific tool', 'Eliminates decision fatigue'],
  ['Explain the problem in one sentence', 'User sees themselves immediately'],
  ['Give exactly 3 steps for today', 'Achievable, not overwhelming'],
  ['Estimate time savings in hours', 'Concrete, universal ROI'],
  ['State the monthly cost', 'Removes the final objection'],
  ['Write for a busy owner with 10 minutes', 'Persona embedded in output'],
]

export default function CollapsibleTechnical() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="bg-[#F3F2EF] py-16 mb-16" id="build">
      <div className="max-w-4xl mx-auto px-6">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-3 w-full group"
        >
          <h2 className="text-[22px] font-semibold text-[#1A1A1A] mb-0">Technical implementation</h2>
          <div
            className={`flex-shrink-0 w-5 h-5 flex items-center justify-center text-[#2563EB] transition-transform duration-200 ${
              isOpen ? 'rotate-180' : ''
            }`}
            aria-hidden="true"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="6 9 10 13 14 9" />
            </svg>
          </div>
        </button>

        {isOpen && (
          <div className="mt-6 space-y-6 animate-in fade-in duration-300">
            <p className="text-[15px] text-[#555555] leading-relaxed">
              Built with React and the Claude API, deployed on Vercel, with one significant architectural
              challenge to solve.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <ArchitectureFlow />

              <div className="bg-white border border-[#E5E5E5] rounded-xl p-6">
                <h3 className="text-[16px] font-semibold text-[#1A1A1A] mb-3">The CORS problem</h3>
                <p className="text-[15px] text-[#555555] leading-relaxed">
                  Browsers block direct API calls to Anthropic for security reasons. The fix was a Vercel
                  serverless function that proxies requests server-side, keeping the API key out of the
                  browser bundle entirely. Local dev uses an Express proxy on port 3001; production uses
                  the Vercel function automatically.
                </p>
              </div>
            </div>

            <div
              style={{
                background: '#EFF6FF',
                borderLeft: '4px solid #2563EB',
                borderRadius: '0 8px 8px 0',
                padding: '24px',
              }}
            >
              <h3 className="text-[16px] font-semibold text-[#1A1A1A] mb-1">
                The system prompt as a design spec
              </h3>
              <p className="text-[14px] text-[#555555] mb-5">Every constraint is a UX decision.</p>

              <div className="space-y-3">
                {systemPromptRows.map(([constraint, effect]) => (
                  <div key={constraint} className="grid grid-cols-[1fr_auto_1fr] gap-3 text-[14px]">
                    <span className="text-[#1A1A1A] font-medium">{constraint}</span>
                    <span className="text-[#2563EB]">→</span>
                    <span className="text-[#555555]">{effect}</span>
                  </div>
                ))}
              </div>

              <p className="text-[14px] text-[#555555] italic mt-5">
                &ldquo;Prompt engineering is product design.&rdquo;
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
