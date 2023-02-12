import React from "react";
import {
  Card,
  CardHeader,
  CardMedia,
  Grid,
  useMediaQuery,
} from "@mui/material";
import PropTypes from "prop-types";
import { useTheme } from "@emotion/react";
import { motion } from "framer-motion";

const cardVariant = {
  hide: { opacity: 0, x: -10 },
  show: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.2, duration: 0.5, ease: "easeOut" },
  }),
  hover: { scale: 1.1 },
};

function SkillCard({ icon, title, color, animeOrder }) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid item xs="auto" zIndex={1}>
      <Card
        component={motion.div}
        variants={cardVariant}
        custom={animeOrder}
        elevation={3}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          p: 2,
          width: { xs: 100, sm: 150 },
          backgroundColor: theme.palette.mode === "dark" ? "#111e" : "#eeee",
          "&:hover": {
            backgroundColor: theme.palette.mode === "dark" ? "#111" : "#eee",
          },
        }}
      >
        <CardMedia
          component={icon}
          title="My title"
          color={color}
          size={matches ? 40 : 60}
        />
        <CardHeader title={title}></CardHeader>
      </Card>
    </Grid>
  );
}

SkillCard.propTypes = {
  icon: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  animeOrder: PropTypes.number,
};

export default SkillCard;
