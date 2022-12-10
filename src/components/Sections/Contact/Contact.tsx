import { Box, Typography, Link } from "@mui/material";

import Grid from "@mui/material/Grid";

import { useStyles } from "./styles";
import { Typing } from "../..";
import { staticData } from "../../../static/data";

export const ContactSection = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.mainContainer}>
      <Grid item xs={12} sm={6}>
        <Box display={"flex"} alignItems={"center"}>
          <Typing text={staticData.contactSection.title} />
        </Box>
        <Box>
          <Typography textAlign={"center"} className={classes.descriptionText}>
            {staticData.contactSection.text}
          </Typography>
        </Box>
        <Box display={"flex"} justifyContent={"center"} textAlign={"center"} flexWrap={'wrap'}>
          {staticData.contactSection.networks.map((item, key) => (
            <Link padding={2} className={classes.contactIcons} href={item.link}>
              {item.icon}
              <Typography className={classes.socialText} key={key}>
                {item.title}
              </Typography>
            </Link>
          ))}
        </Box>
      </Grid>
    </Grid>
  );
};
