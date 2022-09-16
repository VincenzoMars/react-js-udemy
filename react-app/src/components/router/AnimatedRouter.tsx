import { BrowserRouter as Router } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import AnimatedRoutes from "./AnimatedRoutes";

const AnimatedRouter = () => {
  return (
    <Router>
      <AnimatePresence>
        <AnimatedRoutes />
      </AnimatePresence>
    </Router>
  );
};

export default AnimatedRouter;
