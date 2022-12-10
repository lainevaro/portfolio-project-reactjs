import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  mainContainer: {
    position: 'fixed',
    bottom: '50px !important',
    right: '50px !important',
    height: '50px !important',
    width: '50px !important'
  },
  icon: {
    background: "#242424 !important",
    color: "white !important",
    "&:hover": {
      background: "#393939 !important",
    },
  },
}));


