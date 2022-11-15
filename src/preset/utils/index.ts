// import type {} from "@unocss/core"
import type { Theme } from "@unocss/preset-mini";
import { parseColor, colorToString } from "@unocss/preset-mini/utils";

export const usableColor = (
  colorBody: string,
  theme: Theme,
  fallBackVarName?: string
) => {
  const data = parseColor(colorBody, theme);
  if (!data || (!data.color && !data.cssColor)) {
    return "transparent";
  }
  const { alpha, color, cssColor } = data;
  return colorToString(
    cssColor || color!,
    fallBackVarName ? `var(${fallBackVarName})` : alpha || 1
  );
};
