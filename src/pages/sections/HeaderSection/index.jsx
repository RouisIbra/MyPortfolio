import React from "react";
import { Grid } from "@mui/material";
import MyAvatar from "./subsections/MyAvatar";
import MyIntro from "./subsections/MyIntro";

function HeaderSection() {
  return (
    <section
      id=""
      style={{ height: "92vh", display: "flex", alignItems: "center" }}
    >
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        direction={{ xs: "column-reverse", md: "row" }}
        spacing={4}
      >
        <Grid item container direction="column" xs={12} md={6}>
          <MyIntro />
        </Grid>
        <Grid item container justifyContent="center" xs={12} sm="auto">
          <MyAvatar />
        </Grid>
      </Grid>
    </section>
  );
}

export default HeaderSection;
