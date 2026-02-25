import Link from 'next/link';
import Image from 'next/image';
import { getAllCaseStudies } from '@/lib/case-studies';

export const metadata = {
  title: 'Work, Chris Michalak',
  description: 'Case studies in enterprise UX, AI-enhanced research, and systems design.',
};

export default function WorkPage() {
  const projects = getAllCaseStudies();

  return (
    <div className="min-h-screen pt-28 pb-20 px-6 max-w-7xl mx-auto">
      <header className="mb-14">
        <p className="text-[#2563EB] text-sm font-medium tracking-widest uppercase mb-3">
          Portfolio
        </p>
        <h1 className="text-[48px] font-semibold mb-4 text-[#1A1A1A] leading-tight">Selected Work</h1>
        <p className="text-[#555555] text-lg max-w-xl leading-relaxed">
          Enterprise UX research and design across Fortune 500 companies,
          startups, and complex systems.
        </p>
      </header>

      <div className="space-y-6">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/work/${project.slug}`}
            className="group flex flex-col md:flex-row gap-0 rounded-xl overflow-hidden border border-[#E5E5E5] hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)] transition-all duration-200 hover:-translate-y-0.5 bg-white"
          >
            {/* Cover image */}
            <div className="relative w-full md:w-72 h-52 md:h-auto flex-shrink-0 bg-[#F3F2EF]">
              {project.coverImage && (
                <Image
                  src={project.coverImage}
                  alt={`${project.title} project thumbnail`}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              )}
            </div>

            {/* Content */}
            <div className="flex-1 p-6 md:p-8 bg-white flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-3">
                <p className="text-[#2563EB] text-xs font-medium tracking-wide uppercase">
                  {project.company}
                </p>
                <span className="text-[#717171]" aria-hidden="true">·</span>
                <p className="text-[#717171] text-xs">{project.duration}</p>
              </div>
              <h2 className="text-[#1A1A1A] text-[22px] font-semibold leading-snug mb-2 group-hover:text-[#2563EB] transition-colors">
                {project.title}
              </h2>
              <p className="text-[#555555] text-sm mb-1 font-medium">{project.role}</p>
              <p className="text-[#717171] text-sm leading-relaxed mb-5">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[13px] font-medium px-[14px] py-[6px] rounded-full bg-[#F3F2EF] text-[#555555]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Arrow */}
            <div className="hidden md:flex items-center pr-8 bg-white text-[#717171] group-hover:text-[#2563EB] transition-colors text-xl" aria-hidden="true">
              →
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
