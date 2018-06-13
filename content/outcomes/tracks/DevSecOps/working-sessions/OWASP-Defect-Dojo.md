---
title        : OWASP Defect Dojo
type         : outcome
track        : DevSecOps
video        :                    #url i.e. youtube, vimeo, etc
slides       :                    #url i.e. slideshare
images       :
featured     : yes                 	# GDPR, Juice Shop, etc.
session_type : working-session    # working-session, user-session, product-sesssion
technology   :
categories   :                    # GDPR, Juice Shop, etc.
status       : review-content             # draft, review-content, done
description  :
---

### What is OWASP DefectDojo?

OWASP DefectDojo is an open source vulnerability management tool written in Python/Django. Its top goal is to reduce the amount of time security professionals spend logging vulnerabilities. DefectDojo does this by offering:

- A templating system for vulnerabilities
- Baseline self-service tools
- Imports for common vulnerability scanners
- Report generation
- Metrics.

DefectDojo collects vulnerabilities in single system. It enables a testing pipeline, currently with manual collection/entry, some upload functions, and parsers for known problems. If multiple tests are run on the same application, DefectDojo can deduplicate findings for a simpler overview.

### DefectDojo Roadmap and Requirements

More organizations are using Defect Dojo as their go-to tool for vulnerability management. It is important to maintain the project with latest technology trends like API-first, GitHub issue support, and uniform deployment strategy.

Specific actions planned are:

- Add Scan Integration 2.0 (uploads to APIs)
- Test new API v2 to cover all use cases
- Add the ability for Dojo to check for and apply updates.
- Add support for GitHub Issues
- A more readable code base with PEP8 standards

To use DefectDojo on a broader scale, we also need to improve the production grade code quality:

- Application of model changes
- Data model (use case documentation, relationships, etc.)
- Performance aspects
- Test coverage
- Production deployment best practices

We also need better ways to collaborate and handle code merge master.

## References
- **Session page :**	https://open-security-summit.org/tracks/devsecops/working-sessions/owasp-defect-dojo/

### Additional/External References
- https://www.owasp.org/index.php/OWASP_DefectDojo_Project
- https://owasp.blogspot.com/2016/12/combating-vulnerability-chaos-with.html
- https://github.com/secfigo/django-DefectDojo
- https://github.com/DefectDojo/django-DefectDojo/projects/5
