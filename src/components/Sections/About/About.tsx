import { Box, Typography } from "@mui/material";

import Grid from "@mui/material/Grid";

import portfolioImage from "../../../assets/images/portfolioImage.jpeg";

import { useStyles } from "./styles";
import { staticData } from "../../../static/data";
import { Typing } from "../..";
import { forwardRef } from "react";

interface Props {
  ref: null;
}

const AboutSection = ({ ref }: Props) => {
  const classes = useStyles();

  return (
    <div ref={ref}>
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
    </div>
  );
};

export default forwardRef(AboutSection);
