import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const pkg = JSON.parse(readFileSync(join(root, "package.json"), "utf8"));
const bundle = readFileSync(join(root, "dist", "my-harmony-card.js"), "utf8");

test("bundle is present and not empty", () => {
  assert.ok(bundle.length > 10_000, `bundle is only ${bundle.length} bytes`);
});

test("bundle contains no version placeholder", () => {
  assert.equal(
    bundle.includes("@MY_HARMONY_CARD_PLACEHOLDER@"),
    false,
    "bundle still contains the watch placeholder"
  );
});

test("bundle reports the version from package.json", () => {
  const match = bundle.match(/version: ([0-9][^\s"]*)/);
  assert.ok(match, "no version string found in the bundle");
  assert.equal(match[1], pkg.version);
});

test("bundle registers the custom element", () => {
  assert.ok(bundle.includes("customElements.define"), "no custom element registration");
  assert.ok(bundle.includes("my-harmony-card"), "card tag name is missing");
  assert.ok(bundle.includes("my-harmony-card-editor"), "editor tag name is missing");
});

test("bundle exposes the editor and the stub config", () => {
  assert.ok(bundle.includes("getConfigElement"), "getConfigElement missing");
  assert.ok(bundle.includes("getStubConfig"), "getStubConfig missing");
});
