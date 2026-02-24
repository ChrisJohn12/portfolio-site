import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getCaseStudy, getAllCaseStudies, getNextCaseStudy, projectImages } from '@/lib/case-studies';
import MarkdownRenderer from '@/components/MarkdownRenderer';
import StickyContact from '@/components/StickyContact';

export async function generateStaticParams() {
  return getAllCaseStudies().map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const cs = getCaseStudy(params.slug);
  if (!cs) return {};
  return {
    title: `${cs.title}, Chris Michalak`,
    description: cs.description,
  };
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const cs = getCaseStudy(params.slug);
  if (!cs) notFound();

  const images = projectImages[params.slug] ?? [];
  const coverImage = images[0];
  const galleryImages = images.slice(1);
  const next = getNextCaseStudy(params.slug);

  const metaItems = [
    { label: 'Role', value: cs.role },
    { label: 'Timeline', value: cs.duration },
    { label: 'Tools', value: cs.tools },
  ].filter((item) => item.value);

  return (
    <>
      <article className="min-h-screen pb-20">

        {/* ── Hero Banner ── */}
        <div className="bg-gray-50 pt-28 pb-12">
          <div className="max-w-4xl mx-auto px-6">
            <Link
              href="/work"
              className="inline-flex items-center gap-1 text-gray-400 hover:text-gray-700 text-sm transition-colors mb-10"
            >
              ← All Work
            </Link>

            <p className="text-[#C8641A] text-sm font-medium tracking-widest uppercase mb-3">
              {cs.company}
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              {cs.title}
            </h1>

            {/* Meta strip */}
            <div className="flex flex-wrap gap-3">
              {metaItems.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 shadow-sm"
                >
                  <span className="text-gray-400 text-xs font-medium uppercase tracking-wide">
                    {item.label}
                  </span>
                  <span className="text-gray-700 text-sm">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Cover image — bleeds out of hero */}
          {coverImage && (
            <div className="max-w-4xl mx-auto px-6 mt-10">
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-gray-200 shadow-md">
                <Image
                  src={coverImage.src}
                  alt={coverImage.alt}
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
          )}
        </div>

        {/* ── TL;DR ── */}
        <div className="max-w-4xl mx-auto px-6 mt-12 mb-14">
          <div className="rounded-2xl border border-[#C8641A]/30 bg-[#C8641A]/5 p-6 md:p-8">
            <p className="text-[#C8641A] text-xs font-semibold tracking-widest uppercase mb-3">
              TL;DR
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-5">
              {cs.description}
            </p>
            {cs.stat && (
              <div className="flex items-center gap-3 pt-5 border-t border-[#C8641A]/20">
                <span className="text-[#C8641A] text-3xl md:text-4xl font-bold">{cs.stat}</span>
              </div>
            )}
          </div>
        </div>

        {/* ── Case Study Content ── */}
        <div className="max-w-4xl mx-auto px-6 mb-16">
          <MarkdownRenderer content={cs.content} />
        </div>

        {/* ── Image Gallery — full width, stacked, with captions ── */}
        {galleryImages.length > 0 && (
          <div className="max-w-4xl mx-auto px-6 mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px flex-1 bg-gray-200" />
              <p className="text-gray-400 text-xs uppercase tracking-widest font-medium whitespace-nowrap">
                Project Gallery
              </p>
              <div className="h-px flex-1 bg-gray-200" />
            </div>

            <div className="space-y-10">
              {galleryImages.map((img) => (
                <figure key={img.src}>
                  <div className="relative w-full rounded-xl overflow-hidden border border-gray-200 shadow-sm bg-gray-50">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      width={1200}
                      height={800}
                      className="w-full object-cover object-top"
                    />
                  </div>
                  <figcaption className="text-gray-400 text-sm mt-3 text-center">
                    {img.alt}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        )}

        {/* ── Next Project ── */}
        {next && (
          <div className="max-w-4xl mx-auto px-6 mt-16 pt-10 border-t border-gray-200">
            <p className="text-gray-400 text-xs uppercase tracking-widest font-medium mb-4">
              Next Project
            </p>
            <Link
              href={`/work/${next.slug}`}
              className="group flex items-center justify-between p-6 rounded-2xl bg-white border border-gray-200 hover:border-[#C8641A]/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-5">
                {projectImages[next.slug]?.[0] && (
                  <div className="relative w-16 h-16 rounded-xl overflow-hidden border border-gray-200 flex-shrink-0 hidden sm:block">
                    <Image
                      src={projectImages[next.slug][0].src}
                      alt={next.title}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                )}
                <div>
                  <p className="text-[#C8641A] text-xs font-medium tracking-wide uppercase mb-1">
                    {next.company}
                  </p>
                  <h3 className="text-gray-900 font-bold text-xl group-hover:text-[#C8641A] transition-colors">
                    {next.title}
                  </h3>
                  <p className="text-gray-400 text-sm mt-0.5">{next.description}</p>
                </div>
              </div>
              <span className="text-[#C8641A] text-2xl group-hover:translate-x-1 transition-transform flex-shrink-0 ml-4">
                →
              </span>
            </Link>
          </div>
        )}

      </article>

      {/* ── Sticky Get In Touch Bar ── */}
      <StickyContact />
    </>
  );
}
