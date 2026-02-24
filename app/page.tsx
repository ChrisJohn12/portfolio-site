import Link from 'next/link';
import Image from 'next/image';
import { getAllCaseStudies } from '@/lib/case-studies';

const testimonials = [
  {
    quote:
      'He did a great job owning usability testing on a product and did fantastic work helping the team build an omni-channel journey map.',
    name: 'Veslava Ovendale',
    title: 'Sr. User Experience Researcher, T-Mobile',
    photo: '/assets/profile/veslava-ovendale-headshot.png',
  },
  {
    quote:
      "What makes Chris tick is the opportunity to see the human side of the things we design: the process, the journeys, the interactions, the users' eyebrow-raising confusions, their small delights.",
    name: 'Andrew Billmann',
    title: "Vice President of Digital Engagement, America's Credit Unions",
    photo: '/assets/profile/andrew-billman-headshot.png',
  },
];

const skills = [
  {
    icon: '◈',
    title: 'Product Design',
    description: 'End-to-end UX from discovery to delivery, across enterprise and startup contexts.',
    items: ['UX Strategy', 'Information Architecture', 'High-Fidelity UI', 'Design Systems', 'Component Libraries', 'Wireframing'],
  },
  {
    icon: '◎',
    title: 'UX Research',
    description: 'Mixed-methods research that turns complex data into clear design direction.',
    items: ['Contextual Inquiry', 'Usability Testing', 'Journey Mapping', 'Stakeholder Interviews', 'Ethnographic Research', 'Survey Design'],
  },
  {
    icon: '◇',
    title: 'AI & Technical',
    description: 'AI tools integrated across the full research and design workflow.',
    items: ['Claude', 'GPT', 'Dovetail AI', 'Quantum Metrics', 'SAP Fiori', 'EasyPost'],
  },
];

export default function HomePage() {
  const projects = getAllCaseStudies();

  return (
    <div>
      {/* Hero */}
      <section className="min-h-screen flex items-center pt-20 px-6 max-w-6xl mx-auto">
        <div className="w-full py-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 text-sm font-medium px-4 py-2 rounded-full mb-8 border border-green-200">
            <span className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0" />
            Available for new opportunities
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight mb-6 text-gray-900">
            Designing<br />for complexity.<br />
            <span className="text-[#C8641A]">Built for humans.</span>
          </h1>

          <p className="text-gray-500 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
            Senior Product Designer specializing in enterprise UX, AI-enhanced research,
            and the space where business requirements meet human reality.
          </p>

          {/* Skill pills */}
          <div className="flex flex-wrap gap-2 mb-10">
            {['Enterprise UX', 'AI-Enhanced Research', 'Systems Thinking', 'SAP Fiori', 'Stakeholder Research'].map((skill) => (
              <span key={skill} className="text-sm px-3 py-1.5 rounded-full bg-gray-100 text-gray-600 border border-gray-200">
                {skill}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 bg-[#C8641A] hover:bg-[#e07820] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              View My Work
              <span aria-hidden="true">→</span>
            </Link>
            <a
              href="mailto:cjmichalak@gmail.com"
              className="inline-flex items-center gap-2 border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 font-medium px-6 py-3 rounded-lg transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="flex items-baseline justify-between mb-10">
          <div>
            <p className="text-[#C8641A] text-sm font-medium tracking-widest uppercase mb-2">Portfolio</p>
            <h2 className="text-3xl font-bold text-gray-900">Featured Work</h2>
          </div>
          <Link href="/work" className="text-sm text-[#C8641A] hover:text-[#e07820] transition-colors font-medium">
            View all →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className="group block rounded-xl overflow-hidden border border-gray-200 hover:border-[#C8641A]/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white"
            >
              <div className="relative h-52 bg-gray-100 overflow-hidden">
                {project.coverImage && (
                  <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                )}
              </div>

              <div className="p-5">
                <p className="text-[#C8641A] text-xs font-medium tracking-wide uppercase mb-1">
                  {project.company}
                </p>
                <h3 className="text-gray-900 font-semibold text-lg mb-2 group-hover:text-[#C8641A] transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-3">
                  {project.description}
                </p>
                {project.stat && (
                  <p className="text-[#C8641A] text-xs font-semibold mb-4 tracking-wide">
                    {project.stat}
                  </p>
                )}
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-500 border border-gray-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-[#C8641A] text-xs font-medium">
                    Read case study →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* About Preview */}
      <section className="bg-gray-50 py-24">
        <div className="px-6 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Photo */}
            <div className="relative">
              <div className="relative w-full max-w-sm mx-auto md:mx-0 rounded-2xl overflow-hidden aspect-[3/4]">
                <Image
                  src="/assets/profile/headshot.jpg"
                  alt="Chris Michalak"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>

            {/* Bio + Stats */}
            <div>
              <p className="text-[#C8641A] text-sm font-medium tracking-widest uppercase mb-3">About</p>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Designing for the hard problems.
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                I&apos;m Chris Michalak, a Senior Product Designer who specializes in enterprise complexity.
                My work lives in the space where business systems, human workflows,
                and organizational reality collide.
              </p>
              <p className="text-gray-500 leading-relaxed mb-8">
                Over the past decade, I&apos;ve led UX research and design across Fortune 500 companies
                including T-Mobile and Union Pacific Railroad, and built products from zero
                at early-stage startups.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mb-8 py-6 border-t border-b border-gray-200">
                <div>
                  <p className="text-3xl font-bold text-gray-900">6+</p>
                  <p className="text-sm text-gray-500 mt-1">Years experience</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-gray-900">3</p>
                  <p className="text-sm text-gray-500 mt-1">Enterprise clients</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#C8641A]">AI</p>
                  <p className="text-sm text-gray-500 mt-1">Enhanced workflow</p>
                </div>
              </div>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-[#C8641A] hover:text-[#e07820] font-medium transition-colors"
              >
                Learn more about me →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="mb-10">
          <p className="text-[#C8641A] text-sm font-medium tracking-widest uppercase mb-2">Expertise</p>
          <h2 className="text-3xl font-bold text-gray-900">What I bring to the table</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <div key={skill.title} className="p-6 rounded-xl bg-white border border-gray-200 hover:border-[#C8641A]/40 hover:shadow-md transition-all">
              <span className="text-[#C8641A] text-2xl mb-4 block">{skill.icon}</span>
              <h3 className="text-gray-900 font-bold text-lg mb-2">{skill.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{skill.description}</p>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span key={item} className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600 border border-gray-200">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-24">
        <div className="px-6 max-w-6xl mx-auto">
          <div className="mb-10">
            <p className="text-[#C8641A] text-sm font-medium tracking-widest uppercase mb-2">Colleagues</p>
            <h2 className="text-3xl font-bold text-gray-900">What colleagues say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <blockquote
                key={t.name}
                className="flex flex-col justify-between p-8 rounded-2xl bg-white border border-gray-200 hover:shadow-md transition-shadow"
              >
                <span className="text-[#C8641A] text-5xl leading-none font-serif mb-2 select-none" aria-hidden="true">
                  &ldquo;
                </span>
                <p className="text-gray-600 text-base leading-relaxed mb-8 -mt-2">
                  {t.quote}
                </p>
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border border-gray-200">
                    <Image
                      src={t.photo}
                      alt={t.name}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div>
                    <p className="text-gray-900 font-semibold text-sm">{t.name}</p>
                    <p className="text-gray-400 text-xs mt-0.5">{t.title}</p>
                  </div>
                </div>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="rounded-2xl bg-gray-900 p-8 md:p-12 text-center">
          <p className="text-[#C8641A] text-sm font-medium tracking-widest uppercase mb-3">
            Get In Touch
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Let&apos;s work together.
          </h2>
          <p className="text-white/60 leading-relaxed mb-8 max-w-xl mx-auto">
            I&apos;m open to staff product design roles, principal UX researcher positions,
            and strategic design consulting.
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
              className="inline-flex items-center gap-2 border border-white/30 hover:border-white/60 text-white/70 hover:text-white font-medium px-6 py-3 rounded-lg transition-colors"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
