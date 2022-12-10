import { useState } from "react";

import Drawer from "react-modern-drawer";
import { HashLink as Link } from "react-router-hash-link";

import { HamburgerSpin } from "react-animated-burgers";
import { Button, Box, Typography } from "@mui/material";

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
        barColor="white"
        isActive={isActive}
        buttonColor="#0d0d0d"
        toggleButton={toggleDrawer}
        buttonStyle={{ padding: 0 }}
      />
      <Drawer
        enableOverlay
        open={isActive}
        direction="left"
        onClose={toggleDrawer}
        style={{ height: "100%" }}
        className={classes.drawerContainer}>
        <Box sx={{ textAlign: "center" }}>
          {config.navLinks.map((item, key) => (
            <Link
              key={key}
              className={classes.drawerLinks}
              to={item.url}
              onClick={toggleDrawer}>
              {item.name}
            </Link>
          ))}
          <Button
            color="inherit"
            target="_blank"
            className={classes.resumeButtonDrawer}
            href={"../../../public/resume.pdf"}
            download>
            <Typography fontSize={13}>Resume</Typography>
          </Button>
        </Box>
      </Drawer>
    </>
  );
};
