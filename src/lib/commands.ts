/**
 * Button/command resolution, independent of rendering.
 *
 * Two separate questions have to be answered for every button press:
 *  - which command should be sent (can be remapped per activity)
 *  - which device should receive it (can be routed per button)
 *
 * They must stay independent: remapping `OK` to `Select` must not lose the
 * `ok_device_id` routing.
 */

export type DeviceRef = string | number;

export interface ActivityTargets {
  device_id?: DeviceRef;
  alt_device_id?: DeviceRef;
  volume_device_id?: DeviceRef;
  channel_device_id?: DeviceRef;
  guide_device_id?: DeviceRef;
  menu_device_id?: DeviceRef;
  ok_device_id?: DeviceRef;
  back_device_id?: DeviceRef;
  exit_device_id?: DeviceRef;
  home_device_id?: DeviceRef;
  info_device_id?: DeviceRef;
  media_device_id?: DeviceRef;
  color_device_id?: DeviceRef;
  direction_device_id?: DeviceRef;
  [key: string]: unknown;
}

/** Logical buttons whose wire command can be overridden per activity. */
export const REMAPPABLE_BUTTONS = [
  "Menu",
  "Guide",
  "Home",
  "Info",
  "OK",
  "Back",
  "Exit",
] as const;

/** Logical button -> activity option that routes it to a specific device. */
const BUTTON_DEVICE_OPTION: Record<string, keyof ActivityTargets> = {
  VolumeUp: "volume_device_id",
  VolumeDown: "volume_device_id",
  Mute: "volume_device_id",
  ChannelUp: "channel_device_id",
  ChannelDown: "channel_device_id",
  Guide: "guide_device_id",
  Menu: "menu_device_id",
  OK: "ok_device_id",
  Back: "back_device_id",
  Exit: "exit_device_id",
  DirectionUp: "direction_device_id",
  DirectionDown: "direction_device_id",
  DirectionLeft: "direction_device_id",
  DirectionRight: "direction_device_id",
  Home: "home_device_id",
  Info: "info_device_id",
  Play: "media_device_id",
  Pause: "media_device_id",
  Stop: "media_device_id",
  Rewind: "media_device_id",
  FastForward: "media_device_id",
  Record: "media_device_id",
  Red: "color_device_id",
  Green: "color_device_id",
  Yellow: "color_device_id",
  Blue: "color_device_id",
};

function isSet(value: unknown): value is DeviceRef {
  return value !== undefined && value !== null && value !== "";
}

/**
 * Command to send for a logical button. Only the remappable keys are affected;
 * arbitrary commands (digits, per-button commands, service names) pass through.
 */
export function resolveCommand(
  activityConfig: ActivityTargets | undefined | null,
  button: string
): string {
  if (!activityConfig) {
    return button;
  }
  if (!(REMAPPABLE_BUTTONS as readonly string[]).includes(button)) {
    return button;
  }
  const override = activityConfig[button];
  return typeof override === "string" && override.trim() !== ""
    ? override
    : button;
}

/**
 * `useChangeChannel` hands the digits to `harmony.change_channel`, which works
 * on the activity. In direct mode the digits must go to the configured device
 * instead, like every other button.
 */
export function usesChangeChannel(
  activityConfig: ActivityTargets | undefined | null,
  directActive = false
): boolean {
  return !directActive && activityConfig?.useChangeChannel === true;
}

/**
 * Device for a logical button, in order of precedence:
 * device override (device mode) -> per-button option -> alt_device_id -> device_id
 */
export function resolveDevice(
  activityConfig: ActivityTargets | undefined | null,
  button: string,
  deviceOverride?: DeviceRef
): DeviceRef | undefined {
  if (isSet(deviceOverride)) {
    return deviceOverride;
  }
  if (!activityConfig) {
    return undefined;
  }
  // Channel digits follow the channel device, like ChannelUp/ChannelDown.
  const option = /^[0-9]+$/.test(button)
    ? "channel_device_id"
    : BUTTON_DEVICE_OPTION[button];
  const specific = option ? activityConfig[option] : undefined;
  if (isSet(specific)) {
    return specific;
  }
  if (isSet(activityConfig.alt_device_id)) {
    return activityConfig.alt_device_id;
  }
  return isSet(activityConfig.device_id) ? activityConfig.device_id : undefined;
}

/**
 * True when a button is sent to a device other than the activity's default
 * one, i.e. an explicit per-button option (or a digit on the channel device)
 * overrides `device_id`/`alt_device_id`. Used to mark those buttons in the UI.
 */
export function isRoutedAway(
  activityConfig: ActivityTargets | undefined | null,
  button: string
): boolean {
  if (!activityConfig) {
    return false;
  }
  const resolved = resolveDevice(activityConfig, button);
  if (!isSet(resolved)) {
    return false;
  }
  const base = isSet(activityConfig.alt_device_id)
    ? activityConfig.alt_device_id
    : activityConfig.device_id;
  return !isSet(base) || String(resolved) !== String(base);
}
