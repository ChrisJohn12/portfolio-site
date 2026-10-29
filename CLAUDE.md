# CLAUDE.md: Project Instructions

## About This Project
Portfolio website for Chris Michalak, a UX Researcher & Product Designer who
specializes in enterprise workflows, complex systems, and AI product thinking.
The site shows how he works: the decisions, trade-offs, and handoffs behind the
product, not only finished screens.

## Tech Stack
- Next.js 14 (App Router), TypeScript, Tailwind CSS
- Deployed on Vercel

## Design Direction
The source of truth is `design-system.md`. In short:
- Light, warm, and calm. Page background #FAFAF9, alternate sections #F3F2EF
- Inter for type, blue accent #2563EB
- No em dashes anywhere in copy
- No blue-to-purple gradients, gradient text, or other generic AI aesthetics
- Mobile-first and accessible (WCAG 2.2 AA)

## Content Rules
- Case study text lives in `/content/case-studies/` as markdown. The first line is the title; `**Role:**`, `**Company:**`, `**Duration:**` lines feed the page header
- Images live in `/public/assets/{project-name}/`
- Voice: direct, thoughtful, grounded. Lead with context, not a bold claim
- Label every number as measured, estimated, or reasoning. Never invent metrics
- Do not claim results Chris did not see. Say what he did and what he would do next
- Recreated visuals are labeled "Recreation. Client names and data removed."

## Pages
- `/`, `/work`, `/work/[slug]`, `/ai-fluency`, `/about`

## Important
- Always ask before deleting files. Move them to `docs-source/` instead
- Commit with descriptive messages
- Keep components modular and use semantic HTML
