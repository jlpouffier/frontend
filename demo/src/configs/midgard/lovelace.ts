import type { DemoConfig } from "../types";

export const demoLovelaceMidgard: DemoConfig["lovelace"] = (localize) => ({
  title: "Maison Midgard",
  views: [
    // MAIN VIEW: Overview (Midgard)
    {
      type: "sections",
      path: "apercu",
      icon: "mdi:hand-wave",
      title: "Midgard",
      badges: [
        {
          type: "entity",
          entity: "sensor.outdoor_temperature",
          color: "red",
        },
        {
          type: "entity",
          entity: "sensor.outdoor_humidity",
          color: "indigo",
        },
      ],
      sections: [
        // Section: Map & Person
        {
          type: "grid",
          cards: [
            {
              type: "map",
              entities: [
                { entity: "person.jean_loic" },
                { entity: "zone.home" },
                { entity: "device_tracker.tesla" },
              ],
              hours_to_show: 168,
              layout_options: {
                grid_columns: "full",
                grid_rows: 5,
              },
              visibility: [
                {
                  condition: "screen",
                  media_query: "(min-width: 768px)",
                },
              ],
            },
          ],
        },

        // Section: Floors
        {
          type: "grid",
          cards: [
            {
              type: "heading",
              heading: localize(
                "ui.panel.page-demo.config.midgard.sections.floors"
              ),
              heading_style: "title",
              icon: "mdi:home",
            },
            {
              type: "tile",
              entity: "binary_sensor.presence_ground_floor",
              name: localize(
                "ui.panel.page-demo.config.midgard.entities.ground_floor"
              ),
              icon: "mdi:sofa",
              tap_action: {
                action: "navigate",
                navigation_path: "#ground_floor",
              },
            },
            {
              type: "tile",
              entity: "binary_sensor.presence_first_floor",
              name: localize(
                "ui.panel.page-demo.config.midgard.entities.first_floor"
              ),
              icon: "mdi:bed",
              tap_action: {
                action: "navigate",
                navigation_path: "#first_floor",
              },
            },
          ],
        },

        // Section: Lights summary
        {
          type: "grid",
          cards: [
            {
              type: "heading",
              heading: localize(
                "ui.panel.page-demo.config.midgard.sections.lights"
              ),
              heading_style: "title",
              icon: "mdi:lightbulb-multiple",
              tap_action: {
                action: "navigate",
                navigation_path: "#lights",
              },
            },
            {
              type: "tile",
              entity: "light.living_room_ceiling",
              features: [{ type: "light-brightness" }],
            },
            {
              type: "tile",
              entity: "light.kitchen_ceiling",
              features: [{ type: "light-brightness" }],
            },
            {
              type: "tile",
              entity: "light.office_ceiling",
              features: [{ type: "light-brightness" }],
            },
          ],
        },

        // Section: Climate summary
        {
          type: "grid",
          cards: [
            {
              type: "heading",
              heading: localize(
                "ui.panel.page-demo.config.midgard.sections.climate"
              ),
              heading_style: "title",
              icon: "mdi:thermostat",
            },
            {
              type: "tile",
              entity: "climate.living_room",
              features: [{ type: "target-temperature" }],
            },
            {
              type: "tile",
              entity: "climate.bedroom",
              features: [{ type: "target-temperature" }],
            },
          ],
        },

        // Section: Openings summary
        {
          type: "grid",
          cards: [
            {
              type: "heading",
              heading: localize(
                "ui.panel.page-demo.config.midgard.sections.openings"
              ),
              heading_style: "title",
              icon: "mdi:door-open",
              tap_action: {
                action: "navigate",
                navigation_path: "#openings",
              },
            },
            {
              type: "tile",
              entity: "binary_sensor.front_door",
            },
            {
              type: "tile",
              entity: "binary_sensor.patio_door",
            },
            {
              type: "tile",
              entity: "lock.front_door",
              features: [{ type: "lock-commands" }],
            },
          ],
        },

        // Section: Multimedia summary
        {
          type: "grid",
          cards: [
            {
              type: "heading",
              heading: localize(
                "ui.panel.page-demo.config.midgard.sections.multimedia"
              ),
              heading_style: "title",
              icon: "mdi:play",
            },
            {
              type: "tile",
              entity: "media_player.living_room_apple_tv",
              features: [{ type: "media-control" }],
              visibility: [
                {
                  condition: "state",
                  entity: "media_player.living_room_apple_tv",
                  state_not: "off",
                },
              ],
            },
            {
              type: "tile",
              entity: "media_player.kitchen_sonos",
              features: [{ type: "media-control" }],
              visibility: [
                {
                  condition: "state",
                  entity: "media_player.kitchen_sonos",
                  state_not: "off",
                },
              ],
            },
          ],
        },
      ],
    },

    // SUBVIEW 1: Ground Floor
    {
      title: localize("ui.panel.page-demo.config.midgard.views.ground_floor"),
      path: "ground_floor",
      back_path: "/lovelace/apercu",
      icon: "mdi:sofa",
      subview: true,
      type: "sections",
      sections: [
        // Lights section
        {
          type: "grid",
          cards: [
            {
              type: "heading",
              heading: localize(
                "ui.panel.page-demo.config.midgard.sections.lights"
              ),
              heading_style: "title",
              icon: "mdi:lightbulb-on",
              tap_action: {
                action: "navigate",
                navigation_path: "/lovelace/lights",
              },
            },
            {
              type: "tile",
              entity: "light.living_room_ceiling",
              features: [{ type: "light-brightness" }],
            },
            {
              type: "tile",
              entity: "light.living_room_floor_lamp",
              features: [{ type: "light-brightness" }],
            },
            {
              type: "tile",
              entity: "light.living_room_spotlights",
              features: [{ type: "light-brightness" }],
            },
            {
              type: "tile",
              entity: "light.kitchen_ceiling",
              features: [{ type: "light-brightness" }],
            },
            {
              type: "tile",
              entity: "light.kitchen_worktop",
              features: [{ type: "light-brightness" }],
            },
            {
              type: "tile",
              entity: "light.entry",
            },
          ],
        },

        // Covers section
        {
          type: "grid",
          cards: [
            {
              type: "heading",
              heading: localize(
                "ui.panel.page-demo.config.midgard.sections.covers"
              ),
              heading_style: "title",
              icon: "mdi:window-shutter",
            },
            {
              type: "tile",
              entity: "cover.living_room_shutter_1",
              features: [{ type: "cover-open-close" }],
            },
            {
              type: "tile",
              entity: "cover.living_room_shutter_2",
              features: [{ type: "cover-open-close" }],
            },
            {
              type: "tile",
              entity: "cover.living_room_shutter_3",
              features: [{ type: "cover-open-close" }],
            },
            {
              type: "tile",
              entity: "cover.kitchen_shutter",
              features: [{ type: "cover-open-close" }],
            },
          ],
        },

        // Climate section
        {
          type: "grid",
          cards: [
            {
              type: "heading",
              heading: localize(
                "ui.panel.page-demo.config.midgard.sections.climate"
              ),
              heading_style: "title",
              icon: "mdi:thermostat",
            },
            {
              type: "tile",
              entity: "climate.living_room",
              features: [{ type: "target-temperature" }],
            },
            {
              type: "tile",
              entity: "climate.kitchen",
              features: [{ type: "target-temperature" }],
            },
            {
              type: "tile",
              entity: "sensor.living_room_temperature",
            },
            {
              type: "tile",
              entity: "sensor.kitchen_temperature",
            },
          ],
        },

        // Openings section
        {
          type: "grid",
          cards: [
            {
              type: "heading",
              heading: localize(
                "ui.panel.page-demo.config.midgard.sections.openings"
              ),
              heading_style: "title",
              icon: "mdi:door-open",
            },
            {
              type: "tile",
              entity: "binary_sensor.front_door",
            },
            {
              type: "tile",
              entity: "lock.front_door",
              features: [{ type: "lock-commands" }],
            },
            {
              type: "tile",
              entity: "binary_sensor.living_room_window",
            },
            {
              type: "tile",
              entity: "binary_sensor.kitchen_window",
            },
          ],
        },
      ],
    },

    // SUBVIEW 2: First Floor
    {
      title: localize("ui.panel.page-demo.config.midgard.views.first_floor"),
      path: "first_floor",
      back_path: "/lovelace/apercu",
      icon: "mdi:bed",
      subview: true,
      type: "sections",
      sections: [
        // Rooms section
        {
          type: "grid",
          cards: [
            {
              type: "heading",
              heading: localize(
                "ui.panel.page-demo.config.midgard.sections.rooms"
              ),
              heading_style: "title",
              icon: "mdi:home",
            },
            {
              type: "tile",
              entity: "climate.bedroom",
              name: localize(
                "ui.panel.page-demo.config.midgard.entities.bedroom"
              ),
              icon: "mdi:bed-king",
              tap_action: {
                action: "navigate",
                navigation_path: "/lovelace/bedroom",
              },
            },
            {
              type: "tile",
              entity: "climate.bedroom_child",
              name: localize(
                "ui.panel.page-demo.config.midgard.entities.bedroom_child"
              ),
              icon: "mdi:teddy-bear",
              tap_action: {
                action: "navigate",
                navigation_path: "/lovelace/bedroom_child",
              },
            },
            {
              type: "tile",
              entity: "climate.office",
              name: localize(
                "ui.panel.page-demo.config.midgard.entities.office"
              ),
              icon: "mdi:desk",
              tap_action: {
                action: "navigate",
                navigation_path: "/lovelace/office",
              },
            },
          ],
        },

        // Lights section
        {
          type: "grid",
          cards: [
            {
              type: "heading",
              heading: localize(
                "ui.panel.page-demo.config.midgard.sections.lights"
              ),
              heading_style: "title",
              icon: "mdi:lightbulb-on",
            },
            {
              type: "tile",
              entity: "light.hallway_first",
            },
            {
              type: "tile",
              entity: "light.bedroom_ceiling",
              features: [{ type: "light-brightness" }],
            },
            {
              type: "tile",
              entity: "light.bedroom_child_ceiling",
              features: [{ type: "light-brightness" }],
            },
            {
              type: "tile",
              entity: "light.office_ceiling",
              features: [{ type: "light-brightness" }],
            },
          ],
        },

        // Climate section
        {
          type: "grid",
          cards: [
            {
              type: "heading",
              heading: localize(
                "ui.panel.page-demo.config.midgard.sections.climate"
              ),
              heading_style: "title",
              icon: "mdi:thermostat",
            },
            {
              type: "tile",
              entity: "sensor.bedroom_temperature",
            },
            {
              type: "tile",
              entity: "sensor.bedroom_child_temperature",
            },
            {
              type: "tile",
              entity: "sensor.office_temperature",
            },
            {
              type: "tile",
              entity: "sensor.bathroom_temperature",
            },
          ],
        },
      ],
    },

    // SUBVIEW 3: Garden
    {
      title: localize("ui.panel.page-demo.config.midgard.views.garden"),
      path: "garden",
      back_path: "/lovelace/apercu",
      icon: "mdi:tree",
      subview: true,
      type: "sections",
      sections: [
        // Weather section
        {
          type: "grid",
          cards: [
            {
              type: "heading",
              heading: localize(
                "ui.panel.page-demo.config.midgard.sections.weather"
              ),
              heading_style: "title",
              icon: "mdi:weather-partly-cloudy",
            },
            {
              type: "weather-forecast",
              entity: "weather.home",
              show_forecast: true,
              forecast_type: "daily",
              layout_options: {
                grid_columns: "full",
              },
            },
            {
              type: "tile",
              entity: "sensor.outdoor_temperature",
            },
            {
              type: "tile",
              entity: "sensor.outdoor_humidity",
            },
          ],
        },

        // Outdoor lights section
        {
          type: "grid",
          cards: [
            {
              type: "heading",
              heading:
                localize("ui.panel.page-demo.config.midgard.entities.outdoor") +
                " " +
                localize("ui.panel.page-demo.config.midgard.sections.lights"),
              heading_style: "title",
              icon: "mdi:lightbulb-on",
            },
            {
              type: "tile",
              entity: "light.patio",
            },
            {
              type: "tile",
              entity: "light.garden",
              features: [{ type: "light-brightness" }],
            },
            {
              type: "tile",
              entity: "light.outdoor_entry",
            },
          ],
        },

        // Openings section
        {
          type: "grid",
          cards: [
            {
              type: "heading",
              heading: localize(
                "ui.panel.page-demo.config.midgard.sections.openings"
              ),
              heading_style: "title",
              icon: "mdi:door-open",
            },
            {
              type: "tile",
              entity: "binary_sensor.patio_door",
            },
          ],
        },
      ],
    },

    // SUBVIEW 4: Bedroom
    {
      title: localize("ui.panel.page-demo.config.midgard.views.bedroom"),
      path: "bedroom",
      back_path: "/lovelace/apercu",
      icon: "mdi:bed-king",
      subview: true,
      type: "sections",
      sections: [
        // Lights section
        {
          type: "grid",
          cards: [
            {
              type: "heading",
              heading: localize(
                "ui.panel.page-demo.config.midgard.sections.lights"
              ),
              heading_style: "title",
              icon: "mdi:lightbulb-on",
            },
            {
              type: "tile",
              entity: "light.bedroom_ceiling",
              features: [{ type: "light-brightness" }],
            },
            {
              type: "tile",
              entity: "light.bedroom_bedside_left",
              features: [{ type: "light-brightness" }],
            },
            {
              type: "tile",
              entity: "light.bedroom_bedside_right",
              features: [{ type: "light-brightness" }],
            },
          ],
        },

        // Climate section
        {
          type: "grid",
          cards: [
            {
              type: "heading",
              heading: localize(
                "ui.panel.page-demo.config.midgard.sections.climate"
              ),
              heading_style: "title",
              icon: "mdi:thermostat",
            },
            {
              type: "tile",
              entity: "climate.bedroom",
              features: [{ type: "target-temperature" }],
            },
            {
              type: "tile",
              entity: "sensor.bedroom_temperature",
            },
            {
              type: "tile",
              entity: "sensor.bedroom_humidity",
            },
          ],
        },

        // Covers section
        {
          type: "grid",
          cards: [
            {
              type: "heading",
              heading: localize(
                "ui.panel.page-demo.config.midgard.sections.covers"
              ),
              heading_style: "title",
              icon: "mdi:window-shutter",
            },
            {
              type: "tile",
              entity: "cover.bedroom_shutter",
              features: [{ type: "cover-open-close" }],
            },
            {
              type: "tile",
              entity: "cover.bedroom_curtain",
              features: [{ type: "cover-open-close" }],
            },
          ],
        },

        // Environment section
        {
          type: "grid",
          cards: [
            {
              type: "heading",
              heading: localize(
                "ui.panel.page-demo.config.midgard.sections.environment"
              ),
              heading_style: "title",
              icon: "mdi:air-filter",
            },
            {
              type: "tile",
              entity: "sensor.bedroom_air_quality",
            },
            {
              type: "tile",
              entity: "binary_sensor.bedroom_window",
            },
          ],
        },
      ],
    },

    // SUBVIEW 5: Child's Bedroom
    {
      title: localize("ui.panel.page-demo.config.midgard.views.bedroom_child"),
      path: "bedroom_child",
      back_path: "/lovelace/apercu",
      icon: "mdi:teddy-bear",
      subview: true,
      type: "sections",
      sections: [
        // Lights section
        {
          type: "grid",
          cards: [
            {
              type: "heading",
              heading: localize(
                "ui.panel.page-demo.config.midgard.sections.lights"
              ),
              heading_style: "title",
              icon: "mdi:lightbulb-on",
            },
            {
              type: "tile",
              entity: "light.bedroom_child_ceiling",
              features: [{ type: "light-brightness" }],
            },
            {
              type: "tile",
              entity: "light.bedroom_child_night_light",
              features: [{ type: "light-brightness" }],
            },
          ],
        },

        // Climate section
        {
          type: "grid",
          cards: [
            {
              type: "heading",
              heading: localize(
                "ui.panel.page-demo.config.midgard.sections.climate"
              ),
              heading_style: "title",
              icon: "mdi:thermostat",
            },
            {
              type: "tile",
              entity: "climate.bedroom_child",
              features: [{ type: "target-temperature" }],
            },
            {
              type: "tile",
              entity: "sensor.bedroom_child_temperature",
            },
            {
              type: "tile",
              entity: "sensor.bedroom_child_humidity",
            },
          ],
        },

        // Covers section
        {
          type: "grid",
          cards: [
            {
              type: "heading",
              heading: localize(
                "ui.panel.page-demo.config.midgard.sections.covers"
              ),
              heading_style: "title",
              icon: "mdi:window-shutter",
            },
            {
              type: "tile",
              entity: "cover.bedroom_child_shutter",
              features: [{ type: "cover-open-close" }],
            },
          ],
        },

        // Environment section
        {
          type: "grid",
          cards: [
            {
              type: "heading",
              heading: localize(
                "ui.panel.page-demo.config.midgard.sections.environment"
              ),
              heading_style: "title",
              icon: "mdi:air-filter",
            },
            {
              type: "tile",
              entity: "sensor.bedroom_child_air_quality",
            },
            {
              type: "tile",
              entity: "binary_sensor.bedroom_child_window",
            },
          ],
        },
      ],
    },

    // SUBVIEW 6: Office
    {
      title: localize("ui.panel.page-demo.config.midgard.views.office"),
      path: "office",
      back_path: "/lovelace/apercu",
      icon: "mdi:desk",
      subview: true,
      type: "sections",
      sections: [
        // Lights section
        {
          type: "grid",
          cards: [
            {
              type: "heading",
              heading: localize(
                "ui.panel.page-demo.config.midgard.sections.lights"
              ),
              heading_style: "title",
              icon: "mdi:lightbulb-on",
            },
            {
              type: "tile",
              entity: "light.office_ceiling",
              features: [{ type: "light-brightness" }],
            },
            {
              type: "tile",
              entity: "light.office_desk_lamp",
              features: [{ type: "light-brightness" }],
            },
          ],
        },

        // Climate section
        {
          type: "grid",
          cards: [
            {
              type: "heading",
              heading: localize(
                "ui.panel.page-demo.config.midgard.sections.climate"
              ),
              heading_style: "title",
              icon: "mdi:thermostat",
            },
            {
              type: "tile",
              entity: "climate.office",
              features: [{ type: "target-temperature" }],
            },
            {
              type: "tile",
              entity: "sensor.office_temperature",
            },
            {
              type: "tile",
              entity: "sensor.office_humidity",
            },
            {
              type: "tile",
              entity: "sensor.office_air_quality",
            },
          ],
        },

        // Covers section
        {
          type: "grid",
          cards: [
            {
              type: "heading",
              heading: localize(
                "ui.panel.page-demo.config.midgard.sections.covers"
              ),
              heading_style: "title",
              icon: "mdi:window-shutter",
            },
            {
              type: "tile",
              entity: "cover.office_shutter",
              features: [{ type: "cover-open-close" }],
            },
            {
              type: "tile",
              entity: "cover.office_curtain",
              features: [{ type: "cover-open-close" }],
            },
          ],
        },

        // Voice assistant section
        {
          type: "grid",
          cards: [
            {
              type: "heading",
              heading: localize(
                "ui.panel.page-demo.config.midgard.sections.assist"
              ),
              heading_style: "title",
              icon: "mdi:microphone",
            },
            {
              type: "tile",
              entity: "switch.voice_assistant_office",
            },
          ],
        },
      ],
    },

    // SUBVIEW 7: Tesla
    {
      title: localize("ui.panel.page-demo.config.midgard.views.tesla"),
      path: "tesla",
      back_path: "/lovelace/apercu",
      icon: "mdi:car-electric",
      subview: true,
      type: "sections",
      sections: [
        // Vehicle section
        {
          type: "grid",
          cards: [
            {
              type: "heading",
              heading: localize(
                "ui.panel.page-demo.config.midgard.sections.vehicle"
              ),
              heading_style: "title",
              icon: "mdi:car-electric",
            },
            {
              type: "tile",
              entity: "device_tracker.tesla",
            },
            {
              type: "tile",
              entity: "lock.tesla_doors",
              features: [{ type: "lock-commands" }],
            },
            {
              type: "tile",
              entity: "switch.tesla_sentry_mode",
            },
          ],
        },

        // Battery & Charging section
        {
          type: "grid",
          cards: [
            {
              type: "heading",
              heading: localize(
                "ui.panel.page-demo.config.midgard.sections.battery"
              ),
              heading_style: "title",
              icon: "mdi:battery-charging",
            },
            {
              type: "tile",
              entity: "sensor.tesla_battery",
              color: "green",
            },
            {
              type: "tile",
              entity: "sensor.tesla_range",
            },
            {
              type: "tile",
              entity: "binary_sensor.tesla_charging",
            },
            {
              type: "tile",
              entity: "binary_sensor.tesla_plugged_in",
            },
            {
              type: "tile",
              entity: "sensor.tesla_charging_rate",
            },
          ],
        },

        // Climate section
        {
          type: "grid",
          cards: [
            {
              type: "heading",
              heading: localize(
                "ui.panel.page-demo.config.midgard.sections.climate"
              ),
              heading_style: "title",
              icon: "mdi:air-conditioner",
            },
            {
              type: "tile",
              entity: "climate.tesla",
              features: [{ type: "target-temperature" }],
            },
          ],
        },
      ],
    },

    // SUBVIEW 8: Lights
    {
      title: localize("ui.panel.page-demo.config.midgard.views.lights"),
      path: "lights",
      back_path: "/lovelace/apercu",
      icon: "mdi:lightbulb-multiple",
      subview: true,
      type: "sections",
      sections: [
        // Living room section
        {
          type: "grid",
          cards: [
            {
              type: "heading",
              heading: localize(
                "ui.panel.page-demo.config.midgard.entities.living_room"
              ),
              heading_style: "title",
              icon: "mdi:sofa",
            },
            {
              type: "tile",
              entity: "light.living_room_ceiling",
              features: [{ type: "light-brightness" }],
            },
            {
              type: "tile",
              entity: "light.living_room_floor_lamp",
              features: [{ type: "light-brightness" }],
            },
            {
              type: "tile",
              entity: "light.living_room_spotlights",
              features: [{ type: "light-brightness" }],
            },
          ],
        },

        // Kitchen section
        {
          type: "grid",
          cards: [
            {
              type: "heading",
              heading: localize(
                "ui.panel.page-demo.config.midgard.entities.kitchen"
              ),
              heading_style: "title",
              icon: "mdi:stove",
            },
            {
              type: "tile",
              entity: "light.kitchen_ceiling",
              features: [{ type: "light-brightness" }],
            },
            {
              type: "tile",
              entity: "light.kitchen_worktop",
              features: [{ type: "light-brightness" }],
            },
          ],
        },

        // Bedroom section
        {
          type: "grid",
          cards: [
            {
              type: "heading",
              heading: localize(
                "ui.panel.page-demo.config.midgard.entities.bedroom"
              ),
              heading_style: "title",
              icon: "mdi:bed-king",
            },
            {
              type: "tile",
              entity: "light.bedroom_ceiling",
              features: [{ type: "light-brightness" }],
            },
            {
              type: "tile",
              entity: "light.bedroom_bedside_left",
              features: [{ type: "light-brightness" }],
            },
            {
              type: "tile",
              entity: "light.bedroom_bedside_right",
              features: [{ type: "light-brightness" }],
            },
          ],
        },

        // Child's bedroom section
        {
          type: "grid",
          cards: [
            {
              type: "heading",
              heading: localize(
                "ui.panel.page-demo.config.midgard.entities.bedroom_child"
              ),
              heading_style: "title",
              icon: "mdi:teddy-bear",
            },
            {
              type: "tile",
              entity: "light.bedroom_child_ceiling",
              features: [{ type: "light-brightness" }],
            },
            {
              type: "tile",
              entity: "light.bedroom_child_night_light",
              features: [{ type: "light-brightness" }],
            },
          ],
        },

        // Office section
        {
          type: "grid",
          cards: [
            {
              type: "heading",
              heading: localize(
                "ui.panel.page-demo.config.midgard.entities.office"
              ),
              heading_style: "title",
              icon: "mdi:desk",
            },
            {
              type: "tile",
              entity: "light.office_ceiling",
              features: [{ type: "light-brightness" }],
            },
            {
              type: "tile",
              entity: "light.office_desk_lamp",
              features: [{ type: "light-brightness" }],
            },
          ],
        },

        // Outdoor section
        {
          type: "grid",
          cards: [
            {
              type: "heading",
              heading: localize(
                "ui.panel.page-demo.config.midgard.entities.outdoor"
              ),
              heading_style: "title",
              icon: "mdi:tree",
            },
            {
              type: "tile",
              entity: "light.patio",
            },
            {
              type: "tile",
              entity: "light.garden",
              features: [{ type: "light-brightness" }],
            },
            {
              type: "tile",
              entity: "light.outdoor_entry",
            },
          ],
        },

        // Other section
        {
          type: "grid",
          cards: [
            {
              type: "heading",
              heading: "Other",
              heading_style: "title",
              icon: "mdi:lightbulb",
            },
            {
              type: "tile",
              entity: "light.entry",
            },
            {
              type: "tile",
              entity: "light.hallway_ground",
            },
            {
              type: "tile",
              entity: "light.hallway_first",
            },
            {
              type: "tile",
              entity: "light.bathroom",
            },
            {
              type: "tile",
              entity: "light.dining_room_chandelier",
              features: [{ type: "light-brightness" }],
            },
          ],
        },
      ],
    },

    // SUBVIEW 9: Connected Devices
    {
      title: localize("ui.panel.page-demo.config.midgard.views.devices"),
      path: "connected_devices",
      back_path: "/lovelace/apercu",
      icon: "mdi:power-plug",
      subview: true,
      type: "sections",
      sections: [
        // Appliances section
        {
          type: "grid",
          cards: [
            {
              type: "heading",
              heading: localize(
                "ui.panel.page-demo.config.midgard.sections.appliances"
              ),
              heading_style: "title",
              icon: "mdi:home-automation",
            },
            {
              type: "tile",
              entity: "binary_sensor.dishwasher_running",
            },
            {
              type: "tile",
              entity: "sensor.dishwasher_power",
              color: "light-blue",
            },
            {
              type: "tile",
              entity: "binary_sensor.washing_machine_running",
            },
            {
              type: "tile",
              entity: "sensor.washing_machine_power",
              color: "light-blue",
            },
            {
              type: "tile",
              entity: "sensor.oven_power",
              color: "light-blue",
            },
            {
              type: "tile",
              entity: "sensor.cooktop_power",
              color: "light-blue",
            },
            {
              type: "tile",
              entity: "sensor.fridge_power",
              color: "light-blue",
            },
          ],
        },
      ],
    },

    // SUBVIEW 10: Openings
    {
      title: localize("ui.panel.page-demo.config.midgard.views.openings"),
      path: "openings",
      back_path: "/lovelace/apercu",
      icon: "mdi:door-closed",
      subview: true,
      type: "sections",
      sections: [
        // Doors section
        {
          type: "grid",
          cards: [
            {
              type: "heading",
              heading: localize(
                "ui.panel.page-demo.config.midgard.sections.doors"
              ),
              heading_style: "title",
              icon: "mdi:door",
            },
            {
              type: "tile",
              entity: "binary_sensor.front_door",
            },
            {
              type: "tile",
              entity: "lock.front_door",
              features: [{ type: "lock-commands" }],
            },
            {
              type: "tile",
              entity: "binary_sensor.patio_door",
            },
          ],
        },

        // Windows section
        {
          type: "grid",
          cards: [
            {
              type: "heading",
              heading: localize(
                "ui.panel.page-demo.config.midgard.sections.windows"
              ),
              heading_style: "title",
              icon: "mdi:window-closed",
            },
            {
              type: "tile",
              entity: "binary_sensor.living_room_window",
            },
            {
              type: "tile",
              entity: "binary_sensor.kitchen_window",
            },
            {
              type: "tile",
              entity: "binary_sensor.bedroom_window",
            },
            {
              type: "tile",
              entity: "binary_sensor.bedroom_child_window",
            },
            {
              type: "tile",
              entity: "binary_sensor.office_window",
            },
            {
              type: "tile",
              entity: "binary_sensor.bathroom_window",
            },
          ],
        },
      ],
    },

    // SUBVIEW 11: Environment
    {
      title: localize("ui.panel.page-demo.config.midgard.views.environment"),
      path: "environment",
      back_path: "/lovelace/apercu",
      icon: "mdi:air-filter",
      subview: true,
      type: "sections",
      sections: [
        // Living room section
        {
          type: "grid",
          cards: [
            {
              type: "heading",
              heading: localize(
                "ui.panel.page-demo.config.midgard.entities.living_room"
              ),
              heading_style: "title",
              icon: "mdi:sofa",
            },
            {
              type: "tile",
              entity: "sensor.living_room_temperature",
            },
            {
              type: "tile",
              entity: "sensor.living_room_humidity",
            },
            {
              type: "tile",
              entity: "sensor.living_room_air_quality",
            },
          ],
        },

        // Kitchen section
        {
          type: "grid",
          cards: [
            {
              type: "heading",
              heading: localize(
                "ui.panel.page-demo.config.midgard.entities.kitchen"
              ),
              heading_style: "title",
              icon: "mdi:stove",
            },
            {
              type: "tile",
              entity: "sensor.kitchen_temperature",
            },
            {
              type: "tile",
              entity: "sensor.kitchen_humidity",
            },
          ],
        },

        // Bedroom section
        {
          type: "grid",
          cards: [
            {
              type: "heading",
              heading: localize(
                "ui.panel.page-demo.config.midgard.entities.bedroom"
              ),
              heading_style: "title",
              icon: "mdi:bed-king",
            },
            {
              type: "tile",
              entity: "sensor.bedroom_temperature",
            },
            {
              type: "tile",
              entity: "sensor.bedroom_humidity",
            },
            {
              type: "tile",
              entity: "sensor.bedroom_air_quality",
            },
          ],
        },

        // Child's bedroom section
        {
          type: "grid",
          cards: [
            {
              type: "heading",
              heading: localize(
                "ui.panel.page-demo.config.midgard.entities.bedroom_child"
              ),
              heading_style: "title",
              icon: "mdi:teddy-bear",
            },
            {
              type: "tile",
              entity: "sensor.bedroom_child_temperature",
            },
            {
              type: "tile",
              entity: "sensor.bedroom_child_humidity",
            },
            {
              type: "tile",
              entity: "sensor.bedroom_child_air_quality",
            },
          ],
        },

        // Office section
        {
          type: "grid",
          cards: [
            {
              type: "heading",
              heading: localize(
                "ui.panel.page-demo.config.midgard.entities.office"
              ),
              heading_style: "title",
              icon: "mdi:desk",
            },
            {
              type: "tile",
              entity: "sensor.office_temperature",
            },
            {
              type: "tile",
              entity: "sensor.office_humidity",
            },
            {
              type: "tile",
              entity: "sensor.office_air_quality",
            },
          ],
        },

        // Bathroom section
        {
          type: "grid",
          cards: [
            {
              type: "heading",
              heading: localize(
                "ui.panel.page-demo.config.midgard.entities.bathroom"
              ),
              heading_style: "title",
              icon: "mdi:shower",
            },
            {
              type: "tile",
              entity: "sensor.bathroom_temperature",
            },
            {
              type: "tile",
              entity: "sensor.bathroom_humidity",
            },
          ],
        },

        // Outdoor section
        {
          type: "grid",
          cards: [
            {
              type: "heading",
              heading: localize(
                "ui.panel.page-demo.config.midgard.entities.outdoor"
              ),
              heading_style: "title",
              icon: "mdi:tree",
            },
            {
              type: "tile",
              entity: "sensor.outdoor_temperature",
            },
            {
              type: "tile",
              entity: "sensor.outdoor_humidity",
            },
          ],
        },
      ],
    },
  ],
});
