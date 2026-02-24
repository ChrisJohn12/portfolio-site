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
    impact: 'Arrived at stakeholder reviews with complete platform integration mapping. Normally takes days of back-and-forth with engineering.',
  },
  {
    name: 'GPT',
    use: 'UX flow stress-testing for edge cases, failure-state scenario planning, failure-state UX rules documentation.',
    project: 'ShipDeez',
    projectSlug: 'shipdeez',
    impact: 'Generated the failure-state UX rules document covering insufficient wallet funds, address verification failures, and mid-payment abandonment.',
  },
  {
    name: 'Dovetail AI',
    use: 'Research synthesis: tagging, clustering, and surfacing patterns across interview transcripts and field notes.',
    project: 'Union Pacific',
    projectSlug: 'union-pacific',
    impact: 'Cut research synthesis turnaround by ~40%, enabling faster decision cycles across multiple business units simultaneously.',
  },
  {
    name: 'Quantum Metrics',
    use: 'Behavioral analytics AI for identifying usage patterns across digital properties, prioritizing high-impact usability issues.',
    project: 'Union Pacific',
    projectSlug: 'union-pacific',
    impact: 'Identified which pages and flows had the highest-impact usability issues, directing research effort to highest ROI areas.',
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
    body: 'The most tedious and time-sensitive part of research is turning raw notes into patterns. AI tools like Dovetail dramatically accelerate this, letting me run more research cycles in the same timeframe.',
  },
  {
    title: 'Documentation and handoff are underrated use cases.',
    body: 'Designers often under-document. I use AI to accelerate the creation of design system specs, developer handoff packages, and technical documentation. It\'s critical but time-consuming to do well manually.',
  },
];

export default function AIFluencyPage() {
  return (
    <div className="min-h-screen pt-28 pb-24 px-6 max-w-6xl mx-auto">
      <header className="mb-16 max-w-3xl">
        <p className="text-[#C8641A] text-sm font-medium tracking-widest uppercase mb-3">
          AI-Enhanced Practice
        </p>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-gray-900">
          AI as a multiplier,<br />not a replacement.
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed">
          I&apos;ve integrated AI tools into every phase of my design practice,
          from architecture planning and research synthesis to documentation and
          developer handoff. Here&apos;s how it actually works in my workflow.
        </p>
      </header>

      {/* Principles */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold mb-8 pb-3 border-b-2 border-[#C8641A] text-gray-900">
          How I Think About AI in Design
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {principles.map((p) => (
            <div key={p.title} className="p-6 rounded-xl bg-white border border-gray-200 shadow-sm">
              <h3 className="text-gray-900 font-semibold text-lg mb-2">{p.title}</h3>
              <p className="text-gray-500 leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tool examples */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold mb-8 pb-3 border-b-2 border-[#C8641A] text-gray-900">
          AI Tools in My Work: Real Examples
        </h2>
        <div className="space-y-5">
          {tools.map((tool) => (
            <div key={tool.name + tool.project} className="rounded-xl bg-white border border-gray-200 shadow-sm overflow-hidden">
              <div className="p-6">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-gray-900 font-bold text-lg">{tool.name}</span>
                    <Link
                      href={`/work/${tool.projectSlug}`}
                      className="text-xs px-2 py-1 rounded-full bg-[#C8641A]/10 text-[#C8641A] border border-[#C8641A]/30 hover:bg-[#C8641A]/20 transition-colors"
                    >
                      {tool.project}
                    </Link>
                  </div>
                </div>
                <p className="text-gray-500 text-sm mb-3 leading-relaxed">
                  <span className="text-gray-400 uppercase text-xs tracking-wide font-medium">Used for: </span>
                  {tool.use}
                </p>
                <div className="flex items-start gap-2 bg-[#C8641A]/5 rounded-lg p-3 border border-[#C8641A]/20">
                  <span className="text-[#C8641A] text-sm mt-0.5 flex-shrink-0">→</span>
                  <p className="text-gray-600 text-sm leading-relaxed">{tool.impact}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* The bigger point */}
      <section className="rounded-2xl border border-[#C8641A]/30 bg-[#C8641A]/5 p-8 md:p-12">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">
          The point isn&apos;t the tools. It&apos;s what they enable.
        </h2>
        <p className="text-gray-600 leading-relaxed mb-6 max-w-2xl">
          In a 10-day product sprint, AI compression is the difference between
          shipping everything and cutting scope. In a long-running enterprise engagement,
          it&apos;s the difference between one research cycle per quarter and three.
          I use AI to do more research, not less, and to document that research
          well enough that it actually drives decisions.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/work/shipdeez"
            className="inline-flex items-center gap-2 bg-[#C8641A] hover:bg-[#e07820] text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors"
          >
            See it in ShipDeez →
          </Link>
          <Link
            href="/work/union-pacific"
            className="inline-flex items-center gap-2 border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 font-medium px-5 py-2.5 rounded-lg text-sm transition-colors"
          >
            See it in Union Pacific →
          </Link>
        </div>
      </section>
    </div>
  );
}
