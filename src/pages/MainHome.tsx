import { Box } from "@mui/material";
import {
  AboutSection,
  HomeSection,
  ContactSection,
  ExperienceSection,
  TechnologiesSection,
} from "../sections";

export const MainHome = () => {
  return (
    <Box
      style={{
        color: "white",
        padding: 20,
      }}
    >
      <section id="home">
        <HomeSection />
      </section>
      <section id="about">
        <AboutSection />
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
  );
};
