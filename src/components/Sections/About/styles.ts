import { makeStyles } from "@mui/styles";
import { FONT_FAMILY } from "../../../constants";

export const useStyles = makeStyles(() => ({
  mainContainer: {
    minHeight: "50vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    animation: "backInRight",
    animationDuration: "2s",
    padding: 20,
    textAlign: "match-parent",
  },
  aboutTitle: {
    fontFamily: FONT_FAMILY,
    fontSize: '30px !important',
  },
  aboutText: {
    fontFamily: FONT_FAMILY,
    fontSize: '18px !important',
    fontWeight: '400 !important',
    marginTop: 40,
    marginBottom: 20,
    padding: 20,
  },
  gridImage: {
    display: "flex",
    justifyContent: "center",
    animation: "backInRight",
    animationDuration: "2s",
  },
  image: {
    width: 300,
    borderRadius: 5
  }
}));


