"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

function ClientAnimationWrapper({ children }: { children: ReactNode }) {
  return (
    <motion.div
      animate={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: -10 }}
      transition={{
        duration: 2,
        delay: 2,
        ease: "easeInOut",
        repeat: Infinity,
      }}
    >
      {children}
    </motion.div>
  );
}

export default ClientAnimationWrapper;
