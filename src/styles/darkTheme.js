import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const darkTheme = responsiveFontSizes(
  createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#0F4C75",
      },
      secondary: {
        main: "#3282B8",
      },
      info: {
        main: "#BBE1FA",
      },
      background: {
        background: "#1B262C",
        paper: "#1B262C",
      },
    },
  })
);

export default darkTheme;
