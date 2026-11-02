import test from "node:test";
import assert from "node:assert/strict";

import {
  resolveCommand,
  resolveDevice,
  isRoutedAway,
  usesChangeChannel,
} from "../src/lib/commands.ts";
import {
  normalizeFavorite,
  normalizeFavorites,
} from "../src/lib/favorites.ts";
import {
  hasDirectDevice,
  directDeviceLabel,
  activityConfigFor,
  modeLabel,
} from "../src/lib/mode.ts";

// ---------------------------------------------------------------- commands

test("resolveCommand returns the logical button when nothing is remapped", () => {
  assert.equal(resolveCommand({ device_id: 1 }, "OK"), "OK");
  assert.equal(resolveCommand(undefined, "OK"), "OK");
  assert.equal(resolveCommand(null, "Guide"), "Guide");
});

test("resolveCommand applies per-activity remaps", () => {
  const activity = { OK: "Select", Back: "Return", Exit: "Home" };
  assert.equal(resolveCommand(activity, "OK"), "Select");
  assert.equal(resolveCommand(activity, "Back"), "Return");
  assert.equal(resolveCommand(activity, "Exit"), "Home");
});

test("resolveCommand ignores blank remaps", () => {
  assert.equal(resolveCommand({ OK: "" }, "OK"), "OK");
  assert.equal(resolveCommand({ OK: "   " }, "OK"), "OK");
  assert.equal(resolveCommand({ OK: 42 }, "OK"), "OK");
});

test("resolveCommand never rewrites non-remappable buttons", () => {
  const activity = { VolumeUp: "VolumeUp2", Play: "PlayDVD" };
  assert.equal(resolveCommand(activity, "VolumeUp"), "VolumeUp");
  assert.equal(resolveCommand(activity, "Play"), "Play");
  assert.equal(resolveCommand(activity, "1"), "1");
  assert.equal(resolveCommand(activity, "PowerOff"), "PowerOff");
});

test("resolveDevice prefers the per-button option", () => {
  const activity = {
    device_id: 1,
    ok_device_id: 2,
    volume_device_id: 3,
    direction_device_id: 4,
    media_device_id: 5,
  };
  assert.equal(resolveDevice(activity, "OK"), 2);
  assert.equal(resolveDevice(activity, "VolumeUp"), 3);
  assert.equal(resolveDevice(activity, "Mute"), 3);
  assert.equal(resolveDevice(activity, "DirectionLeft"), 4);
  assert.equal(resolveDevice(activity, "Play"), 5);
  assert.equal(resolveDevice(activity, "1"), 1);
});

test("resolveDevice keeps per-button routing when the command is remapped", () => {
  const activity = { device_id: 1, ok_device_id: 2, OK: "Select" };
  const command = resolveCommand(activity, "OK");
  assert.equal(command, "Select");
  assert.equal(resolveDevice(activity, "OK"), 2);
});

test("resolveDevice falls back to alt_device_id, then device_id", () => {
  assert.equal(resolveDevice({ device_id: 1, alt_device_id: 9 }, "OK"), 9);
  assert.equal(resolveDevice({ device_id: 1 }, "OK"), 1);
  assert.equal(resolveDevice({}, "OK"), undefined);
  assert.equal(resolveDevice(undefined, "OK"), undefined);
});

test("resolveDevice sends channel digits to the channel device", () => {
  const activity = { device_id: 1, channel_device_id: 3 };
  assert.equal(resolveDevice(activity, "1"), 3);
  assert.equal(resolveDevice(activity, "0420"), 3);
  assert.equal(resolveDevice(activity, "PowerOff"), 1);
});

test("resolveDevice treats empty strings as unset", () => {
  const activity = { device_id: "", alt_device_id: "", ok_device_id: "" };
  assert.equal(resolveDevice(activity, "OK"), undefined);
});

test("resolveDevice: device mode override wins over everything", () => {
  const activity = { device_id: 1, ok_device_id: 2, alt_device_id: 3 };
  assert.equal(resolveDevice(activity, "OK", 7), 7);
  assert.equal(resolveDevice(activity, "VolumeUp", "LG-Fernseher"), "LG-Fernseher");
  assert.equal(resolveDevice(undefined, "OK", 0), 0);
});

test("isRoutedAway marks per-button routing away from the activity device", () => {
  assert.equal(isRoutedAway(undefined, "OK"), false);
  assert.equal(isRoutedAway({ device_id: 1 }, "OK"), false);
  assert.equal(isRoutedAway({ device_id: 1, ok_device_id: 2 }, "OK"), true);
  assert.equal(isRoutedAway({ device_id: 1, ok_device_id: 1 }, "OK"), false);
  assert.equal(isRoutedAway({ device_id: 1, volume_device_id: 2 }, "Mute"), true);
  assert.equal(isRoutedAway({ device_id: 1, direction_device_id: 2 }, "DirectionUp"), true);
});

test("isRoutedAway routes digits to the channel device", () => {
  assert.equal(isRoutedAway({ device_id: 1, channel_device_id: 2 }, "0"), true);
  assert.equal(isRoutedAway({ device_id: 1, channel_device_id: 2 }, "9"), true);
  assert.equal(isRoutedAway({ device_id: 1 }, "5"), false);
});

test("isRoutedAway uses alt_device_id as the baseline", () => {
  assert.equal(isRoutedAway({ device_id: 1, alt_device_id: 2, ok_device_id: 2 }, "OK"), false);
  assert.equal(isRoutedAway({ device_id: 1, alt_device_id: 2, ok_device_id: 3 }, "OK"), true);
  assert.equal(isRoutedAway({ ok_device_id: 3 }, "OK"), true);
});

test("usesChangeChannel is an activity feature, disabled in direct mode", () => {
  assert.equal(usesChangeChannel({ useChangeChannel: true }), true);
  assert.equal(usesChangeChannel({ useChangeChannel: true }, true), false);
  assert.equal(usesChangeChannel({ useChangeChannel: false }), false);
  assert.equal(usesChangeChannel(undefined), false);
});

// --------------------------------------------------------------- favorites

test("normalizeFavorite keeps string services", () => {
  const favorite = normalizeFavorite(
    { number: "1", service: "media_player.play_media", image: "a.png" },
    "TV",
    0
  );
  assert.equal(favorite.service.name, "media_player.play_media");
  assert.equal(favorite.contextPath, "activities.TV.favorites[0]");
  assert.equal(favorite.image, "a.png");
});

test("normalizeFavorite merges object services and extra parameters", () => {
  const favorite = normalizeFavorite(
    {
      number: 2,
      image: "b.png",
      service: {
        name: "media_player.play_media",
        data: { media_content_id: "news" },
        target: { entity_id: "media_player.tv" },
      },
      extra: "value",
    },
    "TV",
    1
  );
  assert.deepEqual(favorite.service, {
    extra: "value",
    name: "media_player.play_media",
    data: { media_content_id: "news" },
    target: { entity_id: "media_player.tv" },
  });
  assert.equal(favorite.contextPath, "activities.TV.favorites[1]");
});

test("normalizeFavorite supports a service without a name", () => {
  const favorite = normalizeFavorite(
    { image: "c.png", service: { data: { x: 1 } } },
    "TV",
    0
  );
  assert.equal(favorite.service.name, undefined);
  assert.deepEqual(favorite.service.data, { x: 1 });
});

test("normalizeFavorite omits service and contextPath for plain logos", () => {
  const favorite = normalizeFavorite({ image: "d.png" }, "TV", 0);
  assert.equal(favorite.service, undefined);
  assert.equal(favorite.contextPath, undefined);
});

test("normalizeFavorites tolerates missing or broken input", () => {
  assert.deepEqual(normalizeFavorites(undefined, "TV"), []);
  assert.deepEqual(normalizeFavorites("nope", "TV"), []);
  assert.deepEqual(normalizeFavorites([null, 3, { image: "e.png" }], "TV").length, 1);
});

// -------------------------------------------------------------------- mode

test("hasDirectDevice reacts to a configured device", () => {
  assert.equal(hasDirectDevice({ device: "LG-Fernseher" }), true);
  assert.equal(hasDirectDevice({ device: 77085993 }), true);
  assert.equal(hasDirectDevice({ device: "" }), false);
  assert.equal(hasDirectDevice({}), false);
  assert.equal(hasDirectDevice(undefined), false);
});

test("directDeviceLabel prefers device_name and falls back to the device", () => {
  assert.equal(
    directDeviceLabel({ device: "LG-Fernseher", device_name: "TV direkt" }),
    "TV direkt"
  );
  assert.equal(directDeviceLabel({ device: "LG-Fernseher" }), "LG-Fernseher");
  assert.equal(directDeviceLabel({ device: 77085993 }), "77085993");
  assert.equal(directDeviceLabel({ device: "TV", device_name: "  " }), "TV");
  assert.equal(directDeviceLabel({}), "");
});

test("activityConfigFor keeps activities while a direct device is configured", () => {
  const config = {
    device: "LG-Fernseher",
    activities: { TV: { device_id: 1 } },
  };
  assert.deepEqual(activityConfigFor(config, "TV"), { device_id: 1 });
  assert.equal(activityConfigFor(config, "Missing"), undefined);
});

test("modeLabel shows the direct device only while it is selected", () => {
  const config = { device: "LG-Fernseher", device_name: "TV direkt" };
  assert.equal(modeLabel(config, "Watch TV", true), "TV direkt");
  assert.equal(modeLabel(config, "Watch TV", false), "Watch TV");
  assert.equal(modeLabel({}, "Watch TV", true), "Watch TV");
  assert.equal(modeLabel({ device: "LG-Fernseher" }, "Watch TV", true), "LG-Fernseher");
});
