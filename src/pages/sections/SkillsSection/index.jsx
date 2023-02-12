import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import SkillsIcon from "@mui/icons-material/ImportantDevices";
import SkillsGrid from "./subsections/SkillsGrid";
import { motion } from "framer-motion";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import * as Scroll from "react-scroll";

const textVariant = {
  hide: { opacity: 0, y: -10, transition: { when: "afterChildren" } },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeIn",
      delay: i * 0.3,
      duration: 1,
    },
  }),
};

const buttonVariant = {
  hide: { opacity: 0, y: -15 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeIn",
      delay: 1,
      duration: 1,
    },
  },
};

function SkillsSection() {
  const scrollToEdu = () => {
    Scroll.scroller.scrollTo("education", {
      duration: 800,
      delay: 100,
      smooth: true,
      offset: -70,
    });
  };
  return (
    <Box
      component="section"
      id="skills"
      sx={{
        minHeight: "100vh",
        marginBottom: "3rem",
        display: "flex",
        pt: { xs: 10, md: 0 },
        px: { xs: 4, xl: 0 },
        alignItems: { xs: "flex-start", md: "center" },
      }}
    >
      <motion.div initial="hide" whileInView="show">
        <Grid container spacing={2} mb={4}>
          <Grid item xs={12}>
            <Typography
              variant="h3"
              component={motion.h2}
              variants={textVariant}
              align="center"
            >
              <SkillsIcon fontSize="inherit" /> Skills &{" "}
              <Typography color="secondary" fontSize="inherit" component="span">
                Abilities
              </Typography>
            </Typography>
          </Grid>
          <Grid
            container
            item
            spacing={{ xs: 1, md: 2 }}
            justifyContent="center"
          >
            <SkillsGrid />
          </Grid>
        </Grid>
        <Box
          sx={{ display: { xs: "none", md: "flex" }, justifyContent: "center" }}
        >
          <Button
            variant="contained"
            component={motion.button}
            variants={buttonVariant}
            size="large"
            onClick={scrollToEdu}
            endIcon={<ExpandCircleDownIcon />}
          >
            Show Eduction
          </Button>
        </Box>
      </motion.div>
    </Box>
  );
}

export default SkillsSection;
