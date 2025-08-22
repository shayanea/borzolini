'use client';

import { motion } from 'framer-motion';

import { cn } from '@/lib/utils';

interface AnimatedContainerProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scaleIn' | 'rotateIn' | 'bounceIn';
  delay?: number;
  duration?: number;
  stagger?: boolean;
  staggerDelay?: number;
  viewport?: boolean;
  once?: boolean;
}

const animationVariants = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.6, ease: 'easeOut' },
  },
  slideUp: {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: 'easeOut' },
  },
  slideLeft: {
    initial: { opacity: 0, x: -60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: 'easeOut' },
  },
  slideRight: {
    initial: { opacity: 0, x: 60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: 'easeOut' },
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.6, ease: 'easeOut' },
  },
  rotateIn: {
    initial: { opacity: 0, rotate: -10, scale: 0.8 },
    animate: { opacity: 1, rotate: 0, scale: 1 },
    transition: { duration: 0.6, ease: 'easeOut' },
  },
  bounceIn: {
    initial: { opacity: 0, scale: 0.3 },
    animate: { opacity: 1, scale: 1 },
    transition: {
      duration: 0.6,
      ease: [0.68, -0.55, 0.265, 1.55],
    },
  },
};

export function AnimatedContainer({
  children,
  className,
  animation = 'fadeIn',
  delay = 0,
  duration,
  stagger = false,
  staggerDelay = 0.1,
  viewport = false,
  once = true,
  ...props
}: AnimatedContainerProps) {
  const baseVariants = animationVariants[animation];

  // Apply custom delay and duration if provided
  const variants = {
    ...baseVariants,
    transition: {
      ...baseVariants.transition,
      delay: delay,
      duration: duration || baseVariants.transition.duration,
    },
  };

  // Add stagger support for children
  const containerVariants = stagger
    ? {
        animate: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }
    : undefined;

  const viewportProps = viewport
    ? {
        whileInView: 'animate',
        viewport: { once },
      }
    : {
        animate: 'animate',
      };

  return (
    <motion.div
      className={cn(className)}
      initial='initial'
      variants={stagger ? containerVariants : variants}
      {...viewportProps}
      {...props}
    >
      {stagger ? <motion.div variants={variants}>{children}</motion.div> : children}
    </motion.div>
  );
}

// Specialized animated components for common use cases
export function FadeInContainer({ children, ...props }: Omit<AnimatedContainerProps, 'animation'>) {
  return (
    <AnimatedContainer animation='fadeIn' {...props}>
      {children}
    </AnimatedContainer>
  );
}

export function SlideUpContainer({ children, ...props }: Omit<AnimatedContainerProps, 'animation'>) {
  return (
    <AnimatedContainer animation='slideUp' {...props}>
      {children}
    </AnimatedContainer>
  );
}

export function ScaleInContainer({ children, ...props }: Omit<AnimatedContainerProps, 'animation'>) {
  return (
    <AnimatedContainer animation='scaleIn' {...props}>
      {children}
    </AnimatedContainer>
  );
}

export function StaggerContainer({ children, ...props }: Omit<AnimatedContainerProps, 'animation' | 'stagger'>) {
  return (
    <AnimatedContainer animation='fadeIn' stagger {...props}>
      {children}
    </AnimatedContainer>
  );
}
