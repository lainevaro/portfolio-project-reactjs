import { Box } from "@mui/material";

import Grid from "@mui/material/Grid";

import { useStyles } from "./styles";
import { Typing } from "../../components";
import { staticData } from "../../static/data";

export const ExperienceSection = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.mainContainer}>
      <Grid item xs={12} sm={6}>
        <Box display={"flex"} alignItems={"center"}>
          <Typing text={staticData.experienceSection.title} />
        </Box>
      </Grid>
    </Grid>
  );
};
