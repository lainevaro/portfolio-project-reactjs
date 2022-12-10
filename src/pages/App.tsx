import { useState } from "react";

import Routes from "../routes/routes";

import GlobalContext from "../context/globalContext";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <GlobalContext.Provider value={{ isLoading, setIsLoading }}>
      <Routes />
    </GlobalContext.Provider>
  );
}

export default App;
