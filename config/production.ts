/**
 * Production configuration
 * This file contains all production-specific settings and constants
 */

export const productionConfig = {
  // Environment
  NODE_ENV: 'production' as const,

  // Logging and debugging
  ENABLE_LOGGING: false,
  ENABLE_DEBUG: false,
  ENABLE_CONSOLE: false,

  // Performance
  ENABLE_ANALYTICS: true,
  ENABLE_ERROR_TRACKING: true,
  ENABLE_PERFORMANCE_MONITORING: true,

  // Build optimizations
  REMOVE_CONSOLE: true,
  MINIFY: true,
  COMPRESS: true,

  // Security
  ENABLE_SOURCE_MAPS: false,
  ENABLE_DEV_TOOLS: false,
} as const;

export type ProductionConfig = typeof productionConfig;
