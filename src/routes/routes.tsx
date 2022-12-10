import { useContext } from "react";

import {
  Route,
  Routes as Navigation,
  BrowserRouter,
  Navigate,
} from "react-router-dom";

import ScrollToTop from "../components/ScrollToTop";
import LoaderContext from "../context/loadingContext";
import { Navbar, Loader } from "../components";
import { MainHome } from "../pages";

const Routes = () => {
  const { isLoading } = useContext(LoaderContext);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <BrowserRouter>
          <Navbar />
          <Navigation>
            <Route path="/" element={<MainHome />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Navigation>
          <ScrollToTop />
        </BrowserRouter>
      )}
    </>
  );
};

export default Routes;
