# CUNA: finding out where credit union staff got lost on cuna.org

**Role:** UX Designer and Researcher
**Company:** CUNA (Credit Union National Association)
**Duration:** February 2021 to February 2022

CUNA is a national trade association for state and federally chartered credit unions. It gives its members regulatory advocacy, professional development and professional services. I was the UX designer and researcher on the team reworking cuna.org, and most of my work was research into one question: when someone arrives at the site with a job to do, can they find the thing?

- **Context:** a large association site with several audiences and two heavy jobs, advocacy content and a store for training products and conferences. The site was slow, hard to navigate, and in the middle of a platform move
- **What I owned:** the research. Stakeholder interviews, a 28-question survey and the personas that came from it, a heuristic evaluation, competitive analysis, user flows, a tree test and card sorts in Optimal Workshop, a naming and metadata convention for the site's PDFs, and test plans for the follow-up usability work. I also helped mock up designs with the team
- **Outcome:** the studies shaped how the team approached the site's structure and gave the team personas for eight areas of credit unions. I do not have post-launch numbers for the new structure, so I do not claim one

## The problem

Three things were already on the table when I started, and each pointed the same way.

The team's own digital SWOT, written in April 2021, named a slow site and difficult navigation as the top customer complaints, while the site moved from Ektron to Adobe Experience Manager. A member experience director I interviewed in February 2021 said the team's two wishes were speed and fewer errors, and estimated that fixing both would cut at least half of the support email the team received. That is an estimate from someone close to the inbox, not a measurement, and I treat it as a sense of scale.

Checkout was the sharpest example. In February 2021 a credit union CFO wrote to CUNA that she could add a council to her membership cart but the site errored every time she went to check out, so a staff member registered her by hand.

The traffic data pointed at a different problem. In a March 2021 meeting about advocacy, the team noted that Advocacy ranked 28th for most visited in Google Analytics (measured, per the meeting notes). A section that central to CUNA's mission was close to invisible.

## Who we were designing for

I started with stakeholder interviews, built around a set of questions: how do your customers use the site, what do they complain about, and what would relieve some stress. The member experience director was the first interview, and it shaped the plan for the survey and testing that followed.

Then we sent a survey. It had 28 questions and went to credit union staff, board members and leagues, and 537 people completed it (measured, from the response data). 493 of them worked at a credit union and 18 at a league. 325 of the 530 who answered the visit-frequency question said they visit seven or more times a year (measured), so these were people who knew the site well. The frustration was not coming from newcomers.

I used a net promoter score on selected questions as a place to start looking, and affinity mapped the written responses to see what was working and what was not. From that I built personas for the eight areas of credit unions that use CUNA: board members, compliance and risk, lending, marketing, operations and member experience, finance, human resources, and technology.

![Persona card for a credit union board member, showing needs, frustrations, frequent site areas and how important the site is to the role](/assets/cuna/persona-board-member.png "One of eight persona cards, built from the survey. Stock photo.")

The findings across the cards were consistent. People valued CUNA's resources and training. They said the site was slow, hard to navigate, and that training was too expensive for smaller credit unions. A representative comment: "I often spend an hour trying to sign up for a course and by then I don't have time to actually take it."

The survey also told us where people actually went. When asked which area of the site mattered most, 173 respondents chose the training bundle and webinars, 125 compliance, 74 conferences and 56 CPD Online, against 44 for advocacy (measured). That fit the analytics.

I also broke the results out by audience, which showed that the groups used the site differently. In the compliance group, 60 respondents named compliance as the most important area, and 61 said they reach the site from a saved bookmark (measured). My reading, not something we tested, is that a bookmark skips the navigation, so the people who rely on the site most may be the ones least affected by its structure, and newer visitors are the ones who hit it.

![Survey results broken out by audience segment, with panels for board, finance, compliance, HR, lending, marketing and operations](/assets/cuna/survey-synthesis-audience.png "Each panel shows one audience's age, education, most important area, how they reach the site, and average ratings. Zoom in to read the numbers.")

## Starting with what was already broken

Before testing anything new, I wanted a list of what the current site did wrong that we could name. I ran a heuristic evaluation of cuna.org against Nielsen's 10 usability heuristics, mapping issues to each heuristic on a Mural board. Alongside it I did a competitive analysis of four organizations with similar goals (NAFCU, the National Credit Union Foundation, the World Council of Credit Unions and CUES), looking at their checkout flows, how they organized shop and learn content, and their layouts.

![Heuristic evaluation of cuna.org on a Mural board, one cluster per Nielsen heuristic](/assets/cuna/heuristic-evaluation.png "Each cluster collects the issues found against one of Nielsen's 10 heuristics. Zoom in to read the notes.")

The evaluation gave the team a documented set of issues to work from before design and development were underway.

## User flows: getting the process out of people's heads

It is easy to lose the user when a team is arguing about features and jargon. I mapped the main purchase paths on the site: conferences, eSchools and webinars on one side, and courses, books, PDFs and marketing products on the other, with the account creation, guest registration and login branches around them.

![User flows for the CUNA purchase paths, from search through checkout, with login and registration branches](/assets/cuna/user-flows.png "Flows for conferences, eSchools and webinars, and for course, book and marketing products.")

The flows turned up friction in the purchase path, including a missing payment confirmation and a connection error. They also became the thing I used to explain design decisions to the product manager, stakeholders and developers.

## Tree test: can people find where to register a team?

The IA study had started with a naming problem. In the IA study responses, staff who work with customers said "Learn" versus "Shop" was unclear, because many learning products also sit on shop pages, and that "school" versus "conference" meant little to members.

So for the structure of the whole site, I ran a tree test in Optimal Workshop comparing two versions. V1 was the existing structure, with Shop and Learn as top-level branches. V2 reorganized around Events & Training and Products. I led a brainstorm with the UX team to choose the tasks, and we used scenarios drawn from how CUNA sells:

> You want to register your marketing team for the CUNA Digital Marketing School, which they will attend virtually. Where would you go to register the team?

![Optimal Workshop comparison of the registration task on two versions of the tree: 4 of 4 succeeded on one, 0 of 4 on the other](/assets/cuna/treejack-task3-comparison.png "Task 3, the registration scenario, on V1 and V2. In V2 the correct answer sat under Events & Training. In V1 it sat under Shop.")

With four participants per tree on each task, all four found the right place in V2 (Events & Training, then Conferences & Schools). None of the four did in V1, where the correct answer was Shop, then eSchools (measured, small sample). Across all tasks, 81% of completed tasks ended at a correct answer in V2, against 31% in V1 (measured). [CONFIRM: that 31% is the V1 overall score.]

It did not split that cleanly on every task. On the Youth Month Design Bundle purchase, both versions came out at 50% success, with the same directness score of 75% (measured).

![Optimal Workshop comparison of the Youth Month Design Bundle task on V1 and V2, both at 50% success](/assets/cuna/treejack-task4-comparison.png "Task 4 compared across V1 and V2. Success was 50% on both.")

With four people per tree, I read these as direction and not proof. A tree test also records the paths people took, so a failed task shows where they went instead of where we expected.

## Card sorting the advocacy section

The advocacy section was the case where traffic and importance disagreed, so I ran an information architecture study on it. The March meeting had left several open questions. Should content be split into two audiences, members and lawmakers? Should the dropdown give better access to the advocacy main page? Do customers want past issues at all, and how far back?

I met with stakeholders first to understand what they needed from the restructure, then ran a card sort in Optimal Workshop with cards such as Credit Union Powers, Regulatory Relief, Consumer Protection and Mortgage Lending & Housing. We also put the archive question into the survey. 44 respondents answered it, and 38 said yes, they wanted to read what CUNA had told regulators and lawmakers in the past (measured).

![Mural board grouping advocacy content cards, with groups such as Priorities We're Fighting For and Actions You Can Take](/assets/cuna/card-sort-mural.png "Synthesis board for the advocacy card sort. The group labels are working names.")

Optimal Workshop's 3D cluster view was a clear way to see the results I had collected, and its drill-down let me look at individual groups for deeper insight.

![Optimal Workshop 3D cluster view of the advocacy card sort, with one group selected](/assets/cuna/card-sort-3d-cluster.png "The 3D cluster view with one suggested group open, listing the cards in it.")

## The products page

Training products and seminars were among CUNA's biggest revenue drivers, and the products page structure was a pain point in the survey. Before recommending changes, I made a clear list of what each product page contained, so decisions about grouping and naming could be made against an inventory and not a feeling.

![Inventory of the contents of CUNA product pages](/assets/cuna/products-page-inventory.png "A content inventory of the product pages, used to inform grouping and naming decisions.")

## Naming PDFs so people could find them

The site hosted a lot of PDFs, such as white papers, handouts, reports and presentations, and search could not tell them apart. I wrote a naming convention for them: a short code for the area or product, then the document type, then a short description, for example a white paper from the advocacy team on a tax issue. Codes covered areas like Advocacy, Compliance, the training bundle and webinars, and types like white paper, report and handout. The rules were practical: a 20-character limit so files synced cleanly, and no characters that break across operating systems.

The convention also covered metadata, which helps search engines and site search decide what a document is about, so each file carried a title, author, description and keywords. One rule mattered more than the rest. Documents behind a login, such as training bundles, webinars and eSchools, should carry no metadata, because they are paid content and should not show up in a Google search.

I do not have adoption numbers for it, so I count it as a working standard for the team, not a measured result.

## Planning the usability testing

The teams that owned parts of the site each had their own question, and I collected them. One said the mega menu's category text was clickable but people did not recognize it. Another wanted to test button names and whether the promo area should sit above or below browse. A third asked whether product cards should be clickable as a whole, not only through a link at the bottom. Others asked how people search for training, by format or by topic, and what they need before they register for a conference.

From those I drafted a moderated A/B usability test on breadcrumbs, with a script and three scenarios: an HR lead signing up staff for a conference, a credit union employee going after a certification, and a board member checking the status of bills in Congress. Each one asked people to go back a step and talk through why. I raised mobile early, because too many breadcrumbs would crowd a small screen. I also kept a running list of mobile errors, such as a pre-requisite training link that did not work and a chart that was not centered. I do not have results from the breadcrumb test to report.

## What happened next

My research fed the team's decisions about the structure of cuna.org, and the personas gave the team a shared picture of eight audiences. I do not have measured post-launch results for the new structure, so I will not put a number on the outcome. The team's own retrospective named training on Adobe Experience Manager and documentation for CUNA staff as the main gaps.

If I were doing it again, I would plan the follow-up before the project ended. I started drafting a post go-live questionnaire to learn what people buy, what they think is not working and where they go for information. I would run that, re-run the same tree test scenarios on the shipped structure, and track checkout completion and support email volume against the figures the team already had. That would turn "we think this is better" into something we could measure.

What I took from it is how the methods divide the work. The survey said people were frustrated. The heuristic evaluation and user flows said where the current site broke. The tree test and card sort said where people expected things to be and what to call them. None of them was enough alone.
