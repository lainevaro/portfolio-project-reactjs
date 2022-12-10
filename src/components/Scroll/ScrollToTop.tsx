import { Box, Fab } from "@mui/material";

import { useState, useEffect } from "react";

import { useStyles } from "./styles";

import { ArrowUpward } from "@mui/icons-material";

export const ScrollToTop = () => {
  const classes = useStyles();
  const [backToUp, setBackToUp] = useState(false);

  useEffect(() => {
    return () => {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
          setBackToUp(true);
        } else {
          setBackToUp(false);
        }
      });
    };
  }, [backToUp]);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Box m={1} className={classes.mainContainer}>
      {backToUp && (
        <Fab className={classes.icon} aria-label="arrow" onClick={scrollUp}>
          <ArrowUpward />
        </Fab>
      )}
    </Box>
  );
};
