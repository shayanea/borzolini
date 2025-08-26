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
        console.log(...args);
      }
    },
    [isProduction]
  );

  const info = useCallback(
    (...args: unknown[]) => {
      if (!isProduction) {
        console.info(...args);
      }
    },
    [isProduction]
  );

  const debug = useCallback(
    (...args: unknown[]) => {
      if (!isProduction) {
        console.debug(...args);
      }
    },
    [isProduction]
  );

  const warn = useCallback(
    (...args: unknown[]) => {
      if (!isProduction) {
        console.warn(...args);
      }
    },
    [isProduction]
  );

  // Always allow error logging in production for debugging issues
  const error = useCallback((...args: unknown[]) => {
    console.error(...args);
  }, []);

  // Group logging for better organization
  const group = useCallback(
    (label: string) => {
      if (!isProduction) {
        console.group(label);
      }
    },
    [isProduction]
  );

  const groupEnd = useCallback(() => {
    if (!isProduction) {
      console.groupEnd();
    }
  }, [isProduction]);

  // Table logging for data visualization
  const table = useCallback(
    (data: unknown) => {
      if (!isProduction) {
        console.table(data);
      }
    },
    [isProduction]
  );

  // Time logging for performance measurement
  const time = useCallback(
    (label: string) => {
      if (!isProduction) {
        console.time(label);
      }
    },
    [isProduction]
  );

  const timeEnd = useCallback(
    (label: string) => {
      if (!isProduction) {
        console.timeEnd(label);
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
