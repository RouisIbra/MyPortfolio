import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import CodeIcon from "@mui/icons-material/Code";
import ThemeTogglerIconButton from "../ThemeTogglerIconButton";
import * as Scroll from "react-scroll";

const pages = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" },
];
const title = "Ibrahim Rouis";

function MyAppBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [selectedPage, setSelectedPage] = useState(pages[0].id);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleGoToSection = (pageId) => {
    Scroll.scroller.scrollTo(pageId, {
      duration: 800,
      delay: 100,
      smooth: true,
    });
    setSelectedPage(pageId);
    if (anchorElNav != null) {
      handleCloseNavMenu();
    }
  };

  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Page icon for md+ screen */}
          <CodeIcon
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
            fontSize="large"
          />

          {/* Page title for md+ screen */}
          <Typography
            variant="h6"
            noWrap
            component="h1"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".2rem",
              color: "inherit",
            }}
          >
            {title}
          </Typography>

          {/* Page sections menu for xs- screen */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="Appbar Menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            {/* Popup Menu for xs- screen */}
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.id}
                  onClick={() => handleGoToSection(page.id)}
                >
                  <Typography textAlign="center">{page.label}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Page title for xs- screen */}
          <Typography
            variant="h6"
            noWrap
            component="h1"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            {title}
          </Typography>

          {/* Page sections menu for md+ screen */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page.id}
                onClick={() => handleGoToSection(page.id)}
                sx={{
                  my: 2,
                  color: "inherit",
                  display: "block",
                  textUnderlineOffset: 6,
                  textDecorationLine:
                    page.id === selectedPage ? "underline" : "none",
                  textDecorationThickness: page.id === selectedPage ? 5 : 2,
                  "&:hover": {
                    textDecorationLine: "underline",
                    textDecorationThickness: page.id === selectedPage ? 5 : 2,
                  },
                }}
              >
                {page.label}
              </Button>
            ))}
          </Box>
          <ThemeTogglerIconButton fixed />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default MyAppBar;
