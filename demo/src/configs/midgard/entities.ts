import type { DemoConfig } from "../types";

export const demoEntitiesMidgard: DemoConfig["entities"] = (localize) =>
  Object.values({
    // ========== PERSON & ZONES ==========
    "person.jean_loic": {
      entity_id: "person.jean_loic",
      state: "home",
      attributes: {
        friendly_name: "Jean-Loïc",
        latitude: 44.84541278362286,
        longitude: -0.5748481987306129,
        gps_accuracy: 20,
        source: "device_tracker.jean_loic_phone",
      },
    },
    "zone.home": {
      entity_id: "zone.home",
      state: "zoning",
      attributes: {
        hidden: true,
        latitude: 44.84541278362286,
        longitude: -0.5748481987306129,
        radius: 100,
        friendly_name: "Home",
        icon: "mdi:home",
        passive: false,
      },
    },

    // ========== BINARY SENSORS ==========
    "binary_sensor.home_occupied": {
      entity_id: "binary_sensor.home_occupied",
      state: "on",
      attributes: {
        friendly_name: localize(
          "ui.panel.page-demo.config.midgard.entities.house_occupied"
        ),
        device_class: "occupancy",
      },
    },
    "binary_sensor.presence_ground_floor": {
      entity_id: "binary_sensor.presence_ground_floor",
      state: "on",
      attributes: {
        friendly_name:
          localize("ui.panel.page-demo.config.midgard.entities.ground_floor") +
          " " +
          localize("ui.panel.page-demo.config.midgard.entities.presence"),
        device_class: "occupancy",
      },
    },
    "binary_sensor.presence_first_floor": {
      entity_id: "binary_sensor.presence_first_floor",
      state: "off",
      attributes: {
        friendly_name:
          localize("ui.panel.page-demo.config.midgard.entities.first_floor") +
          " " +
          localize("ui.panel.page-demo.config.midgard.entities.presence"),
        device_class: "occupancy",
      },
    },
    "binary_sensor.ground_floor_heating": {
      entity_id: "binary_sensor.ground_floor_heating",
      state: "on",
      attributes: {
        friendly_name:
          localize("ui.panel.page-demo.config.midgard.entities.ground_floor") +
          " " +
          localize("ui.panel.page-demo.config.midgard.entities.heating"),
        device_class: "heat",
      },
    },
    "binary_sensor.first_floor_heating": {
      entity_id: "binary_sensor.first_floor_heating",
      state: "off",
      attributes: {
        friendly_name:
          localize("ui.panel.page-demo.config.midgard.entities.first_floor") +
          " " +
          localize("ui.panel.page-demo.config.midgard.entities.heating"),
        device_class: "heat",
      },
    },
    "binary_sensor.front_door": {
      entity_id: "binary_sensor.front_door",
      state: "off",
      attributes: {
        friendly_name: localize(
          "ui.panel.page-demo.config.midgard.entities.front_door"
        ),
        device_class: "door",
      },
    },
    "binary_sensor.patio_door": {
      entity_id: "binary_sensor.patio_door",
      state: "off",
      attributes: {
        friendly_name: localize(
          "ui.panel.page-demo.config.midgard.entities.patio_door"
        ),
        device_class: "door",
      },
    },
    "binary_sensor.living_room_window": {
      entity_id: "binary_sensor.living_room_window",
      state: "off",
      attributes: {
        friendly_name:
          localize("ui.panel.page-demo.config.midgard.entities.living_room") +
          " " +
          localize("ui.panel.page-demo.config.midgard.entities.window"),
        device_class: "window",
      },
    },
    "binary_sensor.kitchen_window": {
      entity_id: "binary_sensor.kitchen_window",
      state: "off",
      attributes: {
        friendly_name:
          localize("ui.panel.page-demo.config.midgard.entities.kitchen") +
          " " +
          localize("ui.panel.page-demo.config.midgard.entities.window"),
        device_class: "window",
      },
    },
    "binary_sensor.bedroom_window": {
      entity_id: "binary_sensor.bedroom_window",
      state: "off",
      attributes: {
        friendly_name:
          localize("ui.panel.page-demo.config.midgard.entities.bedroom") +
          " " +
          localize("ui.panel.page-demo.config.midgard.entities.window"),
        device_class: "window",
      },
    },
    "binary_sensor.bedroom_child_window": {
      entity_id: "binary_sensor.bedroom_child_window",
      state: "off",
      attributes: {
        friendly_name:
          localize("ui.panel.page-demo.config.midgard.entities.bedroom_child") +
          " " +
          localize("ui.panel.page-demo.config.midgard.entities.window"),
        device_class: "window",
      },
    },
    "binary_sensor.office_window": {
      entity_id: "binary_sensor.office_window",
      state: "off",
      attributes: {
        friendly_name:
          localize("ui.panel.page-demo.config.midgard.entities.office") +
          " " +
          localize("ui.panel.page-demo.config.midgard.entities.window"),
        device_class: "window",
      },
    },
    "binary_sensor.bathroom_window": {
      entity_id: "binary_sensor.bathroom_window",
      state: "off",
      attributes: {
        friendly_name:
          localize("ui.panel.page-demo.config.midgard.entities.bathroom") +
          " " +
          localize("ui.panel.page-demo.config.midgard.entities.window"),
        device_class: "window",
      },
    },
    "binary_sensor.dishwasher_running": {
      entity_id: "binary_sensor.dishwasher_running",
      state: "off",
      attributes: {
        friendly_name:
          localize("ui.panel.page-demo.config.midgard.entities.dishwasher") +
          " Running",
        device_class: "running",
      },
    },
    "binary_sensor.washing_machine_running": {
      entity_id: "binary_sensor.washing_machine_running",
      state: "on",
      attributes: {
        friendly_name:
          localize(
            "ui.panel.page-demo.config.midgard.entities.washing_machine"
          ) + " Running",
        device_class: "running",
      },
    },

    // ========== SENSORS ==========
    "sensor.outdoor_temperature": {
      entity_id: "sensor.outdoor_temperature",
      state: "18.5",
      attributes: {
        state_class: "measurement",
        unit_of_measurement: "°C",
        device_class: "temperature",
        friendly_name:
          localize("ui.panel.page-demo.config.midgard.entities.outdoor") +
          " " +
          localize("ui.panel.page-demo.config.midgard.entities.temperature"),
      },
    },
    "sensor.outdoor_humidity": {
      entity_id: "sensor.outdoor_humidity",
      state: "65",
      attributes: {
        state_class: "measurement",
        unit_of_measurement: "%",
        device_class: "humidity",
        friendly_name:
          localize("ui.panel.page-demo.config.midgard.entities.outdoor") +
          " " +
          localize("ui.panel.page-demo.config.midgard.entities.humidity"),
      },
    },
    "sensor.living_room_temperature": {
      entity_id: "sensor.living_room_temperature",
      state: "21.5",
      attributes: {
        state_class: "measurement",
        unit_of_measurement: "°C",
        device_class: "temperature",
        friendly_name:
          localize("ui.panel.page-demo.config.midgard.entities.living_room") +
          " " +
          localize("ui.panel.page-demo.config.midgard.entities.temperature"),
      },
    },
    "sensor.living_room_humidity": {
      entity_id: "sensor.living_room_humidity",
      state: "45",
      attributes: {
        state_class: "measurement",
        unit_of_measurement: "%",
        device_class: "humidity",
        friendly_name:
          localize("ui.panel.page-demo.config.midgard.entities.living_room") +
          " " +
          localize("ui.panel.page-demo.config.midgard.entities.humidity"),
      },
    },
    "sensor.living_room_air_quality": {
      entity_id: "sensor.living_room_air_quality",
      state: "Good",
      attributes: {
        friendly_name:
          localize("ui.panel.page-demo.config.midgard.entities.living_room") +
          " " +
          localize("ui.panel.page-demo.config.midgard.entities.air_quality"),
        icon: "mdi:air-filter",
      },
    },
    "sensor.kitchen_temperature": {
      entity_id: "sensor.kitchen_temperature",
      state: "22.0",
      attributes: {
        state_class: "measurement",
        unit_of_measurement: "°C",
        device_class: "temperature",
        friendly_name:
          localize("ui.panel.page-demo.config.midgard.entities.kitchen") +
          " " +
          localize("ui.panel.page-demo.config.midgard.entities.temperature"),
      },
    },
    "sensor.kitchen_humidity": {
      entity_id: "sensor.kitchen_humidity",
      state: "48",
      attributes: {
        state_class: "measurement",
        unit_of_measurement: "%",
        device_class: "humidity",
        friendly_name:
          localize("ui.panel.page-demo.config.midgard.entities.kitchen") +
          " " +
          localize("ui.panel.page-demo.config.midgard.entities.humidity"),
      },
    },
    "sensor.bedroom_temperature": {
      entity_id: "sensor.bedroom_temperature",
      state: "20.0",
      attributes: {
        state_class: "measurement",
        unit_of_measurement: "°C",
        device_class: "temperature",
        friendly_name:
          localize("ui.panel.page-demo.config.midgard.entities.bedroom") +
          " " +
          localize("ui.panel.page-demo.config.midgard.entities.temperature"),
      },
    },
    "sensor.bedroom_humidity": {
      entity_id: "sensor.bedroom_humidity",
      state: "50",
      attributes: {
        state_class: "measurement",
        unit_of_measurement: "%",
        device_class: "humidity",
        friendly_name:
          localize("ui.panel.page-demo.config.midgard.entities.bedroom") +
          " " +
          localize("ui.panel.page-demo.config.midgard.entities.humidity"),
      },
    },
    "sensor.bedroom_air_quality": {
      entity_id: "sensor.bedroom_air_quality",
      state: "Good",
      attributes: {
        friendly_name:
          localize("ui.panel.page-demo.config.midgard.entities.bedroom") +
          " " +
          localize("ui.panel.page-demo.config.midgard.entities.air_quality"),
        icon: "mdi:air-filter",
      },
    },
    "sensor.bedroom_child_temperature": {
      entity_id: "sensor.bedroom_child_temperature",
      state: "20.5",
      attributes: {
        state_class: "measurement",
        unit_of_measurement: "°C",
        device_class: "temperature",
        friendly_name:
          localize("ui.panel.page-demo.config.midgard.entities.bedroom_child") +
          " " +
          localize("ui.panel.page-demo.config.midgard.entities.temperature"),
      },
    },
    "sensor.bedroom_child_humidity": {
      entity_id: "sensor.bedroom_child_humidity",
      state: "52",
      attributes: {
        state_class: "measurement",
        unit_of_measurement: "%",
        device_class: "humidity",
        friendly_name:
          localize("ui.panel.page-demo.config.midgard.entities.bedroom_child") +
          " " +
          localize("ui.panel.page-demo.config.midgard.entities.humidity"),
      },
    },
    "sensor.bedroom_child_air_quality": {
      entity_id: "sensor.bedroom_child_air_quality",
      state: "Good",
      attributes: {
        friendly_name:
          localize("ui.panel.page-demo.config.midgard.entities.bedroom_child") +
          " " +
          localize("ui.panel.page-demo.config.midgard.entities.air_quality"),
        icon: "mdi:air-filter",
      },
    },
    "sensor.office_temperature": {
      entity_id: "sensor.office_temperature",
      state: "21.0",
      attributes: {
        state_class: "measurement",
        unit_of_measurement: "°C",
        device_class: "temperature",
        friendly_name:
          localize("ui.panel.page-demo.config.midgard.entities.office") +
          " " +
          localize("ui.panel.page-demo.config.midgard.entities.temperature"),
      },
    },
    "sensor.office_humidity": {
      entity_id: "sensor.office_humidity",
      state: "46",
      attributes: {
        state_class: "measurement",
        unit_of_measurement: "%",
        device_class: "humidity",
        friendly_name:
          localize("ui.panel.page-demo.config.midgard.entities.office") +
          " " +
          localize("ui.panel.page-demo.config.midgard.entities.humidity"),
      },
    },
    "sensor.office_air_quality": {
      entity_id: "sensor.office_air_quality",
      state: "Good",
      attributes: {
        friendly_name:
          localize("ui.panel.page-demo.config.midgard.entities.office") +
          " " +
          localize("ui.panel.page-demo.config.midgard.entities.air_quality"),
        icon: "mdi:air-filter",
      },
    },
    "sensor.bathroom_temperature": {
      entity_id: "sensor.bathroom_temperature",
      state: "22.5",
      attributes: {
        state_class: "measurement",
        unit_of_measurement: "°C",
        device_class: "temperature",
        friendly_name:
          localize("ui.panel.page-demo.config.midgard.entities.bathroom") +
          " " +
          localize("ui.panel.page-demo.config.midgard.entities.temperature"),
      },
    },
    "sensor.bathroom_humidity": {
      entity_id: "sensor.bathroom_humidity",
      state: "70",
      attributes: {
        state_class: "measurement",
        unit_of_measurement: "%",
        device_class: "humidity",
        friendly_name:
          localize("ui.panel.page-demo.config.midgard.entities.bathroom") +
          " " +
          localize("ui.panel.page-demo.config.midgard.entities.humidity"),
      },
    },
    "sensor.wind_speed": {
      entity_id: "sensor.wind_speed",
      state: "12",
      attributes: {
        state_class: "measurement",
        unit_of_measurement: "km/h",
        device_class: "wind_speed",
        friendly_name: localize(
          "ui.panel.page-demo.config.midgard.entities.wind_speed"
        ),
      },
    },
    "sensor.wind_direction": {
      entity_id: "sensor.wind_direction",
      state: "230",
      attributes: {
        unit_of_measurement: "°",
        friendly_name: localize(
          "ui.panel.page-demo.config.midgard.entities.wind_direction"
        ),
        icon: "mdi:compass",
      },
    },
    "sensor.dishwasher_power": {
      entity_id: "sensor.dishwasher_power",
      state: "0",
      attributes: {
        state_class: "measurement",
        unit_of_measurement: "W",
        device_class: "power",
        friendly_name:
          localize("ui.panel.page-demo.config.midgard.entities.dishwasher") +
          " Power",
      },
    },
    "sensor.washing_machine_power": {
      entity_id: "sensor.washing_machine_power",
      state: "1200",
      attributes: {
        state_class: "measurement",
        unit_of_measurement: "W",
        device_class: "power",
        friendly_name:
          localize(
            "ui.panel.page-demo.config.midgard.entities.washing_machine"
          ) + " Power",
      },
    },
    "sensor.oven_power": {
      entity_id: "sensor.oven_power",
      state: "0",
      attributes: {
        state_class: "measurement",
        unit_of_measurement: "W",
        device_class: "power",
        friendly_name:
          localize("ui.panel.page-demo.config.midgard.entities.oven") +
          " Power",
      },
    },
    "sensor.cooktop_power": {
      entity_id: "sensor.cooktop_power",
      state: "0",
      attributes: {
        state_class: "measurement",
        unit_of_measurement: "W",
        device_class: "power",
        friendly_name:
          localize("ui.panel.page-demo.config.midgard.entities.cooktop") +
          " Power",
      },
    },
    "sensor.fridge_power": {
      entity_id: "sensor.fridge_power",
      state: "85",
      attributes: {
        state_class: "measurement",
        unit_of_measurement: "W",
        device_class: "power",
        friendly_name:
          localize("ui.panel.page-demo.config.midgard.entities.fridge") +
          " Power",
      },
    },

    // ========== LIGHTS ==========
    "light.ground_floor_lights": {
      entity_id: "light.ground_floor_lights",
      state: "on",
      attributes: {
        friendly_name:
          localize("ui.panel.page-demo.config.midgard.entities.ground_floor") +
          " Lights",
        supported_features: 0,
      },
    },
    "light.first_floor_lights": {
      entity_id: "light.first_floor_lights",
      state: "off",
      attributes: {
        friendly_name:
          localize("ui.panel.page-demo.config.midgard.entities.first_floor") +
          " Lights",
        supported_features: 0,
      },
    },
    "light.living_room_ceiling": {
      entity_id: "light.living_room_ceiling",
      state: "on",
      attributes: {
        supported_color_modes: ["brightness"],
        color_mode: "brightness",
        brightness: 200,
        friendly_name:
          localize("ui.panel.page-demo.config.midgard.entities.living_room") +
          " " +
          localize("ui.panel.page-demo.config.midgard.entities.ceiling"),
        supported_features: 32,
      },
    },
    "light.living_room_floor_lamp": {
      entity_id: "light.living_room_floor_lamp",
      state: "on",
      attributes: {
        supported_color_modes: ["brightness", "color_temp"],
        color_mode: "color_temp",
        brightness: 178,
        color_temp: 387,
        icon: "mdi:floor-lamp",
        friendly_name:
          localize("ui.panel.page-demo.config.midgard.entities.living_room") +
          " " +
          localize("ui.panel.page-demo.config.midgard.entities.floor_lamp"),
        supported_features: 44,
      },
    },
    "light.living_room_spotlights": {
      entity_id: "light.living_room_spotlights",
      state: "on",
      attributes: {
        supported_color_modes: ["brightness"],
        color_mode: "brightness",
        brightness: 150,
        icon: "mdi:ceiling-light-multiple",
        friendly_name:
          localize("ui.panel.page-demo.config.midgard.entities.living_room") +
          " " +
          localize("ui.panel.page-demo.config.midgard.entities.spotlights"),
        supported_features: 32,
      },
    },
    "light.kitchen_ceiling": {
      entity_id: "light.kitchen_ceiling",
      state: "on",
      attributes: {
        supported_color_modes: ["brightness"],
        color_mode: "brightness",
        brightness: 255,
        friendly_name:
          localize("ui.panel.page-demo.config.midgard.entities.kitchen") +
          " " +
          localize("ui.panel.page-demo.config.midgard.entities.ceiling"),
        supported_features: 32,
      },
    },
    "light.kitchen_worktop": {
      entity_id: "light.kitchen_worktop",
      state: "on",
      attributes: {
        supported_color_modes: ["brightness"],
        color_mode: "brightness",
        brightness: 220,
        friendly_name:
          localize("ui.panel.page-demo.config.midgard.entities.kitchen") +
          " Worktop",
        supported_features: 32,
      },
    },
    "light.dining_room_chandelier": {
      entity_id: "light.dining_room_chandelier",
      state: "off",
      attributes: {
        supported_color_modes: ["brightness"],
        friendly_name:
          localize("ui.panel.page-demo.config.midgard.entities.dining_room") +
          " Chandelier",
        supported_features: 32,
      },
    },
    "light.entry": {
      entity_id: "light.entry",
      state: "on",
      attributes: {
        supported_color_modes: ["onoff"],
        color_mode: "onoff",
        friendly_name: localize(
          "ui.panel.page-demo.config.midgard.entities.entry"
        ),
        supported_features: 0,
      },
    },
    "light.hallway_ground": {
      entity_id: "light.hallway_ground",
      state: "on",
      attributes: {
        supported_color_modes: ["onoff"],
        color_mode: "onoff",
        friendly_name:
          localize("ui.panel.page-demo.config.midgard.entities.hallway") +
          " " +
          localize("ui.panel.page-demo.config.midgard.entities.ground_floor"),
        supported_features: 0,
      },
    },
    "light.hallway_first": {
      entity_id: "light.hallway_first",
      state: "off",
      attributes: {
        supported_color_modes: ["onoff"],
        friendly_name:
          localize("ui.panel.page-demo.config.midgard.entities.hallway") +
          " " +
          localize("ui.panel.page-demo.config.midgard.entities.first_floor"),
        supported_features: 0,
      },
    },
    "light.bedroom_ceiling": {
      entity_id: "light.bedroom_ceiling",
      state: "off",
      attributes: {
        supported_color_modes: ["brightness"],
        friendly_name:
          localize("ui.panel.page-demo.config.midgard.entities.bedroom") +
          " " +
          localize("ui.panel.page-demo.config.midgard.entities.ceiling"),
        supported_features: 32,
      },
    },
    "light.bedroom_bedside_left": {
      entity_id: "light.bedroom_bedside_left",
      state: "off",
      attributes: {
        supported_color_modes: ["brightness"],
        friendly_name:
          localize("ui.panel.page-demo.config.midgard.entities.bedroom") +
          " " +
          localize("ui.panel.page-demo.config.midgard.entities.bedside_left"),
        supported_features: 32,
      },
    },
    "light.bedroom_bedside_right": {
      entity_id: "light.bedroom_bedside_right",
      state: "off",
      attributes: {
        supported_color_modes: ["brightness"],
        friendly_name:
          localize("ui.panel.page-demo.config.midgard.entities.bedroom") +
          " " +
          localize("ui.panel.page-demo.config.midgard.entities.bedside_right"),
        supported_features: 32,
      },
    },
    "light.bedroom_child_ceiling": {
      entity_id: "light.bedroom_child_ceiling",
      state: "off",
      attributes: {
        supported_color_modes: ["brightness"],
        friendly_name:
          localize("ui.panel.page-demo.config.midgard.entities.bedroom_child") +
          " " +
          localize("ui.panel.page-demo.config.midgard.entities.ceiling"),
        supported_features: 32,
      },
    },
    "light.bedroom_child_night_light": {
      entity_id: "light.bedroom_child_night_light",
      state: "on",
      attributes: {
        supported_color_modes: ["brightness", "rgb"],
        color_mode: "rgb",
        brightness: 50,
        rgb_color: [255, 150, 100],
        friendly_name:
          localize("ui.panel.page-demo.config.midgard.entities.bedroom_child") +
          " " +
          localize("ui.panel.page-demo.config.midgard.entities.night_light"),
        supported_features: 48,
      },
    },
    "light.office_ceiling": {
      entity_id: "light.office_ceiling",
      state: "on",
      attributes: {
        supported_color_modes: ["brightness"],
        color_mode: "brightness",
        brightness: 255,
        friendly_name:
          localize("ui.panel.page-demo.config.midgard.entities.office") +
          " " +
          localize("ui.panel.page-demo.config.midgard.entities.ceiling"),
        supported_features: 32,
      },
    },
    "light.office_desk_lamp": {
      entity_id: "light.office_desk_lamp",
      state: "on",
      attributes: {
        supported_color_modes: ["brightness"],
        color_mode: "brightness",
        brightness: 200,
        friendly_name:
          localize("ui.panel.page-demo.config.midgard.entities.office") +
          " " +
          localize("ui.panel.page-demo.config.midgard.entities.desk_lamp"),
        supported_features: 32,
      },
    },
    "light.bathroom": {
      entity_id: "light.bathroom",
      state: "off",
      attributes: {
        supported_color_modes: ["onoff"],
        friendly_name: localize(
          "ui.panel.page-demo.config.midgard.entities.bathroom"
        ),
        supported_features: 0,
      },
    },
    "light.outdoor": {
      entity_id: "light.outdoor",
      state: "off",
      attributes: {
        friendly_name:
          localize("ui.panel.page-demo.config.midgard.entities.outdoor") +
          " Lights",
        supported_features: 0,
      },
    },
    "light.patio": {
      entity_id: "light.patio",
      state: "off",
      attributes: {
        supported_color_modes: ["onoff"],
        friendly_name: localize(
          "ui.panel.page-demo.config.midgard.entities.patio_light"
        ),
        supported_features: 0,
      },
    },
    "light.garden": {
      entity_id: "light.garden",
      state: "off",
      attributes: {
        supported_color_modes: ["brightness"],
        friendly_name: localize(
          "ui.panel.page-demo.config.midgard.entities.garden_lights"
        ),
        supported_features: 32,
      },
    },
    "light.outdoor_entry": {
      entity_id: "light.outdoor_entry",
      state: "on",
      attributes: {
        supported_color_modes: ["onoff"],
        color_mode: "onoff",
        friendly_name:
          localize("ui.panel.page-demo.config.midgard.entities.outdoor") +
          " " +
          localize("ui.panel.page-demo.config.midgard.entities.entry"),
        supported_features: 0,
      },
    },

    // ========== CLIMATE ==========
    "climate.living_room": {
      entity_id: "climate.living_room",
      state: "heat",
      attributes: {
        hvac_modes: ["off", "heat", "cool", "auto"],
        min_temp: 15,
        max_temp: 30,
        target_temp_step: 0.5,
        current_temperature: 21.5,
        temperature: 22,
        friendly_name:
          localize("ui.panel.page-demo.config.midgard.entities.living_room") +
          " Thermostat",
        supported_features: 17,
      },
    },
    "climate.kitchen": {
      entity_id: "climate.kitchen",
      state: "heat",
      attributes: {
        hvac_modes: ["off", "heat", "cool", "auto"],
        min_temp: 15,
        max_temp: 30,
        target_temp_step: 0.5,
        current_temperature: 22.0,
        temperature: 22,
        friendly_name:
          localize("ui.panel.page-demo.config.midgard.entities.kitchen") +
          " Thermostat",
        supported_features: 17,
      },
    },
    "climate.bedroom": {
      entity_id: "climate.bedroom",
      state: "off",
      attributes: {
        hvac_modes: ["off", "heat", "cool", "auto"],
        min_temp: 15,
        max_temp: 30,
        target_temp_step: 0.5,
        current_temperature: 20.0,
        temperature: 20,
        friendly_name:
          localize("ui.panel.page-demo.config.midgard.entities.bedroom") +
          " Thermostat",
        supported_features: 17,
      },
    },
    "climate.bedroom_child": {
      entity_id: "climate.bedroom_child",
      state: "heat",
      attributes: {
        hvac_modes: ["off", "heat", "cool", "auto"],
        min_temp: 15,
        max_temp: 30,
        target_temp_step: 0.5,
        current_temperature: 20.5,
        temperature: 21,
        friendly_name:
          localize("ui.panel.page-demo.config.midgard.entities.bedroom_child") +
          " Thermostat",
        supported_features: 17,
      },
    },
    "climate.office": {
      entity_id: "climate.office",
      state: "heat",
      attributes: {
        hvac_modes: ["off", "heat", "cool", "auto"],
        min_temp: 15,
        max_temp: 30,
        target_temp_step: 0.5,
        current_temperature: 21.0,
        temperature: 22,
        friendly_name:
          localize("ui.panel.page-demo.config.midgard.entities.office") +
          " Thermostat",
        supported_features: 17,
      },
    },

    // ========== COVERS ==========
    "cover.living_room_shutter_1": {
      entity_id: "cover.living_room_shutter_1",
      state: "open",
      attributes: {
        current_position: 100,
        device_class: "shutter",
        friendly_name:
          localize("ui.panel.page-demo.config.midgard.entities.living_room") +
          " " +
          localize("ui.panel.page-demo.config.midgard.entities.shutter") +
          " 1",
        supported_features: 15,
      },
    },
    "cover.living_room_shutter_2": {
      entity_id: "cover.living_room_shutter_2",
      state: "open",
      attributes: {
        current_position: 100,
        device_class: "shutter",
        friendly_name:
          localize("ui.panel.page-demo.config.midgard.entities.living_room") +
          " " +
          localize("ui.panel.page-demo.config.midgard.entities.shutter") +
          " 2",
        supported_features: 15,
      },
    },
    "cover.living_room_shutter_3": {
      entity_id: "cover.living_room_shutter_3",
      state: "open",
      attributes: {
        current_position: 100,
        device_class: "shutter",
        friendly_name:
          localize("ui.panel.page-demo.config.midgard.entities.living_room") +
          " " +
          localize("ui.panel.page-demo.config.midgard.entities.shutter") +
          " 3",
        supported_features: 15,
      },
    },
    "cover.kitchen_shutter": {
      entity_id: "cover.kitchen_shutter",
      state: "open",
      attributes: {
        current_position: 100,
        device_class: "shutter",
        friendly_name:
          localize("ui.panel.page-demo.config.midgard.entities.kitchen") +
          " " +
          localize("ui.panel.page-demo.config.midgard.entities.shutter"),
        supported_features: 15,
      },
    },
    "cover.bedroom_shutter": {
      entity_id: "cover.bedroom_shutter",
      state: "closed",
      attributes: {
        current_position: 0,
        device_class: "shutter",
        friendly_name:
          localize("ui.panel.page-demo.config.midgard.entities.bedroom") +
          " " +
          localize("ui.panel.page-demo.config.midgard.entities.shutter"),
        supported_features: 15,
      },
    },
    "cover.bedroom_curtain": {
      entity_id: "cover.bedroom_curtain",
      state: "closed",
      attributes: {
        current_position: 0,
        device_class: "curtain",
        friendly_name:
          localize("ui.panel.page-demo.config.midgard.entities.bedroom") +
          " " +
          localize("ui.panel.page-demo.config.midgard.entities.curtain"),
        supported_features: 15,
      },
    },
    "cover.bedroom_child_shutter": {
      entity_id: "cover.bedroom_child_shutter",
      state: "closed",
      attributes: {
        current_position: 0,
        device_class: "shutter",
        friendly_name:
          localize("ui.panel.page-demo.config.midgard.entities.bedroom_child") +
          " " +
          localize("ui.panel.page-demo.config.midgard.entities.shutter"),
        supported_features: 15,
      },
    },
    "cover.office_shutter": {
      entity_id: "cover.office_shutter",
      state: "open",
      attributes: {
        current_position: 50,
        device_class: "shutter",
        friendly_name:
          localize("ui.panel.page-demo.config.midgard.entities.office") +
          " " +
          localize("ui.panel.page-demo.config.midgard.entities.shutter"),
        supported_features: 15,
      },
    },
    "cover.office_curtain": {
      entity_id: "cover.office_curtain",
      state: "open",
      attributes: {
        current_position: 100,
        device_class: "curtain",
        friendly_name:
          localize("ui.panel.page-demo.config.midgard.entities.office") +
          " " +
          localize("ui.panel.page-demo.config.midgard.entities.curtain"),
        supported_features: 15,
      },
    },

    // ========== MEDIA PLAYERS ==========
    "media_player.living_room_apple_tv": {
      entity_id: "media_player.living_room_apple_tv",
      state: "playing",
      attributes: {
        friendly_name:
          localize("ui.panel.page-demo.config.midgard.entities.living_room") +
          " Apple TV",
        supported_features: 415997,
        media_content_type: "tvshow",
        media_title: "Home Assistant Documentary",
        media_artist: "Open Home Foundation",
        volume_level: 0.45,
      },
    },
    "media_player.living_room_sonos": {
      entity_id: "media_player.living_room_sonos",
      state: "idle",
      attributes: {
        friendly_name:
          localize("ui.panel.page-demo.config.midgard.entities.living_room") +
          " Sonos",
        supported_features: 415997,
        volume_level: 0.35,
      },
    },
    "media_player.kitchen_sonos": {
      entity_id: "media_player.kitchen_sonos",
      state: "playing",
      attributes: {
        friendly_name:
          localize("ui.panel.page-demo.config.midgard.entities.kitchen") +
          " Sonos",
        supported_features: 415997,
        media_content_type: "music",
        media_title: "Home",
        media_artist: "Blue October",
        volume_level: 0.25,
      },
    },
    "media_player.office_sonos": {
      entity_id: "media_player.office_sonos",
      state: "idle",
      attributes: {
        friendly_name:
          localize("ui.panel.page-demo.config.midgard.entities.office") +
          " Sonos",
        supported_features: 415997,
        volume_level: 0.4,
      },
    },
    "media_player.bedroom_sonos": {
      entity_id: "media_player.bedroom_sonos",
      state: "off",
      attributes: {
        friendly_name:
          localize("ui.panel.page-demo.config.midgard.entities.bedroom") +
          " Sonos",
        supported_features: 415997,
      },
    },

    // ========== TESLA ==========
    "device_tracker.tesla": {
      entity_id: "device_tracker.tesla",
      state: "home",
      attributes: {
        friendly_name: "Tesla Model 3",
        icon: "mdi:car-electric",
        latitude: 44.84541278362286,
        longitude: -0.5748481987306129,
        gps_accuracy: 5,
      },
    },
    "sensor.tesla_battery": {
      entity_id: "sensor.tesla_battery",
      state: "85",
      attributes: {
        unit_of_measurement: "%",
        device_class: "battery",
        friendly_name: localize(
          "ui.panel.page-demo.config.midgard.entities.vehicle_battery"
        ),
      },
    },
    "sensor.tesla_range": {
      entity_id: "sensor.tesla_range",
      state: "425",
      attributes: {
        unit_of_measurement: "km",
        device_class: "distance",
        friendly_name: localize(
          "ui.panel.page-demo.config.midgard.entities.vehicle_range"
        ),
        icon: "mdi:map-marker-distance",
      },
    },
    "sensor.tesla_charging_rate": {
      entity_id: "sensor.tesla_charging_rate",
      state: "0",
      attributes: {
        unit_of_measurement: "km/h",
        friendly_name: "Tesla Charging Rate",
        icon: "mdi:speedometer",
      },
    },
    "binary_sensor.tesla_charging": {
      entity_id: "binary_sensor.tesla_charging",
      state: "off",
      attributes: {
        friendly_name: localize(
          "ui.panel.page-demo.config.midgard.entities.vehicle_charging"
        ),
        device_class: "battery_charging",
      },
    },
    "binary_sensor.tesla_plugged_in": {
      entity_id: "binary_sensor.tesla_plugged_in",
      state: "off",
      attributes: {
        friendly_name: "Tesla Plugged In",
        device_class: "plug",
      },
    },
    "lock.tesla_doors": {
      entity_id: "lock.tesla_doors",
      state: "locked",
      attributes: {
        friendly_name: "Tesla Doors",
      },
    },
    "climate.tesla": {
      entity_id: "climate.tesla",
      state: "off",
      attributes: {
        hvac_modes: ["off", "heat_cool"],
        current_temperature: 24,
        temperature: 22,
        friendly_name: "Tesla Climate",
        supported_features: 385,
      },
    },
    "switch.tesla_sentry_mode": {
      entity_id: "switch.tesla_sentry_mode",
      state: "off",
      attributes: {
        friendly_name: "Tesla Sentry Mode",
        icon: "mdi:cctv",
      },
    },

    // ========== WEATHER ==========
    "weather.home": {
      entity_id: "weather.home",
      state: "sunny",
      attributes: {
        temperature: 18.5,
        temperature_unit: "°C",
        humidity: 65,
        pressure: 1013,
        pressure_unit: "hPa",
        wind_speed: 12,
        wind_speed_unit: "km/h",
        wind_bearing: 230,
        visibility: 10,
        visibility_unit: "km",
        forecast: [
          {
            condition: "sunny",
            temperature: 22,
            templow: 15,
            datetime: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
            precipitation: 0,
            precipitation_probability: 0,
          },
          {
            condition: "partlycloudy",
            temperature: 20,
            templow: 14,
            datetime: new Date(
              Date.now() + 2 * 24 * 60 * 60 * 1000
            ).toISOString(),
            precipitation: 0,
            precipitation_probability: 10,
          },
          {
            condition: "rainy",
            temperature: 18,
            templow: 12,
            datetime: new Date(
              Date.now() + 3 * 24 * 60 * 60 * 1000
            ).toISOString(),
            precipitation: 5,
            precipitation_probability: 70,
          },
        ],
        friendly_name: localize(
          "ui.panel.page-demo.config.midgard.entities.weather_forecast"
        ),
      },
    },

    // ========== OTHER ==========
    "lock.front_door": {
      entity_id: "lock.front_door",
      state: "locked",
      attributes: {
        friendly_name: localize(
          "ui.panel.page-demo.config.midgard.entities.front_door"
        ),
      },
    },
    "switch.voice_assistant_office": {
      entity_id: "switch.voice_assistant_office",
      state: "on",
      attributes: {
        friendly_name:
          localize("ui.panel.page-demo.config.midgard.entities.office") +
          " " +
          localize(
            "ui.panel.page-demo.config.midgard.entities.voice_assistant"
          ),
        icon: "mdi:microphone",
      },
    },
  });
