import Link from 'next/link';
import Image from 'next/image';
import { getAllCaseStudies } from '@/lib/case-studies';
import InlineChat from '@/components/InlineChat';

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
      <section
        aria-labelledby="hero-heading"
        className="min-h-screen flex items-center pt-20 px-6 max-w-7xl mx-auto"
      >
        <div className="w-full py-16">
          {/* Availability badge */}
          <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 text-sm font-medium px-4 py-2 rounded-full mb-8 border border-green-200">
            <span className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0" aria-hidden="true" />
            Available for new opportunities
          </div>

          <h1
            id="hero-heading"
            className="text-5xl md:text-7xl font-semibold leading-tight tracking-tight mb-6 text-[#1A1A1A]"
          >
            Designing<br />for complexity.<br />
            Built for humans.
          </h1>

          <p className="text-[#555555] text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
            Senior Product Designer specializing in enterprise UX, AI-enhanced research,
            and the space where business requirements meet human reality.
          </p>

          {/* Skill pills */}
          <div className="flex flex-wrap gap-2 mb-10" role="list" aria-label="Specializations">
            {['Enterprise UX', 'AI-Enhanced Research', 'Systems Thinking', 'SAP Fiori', 'Stakeholder Research'].map((skill) => (
              <span
                key={skill}
                role="listitem"
                className="text-[13px] font-medium px-[14px] py-[6px] rounded-full bg-[#F3F2EF] text-[#555555]"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-medium px-6 py-3 rounded-lg transition-colors min-h-[44px]"
            >
              View My Work
              <span aria-hidden="true">→</span>
            </Link>
            <a
              href="#ai-assistant"
              className="inline-flex items-center gap-2 border border-[#E5E5E5] hover:bg-[#F3F2EF] text-[#1A1A1A] font-medium px-6 py-3 rounded-lg transition-colors min-h-[44px]"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
              </svg>
              Ask My AI Assistant
            </a>
            <a
              href="mailto:cjmichalak@gmail.com"
              className="inline-flex items-center gap-2 border border-[#E5E5E5] hover:bg-[#F3F2EF] text-[#1A1A1A] font-medium px-6 py-3 rounded-lg transition-colors min-h-[44px]"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section aria-labelledby="work-heading" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="flex items-baseline justify-between mb-10">
          <div>
            <p className="text-[#2563EB] text-sm font-medium tracking-widest uppercase mb-2">Portfolio</p>
            <h2 id="work-heading" className="text-[32px] font-semibold text-[#1A1A1A] leading-tight">Featured Work</h2>
          </div>
          <Link href="/work" className="text-sm text-[#2563EB] hover:text-[#1D4ED8] transition-colors font-medium underline underline-offset-2">
            View all
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className="group block rounded-xl overflow-hidden border border-[#E5E5E5] hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)] transition-all duration-200 hover:-translate-y-1 bg-white"
            >
              <div className="relative h-52 bg-[#F3F2EF] overflow-hidden">
                {project.coverImage && (
                  <Image
                    src={project.coverImage}
                    alt={`${project.title} cover image`}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                )}
              </div>

              <div className="p-6">
                <p className="text-[#2563EB] text-xs font-medium tracking-wide uppercase mb-1">
                  {project.company}
                </p>
                <h3 className="text-[#1A1A1A] font-semibold text-[22px] leading-snug mb-2 group-hover:text-[#2563EB] transition-colors">
                  {project.title}
                </h3>
                <p className="text-[#555555] text-sm leading-relaxed mb-3">
                  {project.description}
                </p>
                {project.stat && (
                  <p className="text-[#2563EB] text-xs font-semibold mb-4 tracking-wide">
                    {project.stat}
                  </p>
                )}
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="text-[13px] font-medium px-[14px] py-[6px] rounded-full bg-[#F3F2EF] text-[#555555]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-[#2563EB] text-xs font-medium">
                    Read case study →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* About Preview */}
      <section aria-labelledby="about-heading" className="bg-[#F3F2EF] py-20">
        <div className="px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Photo */}
            <div className="relative">
              <div className="relative w-full max-w-sm mx-auto md:mx-0 rounded-2xl overflow-hidden aspect-[3/4]">
                <Image
                  src="/assets/profile/Headshot-Antelope-island.jpeg"
                  alt="Chris Michalak, Senior Product Designer"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>

            {/* Bio + Stats */}
            <div>
              <p className="text-[#2563EB] text-sm font-medium tracking-widest uppercase mb-3">About</p>
              <h2 id="about-heading" className="text-[32px] font-semibold text-[#1A1A1A] leading-tight mb-6">
                Designing for the hard problems.
              </h2>
              <p className="text-[#555555] leading-relaxed mb-4">
                I&apos;m Chris Michalak, a Senior Product Designer who specializes in enterprise complexity.
                My work lives in the space where business systems, human workflows,
                and organizational reality collide.
              </p>
              <p className="text-[#555555] leading-relaxed mb-8">
                Over the past 7+ years, I&apos;ve led UX research and design across Fortune 500 companies
                including T-Mobile and Union Pacific Railroad, and built products from zero
                at early-stage startups.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mb-8 py-6 border-t border-b border-[#E5E5E5]">
                <div>
                  <p className="text-3xl font-semibold text-[#1A1A1A]">7+</p>
                  <p className="text-sm text-[#717171] mt-1">Years experience</p>
                </div>
                <div>
                  <p className="text-3xl font-semibold text-[#1A1A1A]">3</p>
                  <p className="text-sm text-[#717171] mt-1">Enterprise clients</p>
                </div>
                <div>
                  <p className="text-2xl font-semibold text-[#2563EB]">AI</p>
                  <p className="text-sm text-[#717171] mt-1">Enhanced workflow</p>
                </div>
              </div>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-[#2563EB] hover:text-[#1D4ED8] font-medium transition-colors underline underline-offset-2"
              >
                Learn more about me →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section aria-labelledby="skills-heading" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="mb-10">
          <p className="text-[#2563EB] text-sm font-medium tracking-widest uppercase mb-2">Expertise</p>
          <h2 id="skills-heading" className="text-[32px] font-semibold text-[#1A1A1A] leading-tight">What I bring to the table</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="p-6 rounded-xl bg-white border border-[#E5E5E5] hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)] transition-all duration-200"
            >
              <span className="text-[#2563EB] text-2xl mb-4 block" aria-hidden="true">{skill.icon}</span>
              <h3 className="text-[#1A1A1A] font-medium text-[22px] leading-snug mb-2">{skill.title}</h3>
              <p className="text-[#555555] text-sm leading-relaxed mb-4">{skill.description}</p>
              <ul className="flex flex-wrap gap-2" aria-label={`${skill.title} skills`}>
                {skill.items.map((item) => (
                  <li key={item}>
                    <span className="text-[13px] font-medium px-[14px] py-[6px] rounded-full bg-[#F3F2EF] text-[#555555]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section aria-labelledby="testimonials-heading" className="bg-[#F3F2EF] py-20">
        <div className="px-6 max-w-7xl mx-auto">
          <div className="mb-10">
            <p className="text-[#2563EB] text-sm font-medium tracking-widest uppercase mb-2">Colleagues</p>
            <h2 id="testimonials-heading" className="text-[32px] font-semibold text-[#1A1A1A] leading-tight">What colleagues say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <blockquote
                key={t.name}
                className="flex flex-col justify-between p-8 rounded-xl bg-white border border-[#E5E5E5] hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)] transition-shadow duration-200"
              >
                <span className="text-[#2563EB] text-5xl leading-none font-serif mb-2 select-none" aria-hidden="true">
                  &ldquo;
                </span>
                <p className="text-[#555555] text-base leading-relaxed mb-8 -mt-2">
                  {t.quote}
                </p>
                <footer className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border border-[#E5E5E5]">
                    <Image
                      src={t.photo}
                      alt={t.name}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div>
                    <p className="text-[#1A1A1A] font-semibold text-sm">{t.name}</p>
                    <p className="text-[#717171] text-xs mt-0.5">{t.title}</p>
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* AI Assistant */}
      <section id="ai-assistant" aria-labelledby="ai-heading" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-[#EFF6FF] text-[#2563EB] text-xs font-semibold px-3 py-1.5 rounded-full mb-5 border border-[#2563EB]/20 uppercase tracking-wider">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
            </svg>
            AI Assistant
          </div>
          <h2 id="ai-heading" className="text-[32px] font-semibold text-[#1A1A1A] leading-tight mb-3">
            Ask My AI Assistant
          </h2>
          <p className="text-[#555555] leading-relaxed">
            Get instant answers about my experience, skills, and work. The assistant is trained on my
            portfolio and can help you find relevant information quickly.
          </p>
        </div>
        <InlineChat />
        <p className="text-center text-[12px] text-[#A0A0A0] mt-4 max-w-xl mx-auto">
          This AI assistant is powered by Claude and trained on my complete portfolio, resume, and work samples.
          It will provide instant, accurate answers to your questions.
        </p>
      </section>

      {/* CTA Banner */}
      <section aria-labelledby="cta-heading" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="rounded-xl bg-[#1A1A1A] p-8 md:p-12 text-center">
          <p className="text-[#EFF6FF] text-sm font-medium tracking-widest uppercase mb-3">
            Get In Touch
          </p>
          <h2 id="cta-heading" className="text-[32px] md:text-[40px] font-semibold text-white leading-tight mb-4">
            Let&apos;s work together.
          </h2>
          <p className="text-white/70 leading-relaxed mb-8 max-w-xl mx-auto">
            I&apos;m open to staff product design roles, principal UX researcher positions,
            and strategic design consulting.
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
              className="inline-flex items-center gap-2 border border-white/30 hover:border-white/60 text-white/80 hover:text-white font-medium px-6 py-3 rounded-lg transition-colors min-h-[44px]"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
