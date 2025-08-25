// Shared animation variants for consistent animations across components
export const animations = {
  fadeInUp: {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
  },

  fadeInDown: {
    initial: { opacity: 0, y: -60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
  },

  fadeInLeft: {
    initial: { opacity: 0, x: -60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
  },

  fadeInRight: {
    initial: { opacity: 0, x: 60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
  },

  slideInLeft: {
    initial: { opacity: 0, x: -60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
  },

  slideInRight: {
    initial: { opacity: 0, x: 60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
  },

  scaleIn: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
  },

  slideUp: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
  },

  staggerContainer: {
    animate: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  },

  staggerContainerFast: {
    animate: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  },
} as const;

// Animation hook for consistent viewport behavior
export const viewportConfig = {
  once: true,
  margin: '-100px',
} as const;

// Common animation props
export const commonAnimationProps = {
  initial: 'initial',
  whileInView: 'animate',
  viewport: viewportConfig,
} as const;
