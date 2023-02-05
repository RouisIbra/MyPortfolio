import { Typography } from "@mui/material";
import React from "react";
import MyAppBar from "../components/MyAppBar";

function HomePage() {
  return (
    <>
      <MyAppBar />
      <main>
        <Typography variant="h6" component="h2">
          Welcome
        </Typography>
      </main>
    </>
  );
}

export default HomePage;
