---
title        : Creating a standard for GDPR patterns
type         : working-session
track        : GDPR
topics       : ["GDPR"]
technology   :
categories   :                      # GDPR, Juice Shop, etc.
featured     : yes                   # review with summit team "yes"
when_day     : Tue
when_time    : AM-1
room_layout  :                    #
room_number  :
status       : done              # draft, review-content, done
description  : Working Session on reviewing and agreeing on a set of GDPR patterns
organizers   :
    - Mario Platt
---

GDPR Patterns are reusable mappings of data journeys across specific threat modelling
scenarios.

It aims to support the mapping of data flows and consider security and privacy requirements
to meet EU GDPR regulation.

## WHY

Threat model diagrams are excellent sources of data mapping as they allow us to ensure a
consistent model to assess threats and controls designed to mitigate those threats.

The use of GDPR Patterns permits organizations to risk assess
data flows and select technical and organizational measures
used to meet security and privacy requirements as set by EU GDPR

## What

In order to assess threats to privacy and security and enable organisations to have a
standardized approach, there’s the need to define the detail to
each step of the patterns. The following steps are to be defined on the data model as
standard capabilities:

 - Data source
 - Categories of individuals
 - Categories of Personal data
 - Purpose of processing
 - Data Security
 - Lawful basis of processing
 - Data retention
 - Data transfer
 - Data recipients

 **What are GDPR Patterns?**

 They are reusable mappings of data journeys across specific threat modeling scenarios.

 The idea is to take the diagram below and map specific scenarios to it.

 {{< figure  width="540" src="https://user-images.githubusercontent.com/656739/37588949-ac1bfc84-2b5b-11e8-832b-3732595bb25f.png" >}}


 **'Based on Threat Models?'**

 Threat models diagrams are perfect sources of data mappings since they already mapped the flows of data (where it comes from and where they go to)

 Here is an example of a Threat model created at the last Summit's Working session on Threat Modeling (on OWASP Juice shop application).

 {{< figure  width="540" src="https://user-images.githubusercontent.com/656739/37588955-b33a3472-2b5b-11e8-9efb-5cb7cbe24175.png" >}}


 **GDPR Pattern driven by Threat Model**

 Here is an example of what the 'GDPR Pattern driven by Threat Model' mapping looks like when it is done (for a service that regularly fetches data from Paypal and feeds it to AWS Redshift).

 {{< figure  width="540" src="https://user-images.githubusercontent.com/656739/37588963-b8453278-2b5b-11e8-856a-ca7716c1ff8c.png" >}}

 **Maping GDPR Appropriate Security Measures**

 To help with the appropriate security controls, we use this table:

 {{< figure  width="540" src="https://user-images.githubusercontent.com/656739/37588972-c186abd2-2b5b-11e8-8c72-f7420230da32.png" >}}


## Outcomes

The outcome is to have a standardised data model covering all steps to security and privacy
capabilities required, so the model can then be applied and tailored to each organisation and
their particular capabilities and risk appetite.

## References

**OWASP GDPR Patterns**

The GDPR patterns is an OWASP Project and all materials created are released under an open source license, allowing for internal and commercial use.

All content is hosted at the https://github.com/OWASP/gdpr-patterns repo
