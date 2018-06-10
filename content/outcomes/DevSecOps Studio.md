title        	: DevSecOps Studio
type         	: outcome
session_type 	: user-session   # working-session, user-session, product-session
technology	  :
categories   	:                  	  # GDPR, Juice Shop, etc.
status      	: review-content          	# draft, review-content, done
description	  :
---

### How Have We Been Moving towards DevSecOps?

- Traditional SDLC becomes Agile
- Speed at which changes are being made is beyond security’s (operations) reach
- Wall of confusion arises (dev/ops)
- DevOps cycle is invented – Release, configure, monitor, plan & create, verify, package
- Wall of compliance arises (DevOps/Security)
- Security is outnumbered: 100 dev to 10 ops to 1 security
- From DevOps to DevSecOps: culture, measurement in CI/CD, automation, sharing (tools, best practices)
- Scale security with DevOps
- Shift security left – use CI/CD pipeline to embed security
- Self-service – give developers and operations visibility into security activities
- Security as Code – compliance as code and hardening via configuration management systems
- ‘Secure by default’ – use secure by default frameworks and services
- Apply DevSecOps Maturity Model (DSOMM) for static depth, dynamic depth, intensity, consolidation

### What is DevSecOps Studio?

DevSecOps Studio is a self-contained DevSecOps environment/distribution for learning DevSecOps concepts. 

DevSecOps Studio:

- Makes it easy to set up the environment for training/demos
- Is mostly automatic
- Teaches Security as Code, Compliance as Code, and Infrastructure as Code
- Has built-in support for CI/CD pipeline
- Security tools can be added as jobs to DevSecOps Studio.

### Practical Installation Points

DevSecOps Studio quick start has these steps:

1. Download the code (git clone from GitHub repo)
2. Download Ansible dependency roles
3. Set up the environment with one command (‘vagrant up’).

For an in-session lab environment at this Open Security Summit:

1. Install Virtualbox, Vagrant, and (if not rep-existing) Git bash
2. Download Virtualbox Appliance
3. Import the Appliance into Virtualbox

### Additional Session Question

- Could DevSecOps Studio be extended to include business logic by combining with another suitable application (perhaps OWASP Juice Shop)?

## References
- **Session page :** •	https://open-security-summit.org/tracks/devsecops/working-sessions/owasp-devsecops-studio/

### Additional/External References
- https://dso-studio.teachera.io/ 
- https://github.com/teacheraio/DevSecOps-Studio/wiki 
- https://www.teachera.io/devsecops-course/

- PowerPoint/PDF presentation by Imran Mohammed A
(URL is TBD, see separate file called devsecops-studio.pdf)
