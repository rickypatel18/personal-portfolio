"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpIcon } from "@heroicons/react/24/solid";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set up scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // Scroll to top functionality
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-10 right-8 z-50 p-3 bg-primary font-black text-white rounded-full shadow-lg hover:bg-primary/90 focus:outline-none transition-colors "
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          transition={{ duration: 1, ease: "anticipate" }}
          aria-label="Scroll to top"
          title="Scroll to top"
        >
          <ArrowUpIcon className="h-6 w-6"/>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopButton;
