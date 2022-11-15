import type { Rule } from "@unocss/core";
import type { Theme } from "@unocss/preset-mini";
import { toEscapedSelector } from "@unocss/core";
import { usableColor } from "../utils";

export const buttons: Rule<Theme>[] = [
  // displays
  [
    /^btn$/,
    (_, { rawSelector }) => {
      const selector = toEscapedSelector(rawSelector);
      return `
      ${selector} {cursor: pointer;
      border: 1px solid transparent;
      font-size: 1rem;
      padding-left: 1rem;
      padding-right: 1rem;
      padding-bottom: 0.5rem;
      padding-top: 0.5rem;
      border-radius: 0.5rem;
      font-weight: 500;}
      ${selector}:disabled {
        cursor: not-allowed;
        opacity: 0.6;
      }
      `;
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
  [
    /^btn-([a-zA-Z]+)$/,
    ([, u], { theme }) => {
      return {
        color: usableColor(`${u}-100`, theme),
        "background-color": usableColor(`${u}-500`, theme),
      };
    },
    { autocomplete: "btn-$colors" },
  ],
];
