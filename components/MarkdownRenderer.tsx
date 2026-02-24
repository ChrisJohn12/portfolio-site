'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import NextImage from 'next/image';

export default function MarkdownRenderer({ content }: { content: string }) {
  return (
    <div className="prose prose-lg max-w-none
      prose-headings:font-semibold prose-headings:text-gray-900
      prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
      prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
      prose-p:leading-relaxed prose-p:text-gray-600
      prose-li:text-gray-600
      prose-strong:text-gray-900
      prose-hr:border-gray-200
      prose-a:text-[#C8641A] hover:prose-a:text-[#e07820]">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          img: ({ src, alt }: React.ImgHTMLAttributes<HTMLImageElement>) => {
            if (!src) return null;
            return (
              <figure className="not-prose my-10">
                <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm bg-gray-50">
                  <NextImage
                    src={src}
                    alt={alt ?? ''}
                    width={1200}
                    height={800}
                    className="w-full h-auto"
                    sizes="(max-width: 768px) 100vw, 800px"
                  />
                </div>
                {alt && (
                  <figcaption className="text-gray-400 text-sm mt-3 text-center">
                    {alt}
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
