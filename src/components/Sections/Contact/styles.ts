import { makeStyles } from "@mui/styles";
import { FONT_FAMILY } from "../../../constants";

export const useStyles = makeStyles(() => ({
  mainContainer: {
    minHeight: "50vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    animation: "bounceIn",
    animationDuration: "2s",
    padding: 20,
    textAlign: "match-parent",
  },
  descriptionText: {
    fontFamily: FONT_FAMILY,
    fontSize: '25px !important',
    marginTop: '40px !important',
    fontWeight: '300 !important',
    marginBottom: '20px !important',
  },
  socialText: {
    fontFamily: FONT_FAMILY,
    fontSize: '15px !important',
    marginTop: '10px !important',
    fontWeight: '300 !important',
    marginBottom: '20px !important',
  },
  contactIcons: {
    textDecoration: "none !important",
    color: "white !important",
    cursor: "pointer"
  }
}));


