import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  mainContainer: {
    position: 'fixed',
    bottom: '50px',
    right: '50px',
    height: '50px',
    width: '50px'
  },
  icon: {
    background: "#242424 !important",
    color: "white !important",
    "&:hover": {
      background: "#393939 !important",
    },
  },
}));


