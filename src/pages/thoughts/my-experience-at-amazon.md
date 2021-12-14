---
# src/pages/index.md
layout: ../../layouts/post.astro
title: My Experience At Amazon
published: 12/3/21
---
# My Experience at Amazon

## Joining Amazon

After working at GoDaddy for 5.5 years I was ready to make a change. I was recruited by Amazon to work in their devices org, and after joining learned that specifically I was joining a centralized UX team with in the sales and marketing division within devices. (Note: it is a really good thing to understand the org structure you are joining during the interview process, and get information about the goals of the org and how that influences decision making). 

**Interviewing:**

Amazon interview loops are fairly similar across roles and heavily rely on *behavioral* interview process through which they are assessing your answers against the [Amazon Leadership Principles](https://www.amazon.jobs/en/principles). (If you are going through the process you will be specifically coached by the recruiter on how to use the leadership principles). In preparation for the interview, I wrote down all of the principles and made bullet notes of work examples that I could use to relate my experiences to specific principle. To Amazon’s credit, the leadership principles are not just bulletin board material, they are referenced and used actively in decision making and so interviewing through the lens of the principles makes a lot of sense for them as a business. 

In addition to the behavioral interviews I also did a technical screen (live coding with a Sr Design Technologist at the company) which consisted of a fairly simple html, css and javascript exercise (no framework). For the onsite, I was asked to prepare a take-home exercise to present during the onsite (as well as 2-3 case studies of current work). Amazon is big on data, so they are really interested in the impact of your work (what metrics do you have to support that you made the right decision etc). Unfortunately due to a miscommunication, I found out about the take home exercise 2 days before the onsite, so I had to scramble to put together a [prototype](https://codesandbox.io/s/movie-reviews-5yccq) the day before (which unfortunately meant I did really poorly in another interview I had scheduled for the same week). 

I don’t mean to sound arrogant, but after the panel interview where I presented 2 case studies as well as my prototype, I was very confident that I would get an offer. I could sense from people’s body language and questions that they were impressed with my work. (as a side note, I have had WAY more success interviewing for design roles being a technical designer or designer who codes vs engineering roles where my design eye could add value). 

**The Offer:**

Sure enough I got an offer the following week. When I read through they offer they were pushing aggressively for a start date (2 weeks from the offer). This should have been an indication to dig deeper to better understand why they were in such a hurry (which I did a bit but I wish I would have gotten some more information). We ended up negotiating a later start date and increased the total comp number by ~10k (which netted out to about a 25% raise from where I was at with GoDaddy). 


## Working At Amazon:

When I joined Amazon it felt simultaneously WAY bigger and WAY smaller than I expected . This says a lot about the way that Amazon operates (I’ll dive into the implications of this).

**How Amazon Operates:**

Amazon effectively operates like a federation of smaller companies. There are (extremely) large organizations, which break into divisions, and then into small, functionally independent teams. At the time I joined, the Devices Org was 29,000 employees (massive). Each individual team owns its own infrastructure, roadmap, and goals (which trickle down the org). This is further emphasized when Team A (for example) wants Team B to build an integration or work on something, they will “fund headcount” out of their operating budget. 

When you operate at this type of scale, centralization is the enemy of efficiency. This is a paradox. In order to be efficient on a macro level, it requires being (very) inefficient at the micro level. For example, almost every organization is going to build their own tooling to solve effectively the same problems, but tailored to their specific use cases. Every org (probably) has its own forecasting system, way of publishing content to the website etc. A good example of this was when I joined, I wanted to see if there were any design systems for internal tools. It turned out there were 56!  

The most surprising thing I encountered when joining was how manual the vast majority of processes are. It blew my mind how many business critical processes were managed with excel spreadsheets being shared via email chains.  (It is incredible how flexible and effective Excel is for such a wide variety of use-cases). 

**The Implications:**

There are a number of implications (some good some bad) of this operating model. 


1. Documentation Is Essential

One of the things I appreciate most about Amazon is their emphasis on documentation. Every important decision is presented in the form of a document:


- PRFAQ - Press Release and Frequently asked questions (a document format used to pitch a new idea or investment opportunity)
- OP1 - A team’s 1 year business plan (what they are going to work on and try and accomplish)
- BRD - A tactical plan for a particular project that lists all of the requirements in detail
- Design Document - An engineering document which lays out the technical strategy with high level of detail, documenting the approach as well as alternatives considered
- 1 Pager - A summary document used to bring a stakeholder up to speed on a particular topic (used for building alignment around goals)

There are other documents (a global wiki is available where you can learn about almost every topic at amazon). A document centric strategy is critical at Amazon because of its decentralized nature. Instead of a person being the source of truth on a subject, the document becomes the source of truth. This makes communication much more egalitarian and explicit (which I really like). Also documents go through a number of revisions before they are reviewed by key stakeholders (usually 5-10 revisions maybe more depending on how high level the leader is). 

A document review meeting always begins by reading the document. The assumption is that you have not read the document in detail and so there is a practice to create space for everyone to thoroughly read through. (One quirk I find amusing is that everyone wants the document to have line numbers so they can reference specific points quickly). After the document is read, the discussion begins and stakeholders go through each point. The meeting ends with some sort of action item (go do this, meeting with these people and update the document, etc). 

I have found this to be a very helpful practice that I think would benefit organizations of all sizes, however it does reinforce that people are not the source of truth for information (which leads to my next implication). 


2. Teams are Fragile

When I first joined Amazon, there was a huge push for an aggressive start date. This was because I was backfilling an open role (the designer who’s place I was taking was still at the company but focused on other projects so the product team had been without a designer for 6 months). When I onboarded, there was a huge backlog of work that needed to be done (with PMs and engineers asking for commitments on when I could deliver things by - urgent to not block progress, but also ironic that they are asking a person who has no clue what they are doing to deliver critical work). 

I realized over time that this is the norm. People come and go (which has the net impact of making you feel like you are just a resource). I reviewed the plan for the product I was working on and each quarter represented a scope of work (in my opinion) that you could build a whole company around (CRMs, Email Builder, Complex Automations etc) and my first thought was LOL we are never going to build all that (yet it was what had been promised to stakeholders). 

This uncovered an imbalance that I think exists in many large companies: the path to promotion between PM, Engineering and Design are all different and have incentives that conflict with one another. In many cases, in order for a PM to get promoted they need to deliver some large scale “win” (which consequently can encourage overcommitment, fudging impact numbers / justification). 

In my case, being overly ambitious contributed to poor morale on the engineering team, which in turn lead to longer delays in project execution and shorter on call rotations. In just over 7 months, that team lost 6 engineers, the Engineering Manager and the PM (2 left, then the PM left, then the lack of clarity became a huge snowball and 4 more engineers left the team and then finally the engineering manager who was trying to backfill all those roles ended up leaving). 

The churn I experienced was significant (having another project I supported turn over PMs in the middle, and multiple other team members on another project leave the company or join new teams). Some of the churn could probably be attributed to upstream leadership issues, however in the cases of engineering there is a brutal downward spiral that happens when someone leaves the team.  When someone leaves, they try and backfill the position (which in today’s engineering climate) takes a very long time. In the meantime, the on call rotation shrinks meaning each engineer has to be on call more frequently. 

When an engineer is on call, they are not working on the product (implementing features etc) they are a point of contact for other teams who want to integrate, and are responsible for fixing issues (regardless of what time of day they happen). To be blunt: it sucks. To make matters worse, since each team owns their own infrastructure, there are varying degrees to which safety mechanisms (such as automated testing, one click rollbacks, logging etc are implemented). This creates a chicken and the egg problem of infrastructure vs product development (one usually happens at the expense of the other). So when the morale on the team dips (usually related to lack of clarity or setbacks making things take a long time) people leave the team, which further damages morale and can easily result in a mass exodus. 


3. Everything is Urgent (but takes forever)

When the scale of a company grows, doing (literally) anything requires a strong sense of urgency. This is especially true for programs that are working across various teams to unite a workflow or solve a customer issue that bridges various silos. The job title of Program Manager is essentially someone who coordinates work horizontally across a large organization. Because of the federated operating model, there are many programs and teams who’s charter is to solve a problem that requires integrating with multiple tools or products. 

I report to a centralized UX team which supports the whole sales and marketing organization and owns the “UX” from internal tooling to customer facing properties related to devices. This inherently means that the majority of the work cuts across silos (in order to achieve the ideal customer experience, you need to bring together workflows, consolidate etc). It also means that you naturally inherit the constraints of every single surface you are integrating with. It is nearly impossible to be aware of all of these constraints so the process usually follows a similar pattern: 


- Design a solution
- Review with stakeholders
- Surface all the problems or things you didn’t account for
- Rinse repeat 

On a well executed project, design and research will be involved early and go through these iterations so that when the teams are ready to build they have a decent level of clarity. However, most team’s don’t want to “wait around” for design to be available to assist in the process, and are anxious to start building which usually results in half solutions (its a lot easier to partially solve the problem than to actually think through things from first principles). For me personally, it meant that a lot of my work was meeting with stakeholders and learning about different processes and deep diving into the solution. In an isolated sense, I like this work, however it is impossible to get to the depth of knowledge required to actually solve a problem if you are responsible for more than one project at a time (I am responsible for 3-4 large projects which I toggle between). 

I was hired as a Sr Design Technologist (which bridges the gap between design and engineering and is able to offer technical solutions to customer experience issues). Unfortunately, the majority of my time is spent doing “program” style work which leaves about 10% of my time for technical work. Ultimately this is not what I want to be doing with my career. The larger point here is this: companies’ critical needs will always trump your career ambitions and often there is a large delta between the job you were hired to do, and the job you actually do. The negative side of this is that employees become “resources” (cogs) plugged into gaps to stop the bleeding, rather than contributing out of their core competencies. This was further evidenced when one of the projects I was assigned to had an engineer who had never done web development (didn’t know HTTP, HTML, CSS or Javascript) was tasked with doing the front end system design for a React application (and the API that would power the UI). 



4. Everything is built in house

This is probably an add-on to some of the other implications, but Amazon in particular is obsessed about data security and so it builds all of its tools in house. On one hand, from a frugality (a leadership principle) and scale (cost) perspective this makes sense, however it means that employees have to deal with tooling that is duct taped together and usually doesn’t actually solve the problem (because the work necessary to make a really good solution would have required working across teams and that is too difficult). If I am being perfectly honest, I can’t think of a single internal tool at Amazon that is better than a commercial counterpart.


## Closing thoughts:

I think everyone’s experience at a big company will vary by organization and even by team. In my case, the team I report into has actually been phenomenal. The team is incredibly supportive of one another (and makes really great efforts to stay connected especially operating as a remote team). We have a good cadence for meeting as a team (2x a week), and we have a top tier manager. I have learned a lot working under my current manager. She is tough and pushes everyone to dig deeper and not settle for what’s easy, but she is also kind and joyful (what a powerful combination). I also really admire how responsible and good at communicating / followup everyone on the team is (our 2 researchers in particular). They add so much value to every aspect of the surface area we cover). 

I have also really enjoyed the opportunity to get more hands on experience with AWS. That 10% has been fun (contributing to a Vue.js app that generates marketing graphics - migrating from EventBus to Vuex, adding routing etc). I have helped migrate the app from an EC2 instance to S3 + Cloudfront (using Lambda Edge for authentication). I also got to do a deep dive on permissions and learned a lot about Cognito (user & identity pools) and IAM roles (while integrating with an external OAuth provider). I wish that I could have gotten more hands on experience with Dynamo DB. There is a perfect project for using it and it would be fun to work on data modeling and building an API to power our front end app (but also extend its a capabilities to be able to generate graphics with a service). Unfortunately this work probably falls in the high impact low priority category and wont be executed while I am on the team. 

I don’t regret my decision to come work at Amazon. I have learned a lot in a really short amount of time, but I also realize that this is not a place for me long term and I am at peace with that. On to the next one (and in the meantime finish well). 

