---
title        	: AppSec Metrics
type         	: outcome
session_type 	: user-session   # working-session, user-session, product-session
technology	:
categories   	:                  	# GDPR, Juice Shop, etc.
status      	: review-content           	# draft, review-content, done
description	:
---


### Why Use Application Security Metrics?

You can’t improve what you don’t measure. It is important to measure the activities as part of SDL and drive future improvements to the application security (AppSec) program. Metrics show business value to stakeholders and help drive further investments in the program. Metrics also help in figuring out what is working and what is not.

Metrics used should be meaningful and not there just for the sake of using metrics (avoid metric fatigue).

### What are Possible AppSec Metrics and How Viable are They?

1. Mean time to find (vulnerabilities): you cannot know MTF for the vulnerabilities you haven't found yet.
2. Mean time to fix/remediate: in continuous integration (CI), MTTF for NEW bugs is good, but for existing issues it may be less useful, because you may have a periodic release model and agree to fix it in a later release or simply before the next release.
3. Number of high/medium/low severity: yes, but should also overlay this metric onto your threat/risk model.
4. Number of vulnerabilities per 10 KLOC: yes.
5. Top 5/10 vulnerabilities per business unit product: yes, also because it feeds back to training/education/framework choice.
6. Issues fixed: yes, can be useful.
7. Percentage of projects with automated scanning: yes, should also indicate level of maturity of automated scanning.

### Additional Considerations (Audience Comments)

- Understand who is consuming the metric and project metrics to the product owner, to developers, etc. accordingly.
- Somewhere with metrics there needs to be the "spirit" of the metric - and how to check it is not being abused.
- In the model of the CI pipeline, we should superimpose metrics where they are likely to apply. This gives a better idea of dependencies and useful feedback to other parts of pipeline.
- With new languages etc., security tools may not have the maturity needed for useful measurement. Golang is one example: a team using Golang ended up suggesting that Golang was "secure by default", which tools appear to confirm retrospectively.
- A metric is not necessarily designed for uniform application to pipeline/across whole pipeline. 
- There is always a need to measure, even if metrics continue to change and expand.
- Time to fix is not the same as Time to redeploy.
- To handle risk over time - as your product matures – it would be interesting to identify patterns that can help determine risk envelope.
- Need to improve STDL (structured test description language) to be more risk based, with additional tools for threat modelling and security measures.
- ROI is often important. Which tools should be used when and where for best return and decreasing risk profile?

### Measurement Data Collection and Managing

1. How much and from where (Bug bounties, SOC, etc.)
2. What level of granularity you need?
3. Freshness/validity of the data
4. Manager false positives earlier or later in the process?
5. There is no one-size-fits-all
6. Metrics are also based on maturity/risk level of each product

## References
- **Session page :** •	https://open-security-summit.org/tracks/devsecops/user-sessions/creating-appsec-metrics-and-visualisation/
