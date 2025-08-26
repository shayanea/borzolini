export const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};
