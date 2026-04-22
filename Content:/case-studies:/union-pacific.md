# Union Pacific Railroad — Enterprise SAP & Web Modernization

## Project Overview

**Role:** UX Researcher & Design Strategist
**Company:** Union Pacific Railroad (Remote, Contract)
**Duration:** May 2023 – May 2025 (2 years)
**Tools:** Figma, FigJam, SAP Fiori, Adobe Experience Manager (AEM), Dovetail AI, Quantum Metrics, Tableau, GPT
**Platforms:** SAP S/4HANA, Fiori, Ariba, Icertis, Adobe Experience Manager

---

## The Problem

Union Pacific is one of America's largest Class I railroads — a 160-year-old company covering 23 states, moving 1.6 billion tons of freight annually with 8 million carloads per year. Behind the locomotives, the company runs on SAP ERP for everything from parts procurement to contract management to warehouse operations.

The challenge: these enterprise workflows had grown organically over decades. Procurement teams were managing contracts with 2,500+ line items through manual processes and copy-paste workarounds. Warehouse teams tracked parts using handheld Zebra devices running SAP interfaces that hadn't been redesigned for modern use. And the customer-facing website (UP.com) needed a full content and navigation overhaul to match the company's digital transformation goals.

I was brought in to lead UX research and design strategy across three interconnected workstreams: SAP ERP workflow optimization, a major enterprise web redesign, and supply chain transformation support.

---

## Workstream 1: SAP Mass Contract Create/Change (SAPPHO-23648)

### The Problem

Union Pacific's Asset Disposition team managed equipment contracts containing a minimum of 2,500 line items each — with unique combinations of customer, pool number, car type, indicator codes, and state. Creating or modifying these contracts was a manual nightmare. The existing process forced users to copy and paste data 100 lines at a time, then manually update each tab. The Scrap Sales Process had similar issues with 20+ line item contracts across unique combinations of customer, material, bin location, and oil type.

Error rates were high. The workflow was slow. And the team was spending hours on data entry that should have been automated.

### My Role

I owned the end-to-end research and design strategy for this project, working with business partners, the SAP development team (frontend and backend leads), and the UX lead.

### Discovery

I started by mapping the complete business process — from initial material requirement through procurement, contract creation, supplier fulfillment, warehouse receipt, to final payment. This produced a detailed process flow that identified every decision point, manual step, and system handoff in the current state.

I then facilitated discussions with the Asset Disposition team to understand their pain points at a granular level: where they lost time, where errors occurred, and what workarounds they'd built.

### Design Options Evaluated

Working with the development team, I evaluated four approaches:

1. **Excel Upload** — Custom Fiori app with Excel import UI. Easy for users but requires ongoing maintenance.
2. **Data Load Program** — One-time development, but requires users to interact with backend systems. Poor UX and high error potential.
3. **Copy/Paste from Existing** — No development work, but limited to 100 lines at a time. Users still had to manually update each tab.
4. **Custom Fiori Application** — Full custom app allowing users to create and modify contracts at scale with the level of detail they need.

### Recommendation

I recommended the custom Fiori application as the best path — both from a UX perspective and for long-term operational efficiency. The Excel upload option, while technically simpler, created a poor user experience. The data load program exposed users to backend complexity and error risk. The copy/paste approach simply couldn't handle the scale (2,500+ items at 100 per batch).

The custom Fiori app would let users manage contracts at full scale with validation, error prevention, and a workflow that matched their mental model — not the system's limitations.

### Deliverables

- End-to-end business process flow mapping
- Project brief with problem definition, constraints, and success metrics
- Technical specification document (TSD)
- Four design option evaluations with UX rationale
- Figma design files for the Fiori application
- Stakeholder presentation with recommendation

---

## Workstream 2: UP.com Website Modernization

### The Problem

Union Pacific's public website served multiple audiences — shippers, suppliers, investors, job seekers, and community members — but the information architecture had become unwieldy. Content was hard to find, pages lacked clear hierarchy, and the site wasn't optimized for modern search or mobile use.

The company initiated a full redesign built on Adobe Experience Manager (AEM), requiring a complete rethink of content strategy, page templates, navigation, and SEO.

### My Role

I led the UX design and content strategy for key sections of the redesign, including the Suppliers hub (Existing Suppliers, Supplier Advancement & Expansion, New Supplier) and supporting interior pages. I worked directly with the UP.com content team on design sessions and content matrix development.

### Process

**Content Matrix Development:** I created and managed content matrices for complex landing pages — structured templates that mapped every module, content block, navigation path, SEO tagging, and asset requirement for each page. These matrices became the bridge between design decisions and AEM implementation, ensuring nothing was lost in translation between UX and engineering.

**Page Design:** I designed responsive page layouts using UP's modular component system (Hero banners, icon pillars, alternating content blocks, feature cards, contact modules). Each page needed to work across desktop and mobile while maintaining UP's brand standards — the distinctive blue/yellow palette, strict typography hierarchy, and accessibility requirements.

**Supplier Pages:** The Existing Suppliers page consolidated information for Carriers, Material Suppliers, and Service Suppliers into a single navigable hub with video integration, statistics modules, and categorized entry points. The Supplier Advancement & Expansion page highlighted UP's 40+ year diversity program with clear calls to action for prospective suppliers.

### Deliverables

- Content matrices for all assigned pages
- High-fidelity page designs (desktop + mobile responsive)
- Component specifications aligned to AEM module library
- Navigation path definitions (L1→L2→L3 hierarchy)
- SEO keyword tagging and meta descriptions
- Stakeholder design review sessions

---

## Workstream 3: Supply Chain & Warehouse Research

### The Problem

Union Pacific's supply chain transformation (Project FAST) involved migrating procurement and inventory systems to SAP S/4HANA with Ariba and Icertis integrations. Warehouse workers across the network used Zebra handheld devices to manage parts — scanning bins, checking inventory, processing receipts, and managing stock transfers. These workflows needed to work reliably in physical environments (warehouses, rail yards) with real operational constraints.

### My Role

I conducted contextual research to understand how warehouse teams actually used the SAP interfaces on their Zebra devices, identified usability issues, and provided design recommendations for improved workflows.

### Research Methods

**Contextual Inquiry:** I conducted field research at the Fort Worth facility, observing warehouse workers using Zebra handhelds in their actual work environment. This revealed usability issues that wouldn't surface in a lab setting — small screen constraints, glove-friendly tap targets, ambient lighting conditions, and the reality of interruption-heavy workflows.

**Process Flow Mapping:** I mapped the end-to-end procurement-to-payment flow: from material requirements planning (MRP) generating purchase orders, through supplier fulfillment, goods receipt, quality inspection, bin assignment, and final payment via ARMS (UP's payment system). This mapping identified every touchpoint where warehouse workers interacted with the system and where the process broke down.

**User Role Cards:** I developed comprehensive persona-style user role cards that captured not just demographics, but the user's perspective, goals, tasks, jobs to be done, network mapping, and synthesized user feedback. These became shared reference documents across the product team.

**Stakeholder Synthesis:** I used Dovetail AI to accelerate research synthesis, cutting turnaround time by approximately 40%. Combined with Quantum Metrics for behavioral analytics and Tableau for data visualization, this gave the team a multi-layered view of both qualitative insights and quantitative usage patterns.

### Key Findings

- Warehouse workers relied heavily on workarounds that the system didn't officially support — these needed to be designed into the new workflows, not eliminated
- The goods receipt process had critical handoff points between warehouse clerks and inventory systems where data was frequently lost or mismatched
- Zebra device interfaces needed larger tap targets, simplified navigation, and confirmation steps that accounted for the physical environment (noise, movement, gloves)
- The scrap/return process was particularly pain-heavy, with workers needing to navigate multiple system steps to initiate what should be a simple vendor return

### Deliverables

- Contextual inquiry findings and field research report
- End-to-end supply chain process flow documentation
- User role cards for key warehouse personas
- SAP Basic Navigation Quick Reference Guide (for Ariba and Icertis)
- Usability recommendations for Zebra handheld interfaces
- Research synthesis via Dovetail AI

---

## AI in My Workflow

AI tools were integrated throughout my two years at Union Pacific:

- **Dovetail AI** for research synthesis — tagging, clustering, and surfacing patterns across interview transcripts and field notes. This cut my synthesis cycles by roughly 40%.
- **GPT systems** for drafting technical specification documents, generating initial content for user role cards, and accelerating the creation of content matrices.
- **Quantum Metrics** (analytics AI) for identifying behavioral patterns across the digital properties, helping prioritize which pages and flows had the highest impact usability issues.

The key wasn't using AI to replace analysis — it was using it to compress the time between raw data and shareable insight, which let me run more research cycles in the same timeframe.

---

## Impact

- **Reduced manual errors** in contract creation workflows by designing a scalable Fiori application to replace copy/paste workarounds for 2,500+ line item contracts
- **Task completion improvement of ~30%** through streamlined SAP ERP interfaces based on contextual research findings
- **Research turnaround reduced by 40%** through AI-assisted synthesis (Dovetail AI), enabling faster decision cycles across multiple business units
- **Personas, journey maps, and service blueprints adopted across multiple business units** as standard reference documents for enterprise product decisions
- **Accessibility improvements** driven through AEM content optimization and WCAG 2.1 compliance reviews across customer-facing pages
- **Content matrix framework** scaled as a repeatable template across the UP.com redesign, used by multiple content teams

---

## Reflection

Union Pacific was a masterclass in designing within constraints — not the fun kind of creative constraints, but real enterprise complexity: legacy systems with decades of accumulated logic, thousands of internal users with deeply ingrained workflows, and technology decisions that had to work within SAP's capabilities.

The most valuable thing I brought to this work wasn't visual design — it was the ability to sit in a warehouse in Fort Worth, watch someone use a Zebra handheld to scan parts bins, and translate what I observed into design decisions that a development team in another state could implement. That bridge between field reality and system design is where research-driven product design creates the most value in enterprise contexts.
