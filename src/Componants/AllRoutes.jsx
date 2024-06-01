import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Product from "../Pages/Product";
import Login from "../Pages/Login";
import { Authcontext } from "../Context/AuthcontextProvider";
import { useContext } from "react";

function AllRoutes() {
  function PrivateRoutes({ children }) {
    const { authDetailed } = useContext(Authcontext);

    if (!authDetailed.isLoggedIn) {
      return <Navigate to="/login" />;
    }

    return children;
  }

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route
          path="/"
          element={
            <PrivateRoutes>
              <Home />
            </PrivateRoutes>
          }
        />

        <Route
          path="/about"
          element={
            <PrivateRoutes>
              <About />
            </PrivateRoutes>
          }
        />

        <Route
          path="/contact"
          element={
            <PrivateRoutes>
              <Contact />
            </PrivateRoutes>
          }
        />

        <Route
          path="/product"
          element={
            <PrivateRoutes>
              <Product />
            </PrivateRoutes>
          }
        />
      </Routes>
    </>
  );
}

export default AllRoutes;
