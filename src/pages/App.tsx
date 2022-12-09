import "./App.css";
import { useState } from "react"

import Routes from "../routes/routes";

import LoaderContext from "../context/loadingContext";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <LoaderContext.Provider value={{ isLoading, setIsLoading }}>
      <Routes />
    </LoaderContext.Provider>
  )
}

export default App;
