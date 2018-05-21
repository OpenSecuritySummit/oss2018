---
title       : Registering and updating information
layout      : FAQ
---

#### 1. How do I update my schedule and register for working sessions?
In order to update your schedule, follow these steps:

  1. Visit your profile page. For example, https://open-security-summit.org/participant/francois-raynaud/.

  2. On the next page, add the "sessions:" that you want to attend. You can enter as many sessions as you want to attend. Each session will be added as an item in a YAML list. So just give an enter after the colon, add two spaces, and a dash '-', another space, and the name of the title of the working session.
     This is a simple example:
{{< highlight yaml >}}
sessions:
  - Some session title
  - Another session title
{{< /highlight >}}

  3. Create a new branch for this commit, create a pull request and commit changes.

  4. When merged, changes should reflect on your main profile page after a delay of a minute or so.



#### 2. I don't have a profile page, how do I register as a participant on GitHub?

There are two types of participants - Onsite and Remote

- To register as a remote participant:

   Please make a copy of the [remote participant template]({{< ref "/participant-remote/_template-remote.md" >}}) and save it in the same folder (https://github.com/OpenSecuritySummit/oss2018/tree/master/content/participant/remote). Fill in your details there.

- To register as an onsite participant:

   Please make a copy of the [participant template]({{< ref "/participant/_template.md" >}}) and save it in the same folder (https://github.com/OpenSecuritySummit/oss2018/tree/master/content/participant).

If you are going to contribute to a working session it makes sense to fork the repo and push your changes (https://github.com/OpenSecuritySummit/oss2018).
