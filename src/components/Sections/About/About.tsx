import { Box, Typography } from "@mui/material";

import Grid from "@mui/material/Grid";

import portfolioImage from "../../../assets/images/portfolioImage.jpeg";

import { Typing } from "../..";
import { useStyles } from "./styles";
import { staticData } from "../../../static/data";

export const AboutSection = () => {
  const classes = useStyles();

  return (
    <section id="about">
      <Grid container className={classes.mainContainer}>
        <Grid item xs={12} sm={6}>
          <Box display={"flex"} alignItems={"center"}>
            <Typing text={staticData.aboutSection.title} />
          </Box>
          <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
            <Typography className={classes.aboutText}>
              {staticData.aboutSection.text}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.gridImage}>
          <img src={portfolioImage} alt="image" className={classes.image} />
        </Grid>
      </Grid>
    </section>
  );
};
