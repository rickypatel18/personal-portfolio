export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export const fadeInDown = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5 },
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const cardHover = {
  whileHover: { scale: 1.05 },
  transition: { type: "spring", stiffness: 300 },
};

export const cardHoverSmall = {
  whileHover: { scale: 1.02 },
  transition: { type: "spring", stiffness: 300 },
};

export const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.5 },
};

export const slideInLeft = {
  initial: { x: -60, y: 60, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { duration: 0.5 },
};

export const slideInRight = {
  initial: { x: 60, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { duration: 0.5 },
};

// later added animations
export const scaleIn = {
  initial: { scale: 0.8, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: { duration: 0.5 },
};

export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

export const textVariant = (delay: number) => ({
  hidden: {
    y: 50,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1.25,
      delay,
    },
  },
});

export const zoomIn = (delay: number) => ({
  hidden: {
    scale: 0.95,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      delay,
      duration: 0.75,
    },
  },
});

// utils/animation.js

export const staggerContainer2 = (staggerChildren = 0.1, delayChildren = 0) => ({
  initial: {},
  animate: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const fadeInUp2 = (duration = 0.5, delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration,
      ease: "easeOut",
      delay,
    },
  },
});

export const fadeInLeft = (duration = 0.5, delay = 0) => ({
  initial: { opacity: 0, x: -20 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration,
      ease: "easeOut",
      delay,
    },
  },
});

export const scaleUp = (duration = 0.4, delay = 0) => ({
  initial: { opacity: 0, scale: 0.8 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration,
      ease: [0.6, -0.05, 0.01, 0.99], // A nice ease for pop
      delay,
    },
  },
});


// Enhanced card hover
export const cardHover2 = {
  hover: {
    y: -8,
    scale: 1.03,
    boxShadow: "0px 15px 25px rgba(0,0,0,0.15), 0px 5px 10px rgba(0,0,0,0.1)",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 15,
    },
  },
  tap: {
    scale: 0.98,
    boxShadow: "0px 5px 10px rgba(0,0,0,0.1), 0px 2px 4px rgba(0,0,0,0.08)",
  }
};

// For image hover
export const imageHover = {
  hover: {
    scale: 1.08,
    rotate: 2, // Slight playful rotation
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
    },
  },
};

// For text elements on hover
export const textHover = {
  hover: {
    x: 5,
    // color: "#FF6347", // Example: Change color - use your primary color
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
};

// For tags/buttons
export const tagHover = {
  hover: {
    scale: 1.1,
    // backgroundColor: "rgba(your_primary_color_rgb, 0.2)", // Make it reactive
    y: -2,
    transition: { type: "spring", stiffness: 300 }
  },
  tap: {
    scale: 0.95
  }
};

// For links
export const linkHover = {
  hover: {
    x: 4,
    // color: "#FF6347", // Example
    transition: { type: "spring", stiffness: 400, damping: 10 }
  },
  tap: {
    scale: 0.95
  }
};


export const cardHoverNew = {
  hover: {
    scale: 1.05, // Keep scale for a nice touch
    boxShadow: "0px 10px 20px rgba(0,0,0,0.1), 0px 3px 8px rgba(0,0,0,0.08)",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 15,
    },
  },
  tap: {
    scale: 0.98,
    boxShadow: "0px 5px 10px rgba(0,0,0,0.1), 0px 2px 4px rgba(0,0,0,0.08)",
  }
};

// Other variants like fadeInUp, fadeInDown, staggerContainer etc. remain the same
export const fadeInUpNew = (duration = 0.5, delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration,
      ease: "easeOut",
      delay,
    },
  },
});

export const fadeInDownNew = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export const fadeInNew = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};


export const staggerContainerNew = (staggerChildren = 0.1, delayChildren = 0) => ({
  initial: {},
  animate: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const cardHoverSmallNew = { // Assuming this is for experience/education cards
  hover: {
    y: -5,
    scale: 1.02,
    boxShadow: "0px 8px 15px rgba(0,0,0,0.08), 0px 2px 6px rgba(0,0,0,0.05)",
    transition: { type: "spring", stiffness: 300, damping: 15 },
  },
  tap: {
    scale: 0.99,
  }
};

// utils/animation.js or at the top of your Page.jsx
export const scrollUpRotate = {
  hidden: { // State before it enters the viewport
    opacity: 0,
    y: 100, // Start 100px below its final position
    rotateX: -45, // Rotate on the X-axis (like flipping up from the bottom)
    // rotateZ: 15, // Alternatively, a slight Z-axis rotation
    transformOrigin: "bottom center", // Crucial for the rotation to look right
  },
  visible: { // State when it's in view
    opacity: 1,
    y: 0,
    rotateX: 0,
    // rotateZ: 0,
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99], // A nice easing function
      // delay: 0.1 // Optional small delay
    },
  },
};

// A simpler fade-in for smaller elements or if rotation is too much
export const simpleFadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};