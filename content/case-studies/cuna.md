# CUNA: finding out where credit union staff got lost on cuna.org

**Role:** UX Designer and Researcher
**Company:** CUNA (Credit Union National Association)
**Duration:** February 2021 to February 2022

CUNA is a national trade association for credit unions. I was the UX designer and researcher on the team reworking cuna.org, and most of my work was research into one question: when someone arrives with a job to do, can they find the thing?

- **Context:** a large association site with several audiences, an advocacy section and a store for training and conferences. It was slow, hard to navigate, and moving from Ektron to Adobe Experience Manager
- **What I owned:** the research. Stakeholder interviews, a 28-question survey and its personas, a tree test and card sorts in Optimal Workshop, a heuristic evaluation, competitive analysis, user flows, and a naming convention for the site's PDFs
- **Outcome:** the studies shaped how the team approached the site structure and gave it personas for eight areas of credit unions.

```stats
38 of 44 | wanted to read what CUNA told regulators and lawmakers in the past | Measured
325 of 530 | visit the site seven or more times a year | Measured
28th | Advocacy's rank for most visited in Google Analytics | Measured
81% vs 31% | tree test success, new structure vs existing | Measured
```

## The problem

Three signals pointed the same way.

- **The team's own SWOT (April 2021)** named a slow site and difficult navigation as the top customer complaints
- **Support email.** A member experience director estimated that fixing speed and errors would cut at least half of the support email the team received (an estimate from someone close to the inbox, not a measurement)
- **Checkout.** In February 2021 a credit union CFO wrote that she could add a council to her cart, but the site errored at checkout every time, so staff registered her by hand

Analytics added a fourth, and it pointed elsewhere. Advocacy ranked 28th for most visited in Google Analytics (measured, per March 2021 meeting notes). A section that central to CUNA's mission was close to invisible.

## Who we were designing for {nav=Audience}

I started with stakeholder interviews, then sent a survey to credit union staff, board members and leagues. 537 people completed it (measured). 325 of the 530 who answered the visit-frequency question said they visit seven or more times a year (measured), so these were people who knew the site well. The frustration was not coming from newcomers.

I affinity mapped the written responses, sorting them by how people felt about the site: negative, neutral because they need it for their job, neutral because they do not really need CUNA, and positive.

![Affinity map of the written survey responses, grouped into four sentiment areas with sticky notes colored by theme](/assets/cuna/affinity-map.jpg "Affinity map of the written survey responses. Zoom in to read individual notes.")

From the survey and the map, I built personas for eight areas of credit unions: board members, compliance and risk, lending, marketing, operations and member experience, finance, HR, and technology.

![Persona card for a credit union board member, showing needs, frustrations, frequent site areas and how important the site is to the role](/assets/cuna/persona-board-member.png "One of eight persona cards, built from the survey.")

People valued CUNA's resources and training. They said the site was slow, hard to navigate, and that training cost too much for smaller credit unions. One comment captured it: "I often spend an hour trying to sign up for a course and by then I don't have time to actually take it."

When asked which area mattered most, 173 chose the training bundle and webinars, 125 compliance, 74 conferences and 56 CPD Online, against 44 for advocacy (measured). That matched the analytics.

## Tree test: can people find where to register a team? {nav=Tree test}

Staff who work with customers had told us "Learn" versus "Shop" was unclear, because many learning products also sit on shop pages. So I ran a tree test in Optimal Workshop comparing two structures. V1 was the existing site, with Shop and Learn at the top level. V2 reorganized around Events & Training and Products. The UX team and I wrote tasks from how CUNA actually sells, such as this one:

> You want to register your marketing team for the CUNA Digital Marketing School, which they will attend virtually. Where would you go to register the team?

![Optimal Workshop comparison of the registration task on two versions of the tree: 4 of 4 succeeded on one, 0 of 4 on the other](/assets/cuna/treejack-task3-comparison.png "Task 3, the registration scenario, on V1 and V2. In V2 the correct answer sat under Events & Training. In V1 it sat under Shop.")

On that task, all four participants found the right place in V2 and none of the four did in V1 (measured, small sample). Across all tasks, 81% of completed tasks ended at a correct answer in V2, against 31% in V1 (measured).

It did not split that cleanly everywhere. On the Youth Month Design Bundle purchase, both versions came out at 50% success with the same directness score of 75% (measured).

![Optimal Workshop comparison of the Youth Month Design Bundle task on V1 and V2, both at 50% success](/assets/cuna/treejack-task4-comparison.png "Task 4 compared across V1 and V2. Success was 50% on both.")

With four people per tree, I read this as direction, not proof. The tree test also records the paths people took, so a failed task shows where they went instead of where we expected.

![Optimal Workshop path view for the Youth Month Design Bundle task, showing most participants going from Home to Shop and some choosing Learn or going back](/assets/cuna/treejack-task4-paths.png "Task 4 path view on the structure with Shop and Learn at the top. Green is the right path, red the wrong one, teal is going back.")

## Card sort: how people group our products {nav=Card sort}

The tree test checked the structure. The card sort checked the language. In Optimal Workshop, participants grouped 13 product cards, from eSchools, Course and Book to Webinars, Reports and the Credit Union Compliance Management System, and labeled the groups themselves. 17 of 20 participants finished it (measured).

![The 13 cards in the product card sort and its completion: 17 of 20 participants finished, 3 abandoned](/assets/cuna/card-sort-products.png "The 13 cards, and completion: 17 of 20 (85%).")

The 3D cluster view showed which cards people put together. Book, Reports and Research landed in one suggested group, and the labels people gave that group included Resources and Research. My reading, not something we tested, is that people grouped by what the content is, not by how CUNA sells it, which fits the staff comments that Learn versus Shop was unclear.

![Optimal Workshop 3D cluster view, with Book, Reports and Research in one group and similar category labels Resources and Research](/assets/cuna/card-sort-3d-cluster.png "3D cluster view of the product card sort. One suggested group held Book, Reports and Research.")

## What each method told us {nav=Takeaways}

The survey said people were frustrated. The heuristic evaluation and user flows said where the current site broke. The tree test and card sort said where people expected things to be and what to call them. None was enough alone.

## Audience breakdown by segment {collapsed} {nav=By segment}

I also broke the survey out by audience, and the groups used the site differently. In the compliance group, 60 respondents named compliance as the most important area, and 61 said they reach the site from a saved bookmark (measured).

My reading, not something we tested, is that a bookmark skips the navigation. The people who rely on the site most may be the ones least affected by its structure, and newer visitors are the ones who hit it.

![Survey results broken out by audience segment, with panels for board, finance, compliance, HR, lending, marketing and operations](/assets/cuna/survey-synthesis-audience.png "Each panel shows one audience's age, education, most important area, how they reach the site, and average ratings. Zoom in to read the numbers.")

## Heuristic evaluation, competitors and user flows {collapsed} {nav=Evaluation}

Before testing anything new, I wanted a list of what the current site did wrong that we could name. I evaluated cuna.org against Nielsen's 10 usability heuristics on a Mural board. I also compared four similar organizations (NAFCU, the National Credit Union Foundation, the World Council of Credit Unions and CUES) on checkout flow, how they organized shop and learn content, and layout.

Then I mapped the main purchase paths: conferences, eSchools and webinars on one side, and courses, books, PDFs and marketing products on the other, with account creation, guest registration and login around them. The flows turned up friction, including a missing payment confirmation and a connection error. I also used them to explain design decisions to the product manager, stakeholders and developers.

## Card sorting the advocacy section {collapsed} {nav=Advocacy sort}

Advocacy was where traffic and importance disagreed. The March 2021 meeting left open questions: split content by audience (members and lawmakers), improve dropdown access to the main page, and whether people wanted past issues at all.

I met stakeholders first, then ran a card sort in Optimal Workshop with cards like Credit Union Powers, Regulatory Relief and Consumer Protection. We also put the archive question in the survey. 44 respondents answered, and 38 wanted to read what CUNA had told regulators and lawmakers in the past (measured).

## Products page and PDF naming {collapsed} {nav=Products and PDFs}

Training products and seminars were among CUNA's biggest revenue drivers, and the products page structure was a survey pain point. Before recommending changes, I made an inventory of what each product page contained, so grouping and naming decisions rested on a list and not a feeling.

The site also hosted many PDFs that search could not tell apart. I wrote a naming convention: a short code for the area or product, then document type, then a short description, capped at 20 characters so files synced cleanly. It also covered metadata (title, author, description, keywords). One rule mattered most: documents behind a login, like training bundles and webinars, carry no metadata, because they are paid content and should not appear in a Google search.

## Planning the usability tests {collapsed} {nav=Test plans}

Each team that owned part of the site had its own question, and I collected them: whether mega menu category text was recognized as clickable, how button names and promo placement affected browsing, whether whole product cards should be clickable, and how people search for training.

From those I drafted a moderated A/B test on breadcrumbs, with a script and three scenarios: an HR lead signing up staff for a conference, an employee going after a certification, and a board member checking bills in Congress. I raised mobile early, since too many breadcrumbs crowd a small screen, and kept a running list of mobile errors.

## What happened next

My research fed the team's decisions about the structure of cuna.org, and the personas gave the team a shared picture of eight audiences. The team's own retrospective named training on Adobe Experience Manager and documentation for CUNA staff as the main gaps.

If I did it again, I would plan the follow-up before the project ended. In December 2021 I drafted a post go-live questionnaire for the personas: what people buy and why, where they get their information, what is and is not working on cuna.org, and how likely they are to recommend it. I would run that, re-run the same tree test scenarios on the shipped structure, and track checkout completion and support email volume against the figures the team already had. That turns "we think this is better" into something measurable.
