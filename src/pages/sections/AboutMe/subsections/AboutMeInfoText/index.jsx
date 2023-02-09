import React from "react";
import { Grid, Typography, Button } from "@mui/material";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import * as Scroll from "react-scroll";

function AboutMeInfoText() {
  const scrollToSkills = () => {
    Scroll.scroller.scrollTo("skills", {
      duration: 800,
      delay: 100,
      smooth: true,
      offset: -70,
    });
  };
  return (
    <>
      <Typography
        variant="h4"
        component="h3"
        color="secondary"
        fontWeight="bold"
      >
        I&apos;m Ibrahim
      </Typography>
      <Typography
        sx={{ typography: { xs: "subtitle1", xl: "h6" } }}
        fontWeight="500"
        color="info"
      >
        Full stack web and mobile developer
      </Typography>
      <Typography
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
          <Typography variant="h5" component="span" color="secondary">
            Email:{" "}
          </Typography>
          <Typography variant="h6" component="span">
            Ibrahim.Rouis@gmail.com
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} component="p">
          <Typography variant="h5" component="span" color="secondary">
            Phone:{" "}
          </Typography>
          <Typography variant="h6" component="span">
            +216 26 391 033
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} component="p">
          <Typography variant="h5" component="span" color="secondary">
            Age:{" "}
          </Typography>
          <Typography variant="h6" component="span">
            25
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} component="p">
          <Typography variant="h5" component="span" color="secondary">
            Place:{" "}
          </Typography>
          <Typography variant="h6" component="span">
            Tunisia, Sousse
          </Typography>
        </Grid>
      </Grid>
      <Button variant="contained" onClick={scrollToSkills} sx={{ mt: 2 }}>
        Show more
        <ExpandCircleDownIcon sx={{ ml: 1 }} />
      </Button>
    </>
  );
}

export default AboutMeInfoText;
