---
title        : Docker and Kubernetes Threat Modeling Cheat Sheet
type         : outcome
track        : Threat Model
video        :                    #url i.e. youtube, vimeo, etc
slides       :                    #url i.e. slideshare
images       :
session_type : uworking-session
technology   :
categories   : Threat Model                   
status       : done            # draft, review-content, done
description  : Creating a cheat sheet for the main threats against Docker and Kubernetes
---


## Outcomes

A Cheat Sheet covering the most common threats against Docker and Kubernetes.

## Synopsis and Takeaways 

This working session aimed to answer the following questions:

- Can we identify the main or generic threats?
- Can we organize the threats in Risk Patterns 
- Can they be summarized on a Cheat Sheet?

Example: As a tester I want to run a baseline scan of a website in order to sanity check.

### Threats

Threats were listed and grouped according to the four questions:

- What are we building?
- What can go wrong?
- What are we going to do about that?
- Did we do a good enough job?

#### Question 1: What are we building?

- Insufficient Authentication Protection
    - Password Policy
    - Brute Force protection
    - Username enumeration
- Information  Disclosure
    - Usernames
- Insider Threat
- Tamperproof Dockerfile
- Sensitive data in Docker file or image

#### Question 2:  What can go wrong?

- Sensitive Data
- Dangerous commands on boot

#### Question 3: What are we going to do about that? 

- Documentation Group
- Run = Access
- Docker inspection used
- Exposing daemon socket
- Segregation of duties not forced
- User can mass download
- “Latest” user awareness
- Escalation of privilege to a deeper level

## Working Materials 

<img src="https://user-images.githubusercontent.com/39884432/41210861-4f283e32-6d34-11e8-83f8-2b7fd17cca2b.jpg" width="100%"/>
<img src="https://user-images.githubusercontent.com/39884432/41210862-4f62b5b2-6d34-11e8-9e2c-086c05d14602.jpg" width="100%"/>
                                                                                                               
## References
- **Session page :**[TM Docker / Kubernetes](https://open-security-summit.org/tracks/threat-model/working-sessions/tm-docker-kubernetes/) 
- **Summit 2017 session page :** [Docker Security](https://owaspsummit.org/Working-Sessions/DevSecOps/Docker-Security.html)
- **Summit 2017 outcome page :** [Docker Security Outcomes](https://owaspsummit.org/Outcomes/DevSecOps/Docker-Security.html)

### External References
- [CIS Docker Benchmarks](https://www.cisecurity.org/benchmark/docker/)
- [Securing Kubernetes](https://www.cisecurity.org/benchmark/kubernetes/)

