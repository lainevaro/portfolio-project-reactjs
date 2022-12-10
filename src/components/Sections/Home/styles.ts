import { makeStyles } from "@mui/styles";
import { FONT_FAMILY } from "../../../constants";

export const useStyles = makeStyles(() => ({
  mainContainer: {
    minHeight: "50vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    animation: "bounceInLeft",
    animationDuration: "1s",
  },
  welcomeText: {
    fontFamily: FONT_FAMILY,
    fontSize: '20px !important',
    marginBottom: '20px !important',
    fontWeight: '200 !important',
  },
  typingText: {
    fontSize: '30px !important',
    fontFamily: FONT_FAMILY,
    marginBottom: '20px !important',
    fontWeight: 600,
  },
  descriptionText: {
    fontFamily: FONT_FAMILY,
    fontSize: '25px !important',
    marginTop: '40px !important',
    fontWeight: '300 !important',
  }
}));


