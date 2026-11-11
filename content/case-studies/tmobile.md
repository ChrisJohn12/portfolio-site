# T-Mobile: research for the people who answer the calls and work the store floor

**Role:** UX Researcher, Enterprise Technology Solutions
**Company:** T-Mobile (contract)
**Duration:** March 2022 to April 2023

I was the UX researcher on a team improving the tools T-Mobile's frontline staff use every day. This page follows three pieces of that work, each one a case where the question I was handed turned out to be narrower than the problem.

- **Context:** ATLAS, T-Mobile's main frontline CRM, plus the related tools SAMSON and DASH, used by care reps on calls and Mobile Experts in stores
- **What I owned:** the research. I planned and ran the sessions, wrote the findings, and made the recommendations. UI designers on the team built the screens. I tested them and reported back, and they adjusted
- **Outcome:** the findings shaped the design direction for each tool. The bill comparison design went to engineering after the August 2022 testing, and I rolled off before launch, so I can't speak to post-launch results

## The problem

Over the previous year, roughly 10.3 million calls came into T-Mobile's care center with questions about a bill. Of those, 30% needed the rep to compare two or more bills to explain why a customer's total had changed. On average it took a rep about 20 minutes to review a bill with the customer, one of the longest resolution times of any call reason. Those figures come from my August 2022 research report, and the 20-minute average came from T-Mobile call data.

The tool meant to help was the bill comparison in ATLAS. Most reps found it cumbersome and confusing. Many did not know it existed, or had met it once in training and never used it. So the highest-volume call type was being handled with workarounds.

## Bill comparison: what reps told us

In August 2022 I ran feedback sessions with 7 care experts, using prototypes that borrowed from three places: the side-by-side layout in SAMSON, the familiar look of the customer's PDF bill, and the in-context placement of ATLAS. I wanted to understand how a rep actually investigates a bill question, not only whether a layout tested well.

Reps had settled on three ways of working. Most pulled PDF bills, even though it took extra time, because the itemized breakdown matched what the customer was looking at. Reps with more than four or five years of experience preferred SAMSON's columned, three-bill view, while several newer reps did not know it existed. Almost nobody used the ATLAS comparison.

![What reps did, what got in the way, and what I recommended, traced from the August 2022 sessions](/assets/tmobile/bill-comparison-findings.png "Each recommendation traces to something the sessions turned up. Prototype screens are not shown.")

The recommendations came straight from those findings: default the comparison to three bills, show cycle dates and payment arrangement status, spell out one-time charges, and keep the whole thing inside ATLAS so reps do not leave the screen they are in.

The reasoning behind it was about scale. With millions of billing calls a year, taking even a few seconds off each one adds up to a lot of rep time. That is my reasoning for why the work mattered. It is not a measured saving, and I do not present it as one.

## Customer Notification Visibility: the research changed the screen {nav=Notifications}

The second project started as a request to validate a layout. Care reps had no way to see the text messages T-Mobile had already sent a customer, so they searched memo history by hand and often asked customers to check their own phones.

![Recreated before and after of the ATLAS history panel, with numbered callouts marking what the research changed](/assets/tmobile/CNV-before-and-after.png "Recreated with placeholder messages and client data removed. The numbered callouts mark the decisions the research shaped.")

The before and after above shows the change. The designers separated outbound messages from memos into their own tab, which cut the scanning load during a live call. Research drove two decisions I would point to:

- **The layout stayed familiar.** A blade layout was tested and set aside, because an unfamiliar pattern is a poor bet when a rep is mid-call. The accordion matched patterns reps already knew from ATLAS.
- **Fields were cut.** In sessions with care experts, reps could not say what Language, Dynamic Tag Field or Source System ID were for. Those came out after the research. Short Code stayed, because it was the only field that actually guided a call.

That second decision is the part I care about. The project ended as a recommendation about what metadata reps needed and what should go, and it started as a layout check.

## On the store floor: following an upgrade from both sides of the counter {nav=Store floor}

The third piece took me out of the call center. In December 2022 I was one of three researchers visiting seven T-Mobile stores in Washington and Illinois. We observed 5 customers and interviewed 8 Mobile Experts, in locations ranging from mall flagships to neighborhood shops, and followed a device upgrade through eight phases from both sides of the counter.

![Store observation board: eight phases of a device upgrade, with what we saw in each and the question it raised](/assets/tmobile/Ethnographic-research-Notes.jpg "Field notes from store visits, December 2022. Blue notes are observations, orange notes are the questions each phase sent us to answer. Zoom in to read them.")

A few things on that board stayed with me:

- **Friction started before any tool opened.** When customers outnumbered experts, some got a quick hello, then waited with no sense of how long, and a few left.
- **Promotions were hard to compare in one conversation.** Experts jumped between screens to explain options, and the right promotion could change from one search to the next.
- **A checkout crash could lock a device.** Without the product SKU, getting it unlocked took 30 minutes or more. Experts asked for the SKU to be shown at the crash so they could finish the sale in the older system.

The upgrade itself ran on two paths. The designed one went through Pivot, one upgrade at a time, then handed off to mPOS for payment and the receipt. The one reps used went around it, because Pivot could not scan the new device.

![Service blueprint for upgrading a phone in a T-Mobile store, across eight steps from the pre-visit research to the plan agreement](/assets/tmobile/instore-upgrade-blueprint.png "Customer and Mobile Expert actions and pain points come from my in-store observations. Backstage steps and systems come from our team's retail flow deep dive.")

The blueprint shows where it cost something: if the upgrade is not done in Pivot, the promotion does not print on the receipt, and Pivot can crash on the handoff to mPOS, in the worst case sending the customer out without the phone.

The journey maps that followed were a team effort across UX, customer experience, systems engineering, product and strategy. Mine was the observation, and the habit of pairing every observation with the question it should send us to answer.

## The tools behind the call: one scenario as a service blueprint {nav=Blueprint}

The store work showed me how much of the friction sat below what the customer sees. To make that visible I laid out one Care scenario, adding a line with a number port-in, as a service blueprint: what the customer does, what the Care expert does in front of them and behind the scenes, which tool is in use at each step, and where the customer felt a gap.

Atlas, Samson and DASH show up at different steps. Add a Line only worked in DASH, so experts switched tools early, and DASH could crash on startup. The customer could not see the total bill change until the very end of the flow. The first bill is where they learn, the second is where bill shock lands, and the third is where they compare.

![Service blueprint for adding a line with a number port-in through Care, across eight steps from the first call to the third bill](/assets/tmobile/care-port-in-blueprint.png "From the team's Care journey map and billing workshop (December 2022 to January 2023). Steps, pain points and system names are as the team described them. The handoffs line is my synthesis of the order the tools are used in.")

## What happened next

The bill comparison research was finished by the end of summer 2022, and its recommendations shaped the design direction. The design went to engineering shortly after the August 2022 testing. If the project had allowed for it, my next step would have been to track ATLAS satisfaction scores and bill review call times after launch, to see whether reps spent less time on bill comparison calls.

What I took from all three is that the useful finding is rarely the answer to the question you were asked. A prototype test became a case for how reps investigate bills. A layout check became a decision about what to remove. A store visit became a map of where trust breaks before anyone touches a system.
