'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import ZoomableImage from './ZoomableImage';

export default function MarkdownRenderer({ content }: { content: string }) {
  return (
    <div className="prose prose-lg max-w-none
      prose-headings:font-semibold prose-headings:text-[#1A1A1A]
      prose-h2:text-[32px] prose-h2:mt-12 prose-h2:mb-4 prose-h2:font-semibold
      prose-h3:text-[22px] prose-h3:mt-8 prose-h3:mb-3 prose-h3:font-medium
      prose-p:leading-relaxed prose-p:text-[#555555]
      prose-li:text-[#555555]
      prose-strong:text-[#1A1A1A]
      prose-hr:border-[#E5E5E5]
      prose-a:text-[#2563EB] prose-a:underline hover:prose-a:text-[#1D4ED8]">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          // Images render as <figure>, which cannot sit inside <p>. Unwrap paragraphs that only hold an image.
          p: ({ node, children }) => {
            const kids = (node?.children ?? []) as Array<{ type: string; tagName?: string; value?: string }>;
            const onlyImage = kids.length > 0 && kids.every(
              (c) => (c.type === 'element' && c.tagName === 'img') || (c.type === 'text' && !(c.value ?? '').trim())
            );
            return onlyImage ? <>{children}</> : <p>{children}</p>;
          },
          img: ({ src, alt, title }: React.ImgHTMLAttributes<HTMLImageElement>) => {
            if (!src) return null;
            return (
              <figure className="not-prose my-10">
                <div className="rounded-xl overflow-hidden border border-[#E5E5E5] shadow-sm bg-[#F3F2EF]">
                  <ZoomableImage
                    src={String(src)}
                    alt={alt ?? ''}
                    width={1200}
                    height={800}
                    className="w-full h-auto"
                    sizes="(max-width: 768px) 100vw, 800px"
                  />
                </div>
                {title && (
                  <figcaption className="text-[#717171] text-sm mt-3 text-center">
                    {title}
                  </figcaption>
                )}
              </figure>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
