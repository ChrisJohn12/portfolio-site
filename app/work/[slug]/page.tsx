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
        <div className="bg-[#F3F2EF] pt-28 pb-12">
          <div className="max-w-4xl mx-auto px-6">
            <Link
              href="/work"
              className="inline-flex items-center gap-1 text-[#717171] hover:text-[#1A1A1A] text-sm transition-colors mb-10 min-h-[44px]"
            >
              ← All Work
            </Link>

            <p className="text-[#2563EB] text-sm font-medium tracking-widest uppercase mb-3">
              {cs.company}
            </p>
            <h1 className="text-[48px] font-semibold text-[#1A1A1A] mb-8 leading-tight">
              {cs.title}
            </h1>

            {/* Meta strip */}
            <div className="flex flex-wrap gap-3">
              {metaItems.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-2 bg-white border border-[#E5E5E5] rounded-full px-4 py-2"
                >
                  <span className="text-[#717171] text-xs font-medium uppercase tracking-wide">
                    {item.label}
                  </span>
                  <span className="text-[#1A1A1A] text-sm">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Cover image */}
          {coverImage && (
            <div className="max-w-4xl mx-auto px-6 mt-10">
              <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-[#E5E5E5] shadow-sm">
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
          <div className="rounded-xl border border-[#2563EB]/20 bg-[#EFF6FF] p-6 md:p-8">
            <p className="text-[#2563EB] text-xs font-semibold tracking-widest uppercase mb-3">
              TL;DR
            </p>
            <p className="text-[#555555] text-lg leading-relaxed mb-5">
              {cs.description}
            </p>
            {cs.stat && (
              <div className="flex items-center gap-3 pt-5 border-t border-[#2563EB]/20">
                <span className="text-[#2563EB] text-3xl md:text-4xl font-semibold">{cs.stat}</span>
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
              <div className="h-px flex-1 bg-[#E5E5E5]" aria-hidden="true" />
              <p className="text-[#717171] text-xs uppercase tracking-widest font-medium whitespace-nowrap">
                Project Gallery
              </p>
              <div className="h-px flex-1 bg-[#E5E5E5]" aria-hidden="true" />
            </div>

            <div className="space-y-10">
              {galleryImages.map((img) => (
                <figure key={img.src}>
                  <div className="relative w-full rounded-xl overflow-hidden border border-[#E5E5E5] shadow-sm bg-[#F3F2EF]">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      width={1200}
                      height={800}
                      className="w-full object-cover object-top"
                    />
                  </div>
                  <figcaption className="text-[#717171] text-sm mt-3 text-center">
                    {img.alt}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        )}

        {/* ── Next Project ── */}
        {next && (
          <div className="max-w-4xl mx-auto px-6 mt-16 pt-10 border-t border-[#E5E5E5]">
            <p className="text-[#717171] text-xs uppercase tracking-widest font-medium mb-4">
              Next Project
            </p>
            <Link
              href={`/work/${next.slug}`}
              className="group flex items-center justify-between p-6 rounded-xl bg-white border border-[#E5E5E5] hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)] transition-all duration-200"
            >
              <div className="flex items-center gap-5">
                {projectImages[next.slug]?.[0] && (
                  <div className="relative w-16 h-16 rounded-xl overflow-hidden border border-[#E5E5E5] flex-shrink-0 hidden sm:block">
                    <Image
                      src={projectImages[next.slug][0].src}
                      alt={`${next.title} thumbnail`}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                )}
                <div>
                  <p className="text-[#2563EB] text-xs font-medium tracking-wide uppercase mb-1">
                    {next.company}
                  </p>
                  <h3 className="text-[#1A1A1A] font-semibold text-xl group-hover:text-[#2563EB] transition-colors">
                    {next.title}
                  </h3>
                  <p className="text-[#717171] text-sm mt-0.5">{next.description}</p>
                </div>
              </div>
              <span className="text-[#2563EB] text-2xl group-hover:translate-x-1 transition-transform flex-shrink-0 ml-4" aria-hidden="true">
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
