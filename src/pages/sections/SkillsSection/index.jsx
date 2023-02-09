import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import SkillsIcon from "@mui/icons-material/ImportantDevices";
import SkillsGrid from "./subsections/SkillsGrid";

function SkillsSection() {
  return (
    <Box
      component="section"
      id="skills"
      sx={{
        pt: 4,
        px: { xs: 2, xl: 0 },
      }}
    >
      <Grid container spacing={2} mb={4}>
        <Grid item xs={12}>
          <Typography variant="h3" component="h2" align="center">
            <SkillsIcon fontSize="inherit" /> Skills &{" "}
            <Typography color="secondary" fontSize="inherit" component="span">
              Abilities
            </Typography>
          </Typography>
        </Grid>
        <Grid container item spacing={{ xs: 1, md: 2 }} justifyContent="center">
          <SkillsGrid />
        </Grid>
      </Grid>
    </Box>
  );
}

export default SkillsSection;
