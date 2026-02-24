# T-Mobile — Frontline Employee Tools & Billing Transparency

## Project Overview

**Role:** UX Researcher, Enterprise Technology Solutions
**Company:** T-Mobile (Remote + Field, Contract)
**Duration:** March 2022 – April 2023 (13 months)
**Tools:** UXPin, Figma, FigJam, UserZoom, SurveyMonkey, Dovetail, Miro
**Platform:** ATLAS (T-Mobile's primary frontline CRM), SAMSON, DASH, REMO

---

## The Problem

T-Mobile's CARE Experts (call center reps) and Mobile Experts (retail associates) serve millions of customers daily using internal tools that hadn't kept pace with the complexity of T-Mobile's products. Billing questions alone drove 10.3 million calls per year into CARE, with 30% of those requiring reps to compare two or more bills — a process averaging 20 minutes per call and ranking as one of the longest call resolution times across all call types.

Beyond billing, reps lacked visibility into customer communications (SMS notifications sent by T-Mobile), struggled with network troubleshooting tools that required jumping between multiple disconnected systems, and operated within a platform (ATLAS) that wasn't designed for the speed and context-switching their jobs demanded.

I was hired as the UX Researcher on the Enterprise Technology Solutions team, responsible for leading research that directly informed product decisions across multiple workstreams.

---

## Project 1: Bill Comparison Tool

### The Problem

When customers called about unexpected bill changes, CARE Experts had no effective way to compare bills side-by-side. The existing bill comparison tool in ATLAS was so cumbersome that most reps didn't even know it existed — or had abandoned it after training. Instead, reps were pulling up individual PDF bills manually, a process that added significant time to every call.

The biggest call drivers were bill shock (customers seeing a total without understanding what changed), mid-cycle plan changes where dates weren't clear, adjustments that didn't appear immediately, and international charges that surprised customers.

### Research

I designed and led user feedback sessions with 7 CARE Experts in August 2022, testing prototype designs for a new bill comparison experience. My goal wasn't just to validate the UI — it was to understand how reps actually investigated billing questions in practice, so the new tool could match their real workflow rather than an idealized one.

### Key Findings

I discovered that reps had developed three distinct workaround strategies, each with different strengths. Most reps preferred pulling PDF bills because they could see exactly what the customer sees. Senior reps (4-5+ years) gravitated toward SAMSON's columned three-bill view. Almost nobody used the existing ATLAS comparison tool. This told us the new design needed to combine the best of all three: the customer-matching detail of PDFs, the side-by-side structure of SAMSON, and the contextual integration of ATLAS.

Other critical findings: charge category labels were confusing (customers and reps both struggled with terms like "one-time charges" vs. "services"), the UI didn't make it clear that itemized categories were clickable for drill-down, and reps needed at minimum three bills to compare — not just two — since most customer confusion spans multiple billing cycles.

### Recommendations

My research led to specific, implementable recommendations: use clear iconography (arrows, color coding) to surface increases and decreases in charges; spell out one-time charges with specific dates, amounts, and line attribution; make bill cycle dates prominent; show payment arrangement status; and ensure the three-bill comparison view was the default — not a hidden feature.

These recommendations directly shaped the design direction for the bill comparison tool within ATLAS.

---

## Project 2: Customer Notification Visibility (CNV)

### The Problem

Customers regularly called CARE about SMS messages they received (or claimed they didn't receive) from T-Mobile — billing alerts, order updates, roaming notifications, plan changes, and more. But CARE Experts had no centralized way to see what messages had been sent to a customer. Their only option was to search through the memo history tab, which was unreliable and time-consuming.

### Research

I led user feedback sessions with 6 CARE Experts in July 2022, testing UXPin prototypes of a new Customer Notification Visibility tool. The prototypes explored different approaches for displaying outbound message history — including an accordion layout, a blade (card) layout, and variations on how much metadata to expose per message.

### Key Findings

Reps overwhelmingly preferred the accordion model because it was consistent with existing ATLAS interaction patterns and required fewer clicks than the blade approach. They wanted to see who sent the message (automated vs. another CARE Expert) and what number it came from, so they could help customers locate the specific message on their phone.

A critical insight: most reps had no idea what "Dynamic Tag Field" or "Source System ID" meant — metadata that engineers assumed would be useful was actually noise. The Short Code, however, was valuable and should stay. Reps also wanted the ability to cross-reference SMS messages with related memos, linking communication history to action history.

### Recommendations

I recommended removing source system ID, dynamic tag field, and language fields (irrelevant to reps), keeping Short Code, adding sender identification, implementing the accordion model, and creating the ability to link SMS records to related memos. I also provided a comprehensive taxonomy of message categories (billing, insurance, order status, promotions, suspensions, plan changes, and more) to enable filtering.

---

## Project 3: Omni-Channel Billing Transparency Journey Mapping

### The Problem

Billing confusion wasn't just a tool problem — it was a systemic experience problem that started the moment a customer walked into a store or called CARE and extended through their third bill cycle. T-Mobile needed to understand the full journey to identify where expectations were being set (or broken).

### Research

I was one of three researchers on this initiative, conducting ethnographic observations of device upgrades across seven T-Mobile retail stores (in Washington and Illinois) in December 2022. We observed 5 customers and interviewed 8 Mobile Experts across locations ranging from mall flagship stores to neighborhood shops.

The field research was paired with cross-functional working sessions that brought together UX design, customer experience, system engineering, product management, and strategy teams to collaboratively map the journey from the perspectives of customers, CARE Experts, and Mobile Experts simultaneously.

### Key Findings

Billing transparency issues started far earlier than the bill itself. During the add-a-line or upgrade flow, customers wanted to know their total cost impact immediately — but that information wasn't available until the very end of the transaction. Promotion selection was a manual process prone to errors. There was no automated method for verifying promotion eligibility, meaning promos could "fall out" of the process after order entry, causing billing confusion and follow-up calls.

The journey mapping revealed eight distinct phases where trust was either built or broken, from initial contact through the third bill cycle. We identified that billing transparency wasn't a feature to add — it was a thread that needed to run through every phase of the customer and employee experience.

System instability compounded everything: crashes during calls interrupted flow and increased frustration, and reps had to jump between DASH, SAMSON, and Grand Central just to complete basic transactions.

---

## Project 4: Accessibility Journey Map Framework

### Research

I contributed to developing an accessibility-focused customer journey map framework — a structured template for mapping the end-to-end experience of customers with accessibility needs across T-Mobile's products and services.

The framework tracked customer phases and T-Mobile Expert phases in parallel, capturing emotions, jobs to be done, enhancement opportunities, moments that matter, and onboarding/transparency touchpoints — all through an accessibility lens. This wasn't a one-off audit; it was a reusable research tool designed to systematically surface accessibility gaps across any T-Mobile product journey.

I also contributed to exploratory research around VRS (Video Relay Service) customer onboarding, exploring the question: "How might we help the deaf and hard of hearing population simplify their calling experience, while making their daily calls?" This work mapped the full VRS onboarding flow from initial engagement through set-up, follow-up, and retention, identifying pain points specific to accessibility-dependent customers.

---

## Project 5: Network Troubleshooting Research

### Context

T-Mobile's internal network troubleshooting tool (within ATLAS) allowed CARE and retail reps to diagnose customer connectivity issues — checking device compatibility, viewing coverage maps, identifying local site issues, and reviewing tower status. I conducted research on this tool to understand how frontline reps used it during real troubleshooting calls.

The tool surfaced dense technical data: coverage layers (4G Commercial, Residential, In-Vehicle, Outdoor), device band compatibility (LTE 600/700/850/1900/2100, 5G NSA/SA), tower maintenance history, site congestion status, and local outage information. Understanding how reps parsed this information — and where they got stuck — was critical for improving the troubleshooting workflow.

---

## Impact

- **Bill Comparison research directly influenced the redesign** of ATLAS's billing tools, addressing the #1 call driver (10.3M annual calls, 30% requiring bill comparison) with specific, research-backed design recommendations
- **CNV research shaped a new tool** that gave CARE Experts visibility into all customer-facing SMS communications for the first time, reducing the guesswork in message-related calls
- **Journey mapping identified systemic billing transparency gaps** across eight customer journey phases, influencing roadmap priorities for billing, promotions, and checkout experiences
- **Accessibility framework created a reusable research tool** for systematically evaluating T-Mobile products through an accessibility lens, including VRS onboarding research
- **Field research across 7 retail locations** provided ethnographic evidence that informed both the journey map and retail-specific tool improvements

---

## Reflection

The T-Mobile work taught me something that has shaped every project since: the most impactful research doesn't just answer the question you were asked — it reframes the question entirely. The bill comparison project started as "test this prototype" and ended as "here's why your billing experience is broken at a systemic level and where to focus." The CNV project started as "validate this layout" and ended as "here's what metadata your reps actually need and what you should remove."

Working across both CARE (call center) and Retail (in-store) channels also reinforced that the same product can have completely different usability profiles depending on the context. A rep sitting at a desk with a headset navigates differently than a rep standing in a store with a tablet and a customer watching. Designing for both requires going to both places and observing both realities — not assuming one research study covers everything.
