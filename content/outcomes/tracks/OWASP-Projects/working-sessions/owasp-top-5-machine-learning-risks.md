---
title        : Owasp Top 5 Machine Learning risks
type         : outcome
track        :
video        :                    #url i.e. youtube, vimeo, etc
slides       :                    #url i.e. slideshare
images       :
session_type : user-session    # working-session, user-session, product-sesssion
technology   :
featured     : yes
categories   :                    # GDPR, Juice Shop, etc.
status       : review-content             # draft, review-content, done
description  :
---


### Why Must We Now Address Machine Learning Risks

Machine learning and deep learning are now a vital part of critical systems like self-driving cars, advanced authentication and automated detection of lesions/tumors. However, research shows that such technologies have inherent risks originated from the process of how the models are being learnt or used.

### What is Machine Learning?

ML is the ability to program computer to do something without it being explicitly being told what to do.

1. First, we need data. The data is split between two sets, for instance, as follows. 70% of the data is put into the training set. The other 30% of the data is put into the testing set.
2. Next, the learning algorithm is created, the system is trained using the training dataset to produce suitable outcomes, and performance is evaluated using the testing dataset.

### What are the Main Security Concerns for ML?

- Machine learning being used for security
- The internal security of machine learning.

### What Examples are There of Fooling an ML System?

- Dolphin attack to inject covert sounds for fake voice commands
- Toolbox to attack models, generate noise, impersonate celebrities.

### What Does the Threat Landscape Look Like for ML?

The ML threat space can be divided into two parts.

#### Development

- Training stage (poisoning of training data)
- Code security flaws (in learning algorithm).

#### Production

- Testing stage (adversaries and evasion on test data)
- Explainability (understanding how the machine learning technique works, explain how conclusions are reached by the ML system)
- Backdoor attack on learnt model
- Model stealing via test output.

### What Can Be Done to Secure ML?

- Data protection on training sets, hashing, encryption
- Apply human factor to review decisions taken by the machine
- Protect the model from theft
- Secure scanning for all machine levels
- IBM toolbox for robustness against adversarial ML (inputs to machine learning models that an attacker has created to deliberately cause the model to make a mistake).

## Key Takeaway

The top 5 machine learning risks are:

1. Poisoning of the classifier training data
2. Adversarial ML
3. “Explainability" of the learning model
4. Code security flaws
5. Model stealing.

## References
- **Session page :** •	https://open-security-summit.org/tracks/owasp-projects/working-sessions/owasp-top-5-machine-learning-risks/

### Additional/External References
- https://www.owasp.org/index.php/OWASP_Top_5_Machine_Learning_Risks
- https://arxiv.org/abs/1712.05526 (Targeted Backdoor Attacks on Deep Learning Systems Using Data Poisoning (Chen et al. 2017))
