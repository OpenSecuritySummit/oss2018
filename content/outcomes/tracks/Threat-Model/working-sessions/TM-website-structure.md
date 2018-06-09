---
title        : Threat Modeling Website Structure
type         : outcome
session_type : user-session    # working-session, user-session, product-sesssion
technology   :
featured     : yes
categories   :                    # GDPR, Juice Shop, etc.
status       : draft              # draft, review-content, done
description  :
---

@import "/static/img/logo.png"

## Outcomes/Deliverables (recommend)

## Context

- The OWASP mission is to document and share impartial and practical software security information that is accessible to individuals and organisations.
- Anyone is free to participate in the knowledge-based documentation published on the OWASP Threat Model pages.
- Content is produced in collaboration, published by consensus and reviewed by wiki-users from around the world.

### OWASP Threat Model Pages

A list of pages is found at the OWASP TM landing page. The main subpages are:
- Application Threat Modelling
- Risk Threat Modelling

## New Website Content
### What

Threat modelling works to identify, communicate and understand threats and mitigations within the context of protecting something of value.

Threat modelling can be applied to a wide range of things, including software, applications, systems, networks, distributed systems, things in the internet of things, business processes, etc. There are very few technical products which cannot be threat modelled; more or less rewarding, depending on how much it communicates, or interacts, with the world. Threat modelling can be done at any stage of development, preferably early - so that the findings can inform the design.

Most of the time, a threat model include:

- A description / design / model of what you’re worried about
- A list of assumptions that can be checked or challenged in the future as the threat landscape changes
- A list of potential threats to the system
- A list of actions to be taken for each threat
- A way of validating the model and threats, and verification of success of actions taken

Our motto is: Threat modelling; the sooner the better, but never too late.

### Why

The inclusion of threat modelling in the SDLC can help

 - Build a secure design
 - Efficient investment of resources; appropriately prioritize security, development and other tasks
 - Bring Security and Development together to collaborate on a shared understanding, informing development of the system
 - Identify threats and compliance requirements, and evaluate their risk
 - Define and build required controls.
 - Balance risks, controls, and usability
 - Identify where building a control is unnecessary, based on acceptable risk
 - Document threats and mitigations
 - Ensure business requirements (or goals) are adequately protected in the face of a malicious actor, accidents or other causes of impact 
 - Identification of security test cases / security test scenarios to test the security requirements

## 4 Questions

Most threat model methodologies answer one or more of the following questions:

### 1. What are we building?

As a starting point you need to define the scope of the Threat Model. To do that you need to understand the application you are building, examples of helpful techniques are:

 - Architecture diagrams
 - Dataflow transitions
 - Data classifications
 - You will also need to gather people from different roles with sufficient technical and risk awareness to agree on the framework to be used during the Threat Modelling exercise.

### 2. What can go wrong?

This is a research activity in which you want to find the main threats that apply to your application.

### 3. What are we going to do about that?

In this phase you turn your findings into specific actions.

### 4. Did we do a good enough job?

Finally, carry out a retrospective activity over the work you have done to check quality, feasibility, progress, and/or planning.

### H1 Process

The technical steps in threat modelling involve answering questions:
 - What are we working on
 - What can go wrong
 - What will we do with the findings
 - Did we do a good job? 
 The work to answer these questions is embedded in some sort of process, ranging from incredibly informal Kanban with Post-its on the wall to strictly structured waterfalls.

The effort, work, and timeframes spent on threat modelling relate to the process in which engineering is happening and products/services are delivered. The idea that threat modelling is waterfall or ‘heavyweight’ is based on threat modelling approaches from the early 2000s. Modern threat modelling building blocks fit well into agile and are in wide use.

### H2 When to threat model

When the system changes, you need to consider the security impact of those changes. Sometimes those impacts are not obvious.

Threat modelling integrates into Agile by asking “what are we working on, now, in this sprint/spike/feature?”; trying to answer this  can be an important aspect of managing security debt, but trying to address it per-sprint is overwhelming. When the answer is that the system’s architecture isn’t changing, no new processes or dataflows are being introduced, and there are no changes to the data structures being transmitted, then it is unlikely that the answers to ‘what can go wrong’ will change. When one or more of those changes, then it’s useful to examine what can go wrong as part of the current work package, and to understand designs trade-offs you can make, and to understand what you’re going to address in this sprint and in the next one. The question of did we do a good job is split: the “did we address these threats” is part of sprint delivery or merging, while the broader question is an occasional saw-sharpening task.

After a security incident, going back and checking the threat models can be an important process.

### H2 Threat modelling: engagement versus review

Threat modelling at a whiteboard can be a fluid exchange of ideas between diverse participants. Using the whiteboard to construct a model that participants can rapidly change based on identified threats is a high-return activity. The models created there (or elsewhere) can be meticulously transferred to a high-quality archival representation designed for review and presentation. Those models are useful for documenting what’s been decided and sharing those decisions widely within an organization. These two activities are both threat modelling, yet quite different.

### H2 Validating assumptions

#### H2 Agile approaches

Main agile threat modelling page
Specific agile approach1 TM page
Specific agile approach2 TM page
H2 Waterfall approaches

## Main waterfall TM page

Working Materials
Session participants created and worked on a Google Drive Document

## References
Session page: [Threat Modelling Website Structure](https://open-security-summit.org/outcomes/tracks/threat-model/working-sessions/tm-website-structure/)
Summit 2017 session page: [Threat Modeling OWASP Pages](https://open-security-summit.org/outcomes/tracks/threat-model/working-sessions/tm-website-structure/)
Summit 2017 outcome page: OUTCOMES - [Threat Modeling OWASP Pages](https://owaspsummit.org/Outcomes/Threat-Model/Threat-Modeling-Tools.html)

## Additional/External References
[About OWASP](https://www.owasp.org/index.php/About_The_Open_Web_Application_Security_Project)
OWASP Project Page

