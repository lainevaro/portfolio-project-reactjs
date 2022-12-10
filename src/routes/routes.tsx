import { useContext } from "react";

import {
  Route,
  Navigate,
  BrowserRouter,
  Routes as Navigation,
} from "react-router-dom";

import { MainHome } from "../pages";
import GlobalContext from "../context/globalContext";
import { Loader } from "../components";

const Routes = () => {
  const { isLoading } = useContext(GlobalContext);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <BrowserRouter>
          <Navigation>
            <Route path="/" element={<MainHome />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Navigation>
        </BrowserRouter>
      )}
    </>
  );
};

export default Routes;
