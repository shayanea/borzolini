'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

interface GoogleAnalyticsProps {
  measurementId: string;
  enabled?: boolean;
}

/**
 * Google Analytics 4 Tracker Component
 * 
 * This component adds Google Analytics 4 tracking to your website.
 * It automatically tracks page views and can be configured for custom events.
 * 
 * @param measurementId - Your GA4 Measurement ID (G-XXXXXXXXXX)
 * @param enabled - Whether to enable tracking (defaults to true)
 */
export const GoogleAnalytics: React.FC<GoogleAnalyticsProps> = ({
  measurementId,
  enabled = true
}) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Only run on client side and if enabled
    if (typeof window === 'undefined' || !enabled) return;

    // Check if GA script is already loaded
    if (window.gtag) {
      return;
    }

    // Create and inject Google Analytics script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script);

    // Initialize gtag
    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).gtag = function gtag() {
      (window as any).dataLayer.push(arguments);
    };

    // Set up GA4
    (window as any).gtag('js', new Date());
    (window as any).gtag('config', measurementId, {
      page_title: document.title,
      page_location: window.location.href,
      anonymize_ip: true,
      send_page_view: false, // We'll handle this manually
    });

    // Cleanup function
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, [measurementId, enabled]);

  // Track page views when route changes
  useEffect(() => {
    if (typeof window === 'undefined' || !enabled || !window.gtag) return;

    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '');
    
    window.gtag('config', measurementId, {
      page_path: url,
      page_title: document.title,
      page_location: window.location.origin + url,
    });
  }, [pathname, searchParams, measurementId, enabled]);

  // This component doesn't render anything visible
  return null;
};

/**
 * Hook for manual Google Analytics tracking
 * Use this for custom event tracking
 */
export const useGoogleAnalytics = () => {
  const track = (
    eventName: string,
    parameters?: Record<string, any>
  ) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, parameters);
    }
  };

  const trackCustom = (
    eventName: string,
    parameters?: Record<string, any>
  ) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, parameters);
    }
  };

  const setUserId = (userId: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        user_id: userId,
      });
    }
  };

  return { track, trackCustom, setUserId };
};

// Extend Window interface for TypeScript
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}
