import type { DemoConfig } from "../types";
import { demoEntitiesMidgard } from "./entities";
import { demoLovelaceMidgard } from "./lovelace";
import { demoThemeMidgard } from "./theme";

export const demoMidgard: DemoConfig = {
  authorName: "Jean-Loïc Pouffier",
  authorUrl: "https://github.com/jlpouffier/",
  name: "Maison Midgard",
  description:
    "A comprehensive smart home with multi-floor lighting, climate control, and Tesla integration",
  lovelace: demoLovelaceMidgard,
  entities: demoEntitiesMidgard,
  theme: demoThemeMidgard,
};
