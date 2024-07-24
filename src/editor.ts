// Create and register the card editor
import { customElement } from "lit/decorators.js";
import { html, css, LitElement } from "lit";

import { HomeAssistantFixed } from "./types";
import { EDITOR_CARD_TAG_NAME } from "./const";

interface ActivityData {
  //name: string;
  device_id: number;
}

@customElement(EDITOR_CARD_TAG_NAME)
class LgRemoteControlEditor extends LitElement {
  private _config: any;
  private hass: HomeAssistantFixed;

  static get properties() {
    return {
      hass: {},
      _config: {},
    };
  }

  setConfig(config) {
    this._config = config;
  }
  //  if (!this._config.activities || !this._config.activities.PowerOff) {
  //    this._config.activities = {
  //      ...this._config.activities,
  //      PowerOff: {
  //        name: 'Poweroff',
  //        device_id: -1
  //      }
  //    };
  //  }
  //}



  //###############
  configChanged(ev) {

    const _config = Object.assign({}, this._config);
    _config[ev.target.name.toString()] = ev.target.value;
    this._config = _config;

    // A config-changed event will tell lovelace we have made changed to the configuration
    // this make sure the changes are saved correctly later and will update the preview
    const event = new CustomEvent("config-changed", {
      detail: { config: _config },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event);
  }

  configChangedBool(ev) {
    const inputName = ev.target.name;
    const newValue = ev.target.value === 'true';

    const _config = { ...this._config };
    _config[inputName] = newValue;
    this._config = _config;

    const event = new CustomEvent('config-changed', {
      detail: { config: _config },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event);
  }

  colorsConfigChanged(ev) {
    const _config = { ...this._config };
    _config["colors"] = { ...(_config["colors"] ?? {}) };

    if (ev.target.tagName === "HA-ICON") {
      const inputName = ev.target.getAttribute("data-input-name");
      if (inputName) {
        const inputElement = this.shadowRoot.querySelector(`[name="${inputName}"]`) as any;
        if (inputElement) {
          inputElement.value = "";
          _config["colors"][inputName] = "";
        }
      }
    } else {
      _config["colors"][ev.target.name.toString()] = ev.target.value;
    }

    this._config = _config;

    const event = new CustomEvent("config-changed", {
      detail: { config: _config },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event);
  }

  dimensionsConfigChanged(ev) {
    const _config = { ...this._config };
    _config["dimensions"] = { ...(_config["dimensions"] ?? {}) };

    if (ev.target.name === 'border_width') {
      _config["dimensions"][ev.target.name] = ev.target.value + 'px';
    } else {
      _config["dimensions"][ev.target.name] = ev.target.value;
    }

    this._config = _config;

    const event = new CustomEvent("config-changed", {
      detail: { config: _config },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event);
  }

  getLgTvEntityDropdown(optionValue) {
    let remoteEntities = Object.keys(this.hass.states).filter(e => e.startsWith('remote.'));
    let heading = 'Harmony Remote Entity';
    let blankEntity = html``;

    //if (this._config.tventity == '' || !(remoteEntities).includes(optionValue)) {
    if (this._config.entity == '' || !(remoteEntities).includes(optionValue)) {
      blankEntity = html`<option value="" selected> - - - - </option>`;
    }

    return html`
      ${heading}:<br>
      <select name="entity" id="entity" class="select-item" .value="${optionValue}"
              @focusout=${this.configChanged}
              @change=${this.configChanged}>
        ${blankEntity}
        ${remoteEntities.map((eid) => {
          if (eid != this._config.entity) {
            return html`<option value="${eid}">${this.hass.states[eid].attributes.friendly_name || eid}</option>`;
          } else {
            return html`<option value="${eid}" selected>${this.hass.states[eid].attributes.friendly_name || eid}</option>`;
          }
        })}
      </select>
      <br>
      <br>
    `;
  }

  setRemoteName(remoteNameValue) {
    let heading = 'Remote Control Name (option):';
    return html`
      ${heading}<br>
      <input type="text" name="name" id="remote-name" style="width: 37.8ch; padding: .6em; font-size: 1em;" .value="${remoteNameValue}"
             @input=${this.configChanged}>
      <br><br>
    `;
  }

  selectColors(config) {
    let heading = 'Colors Configuration';

    if (!config || !config.colors) {
      config = { colors: { buttons: '', text: '', background: '', border: '' } };
    }

    return html`
      <label class="color-item" for="text">Text Color:</label>
      <input type="color" name="text" id="text"  .value="${config.colors && config.colors.text || ''}"
             @input=${this.colorsConfigChanged}></input>
      <ha-icon data-input-name="text" icon="mdi:trash-can-outline" @click=${this.colorsConfigChanged}></ha-icon>

      <label class="color-item" for="background">Background Color:</label>
      <input type="color" name="background" id="background"  .value="${config.colors && config.colors.background || ''}"
             @input=${this.colorsConfigChanged}></input>
      <ha-icon data-input-name="background" icon="mdi:trash-can-outline" @click=${this.colorsConfigChanged}></ha-icon>

      <label class="color-item" for="border">Border Color:</label>
      <input type="color" name="border" id="border"  .value="${config.colors && config.colors.border || ''}"
             @input=${this.colorsConfigChanged}></input>
      <ha-icon data-input-name="border" icon="mdi:trash-can-outline" @click=${this.colorsConfigChanged}></ha-icon>
    `;
  }

  setDimensions(dimensions) {
    let heading = 'Dimensions';

    const borderWidth = parseFloat(dimensions.border_width ?? "1");

    return html`
      <div class="heading">${heading}:</div>
      <br>
      <label for="scale">Card Scale: ${dimensions.scale ?? 1}</label><br>
      <input type="range" min="0.5" max="1.5" step="0.01" .value="${dimensions && dimensions.scale}" id="scale" name="scale" @input=${this.dimensionsConfigChanged} style="width: 40ch;">
      </input>
      <br>
      <br>
      <label for="border_width">Card Border Width: ${borderWidth}px</label><br>
      <input type="range" min="1" max="5" step="1" .value="${borderWidth}" id="border_width" name="border_width" @input=${this.dimensionsConfigChanged} style="width: 40ch;">
      </input>
      <br>
    `;
  }

  renderActivities(activities){
    const stateObj = this.hass.states[this._config.entity];
    const activityList = stateObj.attributes.activity_list;
  
    // Get the keys of the activities in the config
    const configActivityKeys = Object.keys(this._config.activities);
  
    // Add new activities from activityList that are not in configActivityKeys
    const newActivities = activityList.filter(activity => !configActivityKeys.includes(activity));
    const toDeleteActivities = configActivityKeys.filter(key => !activityList.includes(key));
    const commonActivities = configActivityKeys.filter(key => activityList.includes(key));
    
    console.log("Gemeinsame Ojekte", commonActivities);
    console.log('New activities:', newActivities);
    console.log('toDelete', toDeleteActivities);

    commonActivities.forEach(key => {
      console.log(`Device ID for ${key}: ${this._config.activities[key]?.device_id}`);
    });

    console.log(JSON.stringify(configActivityKeys, null, 2));
    console.log(JSON.stringify(activityList, null, 2));
  
    return html`
      <div class="heading">Activities:</div>
      <br>
      ${commonActivities.map((activityData, index) => html`
        <div class="activity-container">
          <div class="form-group">
          <label for="activity-${index}-key" class="activity-identifier">${activityData}:</label>
  
          <div class="form-group">
            <label for="activity-${index}-device_id">Device ID:</label>
          <input type="number" id="activity-id" name="${activityData}.device_id" .value="${this._config.activities[activityData]?.device_id}" title="The number of the primary device for this activity (in harmony_*.conf)" @input="${this.configChanged}" class="activity-input">
        </div>
      `)}
      <button @click="${this.addActivity}" class="add-activity-button">Add New Activity</button>
    `;
  }

  addActivity() {
    const _config = { ...this._config };
    const newActivityName = `Activity${Object.keys(_config.activities).length}`;
    _config.activities[newActivityName] = {
      name: '',
      device_id: ''
    };
    this._config = _config;

    const event = new CustomEvent("config-changed", {
      detail: { config: _config },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event);
  }

  removeActivity(activityName) {
    const _config = { ...this._config };
    delete _config.activities[activityName];
    this._config = _config;

    const event = new CustomEvent("config-changed", {
      detail: { config: _config },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event);
  }

  render() {
   if (!this.hass || !this._config) {
     return html``;
   }

   return html`
     <div class="card-config">
       ${this.getLgTvEntityDropdown(this._config.entity)}
       ${this.setRemoteName(this._config.name)}
       ${this.selectColors(this._config)}
       ${this.setDimensions(this._config.dimensions)}
       ${this.renderActivities(this._config.activities)}
      <br>
      <p>At least the following entries must be present for the card to work:</p>
      <pre>
      - type: &#39;custom:my-harmony-card&#39;
        entity: remote.&lt;device&gt;
        activities:
          PowerOff:
            device_id: -1 </pre>
      <p>&nbsp;</p>
      <p><br />
      For more options please visit <a href="https://github.com/dezihh/my-harmony-card" target="_blank">https://github.com/dezihh/my-harmony-card</a></p>

      <div class="donations" style="display: flex">
          <a href="https://buymeacoffee.com/dezi" target="_blank">
          <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
          alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>
      </div>
   `;
  }

static get styles() {
  return css`
    .form-group {
      margin-bottom: 16px;
    }

    .form-group label {
      display: block;
      margin-bottom: 4px;
      font-weight: bold;
    }

    .form-group input[type="number"],
    .form-group input[type="number"] {
      width: 20ch; /* Set width to 20 characters */
      padding: 8px;
      box-sizing: border-box;
    }

    .activity-container {
      margin-bottom: 16px;
      padding: 16px;
      border: 1px solid #ccc;
      border-radius: 8px;
      filter: brightness(0.9); /* Slightly darker */
    }

    .activity-identifier {
      font-weight: bold;
      width: 150px; /* Adjust the width as necessary */
    }

    .activity-input {
      margin-left: 8px;
      width: 20ch; /* Set width to 20 characters */
    }

    .remove-button {
      margin-left: auto;
    }

    .activity-details {
      padding-left: 26px;
      margin-top: 8px;
    }

    .add-activity-button {
      margin-top: 16px;
    }
    
    .heading {
       font-weight: bold;
    }
  `;
  }
  

}
