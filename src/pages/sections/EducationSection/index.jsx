import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import EduIcon from "@mui/icons-material/School";
import CollegeCard from "../../../components/CollegeCard";
import epiimagesrc from "../../../assets/epi.jpg";
import ipeimimagesrc from "../../../assets/ipeim.jpg";
import { motion } from "framer-motion";
import * as Scroll from "react-scroll";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";

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

function EducationSection() {
  const scrollToProjects = () => {
    Scroll.scroller.scrollTo("projects", {
      duration: 800,
      delay: 100,
      smooth: true,
      offset: 0,
    });
  };
  return (
    <Box
      component="section"
      id="education"
      sx={{
        minHeight: "100vh",
        display: "flex",
        pt: { xs: 10, md: 0 },
        pb: { xs: 0, md: 5 },
        px: { xs: 4, xl: 0 },
        alignItems: { xs: "flex-start", md: "center" },
      }}
    >
      <motion.div initial="hide" whileInView="show">
        <Grid container spacing={2} mb={4}>
          <Grid item xs={12} zIndex={1}>
            <Typography
              variant="h3"
              component={motion.h2}
              variants={textVariant}
              align="center"
            >
              <EduIcon fontSize="inherit" /> My{" "}
              <Typography color="secondary" fontSize="inherit" component="span">
                Education
              </Typography>
            </Typography>
          </Grid>
          <Grid item xs={12} zIndex={1}>
            <CollegeCard
              title="EPI - International Multidisciplinary School"
              description="Software Engineering"
              years="2019 - 2023"
              imgsrc={epiimagesrc}
              animeOrder={1}
            />
          </Grid>
          <Grid item xs={12} zIndex={1}>
            <CollegeCard
              title="Monastir Preparatory Engineering Institute"
              description="Pre-Engineering School"
              years="2016 - 2018"
              imgsrc={ipeimimagesrc}
              animeOrder={2}
            />
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
            onClick={scrollToProjects}
            endIcon={<ExpandCircleDownIcon />}
          >
            Show Projects
          </Button>
        </Box>
      </motion.div>
    </Box>
  );
}

export default EducationSection;
