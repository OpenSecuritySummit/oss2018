---
title        : Creating a Steady-State Hypothesis
type         : working-session
track        : Chaos Engineering
technology   :
categories   :                      # GDPR, Juice Shop, etc.
featured     : yes                   # review with summit team "yes"
when_day     : Mon
when_time    : AM-1
locked       : true
room_layout  :                    #
room_number  :
status       : review-content             # draft, review-content, done
organizers   :
description  : Exploring the Chaos Toolkit's stead-state hypothesis and how one can be designed and constructed for DevSecOps concerns.
organizers   :
    - Russ Miles
participants:

---

The Chaos Toolkit provides a Universal API for Chaos Engineering experiments that is then used to drive various implementations of chaos-causing and system-state-probing functions.

This session will focus on how the Chaos Toolkit's Open and Universal API for chaos experiments can be practically designed and implemented for DevSecOps concerns.

## WHY

The chaos engineering steady-state hypothesis is a specification of what "normal" in a system should look like. Within a set of toleraqnces, the system is observed to detect if it is in what can be considered a recognisable "normal" state, and therefore ready for a chaos experiment ot be run.

The stead-state hypothesis is then also used after an experiment's method is concluded to detect what deviations, if any, have occured that might indicate an underlying weakness being discovered in the system.

Defining a great steady-state hypothesis can be a challenge and so this session, through a number of real-world examples, will take attendees through the process of creating one from scratch.

## What

This session will, through real-world practical examples, take attendees through the design and implementation of their own steady-state hypothesis for their own DevSecOps chaos engineering experiments.

## Outcomes

The attendees will have a detailed grasp of the working process to develop their own stead-state hypothesis for their own DevSecOps chaos experiments, and how to implement those hypothesis using the Chaos Toolkit's Open and Universal API for chaos experiments.

## References

The Chaos Toolkit: http://chaostoolkit.org/
The Chaos Toolkit Universal Open API for Chaos Engineering: http://chaostoolkit.org/reference/api/experiment/
