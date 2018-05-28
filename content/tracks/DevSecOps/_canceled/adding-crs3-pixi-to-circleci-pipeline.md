---
#title        : Adding CRS3 and Pixi to CircleCI pipeline
#type         : user-session
#track        : DecSecOps
#when_day     : Wed
#when_time    : PM-3
#status       : draft
#organizers   : Franziska Buehler
#participants : Tanya Janca
#description  : Adding OWASP ModSecurity Core Rule Set 3 and Pixi to CircleCI pipeline
---

## Topic

A Web Application Firewall may cause fear it does not fit into DevOps methodology, because a WAF can also block an application‘s legitimate traffic. <br />
In this user-session we will see a Continuous Integration pipeline with automated applications tests. The tests are performed against the application Pixi (OWASP DevSlop) with the WAF ModSecurity with the OWASP ModSecurity Core Rule Set 3 in front of the application.

A WAF is an additinal layer of defense against common web application attacks like those described by OWASP Top Ten! <br />
We don‘t want to miss a WAF only because we fear it!

## Target Audience

 - DevOps
 - DevSecOps
 - Web Application Firewall
 - ModSecurity and OWASP ModSecurity Core Rule Set

## Content

We will put the WAF ModSecurity with the OWASP ModSecurity Core Rule Set 3 in front of Pixi in CircleCI. We let application tests automatically test the application with a WAF at every commit of a code change.

 - What is a WAF, what does a WAF do?
 - What is ModSecurity and the OWASP ModSecurity Core Rule Set 3?
 - CRS 3 Installation
 - CRS 3 in Docker Container (Apache Reverse Proxy, CRS variables)
 - Quick Intro into CircleCI (Integration in GitHub)
 - Quick Intro into Testcafe application tests of Pixi
 - ModSecDevOps (WAF in pipeline)
 - Show CircleCI PoC configuration
 - Show CircleCI CRS3 Pixi Demo
 - Show ModSecurity Tuning in CircleCI configuration

## Outcomes

More security by adding the OWASP ModSecurity Core Rule Set in front of Pixi! <br />
The CircleCI configuration and the Core Rule Set Docker Container can be taken as a free proof of concept. 

## References

 - http://devslop.co/
 - https://www.owasp.org/index.php/OWASP_DevSlop_Project
 - https://www.owasp.org/index.php/Category:OWASP_ModSecurity_Core_Rule_Set_Project
 - https://github.com/DevSlop/pixi-crs
 - https://coreruleset.org/
 - https://hub.docker.com/r/franbuehler/modsecurity-crs-rp/
 - https://modsecurity.org/
