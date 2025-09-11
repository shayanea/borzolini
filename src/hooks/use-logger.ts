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
    (...labels: Array<string | undefined>) => {
      if (!isProduction) {
        try {
          console.group(...labels);
        } catch {
          console.log('Logger group Error:', ...labels);
        }
      }
    },
    [isProduction]
  );

  const groupEnd = useCallback(() => {
    if (!isProduction) {
      try {
        console.groupEnd();
      } catch {
        console.log('Logger groupEnd Error');
      }
    }
  }, [isProduction]);

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
    (label?: string) => {
      if (!isProduction) {
        try {
          console.time(label);
        } catch {
          console.log('Logger time Error:', label);
        }
      }
    },
    [isProduction]
  );

  const timeEnd = useCallback(
    (label?: string) => {
      if (!isProduction) {
        try {
          console.timeEnd(label);
        } catch {
          console.log('Logger timeEnd Error:', label);
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
