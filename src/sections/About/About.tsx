import { Box, Typography } from "@mui/material";

import Grid from "@mui/material/Grid";

import portfolioImage from "../../assets/images/portfolioImage.jpeg";

import { useStyles } from "./styles";

export const AboutSection = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.mainContainer}>
      <Grid item xs={12} sm={6}>
        <Box display={"flex"} alignItems={"center"}>
          <Typography className={classes.aboutTitle}>About me</Typography>
        </Box>
        <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
          <Typography className={classes.aboutText}>
            Digital transformation process consultant, with experience in
            Corporate Identity and Digital Environment. I have working renewal
            process and change of graphic brand in addition to the adaptation of
            new technologies to the advertising and transactional process, being
            in charge of products such as informational sites, transactional
            site and mobile app.
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} className={classes.gridImage}>
        <img src={portfolioImage} alt="image" className={classes.image} />
      </Grid>
    </Grid>
  );
};
