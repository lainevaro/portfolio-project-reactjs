import { Box, Typography, Grid } from "@mui/material";

import { TypeAnimation } from "react-type-animation";

import coding from "../../assets/lottieJson/coding.json";
import Lottie from "lottie-react";

export const HomeSection = () => {
  return (
    <Grid
      container
      style={{
        minHeight: "50vh",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        animation: "backInLeft",
        animationDuration: "1s",
      }}
    >
      <Grid item xs={12} sm={6}>
        <Box>
          <Typography
            style={{
              fontFamily: "Chivo Mono, monospace",
              fontSize: 20,
              marginBottom: 20,
              fontWeight: 200,
            }}
          >
            Hi, welcome to my portfolio
          </Typography>
          <TypeAnimation
            color="white"
            sequence={["My name is Alvaro Lainer!", 10000, ""]}
            wrapper="div"
            cursor={true}
            repeat={Infinity}
            style={{
              fontSize: 30,
              fontFamily: "Chivo Mono, monospace",
              marginBottom: 20,
              fontWeight: 600,
            }}
          />
          <Box>
            <Typography
              style={{
                fontFamily: "Chivo Mono, monospace",
                fontSize: 25,
                marginTop: 40,
                fontWeight: 300,
              }}
            >
              Front-end developer, passionate about web design and modern
              technologies
            </Typography>
          </Box>

          <Box display={"flex"} justifyContent={"center"}>
            <Lottie loop autoPlay animationData={coding} />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
