import { createContext, useRef, MutableRefObject } from "react";

export default createContext({
  isLoading: true,
  setIsLoading: (state: boolean) => { },
});