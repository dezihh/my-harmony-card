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
I decided to develop a solution for Harmony based on this. Unfortunately, the current implementation of the aioharmony library, used by Home Assistant core, doesn't handle actions very well (or I didn't find it, in which case I ask for hints). This means that it is possible to switch device groups on and off using actions and to determine which action is currently active, but unfortunately that is nearly all that is possible, using actions.

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
At least the following entries must be present for the card to work:
```yaml
- type: 'custom:my-harmony-card'
  entity: remote.<device>
  activities:
    PowerOff:
      device_id: -1 
```

### Main Options
| Name | Type | Default | Example | Description |
| -------------- | ----------- | ------------ | ------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type` | string | **Required** | `custom:my-harmony-card` | Type of the card |
| `entity` | string | **Required** | remote.<device> | harmony entity |
| `name` | string | **Option** | Living | name of harmony device in HA, ie. living room |
| `tooltip` | bool | **Option** | false | Displays tooltip on hoover on buttons Guide, Menu, Home, Info, Keypad, and 'ACT' (Actions). |

### Actions
You allways need PowerOff as defined action. To configure the rest of the actions correctly, the file harmony_????.conf, which is located in the root directory of the Home Assistant
installation directory is required for reference. Please note the above ???? is a number. 

Next, open the file. At the top you will find the “Activities” section. Here is the heading of each activity that is defined in unison (e.g. Watch TV). The number before the activity on the same line is added as “Name:” under the activity (e.g. 36824865). Repeat this process for all other activities listed
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
Here a very basic example:
```yaml
~~~
type: 'custom:my-harmony-card'
entity: remote.harmony_wohnzimmer
activities:
  Listen to Music:
    name: 36830123
    device_id: 59107742
  Watch TV:
    name: 36824865
    device_id: 59107742
  PowerOff:
    device_id: -1
~~~~
```
#### The device_id:
The device_id: is one of the most important parameters. It defines which device is addressed when a command is sent. The number of the device that is <b>primarily addressed</b> by remote control should be entered as device_id:. <br>
The device_id: of each device can also be found in the harmony???.conf at the end of the respective device definition and begins with "id": . Please only accept the respective number. 
Example: device_id: 77085993
```json
   ~~~more functions~~~
     "Delete",
     "Apps",
     "Home"
   ],
   "id": "77085993"
 },
 ~~~next device~~~
```

### Activities Options
As explained above, due to the restrictions we can only control individual devices and not any actions (except channel changes). To alleviate this problem, selected keys can be overridden with functions that better suit the device and the particular key inside of an action.

| Name | Type | Default | Example | Description |
| -------------- | ----------- | ------------ | ------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `device_id` | number| **Required** | 77085993 | This is the device id below each defined individual activity |
| `volume_device_id`| number| **Optional** | 59107742 | Special: If you define this, you can send VolumeUp and VolumeDown to a different device. I.e. If you have an AV Receiver and you watch TV, you want to send all commands to TV, but volume change has to be send to AV Receier. In this case, enter the device_id of AV Receiver here |
| `Guide`| string| **Optional** | InputCD | Below each activity you can define this option. In this example "InputCD" will be send to default device_id instead of 'Guide'. Remove the option for default. |
| `Home`| string| **Optional** | InputGame | See comments to 'Guide'. Command to send instead of 'Home' |
| `Info`| string| **Optional** | Favorite| See comments to 'Guide'. Command to send instead of 'Info' |
| `OK`| string| **Optional** | Enter| See comments to 'Guide'. Command to send instead of 'OK' |
| `player_name` | media_player entitiy| **Optional** | media_player.anlage | You can add a media_player entitiy for each activity. If you press log the 'Menu' button, it opens 'more-info  of the defined media_player|


### Button Options
Below each activity you can have up to 4 individual buttons. You can name it as you like (3 Chars) and you can add an idividual command for each of these button (Button[1-4]).
If you don't do, the buttons are invisible.
| Name | Type | Default | Example | Description |
| -------------- | ----------- | ------------ | ------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Button[1-4]` | text | **Required** | Button1| Only Button1, Button2, Button3, Button4 are possible|
| `name`| 3 Char| **Required** | DVR| Name on button |
| `command`| string| **Required** | DVR| Command to send to device_id of activity |
| `tooltip`| string| **Optional** | Digital Video Recorder| Tooltip information to button (long text) |

### Complete Example
```yaml
type: custom:my-harmony-card
name: Harmony
entity: remote.harmony_wohnzimmer
tooltip: true
activities:
  Musik hören:
    name: 36830123
    device_id: 59107742
    player_name: media_player.anlage
    Button1:
      label: MCh
      command: ModeMultiChStereo
      tooltip: Multichannel Stereo
    Button2:
      label: QS1
      command: QuickSelect1
      tooltip: AV Receiver Macro 1
    Button3:
      label: CD
      command: InputCd
      tooltip: Input CD Player
    Button4:
      label: Eco
      command: Eco
      tooltip: Eco Mode
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

## More Functions
The buttons Forward and rewind have two functions:
Short pressed: FastForward or Rewind
Long pressed: SkipForward or SkipBack
