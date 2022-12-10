import { Box, Typography, Grid } from "@mui/material";

import Lottie from "lottie-react";

import coding from "../../../assets/lottieJson/coding.json";

import { Typing } from "../..";

import { staticData } from "../../../static";

import { useStyles } from "./styles";

export const HomeSection = () => {
  const classes = useStyles();

  return (
    <section id="home">
      <Grid container className={classes.mainContainer}>
        <Grid item xs={12} sm={6}>
          <Box>
            <Typography className={classes.welcomeText}>
              {staticData.homeSection.welcome}
            </Typography>
            <Typing text={staticData.homeSection.name} />
            <Box>
              <Typography className={classes.descriptionText}>
                {staticData.homeSection.description}
              </Typography>
            </Box>
            <Box display={"flex"} justifyContent={"center"}>
              <Lottie loop autoPlay animationData={coding} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </section>
  );
};
