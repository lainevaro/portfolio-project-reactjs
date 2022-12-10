import "animate.css";

import { HashLink as Link } from "react-router-hash-link";

import {
  Box,
  AppBar,
  Button,
  Toolbar,
  useTheme,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useStyles } from "./styles";
import { config } from "../../static/config";
import { DrawerMenu } from "../Drawer/Drawer";
import logo from "../../assets/images/logo.png";

interface Props {
  scrollTo: () => void;
}

export const Navbar = ({ scrollTo }: Props) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar position="sticky" elevation={0} className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Box className={classes.mainBox}>
          <img src={logo} alt="logo" className={classes.logo} />
          <Link className={classes.logoText} to={"#home"}>
            ALVARO-LAINER
          </Link>
        </Box>
        {!isMobile ? (
          <Box className={classes.navItemContainer}>
            {config.navLinks.map((item, key) => (
              <Link
                key={key}
                onClick={scrollTo}
                className={classes.navLinks}
                to={item.url}
              >
                {item.name}
              </Link>
            ))}
            <Button
              color="inherit"
              target="_blank"
              className={classes.resumeButton}
              href={"../../../public/resume.pdf"}
              download
            >
              <Typography fontSize={13}>Resume</Typography>
            </Button>
          </Box>
        ) : (
          <DrawerMenu />
        )}
      </Toolbar>
    </AppBar>
  );
};
