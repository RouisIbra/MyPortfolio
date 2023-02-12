import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import ProjectCard from "../../../components/ProjectCard";
import GitHubIcon from "@mui/icons-material/GitHub";
import { motion } from "framer-motion";
import RestApiImage from "../../../assets/restapi.png";
import FlutterImage from "../../../assets/flutter.png";
import PortfolioImage from "../../../assets/portfolio.jpg";

const textVariant = {
  hide: { opacity: 0, y: -10 },
  show: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeIn" } },
};
const ProjectsSection = () => {
  return (
    <Box
      component="section"
      id="projects"
      sx={{
        minHeight: "100vh",
        display: "flex",
        pt: { xs: 10, md: 0 },
        pb: { xs: 2, md: 5 },
        px: { xs: 4, xl: 0 },
        alignItems: { xs: "flex-start", md: "center" },
        justifyContent: "center",
      }}
    >
      <motion.div initial="hide" whileInView="show">
        <Typography
          variant="h3"
          component={motion.h2}
          variants={textVariant}
          align="center"
          sx={{
            pb: 2,
          }}
        >
          <GitHubIcon fontSize="inherit" /> My{" "}
          <Typography color="secondary" fontSize="inherit" component="span">
            Projects
          </Typography>
        </Typography>
        <Typography
          align="center"
          component={motion.p}
          variants={textVariant}
          variant="subtitle"
          sx={{ pb: 4 }}
        >
          None of these projects were copied from a source code or a tutorial.
          These projects are 100% made by me
        </Typography>
        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "stretch",
          }}
        >
          <Grid item zIndex={1}>
            <ProjectCard
              title="My Portfolio"
              description="This portfolio that you are watching right now is built and designed by me using ReactJS, MaterialUI, Framer Motion and other useful libraries."
              srcImage={PortfolioImage}
              animeOrder={1}
            />
          </Grid>
          <Grid item zIndex={1}>
            <ProjectCard
              title="Authentication API"
              description="I built a fast and secure Authentication API from scratch using Node.JS and Express. It has all the essential features for a fully functional API"
              srcImage={RestApiImage}
              animeOrder={2}
            />
          </Grid>
          <Grid item zIndex={1}>
            <ProjectCard
              title="Flutter Authetication Client"
              description="I built a Mobile App client for my Authentication API using flutter. I have also added Unit Testing for the authentication client"
              srcImage={FlutterImage}
              animeOrder={3}
            />
          </Grid>
          <Grid item zIndex={1}>
            <ProjectCard
              title="Pets App"
              description="I built a beautiful Flutter application for my college exam project that consist of making  a pets adoption app"
              srcImage={FlutterImage}
              animeOrder={4}
            />
          </Grid>
        </Grid>
      </motion.div>
    </Box>
  );
};

export default ProjectsSection;
