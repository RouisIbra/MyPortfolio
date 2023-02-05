import { createContext } from "react";

const ThemeMode = createContext({
  mode: "dark",
  toggleTheme: () => {},
});

export default ThemeMode;
