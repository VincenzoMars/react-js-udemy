import { motion } from "framer-motion";

const AnimatedPageWrapper = (props: any) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {props.children}
    </motion.div>
  );
};

export default AnimatedPageWrapper;
