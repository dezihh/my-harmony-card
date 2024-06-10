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
  entity: remote.harmony_wohnzimmer
  name: Harmony
  tooltip: true
  activities:
    PowerOff:
      name: -1
      device_id: -1 
```

### Main Options
| Name | Type | Default | Supported options | Description |
| -------------- | ----------- | ------------ | ------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type` | string | **Required** | `custom:my-harmony-card` | Type of the card |
| `entity` | string | **Required** |  | remote entity |
| `name` | string | **Option** |  | tv name |
| `tooltip` | bool | **Option** |  | Displays Tooltip on hoover on buttons Guide, Menu, Home, Info, Keypad, and 'ACT' (Actions). |

### Actions
You allways need PowerOff as defined action. To configure the rest of the actions correctly, the file harmony_????.conf, which is located in the root directory of the Home Assistant 
Installation directory is required for reading. Please note the above ???? is a number. 

Next, open the file. At the top you will find the “Activities” section. Here, the heading of each activity is the defined activity (e.g. Watch TV). The number in front of the activity on the same line is added as "name:" under the activity (e.g. 36824865). You repeat this process with all other activities
#### Example harmony????.conf
```json
{    "Activities": {
        "-1": "PowerOff",
        "36824865": "Watch Tv",
        "36829890": "Play Blue Ray",
        "36830123": "Listen Music",
        "37038020": "Play PS5"
    },
```
#### Example actions
```yaml
~~~
entity: remote.harmony_wohnzimmer
activities:
  Listen to Music:
    name: 36830123
    device_id: 59107742
  Watch TV:
    name: 36824865
    device_id: 59107742
~~~~
```
#### The device_id:
The device_id: is one of the most important parameters. It defines which device is addressed when a command is sent. The number of the device that is <b>primarily addressed</b> by remote control should be entered as device_id:. 
The device_id: of each device can also be found in the harmony???.conf at the end of the respective device definition and begins with "id": . Please only accept the respective number. 
Example: device_id: 59127742

### Activities Options
Possible entries below each action
| Name | Type | Default | Supported options | Description |
| -------------- | ----------- | ------------ | ------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `device_id` | number | **Required** | 'mdi:netflix'| url of the image to be displayed in the channel pad popup |
| `volume_device_id`| number | **Optional** | mdi | bla |
| `Guide`| test | **Optional** | mdi | Command to send insted of 'Guide' |
| `Home`| test | **Optional** | mdi | Command to send insted of 'Home' |
| `Info`| test | **Optional** | mdi | Command to send insted of 'Home' |
| `OK`| test | **Optional** | mdi | Command to send insted of 'Home' |
| `player_name` | string | **Optional** | app name | media_player  |
| `tooltip` | string | **Optional** | app name | you have  |


### Button Options
Possible entries below Button[1-4]
| Name | Type | Default | Supported options | Description |
| -------------- | ----------- | ------------ | ------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name` | text | **Required** | 'mdi:netflix'| The name of Button (max 4 Chars) |
| `command`| number | **Required** | mdi | bla |
| `tooltip`| test | **Optional** | mdi | Command to send insted of 'Guide' |
| `Home`| test | **Optional** | mdi | Command to send insted of 'Home' |
| `Info`| test | **Optional** | mdi | Command to send insted of 'Home' |


### Complete Examtle
```yaml
type: custom:my-harmony-card
name: Harmony
entity: remote.harmony_wohnzimmer
activities:
  Musik hören:
    name: 36830123
    device_id: 59107742
    player_name: media_player.anlage
    Button1:
      label: MCh
      command: ModeMultiChStereo
      tooltip: Multichannel Stereo
    Button2: null
    Button3: null
    Button4: null
  NetFlix sehen:
    name: 37038020
    device_id: 43935598
    volume_device_id: 59107742
    player_name: media_player.lg_webos_smart_tv
    Button1:
      name: Set
      command: Settings
      tooltip: Settings
    Button2:
      name: Smt
      command: SmartMenu
      tooltip: SmartMenu
    Button3: null
    Button4: null
dimensions:
  scale: '0.59'
  border_width: 2px
````
