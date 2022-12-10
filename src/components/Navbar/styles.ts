import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  appBar: {
    background: "#0d0d0d !important",
    flexGrow: 1,
    animation: "fadeInDown",
    animationDuration: "1s",
    padding: 10
  },
  logo: {
    width: 40
  },
  logoText: {
    fontFamily: 'Chivo Mono, monospace !important',
    cursor: 'pointer',
    transition: '0.2s',
    '&:hover': {
      color: '#1D8ECF',
      transition: '0.2s',
    },
  },
  navItemContainer: {
    justifyContent: "center",
    alignItems: "center",
    gap: '30px !important',
    display: "flex",
  },
  resumeButton: {
    fontSize: 16,
    fontFamily: 'Chivo Mono, monospace !important',
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
  navLinks: {
    fontSize: 16,
    color: "white",
    fontFamily: 'Chivo Mono, monospace !important',
    textDecoration: 'none',
    transition: '0.2s',
    '&:hover': {
      backgroundColor: '#0d0d0d',
      color: '#1D8ECF',
      transition: '0.2s',
    },
    animation: 'fadeInDown',
    animationDuration: '1s'
  },
}));
