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
    <div className="min-h-screen pt-28 pb-24 px-6 max-w-6xl mx-auto">
      <header className="mb-14">
        <p className="text-[#C8641A] text-sm font-medium tracking-widest uppercase mb-3">
          Portfolio
        </p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Selected Work</h1>
        <p className="text-gray-500 text-lg max-w-xl">
          Enterprise UX research and design across Fortune 500 companies,
          startups, and complex systems.
        </p>
      </header>

      <div className="space-y-8">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/work/${project.slug}`}
            className="group flex flex-col md:flex-row gap-0 rounded-2xl overflow-hidden border border-gray-200 hover:border-[#C8641A]/40 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 bg-white"
          >
            {/* Cover image */}
            <div className="relative w-full md:w-72 h-52 md:h-auto flex-shrink-0 bg-gray-100">
              {project.coverImage && (
                <Image
                  src={project.coverImage}
                  alt={project.title}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white hidden md:block" />
              <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent md:hidden" />
            </div>

            {/* Content */}
            <div className="flex-1 p-6 md:p-8 bg-white flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-3">
                <p className="text-[#C8641A] text-xs font-medium tracking-wide uppercase">
                  {project.company}
                </p>
                <span className="text-gray-300">·</span>
                <p className="text-gray-400 text-xs">{project.duration}</p>
              </div>
              <h2 className="text-gray-900 text-2xl font-bold mb-2 group-hover:text-[#C8641A] transition-colors">
                {project.title}
              </h2>
              <p className="text-gray-500 text-sm mb-1 font-medium">{project.role}</p>
              <p className="text-gray-400 text-sm leading-relaxed mb-5">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-500 border border-gray-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Arrow */}
            <div className="hidden md:flex items-center pr-8 bg-white text-gray-300 group-hover:text-[#C8641A] transition-colors text-xl">
              →
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
