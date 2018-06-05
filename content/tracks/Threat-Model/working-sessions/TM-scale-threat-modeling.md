---
title        : How to scale Threat Modeling.
type         : working-session
track        : Threat Model
technology   :
categories   :                      # GDPR, Juice Shop, etc.
featured     :                    # review with summit team "yes"
when_day     : Thu
when_time    : PM-2
room_layout  :                    #
room_id      : room-1
session_slack: https://os-summit.slack.com/messages/CAUMZ7NQY
status       : review-content             # draft, review-content, done
organizers   :
    - Steven Wierckx
participants :
    - Manish Saindane
    - Adam Shostack
    - Orid Ahmed
description  : How to scale Threat Modeling
locked       : true
---

## Why

Manual threat modeling is typically a  workshop exercise done with a  whiteboard and is led by a member of the security team and some key members  of the developer (and sometimes  operations) team.

Organizations face three main challenges integrating Threat Modeling activities in the SDLC:
 - The ratio of developers to security is 100:1. Security can be a bottleneck.
 - Continuous delivery is part of the Agile recipe. Security can be a bottleneck for each sprint.
 - Microservice architecture has grown in popularity in recent years. The number of potential Apps that require Threat Modeling activities grows exponentially. Security can be a bottleneck for much more applications.


## What
We need a model to get the most of the resources available in terms of risk mitigation. Some of the most popular initiatives to tackle this challenges are:
 - Create Security Champion programs that help to spread the security mindset to developers and architects.
 - Create a Self-Service Threat Model so that developers can create an architecture-based Threat Model to get a set of security requirements before a single line of code was written.
 - Automation of Security Activities. Depending of the result of this initial threat model more security activities can be automatically triggered. For example: create a more detailed Threat Model if the business risk is high, set an appropriate pipeline for security testing activities (SAST, SAST+DAST, SAST+DAST+Pentesting...).

Open discussion: What other initiatives are you using in your companies to tackle this challenges? How could we scale the Threat Modeling activity? How could we do the follow up of thousands of Threat Models with a reduced team?


## Outcomes

This Working Session will publish a document (white paper) gathering the conclussions.
