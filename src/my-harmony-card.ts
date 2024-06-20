import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { HomeAssistant, fireEvent } from 'custom-card-helpers';

import "./editor";
import { styles } from './styles'; // Importing styles
import { HomeAssistantFixed, WindowWithCards } from "./types";
import { CARD_TAG_NAME, CARD_VERSION, EDITOR_CARD_TAG_NAME } from "./const";

// Card information to be displayed in the console
const line1 = '  My Harmony Remote Control Card  ';
const line2 = `  version: ${CARD_VERSION}  `;
/* eslint no-console: 0 */
console.info(
  `%c${line1}\n%c${line2}`,
  'color: orange; font-weight: bold; background: black',
  'color: white; font-weight: bold; background: dimgray',
);

// Allow this card to appear in the card chooser menu
const windowWithCards = window as unknown as WindowWithCards;
windowWithCards.customCards = windowWithCards.customCards || [];
windowWithCards.customCards.push({
    type: CARD_TAG_NAME,
    name: "My Harmony Remote Control Card",
    preview: true,
    description: "Remote control card for Harmony Companion Remote Controllers"
});

// Define a custom element with the tag name specified in CARD_TAG_NAME
@customElement(CARD_TAG_NAME)
class MyHarmony extends LitElement {
    debug: boolean;

    public hass!: HomeAssistant;
    public config!: any;
    private _show_keypad: boolean;
    private _show_activity: boolean;
    private _show_vol_text: boolean;
    private volume_value: number;
    private _current_activity: string;
    private defaultDeviceId: number;
    private volumeDeviceId: number;

    static get styles() {
        return styles;  // Use of imported styles
    }

    static getConfigElement() {
        // Create and return an editor element
        return document.createElement(EDITOR_CARD_TAG_NAME);
    }

    public static getStubConfig(hass: HomeAssistantFixed) {
      // Capture all entities starting with "remote."
     let remoteEntities = Object.keys(hass.entities).filter(e => e.startsWith("remote."));

     // Auswahl der ersten gemeinsamen Entität oder ein Fallback
     const entity = remoteEntities.length > 0 ? remoteEntities[0] : ""

     return {
         "type": `custom:${CARD_TAG_NAME}`,
         "entity": entity
     }
   }

// Shot and Longpress Handling
   isButtonPressed = false;
    buttonTimeout: NodeJS.Timeout | null = null;

   // General handling, if button pressed
   _handleButtonDown(buttonActionShort: string, buttonActionLong: string) {
     this.isButtonPressed = true;
     this.buttonTimeout = setTimeout(() => {
         if (this.isButtonPressed) {
             if (buttonActionLong === "media") {
                 this._moreMediaPlayer();
             } else {
                 this._button(buttonActionLong); // If long pressed (> 500 ms)
             }
             this.isButtonPressed = false; // Reset condition
         }
     }, 500);
  }

    // General function by release of button
    _handleButtonUp(buttonActionShort: string) {
        if (this.isButtonPressed) {
            this._button(buttonActionShort); // In case of short press (< 500 ms)
        }

      // Cancel timeout
       if (this.buttonTimeout) {
           clearTimeout(this.buttonTimeout);
           this.buttonTimeout = null;
       }
      this.isButtonPressed = false; //Reset condition
   }


    // Define properties for the component
    static get properties() {
        return {
            hass: {},
            config: {},
            _show_keypad: {},
            _show_activity: {},
            _show_vol_text: {},
            _current_activity: { type: String },

        };
    }

    // Constructor to initialize default values
    constructor() {
        super();
        this._show_keypad = false;
        this._show_activity = false;
        this._show_vol_text = false;
        this.volume_value = 0;
        this._current_activity = '';
        this.debug = false;

    }

    // Open details for media_player
    private _moreMediaPlayer() {
        const activityConfig = this.config.activities[this._current_activity]
        const playerName = activityConfig.player_name;
        if (playerName) {
            fireEvent(this, 'hass-more-info', { entityId: playerName });
        }
        if (this.debug) {
          console.log('More Info media_player called', playerName);
        }
    }

// Render the component
    render() {
        const stateObj = this.hass.states[this.config.entity];
        const colorButtons = this.config.color_buttons;
        this._current_activity = stateObj.attributes.current_activity;

        const currentActivityConfig = this.config.activities?.[this._current_activity];
  if (currentActivityConfig) {
    // Standardmäßig wird die Geräte-ID für die aktuelle Aktivität verwendet
    this.defaultDeviceId = currentActivityConfig.device_id || null;

    // Überprüfen, ob eine separate Geräte-ID für Lautstärkebefehle definiert ist
    this.volumeDeviceId = currentActivityConfig.volume_device_id || this.defaultDeviceId;
  } else {
    // Wenn keine Konfiguration für die aktuelle Aktivität gefunden wurde, setzen wir die Geräte-IDs auf -1
    this.defaultDeviceId = -1;
    this.volumeDeviceId = -1;
    this._current_activity = "PowerOff";
  }

        // Determine color of PowerOff based on status
        const powerButtonColor = this._current_activity === 'PowerOff' ? 'red' : 'green';

      if (this.debug) {
        console.log(`Current Activity ${stateObj.attributes.current_activity} - DeviceID: ${currentActivityConfig.device_id} `);
      }

        const borderWidth = this.config.dimensions && this.config.dimensions.border_width ? this.config.dimensions.border_width : "1px";
        const scale = this.config.dimensions && this.config.dimensions.scale ? this.config.dimensions.scale : 1;
        const remoteWidth = Math.round(scale * 260) + "px";
        const tv_name_color = this.config.tv_name_color ? this.config.tv_name_color : "var(--primary-text-color)";
        const backgroundColor = this.config.colors && this.config.colors.background ? this.config.colors.background : "var( --ha-card-background, var(--card-background-color, white) )";
        const borderColor = this.config.colors && this.config.colors.border ? this.config.colors.border: "var(--primary-text-color)";
        const buttonColor = this.config.colors && this.config.colors.buttons ? this.config.colors.buttons : "var(--secondary-background-color)";
        const textColor = this.config.colors && this.config.colors.text ? this.config.colors.text : "var(--primary-text-color)";

    return html`

        <div class="card">
            <div class="page"
                 style="--remote-button-color: ${buttonColor};
                        --remote-text-color: ${textColor};
                        --remote-color: ${backgroundColor};
                        --remotewidth: ${remoteWidth};
                        --main-border-color: ${borderColor};
                        --main-border-width: ${borderWidth}">

                <!-- Power row -->
                ${this.config.name
                    ? html` <div class="tv_title" style="color:${tv_name_color}" >${this.config.name}</div> ` : ""}
                <div class="grid-container-power" style="--remotewidth: ${remoteWidth}">

                    <button class="btn-flat flat-high ripple"
                      @click=${() => this._show_activity = !this._show_activity}
                      title=${this.config.tooltip ? 'Configured Action Selector' : ''}>
                    ACT</button>

                    <button class="btn ripple"
                      @click=${() => this._select_activity('PowerOff')}>
                      <ha-icon icon="mdi:power" style="color: ${powerButtonColor};"/></button>
                      <button class="btn-flat flat-high ripple" @click=${() => this._show_keypad = !this._show_keypad} title=${this.config.tooltip ? 'Number Keypad' : ''}>
                    123</button>
                </div>

                ${this._show_activity ? html`

                    <!--  Activity Overlay  -->
                    <div class="grid-container-act">
                        <button class="ripple bnt-act-back"
                          @click=${() => this._show_activity = false}>
                          <ha-icon icon="mdi:undo-variant"/></button>

                        <p class="act_text"><b>ACTIONS</b></p>
                        <div class="grid-item-act">
                           ${stateObj.attributes.activity_list.map(activity => html`
                                <button class="${stateObj.attributes.current_activity === activity ? 'btn-act-on' : 'btn-act ripple overlay'}" @click=${() => {
                                    this._select_activity(activity);
                                    this._show_activity = false;
                               }}>${activity}</button>
                            `)}
                        </div>
                    </div>

                     <!--  Activity Overlay END  -->
                    ` : html`

                ${this._show_keypad ? html`
                    <!--  Keypad Overlay  -->
                    <div class="grid-container-keypad">
                         <button class="btn-keypad ripple" @click=${() => this._chanchange("1")}>1</button>
                         <button class="btn-keypad ripple" @click=${() => this._chanchange("2")}>2</button>
                         <button class="btn-keypad ripple" @click=${() => this._chanchange("3")}>3</button>
                         <button class="btn-keypad ripple" @click=${() => this._chanchange("4")}>4</button>
                         <button class="btn-keypad ripple" @click=${() => this._chanchange("5")}>5</button>
                         <button class="btn-keypad ripple" @click=${() => this._chanchange("6")}>6</button>
                         <button class="btn-keypad ripple" @click=${() => this._chanchange("7")}>7</button>
                         <button class="btn-keypad ripple" @click=${() => this._chanchange("8")}>8</button>
                         <button class="btn-keypad ripple" @click=${() => this._chanchange("9")}>9</button>
                         <button class="btn-keypad"></button>
                         <button class="btn-keypad ripple" @click=${() => this._chanchange("0")}>0</button>
                         <button class="btn-keypad"></button>
                    </div>
                ` : html`

                    <!-- DIRECTION PAD  -->
                    <div class="grid-container-cursor">
                      <div class="shape">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 79">
                          <path
                             d="m 30 15
                                a 10 10 0 0 1 20 0 a 15 15 0 0 0 15 15 a 10 10 0 0 1 0 20 a 15 15 0 0 0 -15 15
                                a 10 10 0 0 1 -20 0 a 15 15 0 0 0 -15 -15 a 10 10 0 0 1 0 -20 a 15 15 0 0 0 15 -15"
                             fill="var(--remote-button-color)"
                             stroke="#000000" stroke-width="0" />
                          </svg>
                      </div>
                         <button class="btn ripple item_guide"
                            @click=${() => this._button(this.config.activities[this._current_activity]?.Guide ?? 'Guide')}
                            title=${this.config.tooltip ? 'Guide' : ''}>
                         <ha-icon icon="mdi:television-guide"/> </button>

                         <button class="btn ripple item_up" style="background-color: transparent;"
                            @click=${() => this._button("DirectionUp")}><ha-icon icon="mdi:chevron-up"/></button>
                         <button class="btn ripple item_act"
                            @mousedown=${(e: MouseEvent) => this._handleButtonDown("Menu", "media")}
                            @mouseup=${(e: MouseEvent) => this._handleButtonUp("Menu")}
                            @touchstart=${(e: TouchEvent) => this._handleButtonDown("Menu", "media")}
                            @touchend=${(e: TouchEvent) => this._handleButtonUp("menu")}
                            title=${this.config.tooltip ? 'Menu/Mediaplayer' : ''}>
                         <ha-icon icon="mdi:silverware-fork-knife"/></button>

                         <button class="btn ripple item_2_sx" style="background-color: transparent;"
                            @click=${() => this._button("Left")}>
                         <ha-icon icon="mdi:chevron-left"/></button>

                         <div class="ok_button ripple item_2_c"
                            style="border: solid 2px ${backgroundColor}"
                            @click=${() => this._button(this.config.activities[this._current_activity]?.OK ?? 'OK')}>
                         OK</div>

                         <button class="btn ripple item_right"
                            style="background-color: transparent;"
                            @click=${() => this._button("DirectionRight")}>
                         <ha-icon icon="mdi:chevron-right"/></button>

                         <button class="btn ripple item_back"
                            @click=${() => this._button(this.config.activities[this._current_activity]?.Back ?? 'Back')}>
                         <ha-icon icon="mdi:undo-variant"/></button>

                         <button class="btn ripple item_down"
                            style="background-color: transparent;"
                            @click=${() => this._button("DirectionDown")}>
                         <ha-icon icon="mdi:chevron-down"/></button>

                         <button class="btn ripple item_exit" @click=${() => this._button("Exit")}>EXIT</button>
                       </div>
                       <!-- DIRECTION PAD END  -->
                            `}

                       <!-- Extra BUTTONS  -->
                       <div class="grid-container-extra">
                          ${this.config.activities && this._current_activity && this.config.activities[this._current_activity]
                            && this.config.activities[this._current_activity].Button1 ? html`
                              <button class="btn-flat ripple" style="height: calc(var(--remotewidth) / 8); width: 100%;"
                                  @click=${() => this._button(this.config.activities[this._current_activity].Button1.command)}
                                  title=${this.config.activities[this._current_activity].Button1.tooltip ||''}>
                                  ${this.config.activities[this._current_activity].Button1.name}
                              </button> `
                          : ""}

                          ${this.config.activities && this._current_activity && this.config.activities[this._current_activity]
                            && this.config.activities[this._current_activity].Button2 ? html`
                              <button class="btn-flat ripple" style="height: calc(var(--remotewidth) / 8); width: 100%;"
                                  @click=${() => this._button(this.config.activities[this._current_activity].Button2.command)}
                                  title=${this.config.activities[this._current_activity].Button2.tooltip ||''}>
                                  ${this.config.activities[this._current_activity].Button2.name}
                              </button> `
                          : ""}
                          ${this.config.activities && this._current_activity && this.config.activities[this._current_activity]
                            && this.config.activities[this._current_activity].Button3 ? html`
                              <button class="btn-flat ripple" style="height: calc(var(--remotewidth) / 8); width: 100%;"
                                  @click=${() => this._button(this.config.activities[this._current_activity].Button3.command)}
                                  title=${this.config.activities[this._current_activity].Button3.tooltip ||''}>
                                  ${this.config.activities[this._current_activity].Button3.name}
                              </button> `
                            : ""}
                          ${this.config.activities && this._current_activity && this.config.activities[this._current_activity]
                            && this.config.activities[this._current_activity].Button4 ? html`
                              <button class="btn-flat ripple" style="height: calc(var(--remotewidth) / 8); width: 100%;"
                                  @click=${() => this._button(this.config.activities[this._current_activity].Button4.command)}
                                   title=${this.config.activities[this._current_activity].Button4.tooltip ||''}>
                                   ${this.config.activities[this._current_activity].Button4.name}
                              </button> `
                          : ""}
                       </div>
                       <!--  Extra buttons end -->

                       <!-- COLORED BUTTONS -->
                       <div class="grid-container-color_btn">
                         <button class="btn-color ripple" style="background-color: red; height: calc(var(--remotewidth) / 12);" @click=${() => this._button("Red")}></button>
                         <button class="btn-color ripple" style="background-color: green; height: calc(var(--remotewidth) / 12);" @click=${() => this._button("Green")}></button>
                         <button class="btn-color ripple" style="background-color: yellow; height: calc(var(--remotewidth) / 12);" @click=${() => this._button("Yellow")}></button>
                         <button class="btn-color ripple" style="background-color: blue; height: calc(var(--remotewidth) / 12);" @click=${() => this._button("Blue")}></button>
                       </div>
                        <!-- COLORED BUTTONS END  -->


                    <div class="grid-container-volume-channel-control" >
                         <button class="btn ripple" style="border-radius: 50% 50% 0px 0px; margin: 0px auto 0px auto; height: 100%;"
                            @click=${() => this._button("VolumeUp")}>
                          <ha-icon icon="mdi:plus"/></button>

                         <button class="btn-flat flat-high ripple" style="margin-top: 0px; height: 65%;"
                            @click=${() => this._button(this.config.activities[this._current_activity]?.Home ?? 'Home')}
                            title=${this.config.tooltip ? 'Home' : ''}>
                           <ha-icon icon="mdi:home"></ha-icon> </button>

                         <button class="btn ripple" style="border-radius: 50% 50% 0px 0px; margin: 0px auto 0px auto; height: 100%;"
                            @click=${() => this._button("ChannelUp")}>
                          <ha-icon icon="mdi:chevron-up"/></button>

                         <button class="btn" style="border-radius: 0px; cursor: default; margin: 0px auto 0px auto; height: 100%;">
                          <ha-icon icon="mdi:volume-high"/></button>

                         <button class="btn ripple" Style="height: 100%;"
                            @click=${() => this._button("Mute")}><span>
                          <ha-icon icon="mdi:volume-mute"></span></button>

                         <button class="btn" style="border-radius: 0px; cursor: default; margin: 0px auto 0px auto; height: 100%;">
                          <ha-icon icon="mdi:parking"/></button>

                         <button class="btn ripple" style="border-radius: 0px 0px 50% 50%;  margin: 0px auto 0px auto; height: 100%;"
                            @click=${() => this._button("VolumeDown")}>
                          <ha-icon icon="mdi:minus"/></button>

                         <button class="btn-flat flat-high ripple" style="margin-bottom: 0px; height: 65%;"
                            @click=${() => this._button(this.config.activities[this._current_activity]?.Info ?? 'Info')}
                            title=${this.config.tooltip ? 'Info' : ''}>
                          <ha-icon icon="mdi:information-variant"/></button>

                         <button class="btn ripple" style="border-radius: 0px 0px 50% 50%;  margin: 0px auto 0px auto; height: 100%;"
                            @click=${() => this._button("ChannelDown")}>
                          <ha-icon icon="mdi:chevron-down"/></button>
                        </div>

                    <!--  MEDIA CONTROL -->
                    <div class="grid-container-media-control">
                         <button class="btn-flat flat-low ripple" @click=${() => this._button("Play")}><ha-icon icon="mdi:play"/></button>
                         <button class="btn-flat flat-low ripple"  @click=${() => this._button("Pause")}><ha-icon icon="mdi:pause"/></button>
                         <button class="btn-flat flat-low ripple"  @click=${() => this._button("Stop")}><ha-icon icon="mdi:stop"/></button>
                         <button class="btn-flat flat-low ripple"
                            @mousedown=${(e: MouseEvent) => this._handleButtonDown("Rewind", "SkipBack")}
                            @mouseup=${(e: MouseEvent) => this._handleButtonUp("Rewind")}
                            @touchstart=${(e: TouchEvent) => this._handleButtonDown("Rewind", "SkipBack")}
                            @touchend=${(e: TouchEvent) => this._handleButtonUp("Rewind")}>
                          <ha-icon icon="mdi:skip-backward" /> </button>

                         <button class="btn-flat flat-low ripple" style="color: red;" @click=${() => this._button("Record")}><ha-icon icon="mdi:record"/></button>

                         <button class="btn-flat flat-low ripple"
                           @mousedown=${(e: MouseEvent) => this._handleButtonDown("FastForward", "SkipForward")}
                           @mouseup=${(e: MouseEvent) => this._handleButtonUp("FastForward")}
                           @touchstart=${(e: TouchEvent) => this._handleButtonDown("FastForward", "SkipForward")}
                           @touchend=${(e: TouchEvent) => this._handleButtonUp("FastForward")}>
                          <ha-icon icon="mdi:skip-forward"></ha-icon> </button>
                    </div>
                        <!-- ################################# MEDIA CONTROL END ################################# -->
                        </div>
                    `}
            </div>
         </div> `; }

    //Send command to device
    _button(button) {
     const activityConfig = this.config.activities[this._current_activity];
     let deviceId;

      // Is there a special device vor Volume?
      if (button === 'VolumeUp' || button === 'VolumeDown') {
        deviceId = activityConfig.volume_device_id ? activityConfig.volume_device_id : activityConfig.device_id;
       }
        else {
         deviceId = activityConfig.device_id;
       }
       this.hass.callService('remote', 'send_command', { entity_id: this.config.entity, device: deviceId, command: button });
      if (this.debug) {
        console.log(`_button Pressed - DeviceId: ${deviceId} - Command: ${button} - entity_id: ${ this.config.entity}`);
        }
    }

    // Switch on specific activity
    _select_activity(activity) {
      this.hass.callService('remote', 'turn_on', { entity_id: this.config.entity, activity: activity });
    }

    // Channel change is implemented global in aioharmony, let's use it
    _chanchange(chan) {
       this.hass.callService('harmony', 'change_channel', { entity_id: this.config.entity, channel: chan });
    }

    // Set configuration for the card
    setConfig(config) {
        if (!config.entity) {
            throw new Error("Invalid configuration");
        }
        this.config = config;
    }

    // Get the card size
    getCardSize() {
        return 15;
    }

}
