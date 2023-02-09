import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import EduIcon from "@mui/icons-material/School";
import CollegeCard from "../../../components/CollegeCard";
import epiimagesrc from "../../../assets/epi.jpg";
import ipeimimagesrc from "../../../assets/ipeim.jpg";
function EducationSection() {
  return (
    <Box
      component="section"
      id="skills"
      sx={{
        py: { xs: 12, md: 5 },
        px: { xs: 2, xl: 0 },
      }}
    >
      <Grid container spacing={2} mb={4}>
        <Grid item xs={12} zIndex={1}>
          <Typography variant="h3" component="h2" align="center">
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
          />
        </Grid>
        <Grid item xs={12} zIndex={1}>
          <CollegeCard
            title="Monastir Preparatory Engineering Institute"
            description="Pre-Engineering School"
            years="2016 - 2018"
            imgsrc={ipeimimagesrc}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default EducationSection;
