import { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { Button, Box, Typography } from "@mui/material";
import Drawer from "react-modern-drawer";
import { HamburgerSpin } from "react-animated-burgers";

import { useStyles } from "./styles";
import { config } from "../../static/config";
import "react-modern-drawer/dist/index.css";

export const DrawerMenu = () => {
  const classes = useStyles();
  const [isActive, setIsActive] = useState(false);

  const toggleDrawer = () => setIsActive(!isActive);

  return (
    <>
      <HamburgerSpin
        buttonStyle={{ padding: 0 }}
        isActive={isActive}
        toggleButton={toggleDrawer}
        buttonColor="#0d0d0d"
        barColor="white"
      />
      <Drawer
        style={{ height: "100%" }}
        enableOverlay
        className={classes.drawerContainer}
        open={isActive}
        onClose={toggleDrawer}
        direction="left"
      >
        <Box sx={{ textAlign: "center" }}>
          {config.navLinks.map((item, key) => (
            <Link
              key={key}
              className={classes.drawerLinks}
              to={item.url}
              onClick={toggleDrawer}
            >
              {item.name}
            </Link>
          ))}
          <Button color="inherit" className={classes.resumeButtonDrawer}>
            <Typography className={classes.resumeDrawerText}>Resume</Typography>
          </Button>
        </Box>
      </Drawer>
    </>
  );
};
