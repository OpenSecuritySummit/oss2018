---
title        : How to Threat Model Features with Questionnaires
type         : outcome
track        :
video        :                    #url i.e. youtube, vimeo, etc
slides       :                    #url i.e. slideshare
images       :
session_type : working-session   
technology   :
categories   : Threat Model                  
status       : review-content            # draft, review-content, done
description  : A list of questions and associated threats and mitigations to serve as inspiration when threat modeling

---

## Outcomes
A set of questions and associated threats and mitigations to serve as a list to be used as inspiration when threat modeling. 

## Synopsis
Instead of diagramming (which takes a lot of time)  can we use questions to create new features? This would allow the developers to Threat Model new features and scale threat modeling in an organisation.

This type of questionnaire is used in the Slack SDL and Irius tool, however they are open source and should not be confused with these products.

### The Scope

The scope for the change the developers wants to do is:
- a new feature is requested
- it has a textbox with Nickname
- it has a button to say hello
- the username is reflected when pressing the button

What questions do we need to ask developers to replace threat modeling?

### The Questions

1. Is the data stored?

2. Is the data sent to the server?

3. Is it sensitive data?

4. Is it PII data  including IP addresses?  
  - GDPR
  - What Data?
  
5. Is the data displayed back to the user?

6. Is the user authenticated?

7. Do we need to authenticate the source of the data?
  - Can we accept data from an anonymous source?
  
8. Are you adding a new data flow?

9. Are you changing the fields in an existing API?

10. Are you adding a new process?

11. Are you using a new component or API?

12. Are you adding a new storage system / component?

13. Is the availability of this feature a concern?

14. What are the performance requirements?

15. Does the user have the required role to access this functionality?

16. Does the data need to be accessed by the user?

17. Where does the code for the feature run?

#### Question Types

- Do you have control? (Yes or No)
- What sort of data is this? (Short Text)
- How is this used? (Prompt Thinking)

### Threats 

Question 1 Y+lack of data integrity, bus, logic

Question 2 -Y- unaudited data --injection attacks

Question 3-Y+Question 2 information disclosure of sensitive data in transit

Question 3-Y+Question 1 information disclosure of sensitive data at rest

### Mitigations
Make questions available by SCRUM

## Working Materials 

<img src="https://user-images.githubusercontent.com/39884432/41211429-a01b8db4-6d37-11e8-91f8-8f025b56c48d.jpg" width="100%"/>


## References
- **Session page :**[Threat Model With Questionnaires](https://open-security-summit.org/tracks/threat-model/working-sessions/tm-features-with-questionnaires/)
- **Summit 2017 session page :**[Threat Model Working Sessions](https://owaspsummit.org/Working-Sessions/Threat-Model/index.html) 
- **Summit 2017 outcome page :**[2017 Outcomes](https://owaspsummit.org/Outcomes/) 


