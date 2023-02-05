import React, { useContext } from "react";
import ThemeMode from "../../context/ThemeMode";
import IconButton from "@mui/material/IconButton";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

function ThemeTogglerIconButton() {
  const themeMode = useContext(ThemeMode);

  return (
    <IconButton onClick={themeMode.toggleTheme} color="inherit">
      {themeMode.mode === "dark" ? <DarkModeIcon /> : <LightModeIcon />}
    </IconButton>
  );
}

export default ThemeTogglerIconButton;
