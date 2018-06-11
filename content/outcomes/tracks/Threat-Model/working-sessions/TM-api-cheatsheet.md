---
title        : API Threat Modeling Cheat Sheet
type         : outcome
track        :
video        :                    #url i.e. youtube, vimeo, etc
slides       :                    #url i.e. slideshare
images       :
session_type : working-session
categories   : Threat Model
status       : review-content
description  : a generic cheat sheet for a generic api
---

## Outcomes
A Cheat Sheet covering most common threats against APIs.

## Synopsis and  Takeaways

Cheat sheets are an important learning tool because they force us to distill threat models to their most simple, essential parts.

### Identified Questions

- What are the main Threats against an API?
- Can we find common Threats that apply to APIs?
- Are there generic Threats we could check for applicability?
- Could we organize the Threats in Risk Patterns for APIs?
- Can they be summarized on a Cheat Sheet form?

### Reference
A list of threats from "Threat Modeling: Designing for Security" by Adam Shostack:

- Perform security checks inside the boundary
- Copy before validation-for-purpose
    - Is http://evil.org/pwnme.html “valid”?
- Define the purpose for data, validate near that definition
- Manage error reporting
- Document what checks happen where
- Do crypto in constant time
- Address the security requirements of your API


## A Generic Cheat Sheet for a Generic API

#### Controls  
TLS

#### Assumptions

- Multiparameter API
- Server logs requests including I.P address
- GDPR is applicable (see 2)

#### Scope

- API
- Server
- Data Flows 1 and 2

#### Out of Scope

- Provision of code
- Provision of server/hardware
(Be explicit about what you are excluding ie server hardware and software)

### Model A

<img src="https://user-images.githubusercontent.com/39884432/41207604-037b4f1c-6d19-11e8-8d28-ddd1d8c0d2fa.JPG" width="100%"/>

**S**

1. The wrong server responds

**T**  

Client receives tampered data

2. Compromised Server

3. Man in Middle

4. Server receives tampered data

**R**	

5. Client repudiates request

6. Server repudiates sent

**I**

Server Logs

7. Confidential data is disclosed through the connection

8. Information is disclosed through error messages

**D**	

DoS through:

9. API overload

10. Network overload

11. Budget overload

FINDOS


**E**

12. Unauthorised access to API

13. Code Execution


### Model B

<img src="https://user-images.githubusercontent.com/39884432/41207605-04f6e432-6d19-11e8-8f0b-ff407c86c17d.JPG" width="100%"/>

- No state change
- Public Data
- No Authorisation


## References

- **Session page :** [API Threat Modeling Cheat Sheet](https://open-security-summit.org/tracks/threat-model/working-sessions/tm-api-cheatsheet/)

- **Summit 2017 session page :** [2017 Threat Model Sessions](https://owaspsummit.org/Working-Sessions/Threat-Model/index.html)

- **Summit 2017 outcome page :** [Outcomes OWASP Projects: Cheat Sheets](https://owaspsummit.org/Outcomes/Owasp-Projects/Cheatsheets.html)


### Additional/External References

- [Threat Modeling: Designing for Security](https://threatmodelingbook.com/)
- [OWASP Cheat Sheet Series](https://www.owasp.org/index.php/OWASP_Cheat_Sheet_Series)
- [An open source tool related to this session: API Test](https://github.com/BBVA/apitest)



