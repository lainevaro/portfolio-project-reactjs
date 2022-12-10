import { Box } from "@mui/material";

import { Navbar, ScrollToTop } from "../../components";

import {
  HomeSection,
  AboutSection,
  ContactSection,
  ExperienceSection,
  TechnologiesSection,
} from "../../components/Sections";

import { useStyles } from "./styles";

export const MainHome = () => {
  const classes = useStyles();

  return (
    <>
      <Navbar />
      <Box className={classes.mainContainer}>
        <HomeSection />
        <AboutSection />
        <ExperienceSection />
        <TechnologiesSection />
        <ContactSection />
      </Box>
      <ScrollToTop />
    </>
  );
};
