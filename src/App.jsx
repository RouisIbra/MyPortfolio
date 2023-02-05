import React, { useCallback, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import {} from "@mui/material/styles";
import HomePage from "./pages/HomePage";
import ThemeMode from "./context/ThemeMode";
import { ThemeProvider } from "@emotion/react";
import { dark } from "@mui/material/styles/createPalette";
import darkTheme from "./styles/darkTheme";
import lightTheme from "./styles/lightTheme";

function App() {
  // set theme mode state with default mode as dark theme
  const [themeMode, setThemeMode] = useState("dark");

  const toggleTheme = useCallback(() => {
    setThemeMode((prevState) => (prevState === "dark" ? "light" : "dark"));
  });

  return (
    <ThemeMode.Provider value={{ mode: themeMode, toggleTheme: toggleTheme }}>
      <ThemeProvider theme={themeMode === "dark" ? darkTheme : lightTheme}>
        <CssBaseline enableColorScheme />
        <HomePage />
      </ThemeProvider>
    </ThemeMode.Provider>
  );
}

export default App;
