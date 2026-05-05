import Image from 'next/image'
import Link from 'next/link'
import MetricsBar from '@/components/case-studies/MetricsBar'
import BeforeAfter from '@/components/case-studies/BeforeAfter'
import ArchitectureFlow from '@/components/case-studies/ArchitectureFlow'
import StickyContact from '@/components/StickyContact'
import { getNextCaseStudy, projectImages } from '@/lib/case-studies'

export const metadata = {
  title: 'First Step AI, Chris Michalak',
  description:
    'An AI-powered onboarding agent that walks e-commerce sellers through 4 questions and delivers a personalized automation recommendation. Built in 6 weeks with 4 Anthropic certifications.',
}

const PRODUCT_URL = 'https://first-step-ai-ten.vercel.app'

const badges = [
  { label: 'Independent project', cls: 'bg-[#F3F4F6] text-[#555555]' },
  { label: 'AI Product Design', cls: 'bg-[#EFF6FF] text-[#2563EB]' },
  { label: 'React + Claude API', cls: 'bg-[#EFF6FF] text-[#2563EB]' },
  { label: 'Live product', cls: 'bg-[#F0FDF4] text-[#16A34A]' },
]

const insightCards = [
  {
    label: 'The gap',
    body: 'Not technology. Translation. Getting from "AI exists" to "here is what you do on Monday morning."',
  },
  {
    label: 'The user',
    body: 'Solo Shopify and Etsy sellers. 50-500 orders per month. Running everything alone.',
  },
  {
    label: 'The opportunity',
    body: 'No trusted, plain-language guide existed. Every competitor was either too generic or too technical.',
  },
]

const systemPromptRows = [
  ['Name one specific tool', 'Eliminates decision fatigue'],
  ['Explain the problem in one sentence', 'User sees themselves immediately'],
  ['Give exactly 3 steps for today', 'Achievable, not overwhelming'],
  ['Estimate time savings in hours', 'Concrete, universal ROI'],
  ['State the monthly cost', 'Removes the final objection'],
  ['Write for a busy owner with 10 minutes', 'Persona embedded in output'],
]

const decisionsRows = [
  ['6 fields visible', '4 questions, one at a time', 'Lower cognitive load'],
  ['Email in intake', 'Email after recommendation', 'Value before ask'],
  ['Multiple tools', 'One specific tool', 'Removes decision fatigue'],
  ['"Free" in CTAs', '"Free" removed', 'Avoids zero anchoring'],
  ['Browser API call', 'Vercel serverless proxy', 'Key stays server-side'],
  ['Open-ended prompt', 'Constrained output', 'Consistent results'],
]

const learnedCards = [
  {
    num: '01',
    title: 'Prompt engineering is product design',
    body: 'Writing the system prompt was identical to writing a design spec. Every constraint shaped the user experience. The iteration process was no different from any other design work.',
  },
  {
    num: '02',
    title: 'Ship early, learn from reality',
    body: 'A working product on Vercel surfaced problems no prototype would catch: CORS errors, API key exposure, and port conflicts. Shipping fast is a research method.',
  },
  {
    num: '03',
    title: 'Build and learn simultaneously',
    body: 'Completing 4 Anthropic certifications while building meant every concept was applied the same day. Learning was faster, the build was better.',
  },
]

const resultCards = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 12l3 3 5-5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Shipped',
    body: 'Live product deployed to Vercel. Working end to end: intake, Claude API call, personalized recommendation, email capture.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2">
        <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Certified',
    body: '4 Anthropic Skilljar certifications earned alongside the build: Claude 101, Claude Code in Action, Agent Skills, Building with the Claude API.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2">
        <rect x="2" y="5" width="20" height="4" rx="1" />
        <rect x="2" y="11" width="20" height="4" rx="1" />
        <rect x="2" y="17" width="20" height="4" rx="1" />
      </svg>
    ),
    title: 'Foundation set',
    body: 'Supabase integration, email sending via Resend, and expanded pattern library identified as next milestones.',
  },
]

const galleryItems = [
  {
    src: '/assets/first-step-ai/first_step_ai_userflow_1.png',
    caption: 'Landing page: hero, value proposition, and feature cards',
  },
  {
    src: '/assets/first-step-ai/First_step_ai_userflow_2.png',
    caption: 'Intake flow: Step 3 of 4, one question at a time',
  },
  {
    src: '/assets/first-step-ai/First_step_ai_userflow_3.png',
    caption: 'AI Action Plan: tool recommendation, 3 steps, ROI stats, and email capture',
  },
]

export default function FirstStepAICaseStudy() {
  const next = getNextCaseStudy('first-step-ai')

  return (
    <>
      <article
        className="min-h-screen pb-20 bg-[#FAFAF9]"
        style={{ fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}
      >

        {/* ── 1. HERO ── */}
        <div className="bg-[#F3F2EF] pt-28 pb-12">
          <div className="max-w-4xl mx-auto px-6">
            <Link
              href="/work"
              className="inline-flex items-center gap-1 text-[#717171] hover:text-[#1A1A1A] text-sm transition-colors mb-10 min-h-[44px]"
            >
              ← All Work
            </Link>

            <p className="text-[#2563EB] text-sm font-medium tracking-widest uppercase mb-3">
              Independent Project
            </p>

            <h1 className="text-[48px] font-semibold text-[#1A1A1A] mb-6 leading-tight">
              First Step AI
            </h1>

            <div className="flex flex-wrap gap-2 mb-5">
              {badges.map((b) => (
                <span key={b.label} className={`${b.cls} text-xs font-medium px-3 py-1.5 rounded-full`}>
                  {b.label}
                </span>
              ))}
            </div>

            <p className="text-[#555555] text-[16px] leading-relaxed mb-8 max-w-2xl">
              An AI onboarding agent that walks e-commerce sellers through 4 questions and delivers a
              personalized automation recommendation. Built in 6 weeks with 4 Anthropic certifications.
            </p>

            <a
              href={PRODUCT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-sm font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Try First Step AI →
            </a>
          </div>

          <div className="max-w-4xl mx-auto px-6 mt-10">
            <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-[#E5E5E5] shadow-sm">
              <Image
                src="/assets/first-step-ai/cover.svg"
                alt="First Step AI - AI onboarding agent for e-commerce sellers"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
        </div>

        {/* ── 2. METRICS BAR ── */}
        <div className="max-w-4xl mx-auto px-6 py-12">
          <MetricsBar />
        </div>

        {/* ── 3. THE PROBLEM ── */}
        <div className="max-w-4xl mx-auto px-6 mb-16">
          <h2 className="text-[22px] font-semibold text-[#1A1A1A] mb-6">The problem</h2>

          <p className="text-[18px] font-semibold text-[#1A1A1A] mb-4">
            82% of small businesses think AI doesn&apos;t apply to them.
          </p>

          <p className="text-[15px] text-[#555555] leading-relaxed mb-8 max-w-2xl">
            That number isn&apos;t about capability - it&apos;s about clarity. E-commerce sellers running
            Shopify and Etsy stores know AI could help. They just don&apos;t know which tool, for which
            workflow, set up in which order.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {insightCards.map((c) => (
              <div key={c.label} className="bg-white border border-[#E5E5E5] rounded-xl p-5">
                <p className="text-[13px] font-semibold text-[#2563EB] uppercase tracking-wide mb-2">
                  {c.label}
                </p>
                <p className="text-[14px] text-[#555555] leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── 4. THE PRODUCT ── */}
        <div className="bg-[#F3F2EF] py-16 mb-16">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-[22px] font-semibold text-[#1A1A1A] mb-8">The product</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <p className="text-[17px] font-semibold text-[#1A1A1A] mb-5">
                  Answer 4 questions. Get a specific action plan.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    'One specific tool recommendation',
                    '3 setup steps you can do today',
                    'Time savings estimate and monthly cost',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="text-[#2563EB] mt-0.5 flex-shrink-0 font-medium">✓</span>
                      <span className="text-[15px] text-[#555555]">{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={PRODUCT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-[14px] font-semibold px-5 py-2.5 rounded-lg transition-colors"
                >
                  Try First Step AI →
                </a>
              </div>

              <div
                className="rounded-xl overflow-hidden"
                style={{ border: '1px solid #E5E5E5', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}
              >
                <Image
                  src="/assets/first-step-ai/First_step_ai_userflow_3.png"
                  alt="First Step AI result card showing AI Action Plan"
                  width={600}
                  height={800}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ── 5. DESIGN PROCESS ── */}
        <div className="max-w-4xl mx-auto px-6 mb-16">
          <h2 className="text-[22px] font-semibold text-[#1A1A1A] mb-6">How I designed it</h2>

          <div className="space-y-6 mb-10">
            <div>
              <h3 className="text-[16px] font-semibold text-[#1A1A1A] mb-2">Discovery</h3>
              <p className="text-[15px] text-[#555555] leading-relaxed">
                The target user was the solo Shopify seller doing 50-500 orders a month, running operations
                largely alone. Key insight: the problem wasn&apos;t awareness. Sellers knew AI existed.
                They didn&apos;t know which tool, for which workflow, set up in which order.
              </p>
            </div>
            <div>
              <h3 className="text-[16px] font-semibold text-[#1A1A1A] mb-2">Define</h3>
              <p className="text-[15px] text-[#555555] leading-relaxed">
                The core product decision was to deliver one recommendation, not many. Every competing
                product gives users a list of AI tools to explore. First Step AI gives them one specific
                thing to do today, which shaped the entire intake and output design.
              </p>
            </div>
          </div>

          <div className="bg-[#F5F7FA] border border-[#E5E5E5] rounded-xl p-6 mb-8">
            <p className="text-[13px] font-semibold text-[#2563EB] uppercase tracking-wide mb-5">
              The biggest design decision
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <BeforeAfter />

              <div className="flex flex-col gap-3">
                <div
                  className="rounded-xl overflow-hidden"
                  style={{ border: '1px solid #E5E5E5', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}
                >
                  <Image
                    src="/assets/first-step-ai/First_step_ai_userflow_2.png"
                    alt="Intake question screen showing step progress"
                    width={600}
                    height={800}
                    className="w-full h-auto"
                  />
                </div>
                <p className="text-[13px] text-[#555555] italic text-center">
                  One question at a time with visible progress
                </p>
              </div>
            </div>
          </div>

          <p className="text-[15px] text-[#555555] leading-relaxed">
            Removing business name and email from the intake reduced it from 6 fields to 4 questions.
            Moving email capture to after the recommendation, when value has already been delivered,
            produced a higher-quality list. Both decisions came from the same principle: earn trust before
            asking for anything.
          </p>
        </div>

        {/* ── 6. TECHNICAL ARCHITECTURE ── */}
        <div className="bg-[#F3F2EF] py-16 mb-16">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-[22px] font-semibold text-[#1A1A1A] mb-4">How I built it</h2>

            <p className="text-[15px] text-[#555555] leading-relaxed mb-10">
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
        </div>

        {/* ── 7. KEY DESIGN DECISIONS TABLE ── */}
        <div className="max-w-4xl mx-auto px-6 mb-16">
          <h2 className="text-[22px] font-semibold text-[#1A1A1A] mb-6">Key decisions</h2>

          <div className="border border-[#E5E5E5] rounded-xl overflow-hidden">
            <table className="w-full text-[14px]">
              <thead>
                <tr className="bg-[#F5F7FA]">
                  <th className="text-left px-5 py-3 font-semibold text-[#1A1A1A]">Started with</th>
                  <th className="text-left px-5 py-3 font-semibold text-[#1A1A1A]">Changed to</th>
                  <th className="text-left px-5 py-3 font-semibold text-[#1A1A1A]">Because</th>
                </tr>
              </thead>
              <tbody>
                {decisionsRows.map(([before, after, why], i) => (
                  <tr key={before} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAFA]'}>
                    <td className="px-5 py-3 text-[#555555]">
                      <s>{before}</s>
                    </td>
                    <td className="px-5 py-3 text-[#2563EB] font-medium">{after}</td>
                    <td className="px-5 py-3 text-[#555555]">{why}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ── 8. WHAT I LEARNED ── */}
        <div className="max-w-4xl mx-auto px-6 mb-16">
          <h2 className="text-[22px] font-semibold text-[#1A1A1A] mb-6">What I learned</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {learnedCards.map((c) => (
              <div key={c.num} className="bg-white border border-[#E5E5E5] rounded-xl p-6">
                <p className="text-[28px] font-bold text-[#2563EB] leading-none mb-3">{c.num}</p>
                <h3 className="text-[15px] font-semibold text-[#1A1A1A] mb-2">{c.title}</h3>
                <p className="text-[14px] text-[#555555] leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── 9. RESULTS ── */}
        <div className="max-w-4xl mx-auto px-6 mb-16">
          <h2 className="text-[22px] font-semibold text-[#1A1A1A] mb-6">Results</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {resultCards.map((c) => (
              <div key={c.title} className="bg-white border border-[#E5E5E5] rounded-xl p-6">
                <div className="mb-3">{c.icon}</div>
                <h3 className="text-[15px] font-semibold text-[#1A1A1A] mb-2">{c.title}</h3>
                <p className="text-[14px] text-[#555555] leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── 10. PRODUCT GALLERY ── */}
        <div className="max-w-4xl mx-auto px-6 mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px flex-1 bg-[#E5E5E5]" aria-hidden="true" />
            <p className="text-[#717171] text-xs uppercase tracking-widest font-medium whitespace-nowrap">
              The full experience
            </p>
            <div className="h-px flex-1 bg-[#E5E5E5]" aria-hidden="true" />
          </div>

          <div className="space-y-8">
            {galleryItems.map((img) => (
              <figure key={img.src}>
                <div
                  className="overflow-hidden rounded-xl"
                  style={{ border: '1px solid #E5E5E5', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}
                >
                  <Image
                    src={img.src}
                    alt={img.caption}
                    width={1200}
                    height={800}
                    className="w-full h-auto"
                  />
                </div>
                <figcaption
                  style={{
                    fontSize: '13px',
                    color: '#555555',
                    fontStyle: 'italic',
                    textAlign: 'center',
                    marginTop: '10px',
                  }}
                >
                  {img.caption}
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href={PRODUCT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-[#2563EB] text-[#2563EB] bg-white hover:bg-[#EFF6FF] text-[14px] font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Try First Step AI →
            </a>
          </div>
        </div>

        {/* ── 11. NEXT PROJECT ── */}
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
                  <p className="text-[#2563EB] text-xs font-medium tracking-wide uppercase mb-1">
                    {next.company}
                  </p>
                  <h3 className="text-[#1A1A1A] font-semibold text-xl group-hover:text-[#2563EB] transition-colors">
                    {next.title}
                  </h3>
                  <p className="text-[#717171] text-sm mt-0.5">{next.description}</p>
                </div>
              </div>
              <span
                className="text-[#2563EB] text-2xl group-hover:translate-x-1 transition-transform flex-shrink-0 ml-4"
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
