# CUNA: finding out where credit union staff got lost on cuna.org

**Role:** UX Designer and Researcher
**Company:** CUNA (Credit Union National Association)
**Duration:** February 2021 to February 2022

CUNA is a national trade association for state and federally chartered credit unions. It gives its members regulatory advocacy, professional development and professional services. I was the UX designer and researcher on the team reworking cuna.org, and most of what I did there was research into one question: when someone arrives at the site with a job to do, can they find the thing?

- **Context:** a large association site with several audiences, two heavy jobs (advocacy content and a store for training products and seminars), and users who said it was complicated and frustrating to navigate
- **What I owned:** the research. A heuristic evaluation, competitive analysis, user flows, a tree test and card sorts in Optimal Workshop, and the analysis of a customer survey. I also helped mock up designs with the team
- **Outcome:** the studies shaped how the team approached the site's structure. I do not have post-launch numbers for the new structure, so I do not claim one

## The problem

The starting point was a customer survey: 537 responses to 28 questions, from people in eight credit union job functions (measured, from the survey data). Two complaints kept coming up. The site was slow, and finding things was hard. Checkout came up too: one member described a purchase process so frustrating that she gave up.

The traffic data pointed the same way. Advocacy is a large part of what CUNA stands for, yet in Google Analytics it ranked 28th for traffic (measured, at the time). A section that central was close to invisible.

A member experience director on the team estimated that fixing the top two complaints, speed and errors, would roughly halve the support email the team handled. That is her estimate, not something we measured, and I treat it as a sense of scale.

## Starting with what was already broken

Before testing anything new, I wanted to know what the current site did wrong in ways we could name. I ran a heuristic evaluation of cuna.org against Nielsen's 10 usability heuristics, mapping issues to each heuristic on a Mural board, and alongside it a competitive analysis of the features, flows and feel of comparable sites.

![Heuristic evaluation of cuna.org on a Mural board, one cluster per Nielsen heuristic](/assets/cuna/heuristic-evaluation.png "Each cluster collects the issues found against one of Nielsen's 10 heuristics. Zoom in to read the notes.")

The point of doing this first was timing. Usability problems surface cheaply before design and development are underway, and the evaluation gave the team a documented set of issues to work from.

## User flows: getting the process out of people's heads

It is easy to lose the user when a team is arguing about features and jargon. I mapped the main purchase paths on the site: conferences, eSchools and webinars on one side, and courses, books, PDFs and marketing products on the other, with the account creation, guest registration and login branches that sit around them.

![User flows for the CUNA purchase paths, from search through checkout, with login and registration branches](/assets/cuna/user-flows.png "Flows for conferences, eSchools and webinars, and for course, book and marketing products.")

Mapping the flows showed where friction was, including a missing payment confirmation and a connection error in the purchase path. The flows also became the thing I used to explain design decisions to the product manager, stakeholders and developers. They kept the conversation about the path a person takes, not the page someone preferred.

## Tree test: can people find where to register a team?

For the structure of the whole site, I used a tree test in Optimal Workshop. I led a brainstorm with the UX team to decide which tasks to test, and we landed on a scenario drawn from how CUNA actually sells:

> You want to register your marketing team for the CUNA Digital Marketing School, which they will attend virtually. Where would you go to register the team?

![Optimal Workshop comparison of the registration task on two versions of the tree: 4 of 4 succeeded on one, 0 of 4 on the other](/assets/cuna/treejack-task3-comparison.png "Task 3, the registration scenario, side by side. In V2 the target sat under Events & Training. In V1 the correct answer sat under Shop.")

I tested two versions of the structure against each other, with four participants per tree on each task. On the registration scenario, all four found the right place in V2 (Events & Training, then Conferences & Schools). None of the four did in V1, where the correct answer was Shop, then eSchools (measured, small sample). Across all tasks, 81% of completed tasks ended at a correct answer in V2, against 31% in V1 (measured). [CONFIRM: V1 is the existing structure, V2 is the one I proposed, and 31% is V1's overall score.]

It did not split that cleanly on every task. On the Youth Month Design Bundle purchase, both versions came out at 50% success, with the same directness score of 75% (measured).

![Optimal Workshop comparison of the Youth Month Design Bundle task on V1 and V2, both at 50% success](/assets/cuna/treejack-task4-comparison.png "Task 4 compared across V1 and V2. Success was 50% on both.")

With four people per tree, I read these as direction and not proof. The paths people took were the more useful part: a tree test shows where someone went instead of where we expected.

## Card sorting the advocacy section

The survey had flagged navigation as a problem, and advocacy is a very large branch of the site, so I ran an information architecture study on it. I met with stakeholders first to understand what they needed from the restructure, then ran a card sort in Optimal Workshop with cards such as Credit Union Powers, Regulatory Relief, Consumer Protection, and Mortgage Lending & Housing.

![Mural board grouping advocacy content cards, with groups such as Priorities We're Fighting For and Actions You Can Take](/assets/cuna/card-sort-mural.png "Synthesis board for the advocacy card sort. The group labels are working names.")

Optimal Workshop's 3D cluster view was a clear way to see the results I had collected, and its drill-down let me look at individual groups for deeper insight.

![Optimal Workshop 3D cluster view of the advocacy card sort, with one group selected](/assets/cuna/card-sort-3d-cluster.png "The 3D cluster view with one suggested group open, listing the cards in it.")

## The products page

Training products and seminars were among CUNA's biggest revenue drivers, and the survey named the products page structure as a pain point. Before recommending changes, I made a clear list of what each product page contained, so decisions about grouping and naming could be made against an inventory and not a feeling.

![Inventory of the contents of CUNA product pages](/assets/cuna/products-page-inventory.png "A content inventory of the product pages, used to inform grouping and naming decisions.")

## What the survey added

I affinity mapped the survey responses, which gave the team a fuller view of how users behaved and what they needed. I also used net promoter scores on selected questions to see where the site was weakest and where it held up, and treated those scores as places to start looking, not as conclusions.

![Affinity map of survey responses, grouped by theme and segment](/assets/cuna/survey-affinity-map.png "Responses grouped by theme and by job function.")

## What happened next

My research fed the team's decisions about the structure of cuna.org. I do not have measured post-launch results for the new structure to share, so I will not put a number on the outcome.

If I were doing it again, I would plan the follow-up before the project ended: re-run the same tree test scenario on the shipped structure, and track checkout completion and support email volume against the figures the team already had. That would turn "we think this is better" into something we could measure.

What I took from it is how the methods divide the work. The survey said people were frustrated. The heuristic evaluation and user flows said where the current site broke. The tree test and card sort said where people expected things to be and what to call them. None of them was enough alone.
