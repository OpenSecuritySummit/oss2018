---
title        : Azure Security Features, Just a Few
type         : outcome
track        :
video        :                    #url i.e. youtube, vimeo, etc
slides       :                    #url i.e. slideshare
images       :
session_type : product-session    # working-session, user-session, product-sesssion
technology   :
categories   :                    # GDPR, Juice Shop, etc.
status       : review-content             # draft, review-content, done
description  :
---


## Outcomes

People came and learned about the security features of Azure and other features.

An informal session for knowledge sharing and learning the newer security features of Azure, including: Access Control (AIM), Just in Time (JIT) access control, Security Center Recommendations, Virtual Machine Security Recommendations, and Key Vault.

People now know more and got to try Azure.  They now know about security centre, and we all agreed that now we are in a DevOps world and we now have to worry about not only AppSec but also OpSec.

Specific features and aspects demonstrated/discussed in the session:

- Giving access to virtual machine (VM) to another user and assign user role of contributor, owner, reader, etc. Possibility of customizing roles too.
- ‘Just in time access’, which is new functionality, allowing access to be granted only upon a specific need. For example, for a pen tester.
- The security tab for a given VM will show recommendations and security alerts, together with a description of any issue(s). Security Center runs a scan for this automatically.
- The system recommends ports for access. You can accept or refuse recommendations, define ports, time duration of access, protocol, specific IP source address (and more).
- Remember to enable the Microsoft Monitoring Agent per VM (or set to auto-provision) to get the most out of the recommendations.
- The security center allows you to see everything in data center and for the whole team. It offers recommendations, security solutions, new alerts/incidents, last week's alerts/incidents, and more.
- Web application firewalls (WAFs) can be linked into the Security Center. This is a manual process for non-Microsoft WAF solutions.
- Security Center offers a marketplace for buying access to/service from additional security solutions. ZAP (Zed Attack Proxy) is one such solution. Snyk Task is another.
- Users may need to turn on a monitoring agent or take other manual action for a viable/useful security setup.
- Security Center offers Key Vault to securely hold keys, secrets, certificates, and other confidential data.
- Dashboards give general and at-a-glance information, including vulnerability statements.
- Resource creation in the Security Center also allows push-button creation of a DevOps project.
- Security Center subscription is/starts from $15, which is affordable to many.
- People do not always realize that Security Center is available in Azure. They might benefit from knowing this.

## Next Steps

1. Tanya (the organizer) to learn more about the features and make a much better demo.  She will add all new things to Patty the pipeline in DevSlop.
2. Write Microsoft Docs about each step, or if one exists send feedback.

## References
- **Session page :** •	https://open-security-summit.org/product-sessions/azure-security-features/
