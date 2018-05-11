@import "/content/admin/img/oss2018-logo.png"
# Identified Use-Cases
**Version:** 1.0
**Created Update:** 11/05/2018
**Last Update:** 11/05/2018


## About the Document
This document includes information about identified use cases which helps in logical grouping of content, pages and features related to the OSS 2018 website.
This document describes the use-cases/epics in which detailed requirements for the OSS 2018 website are grouped.

## Identified Use Cases/Epics
The following elements represents the identified use-cases related to the OSS 2018 website.
A use-case is an element which provides grouping of requirements and activities which are logically related.

```Dot
digraph "Epics Model" {
    /*
        legend for the epics related to OSS 2018 website.
    */

    // *** CONFIGURATION ********************************
    rankdir = LR;
    compound = true;
    edge [fontsize = 12];

    // *** NODES DECLARATION ****************************
    node [style = "filled, rounded", shape = box];
        Subscription [label = "email subscription", color = "#dbb53b"];
        Eventbright [label = "eventbright", color = "#93e7f9"];
        Help [label = "help", color = "#00bb66", fontcolor = "#ffffff"];
        Jobs [label = "job offers", color = "#596b02", fontcolor = "#ffffff"];
        Participants [label = "participants", color = "#006989", fontcolor = "#ffffff"];
        Sponsors [label = "sponsors", color = "#efd069"];
        Tickets [label = "tickets", color = "#fce994"];
        TracksAndSessions [label = "tracks and sessions", color = "#ef5bed"];
        About [label = "about summit", color = "#9b98e2"];

    edge [style="invis"]
    About -> TracksAndSessions -> Participants -> Tickets -> Eventbright;
    Sponsors -> Jobs -> Subscription -> Help
}
```
- **about summit** - use-case that represents all specific requirements related to content, pages and features which tells the story about the summit.
<br/>
- **tracks and sessions** - use-case that represents all specific requirements related to content, pages and features related to tracks, working and user sessions.
<br/>
- **participants** - use-case that represents all specific requirements related to content, pages and features related to onside and remote participants.
<br/>
- **tickets** - use-case that represents all specific requirements related to content, pages and features related to tickets that can be purchased from participants.
<br/>
- **eventbright** - use-case that represents all specific requirements related to content, pages and features related to a page for buying tickets on Eventbright service (https://www.eventbrite.co.uk/).
<br/>
- **help** - use-case that represents all specific requirements usually related to content on pages which has to explain how entities, workflows and scenarios related to the summit. The content that can help primarily to the participants. Most of the content under this use-case is represented on the website under FAQ pages.
<br/>
- **job offers** - use-case that represents all specific requirements related to content, pages and features which has to provide possibility for the companies to post and publish job offers.
<br/>
- **sponsors** - use-case that represents all specific requirements related to content, pages and features related to sponsors of the summit.
<br/>
- **email subscription** - use-case that represents all specific requirements related to the feature which has to provide possibility for collecting contact information from the interested parties and participants.
