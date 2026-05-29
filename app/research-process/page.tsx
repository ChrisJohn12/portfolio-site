import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'How I Research, Chris Michalak',
  description:
    'A look at how Chris Michalak scopes, runs, synthesizes, and connects research to product decisions.',
};

export default function ResearchProcessPage() {
  return (
    <div className="min-h-screen pt-28 pb-20 px-6 max-w-7xl mx-auto">
      <header className="mb-20 max-w-3xl">
        <p className="text-[#2563EB] text-sm font-medium tracking-widest uppercase mb-3">
          Research process
        </p>
        <h1 className="text-[48px] md:text-[56px] font-semibold mb-6 leading-tight text-[#1A1A1A]">
          How I Research
        </h1>
        <p className="text-[#555555] text-lg md:text-xl leading-relaxed mb-6">
          A look at how I scope, run, synthesize, and connect research to product decisions.
        </p>
        <p className="text-[#555555] text-base leading-relaxed">
          Most of my work starts before any design decisions are made. I&apos;ve spent the last several years embedded in enterprise environments where the cost of building the wrong thing is high and the workflows are too complex to understand from a conference room. That context shaped how I approach research — less about running a standard playbook, more about figuring out what kind of problem I&apos;m actually dealing with before deciding how to study it.
        </p>
      </header>

      <section className="space-y-16">
        <article className="rounded-3xl border border-[#E5E5E5] bg-white p-10 shadow-sm">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-[#2563EB] text-xs font-semibold tracking-widest uppercase">01 — Scoping</span>
          </div>
          <div className="space-y-6 text-[#555555] leading-relaxed text-base">
            <p>
              Before I write a discussion guide or recruit a single participant, I try to get clear on what the team actually needs to know and what decision the research is serving. A lot of research fails not because the methods were wrong but because nobody agreed upfront on what a useful answer would look like.
            </p>
            <p>
              I typically start by mapping what&apos;s already known, what&apos;s assumed, and where the real uncertainty is. That usually surfaces the actual research question underneath the one I was handed.
            </p>
          </div>
        </article>

        <article className="rounded-3xl border border-[#E5E5E5] bg-white p-10 shadow-sm">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-[#2563EB] text-xs font-semibold tracking-widest uppercase">02 — Recruiting &amp; Access</span>
          </div>
          <div className="space-y-6 text-[#555555] leading-relaxed text-base">
            <p>
              Getting to the right participants is often the hardest part, especially in enterprise contexts where users are hard to reach and protective of their time. At Union Pacific I worked through internal stakeholders to get time with warehouse workers during active shifts. At T-Mobile I coordinated access to CARE Experts and Mobile Experts across call center and retail environments.
            </p>
            <p>
              I&apos;ve learned to treat recruiting as a design problem — the framing of the ask, the timing, the incentive structure all affect who shows up and how open they are.
            </p>
          </div>
        </article>

        <article className="rounded-3xl border border-[#E5E5E5] bg-white p-10 shadow-sm">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-[#2563EB] text-xs font-semibold tracking-widest uppercase">03 — Methods I Reach For</span>
          </div>
          <div className="space-y-6 text-[#555555] leading-relaxed text-base">
            <p>
              I use mixed methods and match the approach to the question.
            </p>
            <div className="space-y-4">
              <p className="font-semibold text-[#1A1A1A]">Contextual inquiry — when I need to understand what people actually do, not what they say they do. My Fort Worth warehouse session at Union Pacific surfaced usability issues with Zebra handheld devices that no lab study would have caught.</p>
              <p className="font-semibold text-[#1A1A1A]">User feedback sessions with prototypes — when I need directional signal on a design decision quickly. Most of my T-Mobile work ran this way — testable artifacts in front of real CARE Experts inside their actual workflow context.</p>
              <p className="font-semibold text-[#1A1A1A]">Ethnographic observation — when behavior is the data. Watching 7 T-Mobile retail locations during live device upgrades told me things about billing transparency that no interview could.</p>
              <p className="font-semibold text-[#1A1A1A]">Journey mapping — when the problem is systemic and spans multiple touchpoints or teams. I&apos;ve run cross-functional mapping sessions that brought together engineering, product, CX, and operations in the same room to find where handoffs break down.</p>
              <p className="font-semibold text-[#1A1A1A]">AI-assisted synthesis — I use Dovetail AI to accelerate clustering and pattern identification across large transcript sets. It cut my synthesis cycles by ~40% at Union Pacific without replacing the analytical judgment about what the patterns actually mean.</p>
            </div>
          </div>

          <figure className="mt-10 rounded-3xl overflow-hidden border border-[#E5E5E5] bg-[#F8F8F7]">
            <Image
              src="/assets/union-pacific/photos/FW-warehouse.jpg"
              alt="Contextual inquiry at Union Pacific's Fort Worth facility"
              width={1400}
              height={840}
              className="w-full h-full object-cover"
            />
            <figcaption className="px-5 py-4 text-sm text-[#717171]">
              Contextual inquiry at Union Pacific&apos;s Fort Worth facility
            </figcaption>
          </figure>

          <figure className="mt-10 rounded-3xl overflow-hidden border border-[#E5E5E5] bg-[#F8F8F7]">
            <Image
              src="/assets/union-pacific/photos/Zebra-viewing.jpg"
              alt="Observing Zebra handheld workflows in an active warehouse environment"
              width={1400}
              height={840}
              className="w-full h-full object-cover"
            />
            <figcaption className="px-5 py-4 text-sm text-[#717171]">
              Observing Zebra handheld workflows in an active warehouse environment
            </figcaption>
          </figure>
        </article>

        <article className="rounded-3xl border border-[#E5E5E5] bg-white p-10 shadow-sm">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-[#2563EB] text-xs font-semibold tracking-widest uppercase">04 — Synthesis &amp; Translation</span>
          </div>
          <div className="space-y-6 text-[#555555] leading-relaxed text-base">
            <p>
              This is the part I think about most. A lot of research stops at findings — here&apos;s what users said, here&apos;s what we observed. What I try to do is go one step further and make explicit the connection between the insight and the decision it should inform.
            </p>
            <p>
              At T-Mobile the bill comparison research didn&apos;t just validate a prototype. It reframed the problem entirely — the tool wasn&apos;t the issue, the billing experience was broken at a systemic level across eight journey phases. That reframe changed the roadmap, not just the UI.
            </p>
            <p>
              I document synthesis in whatever form will actually get used by the team — journey maps, user role cards, service blueprints, or a one-page brief with a clear \'therefore\' at the bottom.
            </p>
          </div>

          <figure className="mt-10 rounded-3xl overflow-hidden border border-[#E5E5E5] bg-[#F8F8F7]">
            <Image
              src="/assets/tmobile/customer-upgrade-journey-map.jpg"
              alt="Omni-channel billing transparency journey map for T-Mobile"
              width={1400}
              height={840}
              className="w-full h-full object-cover"
            />
            <figcaption className="px-5 py-4 text-sm text-[#717171]">
              Omni-channel billing transparency journey map — T-Mobile
            </figcaption>
          </figure>

          <figure className="mt-10 rounded-3xl overflow-hidden border border-[#E5E5E5] bg-[#F8F8F7]">
            <Image
              src="/assets/union-pacific/Process-flow-mapping.png"
              alt="Supply chain process flow mapping at Union Pacific"
              width={1400}
              height={840}
              className="w-full h-full object-cover"
            />
            <figcaption className="px-5 py-4 text-sm text-[#717171]">
              Supply chain process flow mapping — Union Pacific
            </figcaption>
          </figure>
        </article>

        <article className="rounded-3xl border border-[#E5E5E5] bg-white p-10 shadow-sm">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-[#2563EB] text-xs font-semibold tracking-widest uppercase">05 — Connecting to Design</span>
          </div>
          <div className="space-y-6 text-[#555555] leading-relaxed text-base">
            <p>
              I don&apos;t hand off research and move on. The most useful thing I can do after synthesis is stay in the room while design decisions get made — flagging when a direction contradicts what the research showed, and helping the team understand the tradeoff they&apos;re making if they choose to move forward anyway.
            </p>
            <p>
              At Union Pacific I evaluated four technical approaches to the contract workflow problem and made a recommendation with explicit UX rationale. That&apos;s the moment where research earns its place in the product process — not as a validation step at the end, but as the thing that shapes what gets built.
            </p>
          </div>

          <figure className="mt-10 rounded-3xl overflow-hidden border border-[#E5E5E5] bg-[#F8F8F7]">
            <Image
              src="/assets/union-pacific/Fort Worth testing (1).png"
              alt="Usability testing findings feeding directly into SAP Fiori design decisions"
              width={1400}
              height={840}
              className="w-full h-full object-cover"
            />
            <figcaption className="px-5 py-4 text-sm text-[#717171]">
              Usability testing findings feeding directly into SAP Fiori design decisions
            </figcaption>
          </figure>
        </article>
      </section>

      <section className="rounded-3xl border border-[#E5E5E5] bg-[#F8F8F7] p-10 shadow-sm">
        <div className="max-w-3xl space-y-6 text-[#555555] leading-relaxed text-base">
          <p>
            If you want to see any of this in practice, the T-Mobile and Union Pacific case studies show the full arc from research question to design outcome.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            <Link
              href="/work/tmobile"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#E5E5E5] bg-white px-6 py-4 text-center text-[#1A1A1A] font-medium hover:border-[#2563EB] hover:text-[#2563EB] transition-colors"
            >
              T-Mobile case study
            </Link>
            <Link
              href="/work/union-pacific"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#E5E5E5] bg-white px-6 py-4 text-center text-[#1A1A1A] font-medium hover:border-[#2563EB] hover:text-[#2563EB] transition-colors"
            >
              Union Pacific case study
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
