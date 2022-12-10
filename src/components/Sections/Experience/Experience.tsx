import {
  Box,
  Chip,
  Card,
  useTheme,
  CardMedia,
  Typography,
  CardContent,
  CardActionArea,
  useMediaQuery,
} from "@mui/material";

import Grid from "@mui/material/Grid";

import { Typing } from "../..";
import { useStyles } from "./styles";
import { staticData } from "../../../static/data";

export const ExperienceSection = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const routeTo = (link: string) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="experience">
      <Grid container className={classes.mainContainer}>
        <Grid item xs={12} sm={12}>
          <Box display={"flex"} alignItems={"center"}>
            <Typing text={staticData.experienceSection.title} />
          </Box>
          <Box>
            <Typography
              textAlign={"center"}
              className={classes.descriptionText}>
              {staticData.experienceSection.text}
            </Typography>
          </Box>
          <Box
            gap={1}
            display={"flex"}
            flexWrap={"wrap"}
            justifyContent={"center"}
            marginX={isMobile ? 0 : 2}>
            {staticData.experienceSection.projectList.map((item, key) => (
              <Card
                key={key}
                elevation={0}
                className={classes.card}
                onClick={() => routeTo(item.link)}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    image={item.img}
                    alt={item.title}
                  />
                  <CardContent>
                    <Typography
                      className={classes.cardText}
                      gutterBottom
                      variant="h5"
                      component="div">
                      {item.title}
                    </Typography>
                    {item.technologies.map((item, key) => (
                      <Chip label={item} key={key} className={classes.chip} />
                    ))}
                  </CardContent>
                </CardActionArea>
              </Card>
            ))}
          </Box>
        </Grid>
      </Grid>
    </section>
  );
};
