import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/material";
import React from "react";
import AboutMeInfoText from "./subsections/AboutMeInfoText";
import MyPhoto from "./subsections/MyPhoto";
import { motion } from "framer-motion";

const textVariant = {
  hide: { opacity: 0, y: -10, transition: { when: "afterChildren" } },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeIn",
      delay: i * 0.2,
      duration: 1,
    },
  }),
};

function AboutMe() {
  return (
    <Box
      component="section"
      id="about"
      sx={{
        minHeight: "100vh",
        display: "flex",
        pt: { xs: 10, md: 0 },
        px: { xs: 4, xl: 0 },
        alignItems: { xs: "flex-start", md: "center" },
      }}
    >
      <motion.div initial="hide" whileInView="show">
        <Grid container spacing={{ xs: 2, md: 8 }}>
          <Grid item xs={12} zIndex={1}>
            <Typography
              variant="h3"
              component={motion.h2}
              custom={1}
              variants={textVariant}
              align="center"
            >
              About{" "}
              <Typography
                variant="h3"
                component="span"
                color="secondary"
                fontWeight="bold"
              >
                Me
              </Typography>
            </Typography>
          </Grid>
          <Grid
            item
            container
            justifyContent="center"
            xs={12}
            md={6}
            zIndex={1}
          >
            <MyPhoto />
          </Grid>
          <Grid item xs={12} md={6} zIndex={1} sx={{ position: "relative" }}>
            <AboutMeInfoText />
          </Grid>
        </Grid>
      </motion.div>
    </Box>
  );
}

export default AboutMe;
