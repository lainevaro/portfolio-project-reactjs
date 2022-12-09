import { Box } from "@mui/material";
import { TypeAnimation } from "react-type-animation";

export const MainHome = () => {
  return (
    <Box
      style={{
        color: "white",
        margin: 25,
        animation: "fadeInDown",
        animationDuration: "1s",
      }}
    >
      <TypeAnimation
        color="white"
        sequence={[
          "Hi, my name is Alvaro",
          2000,
          "I'm a Front end developer",
          2000,
          "",
        ]}
        wrapper="div"
        cursor={true}
        repeat={Infinity}
        style={{ fontSize: "2em" }}
      />
    </Box>
  );
};
