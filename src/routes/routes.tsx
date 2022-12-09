import { useContext } from "react";

import {
  Route,
  Routes as Navigation,
  BrowserRouter as Router,
} from "react-router-dom";

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
        <>
          <Router>
            <Navbar />
            <ScrollToTop />
            <Navigation>
              <Route path="/" element={<MainHome />} />
            </Navigation>
            <Footer />
          </Router>
        </>
      )}
      {/*  <Router>
        <Navbar />
        <ScrollToTop />
        <Navigation>
          <Route path='/' element={<MainHome />} />
        </Navigation>
        <Footer />
      </Router> */}
    </>
  );
};

export default Routes;
