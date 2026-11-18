# CUNA: finding out where credit union staff got lost on cuna.org

**Role:** UX Designer and Researcher
**Company:** CUNA (Credit Union National Association)
**Duration:** February 2021 to February 2022

CUNA is a national trade association for credit unions. I was the UX designer and researcher on the team reworking cuna.org, and most of my work was research into one question: when someone arrives with a job to do, can they find the thing?

- **Context:** a large association site with several audiences, an advocacy section and a store for training and conferences. It was slow, hard to navigate, and moving from Ektron to Adobe Experience Manager
- **What I owned:** the research and its design. Stakeholder interviews, a 28-question survey and its personas, plus tree tests and card sorts, all designed and built in Optimal Workshop, a heuristic evaluation, competitive analysis, user flows, and a naming convention for the site's PDFs. I also created wireframes in the design system, to put the results into screens
- **Outcome:** the studies shaped how the team approached the site structure and gave it personas for eight areas of credit unions

```stats
325 of 530 | visit the site seven or more times a year | Measured
65.7% | had bought training or other products on cuna.org | Measured
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

I started with stakeholder interviews, then sent a 28-question survey, built in Optimal Workshop, to credit union staff, board members and leagues. 537 people completed it (measured). 325 of the 530 who answered the visit-frequency question said they visit seven or more times a year (measured), so these were people who knew the site well. The frustration was not coming from newcomers.

I used a net promoter score on three questions as a place to start looking.

```stats
27 | net promoter score: how well CUNA.org supports their job | Measured
41 | net promoter score: the online purchase experience | Measured
47 | net promoter score: recommending the site to a colleague | Measured
```

348 of the 530, or 65.7%, had bought training or other products on the site (measured), so the store was a core part of the experience, not a side feature.

I affinity mapped the written responses, sorting them by how people felt about the site: negative, neutral because they need it for their job, neutral because they do not really need CUNA, and positive.

![Affinity map of the written survey responses, grouped into four sentiment areas with sticky notes colored by theme](/assets/cuna/affinity-map.jpg "Affinity map of the written survey responses. Zoom in to read individual notes.")

From the survey and the map, I built personas for eight areas of credit unions: board members, compliance and risk, lending, marketing, operations and member experience, finance, HR, and technology.

![Persona card for a credit union board member, showing needs, frustrations, frequent site areas and how important the site is to the role](/assets/cuna/persona-board-member.png "One of eight persona cards, built from the survey.")

People valued CUNA's resources and training. They said the site was slow, hard to navigate, and that training cost too much for smaller credit unions. One comment captured it: "I often spend an hour trying to sign up for a course and by then I don't have time to actually take it."

When asked which area mattered most, 173 chose the training bundle and webinars, 125 compliance, 74 conferences and 56 CPD Online, against 44 for advocacy (measured). That matched the analytics.

## How I designed the studies {nav=Study design}

I designed and built the studies in Optimal Workshop myself, including the 28-question survey and its net promoter score. For each question we needed answered, I chose the method that fit it: a survey for how people felt, a tree test for whether people could find something, and a card sort for how people group things and what they call them. I also set up branching answer logic, so a participant's answer decided which question the study asked next.

## Tree test: can people find where to register a team? {nav=Tree test}

Staff who work with customers had told us "Learn" versus "Shop" was unclear, because many learning products also sit on shop pages. So I ran a tree test in Optimal Workshop comparing two structures. V1 was the existing site, with Shop and Learn at the top level. V2 reorganized around Events & Training and Products. The UX team and I wrote tasks from how CUNA actually sells, such as this one:

> You want to register your marketing team for the CUNA Digital Marketing School, which they will attend virtually. Where would you go to register the team?

![Optimal Workshop comparison of the registration task: all 4 participants succeeded on the new structure on the left, none of 4 on the existing structure on the right](/assets/cuna/treejack-task3-comparison.png "Task 3, the registration scenario. Left is V2, where the correct answer sat under Events & Training. Right is V1, where it sat under Shop.")

On that task, all four participants found the right place in V2 and none of the four did in V1 (measured, small sample). In V1, three of the four went to Learn, and the fourth went to Shop but chose Schools & Conferences instead of eSchools (measured). That is the Learn versus Shop confusion showing up in behavior.

Across all tasks, 81% of completed tasks ended at a correct answer in V2, against 31% in V1, and 88% of V2 answers were chosen without backtracking (measured).

![Optimal Workshop overall results for the new structure: 81% average success, 88% directness, and a bar for each of the four tasks](/assets/cuna/treejack-v2-overall.png "Overall results for V2 across the four tasks.")

It did not split that cleanly everywhere. On the Youth Month Design Bundle purchase, both versions came out at 50% success with the same directness score of 75% (measured). In V2, both people who missed started under Events & Training (measured).

![Optimal Workshop path view for the Youth Month Design Bundle task, existing structure on the left and new structure on the right, showing where participants went and where they went back](/assets/cuna/treejack-task4-paths.png "Task 4 path view. Left is V1, right is V2. Green is the right path, red the wrong one, teal is going back.")

With four people per tree, I read this as direction, not proof. The tree test also records the paths people took, so a failed task shows where they went instead of where we expected.

## Card sort: how people group our products {nav=Card sort}

The tree test checked the structure. The card sort checked the language. In Optimal Workshop, participants grouped 13 product cards, from eSchools, Course and Book to Webinars, Reports and the Credit Union Compliance Management System, and labeled the groups themselves. The study ran from March 5 to March 10, 2021, and 17 of 20 participants finished it (measured).

![Optimal Workshop dendrogram from the product card sort, showing which cards participants grouped together](/assets/cuna/card-sort-dendrogram.png "Dendrograms from the product card sort. Cards that join further left were grouped together more often.")

Under the strictest method, participants agreed on three clusters: the Member Celebrations items with Marketing Tools, the training products (Training Bundle, CPD Online, Course, eSchools and Webinars), and Book, Research and Reports. My reading, not something we tested, is that people grouped by what the content is, not by how CUNA sells it, which fits the staff comments that Learn versus Shop was unclear.

## From results to wireframes {nav=Wireframes}

Research only matters if it changes a screen, so I took the results into wireframes. Using CUNA's design system, I created screens for a Marketing & Business Development Solutions page and a set of reusable promo components. The navigation uses the V2 structure from the tree test, with Events & Training and Products at the top level. The page groups CUNA's products by the job a credit union marketer is doing, with sections such as Essentials, Strategic Planning and Career Advancement. The promo components cover cards for eSchools, podcasts, white papers and on-demand webinars.

![Wireframes of the marketing solutions page on the left and promo components on the right](/assets/cuna/wireframes.jpg "Wireframes built with the design system. Placeholder copy and names. Top of each page shown.")

## What each method told us {nav=Takeaways}

The survey said people were frustrated. The heuristic evaluation and user flows said where the current site broke. The tree test and card sort said where people expected things to be and what to call them. None was enough alone, and the wireframes are where I put them to work.

## Audience breakdown by segment {collapsed} {nav=By segment}

I also broke the survey out by audience, and the groups used the site differently. In the compliance group, 60 respondents named compliance as the most important area, and 61 said they reach the site from a saved bookmark (measured).

My reading, not something we tested, is that a bookmark skips the navigation. The people who rely on the site most may be the ones least affected by its structure, and newer visitors are the ones who hit it.

![Survey results broken out by audience segment, with panels for board, finance, compliance, HR, lending, marketing and operations](/assets/cuna/survey-synthesis-audience.png "Each panel shows one audience's age, education, most important area, how they reach the site, and average ratings. Zoom in to read the numbers.")

## Heuristic evaluation, competitors and user flows {collapsed} {nav=Evaluation}

Before testing anything new, I wanted a list of what the current site did wrong that we could name. I evaluated cuna.org against Nielsen's 10 usability heuristics on a Mural board, with an issues column and a recommendation column for each, and scored each heuristic from 0 to 4 for severity. My highest score, a 3 (major usability problem), went to consistency and standards.

![Mural board with Nielsen's 10 heuristics for cuna.org, each with issues, recommendations, a severity score from 0 to 4, and annotated screenshots](/assets/cuna/heuristic-evaluation.jpg "Heuristic evaluation board. Zoom in to read the issues and recommendations.")

I also compared four similar organizations (NAFCU, the National Credit Union Foundation, the World Council of Credit Unions and CUES) on checkout flow, how they organized shop and learn content, and layout. For the words we use to sell learning, I looked at five learning platforms: Udemy, Skillshare, Coursera, edX and Udacity.

![Competitive analysis board with annotated home pages of Udemy, Skillshare, Coursera, edX and Udacity, and the words each uses for its educational offerings](/assets/cuna/competitive-analysis-learning.jpg "Competitive analysis of five learning platforms, with the language each uses for what it sells.")

Then I mapped the main purchase paths: conferences, eSchools and webinars on one side, and courses, books, PDFs and marketing products on the other, with login and registration branches around them. The flows are color coded by system, AEM for browsing and Nimble for login, registration and checkout. They turned up friction, including a missing payment confirmation and a connection error, and I used them to explain design decisions to the product manager, stakeholders and developers.

![User flows for two purchase paths, color coded by system: AEM in blue and Nimble in green](/assets/cuna/user-flows.png "Purchase flows. Conferences, eSchools and webinars on top; courses, books, PDFs, marketing products and reports below.")

I mapped the account side of the site the same way: creating an account, registering for an event, updating a profile, paying an invoice, adding a payment method, donating, and buying a product.

![Eight flows for the account side of the site, drawn as sticky notes with the screens behind each step blurred](/assets/cuna/account-flows.png "Account flows. Recreation. Client names and data removed. Screens blurred. Zoom in to read the steps.")

## Card sorting the advocacy section {collapsed} {nav=Advocacy sort}

Advocacy was where traffic and importance disagreed. The March 2021 meeting left open questions: split content by audience (members and lawmakers), improve dropdown access to the main page, and whether people wanted past issues at all.

I met stakeholders first, then ran a card sort in Optimal Workshop with cards like Credit Union Powers, Regulatory Relief and Consumer Protection. We also put the archive question in the survey. 44 respondents answered, and 38 wanted to read what CUNA had told regulators and lawmakers in the past (measured).

In the 3D cluster view, one suggested group held 12 of the issue cards. The labels participants gave that group included Priorities We're Fighting for and Advocacy resources.

![Optimal Workshop 3D cluster view of the advocacy card sort, with one group of 12 issue cards selected and the labels participants gave it](/assets/cuna/card-sort-advocacy-3d.png "3D cluster view of the advocacy card sort, with one suggested group selected.")

## Products page and PDF naming {collapsed} {nav=Products and PDFs}

Training products and seminars were among CUNA's biggest revenue drivers, and the products page structure was a survey pain point. Before recommending changes, I made an inventory of what each product page contained, so grouping and naming decisions rested on a list and not a feeling.

The site also hosted many PDFs that search could not tell apart. I wrote a naming convention: a short code for the area or product, then document type, then a short description, capped at 20 characters so files synced cleanly. It also covered metadata (title, author, description, keywords). One rule mattered most: documents behind a login, like training bundles and webinars, carry no metadata, because they are paid content and should not appear in a Google search.

## Planning the usability tests {collapsed} {nav=Test plans}

Each team that owned part of the site had its own question, and I collected them: whether mega menu category text was recognized as clickable, how button names and promo placement affected browsing, whether whole product cards should be clickable, and how people search for training.

From those I drafted a moderated A/B test on breadcrumbs, with a script and three scenarios: an HR lead signing up staff for a conference, an employee going after a certification, and a board member checking bills in Congress. I raised mobile early, since too many breadcrumbs crowd a small screen, and kept a running list of mobile errors.

## What happened next

My research fed the team's decisions about the structure of cuna.org, and the personas gave the team a shared picture of eight audiences. The team's own retrospective named training on Adobe Experience Manager and documentation for CUNA staff as the main gaps.

If I did it again, I would plan the follow-up before the project ended. In December 2021 I drafted a post go-live questionnaire for the personas: what people buy and why, where they get their information, what is and is not working on cuna.org, and how likely they are to recommend it. I would run that, re-run the same tree test scenarios on the shipped structure, and track checkout completion and support email volume against the figures the team already had. That turns "we think this is better" into something measurable.
