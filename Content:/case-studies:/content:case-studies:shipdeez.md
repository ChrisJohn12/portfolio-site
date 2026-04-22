# ShipDeez — E-Commerce Shipping Platform

## Project Overview

**Role:** Lead Product Designer (UX, UI, Brand, Analytics, Webflow)
**Client:** Backhaul Direct, LLC
**Timeline:** 2-week high-intensity launch sprint (10 business days)
**Status:** Built and ready for launch
**Tools:** Figma, Webflow, Google Analytics 4, Microsoft Clarity, Claude, GPT

---

## The Problem

Small and midsize shippers consistently overpay for parcel shipping. Without the volume leverage that enterprise shippers enjoy, an individual small business owner or casual shipper pays full retail rates — often 50–85% more than necessary — because they lack access to negotiated carrier programs.

Backhaul Direct, a logistics company with established carrier relationships, saw an opportunity: aggregate buying power across thousands of small shippers and pass the savings through to them via a simple, consumer-friendly shipping platform called ShipDeez.

The challenge? The product needed to launch fast — within a hard contract start window of March 1, 2026 — and the experience had to feel simple and trustworthy despite sitting on top of a complex infrastructure of third-party platforms (EasyPost for carrier connectivity, ShipBlink for merchant-facing interfaces, and EasyPost Forge for white-label branding).

---

## Constraints

This wasn't a blue-sky design exercise. It was a tightly scoped sprint with real business pressure:

- **Hard deadline:** 10 business days. Not aspirational — contractual. The underlying platform contracts activated on March 1, with or without a designed product.
- **Complex platform stack:** Three third-party systems (EasyPost, ShipBlink, Forge) each with their own capabilities and limitations. Every design decision had to work within what these platforms could actually do in v1.
- **No custom backend:** All designs had to operate within the existing API and platform capabilities. No server-side development was in scope.
- **Two distinct user types:** Guest users who want to print one label immediately (no account required), and authenticated users who ship regularly and need dashboards, saved addresses, and volume tracking.
- **Brand from scratch:** ShipDeez had no existing brand identity. Visual direction, tone, component library, and design system all had to be created from zero alongside the product design.
- **Wallet-based billing:** EasyPost uses a pre-funded wallet model at $0.04 per label. This meant designing for edge cases most shipping platforms don't face: insufficient funds, failed charges, and wallet top-up flows.

---

## My Role

I was the sole designer and strategist on this project, responsible for:

- UX strategy and end-to-end user flow architecture
- Information architecture and sitemap
- Wireframes and high-fidelity UI for all core screens
- Design system and component library creation
- Brand identity (color, typography, tone of voice)
- Landing page design and Webflow implementation
- Analytics instrumentation plan (GA4 + heatmapping)
- Developer handoff documentation
- Platform implementation mapping (which screens live in ShipBlink vs. custom UI vs. EasyPost API)

I worked directly with the executive sponsor (CEO), the project lead, and the product/technical lead across daily check-ins and weekly acceptance demos.

---

## Discovery & Research

### Stakeholder Alignment

The engagement started with a kickoff session with the full SHIPDEEZ team to align on target personas, technical constraints around the ShipBlink/EasyPost stack, brand direction, and the commercial offer ("up to 85% savings off retail rates").

### Key Research Inputs

- **Platform walkthroughs:** I conducted in-depth reviews of ShipBlink's white-label screens, EasyPost's API documentation, and Forge's customization capabilities to understand exactly what could and couldn't be done in v1.
- **Competitive analysis:** I mapped the shipping label market (Pirate Ship, Shippo, EasyShip) to understand table-stakes features and identify differentiation opportunities.
- **SMB persona development:** Working from client insights about their target market, I mapped two primary user types and their distinct needs and mental models.

### Two Core Personas

**The Guest Shipper ("Just Print Me a Label")**
- Ships once or rarely
- Doesn't want to create an account
- Needs the fastest path from "I have a package" to "I have a label"
- Pays with a credit card, one and done
- Cares most about price and speed

**The Regular Shipper ("I Ship Weekly+")**
- Small business owner or e-commerce seller
- Wants saved addresses, shipment history, tracking dashboard
- Needs volume discounts and wallet-based prepayment
- May connect a Shopify/e-commerce store via ShipBlink
- Cares about reliability, cost savings over time, and operational simplicity

---

## Strategy & Architecture

### The Core Design Decision: Segmented Entry

The most consequential design decision was creating two clearly separated paths from the very first interaction. Rather than forcing all users through a single onboarding funnel, I designed a segmented entry point on the landing page:

1. **"Just Print Me a Label"** — Guest path. No account required. Enter addresses, package details, compare rates, pay, download label. Done in under 2 minutes.
2. **"Create My Account"** — Authenticated path. Full onboarding into dashboard with wallet funding, saved addresses, shipment history, and store connections.

This decision was driven by the insight that casual shippers would abandon the platform entirely if forced to create an account before seeing value. The guest flow lets them experience the savings immediately, and the success screen includes a conversion prompt: "Ship Often? Save Even More. Create a Free Account."

### Platform Mapping

I created an implementation-grade mapping that assigned every screen and interaction to its execution layer:

- **SHIPDEEZ-owned UI:** Landing page, guest quick-label flow, account creation, payment
- **ShipBlink (via Forge white-label):** Authenticated dashboard, shipment management, store connections, merchant tools
- **EasyPost API:** Rate retrieval, address verification, label generation, tracking webhooks

This mapping was critical for the development team — it answered "who builds what?" for every single screen.

---

## Design Process

### User Flows

I mapped the complete v1 journey end-to-end:

**Guest Flow (5 screens):**
Landing Page → Guest Quick Label Form → Rate Results → Payment → Success & Label Download

**Authenticated Flow:**
Landing Page → Create Account → Dashboard → New Shipment → Rate Results → Payment → Success → Shipment History

### Wireframes to High-Fidelity

I moved from low-fidelity wireframes to high-fidelity mockups within the first week, working in rapid iteration cycles with stakeholder feedback incorporated daily.

---

## Key Screens & Design Decisions

### Landing Page

The landing page needed to serve three audiences simultaneously: serious shippers, casual one-time shippers, and brand fans arriving from social media.

**Design decisions:**
- Playful brand voice ("Shipping Can Get Nuts. We've Got You Covered.") paired with the squirrel mascot to make shipping feel approachable, not intimidating
- Prominent dual CTAs above the fold: "Get Started Free" and "Just Print Me a Label" — both paths clearly visible within 3 seconds
- Social proof section with key metrics (85% savings, 2M+ shippers, 50M+ packages)
- Carrier logos (UPS, FedEx, USPS, DHL) to establish credibility instantly
- 3-step "How It Works" section to reduce cognitive load
- Dark hero section with warm orange accents — visually distinct from competitors who all use blue/white

### Guest Quick Label Form

This is the most critical conversion screen. A casual shipper who clicked "Just Print Me a Label" needs to enter package details and get rates without friction.

**Design decisions:**
- Single-page form with clear section grouping: From Address, To Address, Package Details, Contact Info
- Service Preference dropdown ("Balanced" default) to pre-filter rate results based on speed vs. cost
- Minimal required fields — company name and second address line are optional
- "Get Rates" CTA at the bottom is full-width and high-contrast to guide the eye

### Rate Results

Users compare real-time carrier rates side by side. This is where ShipDeez's value proposition becomes tangible — they can see the discounted prices.

**Design decisions:**
- Card-based rate display with carrier logo, service name, delivery estimate, and price
- Pre-selected lowest price option (highlighted with green "Selected" badge) to reduce decision fatigue
- Promo code field for affiliate and marketing campaigns
- Persistent order summary with running total
- Clear "Proceed to Payment" CTA

### Payment

Trust is critical at this step — a first-time user is entering card information on a brand they just discovered.

**Design decisions:**
- Order summary sidebar showing exactly what they're paying for (carrier, route, package details, total)
- Fraud protection callout: "Your payment is secured by AVS, CVC, and Stripe"
- 3D Secure authentication note for high-risk transactions
- Daily transaction cap ($500) displayed for guest checkouts — sets expectations and reduces fraud surface

### Success & Label Download

The moment of delight. The user has their label.

**Design decisions:**
- Green checkmark confirmation with "You're All Set!" messaging
- Prominent "Download Label (PDF)" button
- Tracking information displayed immediately (tracking number, carrier, estimated delivery)
- Clear next steps: print, attach, drop off
- **Conversion moment:** "Ship Often? Save Even More." prompt with "Create Free Account" CTA — this is where guest users convert to registered users

### Authenticated Dashboard

For regular shippers, the dashboard is home base.

**Design decisions:**
- Wallet balance prominently displayed ($450.75) with "New Shipment" and "Add Funds" CTAs
- Quick access cards for Account Settings and ShipBlink Invite Status
- Recent Shipments table with status pills (Delivered/In Transit/Pending) for at-a-glance tracking
- Navigation optimized for task frequency: Dashboard, New Shipment, Fund Wallet

---

## Design System

I built a lightweight but complete design system from scratch to ensure consistency across all surfaces and enable the development team to build without ambiguity.

### Color Tokens
- **Primary/Orange:** #C8641A — CTAs, brand accent, interactive elements
- **Brand Dark:** #2B1408 — Hero backgrounds, navigation, headers
- **Cream:** #F6E4C2 — Section backgrounds, subtle warmth
- **Surface White:** #FFFFFF — Cards, content areas
- **Surface Light Gray:** #F2F2F2 — Page backgrounds

### Semantic Colors
- **Success:** #2FBF71 (green) — Delivered status, confirmations
- **Warning:** #F3C969 (gold) — Pending states, attention
- **Error:** #E85B4F (red) — Failed status, validation errors
- **Neutral:** #D9D9D9 — Disabled states, borders

### Typography
- H1: 36/44 Bold
- H2: 24/32 Bold
- Body: 16/24 Regular
- Label: 14/20 Medium

### Spacing & Radius
- Scale: 4, 8, 12, 16, 24, 32, 48
- Button/Input radius: 12px
- Card radius: 16px
- Pill radius: 999px (full round)

### Component Library
I delivered a reusable component library including:
- Buttons (Primary CTA, Secondary, Disabled)
- Input fields (default, error states with validation messaging)
- Cards (content cards, selectable rate cards with selected/unselected states)
- Status pills (Delivered, In Transit, Pending, Failed)
- Table rows for shipment history
- Navigation bar with wallet balance display
- Dropdowns (Service Preference selector)
- Controls (checkbox states)

---

## AI in My Workflow

AI tools played a significant role in accelerating this 2-week sprint:

- **Architecture planning (Claude):** I used Claude to map the platform integration architecture, working through which screens should live in ShipDeez-owned UI vs. ShipBlink vs. EasyPost API. This normally takes days of back-and-forth with engineering — I arrived at the stakeholder review with a complete draft mapping.
- **UX flow analysis (GPT):** I used GPT to stress-test user flows for edge cases: What happens if the wallet has insufficient funds? What if address verification fails? What if the user abandons mid-payment? This generated the failure-state UX rules document.
- **Design system documentation (Claude):** I used Claude to generate the initial token documentation and component specs, then refined them for the developer handoff package.
- **Copy and microcopy (Claude + GPT):** Landing page headlines, CTAs, error messages, and empty states were drafted with AI assistance, then refined for brand voice.
- **Analytics taxonomy (Claude):** The full-funnel event tracking plan — from landing page view through label purchase — was architected with Claude to ensure complete coverage across 20+ discrete events.

AI didn't replace my design judgment. It compressed the time between having an idea and having a documented, reviewable artifact. In a 10-day sprint, that compression was the difference between shipping everything and cutting scope.

---

## Analytics Foundation

I delivered a complete analytics instrumentation plan covering the full funnel:

**Funnel Events Tracked:**
- Landing page view → Business/Consumer selection → Ship Now CTA click → Signup start → Signup complete → Rate quote retrieved → Label created → Label purchased → Label downloaded → Tracking viewed

**Nurture & Brand Events:**
- Keep Me In The Loop clicks → Email opt-in submission → Swag store clicks → Storefront conversion → Return visits

**Implementation:**
- Google Analytics 4 with custom event taxonomy
- Microsoft Clarity for session recordings and heatmaps
- Funnel dashboard for real-time visibility into drop-off points

This gave the client the ability to identify exactly where users abandon the flow and measure cost-to-serve from day one.

---

## Outcome

### What Was Delivered (in 10 business days)

- Complete end-to-end UX flows for both guest and authenticated user journeys
- High-fidelity mockups for all core v1 screens
- A lightweight, developer-ready design system with color tokens, typography, spacing, and component library
- A live landing page built in Webflow
- Analytics instrumentation plan covering 20+ funnel events
- Platform implementation mapping for the EasyPost/ShipBlink/Forge stack
- Wallet and failure-state UX rules
- Comprehensive developer handoff package

### Projected Impact

- **85% average savings** vs. retail shipping rates for platform users (based on negotiated carrier programs)
- **Sub-2-minute** guest label generation flow (measured from form entry to label download)
- **Zero-account-required** shipping path — removing the #1 barrier to first-time conversion
- **20-shipper pilot cohort** ready for launch validation across both volume and casual shippers

### What I'd Do Differently

- **Earlier carrier integration testing.** Designing rate comparison cards with placeholder data meant I couldn't validate the actual UX of real carrier response times and rate variations until post-handoff.
- **More user testing on the guest form.** The quick label form has a lot of fields. Given more time, I would have run a usability test to measure completion rate and identify friction points before the handoff.
- **Progressive disclosure on the form.** In v2, I'd explore a stepped form (address → package → rates) rather than a single-page form, particularly for mobile users.

---

## Reflection

ShipDeez demonstrated something I believe strongly about modern product design: the value of a designer isn't just in the pixels — it's in understanding and navigating the systems those pixels sit on top of. Designing within the constraints of EasyPost's API capabilities, ShipBlink's white-label limitations, and Forge's branding rules required me to think like a product strategist and a systems designer, not just a UI designer.

The 10-day timeline also forced radical prioritization. Every design decision was evaluated against one question: "Does this help a user go from landing page to first label?" If it didn't, it was out of scope. That discipline produced a focused, shippable product — not a spec document full of aspirational features.
