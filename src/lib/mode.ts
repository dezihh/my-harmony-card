/**
 * Mode helpers: Harmony activities are macros owned by the hub; a configured
 * `device` adds a second kind of entry to the same list - direct control of
 * one device. Selecting the direct entry does not change the hub activity, so
 * both can be used side by side.
 */

import type { ActivityTargets, DeviceRef } from "./commands";

export interface ModeConfig {
  device?: DeviceRef;
  device_name?: string;
  name?: string;
  activities?: Record<string, ActivityTargets>;
}

function isSet(value: unknown): value is DeviceRef {
  return value !== undefined && value !== null && value !== "";
}

/** True when the config offers the extra "direct device" entry. */
export function hasDirectDevice(config: ModeConfig | undefined | null): boolean {
  return isSet(config?.device);
}

/** Label of the direct entry: `device_name`, or the device name/id itself. */
export function directDeviceLabel(config: ModeConfig | undefined | null): string {
  if (!hasDirectDevice(config)) {
    return "";
  }
  const label = config?.device_name;
  return typeof label === "string" && label.trim() !== ""
    ? label
    : String(config?.device);
}

/** Activity config for a hub activity; independent of the direct entry. */
export function activityConfigFor(
  config: ModeConfig | undefined | null,
  activity: string
): ActivityTargets | undefined {
  return config?.activities?.[activity];
}

/** Header label: current hub activity, or the direct device while selected. */
export function modeLabel(
  config: ModeConfig | undefined | null,
  activity: string,
  directActive = false
): string {
  if (directActive && hasDirectDevice(config)) {
    return directDeviceLabel(config);
  }
  return activity;
}
