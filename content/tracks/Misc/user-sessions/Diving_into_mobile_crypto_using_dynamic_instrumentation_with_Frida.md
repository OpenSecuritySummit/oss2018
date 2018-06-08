---
title        : Diving into mobile cryptography using dynamic instrumentation with Frida
type         : user-session
track        : Misc
technology   : 
categories   : Mobile Security                      # GDPR, Juice Shop, etc.
featured     : yes                   # review with summit team "yes"
when_day     : Wed
when_time    : PM-3
room_id      : Villa-314
session_slack: 
status       : # draft, review-content, done
organizers   : ["Carlos Holguera"]
participants :
    - Sven Schleier
description  : Hands-on session by Carlos Holguera
---



## WHY
This all started because Google says that the keys used for encryption in Android are protected from extraction. So we want to verify if this is really true. You can read the statement here:
https://developer.android.com/training/articles/keystore/#ExtractionPrevention

## What

On this hands-on session we will cover the very basics of dynamic instrumentation with Frida to a more complex task consisting of the extraction of crytographic material from an app process memory.
We will practice this using the OMTG-Android App from the MSTG-Hacking Playground.

The APK can be found here: https://github.com/OWASP/MSTG-Hacking-Playground/tree/master/Android/OMTG-Android-App/app
You can download it and install it to your Android device. 

Sadly it will only fully work on an Android 5 device because the app is using an old Android API for the encryption.

## Outcomes

You can run Frida on your system and Android phone and have a basic understanding.
You were able to extract some cryto keys.. or not.

## References
https://www.frida.re/


## Previous-->

Please install Frida on your laptop (it's easy! just pip it): https://www.frida.re/docs/installation/

Install Frida-server on your rooted Android device: https://www.frida.re/docs/android/


