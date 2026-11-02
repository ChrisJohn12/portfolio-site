'use client';

import { Children, isValidElement, type ReactNode } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import ZoomableImage from './ZoomableImage';
import CollapsibleSection from './case-studies/CollapsibleSection';
import { parseHeading, slugifyHeading } from '@/lib/headings';

function nodeText(node: ReactNode): string {
  return Children.toArray(node)
    .map((child) => {
      if (typeof child === 'string' || typeof child === 'number') return String(child);
      if (isValidElement(child)) return nodeText((child.props as { children?: ReactNode }).children);
      return '';
    })
    .join('');
}

const components = {
  // Images render as <figure>, which cannot sit inside <p>. Unwrap paragraphs that only hold an image.
  p: ({ node, children }: { node?: { children?: unknown[] }; children?: ReactNode }) => {
    const kids = (node?.children ?? []) as Array<{ type: string; tagName?: string; value?: string }>;
    const onlyImage = kids.length > 0 && kids.every(
      (c) => (c.type === 'element' && c.tagName === 'img') || (c.type === 'text' && !(c.value ?? '').trim())
    );
    return onlyImage ? <>{children}</> : <p>{children}</p>;
  },
  // Headings get ids so the jump-link bar can find them.
  h2: ({ children }: { children?: ReactNode }) => (
    <h2 id={slugifyHeading(nodeText(children))} className="scroll-mt-36">{parseHeading(nodeText(children)).title}</h2>
  ),
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
};

function Md({ children }: { children: string }) {
  return (
    <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
      {children}
    </ReactMarkdown>
  );
}

/**
 * Renders case study markdown. A "## Heading {collapsed}" section is rendered as a
 * collapsed-by-default block, so supporting material does not slow down a skim.
 */
export default function MarkdownRenderer({ content }: { content: string }) {
  const chunks = content.split(/^(?=## )/m).filter((c) => c.trim());

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
      {chunks.map((chunk, i) => {
        const firstLine = chunk.split('\n', 1)[0];
        const heading = chunk.startsWith('## ') ? parseHeading(firstLine.replace(/^##\s+/, '')) : null;
        if (heading?.collapsed) {
          const label = heading.title;
          const body = chunk.slice(firstLine.length);
          return (
            <CollapsibleSection key={i} id={slugifyHeading(label)} label={label}>
              <Md>{body}</Md>
            </CollapsibleSection>
          );
        }
        return <Md key={i}>{chunk}</Md>;
      })}
    </div>
  );
}
