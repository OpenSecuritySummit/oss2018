---
title        : Threat model cheat sheets
type         : outcome
track        : Threat Model
video        :                    #url i.e. youtube, vimeo, etc
slides       :                    #url i.e. slideshare
images       :
session_type : working-session   
technology   :
featured     : yes
categories   : Threat Model                    
status       : done             
description  : Creation of three new TM cheat sheets
---



## Outcomes
Three Cheat Sheets for Central Questions 2 to 4

## Synopsis and Takeaways 

The OWASP Threat Model Project seeks to document threat modeling techniques grouped around four key questions that form the basis of most TM methodologies:

- What are we building?
- What can go wrong?
- What are we going to do about that?
- Did we do a good enough job?

### Cheet Sheet Structure & Process

- Each cheat sheet has a maximum of 5 key points
- Each key point is as simple and concise as possible
- Each point starts with either DO or DON’T
- Ideas are collected in a collaborative environment
- The top five are chosen by consensus to be documented

### Reference
Cheat Sheet created for Question 1 at 2017 Summit

#### Question 1: What are we building?

- **DO** Scope to what is under your control.
- **DO** Understand the context your system will live in. This includes but is not limited to the environment, security controls, etc
- **DO** If you get stuck, either look at the entry and exit points OR let the Subject Matter Expert (SME) tell a story to get back on track.
- **DON’T** Go beyond/deeper than design level.
- **DON’T** Use Threat Modeling like a kitchen sink, don’t try to put everything in.

<img src="https://user-images.githubusercontent.com/1088314/41206935-c686ee88-6d0c-11e8-81b5-aff77d2b61ef.jpg" width="100%">

## Working Materials

### Question Two: WHAT CAN GO WRONG?

- **DO** Use the whole team: including security operations, product owner, marketing and design usability (don’t limit yourself or shut down the brainstorm too early)
- **DO** Use existing libraries, practices and structures such as STRIDE, CAPEC, Kill Chain, Story Mapping (don’t reinvent the wheel)
- **DO** Capture good notes, use open questions, and own the follow-up process 
- **DO** Engage constructively and blamelessly - create a safe space 
- **DON’T** Get stuck in a framework, or discredit ideas because they don’t fit the framework (do admit when you are stuck and be wary of diminishing returns)

<img src="https://user-images.githubusercontent.com/39884432/41194977-14b4d3f6-6c25-11e8-8458-2c6747bd266c.jpg" width="100%"> 
<img src="https://user-images.githubusercontent.com/39884432/41194945-372503ee-6c24-11e8-99f8-89847d3efd46.jpg" width="100%"> 

### Question Three: WHAT ARE WE GOING TO DO ABOUT IT?

- **DO** Collaborate, validate and prioritise (findings, threats and first assumptions)
- **DO** Draw on, extend and customise existing countermeasures
  - Organisational standards - SSO and WAF
  - Common standards - USE ACL and Hash PW
- **DO** Write tests and test cases
- **DO** Integrate with partner or team tools and processes
- **DON’T** Confuse can and should

<img src="https://user-images.githubusercontent.com/39884432/41195029-2aee353a-6c26-11e8-995a-247bbfe62865.jpg" width="100%">
<img src="https://user-images.githubusercontent.com/39884432/41195031-3b61ad3e-6c26-11e8-92ee-268e15de0a7b.jpg" width="100%">


### Question Four: DID WE DO A GOOD ENOUGH JOB?

- **DON’T** Skip this step!
- **DO** Follow Up and Actionable Outputs
- **DO** Follow up with Survey and Lessons Learned
- **DO** Keep what works and lose what fails
- **DO** Actioned Items
- **DO** Continuous Validation
- **DO** Compare Q1 (what we are building) with Q3 (what we built)
- **DO** Validate Assumptions
- **DO** Compare outputs with Bug Bounty, Pen Test and Audit Findings
- **DO** Share outputs with whole team

<img src="https://user-images.githubusercontent.com/39884432/41195046-80e7b3b2-6c26-11e8-8964-be83aff3f56d.jpg" width="100%">


## References 

- **Session page :** [Threat Model Cheat Sheets](https://open-security-summit.org/tracks/threat-model/working-sessions/tm-cheatsheets/)
- **Summit 2017 session page :** [2017 Threat Model Sessions](https://owaspsummit.org/Working-Sessions/Threat-Model/index.html)
- **Summit 2017 outcome page :** [Outcomes OWASP Projects: Cheat Sheets](https://owaspsummit.org/Outcomes/Owasp-Projects/Cheatsheets.html)

### Additional/External References
OSWASP Cheat Sheet Guidelines: https://www.owasp.org/index.php/OWASP_Cheat_Sheet_Series#tab=Cheat_sheet_Guideline

