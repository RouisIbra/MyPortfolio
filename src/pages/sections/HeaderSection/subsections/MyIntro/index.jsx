import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";

function MyIntro() {
  return (
    <>
      <Grid item>
        <Typography
          variant="h3"
          component="p"
          sx={{ textAlign: { xs: "center", md: "left" } }}
        >
          Hi There,
        </Typography>
      </Grid>
      <Grid item>
        <Typography
          variant="h4"
          component="p"
          sx={{ textAlign: { xs: "center", md: "left" } }}
        >
          I&apos;m{" "}
          <Typography variant="h3" component="span" color="secondary">
            Ibrahim Rouis
          </Typography>
        </Typography>
      </Grid>
      <Grid item>
        <Typography
          variant="h5"
          component="p"
          sx={{ textAlign: { xs: "center", md: "left" }, mt: 4 }}
        >
          I am into{" "}
          <Typography
            variant="h6"
            component="span"
            sx={(theme) => ({
              color:
                theme.palette.mode === "dark"
                  ? theme.palette.warning.main
                  : theme.palette.info.main,
            })}
          >
            Web development
          </Typography>
        </Typography>
      </Grid>
      <Grid
        item
        container
        justifyContent={{ xs: "center", md: "flex-start" }}
        mt={2}
      >
        <Button variant="contained">
          About me
          <ExpandCircleDownIcon sx={{ ml: 1 }} />
        </Button>
      </Grid>
    </>
  );
}

export default MyIntro;
