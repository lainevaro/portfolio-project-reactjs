import { ReactElement, useContext } from "react";
import { motion } from "framer-motion";
import LoaderContext from "../context/globalContext";
import { useStyles } from "./styles";

interface Props {
  children: ReactElement;
}

export const LoaderContainer = ({ children }: Props) => {
  const { setIsLoading } = useContext(LoaderContext)
  const classes = useStyles();
  
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      exit={{ display: 'none', opacity: 0 }}
      transition={{
        delay: 3.2,
        duration: 0.3
      }}
      onAnimationComplete={() => {
        setIsLoading(false)
      }}
      className={classes.container}
    >
      <div className={classes.content}>{children}</div>
    </motion.div>
  );
};
