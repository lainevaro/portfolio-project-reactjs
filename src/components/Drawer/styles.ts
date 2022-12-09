import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  resumeButtonDrawer: {
    fontSize: 15,
    marginBottom: '20px',
    fontFamily: 'monospace !important',
    border: "1px solid !important",
    borderRadius: 0,
    borderColor: "white",
  },
  drawerLinks: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 20,
    fontSize: 15,
    fontFamily: 'monospace',
    color: "white",
    textDecoration: 'none',
  }
}));
