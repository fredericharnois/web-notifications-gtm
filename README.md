# Adding Web Notifications Through GTM

This is a method to implement the [Notifications API](https://developer.mozilla.org/en-US/docs/Web/API/notification) on any website through Google Tag Manager.

## Setup

In order to limit notifications to one per session, you'll want to create a 1st Party Cookie Variable in GTM called "Session Alive" with Cookie Name set to "session":

![Alt text](https://i.imgur.com/Xwoo8d9.png)

You can then simply copy and paste the code in GTM as a tag.

## Credits

This is based on freeCodeCamp.org's [Desktop Notifications - Beau teaches JavaScript](https://www.youtube.com/watch?v=OMXtJ0USM8s) and Simo Ahava's [Send Weather Data To Google Analytics In GTM V2
](https://www.simoahava.com/analytics/send-weather-data-to-google-analytics-in-gtm-v2/).

