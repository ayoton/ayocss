import type { Rule } from "@unocss/core";
import type { Theme } from "@unocss/preset-mini";

export const buttons: Rule<Theme>[] = [
  // displays
  [
    "btn",
    {
      cursor: "pointer",
      border: "1px solid gray",
      "font-size": "1rem",
      "padding-left": "1rem",
      "padding-right": "1rem",
      "padding-bottom": "0.5rem",
      "padding-top": "0.5rem",
      "font-weight": "500",
    },
  ],
  [
    /^btn-(\d+)$/,
    ([, u]) => ({
      "font-size": `${Number(u) / 4}rem`,
      "padding-left": `${Number(u) / 5}rem`,
      "padding-right": `${Number(u) / 5}rem`,
      "padding-bottom": `${Number(u) / 10}rem`,
      "padding-top": `${Number(u) / 10}rem`,
      "border-radius": `${Number(u) / 10}rem`,
    }),
    { autocomplete: "btn-<num>" },
  ],
];
