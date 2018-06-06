---
title        : Define an Open Risk Pattern format
type         : working-session
track        : Threat Model
technology   :
categories   :
featured     : # review with summit team "yes"
when_day     : Tues
when_time    : AM-1
room_layout  :                    #
room_id      : room-1
session_slack: 
status       : draft             # draft, review-content, done
organizers   :
    - Stephen de Vries
participants :
    - Paul Santapau, Jorge Esperon
description  : Define a structure for defining re-usable risk patterns
locked       : true
---

## Why

Threat Models can be assempled by using pre-written templates.  But entire templates can be too large as a building block for a threat model.  A smaller unit is called a Risk Pattern: a mini-template tied to a particular technology and/or use-case.  Examples of risk patterns:
- Transmitting sensitive data over untrusted networks
- Single factor authentication against a web app
- File upload to a web app

OWASP would be a great repository for a shared collection of risk patterns, so the first step is to define a format for these patterns.

## What

In its most basic form a risk pattern can contain:
- A description of the scenario for when the pattern applies
- threat(s)
    - recommended countermeasure(s)

In order for risk patterns to be useful as a means for collaborating on describing parts of a threat model, they should:
1. Be easily editable by humans
2. Support versioning and comparability, so that proposed changes to a pattern can be reviewed/approved/rejected
3. Optionally, be parseable by tools to support automation

## Outcomes

- A name for this format
- The defined format itself
- An example
