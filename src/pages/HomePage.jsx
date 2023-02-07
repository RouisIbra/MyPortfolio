import Container from "@mui/material/Container";
import React from "react";
import MyAppBar from "../components/MyAppBar";
import HeaderSection from "./sections/HeaderSection";

function HomePage() {
  return (
    <>
      <MyAppBar />
      <Container maxWidth="xl" component="main">
        <HeaderSection />
      </Container>
    </>
  );
}

export default HomePage;
