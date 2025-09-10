'use client';

import { ReactNode, createContext, useContext, useEffect } from 'react';
import { analyticsConfig, isAnalyticsEnabled } from '@/config/analytics';

import { useLogger } from '@/hooks/use-logger';

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
  const logger = useLogger();

  useEffect(() => {
    if (!isEnabled) {
      logger.info('Analytics disabled - check configuration');
      return;
    }

    // Validate required configuration
    if (!analyticsConfig.umami.websiteId) {
      logger.warn('Umami website ID not configured - analytics disabled');
      return;
    }

    if (!analyticsConfig.umami.scriptUrl) {
      logger.warn('Umami script URL not configured - analytics disabled');
      return;
    }

    // Check if Umami script is already loaded
    if (window.umami) {
      logger.info('Umami analytics already loaded');
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
      logger.info('Umami analytics loaded successfully');

      // Initialize with custom domain if specified
      if (analyticsConfig.umami.domain && analyticsConfig.umami.domain !== 'localhost') {
        window.umami?.setDomain(analyticsConfig.umami.domain);
      }
    };

    script.onerror = (error) => {
      logger.error('Failed to load Umami analytics script:', {
        scriptUrl: script.src,
        websiteId: analyticsConfig.umami.websiteId,
        error: error,
      });
    };

    document.head.appendChild(script);

    // Cleanup function
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, [isEnabled, logger]);

  const track = (eventName: string, eventData?: Record<string, string | number | boolean>): void => {
    if (!isEnabled) {
      logger.debug('Analytics disabled - event not tracked:', eventName);
      return;
    }

    if (!window.umami) {
      logger.warn('Umami not loaded - event not tracked:', eventName);
      return;
    }

    try {
      window.umami.track(eventName, eventData);
      logger.debug('Event tracked successfully:', eventName, eventData);
    } catch (error) {
      logger.error('Failed to track event:', {
        eventName,
        eventData,
        error: error instanceof Error ? error.message : String(error),
      });
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
