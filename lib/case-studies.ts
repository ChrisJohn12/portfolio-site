import fs from 'fs';
import path from 'path';

export interface CaseStudy {
  slug: string;
  title: string;
  content: string;
  company: string;
  role: string;
  duration: string;
  tools: string;
  coverImage: string;
  tags: string[];
  description: string;
  stat: string;
}

const CASE_STUDIES_DIR = path.join(process.cwd(), 'content/case-studies');

function extract(content: string, key: string): string {
  const match = content.match(new RegExp(`\\*\\*${key}:\\*\\* (.+)`));
  return match?.[1]?.trim() ?? '';
}

const projectMeta: Record<string, Pick<CaseStudy, 'coverImage' | 'tags' | 'description' | 'stat'>> = {
  shipdeez: {
    coverImage: '/assets/shipdeez/landing-page.png',
    tags: ['UX Design', 'Brand Identity', 'Design System', 'Webflow'],
    description:
      'End-to-end UX for a shipping startup, from brand identity to live product in 10 business days.',
    stat: '85% savings off retail shipping rates',
  },
  'union-pacific': {
    coverImage: '/assets/union-pacific/photos/FW-warehouse.jpg',
    tags: ['UX Research', 'Enterprise Design', 'SAP Fiori', 'AI Integration'],
    description:
      'Research-led design across SAP ERP workflows, UP.com redesign, and supply chain transformation over 2 years.',
    stat: '2,500+ line item contracts redesigned',
  },
  tmobile: {
    coverImage: '/assets/tmobile/CNV-wireframes-2.png',
    tags: ['UX Research', 'Journey Mapping', 'Ethnographic Research'],
    description:
      'Billing tools, customer notification visibility, and omni-channel journey mapping across CARE and retail.',
    stat: '10.3M annual billing calls addressed',
  },
};

export function getCaseStudy(slug: string): CaseStudy | null {
  try {
    const filePath = path.join(CASE_STUDIES_DIR, `${slug}.md`);
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    const title = lines[0].replace(/^#+\s*/, '').trim();

    const company =
      extract(content, 'Company') ||
      extract(content, 'Client') ||
      '';
    const duration =
      extract(content, 'Duration') ||
      extract(content, 'Timeline') ||
      '';

    return {
      slug,
      title,
      content,
      company,
      role: extract(content, 'Role'),
      duration,
      tools: extract(content, 'Tools'),
      ...(projectMeta[slug] ?? {
        coverImage: '',
        tags: [],
        description: '',
        stat: '',
      }),
    };
  } catch {
    return null;
  }
}

const slugOrder = ['shipdeez', 'union-pacific', 'tmobile'] as const;

export function getAllCaseStudies(): CaseStudy[] {
  return [...slugOrder]
    .map(getCaseStudy)
    .filter(Boolean) as CaseStudy[];
}

export function getNextCaseStudy(currentSlug: string): CaseStudy | null {
  const currentIndex = slugOrder.indexOf(currentSlug as typeof slugOrder[number]);
  if (currentIndex === -1) return null;
  const nextSlug = slugOrder[(currentIndex + 1) % slugOrder.length];
  return getCaseStudy(nextSlug);
}

export const projectImages: Record<string, { src: string; alt: string }[]> = {
  // ShipDeez images are embedded inline in the markdown — only the cover is needed here
  // for the hero banner and the "Next project" thumbnail on other case study pages.
  shipdeez: [
    { src: '/assets/shipdeez/landing-page.png', alt: 'ShipDeez landing page' },
  ],
  'union-pacific': [
    { src: '/assets/union-pacific/photos/FW-warehouse.jpg', alt: 'Fort Worth warehouse field research' },
    { src: '/assets/union-pacific/photos/Zebra-viewing.jpg', alt: 'Zebra handheld device research' },
    { src: '/assets/union-pacific/Process-flow-mapping.png', alt: 'Supply chain process flow mapping' },
    { src: '/assets/union-pacific/TSD.png', alt: 'Technical specification document' },
    { src: '/assets/union-pacific/Fort Worth testing (1).png', alt: 'Fort Worth usability testing' },
    { src: '/assets/union-pacific/Zebra-screenshot.png', alt: 'SAP Zebra interface screenshot' },
    { src: '/assets/union-pacific/Existing Supplier page.jpg', alt: 'Existing supplier page design' },
    { src: '/assets/union-pacific/Supplier-Advancement-Expansion.jpg', alt: 'Supplier advancement and expansion page' },
  ],
  tmobile: [
    { src: '/assets/tmobile/CNV-wireframes-2.png', alt: 'Customer notification visibility wireframes' },
    { src: '/assets/tmobile/CNV-wireframes-3.png', alt: 'CNV prototype iteration' },
    { src: '/assets/tmobile/Accessibility.png', alt: 'Accessibility journey map framework' },
    { src: '/assets/tmobile/Ethnographic-research-Notes.jpg', alt: 'Ethnographic research field notes' },
    { src: '/assets/tmobile/customer-upgrade-journey-map.jpg', alt: 'Customer upgrade journey map' },
  ],
};
