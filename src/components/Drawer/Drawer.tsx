import { useState } from "react";
import { Link } from "react-router-dom";

import { Button } from "@mui/material";
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
        isActive={isActive}
        toggleButton={toggleDrawer}
        buttonColor="#171717"
        barColor="white"
      />
      <Drawer
        enableOverlay
        style={{
          background: "#141414",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
        open={isActive}
        onClose={toggleDrawer}
        direction="left"
      >
        {config.navLinks.map((item, key) => (
          <Link key={key} className={classes.drawerLinks} to={item.url}>
            {item.name}
          </Link>
        ))}
        <Button color="inherit" className={classes.resumeButtonDrawer}>
          Resume
        </Button>
      </Drawer>
    </>
  );
};
