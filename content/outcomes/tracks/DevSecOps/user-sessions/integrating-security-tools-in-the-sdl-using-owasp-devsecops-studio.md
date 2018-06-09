---
title        : Integrating Security Tools in the SDL using OWASP DevSecOps Studio
type         : outcome
track        :
video        :                    #url i.e. youtube, vimeo, etc
slides       :                    #url i.e. slideshare
images       :
session_type : user-session
technology   :
categories   : DevOpsSec
status       : review-content              # draft, review-content, done
description  :
---



## Outcomes
After a discussion of DevSecOps and its history and motivations, participants were introduced to OWASP DevSecOps Studio. This included the following topics:

- Benefits of Integrating security tools in SDL
- CI/CD and security tools
- Different challenges involved while integration
- Using DevSecOps Studio to do hands-on exercise with open source projects


## Synopsis and Takeaways

Integrating security tools in the software development lifecycle ensures appropriate protection for all the information that the system will transmit, process, and store.


#### Typical Security Activities in DevOps:

- Plan
    - Threat Modelling 
    - ASVS
- Code 
    - Git Secrets
    - Dependency scanning
- Build
    - Dependency scanning
    - SAST
    - Security Unit Tests
    - Git Secrets scanning
    - Component scanning
- Test
    - ZAP testing - baseline 
    - Container Scanning 
    - Modsecurity CRS
- Release
    - Docker/Third Party 
    - SSL scanning 
    - Nikto/dirbuster 
    - WPScan/JoomScan 
    - ZAP + selenium + python 
    - Component scanning
- Deploy
    - Docker Benchmark 
    - System Hardening 
    - Application Hardening
- Operate
    - Compliance as code 
    - SOC with ELK 
    - Verify Controls


#### OWASP DevSecOps Studio:
DevSecOps Studio project aims to reduce the time to bootstrap the environment and help you in concentrating on learning/teaching DevSecOps practices. 

#### The Benefitts of DevSecOps Studio 

- Easy to setup environment - Takes only few mins to setup and start with just one command (“vagrant up”)
- Free & Open Source Software - this project is a free and open software to help more people learn about DevSecOps
- Reproducible - the aim of this project is to setup reproducible DevSecOps Lab environment for learning and testing different tools

#### Some of the Python Security Tools discussed:

- **SAST:** Bandit
- **DAST:** ZAP Proxy
- **Hardening:** Ansible
- **Compliance:** Inspect
- **Git Secrets:** Trufflehog


## DevSecOps Studio Setup
DevSecOps Studio uses vagrant, virtualbox and ansible to setup the lab environment. You can visit the vendor's website to download the above software for on Windows/Linux/macOS.

Install [Vagrant](https://www.vagrantup.com/downloads.html), [Virtualbox](https://www.virtualbox.org/wiki/Downloads) , [Ansible](http://docs.ansible.com/ansible/latest/intro_installation.html#installation)  and follow the below steps.

- [Download DevSecOps-Studio Appliance](https://drive.google.com/open?id=1b3Z6BLndohpn_2HHcBfPFUpoSx78OKgG) (4.45 GB)
- Import the above Appliance by following [these steps](https://docs.oracle.com/cd/E26217_01/E26796/html/qs-import-vm.html)
- Follow the [wiki](https://github.com/teacheraio/DevSecOps-Studio/wiki) to embed security as part of DevOps Pipeline.


## References
- **Session page :** https://open-security-summit.org/tracks/devsecops/user-sessions/integrating-security-tools-in-the-sdl-using-owasp-devsecops-studio/


### Additional/External References

* [OWASP DevSecOps Studio Project Page](https://www.owasp.org/index.php/OWASP_DevSecOps_Studio_Project) 
* [DevSecOps Studio Project on GitHub](https://github.com/teacheraio/DevSecOps-Studio)
