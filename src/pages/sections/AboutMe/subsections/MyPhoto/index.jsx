import React from "react";
import { Box } from "@mui/material";
import myPortraitPhoto from "../../../../../assets/portrait-photo.webp";
import Tilt from "react-parallax-tilt";

function MyPhoto() {
  return (
    <Tilt transitionSpeed={200}>
      <Box
        component="img"
        sx={(theme) => ({
          width: { xs: 150, sm: 200, md: 300 },
          borderRadius: { xs: 5, md: 10 },
          boxShadow: "0px 0px 20px",
          color: theme.palette.primary.main,
          "&:hover": {
            filter: "grayscale(80%)",
          },
        })}
        src={myPortraitPhoto}
        alt="My photo in portrait mode"
      />
    </Tilt>
  );
}

export default MyPhoto;
