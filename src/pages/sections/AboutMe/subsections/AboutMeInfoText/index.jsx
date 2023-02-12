import React from "react";
import { Grid, Typography, Button, useMediaQuery } from "@mui/material";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import * as Scroll from "react-scroll";
import { motion } from "framer-motion";
import { useTheme } from "@emotion/react";

const textVariant = {
  hide: { opacity: 0, x: -30 },
  show: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.5 + i * 0.1, duration: 1 },
  }),
};

const buttonVariant = {
  hide: { opacity: 0, y: -10 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};
function AboutMeInfoText() {
  const scrollToSkills = () => {
    Scroll.scroller.scrollTo("skills", {
      duration: 800,
      delay: 100,
      smooth: true,
      offset: -70,
    });
  };

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <>
      <Typography
        variant="h4"
        component={motion.h3}
        variants={textVariant}
        custom={3}
        color="secondary"
        fontWeight="bold"
      >
        I&apos;m Ibrahim
      </Typography>
      <Typography
        component={motion.h5}
        variants={textVariant}
        custom={4}
        sx={{ typography: { xs: "subtitle1", xl: "h6" } }}
        fontWeight="500"
        color="info"
      >
        Full stack web and mobile developer
      </Typography>
      <Typography
        component={motion.p}
        variants={textVariant}
        custom={5}
        sx={{
          mt: 2,
          textAlign: { xs: "justify", md: "left" },
          typography: { xs: "body1", xl: { fontSize: "1.25rem" } },
        }}
      >
        I am a Full-Stack developer from Tunisia. I am studying Software
        Engineering at International Multidisciplinary School. I am very
        passiotate about programming in general. I build Mobile Apps using
        Flutter, Web Apps using ReactJs and Backend servers using NodeJs.
      </Typography>
      <Grid container spacing={2} mt={{ xs: 2, md: 4 }}>
        <Grid item xs={12} md={6} component="p">
          <Typography
            variant="h5"
            component={motion.span}
            variants={textVariant}
            custom={6}
            color="secondary"
          >
            Email:{" "}
          </Typography>
          <Typography
            variant="h6"
            component={motion.span}
            variants={textVariant}
            custom={7}
          >
            Ibrahim.Rouis@gmail.com
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          component={motion.span}
          variants={textVariant}
          custom={8}
        >
          <Typography
            variant="h5"
            component={motion.span}
            variants={textVariant}
            custom={9}
            color="secondary"
          >
            Phone:{" "}
          </Typography>
          <Typography variant="h6" component="span">
            +216 26 391 033
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} component="p">
          <Typography
            variant="h5"
            component={motion.span}
            variants={textVariant}
            custom={11}
            color="secondary"
          >
            Age:{" "}
          </Typography>
          <Typography
            variant="h6"
            component={motion.span}
            variants={textVariant}
            custom={12}
          >
            25
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} component="p">
          <Typography
            variant="h5"
            component={motion.span}
            variants={textVariant}
            custom={13}
            color="secondary"
          >
            Place:{" "}
          </Typography>
          <Typography
            variant="h6"
            component={motion.span}
            variants={textVariant}
            custom={14}
          >
            Tunisia, Sousse
          </Typography>
        </Grid>
      </Grid>

      {matches && (
        <Button
          variant="contained"
          onClick={scrollToSkills}
          sx={{
            mt: 2,
            position: "absolute",
            bottom: 0,
            left: 35,
          }}
          component={motion.button}
          variants={buttonVariant}
          custom={15}
          endIcon={<ExpandCircleDownIcon />}
        >
          Show Skills
        </Button>
      )}
    </>
  );
}

export default AboutMeInfoText;
