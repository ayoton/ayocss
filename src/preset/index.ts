import type { Preset } from "@unocss/core";
import type { PresetMiniOptions, Theme } from "@unocss/preset-mini";
import { theme } from "@unocss/preset-mini/theme";

import { preflights } from "@unocss/preset-mini";
import { variants } from "./variants";
import { rules } from "./rules";
import { shortcuts } from "./shortcuts";

export { colors, preflights } from "@unocss/preset-mini";

export type { Theme } from "@unocss/preset-mini";

export { rules, variants };

export interface presetAyoOptions extends PresetMiniOptions {}

export const presetAyo = (options: presetAyoOptions = {}): Preset<Theme> => {
  options.dark = options.dark ?? "class";
  options.attributifyPseudo = options.attributifyPseudo ?? false;
  options.preflight = options.preflight ?? true;

  return {
    name: "ayocss",
    options,
    theme,
    rules,
    shortcuts,
    variants: variants(options),
    preflights: options.preflight ? preflights : [],
    prefix: options.prefix,
  };
};

export default presetAyo;
