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

function SkillCard({ icon, title, color }) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid item xs="auto" zIndex={1}>
      <Card
        elevation={3}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          p: 2,
          width: { xs: 100, sm: 150 },
          backgroundColor: theme.palette.mode === "dark" ? "#111e" : "#eeee",
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
};

export default SkillCard;
