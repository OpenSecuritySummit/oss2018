---
title        : Using User Story Mapping for effective communication
type         : outcome
track        : Maps and Graphs
video        :                    #url i.e. youtube, vimeo, etc
slides       :                    #url i.e. slideshare
images       :
session_type : user-session
technology   :
featured     : yes
categories   : Mapping
status       : done
description  :
---


## Outcomes/Deliverables
- A number of visualisations of user mappings
- See attached slides for images
- Including initial sketches taken by an illustrator (Owen Williams) during the session

## Synopsis and Takeaways
- Methodology of user mapping was discussed:
   - Write a high-level story or epic
   - Break it down into a series of smaller stories
   - The stories should be written from the user's perspective:
      - Describe the type of user, what they want, and why
   - Threat Modeling should be part of the mapping process

### User maps should consider the 'Invest' mnemonic:
 - **I**ndependent
 - **N**egotiable
 - **V**aluable
 - **E**stimable
 - **S**mall
 - **T**estable

### Session examples
First example:
    - A Chief Compliance Officer (the user)
       - I want to be PCI compliant (what they want)
          - So I can process credit card payments (why)

The various elements of this epic can be analysed as smaller stories or tasks within the epic, that can be done by the devs, for example:
- Encryption
- OWASP Top 10
- Card holder data
- Intrusion detection

Or, reverse engineer what makes sense to Devs and work from there.

Second (related) example:
- As a user, I want to use my credit card to buy "juice" securely (juice as "product" or "commodity")
- The questions lead from this high-level statement to tasks, and then a solution.
- A potential solution is to Threat Model or technical spike the different solutions
   - Simulate what will happen
   - Simulate what we know
   - Design what to build
   - Design how to build it
- TMs will validate or spoil the assumptions made about costs, time, ROI, etc.

Once Threat Modelling has been completed and options are presented to Decision Makers, a Brief Lock was suggested, to ensure that subsequent requests for changes/redesign could be met with the brief lock which makes people think about what they are asking - for the threat model sprint to have to start again, and another decision (or set of decisions) to be made, and possibly a project slowed or halted.

Other mnemonics quoted were

MVP:  Minimum Viable Product
RATs: Riskiest Assumptions Tested

The group was very engaged and enthusiastic about mapping, and there was significant contribution, and use of the "whiteboard on a roll".

## Working Materials
See [Session slides](https://drive.google.com/open?id=1-lug6UzisKtoxVih3SbSvKufGP1h5yRX7FbZkh25004)

## References
- https://open-security-summit.org/tracks/maps-and-graphs/working-sessions/user-story-mapping-for-effective-communication/

### Additional/External References
Patton, J (2014), User Story Mapping: Discover the Whole Story, Build the Right Product, O'Reilly Media [Amazon link](20https://www.amazon.co.uk/User-Story-Mapping-Discover-Product/dp/1491904909)
