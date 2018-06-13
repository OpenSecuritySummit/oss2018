---
title         : Automation of MASVS with BDD
type          : outcome
track         : Misc
video         :                    #url i.e. youtube, vimeo, etc
slides        :                    #url i.e. slideshare
images        :
session_type  : user-session    # working-session, user-session, product-sesssion
technology    :
featured      : yes
categories    :                    # GDPR, Juice Shop, etc.
status        : review-content              # draft, review-content, done
description   :
---


* The session has been focused on creating BDD tests to automated the OWASP MSTG test cases, in order to integrate those tests in the CI/CD pipeline*

## Outcomes/Deliverables

The main outcome of the working sessions is a set of BDD tests for Android and iOS, using the MSTG playground and iOS iGoat as target apps. The repo with the developed tests cabn be found here.

[Automation of MASVS with BDD](https://github.com/ing-bank/bdd-mobile-security-automation-framework/)

## Synopsis and Takeaways (recommend)

We want to create a complete set of BDD tests, that will automate the OWASP MASVS. At the moment the BDD tests have been created using Calaba.sh as a third party framework, but the goal is to provide multiple solutions using also native frameworks

## Identified Questions

* Do we need an external framework (Appium, TestNG, Espresso), or is it better to create native tests?
* Which third party tools do we need to expand the test cases (Frida ,Drozer etc)?

## Important Conclusions
* Develop new BDD tests following the MSTG is the way to go
* Next activities:
  * Explore native solutions (iOS and Android) to write BDD tests
  * Expand the current tests

## Working Materials (recommend)

* [Automation of MASVS with BDD (GitHub)](https://github.com/ing-bank/bdd-mobile-security-automation-framework/)

## References (recommend)
- Session page :[Automating MASVS with BDD](https://open-security-summit.org/tracks/owasp-projects/working-sessions/automating-masvs/)


### Additional/External References
* A complete guide on how to setup the working environment and the Docker image can be found [here] (https://github.com/david3107/oss2018-tools)
* [BDD Mobile security testing with OWASP MASVS, OWASP MSTG and Calabash](https://www.owasp.org/images/f/fb/V2_-_OWASP_Buscharest_Davide_Cioccia.pdf)
* [BDD Security](https://www.continuumsecurity.net/bdd-security)
* [BDD Security Github](https://github.com/continuumsecurity/bdd-security)
* [Calabash](http://calaba.sh/)
