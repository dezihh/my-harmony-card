
# My-Harmony-Card

Not [yet only another Remote Control](https://github.com/dezihh/my-harmony-card/) for Logitech HARMONY COMPANION Hub

[![hacs_badge](https://img.shields.io/badge/HACS-Default-orange.svg)](https://github.com/hacs/integration)  
[![buymeacoffee_badge](https://img.shields.io/badge/Donate-buymeacoffe-ff813f?style=flat)](https://buymeacoffee.com/dezi)

This project is inspired by the LG WebOS Remote Card based on (madmicio's [repository](https://github.com/madmicio/LG-WebOS-Remote-Control))

<div style="display: flex; flex-wrap: wrap; align-items: center;">
  <img src="https://github.com/dezihh/my-harmony-card/blob/master/pictures/my-front.png" width="128" style="margin-right: 10px;"/>
  <img src="https://github.com/dezihh/my-harmony-card/blob/master/pictures/my-front-small.png" width="128" style="margin-right: 10px;"/>
  <img src="https://github.com/dezihh/my-harmony-card/blob/master/pictures/my-keypad.png" width="128" style="margin-right: 10px;"/>
  <img src="https://github.com/dezihh/my-harmony-card/blob/master/pictures/my-actions.png" width="128" style="margin-right: 10px;"/>
  <img src="https://github.com/dezihh/my-harmony-card/blob/master/pictures/my-favorites.png" width="256" style="margin-right: 10px;"/>
</div>

# In short words
The [Harmony Card My-Harmony-Card](https://github.com/dezihh/my-harmony-card/) is a customizable remote control for managing a Harmony Remote Hub, offering flexible button assignments and configurable color design. It allows the remote's height to be adjusted based on the selected activity and provides the option to save favorites and other specific functions. Configured activities can be automatically imported and linked to specific device IDs for a easy setup process. Special buttons can be assigned individual commands or service calls for each activity. Additionally, it includes aa scaling of the size of the remote for best fitting.

## Introduction

I couldn't find any remote controls for the Harmony that met my needs, either visually or functionally. Fortunately, I came across [Madmicio's](https://github.com/madmicio/LG-WebOS-Remote-Control) project, and I really liked the layout. Inspired by this, I decided to develop a solution for Harmony based on his work.

However, I encountered some limitations with the current implementation of the aioharmony library used by Home Assistant Core. Specifically, it doesn't handle actions as effectively as I'd hoped (or perhaps I missed something—any tips are welcome). While the library allows for switching device groups on and off and detecting which action is currently active, that's about the extent of its capabilities regarding actions.

As a result, it's not possible to directly map the Harmony's remote buttons to the physical remote's functions. To work around this, I decided to use actions to manage the device groups. Once an action is active, I directly control the device using its ID and configure the remote buttons as flexibly as possible.

## Card install

You can find this card by searching for "My-Harmony-Card" in the HACS Community Store. If that doesn't work or if you prefer a manual installation, you can find a detailed guide [here](Install.md).

## Card config:

At least the following entries must be present for the card to work:

```
- type: 'custom:my-harmony-card'
  entity: remote.<device>
```

### Main Options

| Name | Type | Default | Example | Description |
| --- | --- | --- | --- | --- |
| `type` | string | **Required** | `custom:my-harmony-card` | Type of the card |
| `entity` | string | **Required** | remote.myharmonydevice | harmony entity |
| `name` | string | **Option** | Living | name of harmony device in HA, ie. living room |
| `activities` | Opject | **Required** | see [activities](#activities-options) | name of harmony device in HA, ie. living room |
| `tooltip` | bool | **Option** | false | Displays tooltip on hoover on buttons Guide, Menu, Home, Info, Keypad, and 'ACT' (Actions). |
| `Special` | object | **Option** | see [Button\[A-D\]](#Buttona-d) | Free global select: 5th configurable global Button -  works on all activities same  |
| `Button[A-D]` | object | **Option** | see [Button\[A-D\]](#Buttona-a) | 4 Buttons for global use. You can add to each service one service all. If not configured, the buttons disappear and the remote will get smaller  |
| `favsize` | int | **Option** | 80 | Size of the icons in the favorites popup |
| `faviconpath` | path | **Option** | /local/icons/ | Path were your station logos reside. Default it is a directory below this card (/local/community/my-harmony-card/stations/), but you can change it to a different directory i.e. /local/icons. This directory is not the physical directory, it is the directory, you can reach through Home Assistant. In my example the physical directory of /local/icons would be ~/www/icons.  |
| `dimensions` | object | **Option** | see [Dimensions]() | Scale total size of remote and size of border |
| `colors` | object | **Option** | see [colors]() | Color setup of the remote (background, buttons,...) |
| `debug` | bool | **Option** | true | Provide debugging information in the browser's console.log if set to true |

### Import activities

You can import your configured activities by checking the import box in the configuration menu. This will automatically import your activities and assign -1 as the device_id for each new device. You can edit the device\_id directly if needed.

If your Harmony configuration changes (e.g., adding a new activity, renaming, etc.), you can re-import the activities by clicking 'Import Activities.' This will remove any unused activities and add new ones. Unchanged activities won't be affected, so you won't lose any data if you click the button again. :-)

## A very basic example:

```
~~~
type: 'custom:my-harmony-card'
entity: remote.harmony_wohnzimmer
activities:
  Listen to Music:
    device_id: 59107742
  Watch TV:
    device_id: 59107742
~~~~
```

The device_id is one of the most important parameters. It specifies which device is targeted when a command is sent. The number of the device that the remote control primarily interacts with should be entered as the device\_id." 

## How to find the device\_id?

The device\_id: of each device can be found in the harmony???.conf at the end of the respective device definition and begins with _"id":_ . Please only accept the respective number.  
Example: device\_id: 77085993

```
   ~~~more functions~~~
     "Delete",
     "Apps",
     "Home"
   ],
   "id": "77085993"
 },
 ~~~next device~~~
```

## Activities Options

As mentioned earlier, due to certain limitations, we can only control individual devices and not actions (except for channel changes), unlike what the physical remote control can do. To address this issue, specific keys can be overridden with functions that better match the device and the particular key within an activity.

For each defined activity under the activities section, the following options are available:

| Name | Type | Default | Example | Description |
| --- | --- | --- | --- | --- |
| `device_id` | number | **Required** | 77085993 | This is the device id below each defined individual activity |
| `volume_device_id` | number | **Optional** | 59107742 | Special: If you define this, you can send VolumeUp and VolumeDown to a different device. I.e. If you have an AV Receiver and you watch TV, you want to send all commands to TV, but volume change has to be send to AV Receier. In this case, enter the device\_id of AV Receiver as volume\_device\_id here |
| `Guide` | string | **Optional** | InputCD | Below each activity you can define this option. In this example "InputCD" will be send to default device\_id instead of 'Guide'. Remove the option for default. |
| `Home` | string | **Optional** | InputGame | See comments to 'Guide'. Command to send instead of 'Home' |
| `Info` | string | **Optional** | Favorite | See comments to 'Guide'. Command to send instead of 'Info' |
| `OK` | string | **Optional** | Enter | See comments to 'Guide'. Command to send instead of 'OK' |
| `player_name` | media\_player entitiy | **Optional** | media\_player.anlage | You can add a media\_player entitiy for each activity. If you press log the 'Menu' button, it opens 'more-info of the defined media\_player |
| `activateCButtons` |bool| **Optional** | true | Enable or disable color button for the actual activity | 
| `Button[1-4]` | Object | **Optional** | Button1: | See explanation below |
| `favorites` | Object | **Optional** | favorites: | See explanation below |

### Numeric Button Options

Below each selected activity you can have up to 4 individual buttons. You can name it as you like (max. 3 Chars) and you can add an idividual command for each of these buttons (Button\[1-4\]).  
If you don't do, the buttons are invisible.

| Name | Type | Default | Example | Description |
| --- | --- | --- | --- | --- |
| `Button[1-4]` | enum | **Required** | Button1 | Only Button1, Button2, Button3, Button4 are possible |
| `name` | Char | **Required** | DVR | Name on button |
| `service`| Object | **Required** | DVR | Command to send to device\_id of activity |
| `command`| string | **Required** | DVR | Command to send to device\_id of activity |
| `tooltip` | string | **Optional** | Digital Video Recorder | Tooltip information to this button (long text) inside of this activity |
| `icon` | icon | **Optional** | mdi:netflix | Instead of nameing a button, you can set an image instead for the named button |

### Button\[A-D\]
Lorem Lipsum

### Services
| Name | Type | Default | Example | Description |
| --- | --- | --- | --- | --- |
| `service` | string | **Required** | light.toggle | Service to call at Home Assistant |
| `name` | String | **Required** | DD | Name to display on remote button |
| `icon` | String | **Required** | mdi:access-point | Image to display on remote button |
| `tooltip` | string | **Optional** | Digital Video Recorder | Tooltip information to this button (long text) inside of this activity |
| `data` | Object | **Required** | mdi:netflix | Data send to Home Assistant for service. i.e. channel and entity_id |

### Favorites

For each selected activity, you can define individual favorites. By long-pressing the '123' button, a popup will appear with your predefined favorites. If you click one of the displayed icons in the popup, the channel number associated with that icon will be selected. The dialog will remain open for continued use until you manually close it (useful for channel surfing).

| Name | Type | Default | Example | Description |
| --- | --- | --- | --- | --- |
| `number` | integer | **Required** | 103 | Number which should be called by remote control |
| `image` | icon | **Required** | ndr\_hd.png | Name of the icon (see below) |

#### Icons for Favorite Popup
`
If you install this card automatically through HACS, all icons in the repository's `icons directory will be installed as well. If you need additional icons, you can manually add them to the _icons_ directory within the installation folder of this card. Typically, this is located at `~/www/community/my-harmony-card/icons`.

### Complete Example
```
type: custom:my-harmony-card
name: Harmony
entity: remote.harmony_wohnzimmer
tooltip: true
faviconpath: /local/icons/
favsize: 80
activities:
  Musik hören:
    name: 36830123
    device_id: 59107742
    player_name: media_player.anlage
    Button1:
      name: MCh
      command: ModeMultiChStereo
      tooltip: Multichannel Stereo
    Button2:
      name: QS1
      command: QuickSelect1
      tooltip: AV Receiver Macro 1
    Button3:
      name: CD
      command: InputCd
      tooltip: Input CD Player
    Button4:
      name: Eco
      command: Eco
      tooltip: Eco Mode
  WatchTv:
    name: 37038020
    device_id: 43935598
    volume_device_id: 59107742
    player_name: media_player.lg_webos_smart_tv
    favorites:
      - number: 1
        image: das_erste_hd.png
      - number: 2
        image: zdf_hd.png
      - number: 3
        image: das_vierte.png
      - number: 104
        image: zdf_neo.png
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
```

## More Functions

The buttons Forward and rewind have two functions:
*   Short pressed: FastForward or Rewind
*   Long pressed: SkipForward or SkipBack

## Troubleshooting

After installing the card and adding the default configuration along with your Harmony entity, you should immediately see your configured activities when you press the _ACT_ button.
In PowerOff mode, the power button will appear red; otherwise, it will be green.
If you've configured your activities as described above, you should be able to perform basic actions (e.g., Volume Up, Guide, Home, Number, etc.) at once.
If this isn't working, try pressing the 'Synchronize' button again.

**Relevant for mapping activity is the name (ie. NetFlix sehen: in the example above),** _**not**_ **the named number!**

If you not know, which button is for which functionallity be default, look [here](pictures/Harmony_desc.jpg)

### Debugging

Launch the Chrome browser on your computer and access my-harmony-card.
Open the config of card and add in the root of config `debug: true` to enable debugging
Save your config

#### Access Developer Tools:  
Click on the three vertical dots in the upper right corner of the Chrome window to open the menu.  
Navigate to More Tools.  
Select Developer Tools from the dropdown menu.  
Navigate to the Console Tab:

Once the Developer Tools window is open, click on the Console tab. This tab displays logs and diagnostic information about the current web page.

Inspect the Log Output:
In the Console tab, you will find the log output of the messages being sent. This is particularly useful when a button is pressed on the card.  
The log will display the following information:

*   Current Activity: The current action or state being executed.
*   device\_id: The identifier of the device to which the message is being sent.
*   Command: The command being sent.

Example output:  
`_button Pressed: DeviceID: 43632597 - Command: VolumeUp - entity_id: remote.harmony_wohnzimmer`

As well you can see the current Activitty and the used DeviceID:  
`Current Activity Fernsehen - DeviceID: 43935597`

**Have fun!**
