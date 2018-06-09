---
title        : Securing the CI Pipeline
type         : outcome
track        :
video        :                    #url i.e. youtube, vimeo, etc
slides       :                    #url i.e. slideshare
images       :
session_type : user-session
technology   :
featured     : yes
categories   : 
status       : review-content
description  :
---

## Outcomes
This Working Session took an in-depth look at the security risks inherent to the CI Pipeline, and what could be done to mitigate these risks.

## Synopsis and Takeaways

#### Why do we need to secure the CI Pipeline?

- The CI pipeline is ‘huge’,consisting of multiple hosts/machines with multiple points of access and processes.
- The pipeline contains high value targets for attackers, such as:
    - Access to compilers
    - Config files
    - Secrets, keys, passwords. Developers often store keys and other secrets in spreadsheets, config files, git repositories
- Assets accessible on the pipeline can be used to escalate privileges
- Several mechanisms for taking advantage of the above were demonstrated.
- Although true that these risks are lower in a pipeline fully implementing security standards, pipelines practicing less than ideal security hygene are not uncommon.

####  Categories of risks identified:

- Misconfigurations
- Secret management
- Environment security
- Developer machines 
- Access management

#### What can you do?

- Enable Authentication and Two Factor Authentication methods.
- Check for misconfigurations:
    - hooks
    - secret variables (CI, prod, VCS, artefacts)
    - VCS security
    - Docker configuration/registry
    - Artefact hardening
- Get your code review right.
- Implement secure secrets management
- Auditing and monitoring CI/CD servers
- Harden CI boxes
- Protect the CI master machines
- Check registries/artefact storage
- Secure developer's machines.
- Consider using secret management and automated access provision tools (see below)
- Use Docker best practices for security

**In general, the security of the CI/CD pipelines should be considered as important as your production security!**


#### Tools for Securing the Pipeline, covered in session:

- Automated access management/provision:
    - [repokid](https://github.com/Netflix/repokid)
    - [hubcommander](https://github.com/Netflix/hubcommander)
- Secret management and automated access provision
    - [Hashicorp Vault](https://www.vaultproject.io/) - getting to know and use Vault is highly recommended

A tool like Hashicorp's Vault can help by providing:

- Secret management
- Automated and on demand access provision. This provides you with processes that lets you control who has access, how long she has access for (limited time to live)
- Whitelist IPs
- Two Factor Authentication, with team based authentication available

#### Other Miscellaneous Threats mentioned:

- npm typosquatting
- Logs can be a risk (eg. recent GitHub log incident)
- Docker image integrity and registry mis-configurations


## References
- **Session page :** https://open-security-summit.org/tracks/devsecops/working-sessions/securing-the-ci-pipeline/
- **Summit 2017 session page :** https://owaspsummit.org/Working-Sessions/DevSecOps/Securing-the-CI-Pipeline.html

#### Additional/External References

- [How to Secure a Continuous Integration Process](https://www.nccgroup.trust/uk/our-research/securing-the-continuous-integration-process)
- [DEF CON 22 - Kyle Kelley and Greg Anderson - Is This Your Pipe? Hijacking the Build Pipeline](https://www.youtube.com/watch?v=nBR7Kru6JX0)
- [Blackhat Kubernetes: preventing attacks at scale - Dino Dai Zovi](https://www.youtube.com/watch?v=P8891Z_uj-0)
