---
title        : Securing the CI Pipeline
type         : outcome
session_type : user-session
technology   :
featured     : yes
categories   : 
status       : draft
description  :
---

## Outcomes
This Working Session took an in-depth look at the security risks inherent to the CI Pipeline, and what could be done to mitigate these risks.

## Synopsis and Takeaways

#### Why do we need to secure the CI Pipeline?

- The CI pipeline is 'huge'
    - consists of multiple hosts/machines
    - with multiple points of access
    - running multiple processes
- The pipeline contains high value targets for attackers
    - access to compilers
    - config files
    - secrets, keys, passwords
    - Developers often store keys and other secrets in spreadsheets, config files, git repositories
- Assets accessible on the pipeline can be used to escalate privileges
- Several mechanisms for taking advantage of the above was demonstrated.
- Although true that these risks are lower in a pipeline fully implementing security standards , pipelines practicing less than ideal security hygene are not uncommon.

####  Categories of risks identified:

- Misconfigurations
- Secret management
- Environment security
- Developer machines 
- Access management

#### What to do?

- Enable Authentication and Two Factor Authentication methods, using Secret Engines if possible (see tools below)
- Check for misconfigurations
    - hooks
    - secret variables (CI,prod,VCS,Artefacts)
    - VCS Security
    - Docker configuration/registry
    - Artefact hardening
- Code review, 
- Secrets management
- Auditing and Monitoring CI/CD servers
- Harden CI boxes
- Protect the CI master machines
- Check Registries/Artefact storage
- Secure Developer's machines - they are part of CI Pipeline
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
- Automated/on demand access provision - Lets you control who has access, how long she has access for (limited time to live)
- whitelist IPs
- Two Factor Authentication - Team based authentication available

#### Other Miscellaneous Threats mentioned:

- npm typosquatting
    - typosquatting vector could provide access to your CI pipleline..
- Logs - can be a risk (eg. recent GitHub log incident)
- Docker image integrity
- Docker registry mis-configurations


## References (recommend)
- **Session page :** https://open-security-summit.org/tracks/devsecops/working-sessions/securing-the-ci-pipeline/
- **Summit 2017 session page :** https://owaspsummit.org/Working-Sessions/DevSecOps/Securing-the-CI-Pipeline.html

#### Additional/External References

- [How to Secure a Continuous Integration Process](https://www.nccgroup.trust/uk/our-research/securing-the-continuous-integration-process)
- [DEF CON 22 - Kyle Kelley and Greg Anderson - Is This Your Pipe? Hijacking the Build Pipeline](https://www.youtube.com/watch?v=nBR7Kru6JX0)
- [Blackhat Kubernetes: preventing attacks at scale - Dino Dai Zovi](https://www.youtube.com/watch?v=P8891Z_uj-0)