import type { Shortcut } from "@unocss/core";
import type { Theme } from "@unocss/preset-mini";

export const buttonShortcuts: Shortcut<Theme>[] = [
  [
    /^btn-(xs|sm|md|lg|xl|2xl)$/,
    ([, u]) => {
      const val: any = { xs: 2, sm: 3, md: 4, lg: 6, xl: 8, "2xl": 10 };
      return `btn-${val[u]}`;
    },
    { autocomplete: "btn-(xs|sm|md|lg|xl|2xl)" },
  ],
  [
    /^btn-([a-zA-Z]+)$/,
    ([, u]) => `color-${u}-100 bg-${u}-500 hover:bg-${u}-600`,
    { autocomplete: "btn-$colors" },
  ],
];
