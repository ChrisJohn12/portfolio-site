// Shared by the markdown renderer (client) and the case study page (server), so it lives outside both.
// A heading can carry two optional markers: {collapsed} and {nav=Short label}.
export const COLLAPSED_MARKER = '{collapsed}';
const NAV_MARKER = /\{nav=([^}]+)\}/;

export function parseHeading(raw: string) {
  const navOverride = raw.match(NAV_MARKER)?.[1]?.trim();
  const title = raw.replace(NAV_MARKER, '').replace(COLLAPSED_MARKER, '').replace(/\s+/g, ' ').trim();
  return {
    title,
    collapsed: raw.includes(COLLAPSED_MARKER),
    // Default jump-link label: the part of the heading before any colon.
    nav: navOverride ?? title.split(':')[0].trim(),
  };
}

export function slugifyHeading(raw: string): string {
  return parseHeading(raw)
    .title.toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}
