import { Box, Fab } from "@mui/material";

import { useStyles } from "./styles";

import { ArrowUpward } from "@mui/icons-material";

export const ScrollToTop = () => {
  const classes = useStyles();

  return (
    <Box m={1} className={classes.mainContainer}>
      <Fab
        className={classes.icon}
        aria-label="arrow"
        onClick={() => window.scrollTo(0, 0)}>
        <ArrowUpward />
      </Fab>
    </Box>
  );
};
