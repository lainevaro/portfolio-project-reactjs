import { Box, Fab } from "@mui/material";

import { ArrowUpward } from "@mui/icons-material";

const ScrollToTop = () => {
  return (
    <Box
      m={1}
      sx={{
        marginBottom: 2,
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      <Fab
        sx={{
          background: "#242424",
          color: "white",
          "&:hover": {
            background: "#393939",
          },
        }}
        aria-label="arrow"
        onClick={() => window.scrollTo(0, 0)}
      >
        <ArrowUpward />
      </Fab>
    </Box>
  );
};

export default ScrollToTop;
