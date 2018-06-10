---
title        : Owasp Cloud Security Workshop (BETA)
type         : outcome
track        :
video        :                    #url i.e. youtube, vimeo, etc
slides       : https://www.slideshare.net/opensecsummit/owasp-cloud-security-workshop                   #url i.e. slideshare
images       :
session_type : working-session    # working-session, user-session, product-sesssion
technology   :
categories   : OWASP
status       : review-content              # draft, review-content, done
description  :
---

## Outcomes

Through this workshop, the OWASP Cloud Security Project hopes to:

- Contribute back to the community by sharing knowledge and experience
- Help grow the project community by raising awareness
- Increase the number of contributed threat and control stories

Participants were made aware of the purposes and advantages of BDD, the makeup of good BDD stories, and the basics of threat modeling.
Scheduled individual and group activities included creation of BDD stories and threat models.

These discussions and activities gave participants:

- An understanding of the purpose and advantages of BDD
- An understand of what makes a good story
- Experience writing BDD stories, particularly for security
- An understanding of the purpose and advantages of threat modeling
- An understanding of the basics of threat modeling
- Experience threat modeling a cloud environment
- An opportunity to contribute threat and control stories to the OWASP Cloud Security project

---------
## Synopsis and Takeaways

### Behaviour Driven Development
The history of the preceding concepts including unit tests, test-driven development and user stories were outlined before BDD was introduced

- BDD Extends user stories with scenarios and steps: The “Feature”
- It puts people and desired behaviour at the heart
- Features are (more or less) technology agnostic
- As much about communication as it is testing

#### Behavioral specifications / BDD Stories:

BDD specifies that business analysts and developers should collaborate in this area and should specify behavior in terms of user stories, which are each explicitly written down in a dedicated document. Each user story should, in some way, follow the following structure:

- The Feature: The user story. A free-text description of the feature. Generally covers who, what and why, but not necessarily in that order. More than one story is possible.
- The Scenario: A free-text description of the test case. A feature can have one or more scenarios.
- Scenarios are made up of Given, When, Then statements (also And, But). Each statement is a step that is executed by the BDD framework.
- A BDD language called Gherkin was used in the examples covered in this workshop.

The following points were made toward the writing of good stories:

- Don’t worry about perfections - just write something
- Pretend somebody is standing in front of you and you are casually explaining the subject to them (ELI5)
- Remember, it’s about communicating an idea - capture the essence of the story to be told
- Make sure your “In order to” contains the why and not the how

#### Hands-on: Group story writing
The group was given three examples to choose from as an activity:

- Making a phone call on a mobile phone
- Going to the gym
- Connecting to a 3rd party API to validate some data

------

### Threat Modeling
Threat modeling was described as the process of understanding and communicating threats and mitigations in the context of something of value, typically applications or services

#### Why threat model?

- Addresses security at a fundamental, architectural level.
- Design flaws that turn into vulnerabilities are hard to pick up in code scans.
- Help guide and prioritise other controls and make the best use of them. Less reliance on band-aid solutions.
- Find problems sooner, fix them sooner, cheaper.
- Brings development teams closer to security.

#### An Overview of Threat Modeling Methodologies:

- There is no one right way to threat model.
- Modeling serves the purpose of simplifying complex things to aid understanding.
- Models are never perfect - all models are wrong, some are useful.
- Be lean - start simple, try something, learn, tweak, experiment and repeat.

There are many different approaches and methodologies for identifying threats. **STRIDE** was identified as a good starting point.

#### Overview of STRIDE:
What does STRIDE stand for?

- **Spoofing** - impersonating an entity or service. (User authentication; 3rd party API; 3rd party response)
- **Tampering** - making unauthorised changes (3rd party data; client-side code; unencrypted user connection)
- **Repudiation** - “wasn’t me” (Web app logs; 3rd party logs)
- **Information disclosure** - getting unauthorised access to information (Unencrypted user connection; 3rd party data storage)
- **Denial of service** - preventing legitimate access (Web app; 3rd party rate limits;)
- **Elevation of privilege** - being able to do things as someone or something else (Code execution in web app; command injection in 3rd party data)


### What are you going to do about it?
Once you have your threat model, you can respond to identified threats as follows:

- **Eliminate** - there’s no threat if the component or feature is removed
- **Mitigate** - add preventative, detective or other controls
- **Transfer** - make the risk someone else’s problem (e.g. through legal contract, or physical security for Cloud services)
- **Accept** - don’t do anything about the threat and hope for the best (the default even if you don’t threat model)

Once your threat model is done, you should track your threats and mitigations. Don’t threat model for the sake of threat modeling. Instead, use threat modeling to identify threats, then **fix** them.

- Use whatever tools you have available or experiment with new tools
- Threat models are living documents and should evolve over time as the applications and features evolve
- Do you need more time, different people in threat modeling sessions?


#### Example: Agile threat modeling

1. Start threat modeling with a one-off session that has broad scope and then don't go too deep.
2. Use a tool like STRIDE to identify threats and document them so they can be shared.
3. Identify mitigations and add them to the product backlog.
4. Prioritise and work on the mitigations as you would any other story, ideally having them as linked acceptance criteria for other feature stories.
5. Allow a bit of time at the end of the first session to do a brief retro, identify next steps such as a follow up session.
6. If needed run a separate deep-dive session for complex or security-critical areas.
7. Once you've got the hang of threat modeling, look at embedding it into the existing development ceremonies. For example, if you're already running architecture/design planning sessions at the beginning of a release, include extra time to threat model the new feature or other changes.
8. You might also want to include micro sessions in a more regular basis, e.g. during sprint planning or ad-hoc after a stand up. 10 minutes might be enough to identify a critical threat early on.
9. The product owner should only accept feature stories if all the related threat mitigation stories are also complete.
10. Find a time to review the approach to threat modeling and methodology, scope coverage, types of threats identified, outstanding mitigations etc. Also think about whether the environment has changed.
11. In parallel to the above, ensure that the threat models, threats and mitigations are visible to the security SMEs so that they can review to identify areas that might need further focus, and to offer their expertise when needed.
12. Be lean in your approach - start simple; measure success, e.g. through pentest results; if something isn’t working, experiment; teach and share with the community.

#### Hands-on: Group threat model
The following 3 examples were given for participants to choose from and model as an activity:

- Simple 3-tier website
- Mobile phone privacy
- Using an online password manager

-----

### Why use BDD for security?

- Security is just a branch of Quality Assurance (QA), applied to adversaries instead of systematic and random failures.
- Can we use some of the same tools from testing and QA and apply them to security?
- If you can use BDD to specify and test a feature, why not use BDD to specify and test a security feature.
- Security concepts and threats need to be shared and communicated - ideal use case for BDD
- Developers writing security tests scales

Like user-stories and BDD, threat modeling is all about having a conversation, shared understanding, and action

BDD security examples where discussed from the perspective of writing a threat story from the attackers' perspective. In such a threat story, one would explain why the attacker would carry out the attack, and provide one or more scenarios that describe ways the attack can occur.

#### The following was given as a BDD-Security threat story:

**Title**: Phishing

**Feature**: Phishing corporate users. In order to bypass the security perimeter, As an attacker, I want users to visit a malicious URL sent via email

**Scenario**: Targeted phishing

- **Given** background information on the target
- **And** a convincing email template using background information
- **And** a convincing website URL that executes a malicious payload
- **And** the email is sent to the target email recipients
- **When** the user reads the email
- **And** the user clicks on the link
- **Then** the payload should execute
- **And** we should get code execution on the user’s machine

-----------


### What about Cloud?
So far DevSecOps has been mostly focused on testing application code (SAST, DAST etc.) and behaviour, particularly in CI/CD pipelines. But how does DevSecOps relate to a Cloud world where everything in code?


#### About the OWASP Cloud Security project
The OWASP Cloud Security project aims to help people secure their products and services running in the cloud by providing a set of easy to use threat and control Behaviour Driven Development (BDD) stories that pool together the expertise and experience of the development, operations, and security communities.

- It is community-driven and open source
- Focuses on cloud services (APIs)
- It collects threat and control stories for cloud services, expressed as Gherkin stories.
- Threats can be used as reference, in threat modeling or just to learn
- Controls can be used as reference, to learn or even for continuous testing
- Pool together the expertise and experience of the community around breaking and securing cloud services

The two main uses of the project are:

1. Using the threat stories in threat modeling sessions.
2. Using the control stories for continuous testing of mitigations.



--------

## References

- **Session page :** https://open-security-summit.org/tracks/devsecops/working-sessions/owasp-cloud-security-workshop/


### Additional/External References

- https://www.owasp.org/index.php/OWASP_Cloud_Security_Project

The following links were given as further reading:

- https://www.owasp.org/index.php/Application_Threat_Modeling
- https://www.owasp.org/index.php/OWASP_Threat_Model_Project
- https://automationpanda.com/bdd/
- https://www.continuumsecurity.net/bdd-security/
- http://gauntlt.org/
