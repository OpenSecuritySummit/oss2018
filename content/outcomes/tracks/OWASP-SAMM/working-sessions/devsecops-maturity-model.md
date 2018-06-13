---
title        : DevSecOps Maturity Model (DSOMM)
type         : outcome
track        : OWASP SAMM
video        :                    #url i.e. youtube, vimeo, etc
slides       :                    #url i.e. slideshare
images       :
session_type : user-session   
technology   :
categories   : DevSecOps               
status       : review-content             
description  :
---



## Outcomes/Deliverables
- Resolve and describe the fundamentals of a DevSecOps Maturity Model (DSOMM)

## Synopsis and Takeaways
####  What are the Motivations for a DevSecOps Maturity Model?
A group discussion agreed on the following:

- Measurement
- A widely adopted standard
- Accessibility
- Programmatically obtain the data
- Reliable Information
- Scoring/Metrics
- The ability to see progress
- Transparent Implementation
- Ensuring Traceability
- Tone from the top
- Automation
- Actionability
- Bidirectional Collaboration
- Control Prioritisation 
- Selection based on assessment of current drivers for business to adopt devops

#### Which level of detail does a DevSecOps Maturity Model provide? 
On a scale ranging between a high of **'SAMM: Utilize automated security testing tools'**, and a low being **'Use OWASP Dependency Check every night'**, participants were asked to select a level of detail appropriate for the DSOMM.

Consensus was reached that the DSOMM should have a level of detail below that of SAMM.

#### Which dimensions do you see in a DevSecOps Maturity Model?
After a lively discussion, the following foundational dimensions were decided on:

- Technology
- Processes
- Culture
- Tools
- Automation
- Information flow

Other options for foundational dimensions were given as:

- Culture and Organisation
- Infrastructure
- Build and Deployment
- Test and Verification
- Information Gathering

#### Which attributes does an implementation point/action have?

- Frequency
- Descriptiveness/Level of Documentation
- Motivations/Risks
- Intensity
- Automation
- Repeatability/Reproducibility
    - if you run the same tool against the same inputs, you get the same output
- Predictability (different from above)
- Auditability
    - can confirm that action was done and how
- Scope/Depth
    - what level is the action taken to? (e.g. how many static checks performed?)

#### How do we measure maturity?
In relation to the range that should apply to a maturity scoring, the following points were put forward for consideration:

- Range either from 0-4 or 0-6
    - Odd range sizes should not be used, because of the tendency for people to overuse the middle score
- It was suggested that ranges might be different per attribute 

#### Comparisons with other Maturity Models and the Integration of security in the devops operating model:

- OpenSAMM is built around “functions of software development with security practices tied to each”. It is not people-centric the way DevOps is.
- DevSecOps = people and collaboration over tools and processes
- OpenSAMM is not really embedded into software development in the way it is expected to be with DevSecOps. OpenSAMM doesn’t embed the value of DevOps into the model (e.g. automation, cross-functional teams).

The following questions and points were also raised:

- Why should security be scored separately, in a vacuum? 
- Why not make it a product team that is embedded in the process and scored along with everyone else? 
- Shouldn’t we be scored on the overall success of the product, not our own values? 
   - If the product/business fails to deliver value to customers, ultimately, security fails.


## References
[Session page](https://open-security-summit.org/tracks/devsecops/working-sessions/devsecops-maturity-model/)


### Additional/External References
- http://gdosmm-translation.timo-pagel.de/
- [Francois' DevSecOps whitepaper](https://www.devseccon.com/wp-content/uploads/2017/07/DevSecOps-whitepaper.pdf) 
- [Michele's sanitized Product Security Maturity Model](https://os-summit.slack.com/files/UAZNEBX44/FB2QR9QK0/product_security_maturity_model_sanitized.pdf)
- [CAMS - DevOps Dictionary](http://devopsdictionary.com/wiki/CAMS)
