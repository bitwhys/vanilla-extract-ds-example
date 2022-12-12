import React from "react";
import { Button, Card } from "./components";
import {
  header,
  defaultTheme,
  system,
  ColorModeSwitcher,
  ColorModeProvider
} from "./theme";

function App() {
  return (
    <ColorModeProvider>
      <div className={defaultTheme} data-color-mode="dark">
        <ColorModeSwitcher />
        <header className={header}>Hello World</header>
        <br />
        <Button>Button</Button>
        <br />
        <Button colorScheme="danger">Button</Button>
        <br />
        <Button colorScheme="danger" variant="outline">
          Button
        </Button>
        <br />
        <div
          className={system({
            display: "flex",
            paddingX: "small",
            flexDirection: {
              mobile: "column",
              desktop: "row"
            },
            background: {
              lightMode: "blue-50",
              darkMode: "gray-700"
            }
          })}
        >
          This will changed based on colorMode
        </div>
        <div data-color-mode="light">
          <div
            className={system({
              display: "flex",
              paddingX: "small",
              flexDirection: {
                mobile: "column",
                desktop: "row"
              },
              background: {
                lightMode: "blue-50",
                darkMode: "gray-700"
              }
            })}
          >
            This will always be light
          </div>
        </div>
        <div data-color-mode="dark">
          <div
            className={system({
              display: "flex",
              paddingX: "small",
              flexDirection: {
                mobile: "column",
                desktop: "row"
              },
              background: {
                lightMode: "blue-50",
                darkMode: "gray-700"
              }
            })}
          >
            This will always be dark
          </div>
        </div>
        <Card>
          <Card.Header>Header</Card.Header>
          The content
        </Card>
      </div>
    </ColorModeProvider>
  );
}

export default App;
