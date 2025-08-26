export const analyticsConfig = {
  // Umami Analytics Configuration
  umami: {
    // Enable/disable analytics
    enabled: process.env.NODE_ENV === 'production',
    
    // Your Umami website ID (get this from Umami dashboard)
    websiteId: process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID || 'your-website-id-here',
    
    // Umami script URL
    scriptUrl: process.env.NEXT_PUBLIC_UMAMI_SCRIPT_URL || 'http://localhost:3001',
    
    // Your website domain for tracking
    domain: process.env.NEXT_PUBLIC_WEBSITE_DOMAIN || 'localhost',
  },
  
  // Google Analytics 4 Configuration (alternative)
  googleAnalytics: {
    enabled: false, // Set to true if you want to use GA4 instead
    measurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '',
  },
  
  // Privacy and GDPR settings
  privacy: {
    // Respect Do Not Track header
    respectDNT: true,
    
    // Anonymize IP addresses
    anonymizeIP: true,
    
    // Cookie consent required
    requireConsent: false,
  },
} as const;

export type AnalyticsConfig = typeof analyticsConfig;
