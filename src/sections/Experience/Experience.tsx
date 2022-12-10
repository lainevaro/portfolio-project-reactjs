import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

export const ExperienceSection = () => {
  return (
    <Grid
      container
      style={{
        minHeight: "50vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        animation: "slideInLeft",
        animationDuration: "2s",
        padding: 20,
      }}
    >
      <Grid item xs={12} sm={6}>
        <Box>
          <Typography>ExperienceSection</Typography>
        </Box>
      </Grid>
    </Grid>
  );
};
