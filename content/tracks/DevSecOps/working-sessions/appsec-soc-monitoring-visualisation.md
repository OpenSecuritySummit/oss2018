---
title        : AppSec SOC Monitoring Visualisation
type         : working-session
track        : DevSecOps
topics       : ["Visualisation"]
technology   :
categories   :                      # GDPR, Juice Shop, etc.
featured     :                    # review with summit team "yes"
when_day     : Wed
when_time    : PM-2, PM-3
room_layout  :                    #
room_number  :
status       : review-content             # draft, review-content, done
organizers   :
participants : Francois Raynaud, Sophie Tonnoir
description  : AppSec SOC Monitoring Visualisation
---

## Why

Capturing logs and visualising them in a SOC (Security Operation Center) is a key activity in the asymmetric arms race against malicious actors and bugs.

In addition to providing high-value actionable information, a good SOC will provide a wealth of valuable metrics and visualisations for the business, from user activities and behaviour to system performance.

The Working Session will assess the role, the work, and the importance of a SOC within a business.

## What

 - What are the key technical and operational components of SOCs?
 - Map examples of SOC implementations (people, processes and technologies)
 - What are the best practices for capturing logs and feeding them into central locations?
 - What is the business case for a larger SOC which is sponsored by another business unit (i.e. not just Security)?
 - What are the best practices for using tools like ELK or Splunk?
 - How to secure SOCs data and infrastructure
 - How to visualise the data collected in actionable/meaningful graphs
 - How to use Machine Learning and AI to improve data capture and analysis
 - How to use Business Intelligence Techniques and Big Data tools to improve analysis and visualisations
 - Using AppSensor to feed data into SOC and to respond to analysis results
 - Exploring specific security incidents:
    - Malware infection
    - Web Injection attack
    - Account Brute Force attacks
    - Login/activities from non-common locations
    - Business logic exploitation
    - Data extraction
 - How does SOC help with GDPR requirements
 - What to look for - tricks, tips and ideas

## Outcomes

This Working Session will publish a document containing the following:

- List of best practices for capturing logs and feeding them into central locations
- List of best practices for using tools like ELK or Splunk
- Guidelines for visualising SOC data collected in actionable/meaningful graphs
- Tricks, tips and ideas

### Synopsis and Takeaways

List of best practices for capturing logs and feeding them into central locations

**What do we put on a list of best practices? (discussion)**

- Good RegEx tutorials
- Plug-ins pages links for parservs
- Syslog integration procedure
- Read the meta data, process for understanding
- Feed MISP with threat intelligence information

**Best Practice list**

- Check time synchronisation of NTP servers
- Evaluate which alerts can be converted into automatic or manual actions
- Send your CI / CD information to the SOC

**Guidelines for visualising SOC data collected in actionable/meaningful graphs**

- Correlation of events
- Out of bounds activities
- Main DC KPPI
- Availability monitoring
- False positive feedback and deeper understanding
- From Dev perspective, false positives cause delays, visualising them makes them easier to filter
- Modify test/ alerts for improvement
- Provide feedback for not-fixed alerts
- Add some risk management accept, mitigate, or transfer
- Generate and maintain a baseline
- Detect anomalies

## Who

The target audience for this Working Session is:

 - SOC and Network Operations teams
 - InfoSec and AppSec professionals
 - Business analysts
 - CISOs

## Previous Summit Working Session

https://owaspsummit.org/Working-Sessions/DevSecOps/AppSec-SoC-Monitoring-Visualisation.html
