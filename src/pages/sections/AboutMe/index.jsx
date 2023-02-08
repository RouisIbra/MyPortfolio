import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/material";
import React from "react";
import AboutMeInfoText from "./subsections/AboutMeInfoText";
import MyPhoto from "./subsections/MyPhoto";

function AboutMe() {
  return (
    <Box
      component="section"
      id="aboutMe"
      sx={{
        minHeight: "100vh",
        display: "flex",
        pt: { xs: 12, md: 0 },
        px: { xs: 4, xl: 0 },
        alignItems: { xs: "flex-start", md: "center" },
      }}
    >
      <Grid container spacing={{ xs: 2, md: 8 }}>
        <Grid item xs={12} zIndex={1}>
          <Typography variant="h3" component="h2" align="center">
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
        <Grid item container justifyContent="center" xs={12} md={6} zIndex={1}>
          <MyPhoto />
        </Grid>
        <Grid item xs={12} md={6} zIndex={1}>
          <AboutMeInfoText />
        </Grid>
      </Grid>
    </Box>
  );
}

export default AboutMe;
