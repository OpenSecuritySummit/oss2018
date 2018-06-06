---
title        : DevSecOps Maturity Model (DSOMM)
type         : outcome
session_type : user-session    # working-session, user-session, product-sesssion
technology   :
categories   :                    # GDPR, Juice Shop, etc.
status       : draft              # draft, review-content, done
description  :
---

@import "/static/img/logo.png"

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


#### Which level of detail does a DevSecOps Maturity Model provide? 
On a scale ranging between a high of **'SAMM: Utilize automated security testing tools'**, and a low being **'Use OWASP Dependency Check every night'** participants were asked to select a level of detail appropriate for the DSOMM

Consensus was reached that the DSOMM should have a level of detail below that of SAMM

#### Which dimensions do you see in a DevSecOps Maturity Model?
After a lively discussion, the following foundational dimensions were decided on:

- Technology
- Processes
- Culture
- Tools
- Automation
- Information flow

#### Which attributes does an implementation point/action have?

- Frequency ??
- Descriptiveness/Level of Documentation
- Motivations/Risks
- Intensity ??
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

## References
- https://open-security-summit.org/tracks/devsecops/working-sessions/devsecops-maturity-model/


### Additional/External References
- http://gdosmm-translation.timo-pagel.de/
- [Francois' DevSecOps whitepaper](https://www.devseccon.com/wp-content/uploads/2017/07/DevSecOps-whitepaper.pdf) 
- [Michele's sanitized Product Security Maturity Model](https://os-summit.slack.com/files/UAZNEBX44/FB2QR9QK0/product_security_maturity_model_sanitized.pdf)
