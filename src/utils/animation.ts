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

export const staggerContainer2 = (
  staggerChildren = 0.1,
  delayChildren = 0
) => ({
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
      ease: [0.6, -0.05, 0.01, 0.99], 
      delay,
    },
  },
});

// For image hover
export const imageHover = {
  hover: {
    scale: 1.08,
    rotate: 2,
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
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
};

export const tagHover = {
  hover: {
    scale: 1.1,
    y: -2,
    transition: { type: "spring", stiffness: 300 },
  },
  tap: {
    scale: 0.95,
  },
};

// For links
export const linkHover = {
  hover: {
    x: 4,
    transition: { type: "spring", stiffness: 400, damping: 10 },
  },
  tap: {
    scale: 0.95,
  },
};

export const scrollUpRotate = {
  hidden: {
    opacity: 0,
    y: 100,
    rotateX: -45,
    transformOrigin: "bottom center",
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99],
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
