# First Step AI — AI Onboarding Agent

**Company:** Independent Project
**Role:** Solo Product Designer + Engineer
**Timeline:** 6 weeks
**Tools:** React, Claude API, Vercel, Node.js, Tailwind CSS, Express, Vite

---

## The Problem

**82% of small businesses think AI doesn't apply to them.**

That number isn't about capability — it's about clarity. E-commerce sellers running Shopify and Etsy stores are overwhelmed. They're handling fulfillment, customer service, inventory, and marketing simultaneously, often alone. They've heard AI can help. They've tried ChatGPT once. Nothing changed.

The gap isn't the technology. It's the translation layer between "AI exists" and "here's what you specifically should do on Monday morning."

Existing solutions fail in two ways:

**Too generic.** "Just use AI for your marketing" tells a seller nothing they can act on.

**Too technical.** Most AI tools are built for developers or enterprise teams. A Shopify seller with 150 monthly orders doesn't have an IT department.

The opportunity was clear: build the trusted, plain-language guide that takes a seller from "I've heard AI can help" to "I have a working automation" — in a single session.

---

## Design Process

### Research First. Build Second.

**Discovery**

Before writing a line of code, I mapped the landscape. The target user wasn't abstract — it was the solo Shopify seller doing 50-500 orders a month, running operations largely alone, and spending hours every week on tasks that should be automated.

Key insight from research: The problem wasn't awareness. It was implementation complexity. Sellers knew AI existed. They didn't know which tool, for which workflow, set up in which order.

**Defining the product**

The core product decision was to deliver one recommendation, not many. Every competing product in this space gives users a list of AI tools to explore. First Step AI gives them one specific thing to do today.

This decision shaped everything downstream:
- The intake is 4 questions, not 20
- The output names a single tool with 3 setup steps
- The result card shows time saved and cost — not a menu of options

**The intake flow**

Early versions had 6 form fields displayed simultaneously. User testing revealed the obvious: seeing 6 fields at once feels like homework.

Decision: one question at a time, like Typeform. The step indicator ("Step 1 of 4") sets expectations immediately. Completion rate improved significantly in testing.

The 4 questions in final order:
1. What platform are you selling on? (determines tool ecosystem)
2. How many orders per month? (determines scale and ROI threshold)
3. What's your biggest time drain? (the core of the recommendation)
4. Any AI tools you're already using? (avoids redundant recommendations)

**Email capture placement**

Original design: email field in the intake form.
Final design: email capture appears after the recommendation.

Rationale: users are more willing to share their email after receiving value than before. By moving email capture post-recommendation, we deliver the plan regardless and capture email from users who found it genuinely useful — a higher-quality list.

---

## Technical Architecture

### Designed as a Product. Built as an Engineer.

**Stack decisions**

React + Vite for the frontend. Fast to build, easy to iterate, clear component structure. Tailwind for styling — utility-first keeps the design system consistent without a separate CSS architecture.

Claude API (claude-sonnet-4-6) for the recommendation engine. The system prompt encodes the product logic: one specific tool, one problem statement, three setup steps, time savings estimate, monthly cost. The prompt constraints are what turn a general-purpose LLM into a focused product.

Express proxy server to handle CORS in development. Vercel serverless function in production. The API key never touches the browser.

Vercel for deployment. Automatic deploys from GitHub on every push to main. Environment variables managed in the Vercel dashboard.

**The CORS problem**

The most significant technical challenge was the CORS restriction that prevents browsers from calling the Anthropic API directly. The solution was an Express proxy server for local development and a Vercel serverless function (`api/recommend.js`) for production.

This architectural decision also improved security: the API key lives server-side and is never exposed in the frontend bundle.

**System prompt design**

The recommendation quality lives or dies in the system prompt. The constraints I encoded:

- Name one specific tool (not a category)
- Explain the problem it solves in one sentence
- Give exactly 3 setup steps the user can do today
- Estimate weekly time savings in hours
- State the monthly cost or confirm it is free
- Write for a busy store owner with 10 minutes to read this

These constraints transform a general Claude response into a consistent, actionable product output regardless of who fills out the intake.

**Claude Code as a build partner**

This project was built using Claude Code — Anthropic's CLI tool for agentic software development. Custom skills in `.claude/commands/` automated repetitive tasks:

- `/new-pattern` — generates a new e-commerce automation pattern file
- `/build-intake-question` — creates a React component for each question
- `/new-component` — scaffolds a new Tailwind component

This approach demonstrated the core value proposition of the product itself: AI as a build accelerator, not a replacement for judgment.

---

## Key Design Decisions

### Every Decision Had a Reason

**4 questions, not 6**

Original intake had 6 fields. Removing business name and repositioning email post-recommendation reduced cognitive load and increased perceived speed without reducing recommendation quality.

**One question at a time**

The "Step 1 of 4" progress indicator with a single question per screen mirrors Typeform's proven pattern. Users know exactly where they are and how much is left. Completion rate increases when the end is visible.

**Dark modern aesthetic**

Color palette: #0F1117 background, #6C63FF primary purple, #00D4FF cyan accent. The aesthetic signals technical credibility without feeling developer-only. It's modern SaaS — approachable but serious.

**The result card as the product**

The AI Action Plan result card is the core deliverable. Design requirements:
- Branded header with checkmark confirmation
- Highlighted tool name in accent color
- Problem statement in plain language
- 3 numbered steps with purple left-border accent
- Side-by-side stat boxes: time saved and cost
- Bottom line summary sentence
- Email capture below — value delivered before ask

The card needs to feel premium enough that a seller would screenshot and share it. That's the word-of-mouth distribution mechanism.

**Removing "free" from the UI**

Every instance of "free" was deliberately removed. Positioning something as free anchors it at zero value before the user has experienced it. The product should earn the price conversation after demonstrating value.

---

## What I Learned

### What Surprised Me

**Prompt engineering is product design.**

The system prompt is the core product logic. Writing it is no different from writing a design specification — you're defining the constraints, the output format, and the user experience simultaneously. Getting it right required the same iteration process as any other design work.

**The CORS problem is a rite of passage.**

Every developer building a frontend AI integration hits the CORS wall. Understanding why it exists and how to solve it architecturally (proxy server → serverless function) was the most valuable technical learning of the project.

**Ship early. Iterate on real feedback.**

The instinct to keep polishing before showing anyone is strong. The better instinct is to get something live and watch what happens. The product running on Vercel with real Claude responses is more useful than a perfect prototype that nobody uses.

**Building and learning simultaneously works.**

This project was built in parallel with completing 4 Anthropic Skilljar courses. Every tutorial concept was applied to First Step AI the same day. The learning was faster because it was immediately practical, and the build was better because the curriculum provided structure.

---

## Results

### Live, Working, and Ready to Grow

- **Live product** deployed at first-step-ai-ten.vercel.app
- **End-to-end working:** intake → Claude API → personalized recommendation
- **4 Anthropic certifications** completed alongside the build
- **Foundation in place** for email capture, Supabase database, and analytics

**Next steps:**
- Supabase integration to store audits and build email list
- Google Analytics for traffic data
- Expand automation pattern library from 4 to 20+ scenarios
- Explore restaurant vertical as secondary market

---

## Certifications

### Learning and Building at the Same Time

Completed alongside this project:
- Claude 101 — Anthropic Skilljar
- Claude Code in Action — Anthropic Skilljar  
- Introduction to Agent Skills — Anthropic Skilljar
- Building with the Claude API — Anthropic Skilljar

---

## Tech Stack

React, Vite, Tailwind CSS, Claude API, Express, Vercel, Serverless Functions, Node.js, Git, GitHub, Claude Code
