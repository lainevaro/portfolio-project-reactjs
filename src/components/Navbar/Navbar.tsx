import "animate.css";

import { Link } from "react-router-dom";

import { useMediaQuery, useTheme } from "@mui/material";
import { Button, Toolbar, Box, AppBar } from "@mui/material";

import { useStyles } from "./styles";
import { config } from "../../static/config";
import logo from "../../assets/images/logo.png";
import { DrawerMenu } from "../Drawer/Drawer";

export const Navbar = () => {
  const classes = useStyles();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar
      position="sticky"
      variant="outlined"
      sx={{
        background: "#171717",
        flexGrow: 1,
        animation: "fadeInDown",
        animationDuration: "1s",
      }}
    >
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <img src={logo} alt="logo" style={{ width: 50 }} />
        </Box>
        {!isMobile ? (
          <Box
            sx={{
              justifyContent: "center",
              alignItems: "center",
              gap: 2,
              display: "flex",
            }}
          >
            {config.navLinks.map((item, key) => (
              <Link key={key} className={classes.navLinks} to={item.url}>
                {item.name}
              </Link>
            ))}
            <Button color="inherit" className={classes.resumeButton}>
              Resume
            </Button>
          </Box>
        ) : (
          <DrawerMenu />
        )}
      </Toolbar>
    </AppBar>
  );
};
