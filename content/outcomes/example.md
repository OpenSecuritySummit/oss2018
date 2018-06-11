---
title        : Mermaid Examples   # same as the corresponding user|working|product-session
type         : outcome
track        :
video        :                    #url i.e. youtube, vimeo, etc
slides       :                    #url i.e. slideshare
images       :
session_type :                    # working-session, user-session, product-session            
technology   :
categories   :                    # GDPR, Juice Shop, etc.
status       : draft              # draft, review-content, done
description  :
---

See https://mermaidjs.github.io/ for more examples!

{{<mermaid align="left">}}
graph LR
A(CLIENT) -->|1|B(PROXY)
B -->|2| C(API)
C-->|3|B(PROXY)
B-->|4|A(CLIENT)
{{< /mermaid >}}

{{<mermaid align="left">}}
graph LR;
    A[Hard edge] -->|Link text| B(Round edge)
    B --> C{Decision}
    C -->|One| D[Result one]
    C -->|Two| E[Result two]
{{< /mermaid >}}

{{<mermaid>}}
sequenceDiagram
    participant Alice
    participant Bob
    Alice->>John: Hello John, how are you?
    loop Healthcheck
        John->John: Fight against hypochondria
    end
    Note right of John: Rational thoughts <br/>prevail...
    John-->Alice: Great!
    John->Bob: How about you?
    Bob-->John: Jolly good!
{{< /mermaid >}}

