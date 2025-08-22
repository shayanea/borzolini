'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

interface UseIntersectionObserverOptions {
  threshold?: number | number[];
  rootMargin?: string;
  root?: Element | null;
}

interface UseIntersectionObserverReturn {
  ref: React.RefObject<HTMLElement | null>;
  isIntersecting: boolean;
  entry?: IntersectionObserverEntry;
}

export function useIntersectionObserver(options: UseIntersectionObserverOptions = {}): UseIntersectionObserverReturn {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [entry, setEntry] = useState<IntersectionObserverEntry>();
  const ref = useRef<HTMLElement>(null);

  const { threshold = 0, rootMargin = '0px', root = null } = options;

  const updateEntry = useCallback(([entry]: IntersectionObserverEntry[]) => {
    setEntry(entry);
    setIsIntersecting(entry.isIntersecting);
  }, []);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(updateEntry, {
      threshold,
      rootMargin,
      root,
    });

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, root, updateEntry]);

  return { ref, isIntersecting, entry };
}

// Specialized hook for animation triggers
export function useAnimationTrigger(options: UseIntersectionObserverOptions & { delay?: number } = {}) {
  const { delay = 0, ...observerOptions } = options;
  const { ref, isIntersecting } = useIntersectionObserver(observerOptions);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (isIntersecting) {
      const timer = setTimeout(() => {
        setShouldAnimate(true);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [isIntersecting, delay]);

  return { ref, shouldAnimate, isIntersecting };
}

// Hook for infinite scroll or pagination
export function useInfiniteScroll(
  callback: () => void,
  options: UseIntersectionObserverOptions & { enabled?: boolean } = {}
) {
  const { enabled = true, ...observerOptions } = options;
  const { ref, isIntersecting } = useIntersectionObserver(observerOptions);

  useEffect(() => {
    if (enabled && isIntersecting) {
      callback();
    }
  }, [enabled, isIntersecting, callback]);

  return { ref, isIntersecting };
}
