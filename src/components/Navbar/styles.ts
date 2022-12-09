import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  resumeButton: {
    fontSize: 15,
    fontFamily: 'monospace !important',
    border: "1px solid !important",
    borderRadius: 0,
    borderColor: "white",
    '&:hover': {
      backgroundColor: '#fff',
      color: '#1D8ECF',
    },
    animation: 'fadeInDown',
    animationDuration: '1s'
  },
  navLinks: {
    fontSize: 15,
    color: "white",
    fontFamily: 'monospace !important',
    textDecoration: 'none',
    transition: '0.2s',
    '&:hover': {
      backgroundColor: '#171717',
      color: '#1D8ECF',
      transition: '0.2s'
    },
    animation: 'fadeInDown',
    animationDuration: '1s'
  },
}));
