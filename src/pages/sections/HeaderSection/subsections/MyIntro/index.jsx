import React from "react";
import { Box, Button, Typography } from "@mui/material";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import * as Scroll from "react-scroll";

const greeting = "Hi There,";
const name = "Ibrahim Rouis";
const IamInto = "Web development";

function MyIntro() {
  const scrollToAboutMe = () => {
    Scroll.scroller.scrollTo("aboutMe", {
      duration: 800,
      delay: 100,
      smooth: true,
    });
  };

  return (
    <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
      <Typography variant="h3" component="p">
        {greeting}
      </Typography>
      <Typography variant="h4" component="p">
        I&apos;m{" "}
        <Typography variant="h3" component="span" color="secondary">
          {name}
        </Typography>
      </Typography>
      <Typography variant="h5" component="p" sx={{ mt: 4 }}>
        I am into{" "}
        <Typography
          variant="h6"
          component="span"
          sx={(theme) => ({
            color:
              theme.palette.mode === "dark"
                ? theme.palette.warning.main
                : theme.palette.info.main,
          })}
        >
          {IamInto}
        </Typography>
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: { xs: "center", md: "flex-start" },
          mt: 2,
        }}
      >
        <Button variant="contained" onClick={scrollToAboutMe}>
          About me
          <ExpandCircleDownIcon sx={{ ml: 1 }} />
        </Button>
      </Box>
    </Box>
  );
}

export default MyIntro;
