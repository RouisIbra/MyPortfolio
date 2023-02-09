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

function CollegeCard({ title, description, years, imgsrc }) {
  return (
    <Card
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
      })}
    >
      <CardMedia
        src={imgsrc}
        component="img"
        sx={{
          height: { xs: 200, sm: 250 },
          width: { xs: 200, sm: 250 },
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
};

export default CollegeCard;
