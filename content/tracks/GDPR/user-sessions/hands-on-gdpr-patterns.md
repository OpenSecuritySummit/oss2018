---
title        : Hands-on GDPR Patterns
type         : user-session
track        : GDPR
topics       : ["GDPR"]
technology   :
categories   :                      # GDPR, Juice Shop, etc.
featured     :                    # review with summit team "yes"
when_day     : Tue
when_time    : PM-1
room_layout  :                    #
room_number  :
status       : review-content     # draft, review-content, done
description  : Using GDPR Patterns
organizers   :
    - Anne-Marie Grace
participants :
  - Dinis Cruz
  - Sophie Tonnoir
  - Goher Mohammad
invited:
    - Dinis Cruz
    - Fernanda Almeida

---

## Topic

Practical use of https://github.com/pbx-gs/gdpr-patterns project

### What are GDPR Patterns?

They are reusable mappings of data journeys across specific threat modeling scenarios.

The idea is to take the diagram below and map specific scenarios to it.

{{< figure  width="540" src="https://user-images.githubusercontent.com/656739/37588949-ac1bfc84-2b5b-11e8-832b-3732595bb25f.png" >}}


### 'Based on Threat Models?'

Threat models diagrams are perfect sources of data mappings since they already mapped the flows of data (where it comes from and where they go to)

Here is an example of a Threat model created at the last Summit's Working session on Threat Modeling (on OWASP Juice shop application).

{{< figure  width="540" src="https://user-images.githubusercontent.com/656739/37588955-b33a3472-2b5b-11e8-9efb-5cb7cbe24175.png" >}}


### GDPR Pattern driven by Threat Model

Here is an example of what the 'GDPR Pattern driven by Threat Model' mapping looks like when it is done (for a service that regularly fetches data from Paypal and feeds it to AWS Redshift).

{{< figure  width="540" src="https://user-images.githubusercontent.com/656739/37588963-b8453278-2b5b-11e8-856a-ca7716c1ff8c.png" >}}

### Maping GDPR Appropriate Security Measures

To help with the appropriate security controls, we use this table:

{{< figure  width="540" src="https://user-images.githubusercontent.com/656739/37588972-c186abd2-2b5b-11e8-8c72-f7420230da32.png" >}}


### OWASP GDPR Patterns

The GDPR patterns is an OWASP Project and all materials created are released under an open source license, allowing for internal and commercial use.

All content is hosted at the https://github.com/OWASP/gdpr-patterns repo
