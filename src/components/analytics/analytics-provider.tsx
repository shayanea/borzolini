'use client';

import { analyticsConfig, isAnalyticsEnabled } from '@/config/analytics';
import { ReactNode, createContext, useContext, useEffect } from 'react';

interface AnalyticsContextType {
  track: (eventName: string, eventData?: Record<string, string | number | boolean>) => void;
  isEnabled: boolean;
}

const AnalyticsContext = createContext<AnalyticsContextType>({
  track: () => {},
  isEnabled: false,
});

export const useAnalytics = (): AnalyticsContextType => {
  return useContext(AnalyticsContext);
};

interface AnalyticsProviderProps {
  children: ReactNode;
}

export const AnalyticsProvider = ({ children }: AnalyticsProviderProps): React.JSX.Element => {
  const isEnabled = isAnalyticsEnabled();

  useEffect(() => {
    if (!isEnabled) {
      console.log('Analytics disabled - check configuration');
      return;
    }

    // Check if Umami script is already loaded
    if (window.umami) {
      console.log('Umami analytics already loaded');
      return;
    }

    // Load Umami script
    const script = document.createElement('script');
    script.src = `${analyticsConfig.umami.scriptUrl}/umami.js`;
    script.async = true;
    script.defer = true;
    script.setAttribute('data-website-id', analyticsConfig.umami.websiteId);

    // Add privacy settings
    if (analyticsConfig.privacy.respectDNT) {
      script.setAttribute('data-respect-dnt', 'true');
    }

    if (analyticsConfig.privacy.anonymizeIP) {
      script.setAttribute('data-anonymize-ip', 'true');
    }

    script.onload = () => {
      console.log('Umami analytics loaded successfully');

      // Initialize with custom domain if specified
      if (analyticsConfig.umami.domain && analyticsConfig.umami.domain !== 'localhost') {
        window.umami?.setDomain(analyticsConfig.umami.domain);
      }
    };

    script.onerror = () => {
      console.error('Failed to load Umami analytics script');
    };

    document.head.appendChild(script);

    // Cleanup function
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, [isEnabled]);

  const track = (eventName: string, eventData?: Record<string, string | number | boolean>): void => {
    if (!isEnabled || !window.umami) {
      return;
    }

    try {
      window.umami.track(eventName, eventData);
    } catch (error) {
      console.error('Failed to track event:', error);
    }
  };

  const contextValue: AnalyticsContextType = {
    track,
    isEnabled,
  };

  return <AnalyticsContext.Provider value={contextValue}>{children}</AnalyticsContext.Provider>;
};

// Extend Window interface for Umami
declare global {
  interface Window {
    umami?: {
      track: (eventName: string, eventData?: Record<string, string | number | boolean>) => void;
      setDomain: (domain: string) => void;
    };
  }
}
