import { motion } from "framer-motion";

import styles from "./AnimatedPageWrapper.module.scss";

const AnimatedPageWrapper = (props: any) => {
  return (
    <motion.div
      className={styles.animatedWrapper}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {props.children}
    </motion.div>
  );
};

export default AnimatedPageWrapper;
