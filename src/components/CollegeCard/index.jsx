import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const cardVariant = {
  hide: { opacity: 0, x: -100 },
  show: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.5, duration: 1, ease: "easeOut" },
  }),
  hover: { scale: 1.1 },
};

function CollegeCard({ title, description, years, imgsrc, animeOrder }) {
  return (
    <Card
      component={motion.div}
      variants={cardVariant}
      custom={animeOrder}
      elevation={3}
      sx={(theme) => ({
        borderRadius: 10,
        p: 2,
        textAlign: { xs: "center", md: "left" },
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        alignItems: { xs: "center", sm: "stretch" },
        justifyContent: "center",
        backgroundColor: theme.palette.mode === "dark" ? "#111e" : "#eeee",
        "&:hover": {
          backgroundColor: theme.palette.mode === "dark" ? "#111" : "#eee",
        },
      })}
    >
      <CardMedia
        src={imgsrc}
        component="img"
        sx={{
          height: { xs: 150, sm: 200 },
          width: { xs: 150, sm: 200 },
          borderRadius: 10,
        }}
      />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flex: "auto",
        }}
      >
        <CardHeader title={title} subheader={description} />
        <CardContent sx={{ mt: "auto" }}>
          <Typography
            variant="h5"
            sx={{ textAlign: { xs: "center", md: "right" } }}
          >
            {years}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
}

CollegeCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  years: PropTypes.string,
  imgsrc: PropTypes.any.isRequired,
  animeOrder: PropTypes.number,
};

export default CollegeCard;
