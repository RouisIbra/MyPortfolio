/* eslint-disable react/prop-types */
import {
  CardContent,
  CardMedia,
  Typography,
  Card,
  CardActions,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import { motion } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useTheme } from "@emotion/react";

const cardVariant = {
  hide: { opacity: 0, y: 0 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { ease: "easeIn", duration: 1, delay: i * 0.3 },
  }),
  hover: { scale: 1.1 },
};

function ProjectCard({
  title,
  subtitle,
  description,
  srcImage,
  srcLink,
  animeOrder,
}) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Card
      component={motion.div}
      variants={cardVariant}
      initial="hide"
      whileInView="show"
      whileHover="hover"
      custom={matches && animeOrder}
      sx={(theme) => ({
        display: "flex",
        flexDirection: "column",
        width: 320,
        height: "100%",
        backgroundColor: theme.palette.mode === "dark" ? "#111e" : "#eeee",
        "&:hover": {
          backgroundColor: theme.palette.mode === "dark" ? "#111f" : "#eeef",
        },
      })}
    >
      <CardMedia
        component="img"
        alt="Project image header"
        height="140"
        image={srcImage}
      />
      <CardContent sx={{ flex: 2 }}>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="h6" component="div">
          {subtitle}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "flex-end" }}>
        <IconButton component="a" size="large" href={srcLink} sx={{ mr: 1 }}>
          <GitHubIcon color="inherit" fontSize="200%" />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default ProjectCard;
