import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import SkillsIcon from "@mui/icons-material/ImportantDevices";
import SkillsGrid from "./subsections/SkillsGrid";
import { motion } from "framer-motion";

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

function SkillsSection() {
  return (
    <Box
      component="section"
      id="skills"
      sx={{
        minHeight: "100vh",
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
      </motion.div>
    </Box>
  );
}

export default SkillsSection;
