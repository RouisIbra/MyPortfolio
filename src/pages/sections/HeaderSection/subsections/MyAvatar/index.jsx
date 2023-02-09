import React from "react";
import { Avatar } from "@mui/material";
import Tilt from "react-parallax-tilt";
import myphoto from "../../../../../assets/myphoto.jpg";
import { motion } from "framer-motion";

const avatarVariant = {
  hide: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 2, ease: "easeOut" } },
};

function MyAvatar() {
  return (
    <motion.div variants={avatarVariant} initial="hide" whileInView="show">
      <Tilt transitionSpeed={2000}>
        <Avatar
          alt="Ibrahim Rouis's face photo"
          sx={(theme) => ({
            width: { xs: 200, sm: 250, md: 300, lg: 400, xl: 550 },
            height: { xs: 200, sm: 250, md: 300, lg: 400, xl: 550 },
            boxShadow: "0px 0px 10px, 0px 0px 20px, 0px 0px 40px",
            color: theme.palette.primary.main,
          })}
          src={myphoto}
        />
      </Tilt>
    </motion.div>
  );
}

export default MyAvatar;
