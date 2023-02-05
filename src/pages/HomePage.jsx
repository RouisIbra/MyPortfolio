import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import React from "react";
import MyAppBar from "../components/MyAppBar";

function HomePage() {
  return (
    <>
      <MyAppBar />
      <Container maxWidth="xl" component="main">
        <Typography variant="h6" component="h2">
          Welcome
        </Typography>
      </Container>
    </>
  );
}

export default HomePage;
