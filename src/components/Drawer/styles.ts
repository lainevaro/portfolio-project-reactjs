import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  resumeButtonDrawer: {
    width: 120,
    height: 50,
    border: "1px solid !important",
    borderRadius: '0px !important',
    borderColor: "white",
    '&:hover': {
      backgroundColor: '#fff',
      color: '#1D8ECF',
    },
    animation: 'fadeInDown',
    animationDuration: '1s'
  },
  resumeDrawerText: {
    fontSize: 25,
    fontFamily: 'Chivo Mono, monospace !important',
  },
  drawerLinks: {
    fontFamily: 'Chivo Mono, monospace !important',
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 70,
    fontSize: 20,
    color: "white",
    textDecoration: 'none',
    transition: '0.2s',
    '&:hover': {
      color: '#1D8ECF',
      transition: '0.2s',
    },
    animation: 'fadeInDown',
    animationDuration: '2s'
  },
  drawerContainer: {
    background: "#0b0b0b !important",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  }
}));
