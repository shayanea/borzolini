export interface AnalyticsConfig {
  umami: {
    enabled: boolean;
    websiteId: string;
    scriptUrl: string;
    domain: string;
  };
  privacy: {
    respectDNT: boolean;
    anonymizeIP: boolean;
    requireConsent: boolean;
  };
}

export const analyticsConfig: AnalyticsConfig = {
  umami: {
    enabled: process.env.NODE_ENV === 'production' || process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID !== undefined,
    websiteId: process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID || '',
    scriptUrl: process.env.NEXT_PUBLIC_UMAMI_SCRIPT_URL || 'http://localhost:3001',
    domain: process.env.NEXT_PUBLIC_WEBSITE_DOMAIN || 'localhost',
  },
  privacy: {
    respectDNT: process.env.NEXT_PUBLIC_ANALYTICS_RESPECT_DNT === 'true' || true,
    anonymizeIP: process.env.NEXT_PUBLIC_ANALYTICS_ANONYMIZE_IP === 'true' || true,
    requireConsent: process.env.NEXT_PUBLIC_ANALYTICS_REQUIRE_CONSENT === 'true' || false, // Set to true for GDPR compliance
  },
};

export const isAnalyticsEnabled = (): boolean => {
  return analyticsConfig.umami.enabled && analyticsConfig.umami.websiteId !== '';
};

export const getUmamiScriptUrl = (): string => {
  return `${analyticsConfig.umami.scriptUrl}/umami.js`;
};
