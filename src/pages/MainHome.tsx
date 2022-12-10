import { Box, Divider } from "@mui/material";
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
        <Divider color="#393939" />
      </section>
      <section id="about">
        <AboutSection />
        <Divider color="#393939" />
      </section>
      <section id="experience">
        <ExperienceSection />
        <Divider color="#393939" />
      </section>
      <section id="technologies">
        <TechnologiesSection />
        <Divider color="#393939" />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
    </Box>
  );
};
