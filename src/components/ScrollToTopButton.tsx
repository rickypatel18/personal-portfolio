"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

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
          className="scroll-button fixed bottom-10 lg:bottom-20 right-5 lg:right-15 z-50 p-1.5 lg:p-2 font-black text-white rounded-full shadow-orange-500 shadow-md dark:shadow-md cursor-pointer hover:shadow-lg"
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          transition={{ duration: 1, ease: "anticipate" }}
          aria-label="Scroll to top"
          title="Scroll to top"
        >
          <Image
            src="/greenArrow.png"
            alt="up arrow"
            className="h-6 w-6 lg:h-7 lg:w-7 xl:h-8 xl:w-8"
            height={20}
            width={20}
          ></Image>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopButton;
