## Change Channel with Button as a Service Call
``ButtonA:
  service: harmony.change_channel
  tooltip: Goto Channel 3
  data:
    channel: 3
    entity_id: remote.wohnzimmer
  icon: mdi:access-pointer``

## Toggle Service with Button
```Special:
  icon: mdi:lightbulb-group
  service: automation.trigger
  tooltip: Scene Honululu mit Backlight
  data:
    entity_id: automation.harmony_wohnzimmer_cine_lights```


