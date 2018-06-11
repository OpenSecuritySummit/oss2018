---
title        : Creating Appsec metrics and visualisation
type         : outcome
track        :
video        :                    #url i.e. youtube, vimeo, etc
slides       :                    #url i.e. slideshare
images       :
session_type : user-session    # working-session, user-session, product-sesssion
technology   :
categories   :                    # GDPR, Juice Shop, etc.
status       : review-content              # draft, review-content, done
description  :
---



### Logging as the Basis of SOC (Security Operations Centre) Monitoring

- A log (file) is a collection of records or events
- Logs are a critical part of any system giving you an insight into the working of a system

### What Challenges are Associated with Logging?

- Historically, logs have been (often indecipherable) lines of text intended for offline human analysis of what went wrong
- Logs can be large and correlation can be painful
- Managing logs and accessing them can get complicated with multiple hosts
- Searching for an error across hundreds of log files on hundreds of servers is difficult without good tools

A common approach to this problem is to setup a centralised logging solution so that multiple logs can be aggregated in a central location

### How is Centralized Logging different from Traditional Logging?

- Logs are collected at a central server
- Parsing becomes simpler since data is accessible at a single location
- A common issue across multiple hosts/services can be identified by correlating specific time frames

### What is the ELK stack?

- Elasticsearch, Logstash and Kibana (E, L, and K) + Beats
- Different open source modules working together
- Helps users/admins to collect, analyse and visualize data in (near) real-time
- Each module fits based on your use case and environment

### What is Elasticsearch?

- Distributed and highly available search engine, written in Java and uses Groovy (painless scripting)
- Scale can come from bigger servers (vertical scale, or scaling up) or from more servers (horizontal scale, or scaling out)
- Built on top of Lucene
- Multi-tenant with Multi types and a set of APIs
- Document-oriented providing (near) real time search

### What is Logstash?

- Tool for managing events and logs written in Ruby
- Centralized data processing of all types of logs

#### What are the 3 Main Components of Logstash?

- Input: Passing logs to process them into machine understandable format
- Filter: Set of conditions to perform specific action on an event
- Output: Decision maker for processed events/logs

### What is Kibana?

- Powerful front-end dashboard written in JavaScript
- Browser based analytics and search dashboard for Elasticsearch
- Flexible analytics & visualisation platform
- Provides data in the form of charts, graphs, counts, maps, etc. in real-time

### What is Beats?

- Lightweight shippers for Elasticsearch & Logstash
- Capture all sorts of operational data like logs or network packet data
- Can send logs to either Elasticsearch or Logstash

### How do ELK and Beats Work Together?

- Beats = collect, parse, and ship
- Logstash = enrich and transport
- Elasticsearch = search and analyse
- Kibana = explore and visualize

## References
- **Session page :** •	https://open-security-summit.org/tracks/devsecops/working-sessions/appsec-soc-monitoring-visualisation/

### Additional/External References
- https://appsecco.com/books/elk-workshop/
