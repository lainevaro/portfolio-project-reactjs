import { makeStyles } from "@mui/styles";
import { FONT_FAMILY } from "../../../constants";

export const useStyles = makeStyles(() => ({
  mainContainer: {
    minHeight: "50vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    animation: "lightSpeedInRight",
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
  cardText: {
    color: 'white !important',
    fontFamily: FONT_FAMILY,
    fontSize: '15px !important',
    fontWeight: '300 !important',
  },
  techText: {
    color: 'white !important',
    fontFamily: FONT_FAMILY,
    fontSize: '15px !important',
    fontWeight: '300 !important',
  },
  card: {
    maxWidth: 345,
    background: "#1d1d1d !important",
    color: "white !important",
    borderRadius: '0px !important',
  },
  chip: {
    color: "white !important",
    background: "#303030 !important",
    marginRight: '5px !important',
    marginTop: '5px !important'
  }
}));


