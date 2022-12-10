import { useRef } from "react";
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
  const ref: any = useRef(null);
  const classes = useStyles();

  const scrollTo = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar scrollTo={scrollTo} />
      <Box className={classes.mainContainer}>
        <section id="home">
          <HomeSection />
        </section>
        <section id="about">
          <AboutSection ref={ref} />
        </section>
        <section id="experience">
          <ExperienceSection />
        </section>
        <section id="technologies">
          <TechnologiesSection />
        </section>
        <section id="contact">
          <ContactSection />
        </section>
      </Box>
      <ScrollToTop />
    </>
  );
};
