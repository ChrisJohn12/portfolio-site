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
    <div className="min-h-screen pt-28 pb-24 px-6 max-w-6xl mx-auto">
      {/* Header */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 items-start">
        <div>
          <p className="text-[#C8641A] text-sm font-medium tracking-widest uppercase mb-3">
            About
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-gray-900">
            Designing for the hard problems.
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            I&apos;m Chris Michalak, a Senior Product Designer who specializes in
            enterprise complexity. My work lives in the space where business systems,
            human workflows, and organizational reality collide.
          </p>
          <p className="text-gray-500 text-base leading-relaxed mb-4">
            Over the past decade, I&apos;ve led UX research and design across Fortune 500 companies
            including T-Mobile and Union Pacific Railroad, and built products from zero at
            early-stage startups. I bring a researcher&apos;s rigor and a designer&apos;s
            craft. I use AI tools to move faster without cutting corners.
          </p>
          <p className="text-gray-500 text-base leading-relaxed">
            Based in Salt Lake City. Available for staff-level and senior product design roles.
          </p>
        </div>

        {/* Headshot */}
        <div className="flex justify-center md:justify-end">
          <div className="relative w-64 h-72 rounded-2xl overflow-hidden border border-gray-200">
            <Image
              src="/assets/profile/headshot.jpg"
              alt="Chris Michalak"
              fill
              className="object-cover object-top"
            />
          </div>
        </div>
      </div>

      {/* Experience */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold mb-8 pb-3 border-b-2 border-[#C8641A] text-gray-900">
          Experience
        </h2>
        <div className="space-y-4">
          {experience.map((job) => (
            <div
              key={job.company}
              className="flex flex-col md:flex-row md:items-center justify-between p-5 rounded-xl bg-white border border-gray-200 shadow-sm"
            >
              <div>
                <h3 className="text-gray-900 font-semibold">{job.company}</h3>
                <p className="text-gray-500 text-sm">{job.role}</p>
              </div>
              <div className="mt-2 md:mt-0 text-right">
                <p className="text-[#C8641A] text-sm font-medium">{job.period}</p>
                <p className="text-gray-400 text-xs">{job.type}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-gray-400 text-sm mt-4">
          Earlier experience in service design, enterprise consulting, and digital strategy available on request.
        </p>
      </section>

      {/* Skills */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold mb-8 pb-3 border-b-2 border-[#C8641A] text-gray-900">
          Skills & Tools
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((group) => (
            <div key={group.category} className="p-5 rounded-xl bg-white border border-gray-200 shadow-sm">
              <h3 className="text-[#C8641A] text-xs font-medium tracking-widest uppercase mb-3">
                {group.category}
              </h3>
              <ul className="space-y-1.5">
                {group.items.map((item) => (
                  <li key={item} className="text-gray-600 text-sm flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#C8641A] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-2xl border border-[#C8641A]/30 bg-[#C8641A]/5 p-8 text-center">
        <h2 className="text-2xl font-bold mb-3 text-gray-900">Let&apos;s work together.</h2>
        <p className="text-gray-500 mb-6 max-w-md mx-auto">
          I&apos;m open to staff product design roles, principal UX researcher positions, and strategic design consulting.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="mailto:cjmichalak@gmail.com"
            className="inline-flex items-center gap-2 bg-[#C8641A] hover:bg-[#e07820] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Email Me →
          </a>
          <a
            href="https://www.linkedin.com/in/cjmichalak12/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 font-medium px-6 py-3 rounded-lg transition-colors"
          >
            Connect on LinkedIn
          </a>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 font-medium px-6 py-3 rounded-lg transition-colors"
          >
            View My Work
          </Link>
        </div>
      </section>
    </div>
  );
}
