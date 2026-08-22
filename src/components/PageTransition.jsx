import { motion } from "framer-motion";

export default function PageTransition({ children }) {
  return (
    <motion.div
      className="page-transition"
      initial={{
        opacity: 0,
        y: 25,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: -25,
      }}
      transition={{
        duration: 0.45,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}