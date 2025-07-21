import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import { HomeAssistant, fireEvent } from "custom-card-helpers";

import "./editor";
//import { generatePopupTemplate } from './popcard';
import { styles } from "./styles"; // Importing styles
import { HomeAssistantFixed, WindowWithCards } from "./types";
import { CARD_TAG_NAME, CARD_VERSION, EDITOR_CARD_TAG_NAME } from "./const";

// Card information to be displayed in the console
const line1 = "  My Harmony Remote Control Card  ";
const line2 = `  version: ${CARD_VERSION}  `;
/* eslint no-console: 0 */
console.info(
  `%c${line1}\n%c${line2}`,
  "color: orange; font-weight: bold; background: black",
  "color: white; font-weight: bold; background: dimgray"
);

// Allow this card to appear in the card chooser menu
const windowWithCards = window as unknown as WindowWithCards;
windowWithCards.customCards = windowWithCards.customCards || [];
windowWithCards.customCards.push({
  type: CARD_TAG_NAME,
  name: "My Harmony Remote Control Card",
  preview: true,
  description: "Remote control card for Harmony Companion Remote Controllers",
});

// Define a custom element with the tag name specified in CARD_TAG_NAME
@customElement(CARD_TAG_NAME)
class MyHarmony extends LitElement {
  debug: boolean;
  public hass!: HomeAssistant;
  public config!: any;
  private _show_keypad: boolean;
  private _show_activity: boolean;
  private _current_activity: string;
  private _dialogOpen: boolean;

  static get styles() {
    return styles; // Use of imported styles
  }

  static getConfigElement() {
    // Create and return an editor element
    return document.createElement(EDITOR_CARD_TAG_NAME);
  }

  public static getStubConfig(hass: HomeAssistantFixed) {
    // Capture all entities starting with "remote."
    let remoteEntities = Object.keys(hass.entities).filter((e) =>
      e.startsWith("remote.")
    );

    // Select of the first common entity or fallback
    const entity = remoteEntities.length > 0 ? remoteEntities[0] : "";

    return {
      type: `custom:${CARD_TAG_NAME}`,
      entity: entity,
    };
  }

  _getFavorites(): {
    number?: string;
    service?: {
      name: string;
      data?: any;
      target?: any;
      [key: string]: any; // Weitere mögliche Service-Parameter
    };
    contextPath?: string;
    image: string;
  }[] {
    const currentActivityConfig =
      this.config.activities?.[this._current_activity];
    const favorites = currentActivityConfig?.favorites || [];
  
    return favorites.map((favorite, index) => {
      const { number, service, image, data, target, ...otherParams } = favorite;
  
      return {
        number,
        service: service
          ? {
              name: typeof service === 'string' ? service : service.name,// Service-Name
              data: service.data,           // `data` als Unterobjekt von `service`
              target: service.target,         // `target` als Unterobjekt von `service`
              ...otherParams  // Weitere Parameter als Unterobjekte von `service`
            }
          : undefined,
        contextPath: service
          ? `activities.${this._current_activity}.favorites[${index}]`
          : undefined,
        image,
      };
    });
  }
  

  // Shot and Longpress button handling
  public isButtonPressed = false;
  buttonTimeout: NodeJS.Timeout | null = null;

  //Handling Keypad button pressed
  _handle123ButtonDown(e) {
    if (e.type === "touchstart" && e.touches.length > 1) {
      return; // Verhindert mehrere gleichzeitige Touches
    }
    e.preventDefault();
    this.isButtonPressed = true;
    this.buttonTimeout = setTimeout(() => {
      this._popcard();
      this.isButtonPressed = false;
    }, 500);
  }

  _handle123ButtonUp(e) {
    e.preventDefault();
    if (this.isButtonPressed) {
      this._show_keypad = !this._show_keypad;
    }
    if (this.buttonTimeout) {
      clearTimeout(this.buttonTimeout);
      this.buttonTimeout = null;
    }
    this.isButtonPressed = false;
  }

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
    this._current_activity = "";
    this.debug = false;
    this._dialogOpen = false;
  }

  //Toggle popup dialog
  _toggleDialog() {
    this._dialogOpen = !this._dialogOpen;
    this.requestUpdate();
  }
  // Open favorites, if defines
  _popcard() {
    this._dialogOpen = true;
    this.requestUpdate();
  }
  //Open properties of media player if defined
  private _moreMediaPlayer() {
    const activityConfig = this.config.activities[this._current_activity];
    const playerName = activityConfig.player_name;
    if (playerName) {
      fireEvent(this, "hass-more-info", { entityId: playerName });
    }
    if (this.debug) {
      console.log("More Info media_player called", playerName);
    }
  }

  _renderTable() {
    const favorites = this._getFavorites();
    const favsize = this.config.favsize ? this.config.favsize : 50;
    const faviconpath = this.config.faviconpath
      ? this.config.faviconpath
      : "/local/community/my-harmony-card/stations/";

    return html`
      <!-- <tbody>  -->
      <!-- <div class="popup-container"> -->
      ${favorites.map((favorite) => {
        if (favorite.service && this.debug === true) {
          console.log(
            `Func: _renderTable.Service: ${JSON.stringify(favorite.service)}` 
          );
          
        }
        return html`
          ${favorite.number
            ? html`
                <img
                  style="max-height: ${favsize}px;"
                  src="${faviconpath}${favorite.image}"
                  alt="${favorite.number}"
                  @click=${() => this._chanchange(favorite.number)}
                />
              `
            : favorite.service
              ? html`
              <!-- ANCHOR v1.40 -->
                <img
                  style="max-height: ${favsize}px;"
                  src="${faviconpath}${favorite.image}"
                  
                  @click=${() => this._service(favorite.service)}
                />
                `
              : ""}
        `;
      })}
      <!-- </tbody>-->
    `;
  }

  //alt="${favorite.service?.name || 'Default Alt Text'}"
  // Render the component
  render() {
    const stateObj = this.hass.states[this.config.entity];
    this._current_activity = stateObj.attributes.current_activity;

    const currentActivityConfig =
      this.config.activities?.[this._current_activity];
    const powerButtonColor =
      this._current_activity === "PowerOff" ? "red" : "green";

    if (this.debug) {
      console.log(
        `Func: render - Current Activity ${stateObj?.attributes?.current_activity || 'N/A'} - DeviceID: ${currentActivityConfig?.device_id || 'N/A'}`
      );
    }

    const borderWidth =
      this.config.dimensions && this.config.dimensions.border_width
        ? this.config.dimensions.border_width
        : "1px";
    const scale =
      this.config.dimensions && this.config.dimensions.scale
        ? this.config.dimensions.scale
        : 1;
    const remoteWidth = Math.round(scale * 260) + "px";
    //const tv_name_color = this.config.tv_name_color ? this.config.tv_name_color : "var(--primary-text-color)";
    const backgroundColor =
      this.config.colors && this.config.colors.background
        ? this.config.colors.background
        : "var( --ha-card-background, var(--card-background-color, white) )";
    const borderColor =
      this.config.colors && this.config.colors.border
        ? this.config.colors.border
        : "var(--primary-text-color)";
    const buttonColor =
      this.config.colors && this.config.colors.buttons
        ? this.config.colors.buttons
        : "var(--secondary-background-color)";
    const textColor =
      this.config.colors && this.config.colors.text
        ? this.config.colors.text
        : "var(--primary-text-color)";
    const popupColor =
      this.config.colors && this.config.colors.popup
        ? this.config.colors.popup
        : "var(--popup-color)";

    return html`

        <div class="card">
            <div class="page"
                 style="--remote-button-color: ${buttonColor};
                        --remote-text-color: ${textColor};
                        --remote-color: ${backgroundColor};
                        --popup-color: ${popupColor};
                        --remotewidth: ${remoteWidth};
                        --main-border-color: ${borderColor};
                        --main-border-width: ${borderWidth};
                        --scale: ${scale}">

                <!-- Power row -->
                ${this.config.name ? html` <div class="tv_title" style="color:${textColor}">${this.config.name}</div> ` : ""}
                    
                <button class="btn-act-action button-style" style="color:${textColor}"
                  @click=${() => (this._show_activity = !this._show_activity)} 
                  title=${this.config.tooltip ? "Action Selector" : ""}>
                  <span class="scrolling-text ${this._current_activity.length > 19 ? "btn-act-scroll" : ""}">
                    ${this._current_activity}
                  </span>
                </button>
                <div class="grid-container-power" style="--remotewidth: ${remoteWidth}">                            
                <!-- FIXME New Function for this button is waiting?-->
                ${(() => {
                  const config = this.config.Special;
                  return config
                    ? html` <button
                        class="btn ripple  button-style"
                        @click=${() => {
                          if (config.service) {
                            
                            this._service(config.service);
                          } else if (config.command) {
                            this._button(config.command);
                          }
                        }}
                        title=${config.tooltip || ""}
                      >
                        ${config.icon
                          ? html`<ha-icon
                              class="mdi-extra button-style"
                              icon="${config.icon}"
                            ></ha-icon>`
                          : config.name}
                      </button>`
                    : html` <button
                        class="btn ripple button-style"
                        style="background: transparent;"
                        disabled
                      ></button>`;
                })()}
                    <button class="btn ripple button-style"
                      @click=${() => this._select_activity("PowerOff")}>
                      <ha-icon class="msc" icon="mdi:power"  style="color: ${powerButtonColor};"/
                      title=${this.config.tooltip ? this._current_activity : "Off"}></button>

                    <button class="btn-flat flat-high ripple btn-text button-style"
                      @mousedown=${this._handle123ButtonDown}
                      @mouseup=${this._handle123ButtonUp}
                      @touchstart=${this._handle123ButtonDown}
                      @touchend=${this._handle123ButtonUp}
                      @touchcancel=${this._handle123ButtonUp}  // Füge touchcancel hinzu, um eventuelle Unterbrechungen zu behandeln
                      title=${this.config.tooltip ? "Number Keypad" : ""}>
                      123
                    </button>


                </div>
<!-- Buttons row -->
                       <!-- Extra BUTTONS #2  -->
                       ${(() => {
                         const hasButtons =
                           this.config?.ButtonA ||
                           this.config?.ButtonB ||
                           this.config?.ButtonC ||
                           this.config?.ButtonD;
                         return hasButtons
                           ? html`
                               <div class="grid-container-extra_2">
                                 ${(() => {
                                   const config = this.config.ButtonA;
                                   return config
                                     ? html` <button
                                         class="ripple btn-extra button-style"
                                         @click=${() => {
                                           if (config.service) {
                                             this._service(
                                               config.service
                                             );
                                           } else if (config.command) {
                                             this._button(config.command);
                                           }
                                         }}
                                         title=${config.tooltip || ""}
                                       >
                                         ${config.icon
                                           ? html`<ha-icon
                                               class="mdi-extra button-style"
                                               icon="${config.icon}"
                                             ></ha-icon>`
                                           : config.name}
                                       </button>`
                                     : "";
                                 })()}
                                 ${(() => {
                                   const config = this.config.ButtonB;
                                   return config
                                     ? html` <button
                                         class="ripple btn-extra button-style"
                                         @click=${() => {
                                           if (config.service) {
                                             this._service(
                                               config.service
                                             );
                                           } else if (config.command) {
                                             this._button(config.command);
                                           }
                                         }}
                                         title=${config.tooltip || ""}
                                       >
                                         ${config.icon
                                           ? html`<ha-icon
                                               class="mdi-extra button-style"
                                               icon="${config.icon}"
                                             ></ha-icon>`
                                           : config.name}
                                       </button>`
                                     : "";
                                 })()}
                                 ${(() => {
                                   const config = this.config.ButtonC;
                                   return config
                                     ? html` <button
                                         class="ripple btn-extra button-style"
                                         @click=${() => {
                                           if (config.service) {
                                             this._service(
                                               config.service
                                             );
                                           } else if (config.command) {
                                             this._button(config.command);
                                           }
                                         }}
                                         title=${config.tooltip || ""}
                                       >
                                         ${config.icon
                                           ? html`<ha-icon
                                               class="mdi-extra button-style"
                                               icon="${config.icon}"
                                             ></ha-icon>`
                                           : config.name}
                                       </button>`
                                     : "";
                                 })()}
                                 ${(() => {
                                   const config = this.config.ButtonD;
                                   return config
                                     ? html` <button
                                         class="ripple btn-extra button-style"
                                         @click=${() => {
                                           if (config.service) {
                                             this._service(
                                               config.service
                                             );
                                           } else if (config.command) {
                                             this._button(config.command);
                                           }
                                         }}
                                         title=${config.tooltip || ""}
                                       >
                                         ${config.icon
                                           ? html`<ha-icon
                                               class="mdi-extra button-style"
                                               icon="${config.icon}"
                                             ></ha-icon>`
                                           : config.name}
                                       </button>`
                                     : "";
                                 })()}
                               </div>
                             `
                           : html``;
                       })()}                       
                       <!--  Extra buttons end -->
<!-- Remote buttons -->


                ${
                  this._show_activity
                    ? html`
                        <!--  Activity Overlay  -->
                        <div class="grid-container-act">
                          <button
                            class="ripple bnt-act-back button-style"
                            @click=${() => (this._show_activity = false)}
                          >
                            <ha-icon icon="mdi:undo-variant" />
                          </button>

                          <p class="act_text" style="color:${textColor}">
                            <b>ACTIONS</b>
                          </p>

                          <div class="grid-item-act">
                            ${stateObj.attributes.activity_list.map(
                              (activity) => html`
                                <button
                                  class="button-style 
                                          ${stateObj.attributes
                                    .current_activity === activity
                                    ? "btn-act-on"
                                    : "btn-act ripple overlay"}"
                                  @click=${() => {
                                    this._select_activity(activity);
                                    this._show_activity = false;
                                  }}
                                >
                                  <span
                                    class="${activity.length > 18
                                      ? "btn-act-scroll"
                                      : ""}"
                                  >
                                    <div class="scrolling-text">
                                      ${activity}
                                    </div>
                                  </span>
                                </button>
                              `
                            )}
                          </div>
                        </div>

                        <!--  Activity Overlay END  -->
                      `
                    : html`

                ${
                  this._show_keypad
                    ? html`
                        <!--  Keypad Overlay  -->
                        <div class="grid-container-keypad">
                          <button
                            class="btn-keypad ripple button-style"
                            @click=${() => this._chanchange("1")}
                          >
                            1
                          </button>
                          <button
                            class="btn-keypad button-style ripple"
                            @click=${() => this._chanchange("2")}
                          >
                            2
                          </button>
                          <button
                            class="btn-keypad button-style ripple"
                            @click=${() => this._chanchange("3")}
                          >
                            3
                          </button>
                          <button
                            class="btn-keypad button-style ripple"
                            @click=${() => this._chanchange("4")}
                          >
                            4
                          </button>
                          <button
                            class="btn-keypad button-style ripple"
                            @click=${() => this._chanchange("5")}
                          >
                            5
                          </button>
                          <button
                            class="btn-keypad button-style ripple"
                            @click=${() => this._chanchange("6")}
                          >
                            6
                          </button>
                          <button
                            class="btn-keypad button-style ripple"
                            @click=${() => this._chanchange("7")}
                          >
                            7
                          </button>
                          <button
                            class="btn-keypad button-style ripple"
                            @click=${() => this._chanchange("8")}
                          >
                            8
                          </button>
                          <button
                            class="btn-keypad button-style ripple"
                            @click=${() => this._chanchange("9")}
                          >
                            9
                          </button>
                          <button class="btn-keypad"></button>
                          <button
                            class="btn-keypad button-style ripple"
                            @click=${() => this._chanchange("0")}
                          >
                            0
                          </button>
                          <button class="btn-keypad"></button>
                        </div>
                      `
                    : html`
                        <!-- Call Popup Window -->
                        ${this._dialogOpen
                          ? html`
                              <ha-dialog
                                class="popup-dialog"
                                open
                                @closed="${this._toggleDialog}"
                              >
                                ${this._renderTable()}
                                <hr />
                                <mwc-button
                                  slot="primaryAction"
                                  dialogAction="close"
                                >
                                  Close
                                </mwc-button>
                              </ha-dialog>
                            `
                          : ""}

                        <!-- DIRECTION PAD  -->
                        <div class="grid-container-cursor">
                          <div class="shape">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 80 79"
                            >
                              <path
                                d="m 30 15
                                a 10 10 0 0 1 20 0 a 15 15 0 0 0 15 15 a 10 10 0 0 1 0 20 a 15 15 0 0 0 -15 15
                                a 10 10 0 0 1 -20 0 a 15 15 0 0 0 -15 -15 a 10 10 0 0 1 0 -20 a 15 15 0 0 0 15 -15"
                                fill="var(--remote-button-color)"
                                stroke="#000000"
                                stroke-width="0"
                              />
                            </svg>
                          </div>
                          <button
                            class="btn ripple item_guide button-style"
                            @click=${() =>
                              this._button(
                                this.config.activities[this._current_activity]
                                  ?.Guide ?? "Guide"
                              )}
                            title=${this.config.tooltip ? "Guide" : ""}
                          >
                            <ha-icon class="msc" icon="mdi:television-guide" />
                          </button>

                          <button
                            class="btn ripple item_up button-style"
                            @click=${() => this._button("DirectionUp")}
                          >
                            <ha-icon class="msc" icon="mdi:chevron-up" />
                          </button>
                          <!-- ANCHOR Menu-->
                          <button
                            class="btn ripple item_act button-style"
                            @mousedown=${(e: MouseEvent) =>
                              this._handleButtonDown(this.config.activities[this._current_activity]?.Menu ?? "Menu", "media")}
                            @mouseup=${(e: MouseEvent) =>
                              this._handleButtonUp(this.config.activities[this._current_activity]?.Menu ?? "Menu")}
                            @touchstart=${(e: TouchEvent) =>
                              this._handleButtonDown(this.config.activities[this._current_activity]?.Menu ?? "Menu", "media")}
                            @touchend=${(e: TouchEvent) =>
                              this._handleButtonUp(this.config.activities[this._current_activity]?.Menu ?? "Menu")}
                            title=${this.config.tooltip
                              ? "Menu/Mediaplayer"
                              : ""}
                          >
                            <ha-icon
                              class="msc"
                              icon="mdi:silverware-fork-knife"
                            />
                          </button>

                          <button
                            class="btn ripple item_2_sx button-style"
                            @click=${() => this._button("DirectionLeft")}
                          >
                            <ha-icon class="msc " icon="mdi:chevron-left" />
                          </button>

                          <div
                            class="ok_button ripple item_2_c button-style"
                            style="border: solid 2px ${backgroundColor}"
                            @click=${() =>
                              this._button(
                                this.config.activities[this._current_activity]
                                  ?.OK ?? "OK"
                              )}
                          >
                            OK
                          </div>

                          <button
                            class="btn ripple item_right button-style"
                            @click=${() => this._button("DirectionRight")}
                          >
                            <ha-icon class="msc" icon="mdi:chevron-right" />
                          </button>

                          <button
                            class="btn ripple item_back button-style"
                            @click=${() =>
                              this._button(
                                this.config.activities[this._current_activity]
                                  ?.Back ?? "Back"
                              )}
                          >
                            <ha-icon class="msc" icon="mdi:undo-variant" />
                          </button>

                          <button
                            class="btn ripple item_down button-style"
                            @click=${() => this._button("DirectionDown")}
                          >
                            <ha-icon class="msc" icon="mdi:chevron-down" />
                          </button>

                          <button
                            class="btn ripple item_exit button-style"
                            @click=${() => this._button("Exit")}
                          >
                            EXIT
                          </button>
                        </div>
                      `
                }
                       <!-- DIRECTION PAD END  -->

                       <!-- Extra BUTTONS  -->
                       ${(() => {
                         const activityConfig =
                           this.config.activities?.[this._current_activity];
                         const hasButtons =
                           activityConfig?.Button1 ||
                           activityConfig?.Button2 ||
                           activityConfig?.Button3 ||
                           activityConfig?.Button4;
                         return hasButtons
                           ? html`
                               <div class="grid-container-extra">
                                 ${(() => {
                                   const activityConfig =
                                     this.config.activities?.[
                                       this._current_activity
                                     ];
                                   const buttonConfig = activityConfig?.Button1;
                                   if (!buttonConfig) return html``;
                                   return html`
                                     <button
                                       class="ripple btn-extra button-style"
                                       @click=${() => {
                                         if (buttonConfig.service) {
                                           this._service(
                                             buttonConfig.service
                                           );
                                         } else if (buttonConfig.command) {
                                           this._button(buttonConfig.command);
                                         }
                                       }}
                                       title=${buttonConfig.tooltip || ""}
                                     >
                                       ${buttonConfig.icon
                                         ? html`<ha-icon
                                             class="mdi-extra button-style"
                                             icon="${buttonConfig.icon}"
                                           ></ha-icon>`
                                         : buttonConfig.name}
                                     </button>
                                   `;
                                 })()}
                                 ${(() => {
                                   const activityConfig =
                                     this.config.activities?.[
                                       this._current_activity
                                     ];
                                   const buttonConfig = activityConfig?.Button2;
                                   if (!buttonConfig) return html``;
                                   return html`
                                     <button
                                       class="ripple btn-extra button-style"
                                       @click=${() => {
                                         if (buttonConfig.service) {
                                           this._service(
                                             buttonConfig.service
                                           );
                                         } else if (buttonConfig.command) {
                                           this._button(buttonConfig.command);
                                         }
                                       }}
                                       title=${buttonConfig.tooltip || ""}
                                     >
                                       ${buttonConfig.icon
                                         ? html`<ha-icon
                                             class="mdi-extra button-style"
                                             icon="${buttonConfig.icon}"
                                           ></ha-icon>`
                                         : buttonConfig.name}
                                     </button>
                                   `;
                                 })()}
                                 ${(() => {
                                   const activityConfig =
                                     this.config.activities?.[
                                       this._current_activity
                                     ];
                                   const buttonConfig = activityConfig?.Button3;
                                   if (!buttonConfig) return html``;
                                   return html`
                                     <button
                                       class="ripple btn-extra button-style"
                                       @click=${() => {
                                         if (buttonConfig.service) {
                                           this._service(
                                             buttonConfig.service
                                           );
                                         } else if (buttonConfig.command) {
                                           this._button(buttonConfig.command);
                                         }
                                       }}
                                       title=${buttonConfig.tooltip || ""}
                                     >
                                       ${buttonConfig.icon
                                         ? html`<ha-icon
                                             class="mdi-extra button-style"
                                             icon="${buttonConfig.icon}"
                                           ></ha-icon>`
                                         : buttonConfig.name}
                                     </button>
                                   `;
                                 })()}
                                 ${(() => {
                                   const activityConfig =
                                     this.config.activities?.[
                                       this._current_activity
                                     ];
                                   const buttonConfig = activityConfig?.Button4;
                                   if (!buttonConfig) return html``;
                                   return html`
                                     <button
                                       class="ripple btn-extra button-style"
                                       @click=${() => {
                                         if (buttonConfig.service) {
                                           this._service(
                                             buttonConfig.service
                                           );
                                         } else if (buttonConfig.command) {
                                           this._button(buttonConfig.command);
                                         }
                                       }}
                                       title=${buttonConfig.tooltip || ""}
                                     >
                                       ${buttonConfig.icon
                                         ? html`<ha-icon
                                             class="mdi-extra button-style"
                                             icon="${buttonConfig.icon}"
                                           ></ha-icon>`
                                         : buttonConfig.name}
                                     </button>
                                   `;
                                 })()}
                               </div>
                             `
                           : html``;
                       })()}
                       <!--  Extra buttons end -->
                       <!-- Extra BUTTONS  -->
                       ${(() => {
                         const activityConfig =
                           this.config.activities?.[this._current_activity];
                         const hasButtons =
                           activityConfig?.Button5 ||
                           activityConfig?.Button6 ||
                           activityConfig?.Button7 ||
                           activityConfig?.Button8;
                         return hasButtons
                           ? html`
                               <div class="grid-container-extra">
                                 ${(() => {
                                   const activityConfig =
                                     this.config.activities?.[
                                       this._current_activity
                                     ];
                                   const buttonConfig = activityConfig?.Button5;
                                   if (!buttonConfig) return html``;
                                   return html`
                                     <button
                                       class="ripple btn-extra button-style"
                                       @click=${() => {
                                         if (buttonConfig.service) {
                                           this._service(
                                             buttonConfig.service
                                           );
                                         } else if (buttonConfig.command) {
                                           this._button(buttonConfig.command);
                                         }
                                       }}
                                       title=${buttonConfig.tooltip || ""}
                                     >
                                       ${buttonConfig.icon
                                         ? html`<ha-icon
                                             class="mdi-extra button-style"
                                             icon="${buttonConfig.icon}"
                                           ></ha-icon>`
                                         : buttonConfig.name}
                                     </button>
                                   `;
                                 })()}
                                 ${(() => {
                                   const activityConfig =
                                     this.config.activities?.[
                                       this._current_activity
                                     ];
                                   const buttonConfig = activityConfig?.Button6;
                                   if (!buttonConfig) return html``;
                                   return html`
                                     <button
                                       class="ripple btn-extra button-style"
                                       @click=${() => {
                                         if (buttonConfig.service) {
                                           this._service(
                                             buttonConfig.service
                                           );
                                         } else if (buttonConfig.command) {
                                           this._button(buttonConfig.command);
                                         }
                                       }}
                                       title=${buttonConfig.tooltip || ""}
                                     >
                                       ${buttonConfig.icon
                                         ? html`<ha-icon
                                             class="mdi-extra button-style"
                                             icon="${buttonConfig.icon}"
                                           ></ha-icon>`
                                         : buttonConfig.name}
                                     </button>
                                   `;
                                 })()}
                                 ${(() => {
                                   const activityConfig =
                                     this.config.activities?.[
                                       this._current_activity
                                     ];
                                   const buttonConfig = activityConfig?.Button7;
                                   if (!buttonConfig) return html``;
                                   return html`
                                     <button
                                       class="ripple btn-extra button-style"
                                       @click=${() => {
                                         if (buttonConfig.service) {
                                           this._service(
                                             buttonConfig.service
                                           );
                                         } else if (buttonConfig.command) {
                                           this._button(buttonConfig.command);
                                         }
                                       }}
                                       title=${buttonConfig.tooltip || ""}
                                     >
                                       ${buttonConfig.icon
                                         ? html`<ha-icon
                                             class="mdi-extra button-style"
                                             icon="${buttonConfig.icon}"
                                           ></ha-icon>`
                                         : buttonConfig.name}
                                     </button>
                                   `;
                                 })()}
                                 ${(() => {
                                   const activityConfig =
                                     this.config.activities?.[
                                       this._current_activity
                                     ];
                                   const buttonConfig = activityConfig?.Button8;
                                   if (!buttonConfig) return html``;
                                   return html`
                                     <button
                                       class="ripple btn-extra button-style"
                                       @click=${() => {
                                         if (buttonConfig.service) {
                                           this._service(
                                             buttonConfig.service
                                           );
                                         } else if (buttonConfig.command) {
                                           this._button(buttonConfig.command);
                                         }
                                       }}
                                       title=${buttonConfig.tooltip || ""}
                                     >
                                       ${buttonConfig.icon
                                         ? html`<ha-icon
                                             class="mdi-extra button-style"
                                             icon="${buttonConfig.icon}"
                                           ></ha-icon>`
                                         : buttonConfig.name}
                                     </button>
                                   `;
                                 })()}
                               </div>
                             `
                           : html``;
                       })()}
                       <!--  Extra buttons_2 end -->                       
                       

                       <!-- COLORED BUTTONS -->
                        ${(() => {
                          const activateCButtons =
                            this.config.activities?.[this._current_activity]
                              ?.activateCButtons;
                          return activateCButtons
                            ? html`
                                <div class="grid-container-color_btn">
                                  <button
                                    class="btn-color ripple btn-red button-style"
                                    style="height: calc(var(--remotewidth) / 9);"
                                    @click=${() => this._button("Red")}
                                  ></button>
                                  <button
                                    class="btn-color ripple btn-green button-style"
                                    style="height: calc(var(--remotewidth) / 9);"
                                    @click=${() => this._button("Green")}
                                  ></button>
                                  <button
                                    class="btn-color ripple btn-yellow button-style"
                                    style="height: calc(var(--remotewidth) / 9);"
                                    @click=${() => this._button("Yellow")}
                                  ></button>
                                  <button
                                    class="btn-color ripple btn-blue button-style"
                                    style="height: calc(var(--remotewidth) / 9);"
                                    @click=${() => this._button("Blue")}
                                  ></button>
                                </div>
                              `
                            : html``;
                        })()} 
                        <!-- COLORED BUTTONS END  -->


                    <div class="grid-container-volume-channel-control" >
                         <button class="btn ripple button-style" style="border-radius: 50% 50% 0px 0px; margin: 0px auto 0px auto; height: 100%;"
                            @click=${() => this._button("VolumeUp")}>
                          <ha-icon class="msc" icon="mdi:plus"/></button>

                         <button class="btn-flat flat-high ripple button-style" style="margin-top: 0px; height: 65%;"
                            @click=${() => this._button(this.config.activities[this._current_activity]?.Home ?? "Home")}
                            title=${this.config.tooltip ? "Home" : ""}>
                           <ha-icon class="msc" icon="mdi:home" ></ha-icon> </button>

                         <button class="btn ripple button-style" style="border-radius: 50% 50% 0px 0px; margin: 0px auto 0px auto; height: 100%;"
                            @click=${() => this._button("ChannelUp")}>
                          <ha-icon class="msc" icon="mdi:chevron-up"/></button>

                         <button class="btn" style="border-radius: 0px; cursor: default; margin: 0px auto 0px auto; height: 100%;">
                          <ha-icon class="msc" icon="mdi:volume-high"/></button>

                         <button class="btn ripple button-style" Style="height: 100%;"
                            @click=${() => this._button("Mute")}><span>
                          <ha-icon class="msc" icon="mdi:volume-mute"></span></button>

                         <button class="btn" style="border-radius: 0px; cursor: default; margin: 0px auto 0px auto; height: 100%;">
                          <ha-icon class="msc" icon="mdi:parking"/></button>

                         <button class="btn ripple button-style" style="border-radius: 0px 0px 50% 50%;  margin: 0px auto 0px auto; height: 100%;"
                            @click=${() => this._button("VolumeDown")}>
                          <ha-icon class="msc" icon="mdi:minus"/></button>

                         <button class="btn-flat flat-high ripple button-style" style="margin-bottom: 0px; height: 65%;"
                            @click=${() => this._button(this.config.activities[this._current_activity]?.Info ?? "Info")}
                            title=${this.config.tooltip ? "Info" : ""}>
                          <ha-icon class="msc" icon="mdi:information-variant"/></button>

                         <button class="btn ripple button-style" style="border-radius: 0px 0px 50% 50%;  margin: 0px auto 0px auto; height: 100%;"
                            @click=${() => this._button("ChannelDown")}>
                          <ha-icon class="msc" icon="mdi:chevron-down"/></button>
                        </div>

                    <!--  MEDIA CONTROL -->
                    <div class="grid-container-media-control">
                         <button class="btn-flat flat-low ripple button-style" @click=${() => this._button("Play")}><ha-icon class="msc" icon="mdi:play"/></button>
                         <button class="btn-flat flat-low ripple button-style"  @click=${() => this._button("Pause")}><ha-icon class="msc" icon="mdi:pause"/></button>
                         <button class="btn-flat flat-low ripple button-style"  @click=${() => this._button("Stop")}><ha-icon class="msc" icon="mdi:stop"/></button>
                         <button class="btn-flat flat-low ripple button-style"
                            @mousedown=${(e: MouseEvent) => this._handleButtonDown("Rewind", "SkipBack")}
                            @mouseup=${(e: MouseEvent) => this._handleButtonUp("Rewind")}
                            @touchstart=${(e: TouchEvent) => this._handleButtonDown("Rewind", "SkipBack")}
                            @touchend=${(e: TouchEvent) => this._handleButtonUp("Rewind")}>
                          <ha-icon class="msc" icon="mdi:skip-backward" /> </button>

                         <button class="btn-flat flat-low ripple button-style" style="color: red;" @click=${() => this._button("Record")}><ha-icon class="msc" icon="mdi:record"/></button>

                         <button class="btn-flat flat-low ripple button-style"
                           @mousedown=${(e: MouseEvent) => this._handleButtonDown("FastForward", "SkipForward")}
                           @mouseup=${(e: MouseEvent) => this._handleButtonUp("FastForward")}
                           @touchstart=${(e: TouchEvent) => this._handleButtonDown("FastForward", "SkipForward")}
                           @touchend=${(e: TouchEvent) => this._handleButtonUp("FastForward")}>
                          <ha-icon class="msc" icon="mdi:skip-forward"></ha-icon> </button>
                    </div>
                        <!-- ################################# MEDIA CONTROL END ################################# -->
                        </div>
                    `
                }
            </div>
         </div> `;
  }

  //Send command to device
  _button(button) {
      const activityConfig = this.config.activities[this._current_activity];
      let deviceId;

      // Set deviceId for each button type
      switch (button) {
          case "VolumeUp":
          case "VolumeDown":
          case "Mute":
              deviceId = activityConfig.volume_device_id
                  ? activityConfig.volume_device_id
                  : undefined;
              break;
          case "ChannelUp":
          case "ChannelDown":
              deviceId = activityConfig.channel_device_id
                  ? activityConfig.channel_device_id
                  : undefined;
              break;
          case "Guide":
              deviceId = activityConfig.guide_device_id
                  ? activityConfig.guide_device_id
                  : undefined;
              break;
          case "Menu":
              deviceId = activityConfig.menu_device_id
                  ? activityConfig.menu_device_id
                  : undefined;
              break;
          case "OK":
              deviceId = activityConfig.ok_device_id
                  ? activityConfig.ok_device_id
                  : undefined;
              break;
          case "Back":
              deviceId = activityConfig.back_device_id
                  ? activityConfig.back_device_id
                  : undefined;
              break;
          case "Exit":
              deviceId = activityConfig.exit_device_id
                  ? activityConfig.exit_device_id
                  : undefined;
              break;
          case "DirectionUp":
          case "DirectionDown":
          case "DirectionLeft":
          case "DirectionRight":
              deviceId = activityConfig.direction_device_id
                  ? activityConfig.direction_device_id
                  : undefined;
              break;
          case "Home":
              deviceId = activityConfig.home_device_id
                  ? activityConfig.home_device_id
                  : undefined;
              break;
          case "Info":
              deviceId = activityConfig.info_device_id
                  ? activityConfig.info_device_id
                  : undefined;
              break;
          case "Play":
          case "Pause":
          case "Stop":
          case "Rewind":
          case "FastForward":
          case "Record":
              deviceId = activityConfig.media_device_id
                  ? activityConfig.media_device_id
                  : undefined;
              break;
          case "Red":
          case "Green":
          case "Yellow":
          case "Blue":
              deviceId = activityConfig.color_device_id
                  ? activityConfig.color_device_id
                  : undefined;
              break;
      }

      deviceId = deviceId || activityConfig.alt_device_id || activityConfig.device_id;

      this.hass.callService("remote", "send_command", {
          entity_id: this.config.entity,
          device: deviceId,
          command: button,
      });
      if (this.debug) {
          console.log(
              `_button Pressed - DeviceId: ${deviceId} - Command: ${button} - entity_id: ${this.config.entity}`
          );
      }
  }

  _service(service) {
    if (this.debug) {
      console.log(
        `Func:_service: ${JSON.stringify(service)}`
      );
    }
  
    if (service?.name) {
      const [domain, serviceName] = service.name.split('.');
  
      // Extrahiere nur die erlaubten Parameter `data` und `target`
      const serviceData = {
        ...service.data,      // Füge data hinzu, wenn vorhanden
        ...service.target     // Füge target hinzu, wenn vorhanden
      };
  
      // Rufe den Service mit den bereinigten Parametern auf
      this.hass.callService(domain, serviceName, serviceData);
    }
  }

  // Switch on specific activity
  _select_activity(activity) {
    this.hass.callService("remote", "turn_on", {
      entity_id: this.config.entity,
      activity: activity,
    });
  }

  // Channel change is implemented global in aioharmony, let's use it
  _chanchange(chan) {
    console.log("Kanal:", chan);
    this.hass.callService("harmony", "change_channel", {
      entity_id: this.config.entity,
      channel: chan,
    });
  }

  // Set configuration for the card
  setConfig(config) {
    if (!config.entity) {
      throw new Error("Invalid configuration");
    }
    this.config = config;
    this.debug = config.debug === true;
  }

  // Get the card size
  getCardSize() {
    return 15;
  }
}
