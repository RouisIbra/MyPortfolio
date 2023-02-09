import React from "react";
import { Box } from "@mui/material";
import myPortraitPhoto from "../../../../../assets/portrait-photo.webp";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

const photoVariant = {
  hide: { opacity: 0, x: -100 },
  show: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.2, duration: 1, ease: "easeOut" },
  }),
};

function MyPhoto() {
  return (
    <motion.div variants={photoVariant} custom={2}>
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
    </motion.div>
  );
}

export default MyPhoto;
