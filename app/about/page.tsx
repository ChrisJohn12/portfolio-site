import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'About, Chris Michalak',
  description:
    'Senior Product Designer specializing in enterprise UX, AI-enhanced research, and complex systems.',
};

const skills = [
  { category: 'Research', items: ['Contextual Inquiry', 'Usability Testing', 'Journey Mapping', 'Ethnographic Research', 'Stakeholder Interviews', 'Survey Design'] },
  { category: 'Design', items: ['UX Strategy', 'Information Architecture', 'Wireframing', 'High-Fidelity UI', 'Design Systems', 'Component Libraries'] },
  { category: 'Tools', items: ['Figma', 'FigJam', 'UXPin', 'Dovetail', 'Webflow', 'Quantum Metrics', 'Miro', 'Adobe XD'] },
  { category: 'AI & Analytics', items: ['Claude', 'GPT', 'Dovetail AI', 'Google Analytics 4', 'Microsoft Clarity', 'Tableau'] },
  { category: 'Platforms', items: ['SAP Fiori', 'SAP S/4HANA', 'Adobe Experience Manager', 'Ariba', 'Icertis', 'EasyPost'] },
];

const experience = [
  { company: 'ShipDeez / Backhaul Direct', role: 'Lead Product Designer', period: '2026', type: 'Contract' },
  { company: 'Union Pacific Railroad', role: 'UX Researcher & Design Strategist', period: '2023–2025', type: 'Contract · 2 years' },
  { company: 'T-Mobile', role: 'UX Researcher, Enterprise Technology Solutions', period: '2022–2023', type: 'Contract · 13 months' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-28 pb-20 px-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 items-start">
        <div>
          <p className="text-[#2563EB] text-sm font-medium tracking-widest uppercase mb-3">
            About
          </p>
          <h1 className="text-[48px] font-semibold mb-6 leading-tight text-[#1A1A1A]">
            Designing for the hard problems.
          </h1>
          <p className="text-[#555555] text-lg leading-relaxed mb-4">
            I&apos;m Chris Michalak, a Senior Product Designer who specializes in
            enterprise complexity. My work lives in the space where business systems,
            human workflows, and organizational reality collide.
          </p>
          <p className="text-[#555555] text-base leading-relaxed mb-4">
            Over the past decade, I&apos;ve led UX research and design across Fortune 500 companies
            including T-Mobile and Union Pacific Railroad, and built products from zero at
            early-stage startups. I bring a researcher&apos;s rigor and a designer&apos;s
            craft. I use AI tools to move faster without cutting corners.
          </p>
          <p className="text-[#555555] text-base leading-relaxed">
            Based in Salt Lake City. Available for staff-level and senior product design roles.
          </p>
        </div>

        {/* Headshot */}
        <div className="flex justify-center md:justify-end">
          <div className="relative w-64 h-72 rounded-2xl overflow-hidden border border-[#E5E5E5]">
            <Image
              src="/assets/profile/headshot.jpg"
              alt="Chris Michalak, Senior Product Designer"
              fill
              className="object-cover object-top"
            />
          </div>
        </div>
      </div>

      {/* Experience */}
      <section className="mb-20" aria-labelledby="experience-heading">
        <h2 id="experience-heading" className="text-[32px] font-semibold mb-8 pb-4 border-b border-[#E5E5E5] text-[#1A1A1A]">
          Experience
        </h2>
        <div className="space-y-4">
          {experience.map((job) => (
            <div
              key={job.company}
              className="flex flex-col md:flex-row md:items-center justify-between p-6 rounded-xl bg-white border border-[#E5E5E5]"
            >
              <div>
                <h3 className="text-[#1A1A1A] font-semibold">{job.company}</h3>
                <p className="text-[#555555] text-sm mt-0.5">{job.role}</p>
              </div>
              <div className="mt-2 md:mt-0 md:text-right">
                <p className="text-[#2563EB] text-sm font-medium">{job.period}</p>
                <p className="text-[#717171] text-xs mt-0.5">{job.type}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-[#717171] text-sm mt-4">
          Earlier experience in service design, enterprise consulting, and digital strategy available on request.
        </p>
      </section>

      {/* Skills */}
      <section className="mb-20" aria-labelledby="skills-heading">
        <h2 id="skills-heading" className="text-[32px] font-semibold mb-8 pb-4 border-b border-[#E5E5E5] text-[#1A1A1A]">
          Skills &amp; Tools
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((group) => (
            <div key={group.category} className="p-6 rounded-xl bg-white border border-[#E5E5E5]">
              <h3 className="text-[#2563EB] text-xs font-medium tracking-widest uppercase mb-3">
                {group.category}
              </h3>
              <ul className="space-y-1.5">
                {group.items.map((item) => (
                  <li key={item} className="text-[#555555] text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] flex-shrink-0" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-xl border border-[#2563EB]/20 bg-[#EFF6FF] p-8 text-center" aria-labelledby="cta-heading">
        <h2 id="cta-heading" className="text-[32px] font-semibold mb-3 text-[#1A1A1A]">Let&apos;s work together.</h2>
        <p className="text-[#555555] mb-6 max-w-md mx-auto leading-relaxed">
          I&apos;m open to staff product design roles, principal UX researcher positions, and strategic design consulting.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="mailto:cjmichalak@gmail.com"
            className="inline-flex items-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-medium px-6 py-3 rounded-lg transition-colors min-h-[44px]"
          >
            Email Me →
          </a>
          <a
            href="https://www.linkedin.com/in/cjmichalak12/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Connect with Chris on LinkedIn (opens in new tab)"
            className="inline-flex items-center gap-2 border border-[#E5E5E5] hover:bg-[#F3F2EF] text-[#1A1A1A] font-medium px-6 py-3 rounded-lg transition-colors min-h-[44px]"
          >
            Connect on LinkedIn
          </a>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 border border-[#E5E5E5] hover:bg-[#F3F2EF] text-[#1A1A1A] font-medium px-6 py-3 rounded-lg transition-colors min-h-[44px]"
          >
            View My Work
          </Link>
        </div>
      </section>
    </div>
  );
}
