import React from "react";
import { Avatar } from "@mui/material";
import Tilt from "react-parallax-tilt";
import myphoto from "../../../../../assets/myphoto.jpg";

function MyAvatar() {
  return (
    <Tilt transitionSpeed={2000}>
      <Avatar
        data-tilt
        alt="Ibrahim Rouis's face photo"
        sx={(theme) => ({
          width: { xs: 200, sm: 250, md: 300 },
          height: { xs: 200, sm: 250, md: 300 },
          boxShadow: "0px 0px 10px, 0px 0px 20px, 0px 0px 40px",
          color: theme.palette.primary.main,
        })}
        src={myphoto}
      />
    </Tilt>
  );
}

export default MyAvatar;
