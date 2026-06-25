import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { getCaseStudy, getNextCaseStudy, projectImages } from '@/lib/case-studies'
import AnchorNav from '@/components/case-studies/AnchorNav'
import MarkdownRenderer from '@/components/MarkdownRenderer'
import CollapsibleSection from '@/components/case-studies/CollapsibleSection'
import StickyContact from '@/components/StickyContact'

export async function generateMetadata() {
  const cs = getCaseStudy('union-pacific')
  if (!cs) return {}

  return {
    title: `${cs.title}, Chris Michalak`,
    description: cs.description,
  }
}

export default function UnionPacificPage() {
  const cs = getCaseStudy('union-pacific')
  if (!cs) notFound()

  const images = projectImages['union-pacific'] ?? []
  const coverImage = images[0]
  const next = getNextCaseStudy('union-pacific')

  const metaItems = [
    { label: 'Role', value: cs.role },
    { label: 'Timeline', value: cs.duration },
    { label: 'Tools', value: cs.tools },
  ].filter((item) => item.value)

  const match = cs.content.match(/([\s\S]*?)## Supply Chain & Warehouse Research\n\n([\s\S]*?)\n### UP\.com Website Modernization\n\n([\s\S]*?)\n## AI in My Workflow\n\n([\s\S]*?)\n---\n\n## PwC conflict\n([\s\S]*)/)
  const beforeContent = match?.[1] ?? cs.content
  const supplyChainContent = match?.[2] ?? ''
  const upcomContent = match?.[3] ?? ''
  const aiContent = match?.[4] ?? ''
  const afterContent = match?.[5] ?? ''

  return (
    <>
      <article className="min-h-screen pb-20">
        <div className="bg-[#F3F2EF] pt-28 pb-12">
          <div className="max-w-4xl mx-auto px-6">
            <Link
              href="/work"
              className="inline-flex items-center gap-1 text-[#717171] hover:text-[#1A1A1A] text-sm transition-colors mb-10 min-h-[44px]"
            >
              ← All Work
            </Link>

            <p className="text-[#2563EB] text-sm font-medium tracking-widest uppercase mb-3">
              {cs.company}
            </p>
            <h1 className="text-[48px] font-semibold text-[#1A1A1A] mb-8 leading-tight">
              {cs.title}
            </h1>

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

          <div className="max-w-4xl mx-auto px-6 mt-10">
            <div className="rounded-[20px] bg-[#F3F2EF] border border-[#E5E5E5] p-6 mb-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-[16px] bg-white border border-[#E5E5E5] p-5">
                  <p className="text-[#717171] text-xs font-semibold uppercase tracking-wide mb-2">Timeline</p>
                  <p className="text-[28px] md:text-[32px] font-semibold text-[#1A1A1A]">10 business days</p>
                </div>
                <div className="rounded-[16px] bg-white border border-[#E5E5E5] p-5">
                  <p className="text-[#717171] text-xs font-semibold uppercase tracking-wide mb-2">Key result</p>
                  <p className="text-[28px] md:text-[32px] font-semibold text-[#1A1A1A]">85% avg savings vs retail rates</p>
                </div>
              </div>
            </div>
            <div className="max-w-4xl mx-auto px-6 mt-10">
              <AnchorNav
                items={[
                  { label: 'Problem', href: '#problem' },
                  { label: 'Constraints', href: '#constraints' },
                  { label: 'Design Decisions', href: '#decisions' },
                  { label: 'Screens', href: '#screens' },
                  { label: 'System', href: '#system' },
                  { label: 'Results', href: '#results' },
                ]}
              />
            </div>
          </div>

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

        <div className="max-w-4xl mx-auto px-6 mb-16">
          <MarkdownRenderer content={beforeContent} />

          <div id="supporting-initiatives" className="mt-16">
            <h2 className="text-[32px] font-semibold text-[#1A1A1A] mb-8">Supporting Initiatives</h2>

            <h3 className="text-[22px] font-semibold text-[#1A1A1A] mb-6">Supply Chain & Warehouse Research</h3>
            <CollapsibleSection id="supply-chain-research" label="Field research: Zebra handheld workflows">
              <MarkdownRenderer content={supplyChainContent} />
            </CollapsibleSection>

            <MarkdownRenderer content={`### UP.com Website Modernization

${upcomContent}`} />

            <h2 className="text-[32px] font-semibold text-[#1A1A1A] mt-16 mb-6">AI in My Workflow</h2>
            <CollapsibleSection id="ai-workflow" label="How I used AI in this process">
              <MarkdownRenderer content={aiContent} />
            </CollapsibleSection>
          </div>

          <MarkdownRenderer content={`## PwC conflict
${afterContent}`} />
        </div>

        <StickyContact />
      </article>
    </>
  )
}
