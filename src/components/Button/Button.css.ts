import { style, styleVariants } from "@vanilla-extract/css";
import { vars } from "theme/theme.css";

export const base = style({
  background: "unset",
  borderWidth: "1px",
  borderStyle: "solid",
  padding: "unset",
  color: vars.colors.white,
  borderRadius: vars.radii.md
});

export const colorScheme = styleVariants({
  primary: {
    background: vars.colors.primary,
    borderColor: vars.colors.primary
  },
  danger: { background: vars.colors.danger, borderColor: vars.colors.danger }
});

export const size = styleVariants({
  sm: {
    padding: vars.space.xs
  },
  md: {
    padding: vars.space.sm
  },
  lg: {
    padding: vars.space.md
  }
});

export const variant = styleVariants({
  solid: {
    borderColor: "transparent"
  },
  outline: {
    background: "none"
  }
});
