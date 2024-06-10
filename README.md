# My-Harmony-Card
Not another Remote Control for Logitech HARMONY COMPANION 

[![hacs_badge](https://img.shields.io/badge/HACS-Default-orange.svg)](https://github.com/hacs/integration)
[![buymeacoffee_badge](https://img.shields.io/badge/Donate-buymeacoffe-ff813f?style=flat)](https://buymeacoffee.com/dezi)

This project is inspired by the LG WebOS Remote Card based on (madmicio's [repository](https://github.com/madmicio/LG-WebOS-Remote-Control))

![all](pictures/harmony-1.jpg)
![all](pictures/harmony-2.jpg)
![all](pictures/harmony-3.jpg)

# Introduction
All the remote controls for the Harmony that I found didn't appeal to me either visually or functionally. Luckily I stumbled upon madmicio's project. I really liked the layout. 
I decided to develop a solution for Harmony based on this. Unfortunately, the current implementation of Harmony with library xyz doesn't handle actions very well (or I didn't find it, in which case I ask for hints). This means that it is possible to switch device groups on and off using actions and to determine which action is currently active, but unfortunately that is all that is possible.

For this reason, the functions of the Harmony's buttons cannot be mapped 1:1 to the functions of the physical remote control.
I therefore took the route of using actions to control the device groups and, at the moment when an action is active, addressing the device directly with its ID and aligning the buttons on the remote control as flexibly as possible.

## hacs Card install
1. Find and install `My Harmony Card` plugin

2. Add a reference  inside your resources config:

  ```yaml
resources:
  - type: module
    url: /hacsfiles/my-harmony-card/my-harmony-card.js
```

### Manual install

1. Download and copy `my-harmony-card.js` from (https://github.com/dezihh/my-harmony-card/releases/latest) into your custom components  directory.

2. Add a reference `my-harmony-card.js` inside your resources config:

  ```yaml
  resources:
    - url: /local/"your_directory"/my-harmony-card.js
      type: module
  ```
# lovelace config: default view
```yaml
- type: 'custom:my-harmony-card'
  entity: remote.wohnzimmer
  
```
