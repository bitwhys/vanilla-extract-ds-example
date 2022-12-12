import React from "react";
import { Flex } from "../components";
import { useColorMode } from "./colorMode";

export const ColorModeSwitcher = () => {
  const { setColorMode, toggleColorMode, colorMode } = useColorMode();

  React.useEffect(() => {
    const el = document.querySelector("[data-color-mode]");
    el?.setAttribute("data-color-mode", colorMode);
  }, [colorMode]);
  return (
    <Flex>
      <button onClick={() => setColorMode("light")}>Light Mode</button>
      <button onClick={() => setColorMode("dark")}>Dark Mode</button>
      <button onClick={toggleColorMode}>Toggle Mode</button>
    </Flex>
  );
};
