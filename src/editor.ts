// Create and register the card editor
import { customElement } from "lit/decorators.js";
import { html, LitElement } from "lit";

import { HomeAssistantFixed } from "./types";
import { EDITOR_CARD_TAG_NAME } from "./const";
import { styles } from "./styles"; // Importing styles

interface ActivityData {
  device_id: number;
}

@customElement(EDITOR_CARD_TAG_NAME)
class MYHarmonyCardEditor extends LitElement {
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

  configChanged(ev) {
    const _config = Object.assign({}, this._config);
    _config[ev.target.name.toString()] = ev.target.value;
    this._config = _config;

    const event = new CustomEvent("config-changed", {
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
        const inputElement = this.shadowRoot.querySelector(
          `[name="${inputName}"]`
        ) as any;
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

    if (ev.target.name === "border_width") {
      _config["dimensions"][ev.target.name] = ev.target.value + "px";
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

  getHarmonyEntityDropdown(optionValue) {
    let remoteEntities = Object.keys(this.hass.states).filter((e) =>
      e.startsWith("remote.")
    );
    let heading = "Harmony Remote Entity";
    let blankEntity = html``;

    if (this._config.entity == "" || !remoteEntities.includes(optionValue)) {
      blankEntity = html`<option value="" selected>- - - -</option>`;
    }

    return html`
      ${heading}:<br />
      <select
        name="entity"
        id="entity"
        class="select-item"
        .value="${optionValue}"
        @focusout=${this.configChanged}
        @change=${this.configChanged}
      >
        ${blankEntity}
        ${remoteEntities.map((eid) => {
          if (eid != this._config.entity) {
            return html`<option value="${eid}">
              ${this.hass.states[eid].attributes.friendly_name || eid}
            </option>`;
          } else {
            return html`<option value="${eid}" selected>
              ${this.hass.states[eid].attributes.friendly_name || eid}
            </option>`;
          }
        })}
      </select>
      <br /><br />
    `;
  }

  setRemoteName(remoteNameValue) {
    let heading = "Remote Control Name (optional):";
    return html`
      ${heading}<br />
      <input
        type="text"
        name="name"
        id="remote-name"
        style="width: 37.8ch; padding: .6em; font-size: 1em;"
        .value="${remoteNameValue || ""}"
        @input=${this.configChanged}
      />
      <br /><br />
    `;
  }

  selectColors(config) {
    let heading = "Colors Configuration";

    if (!config || !config.colors) {
      config = {
        colors: { buttons: "", text: "", background: "", border: "" },
      };
    }

    return html`
      <hr style="width: 100%; height: 1px; border: none; border-top: 1px solid #eeeeee;">
      <div class="heading">Colors</div>
      <div>
        <input type="color" name="buttons" id="buttons"  .value="${(config.colors && config.colors.buttons) || ""}"
             @input=${this.colorsConfigChanged}></input>
        <ha-icon data-input-name="buttons" icon="mdi:trash-can-outline" @click=${this.colorsConfigChanged}></ha-icon>
        <label class="color-item" for="background">Button Color</label>

        <input type="color" name="background" id="background" .value="${config.colors.background || ""}"
               @input=${this.colorsConfigChanged}>
        <ha-icon data-input-name="background" icon="mdi:trash-can-outline" @click=${this.colorsConfigChanged}></ha-icon>
        <label class="color-item" for="background">Background Color</label>
      </div>
      <div>
        <input type="color" name="text" id="text" .value="${config.colors.text || ""}"
               @input=${this.colorsConfigChanged}>
        <ha-icon data-input-name="text" icon="mdi:trash-can-outline" @click=${this.colorsConfigChanged}></ha-icon>
        <label class="color-item" for="text">Text Color</label>

        <input type="color" name="popup" id="popup" .value="${config.colors.popup || ""}"
            @input=${this.colorsConfigChanged}>
        <ha-icon data-input-name="text" icon="mdi:trash-can-outline" @click=${this.colorsConfigChanged}></ha-icon>
        <label class="color-item" for="text">Popup Background Color</label>
      </div>
      <div>
        <input type="color" name="border" id="border" .value="${config.colors.border || ""}"
               @input=${this.colorsConfigChanged}>
        <ha-icon data-input-name="border" icon="mdi:trash-can-outline" @click=${this.colorsConfigChanged}></ha-icon>
        <label class="color-item" for="border">Border Color</label>
      </div>
    `;
  }

  setDimensions(dimensions) {
    let heading = "Dimensions";
    const defaultDimensions = {
      scale: 1,
      border_width: 1,
    };

    const actualDimensions = {
      ...defaultDimensions,
      ...(dimensions || {}),
    };

    const borderWidth = parseFloat(actualDimensions.border_width);

    return html`
      <hr
        style="width: 100%; height: 1px; border: none; border-top: 1px solid #eeeeee;"
      />
      <div class="heading" style="margin-bottom: -10px;">${heading}:</div>
      <br />
      <label for="scale" style="margin-top:0px;"
        >Card Scale: ${actualDimensions.scale}</label
      ><br />
      <input
        type="range"
        min="0.5"
        max="1.5"
        step="0.01"
        .value="${actualDimensions.scale}"
        id="scale"
        name="scale"
        @input=${this.dimensionsConfigChanged}
        style="width: 40ch;"
      />
      <br /><br />
      <label for="border_width">Card Border Width: ${borderWidth}px</label
      ><br />
      <input
        type="range"
        min="1"
        max="5"
        step="1"
        .value="${borderWidth}"
        id="border_width"
        name="border_width"
        @input=${this.dimensionsConfigChanged}
        style="width: 40ch;"
      />
      <br />
    `;
  }

  importActivities() {
    return html`
      <hr
        style="width: 100%; height: 1px; border: none; border-top: 1px solid #eeeeee;"
      />
      <div class="import-activities">
        <input
          type="checkbox"
          id="importActivitiesCheckbox"
          @change=${this.handleImportActivitiesCheckboxChange}
        />
        <ha-icon data-input-name="text" icon="mdi:chevron-left"></ha-icon>
        <label for="importActivitiesCheckbox"
          >Synchronize Activities from Harmony</label
        >
        <div style="margin-left: 20px">
          <i
            >Use this for initialization of known activities in Home
            Assistant.<br />
            Hint: You still have to fill in the device_id element for each
            activity below!</i
          >
        </div>
      </div>
      <hr
        style="width: 100%; height: 1px; border: none; border-top: 1px solid #eeeeee;"
      />
    `;
  }

  handleImportActivitiesCheckboxChange(event) {
    const checkbox = event.target;
    if (event.target.checked) {
      this.syncActivities();
    }
    setTimeout(() => {
      checkbox.checked = false;
    }, 200);
  }

  checkActivities() {
    const configActivities = this._config.activities || {};
    if (typeof configActivities !== "object" || configActivities === null) {
      return html`
        <div class="import-activities">
          <label for="checkActivitiesNo">"No activities configured, yet"</label>
        </div>
      `;
    }

    const activityKeys = Object.keys(configActivities);
    if (activityKeys.length > 0) {
      return html`
        <div class="heading" style="margin-bottom: -10px;">Activities:</div>
        <br />
        <div class="outer-container">
          ${activityKeys.map((key, index) => {
            let activityData = { ...configActivities[key] };
            if (!activityData.device_id) {
              activityData.device_id = "0";
              const updatedConfig = {
                ...this._config.activities,
                [key]: activityData,
              };
              this._config = { ...this._config, activities: updatedConfig };
              this.requestUpdate();
            }

            return html`
              <div class="activity-container">
                <div class="form-group">
                  <label for="activity-${index}-key" class="activity-identifier"
                    >${key}:</label
                  >
                  <input
                    type="text"
                    id="activity-${index}-device-id"
                    .value="${activityData.device_id}"
                    @input="${(e) => this._updateDeviceId(key, e.target.value)}"
                    maxlength="9"
                    class="activity-input"
                  />
                </div>
              </div>
            `;
          })}
        </div>
      `;
    } else {
      return html`
        <div class="import-activities">
          <label for="checkActivitiesNo">"No activities configured, yet"</label>
        </div>
      `;
    }
  }

  _updateDeviceId(key, value) {
    const updatedActivity = {
      ...this._config.activities[key],
      device_id: value,
    };
    const updatedActivities = {
      ...this._config.activities,
      [key]: updatedActivity,
    };
    this._config = { ...this._config, activities: updatedActivities };
    this.dispatchEvent(
      new CustomEvent("config-changed", { detail: { config: this._config } })
    );
  }

  syncActivities() {
    const stateObj = this.hass.states[this._config.entity];
    const activityList = stateObj.attributes.activity_list || [];

    const configCopy = { ...this._config };

    if (!configCopy.activities) {
      configCopy.activities = {};
    } else {
      configCopy.activities = { ...configCopy.activities };
    }

    const configActivityKeys = Object.keys(configCopy.activities);
    const newActivities = activityList.filter(
      (activity) => !configActivityKeys.includes(activity)
    );
    newActivities.forEach((key) => {
      configCopy.activities[key] = {
        device_id: 0,
      };
    });

    const toDeleteActivities = configActivityKeys.filter(
      (key) => !activityList.includes(key)
    );
    toDeleteActivities.forEach((key) => {
      delete configCopy.activities[key];
    });

    this._config = configCopy;

    const event = new CustomEvent("config-changed", {
      detail: { config: this._config },
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
        ${this.getHarmonyEntityDropdown(this._config.entity)}
        ${this.setRemoteName(this._config.name)}
        ${this.selectColors(this._config)}
        ${this.setDimensions(this._config.dimensions)}
        ${this.importActivities()} ${this.checkActivities()}
        <br />
        <div class="info">
          <div class="heading">Additional Info:</div>
          <div>
            <u>Hint:</u> Please find the number of each configured activity in
            the root directory of Home Assistant in the file
            <b><~/harmony_??????.conf></b>.<br />
            Each device listed in there has its own ID, like
            <i><"id": "77085993"></i>. Take this number for each device listed
            above and fill it in there.<br />
          </div>
          <hr
            style="width: 100%; height: 1px; border: none; border-top: 1px solid #eeeeee;"
          />
          For more options please visit
          <a href="https://github.com/dezihh/my-harmony-card" target="_blank"
            >https://github.com/dezihh/my-harmony-card</a
          >.
          <div class="donations" style="display: flex">
            <a href="https://buymeacoffee.com/dezi" target="_blank">
              <img
                src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
                alt="Buy Me A Coffee"
                style="height: 60px !important;width: 217px !important;"
              />
            </a>
          </div>
        </div>
      </div>
    `;
  }

  static get styles() {
    return styles;
  }
}
