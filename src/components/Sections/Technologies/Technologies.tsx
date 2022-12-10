import { Box, Typography } from "@mui/material";

import Grid from "@mui/material/Grid";

import { useStyles } from "./styles";
import { Typing } from "../..";
import { staticData } from "../../../static/data";

export const TechnologiesSection = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.mainContainer}>
      <Grid item xs={12} sm={8}>
        <Box>
          <Typing text={staticData.technologiesSection.title} />
        </Box>
        <Box>
          <Typography textAlign={"center"} className={classes.descriptionText}>
            {staticData.technologiesSection.text}
          </Typography>
          <Box
            display={"flex"}
            gap={5}
            flexWrap={"wrap"}
            justifyContent={"center"}
          >
            {staticData.technologiesSection.icons.map((item, key) => (
              <Box textAlign={"center"} key={key}>
                <Typography className={classes.descriptionText}>
                  {item.title}
                </Typography>
                <Box
                  height={110}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <img
                    src={item.icon}
                    alt={item.title}
                    style={{ width: 100 }}
                  />
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
