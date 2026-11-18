import Link from 'next/link';

export const metadata = {
  title: 'AI Fluency, Chris Michalak',
  description:
    'How Chris Michalak uses AI tools to accelerate UX research and design, not replace judgment.',
};

const tools = [
  {
    name: 'Claude',
    use: 'Architecture planning, design system documentation, developer handoff specs, copy and microcopy drafting.',
    project: 'ShipDeez',
    projectSlug: 'shipdeez',
    impact: 'Arrived at the first stakeholder review with a draft platform integration map the team could validate, instead of starting from a blank page.',
  },
  {
    name: 'GPT',
    use: 'Stress-testing flows for edge cases and failure states before I designed them.',
    project: 'ShipDeez',
    projectSlug: 'shipdeez',
    impact: 'Helped me think through insufficient wallet funds, address verification failures and mid-payment abandonment. The failure-state UX rules document that came out of it was my deliverable.',
  },
  {
    name: 'Dovetail AI',
    use: 'Research synthesis: tagging, clustering, and surfacing patterns across interview transcripts and field notes.',
    project: 'Union Pacific',
    projectSlug: 'union-pacific',
    impact: 'In my estimate it cut synthesis time by about 40% compared with tagging by hand (my estimate, not measured). The consistency mattered more to me than the speed: tags and groupings stayed steady across sessions.',
  },
  {
    name: 'Quantum Metrics',
    use: 'Behavioral analytics for analyzing usability metrics across digital properties.',
    project: 'Union Pacific',
    projectSlug: 'union-pacific',
    impact: 'An input I used to analyze usability metrics. I do not claim a measured result from it.',
  },
];

const principles = [
  {
    title: 'AI compresses time, not judgment.',
    body: 'I use AI to move faster between raw data and shareable artifact. The design judgment, including what to prioritize, how to frame the problem, and what the user actually needs, still comes from me.',
  },
  {
    title: 'The output is only as good as the input.',
    body: 'Effective AI use in design requires knowing how to prompt, what to verify, and when to override the output. I treat AI like a very fast junior collaborator. Useful, but not autonomous.',
  },
  {
    title: 'Research synthesis is where AI earns its keep.',
    body: 'The most tedious and time-sensitive part of research is turning raw notes into patterns. AI tools like Dovetail speed this up and keep tags consistent, so more of my time goes to what the patterns mean.',
  },
  {
    title: 'Documentation and handoff are underrated use cases.',
    body: 'Designers often under-document. I use AI to accelerate the creation of design system specs, developer handoff packages, and technical documentation. It\'s critical but time-consuming to do well manually.',
  },
];

export default function AIFluencyPage() {
  return (
    <div className="min-h-screen pt-28 pb-20 px-6 max-w-7xl mx-auto">
      <header className="mb-16 max-w-3xl">
        <p className="text-[#2563EB] text-sm font-medium tracking-widest uppercase mb-3">
          AI-Enhanced Practice
        </p>
        <h1 className="text-[48px] font-semibold mb-6 leading-tight text-[#1A1A1A]">
          AI as a multiplier,<br />not a replacement.
        </h1>
        <p className="text-[#555555] text-lg leading-relaxed">
          I use AI tools across my design practice, from architecture planning and
          research synthesis to documentation and developer handoff, and I build products
          with them. Here&apos;s how it actually works.
        </p>
      </header>

      {/* Principles */}
      <section className="mb-20" aria-labelledby="principles-heading">
        <h2 id="principles-heading" className="text-[32px] font-semibold mb-8 pb-4 border-b border-[#E5E5E5] text-[#1A1A1A]">
          How I Think About AI in Design
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {principles.map((p) => (
            <div key={p.title} className="p-6 rounded-xl bg-white border border-[#E5E5E5]">
              <h3 className="text-[#1A1A1A] font-medium text-[22px] leading-snug mb-2">{p.title}</h3>
              <p className="text-[#555555] leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tool examples */}
      <section className="mb-20" aria-labelledby="tools-heading">
        <h2 id="tools-heading" className="text-[32px] font-semibold mb-8 pb-4 border-b border-[#E5E5E5] text-[#1A1A1A]">
          AI Tools in My Work: Real Examples
        </h2>
        <div className="space-y-5">
          {tools.map((tool) => (
            <div key={tool.name + tool.project} className="rounded-xl bg-white border border-[#E5E5E5] overflow-hidden">
              <div className="p-6">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-[#1A1A1A] font-semibold text-lg">{tool.name}</span>
                    <Link
                      href={`/work/${tool.projectSlug}`}
                      className="text-[13px] font-medium px-[14px] py-[6px] rounded-full bg-[#EFF6FF] text-[#2563EB] hover:bg-[#DBEAFE] transition-colors"
                    >
                      {tool.project}
                    </Link>
                  </div>
                </div>
                <p className="text-[#555555] text-sm mb-3 leading-relaxed">
                  <span className="text-[#717171] uppercase text-xs tracking-wide font-medium">Used for: </span>
                  {tool.use}
                </p>
                <div className="flex items-start gap-2 bg-[#EFF6FF] rounded-lg p-3 border border-[#2563EB]/20">
                  <span className="text-[#2563EB] text-sm mt-0.5 flex-shrink-0" aria-hidden="true">→</span>
                  <p className="text-[#555555] text-sm leading-relaxed">{tool.impact}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Building AI products */}
      <section className="mb-20" aria-labelledby="building-heading">
        <h2 id="building-heading" className="text-[32px] font-semibold mb-8 pb-4 border-b border-[#E5E5E5] text-[#1A1A1A]">
          Designing AI Products, Not Only Using Them
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="p-6 rounded-xl bg-white border border-[#E5E5E5]">
            <h3 className="text-[#1A1A1A] font-medium text-[22px] leading-snug mb-2">The prompt is part of the product spec.</h3>
            <p className="text-[#555555] leading-relaxed">
              In First Step AI, the system prompt encodes the product logic: name one specific tool,
              explain the problem in one sentence, give exactly three setup steps, estimate weekly
              hours saved, state the monthly cost, and write for a busy owner. That constrained the
              output enough that each field maps one to one onto the result card, so the interface
              always has something consistent to show.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-white border border-[#E5E5E5]">
            <h3 className="text-[#1A1A1A] font-medium text-[22px] leading-snug mb-2">Design the flow around the model.</h3>
            <p className="text-[#555555] leading-relaxed">
              I cut the intake from six fields to four questions, asked one at a time, and moved
              email capture to after the recommendation so the user gets value before I ask for
              anything. These are design decisions with reasons. The case study reports early
              signals only, and says what I plan to measure next.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-white border border-[#E5E5E5]">
            <h3 className="text-[#1A1A1A] font-medium text-[22px] leading-snug mb-2">Build with it, and keep the judgment.</h3>
            <p className="text-[#555555] leading-relaxed">
              I built First Step AI with Claude Code and wrote custom skills to scaffold components
              and intake questions. This portfolio is built the same way, and its assistant runs on
              the Anthropic API. The product decisions stayed mine.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-white border border-[#E5E5E5]">
            <h3 className="text-[#1A1A1A] font-medium text-[22px] leading-snug mb-2">Four Anthropic certifications.</h3>
            <p className="text-[#555555] leading-relaxed">
              Claude 101, Claude Code in Action, Introduction to Agent Skills, and Building with
              the Claude API, completed alongside the build.
            </p>
          </div>
        </div>
        <Link
          href="/work/first-step-ai"
          className="inline-flex items-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-medium px-5 py-2.5 rounded-lg text-sm transition-colors min-h-[44px]"
        >
          Read the First Step AI case study →
        </Link>
      </section>

      {/* The bigger point */}
      <section className="rounded-xl border border-[#2563EB]/20 bg-[#EFF6FF] p-8 md:p-12" aria-labelledby="summary-heading">
        <h2 id="summary-heading" className="text-[32px] font-semibold mb-4 text-[#1A1A1A]">
          The point isn&apos;t the tools. It&apos;s what they enable.
        </h2>
        <p className="text-[#555555] leading-relaxed mb-6 max-w-2xl">
          In a 10-day product sprint, AI compression is the difference between
          shipping everything and cutting scope. In a long-running enterprise engagement,
          it frees time for the work that needs judgment.
          I use AI to do more research, not less, and to document that research
          well enough that it actually drives decisions.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/work/shipdeez"
            className="inline-flex items-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-medium px-5 py-2.5 rounded-lg text-sm transition-colors min-h-[44px]"
          >
            See it in ShipDeez →
          </Link>
          <Link
            href="/work/union-pacific"
            className="inline-flex items-center gap-2 border border-[#E5E5E5] hover:bg-white text-[#1A1A1A] font-medium px-5 py-2.5 rounded-lg text-sm transition-colors min-h-[44px]"
          >
            See it in Union Pacific →
          </Link>
        </div>
      </section>
    </div>
  );
}
