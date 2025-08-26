'use client';

import { useEffect } from 'react';

interface UmamiTrackerProps {
  websiteId: string;
  domain?: string;
  scriptUrl?: string;
}

/**
 * Umami Analytics Tracker Component
 * 
 * This component adds Umami analytics tracking to your website.
 * It automatically tracks page views and user interactions.
 * 
 * @param websiteId - Your Umami website ID (found in Umami dashboard)
 * @param domain - Your website domain (optional, defaults to current domain)
 * @param scriptUrl - Custom Umami script URL (optional, defaults to localhost:3001)
 */
export const UmamiTracker: React.FC<UmamiTrackerProps> = ({
  websiteId,
  domain,
  scriptUrl = 'http://localhost:3001'
}) => {
  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;

    // Check if Umami script is already loaded
    if (window.umami) {
      return;
    }

    // Create and inject Umami script
    const script = document.createElement('script');
    script.async = true;
    script.defer = true;
    script.src = `${scriptUrl}/umami.js`;
    script.setAttribute('data-website-id', websiteId);
    
    if (domain) {
      script.setAttribute('data-domains', domain);
    }

    // Add script to document head
    document.head.appendChild(script);

    // Cleanup function
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, [websiteId, domain, scriptUrl]);

  // This component doesn't render anything visible
  return null;
};

/**
 * Hook for manual Umami tracking
 * Use this for custom event tracking
 */
export const useUmami = () => {
  const track = (eventName: string, eventData?: Record<string, any>) => {
    if (typeof window !== 'undefined' && window.umami) {
      window.umami.track(eventName, eventData);
    }
  };

  const trackPageView = (url?: string) => {
    if (typeof window !== 'undefined' && window.umami) {
      window.umami.trackView(url);
    }
  };

  return { track, trackPageView };
};

// Extend Window interface for TypeScript
declare global {
  interface Window {
    umami?: {
      track: (eventName: string, eventData?: Record<string, any>) => void;
      trackView: (url?: string) => void;
    };
  }
}
