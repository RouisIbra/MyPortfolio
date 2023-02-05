import React, { useCallback, useEffect, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import HomePage from "./pages/HomePage";
import ThemeMode from "./context/ThemeMode";
import { ThemeProvider } from "@emotion/react";
import darkTheme from "./styles/darkTheme";
import lightTheme from "./styles/lightTheme";

function App() {
  // set theme mode state with default mode as dark theme
  const [themeMode, setThemeMode] = useState("dark");

  const toggleTheme = useCallback(() => {
    // toggle current theme state
    setThemeMode((prevState) => (prevState === "dark" ? "light" : "dark"));

    // toggle theme mode from localStorage
    localStorage.setItem("theme", themeMode === "dark" ? "light" : "dark");
  }, [themeMode]);

  // Get theme mode from persistent local storage
  useEffect(() => {
    const userThemeModePref = localStorage.getItem("theme");
    if (userThemeModePref && themeMode !== userThemeModePref) {
      setThemeMode(userThemeModePref === "dark" ? "dark" : "light");
    }
  }, []);

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
