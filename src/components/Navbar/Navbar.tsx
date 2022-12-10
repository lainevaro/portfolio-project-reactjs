import "animate.css";

import { HashLink as Link } from "react-router-hash-link";

import { Typography, useMediaQuery, useTheme } from "@mui/material";
import { Button, Toolbar, Box, AppBar } from "@mui/material";

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
      <Toolbar
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Box
          sx={{ flexGrow: 1, display: "flex", alignItems: "center", gap: 2 }}
        >
          <img src={logo} alt="logo" className={classes.logo} />
          <Link className={classes.logoText} to={"#home"}>
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
            <Button color="inherit" className={classes.resumeButton}>
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
