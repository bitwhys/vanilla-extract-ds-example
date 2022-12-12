import React from "react";
import { createContext } from "../utils";

type ColorMode = "light" | "dark";

type ColorModeContextType = {
  colorMode: ColorMode;
  toggleColorMode: () => void;
  setColorMode: (value: ColorMode) => void;
};

const [
  ColorModeContextProvider,
  useColorMode,
  ColorModeContext
] = createContext<ColorModeContextType>();

const ColorModeProvider = (props: any) => {
  const { children } = props;
  const [colorMode, setColorMode] = React.useState<ColorMode>("light");

  const toggleColorMode = () => {
    switch (colorMode) {
      case "light":
        setColorMode("dark");
        break;

      default:
        setColorMode("light");
        break;
    }
  };

  return (
    <ColorModeContextProvider
      value={{ colorMode, setColorMode, toggleColorMode }}
    >
      {children}
    </ColorModeContextProvider>
  );
};

export { ColorModeProvider, useColorMode, ColorModeContext };
