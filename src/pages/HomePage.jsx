import Container from "@mui/material/Container";
import React, { useCallback, useContext, useEffect, useState } from "react";
import MyAppBar from "../components/MyAppBar";
import HeaderSection from "./sections/HeaderSection";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import particlesOptions from "../config/particlesOptions";
import ThemeMode from "../context/ThemeMode";
import AboutMe from "./sections/AboutMe";
import SkillsSection from "./sections/SkillsSection";
import EducationSection from "./sections/EducationSection";
import ProjectsSection from "./sections/ProjectsSection";

function HomePage() {
  const [particlesContainer, setParticlesContainer] = useState(null);

  const particlesInit = useCallback((main) => {
    loadFull(main);
  }, []);

  const particlesLoaded = useCallback((container) => {
    setParticlesContainer(container);
  }, []);

  const themeMode = useContext(ThemeMode);

  useEffect(() => {
    if (
      particlesContainer &&
      particlesContainer.currentTheme !== themeMode.mode
    ) {
      particlesContainer.loadTheme(themeMode.mode);
    }
  }, [themeMode, particlesContainer]);
  return (
    <>
      <Particles
        id="tsparticles"
        options={particlesOptions}
        init={particlesInit}
        loaded={particlesLoaded}
      />
      <MyAppBar />
      <Container maxWidth="xl" component="main" id="home">
        <HeaderSection />
        <AboutMe />
        <SkillsSection />
        <EducationSection />
        <ProjectsSection />
      </Container>
    </>
  );
}

export default HomePage;
