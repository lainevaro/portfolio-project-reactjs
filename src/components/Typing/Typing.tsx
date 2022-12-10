import { TypeAnimation } from "react-type-animation";

import { useStyles } from "./styles";

interface Props {
  text: string;
}

export const Typing = ({ text }: Props) => {
  const classes = useStyles();

  return (
    <TypeAnimation
      color="white"
      sequence={[text, 5000, ""]}
      wrapper="div"
      cursor={true}
      repeat={Infinity}
      className={classes.typingText}
    />
  );
};
