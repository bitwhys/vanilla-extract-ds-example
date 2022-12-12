import {
  createTheme,
  style,
  globalStyle,
  createGlobalTheme
} from "@vanilla-extract/css";

const fonts = {
  body:
    "-apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Ubuntu, roboto, noto, arial, sans-serif"
};

const fontSizes = {
  base: "16px",
  body: "1rem",
  bodySmall: "0.875rem",
  caption: "0.75rem",
  title: "1.5rem",
  subtitle: "1rem",
  heading1: "6rem",
  heading2: "3.75rem",
  heading3: "3rem",
  heading4: "2.125rem",
  heading5: "1.5rem",
  heading6: "1.25rem"
};

const fontWeights = {};

const lineHeights = {};

const letterSpacings = {};

const palette = {
  background: "white",
  white: "white",
  black: "#0b0e13",
  text: "#161e2e",
  primary: "#574feb",
  secondary: "#7c3aed",
  info: "#1e67d5",
  success: "#0a7d33",
  danger: "#da1717",
  warning: "#f59e0b",
  blue: "#3b82f6",
  green: "#10b981",
  red: "#ef4444",
  orange: "#f59e0b",
  pink: "#ec4899",
  purple: "#7c3aed",
  indigo: "#574feb",
  gray: "#626f84"
};

const space = {
  xxs: "0.25rem",
  xs: "0.5rem",
  sm: "1rem",
  md: "1.5rem",
  lg: "2rem",
  xl: "2.5rem"
};

const breakpoints = {};

const borders = {};

const radii = {
  sm: "4px",
  md: "6px",
  lg: "8px",
  rounded: "100em"
};

const zIndices = {};

const elevations = {
  base: `0 1px 2px rgba(0,0,0,0.07), 0 2px 4px rgba(0,0,0,0.07), 0 4px 8px rgba(0,0,0,0.07), 0 8px 16px rgba(0,0,0,0.07), 0 16px 32px rgba(0,0,0,0.07), 0 32px 64px rgba(0,0,0,0.07)`
};

const layerStyles = {};

const textStyles = {};

const initialColorMode = "light";

const colorModes = ["light", "dark"];

const global = {};

export const vars = createGlobalTheme(":root", {
  fonts,
  fontSizes,
  colors: palette,
  space,
  radii
});

globalStyle("html, body", {
  fontFamily: vars.fonts.body,
  fontSize: vars.fontSizes.base,
  color: vars.colors.text
});

globalStyle("*, *:before, *:after", {
  boxSizing: "border-box"
});

export const header = style({
  color: vars.colors.primary,
  fontSize: vars.fontSizes.body
});

export const defaultTheme = createTheme(vars, {
  fonts,
  fontSizes,
  colors: palette,
  space,
  radii
});

export const altTheme = createTheme(vars, {
  fonts,
  fontSizes,
  colors: { ...palette, primary: "pink" },
  space,
  radii
});
