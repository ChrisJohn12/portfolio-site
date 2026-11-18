import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'How I Design, Chris Michalak',
  description:
    'How Chris Michalak takes a problem from a real workflow to a screen: designing inside constraints, building with design systems, and making the case to engineering.',
};

type Figure = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
};

function ProcessFigure({ src, alt, caption, width, height }: Figure) {
  return (
    <figure className="mt-10 rounded-3xl overflow-hidden border border-[#E5E5E5] bg-[#F8F8F7]">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes="(min-width: 1280px) 1100px, 100vw"
        className="w-full h-auto"
      />
      <figcaption className="px-5 py-4 text-sm text-[#717171]">{caption}</figcaption>
    </figure>
  );
}

const linkClass =
  'inline-flex items-center justify-center gap-2 rounded-xl border border-[#E5E5E5] bg-white px-6 py-4 text-center text-[#1A1A1A] font-medium hover:border-[#2563EB] hover:text-[#2563EB] transition-colors min-h-[44px]';

export default function DesignProcessPage() {
  return (
    <div className="min-h-screen pt-28 pb-20 px-6 max-w-7xl mx-auto">
      <header className="mb-20 max-w-3xl">
        <p className="text-[#2563EB] text-sm font-medium tracking-widest uppercase mb-3">
          Design process
        </p>
        <h1 className="text-[48px] md:text-[56px] font-semibold mb-6 leading-tight text-[#1A1A1A]">
          How I Design
        </h1>
        <p className="text-[#555555] text-lg md:text-xl leading-relaxed mb-6">
          How I take a problem from a real workflow to a screen, and how I decide what to build
          inside the limits I am given.
        </p>
        <p className="text-[#555555] text-base leading-relaxed">
          Most of my design work has happened inside systems I did not choose: SAP Fiori at Union
          Pacific, a three-platform shipping stack at ShipDeez, an existing design system at CUNA.
          That shaped how I work. I use research to find out how the work really happens, then look for the
          smallest design that fits the system it has to live in. The decision comes first, and the
          research is the evidence behind it.
        </p>
      </header>

      <section className="space-y-16">
        <article className="rounded-3xl border border-[#E5E5E5] bg-white p-10 shadow-sm">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-[#2563EB] text-xs font-semibold tracking-widest uppercase">
              01. Starting from the work
            </span>
          </div>
          <div className="space-y-6 text-[#555555] leading-relaxed text-base">
            <p>
              I try to design from how the work actually flows, not from the screen a request
              implies. At Union Pacific I started from how the contract workflow ran, then worked
              out how it could live inside SAP&apos;s Fiori design system.
            </p>
            <p>
              At ShipDeez I spent time in ShipBlink&apos;s white-label screens, EasyPost&apos;s API
              documentation and Forge&apos;s customization limits before I drew anything. You cannot
              design within limits you have not read.
            </p>
          </div>
        </article>

        <article className="rounded-3xl border border-[#E5E5E5] bg-white p-10 shadow-sm">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-[#2563EB] text-xs font-semibold tracking-widest uppercase">
              02. Designing inside constraints
            </span>
          </div>
          <div className="space-y-6 text-[#555555] leading-relaxed text-base">
            <p>
              At Union Pacific the business team asked for an Excel upload. It was a reasonable
              request, so I weighed four options with engineering: Excel upload, a data load
              program, copy and paste from existing contracts, and a custom Fiori application.
              Excel upload won on convenience, but each team records the same information a little
              differently, so unstructured data would have entered the database.
            </p>
            <p>
              We built the custom Fiori application. Bulk entry kept the data structured as it went
              in, which answered the concern behind the upload request. I designed the screens,
              checked feasibility with engineering, and ran the result past the business team.
            </p>
            <p>
              ShipDeez was the opposite kind of constraint. I was the sole designer, the deadline
              was 10 business days, and there was no custom backend, so every design had to work
              within what the existing APIs could do. EasyPost requires a daily cap on guest
              checkouts, so I disclosed the cap as a note under the button instead of letting
              someone discover it as an error after trying to pay.
            </p>
          </div>

          <ProcessFigure
            src="/assets/union-pacific/research-design-loop.png"
            alt="The loop run on each Union Pacific design: the expert's goal, translate to Fiori, check feasibility with engineering, verify, hand off, with revise paths back"
            caption="The loop I ran on each design at Union Pacific: the expert's goal, translate to Fiori, check feasibility with engineering, verify, hand off, with paths back to revise."
            width={1800}
            height={989}
          />
        </article>

        <article className="rounded-3xl border border-[#E5E5E5] bg-white p-10 shadow-sm">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-[#2563EB] text-xs font-semibold tracking-widest uppercase">
              03. Design systems
            </span>
          </div>
          <div className="space-y-6 text-[#555555] leading-relaxed text-base">
            <p>
              I have built a design system and I have worked inside existing ones, and they teach
              different things. At ShipDeez there was no brand at all, so I built the system
              alongside the product: color, type, spacing and a component library.
            </p>
            <p>
              The semantic colors map to shipping states. Green marks a created or delivered label,
              gold marks a low wallet balance, and red marks an address or payment failure, so a
              user can scan an operational screen without decoding status labels. The spacing uses
              a 4px base unit so dense tables and payment summaries still line up.
            </p>
            <p>
              At Union Pacific the system did a different job. New supplier pages were assembled
              from known pieces instead of being drawn from scratch. At CUNA I used the existing
              design system to create wireframes that put the research results into screens, which
              you can read about in the{' '}
              <Link href="/work/cuna" className="text-[#2563EB] underline underline-offset-2">
                CUNA case study
              </Link>
              .
            </p>
          </div>

          <ProcessFigure
            src="/assets/shipdeez/Design-System.png"
            alt="ShipDeez design system style tile showing color, type scale and spacing tokens"
            caption="ShipDeez style tile: color tokens, type scale and spacing, built alongside the product."
            width={1201}
            height={774}
          />
          <ProcessFigure
            src="/assets/shipdeez/Componenet-library.png"
            alt="ShipDeez component library with buttons, inputs, rate cards and status pills"
            caption="ShipDeez component library: buttons, inputs with error states, selectable rate cards and status pills."
            width={1682}
            height={1070}
          />
          <ProcessFigure
            src="/assets/union-pacific/supplier-pages.png"
            alt="The existing Union Pacific supplier page mockup beside the built Supplier Advancement and Expansion page, with shared design system pieces called out"
            caption="Union Pacific supplier pages: the existing mockup beside the built page, with the shared design system pieces called out."
            width={1800}
            height={1352}
          />
        </article>

        <article className="rounded-3xl border border-[#E5E5E5] bg-white p-10 shadow-sm">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-[#2563EB] text-xs font-semibold tracking-widest uppercase">
              04. Making the case
            </span>
          </div>
          <div className="space-y-6 text-[#555555] leading-relaxed text-base">
            <p>
              Some of the most useful design work I have done was persuading people, not drawing
              screens. Warehouse staff at Union Pacific used handheld scanners that ran standard
              SAP screens. I watched the work in three warehouses, and the standard screens left
              out information the workers needed.
            </p>
            <p>
              The implementation partner said showing it was not feasible and would affect the
              timeline. So I found another route, SAP Personas, mocked up a before and after, and
              took the case back to the weekly meetings more than once. It was accepted and handed
              to engineering. I rolled off before it was implemented, so I cannot speak to how it
              turned out in use.
            </p>
            <p>
              The bigger lesson was about process. I was reviewing technical specs after the
              decisions had been made, and my feedback went nowhere. We asked for the partner&apos;s
              process outline, saw that the fit-or-custom decisions happened earlier, and asked to
              join those conversations. We were added.
            </p>
          </div>

          <ProcessFigure
            src="/assets/union-pacific/sap-personas.png"
            alt="Recreation of the SAP Personas case: the steps from floor recordings to the handoff to engineering"
            caption="Recreation. Client names and data removed. The steps from floor recordings to the handoff to engineering."
            width={1800}
            height={989}
          />
        </article>

        <article className="rounded-3xl border border-[#E5E5E5] bg-white p-10 shadow-sm">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-[#2563EB] text-xs font-semibold tracking-widest uppercase">
              05. Decisions I can explain
            </span>
          </div>
          <div className="space-y-6 text-[#555555] leading-relaxed text-base">
            <p>
              First Step AI is small, which makes it a good place to see the reasoning. I cut the
              intake from six fields to four, asked one question at a time with a visible step
              count, and moved email capture to after the recommendation so the user gets value
              before I ask for anything. I also removed the word free from the interface, because it
              anchors a product at zero before anyone has used it.
            </p>
            <p>
              These are design decisions with reasons, not measured results. The case study says
              what I plan to measure next.
            </p>
          </div>

          <ProcessFigure
            src="/assets/first-step-ai/first_step_ai_userflow_1.png"
            alt="First Step AI landing screen with the headline, a Get Started button and three feature cards"
            caption="First Step AI landing screen. The four-question promise is stated before the user starts."
            width={1920}
            height={992}
          />
        </article>
      </section>

      <section className="mt-16 rounded-3xl border border-[#E5E5E5] bg-[#F8F8F7] p-10 shadow-sm">
        <div className="max-w-3xl space-y-6 text-[#555555] leading-relaxed text-base">
          <p>
            Each of these has a full case study with the decisions, the trade-offs and what I would
            do next.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            <Link href="/work/union-pacific" className={linkClass}>
              Union Pacific case study
            </Link>
            <Link href="/work/shipdeez" className={linkClass}>
              ShipDeez case study
            </Link>
            <Link href="/work/cuna" className={linkClass}>
              CUNA case study
            </Link>
            <Link href="/work/first-step-ai" className={linkClass}>
              First Step AI case study
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
