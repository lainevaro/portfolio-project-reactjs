import { useContext } from "react";

import { Route, Routes as Navigation, BrowserRouter } from "react-router-dom";

import { MainHome } from "../pages/MainHome";
import ScrollToTop from "../components/ScrollToTop";
import LoaderContext from "../context/loadingContext";
import { Navbar, Footer, Loader } from "../components";

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
          </Navigation>
          <ScrollToTop />
          <Footer />
        </BrowserRouter>
      )}
    </>
  );
};

export default Routes;
