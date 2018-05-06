---
title        : Automation of MASVS with BDD
type         : working-session
technology   :
categories   :                      # GDPR, Juice Shop, etc.
featured     : yes                   # review with summit team "yes"
when_day     :                    # default = tba,    Tues
when_time    :                    # default = tba,    19:30
room_layout  :                    #
room_number  :
status       : done              # draft, review-content, done
organizers   : ["Sven Schleier"]
description  : Mobile Security Working Session
---

The version 1.0 release of the Mobile Application Security Verification Standard (MASVS) was [published earlier this year](https://github.com/OWASP/owasp-masvs/releases). The project is getting positive feedback from all over the world and is becoming an accepted industry best practice for mobile apps. The MASVS establishes baseline security requirements for mobile apps that are useful in many scenarios, including:

- In the SDLC - to establish security requirements to be followed by solution architects and developers;
- In mobile app penetration tests - to ensure completeness and consistency in mobile app penetration tests;
- In procurement - as a measuring stick for mobile app security, e.g. in form of questionnaire for vendors;
- Et cetera.

The MASVS is a sister project of the [OWASP Mobile Security Testing Guide](https://github.com/OWASP/owasp-mstg).

## Why

Last year we were focusing on creating the security requirements for the mobile world, this year we want to automate them :-)

One of the major problems of adopting the MASVS is how to test all the security requirements during development. This is of course a problem that is applicable for every piece of software that is developed. For web applications one of the solutions to address this is using Behavior-driven Development (BDD) with Cucumber and Gherkin through BDD Security. At the moment there are no mobile app test cases available for this that 

A consistent and structured approach need to be used to continously test the requirements of a mobile app while it's being developed.


## What

Automated testing of the MASVS requriements, based on the [research of Davide Cioccia](https://www.owasp.org/images/f/fb/V2_-_OWASP_Buscharest_Davide_Cioccia.pdf) through combination of:
- BDD with Cucumber and Gherkin and
- [Calaba.sh](http://calaba.sh/)


## Outcomes

We want to use the Open Security Summit in order to extend the existing test cases for iOS and Android and transform the MASVS requirements into Gherkin Syntax wherever possible and applicable.

The existing technical approach and test cases will be shared before the Open Security Summit via Github and will be used as basis for other test cases.


## Who

The target audience for this Working Session is:

- Developers
- Security Testers
- DevSecOps Engineers

Everyone else with experienes in automation and development background and some technical know-how :-)

## References

- [BDD Mobile security testing with OWASP MASVS, OWASP MSTG and Calabash](https://www.owasp.org/images/f/fb/V2_-_OWASP_Buscharest_Davide_Cioccia.pdf)
- [BDD Security](https://www.continuumsecurity.net/bdd-security)
- [BDD Security Github](https://github.com/continuumsecurity/bdd-security)
- [Calabash](http://calaba.sh/)
