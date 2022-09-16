import { Route, Routes, useLocation } from "react-router-dom";

import AnimatedPageWrapper from "./AnimatedPageWrapper";
import Listing from "../Listing";
import WelcomePage from "../../pages/welcome/Welcome";

const routes = [
  {
    path: "/",
    element: (
      <AnimatedPageWrapper>
        <WelcomePage />
      </AnimatedPageWrapper>
    ),
  },
  {
    path: "/movies",
    element: (
      <AnimatedPageWrapper>
        <Listing />
      </AnimatedPageWrapper>
    ),
  },
];

const AnimatedRouter = () => {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      {routes.map((route) => (
        <Route path={route.path} element={route.element} key={route.path} />
      ))}
    </Routes>
  );
};

export default AnimatedRouter;
