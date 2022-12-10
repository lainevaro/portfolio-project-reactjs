import { makeStyles } from "@mui/styles";
import { FONT_FAMILY } from "../../constants";

export const useStyles = makeStyles(() => ({
  mainContainer: {
    marginBottom: 2,
    display: "flex",
    justifyContent: "flex-end",
  },
  icon: {
    background: "#242424 !important",
    color: "white !important",
    "&:hover": {
      background: "#393939 !important",
    },
  },
}));


