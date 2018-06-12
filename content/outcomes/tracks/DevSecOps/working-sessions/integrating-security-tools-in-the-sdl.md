---
title        : Integrating Security Tools in the SDL
type         : outcome
session_type : working-session    # working-session, user-session, product-sesssion
technology   :
categories   :                    # GDPR, Juice Shop, etc.
status       : done     # draft, review-content, done
description  :
---


## Outcomes/Deliverables
The stated outcomes were given as:

- To identify common areas where security and development can work together to make improvements.
- To document identified areas such as culture, automation, measurement, and sharing in OWASP wiki page.

## Synopsis and Takeaways

### Why Integrate Security Tools in SDL?
Most of today´s application security problems can be traced to flaws in the code. It does not matter whether security issues affect operating system components, client applications, web applications, or other systems; most well-known vulnerabilities are caused by coding errors and implementation issues.

The best way to make security ‘just happen’ is to integrate it within the normal SDL (Software Development Lifecycle) practices. Security teams can focus on confidentiality and the integrity of data both of which require development teams to slow down and assess code differently. Similarly, businesses want developers to write and revise code faster than ever, which often results in developers focusing on what works best instead of on what is secure.

Recapping what is needed (the core values of DevSecOps):

- **Culture**: DevOps is about breaking down barriers between teams; without culture other practices fail
- **Measurement**: Measuring activities in CI/CD helps in informed decision making among teams
- **Automation**: Often mistaken as DevOps itself but a very important aspect of the initiative. 
- **Sharing**: Sharing tools, best practices, etc., among teams/organizations improves confidence for collaboration.


### Takeaways for Integrating Security into SDL:
 
- Have open communication.
- Consider the differences in culture between teams. For instance, the jargon used by DevSecOps is not familiar to developers.
- Show appreciation with small things such as security t-shirts and badges can help with motivation and measurement.
- Properly demonstrate the value to management to get true buy-in.
- Use CI/CD pipeline to embed security. Each of the DevOps steps (Plan, Code, Build, Test, Release, Deplay, Operate) should have security activities built in. 
- When choosing a paid tool, make sure that there is an available API, so that you can integrate properly. This one of the most important criteria when purchasing a tool! At the very least there should be a CLI. If they have neither, drop that tool.
- Give developers and operations visibility into security activities.
- Present motivations at an abstract, high level is not as successful as showing real tools, already setup, that technicians can see and properly grasp.
- Liaise with developers and work with them step by step.
- Developers should train on Threat Modeling.
- Express compliance as code where possible; this helps with testing and developer familiarity and understanding.
- Use secure by default frameworks and services. Security should have some leverage when selecting tools, frameworks, and services.

### DevSecOps Maturity Model (DSOMM)
The DevSecOps Maturity Model was described along the following axes:

- **Static Depth:** How deep is static code analysis?
- **Dynamic Depth:** How deep are dynamic scans executed?
- **Consolidation:** How complete is the process of handling findings?
- **Intensity:** How intense are the majority of the executed attacks?

#### DSOMM Level 1:

- **Static Depth:** Run SAST, component analysis and secrets scanning as it is.
- **Dynamic Depth:** Run DAST tools as it is with default settings.

#### DSOMM Level 2:

- **Static Depth:** Run SAST, component analysis and secrets scanning with minor tweaks to the rulesets 
- **Dynamic Depth:** Run DAST tools with minor tweaks to tools.


### OWASP DevSecOps Studio:
DevSecOps Studio project aims to reduce the time to bootstrap the environment and help you in concentrating on learning/teaching DevSecOps practices. 

#### The Benefits of DevSecOps Studio 

- Easy to setup environment - it takes only a few minutes to setup and start with just one command (“vagrant up”)
- Free & Open Source Software - this project is free and open software to help more people learn about DevSecOps
- Reproducible - the aim of this project is to setup a reproducible DevSecOps Lab environment for learning and testing different tools

### The Demonstration
The DevSecOps Studio was used as a lab environment to show participants how to go from DSOMM level 0 to DSOMM level 1. 

### Working Materials

- [The Security Development Lifecycle](https://www.owasp.org/images/7/78/OWASP_AppSec_Research_2010_Keynote_2_by_Lipner.pdf)
- [SDL in Practice](https://www.owasp.org/images/4/45/SDL_in_practice.pdf)


## References

- [Session page](https://open-security-summit.org/tracks/devsecops/working-sessions/integrating-security-tools-in-the-sdl/)

### Additional/External References

* [Secure programming with Static Analysis book](https://www.e-reading.club/bookreader.php/142130/Secure_programming_with_Static_Analysis.pdf)
* [Continuous Delivery - by Jez Humble, Daveid Farley](http://www.synchronit.com/downloads/Continuous%20Delivery%20-%20Reliable%20Software%20Releases%20Through%20Build,%20Test%20And%20Deployment%20Automation.pdf)
* [Chess Static Analysis book](https://www.e-reading.club/bookreader.php/142130/Secure_programming_with_Static_Analysis.pdf)
* [Netflix culture slideset](https://www.slideshare.net/BarbaraGill3/netflix-culture-deck)
* [Postmodern Security](https://postmodernsecurity.com/)
