import React, { useContext } from "react";
import ThemeMode from "../../context/ThemeMode";
import IconButton from "@mui/material/IconButton";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

const iconStyle = { fontSize: { xs: 24, sm: 32 } };

function ThemeTogglerIconButton() {
  const themeMode = useContext(ThemeMode);

  return (
    <IconButton onClick={themeMode.toggleTheme} color="inherit" sx={iconStyle}>
      {themeMode.mode === "dark" ? (
        <DarkModeIcon fontSize="inherit" />
      ) : (
        <LightModeIcon fontSize="inherit" />
      )}
    </IconButton>
  );
}

export default ThemeTogglerIconButton;
