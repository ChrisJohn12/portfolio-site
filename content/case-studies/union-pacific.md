# Union Pacific: moving UX into the decisions that shape enterprise software

**Role:** UX Researcher & Product Designer
**Company:** Union Pacific Railroad (contract)
**Duration:** May 2023 to May 2025

I joined Union Pacific's SAP migration as a UX researcher and ended up owning the design of two things: **a contract workflow for 2,500+ line item contracts**, and **the UX voice in decisions that had been made without any**.

- **Context:** enterprise SAP S/4HANA migration with PwC as the implementation partner, plus a redesign of the public website, UP.com
- **What I owned:** the contract workflow design, the case for SAP Personas on warehouse handhelds, UX involvement in fit-or-custom decisions, and page design for UP.com
- **What I can show:** a service blueprint with the systems layer, a decision story for each major call, and before and after screens for UP.com

## The problem

Two problems sat on top of each other. The first was the work itself. Contracts in the Asset Disposition area had more than 2,500 line items each. Every row needed a unique combination of customer, pool number, car type, indicator codes, and state. The legacy SAP workflow handled only small batches, so people pasted 100 rows at a time across tabs and reconciled the data by hand.

The second was the process around the work. Design recommendations reached the team as a review of a finished spec, after the real decisions were made. Good ideas came too late to change anything.

## Decision 1: Contract creation at scale

The business team asked for an Excel upload. They had existing spreadsheets to bring into the new system during onboarding, and some customers still worked in spreadsheets. It was a reasonable request, and I took it seriously.

I weighed four options with engineering: Excel upload, a data load program, copy and paste from existing contracts, and a custom Fiori application. Excel upload won on convenience but carried a risk I could not get past. Each team or person records the same information a little differently, so unstructured data would enter the database and create confusion and inaccurate records. We considered it as an add-on and left it out because of that complexity.

What we built was the custom Fiori application. I started from how the work actually flowed, then worked out how that workflow could live inside SAP's Fiori design system. I designed the screens, checked feasibility with engineering, and ran the result past the business team to confirm it was usable and held all the information they needed. Bulk entry kept the data structured as it went in, which answered the concern behind the upload request.

![The loop I ran on each design: the expert's goal, translate to Fiori, check feasibility with engineering, verify, hand off, with revise paths back](/assets/union-pacific/research-design-loop.png)

## Decision 2: Making the case for SAP Personas

*(SAP Personas is a layer on top of the standard SAP screens. It lets a design team change the interface without waiting on several teams to get engineering to rework SAP's original UI.)*

Warehouse staff used handheld scanners that ran standard SAP screens. I connected a handheld to a laptop and recorded real sessions on the floor, then broke each recording into steps in FigJam. I presented those findings to the warehouse leads in a working session, and they placed their own notes on the board as we reviewed it. The gap was clear: the standard screens left out information the workers needed to do the job.

I raised it at the weekly meetings with both teams. Union Pacific wanted the information visible. The implementation partner pushed back: they said it was not feasible and would affect the timeline.

So I looked for another route. Working with my project manager and an SAP representative, and doing some research of my own, I found SAP Personas. I mocked up a before and after to show what it could do. Then I went back to the weekly meetings with more evidence on how to implement it and why it mattered. I made that case more than once.

![Recreation of the SAP Personas case: the steps from floor recordings to the handoff to engineering](/assets/union-pacific/sap-personas.png)

SAP Personas was accepted and handed to engineering, and it helped the project during the redesign. I rolled off before it was implemented.

## Decision 3: Getting UX into the earlier decisions

The moment that changed my approach was small. I was handed a technical spec to review in the build phase, with no part in the conversation behind it. When I gave recommendations, nothing happened or I was shot down.

**That told us the process was the problem, not the feedback.** We asked PwC for their process outline, and it showed where the fit-or-custom decisions were made: in the Explore phase, before anything reached me. Over several meetings we asked to join the start of those conversations. That is where the business team says what it needs and the team decides whether standard SAP fits or the case needs a custom design. We were added.

![Where UX entered the process: before, a review of finished specs; after, a seat in the early fit-or-custom conversations](/assets/union-pacific/upstream-ux.png)

From there I also designed the custom items, the cases where standard SAP did not fit, using Fiori as the design system to translate the legacy workflow into SAP. Two smaller changes made UX durable after I left a meeting:

- **Testing:** I added a UX line item in Jira during user acceptance testing, so usability issues went into a backlog the team could work through.
- **Training:** I captured how the workflow ran in SAP and turned it into quick reference guides with the change management team.

## UP.com: designing around what customers come for

The archived home page led with the company: a mosaic of employee portraits, a news carousel, then round icon buttons. Price My Shipment sat well below the fold. The new home page puts Ship With Us, Price My Shipment, Track My Shipment, and Rail Safety directly under the hero, and mobile shows them first. I designed the experience mobile first, then web.

![Archived UP.com home page compared with the new home page and its mobile view](/assets/union-pacific/up-com-homepage.png)

The order came from the people who know the business. I asked the subject matter experts what goals they were trying to help customers accomplish. They knew the business needs and the documents customers have to fill out, and that set the priorities. I gave UX feedback on how to arrange those items on each page, and built the pages in the design system.

Each page I designed with the content team also got a content matrix, so the design, the words, the search terms, and the new navigation path travelled together.

![Recreated content matrix pairing each page with its copy, search terms, and navigation path](/assets/union-pacific/content-matrix.png)

The supplier pages followed the same pattern, which is where the design system earned its keep: new pages assembled from known pieces instead of being drawn from scratch.

![The existing supplier page mockup beside the built Supplier Advancement and Expansion page, with the shared design system pieces called out](/assets/union-pacific/supplier-pages.png)

## The systems layer

A journey map shows what a person does. It does not show what each system does with it. For the order-to-cash flow I built a service blueprint with three extra rows: the systems touched at each step, the handoff between those systems, and the consequence of each decision.

One example: once an order is placed, the vendor is sent a work order and headquarters starts tracking the shipment. Another: a disputed bill goes to the team that handles that work stream for review, and the outcome is reflected on the contract or the fulfilled order. Seeing those handoffs showed us where vendor information had to be correct. It also showed where the systems had to agree before shipping and billing could proceed.

![Recreated order-to-cash service blueprint with three added rows for systems touched, handoffs between systems, and decision consequences](/assets/union-pacific/order-to-cash-systems-layer.png)

Client system names are generalized in the version I show.

## What came of it

The personas, journey maps, and blueprints were **adopted by multiple business units**, which is the part I am most proud of. Work that only the project team uses tends to stay on the project.

Users and stakeholders reported tasks taking **about 30% less time**. That number comes from their feedback, not from a measurement I ran, and I treat it that way.

## AI in my research workflow

In my estimate, AI-assisted synthesis in Dovetail cut synthesis time by about 40% compared with tagging by hand, which is how I worked before those features existed. The speed mattered less to me than the consistency. The tool kept tags and groupings steady across sessions, so patterns I found in week one still held in week six.

I also used Union Pacific's internal GPT tool, depending on the document, to synthesize information, draft responses, and test different ways to word content.

## What I would do differently

Three things, looking back.

First, I would have found out sooner that UX was being brought in at the wrong point in the process. We were reviewing specs after the key decisions were already made. Once we saw that, we pushed to be part of the fit-or-custom conversations, and that changed what we could influence. Finding it in the first weeks instead of well into the project would have made our design decisions more effective.

Second, I would have pushed for SAP Personas earlier. I knew the limits of the out-of-the-box solution, and Personas turned out to be very useful during the redesign. I made that case, but I would make it sooner and with a before and after mockup ready.

Third, I would set up measurement at the start. For the contract workflow I would have captured time on task, error rate (rejected or corrected rows, and records that needed rework), and task success rate before the redesign and again after. I would have added support requests and training time after launch, plus a simple satisfaction score such as SUS. Together those would have given me real numbers instead of stakeholder feedback.
