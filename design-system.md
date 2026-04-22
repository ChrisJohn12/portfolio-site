# Design System & Accessibility Guidelines
## chrismichalak.com Portfolio

---

## 1. Color Palette

### Primary Colors
| Token | Hex | Usage |
|-------|-----|-------|
| `--color-bg` | `#FAFAF9` | Page background (warm off-white, not stark white) |
| `--color-bg-alt` | `#F3F2EF` | Alternate section backgrounds |
| `--color-surface` | `#FFFFFF` | Cards, elevated surfaces |
| `--color-text-primary` | `#1A1A1A` | Headings, primary text |
| `--color-text-secondary` | `#555555` | Body text, descriptions |
| `--color-text-muted` | `#717171` | Captions, metadata, labels |
| `--color-accent` | `#2563EB` | Links, CTAs, interactive elements (blue-600) |
| `--color-accent-hover` | `#1D4ED8` | Hover state for accent (blue-700) |
| `--color-accent-subtle` | `#EFF6FF` | Accent background tints (blue-50) |
| `--color-border` | `#E5E5E5` | Card borders, dividers |
| `--color-border-subtle` | `#F0F0F0` | Subtle separators |

### Contrast Ratios (WCAG 2.2 AA compliance)
- `#1A1A1A` on `#FAFAF9` → 15.4:1 ✅ (AAA)
- `#555555` on `#FAFAF9` → 7.2:1 ✅ (AAA)
- `#717171` on `#FAFAF9` → 4.8:1 ✅ (AA)
- `#2563EB` on `#FAFAF9` → 4.6:1 ✅ (AA)
- `#FFFFFF` on `#2563EB` → 4.6:1 ✅ (AA)
- `#1A1A1A` on `#F3F2EF` → 13.8:1 ✅ (AAA)

### What NOT to use
- No pure black `#000000` (too harsh)
- No pure white `#FFFFFF` as page background (too clinical)
- No low-contrast gray-on-gray text
- No gradient text (fails accessibility, hard to read)
- No blue-to-purple gradients (generic AI aesthetic)

---

## 2. Typography

### Font Stack
```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

### Type Scale
| Element | Size | Weight | Line Height | Color |
|---------|------|--------|-------------|-------|
| H1 (page title) | 48px / 3rem | 600 (semibold) | 1.2 | `--color-text-primary` |
| H2 (section title) | 32px / 2rem | 600 (semibold) | 1.3 | `--color-text-primary` |
| H3 (card title) | 22px / 1.375rem | 500 (medium) | 1.4 | `--color-text-primary` |
| Body large | 18px / 1.125rem | 400 (regular) | 1.7 | `--color-text-secondary` |
| Body | 16px / 1rem | 400 (regular) | 1.6 | `--color-text-secondary` |
| Small / Caption | 14px / 0.875rem | 400 (regular) | 1.5 | `--color-text-muted` |
| Tag / Pill | 13px / 0.8125rem | 500 (medium) | 1.4 | `--color-text-secondary` |

### Rules
- Left-align all body text (never center body paragraphs)
- Center only section headings and hero text
- Maximum line width: 680px for body text (readability)
- No em dashes anywhere. Use commas, periods, or semicolons.
- Minimum text size: 14px (never smaller)

---

## 3. Spacing & Layout

### Grid
- Max content width: 1200px (max-w-7xl)
- Horizontal padding: 24px mobile, 32px tablet, 48px desktop
- Section vertical padding: 80px (py-20) desktop, 48px mobile

### Spacing Scale
| Token | Value | Usage |
|-------|-------|-------|
| `xs` | 4px | Tight gaps within components |
| `sm` | 8px | Between related items (tag gaps) |
| `md` | 16px | Component internal padding |
| `lg` | 24px | Between content blocks |
| `xl` | 32px | Section heading to content |
| `2xl` | 48px | Between major sections |
| `3xl` | 64px | Hero to first section |

### Alignment Rules
- All text within a section must share the same left edge
- Card grids: equal gap on all sides (24px)
- No orphaned single items in grid rows on desktop
- Consistent padding inside all cards (24px or 32px, pick one and stick with it)

---

## 4. Components

### Cards
```
Background: var(--color-surface)
Border: 1px solid var(--color-border)
Border radius: 12px
Padding: 24px
Hover: subtle shadow (0 4px 12px rgba(0,0,0,0.08))
Transition: all 200ms ease
```

### Buttons
```
Primary:
  Background: var(--color-accent)
  Text: #FFFFFF
  Padding: 12px 24px
  Border radius: 8px
  Font weight: 500
  Hover: var(--color-accent-hover)

Secondary:
  Background: transparent
  Border: 1px solid var(--color-border)
  Text: var(--color-text-primary)
  Padding: 12px 24px
  Border radius: 8px
  Hover: background var(--color-bg-alt)
```

### Tags / Pills
```
Background: var(--color-bg-alt)
Text: var(--color-text-secondary)
Padding: 6px 14px
Border radius: 9999px (full round)
Font size: 13px
Font weight: 500
```

### Navigation
```
Position: fixed top
Background: var(--color-bg) with 80% opacity + backdrop-blur
Border bottom: 1px solid var(--color-border-subtle)
Height: 64px
Max width: 1200px centered
```

---

## 5. WCAG 2.2 AA Accessibility Requirements

### Color & Contrast
- All text must meet 4.5:1 contrast ratio against its background (AA normal text)
- Large text (24px+ or 18.66px+ bold): 3:1 minimum
- Interactive elements (buttons, links): 3:1 against adjacent colors
- Do NOT rely on color alone to convey meaning (add icons, labels, or underlines)

### Typography & Readability
- Minimum font size: 14px (ideally 16px for body)
- Line height minimum: 1.5x font size for body text
- Paragraph spacing: at least 1.5x line height
- Letter spacing: at least 0.12em for body (if using tight tracking)
- Maximum line length: 80 characters (approximately 680px at 16px)

### Interactive Elements
- Minimum touch target: 44x44px for all clickable elements
- Focus indicators: visible 2px outline in accent color on all focusable elements
- Focus must not be trapped (tab through entire page without getting stuck)
- All links must be distinguishable from surrounding text (underline or color + underline)
- Skip navigation link: add a "Skip to main content" link as the first focusable element

### Images
- All images must have descriptive alt text
- Decorative images: use alt="" (empty) and role="presentation"
- Case study screenshots: describe what the screen shows, not just "screenshot"

### Keyboard Navigation
- All interactive elements reachable via Tab key
- Logical tab order (left to right, top to bottom)
- Enter/Space activates buttons and links
- Escape closes any modals or overlays
- Visible focus ring on ALL focusable elements (never outline: none without replacement)

### Semantic HTML
- Use proper heading hierarchy (h1 → h2 → h3, never skip levels)
- One h1 per page
- Use `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>` landmarks
- Use `<ul>` / `<ol>` for lists, not divs with visual bullets
- Form inputs must have associated `<label>` elements
- Use `aria-label` on icon-only buttons and links

### Motion & Animation
- Respect `prefers-reduced-motion` media query
- No auto-playing animations that can't be paused
- Hover animations should be subtle (200ms, ease transitions)

### Structure
```html
<body>
  <a class="skip-link" href="#main">Skip to main content</a>
  <nav role="navigation" aria-label="Main navigation">...</nav>
  <main id="main" role="main">
    <section aria-labelledby="section-heading-id">...</section>
  </main>
  <footer role="contentinfo">...</footer>
</body>
```

---

## 6. Design Principles

1. **Warm, not cold.** Off-white backgrounds, not stark white. Soft borders, not harsh lines.
2. **Clean, not empty.** Purposeful whitespace, but every section earns its space.
3. **Professional, not generic.** This is a designer's portfolio. It should look intentionally designed, not like a default template.
4. **Readable first.** If in doubt, make text bigger, add more spacing, increase contrast.
5. **No AI aesthetic.** No gradient text, no blue-to-purple gradients, no "AI-powered" visual clichés.
