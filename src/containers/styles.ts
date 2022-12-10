import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  container: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#0d0d0d',
  },
  content: {
    margin: "0 auto",
  },
}));
