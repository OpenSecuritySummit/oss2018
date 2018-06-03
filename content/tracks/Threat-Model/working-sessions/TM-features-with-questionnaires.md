---
title        : How to Threat Model Features with Questionnaires
type         : working-session
track        : Threat Model
technology   :
categories   :                      # GDPR, Juice Shop, etc.
featured     :                    # review with summit team "yes"
when_day     : Wed
when_time    : PM-2
room_layout  :                    #
room_id      : room-1
session_slack: https://os-summit.slack.com/messages/CAVD0EMUJ
status       : review-content             # draft, review-content, done
organizers   :
    - Steven Wierckx
participants :
    - Stephen de Vries, Paul Santapau
description  : How to Threat Model Features with Questionnaires
locked       : true
---

## Why

Threat Modeling architectural changes through STRIDE is well established.  But many agile teams need to threat model code changes to an existing application, which typically does not involve large architectural changes.  STRIDE can be used for this too - but if we narrow the scope to only web apps and APIs, can we find a more specific version of STRIDE that's easier for non-experts to use?

## What

STRIDE is already essentially a questionnaire, e.g. "Can an attacker spoof their identity to impersonate a different user?"
With the scope of this questionnaire narrowed to only web apps and APIs, can we ask more specific questions that are easier to answer?

Can we provide more specific advise on the countermeasures to implement?

## Outcomes

An article that describes the:
- Questions to ask
- Associated threats and recommended countermeasures
