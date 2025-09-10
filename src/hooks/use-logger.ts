import { useCallback } from 'react';

/**
 * Custom hook for conditional logging
 * Automatically disables console statements in production builds
 */

export const useLogger = () => {
  const isProduction = process.env.NODE_ENV === 'production';

  const log = useCallback(
    (...args: unknown[]) => {
      if (!isProduction) {
        try {
          console.log(...args);
        } catch {
          console.log('Logger log Error:', ...args);
        }
      }
    },
    [isProduction]
  );

  const info = useCallback(
    (...args: unknown[]) => {
      if (!isProduction) {
        try {
          console.info(...args);
        } catch {
          console.log('Logger info Error:', ...args);
        }
      }
    },
    [isProduction]
  );

  const debug = useCallback(
    (...args: unknown[]) => {
      if (!isProduction) {
        try {
          console.debug(...args);
        } catch {
          console.log('Logger debug Error:', ...args);
        }
      }
    },
    [isProduction]
  );

  const warn = useCallback(
    (...args: unknown[]) => {
      if (!isProduction) {
        try {
          console.warn(...args);
        } catch {
          console.log('Logger warn Error:', ...args);
        }
      }
    },
    [isProduction]
  );

  const error = useCallback((...args: unknown[]) => {
    try {
      console.error(...args);
    } catch {
      console.log('Logger Error:', ...args);
    }
  }, []);

  const group = useCallback(
    (...args: unknown[]) => {
      if (!isProduction) {
        try {
          console.group(...args);
        } catch {
          console.log('Logger group Error:', ...args);
        }
      }
    },
    [isProduction]
  );

  const groupEnd = useCallback(
    (...args: unknown[]) => {
      if (!isProduction) {
        try {
          console.groupEnd(...args);
        } catch {
          console.log('Logger groupEnd Error:', ...args);
        }
      }
    },
    [isProduction]
  );

  const table = useCallback(
    (...args: unknown[]) => {
      if (!isProduction) {
        try {
          console.table(...args);
        } catch {
          console.log('Logger table Error:', ...args);
        }
      }
    },
    [isProduction]
  );

  const time = useCallback(
    (...args: unknown[]) => {
      if (!isProduction) {
        try {
          console.time(...args);
        } catch {
          console.log('Logger time Error:', ...args);
        }
      }
    },
    [isProduction]
  );

  const timeEnd = useCallback(
    (...args: unknown[]) => {
      if (!isProduction) {
        try {
          console.timeEnd(...args);
        } catch {
          console.log('Logger timeEnd Error:', ...args);
        }
      }
    },
    [isProduction]
  );

  return {
    log,
    info,
    debug,
    warn,
    error,
    group,
    groupEnd,
    table,
    time,
    timeEnd,
    isProduction,
  };
};

export type Logger = ReturnType<typeof useLogger>;
