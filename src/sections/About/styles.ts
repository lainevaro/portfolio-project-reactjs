import { makeStyles } from "@mui/styles";

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
    fontFamily: "Chivo Mono, monospace !important",
    fontSize: '30px !important',
  },
  aboutText: {
    fontFamily: "Chivo Mono, monospace !important",
    fontSize: '18px !important',
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
    width: 400,
    borderRadius: 5
  }
}));


