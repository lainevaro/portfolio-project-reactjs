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

export const Navbar = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar position="sticky" elevation={0} className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Box className={classes.mainBox}>
          <img src={logo} alt="logo" className={classes.logo} />
          <Link
            to={""}
            className={classes.logoText}
            onClick={() => window.scrollTo(0, 0)}>
            ALVARO-LAINER
          </Link>
        </Box>
        {!isMobile ? (
          <Box className={classes.navItemContainer}>
            {config.navLinks.map((item, key) => (
              <Link key={key} className={classes.navLinks} to={item.url}>
                {item.name}
              </Link>
            ))}
            <Button
              color="inherit"
              target="_blank"
              className={classes.resumeButton}
              href={"/resume.pdf"}
              download>
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
