# Union Pacific Railroad — SAP Mass Contract Create/Change & Enterprise Modernization

## Project Overview

**Role:** UX Researcher & Design Strategist
**Company:** Union Pacific Railroad (Remote, Contract)
**Duration:** May 2023 – May 2025 (2 years)
**Tools:** Figma, FigJam, SAP Fiori, Adobe Experience Manager (AEM), Dovetail AI, Quantum Metrics, Tableau, GPT
**Platforms:** SAP S/4HANA, Fiori, Ariba, Icertis, Adobe Experience Manager

---

## Project Focus

The primary engagement was the SAP Mass Contract Create/Change workflow for Asset Disposition. Union Pacific users were managing contracts with thousands of unique line items, but the legacy SAP flow only supported very small batches. That forced users into copy/paste workarounds and manual reconciliation, which created hours of operational overhead and high error risk.

Related modernization work included UP.com supplier content and supply chain research for Zebra handheld workflows, but those were supporting initiatives rather than the main story.

---

## Workstream 1: SAP Mass Contract Create/Change

### The problem

The Asset Disposition team managed contracts with more than 2,500 line items each, each row requiring a unique combination of customer, pool number, car type, indicator codes, and state. The SAP workflow supported only small batches, so users copied and pasted 100 rows at a time across multiple tabs, then manually updated and reconciled the data.

The same issue appeared in the Scrap Sales Process for 20+ line item contracts across customer, material, bin location, and oil type. The result was slow, error-prone work that made exact data precision difficult to sustain.

### My role

I led end-to-end UX research and design strategy, partnering with business owners, SAP frontend/back-end development leads, and the UX lead.

### Discovery

I mapped the full business process from material requirement through procurement, contract creation, supplier fulfillment, warehouse receipt, and final payment. That work surfaced every decision point, manual handoff, and source of error in the current state.

I also facilitated sessions with the Asset Disposition team to capture where they lost time, where workarounds occurred, and which system constraints were most damaging.

### Design options evaluated

1. **Excel upload** — easy for users, but required continuous custom maintenance.
2. **Data load program** — a backend-heavy approach that exposed users to system complexity and error risk.
3. **Copy/paste from existing** — minimal development, but still limited to 100 rows at a time and retained manual reconciliation.
4. **Custom Fiori application** — scalable, validation-driven, and aligned with users' mental models.

### Recommendation

I recommended the custom Fiori application as the long-term solution. It was the best fit for scale, precision, and usability. The Excel upload option was technically simpler, but it created a brittle experience. The data load program exposed users to backend complexity. The copy/paste approach could not support 2,500+ line item contracts.

The Fiori app would allow users to create and modify contracts at scale with built-in validation, error prevention, and workflow support that aligned with their real process.

### Deliverables

- end-to-end business process flow map
- project brief with problem definition, constraints, and success criteria
- technical specification document (TSD)
- design option evaluation with UX rationale
- Figma designs for the custom Fiori application
- stakeholder presentation with recommendation

---

## Supporting Initiatives

### UP.com Website Modernization

I led UX design and content strategy for supplier-facing sections of UP.com, focusing on scalable content matrices, responsive layouts, and navigation that supported multiple audiences. The work prioritized findability, publishability within AEM, and accessibility while aligning with Union Pacific’s strict brand standards.

### Supply Chain & Warehouse Research

I conducted contextual field research at Fort Worth to validate how SAP and Zebra handheld workflows performed in real operational conditions. This surfaced usability issues around tap targets, confirmation flows, interruption-friendly navigation, and the actual constraints of frontline warehouse work.

---

## AI in My Workflow

AI tools supported the work without replacing analysis:

- **Dovetail AI** for research synthesis, tagging, and clustering insights, which cut synthesis cycles by roughly 40%
- **GPT systems** for drafting technical specifications, user role cards, and content matrices
- **Quantum Metrics** for identifying UX patterns across digital properties and prioritizing high-impact pages and flows

The result was faster insight delivery and more research iterations across business units.

---

## Impact

- **Replaced copy/paste workarounds** in contract creation with a scalable Fiori design for 2,500+ line item contracts
- **Stakeholder-reported task completion improvement of ~30%** in early validation versus the legacy SAP workflow
- **Shortened research turnaround by 40%** using AI-assisted synthesis
- **Delivered personas, journey maps, and blueprints** adopted by multiple business units as reference artifacts
- **Improved accessibility** across AEM content and supplier-facing pages
- **Scaled a repeatable content matrix framework** across the UP.com redesign

---

## Reflection

This engagement reinforced that the most valuable design work in enterprise systems is often about eliminating the work users should never have been asked to do. The design challenge was not just making SAP prettier — it was replacing a fragile, manual process with a scalable workflow that respected the precision and volume of Union Pacific's contract data.

Watching a frontline user move from hand-copying rows to a validated contract flow was the clearest evidence that the biggest design levers in enterprise work are often the ones that remove unnecessary labor.
