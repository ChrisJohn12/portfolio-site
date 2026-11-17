import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { getCaseStudy, getNextCaseStudy, projectImages } from '@/lib/case-studies'
import MarkdownRenderer from '@/components/MarkdownRenderer'
import ShipDeezStatBar from '@/components/case-studies/ShipDeezStatBar'
import ShipDeezAnchorNav from '@/components/case-studies/ShipDeezAnchorNav'
import ShipDeezConstraints from '@/components/case-studies/ShipDeezConstraints'
import CollapsibleSection from '@/components/case-studies/CollapsibleSection'
import StickyContact from '@/components/StickyContact'

export const metadata = {
  title: 'ShipDeez, Chris Michalak',
  description: 'End-to-end UX for a shipping startup, from brand identity to live product in 10 business days.',
}

export default function ShipDeezPage() {
  const cs = getCaseStudy('shipdeez')
  if (!cs) notFound()

  const images = projectImages['shipdeez'] ?? []
  const coverImage = images[0]
  const next = getNextCaseStudy('shipdeez')

  const metaItems = [
    { label: 'Role', value: cs.role },
    { label: 'Timeline', value: cs.duration },
    { label: 'Tools', value: cs.tools },
  ].filter((item) => item.value)

  // Split content into sections for selective rendering/collapsing
  const splitContent = (content: string) => {
    // Extract sections using multiline regex with lookahead for next heading
    const problemMatch = content.match(/^## The Problem\n([\s\S]*?)(?=^##)/m)
    const constraintsMatch = content.match(/^## The Constraints\n([\s\S]*?)(?=^##)/m)
    const designDecisionsStart = content.match(/^## (.+Biggest Design Call.+)\n([\s\S]*?)(?=^## The Guest Flow)/m)
    const screensMatch = content.match(/^## The Guest Flow\n([\s\S]*?)(?=^## Design System)/m)
    const designSystemMatch = content.match(/^## Design System\n([\s\S]*?)(?=^## AI in My Workflow)/m)
    const aiMatch = content.match(/^## AI in My Workflow\n([\s\S]*?)(?=^## Analytics Foundation)/m)
    const analyticsMatch = content.match(/^## Analytics Foundation\n([\s\S]*?)(?=^## What Was Delivered)/m)
    const resultsMatch = content.match(/^## What Was Delivered\n([\s\S]*?)(?=^##|$)/m)
    
    return {
      problemMatch,
      constraintsMatch,
      designDecisionsStart,
      screensMatch,
      designSystemMatch,
      aiMatch,
      analyticsMatch,
      resultsMatch,
    }
  }

  const { problemMatch, constraintsMatch, designDecisionsStart, screensMatch, designSystemMatch, aiMatch, analyticsMatch, resultsMatch } = splitContent(cs.content)

  // Remove The Constraints section from content (will be replaced with cards)
  let mainContent = cs.content
  const sectionsToRemove = [
    constraintsMatch?.[0],
    designSystemMatch?.[0],
    aiMatch?.[0],
    analyticsMatch?.[0],
  ].filter(Boolean)

  sectionsToRemove.forEach((section) => {
    mainContent = mainContent.replace(section as string, '')
  })

  return (
    <>
      <article className="min-h-screen pb-20">
        {/* ── Hero Banner ── */}
        <div className="bg-[#F3F2EF] pt-28 pb-12">
          <div className="max-w-4xl mx-auto px-6">
            <Link
              href="/work"
              className="inline-flex items-center gap-1 text-[#717171] hover:text-[#1A1A1A] text-sm transition-colors mb-10 min-h-[44px]"
            >
              ← All Work
            </Link>

            <p className="text-[#C8641A] text-sm font-medium tracking-widest uppercase mb-3">
              {cs.company}
            </p>
            <h1 className="text-[48px] font-semibold text-[#1A1A1A] mb-8 leading-tight">
              {cs.title}
            </h1>

            {/* Meta strip */}
            <div className="flex flex-wrap gap-3">
              {metaItems.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-2 bg-white border border-[#E5E5E5] rounded-full px-4 py-2"
                >
                  <span className="text-[#717171] text-xs font-medium uppercase tracking-wide">
                    {item.label}
                  </span>
                  <span className="text-[#1A1A1A] text-sm">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Stat Bar ── */}
          <div className="max-w-4xl mx-auto px-6 mt-10 mb-6">
            <ShipDeezStatBar />
          </div>

          {/* ── Anchor Navigation ── */}
          <div className="max-w-4xl mx-auto px-6">
            <ShipDeezAnchorNav />
          </div>

          {/* Cover image */}
          {coverImage && (
            <div className="max-w-4xl mx-auto px-6 mt-10">
              <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-[#E5E5E5] shadow-sm">
                <Image
                  src={coverImage.src}
                  alt={coverImage.alt}
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
          )}
        </div>

        {/* ── Case Study Content with sections ── */}
        <div className="max-w-4xl mx-auto px-6 mb-16">
          {/* The Problem Section */}
          <div id="problem">
            {problemMatch && (
              <MarkdownRenderer content={`## The Problem\n${problemMatch[1]}`} />
            )}
          </div>

          {/* The Constraints Section (converted to cards) */}
          <div id="constraints" className="mb-16">
            <h2 className="text-[22px] font-semibold text-[#1A1A1A] mb-6">The Constraints</h2>
            <ShipDeezConstraints />
          </div>

          {/* Design Decisions and Screens sections from main content */}
          <div id="decisions">
            <MarkdownRenderer content={mainContent} />
          </div>

          {/* Screens section ending */}
          <div id="screens" className="mb-16" />

          {/* Collapsible: Design System */}
          <CollapsibleSection id="system" label="Design system and component library">
            {designSystemMatch && (
              <MarkdownRenderer content={`## Design System\n${designSystemMatch[1]}`} />
            )}
          </CollapsibleSection>

          {/* Collapsible: AI in My Workflow */}
          <CollapsibleSection id="ai" label="How I used AI in this process">
            {aiMatch && (
              <MarkdownRenderer content={`## AI in My Workflow\n${aiMatch[1]}`} />
            )}
          </CollapsibleSection>

          {/* Collapsible: Analytics Foundation */}
          <CollapsibleSection id="analytics" label="Analytics instrumentation plan">
            {analyticsMatch && (
              <MarkdownRenderer content={`## Analytics Foundation\n${analyticsMatch[1]}`} />
            )}
          </CollapsibleSection>

          {/* Results section */}
          <div id="results" className="mb-16">
            {resultsMatch && (
              <MarkdownRenderer content={`## What Was Delivered\n${resultsMatch[1]}`} />
            )}
          </div>
        </div>

        {/* ── Next Project ── */}
        {next && (
          <div className="max-w-4xl mx-auto px-6 mt-16 pt-10 border-t border-[#E5E5E5]">
            <p className="text-[#717171] text-xs uppercase tracking-widest font-medium mb-4">
              Next Project
            </p>
            <Link
              href={`/work/${next.slug}`}
              className="group flex items-center justify-between p-6 rounded-xl bg-white border border-[#E5E5E5] hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)] transition-all duration-200"
            >
              <div className="flex items-center gap-5">
                {projectImages[next.slug]?.[0] && (
                  <div className="relative w-16 h-16 rounded-xl overflow-hidden border border-[#E5E5E5] flex-shrink-0 hidden sm:block">
                    <Image
                      src={projectImages[next.slug][0].src}
                      alt={`${next.title} thumbnail`}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                )}
                <div>
                  <p className="text-[#C8641A] text-xs font-medium tracking-wide uppercase mb-1">
                    {next.company}
                  </p>
                  <h3 className="text-[#1A1A1A] font-semibold text-xl group-hover:text-[#C8641A] transition-colors">
                    {next.title}
                  </h3>
                  <p className="text-[#717171] text-sm mt-0.5">{next.description}</p>
                </div>
              </div>
              <span
                className="text-[#C8641A] text-2xl group-hover:translate-x-1 transition-transform flex-shrink-0 ml-4"
                aria-hidden="true"
              >
                →
              </span>
            </Link>
          </div>
        )}
      </article>

      <StickyContact />
    </>
  )
}
