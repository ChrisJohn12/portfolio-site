# ShipDeez: designing a shipping product on top of three platforms I did not control

**Role:** Lead Product Designer (freelance)
**Company:** Backhaul Direct, LLC
**Duration:** Oct 2025 to Feb 2026
**Tools:** Figma, EasyPost, ShipBlink, Stripe

**The problem.** Small shippers overpay for postage because they cannot reach negotiated carrier rates. Backhaul Direct had those rates and wanted to pass them through a simple product, ShipDeez, built on ShipBlink (white-label, via EasyPost's Forge) and the EasyPost API.

**What I did.** I designed the end-to-end experience for two kinds of shippers, and I mapped which system owns each step so the team could see where a design decision was really a platform decision.

**Outcome.** I handed off the design package ahead of the client's deadline, and the client called the layouts generally solid with a few tweaks. I rolled off the project after handoff, so I do not have launch or post-launch results.

> I handed off the design in Feb 2026 and was no longer on the project when it launched. This case study covers the design as delivered, not the shipped site.

## My role {nav=Role}

I was the lead designer on the engagement. I designed the UX flows and the core screens for both paths, and I built the component set and screen designs on top of the logo and palette Backhaul's founders provided. I worked out the platform mapping together with Backhaul's technical lead, who owned the system architecture. ShipDeez's own UI, login and billing sat with Backhaul's build team, and ShipBlink supplied the white-label screens.

## The conflict that shaped the work

The first question was not what the screens should look like. It was which screens we were allowed to design at all.

ShipBlink is a server-to-server API for rates, shipments, labels and tracking. ShipDeez owns the interface, authentication, billing and reporting. Early answers from EasyPost set hard edges. Labels cannot be edited, so you cancel and rebuy. Self-serve signup is off by default because of wallet liability. The Forge sub-account invite was still marked coming soon. Tracking pages and the email sender carry ShipBlink branding. Each one limited what a clean customer experience could be.

The client also set a day-one definition of success: a visitor with zero context understands ShipDeez in under 30 seconds, picks the right path, and prints a label. That became the test for every decision below.

## The service blueprint

I built a service blueprint to answer a question the screens alone could not: for each step a customer takes, which system or person is doing the work, and where can it break?

![Service blueprint for both ShipDeez paths, with risk points marked in pink](/assets/shipdeez/service-blueprint.png "Service blueprint for the Quick Label and Commercial paths. Pink cells are failure or risk points. Recreation. Client names and data removed.")

The blueprint has two paths. Quick Label has no login, a one-page form and a per-label Stripe charge. Commercial has login, an organization profile, a warehouse, carrier rules and a billing plan. For each path it shows the customer's actions, what ShipDeez shows on screen, the systems behind it (ShipBlink, EasyPost, Stripe), and the Backhaul people who step in when something goes wrong. Lines mark where the customer interacts with ShipDeez, what the customer can see, and where internal teams hand off.

What the blueprint surfaced:

- **Address checks run through ShipBlink to EasyPost.** An address error is a platform response I could only design around, not change.
- **Guest labels bill to Backhaul's master ShipBlink account.** The $500/day guest cap protects against fraud, so I disclosed it at checkout instead of letting someone hit it as an error.
- **Failed payments belong to Backhaul finance, working in Stripe.** Decline retries happen in the checkout screen, so that screen had to carry the recovery path.
- **Login starts with ShipBlink and moves to ShipDeez later.** The create account flow therefore has two phases.
- **Billing has two models.** Most customers fund a wallet. Larger customers are invoiced by Backhaul finance.
- **Risks I flagged:** branded tracking pages and email, invite-only account creation, and a Forge invite that was not yet available.

The login and account screens I designed are for small shippers, the mom and pop customers, not enterprise accounts. Enterprise customers are invoiced by Backhaul finance, so they sit outside that flow.

## Design decisions

**Two entry points, separated at the hero.** A casual shipper who meets a signup form before seeing any value leaves. So the landing page splits into "Just Print Me a Label" and "Create My Account." The success screen then offers an account after the label is downloaded, once the savings are real.

**Lowest rate pre-selected.** The product's promise is savings, so the cheapest card is selected when the screen loads. Faster delivery is one tap away.

**Trust at payment, in specific words.** A first-time visitor is entering a card on a brand they found 90 seconds ago. The order summary sits above the card fields, and the trust note names the actual mechanisms: AVS, CVC and Stripe.

**Download over tracking on success.** The visitor came to print a label. Download is the dominant action and tracking is secondary.

**Failure states written into the flow.** Insufficient wallet funds, failed address checks and abandoned payments each have a designed state, and the blueprint shows who handles each one.

## Screens

The screens below are the designs I handed off in Feb 2026. Each caption says which system owns the screen.

![Landing page with two entry points](/assets/shipdeez/landing-page.png "Landing page. ShipDeez-owned.")

![Guest quick label form](/assets/shipdeez/Guest-Quick-Label-form.png "Quick label form. ShipDeez-owned.")

![Rate results with the lowest rate pre-selected](/assets/shipdeez/rate-results.png "Rate results. ShipDeez-owned, with rates from ShipBlink.")

![Payment screen with trust copy and the daily cap note](/assets/shipdeez/payment.png "Payment. ShipDeez-owned, with the card charge run by Stripe.")

![Success screen with download as the main action](/assets/shipdeez/success.png "Success and label download. ShipDeez-owned. Tracking pages after this step are ShipBlink-branded.")

![Create account screen](/assets/shipdeez/create-account.png "Create account. ShipDeez design for the later phase. In phase 1, ShipBlink's co-branded signup handles this step.")

![Dashboard for regular shippers](/assets/shipdeez/dashboard.png "Dashboard for small shippers. ShipDeez-owned.")

![Design system style tile](/assets/shipdeez/Design-System.png "Design system style tile. Built to work on ShipDeez screens and next to ShipBlink's white-label screens.")

## Result {nav=Result}

- Delivered the design handoff ahead of the client's deadline.
- Client feedback on the layouts: generally solid with a few tweaks.
- The client's marketing position is up to 85% savings against retail rates through negotiated carrier programs. That is their claim, not something I measured.
- No post-launch data. My work ended at design handoff.

## What I would do differently

I designed the rate cards with placeholder data and could not check how real carrier responses look until after handoff. I would also run at least one usability session on the guest form, which has many fields, and test a stepped version for mobile. And I would put the blueprint in front of the team in week one, since the platform limits were clearest there.

## How I used AI

I used Claude to draft the platform mapping before the first stakeholder review, so the team could correct a draft and not start from nothing. I used GPT to stress-test failure states. Both were drafting aids. Deciding what to cut and what the product needed stayed with me.
