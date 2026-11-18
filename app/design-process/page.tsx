import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'How I Design, Chris Michalak',
  description:
    'How Chris Michalak designs inside real systems: building and using design systems, and making the case to engineering.',
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
          Two parts of my design work I can show: building with design systems, and making the case to engineering.
        </p>
        <p className="text-[#555555] text-base leading-relaxed mb-6">
          Most of my design work has happened inside systems I did not choose: SAP Fiori at Union
          Pacific, a three-platform shipping stack at ShipDeez, an existing design system at CUNA.
          I use research to find out how the work really happens, then look for the smallest design
          that fits the system it has to live in. The decision comes first, and the research is the
          evidence behind it.
        </p>
        <p className="text-[#555555] text-base leading-relaxed">
          At Union Pacific the business team asked for an Excel upload. I weighed four options with
          engineering, and we built a custom Fiori application instead. Bulk entry kept the data
          structured as it went in, which answered the concern behind the upload request.
        </p>
      </header>

      <section className="space-y-16">
        <article className="rounded-3xl border border-[#E5E5E5] bg-white p-10 shadow-sm">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-[#2563EB] text-xs font-semibold tracking-widest uppercase">
              01. Design systems
            </span>
          </div>
          <div className="space-y-6 text-[#555555] leading-relaxed text-base">
            <p>
              I have built a design system and I have worked inside existing ones, and they teach
              different things. At ShipDeez there was no brand at all, so I built the system
              alongside the product as the sole designer, in a 10 business day contract: color, type,
              spacing and a component library.
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
              02. Making the case
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

      </section>

      <section className="mt-16 rounded-3xl border border-[#E5E5E5] bg-[#F8F8F7] p-10 shadow-sm">
        <div className="max-w-3xl space-y-6 text-[#555555] leading-relaxed text-base">
          <p>
            Each of these has a full case study with the decisions, the trade-offs and what I would
            do next.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            <Link href="/work/union-pacific" className={linkClass}>
              Union Pacific case study
            </Link>
            <Link href="/work/shipdeez" className={linkClass}>
              ShipDeez case study
            </Link>
            <Link href="/work/cuna" className={linkClass}>
              CUNA case study
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
