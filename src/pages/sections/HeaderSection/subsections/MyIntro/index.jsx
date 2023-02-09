import React from "react";
import { Box, Button, Typography } from "@mui/material";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import * as Scroll from "react-scroll";
import { motion } from "framer-motion";

const greeting = "Hi There,";
const name = "Ibrahim Rouis";
const IamInto = "Web development";

const textVariant = {
  hide: { opacity: 0, x: -10 },
  show: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
};

const buttonVariant = {
  hide: { opacity: 0, y: -10 },
  show: { opacity: 1, y: 0, transition: { duration: 1 } },
};

function MyIntro() {
  const scrollToAboutMe = () => {
    Scroll.scroller.scrollTo("about", {
      duration: 800,
      delay: 100,
      smooth: true,
    });
  };

  return (
    <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
      <Typography
        variant="h3"
        component={motion.p}
        variants={textVariant}
        initial="hide"
        whileInView="show"
      >
        {greeting}
      </Typography>
      <Typography
        variant="h4"
        component={motion.p}
        variants={textVariant}
        initial="hide"
        whileInView="show"
      >
        I&apos;m{" "}
        <Typography variant="h3" component="span" color="secondary">
          {name}
        </Typography>
      </Typography>
      <Typography
        variant="h5"
        component={motion.p}
        variants={textVariant}
        initial="hide"
        whileInView="show"
        sx={{ mt: 4 }}
      >
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
        <motion.div>
          <Button
            variant="contained"
            onClick={scrollToAboutMe}
            component={motion.div}
            variants={buttonVariant}
            initial="hide"
            whileInView="show"
          >
            About me
            <ExpandCircleDownIcon sx={{ ml: 1 }} />
          </Button>
        </motion.div>
      </Box>
    </Box>
  );
}

export default MyIntro;
