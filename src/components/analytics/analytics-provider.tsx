'use client';

import { useEffect, useState } from 'react';
import { analyticsConfig } from '@/config/analytics';
import { UmamiTracker } from './umami-tracker';
import { GoogleAnalytics } from './google-analytics';

interface AnalyticsProviderProps {
  children: React.ReactNode;
}

/**
 * Analytics Provider Component
 * 
 * This component manages analytics tracking based on configuration and user preferences.
 * It automatically handles privacy settings and enables/disables tracking accordingly.
 */
export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  const [consentGiven, setConsentGiven] = useState<boolean | null>(null);
  const [dntEnabled, setDntEnabled] = useState<boolean>(false);

  useEffect(() => {
    // Check if user has given consent (stored in localStorage)
    const storedConsent = localStorage.getItem('analytics-consent');
    if (storedConsent !== null) {
      setConsentGiven(storedConsent === 'true');
    }

    // Check Do Not Track header
    const dnt = navigator.doNotTrack || (window as any).doNotTrack;
    setDntEnabled(dnt === '1' || dnt === 'yes');
  }, []);

  // Determine if analytics should be enabled
  const shouldEnableAnalytics = () => {
    // Check if analytics is globally enabled
    if (!analyticsConfig.umami.enabled && !analyticsConfig.googleAnalytics.enabled) {
      return false;
    }

    // Check Do Not Track if enabled in config
    if (analyticsConfig.privacy.respectDNT && dntEnabled) {
      return false;
    }

    // Check consent requirement
    if (analyticsConfig.privacy.requireConsent && consentGiven === false) {
      return false;
    }

    // If no consent required or consent given, enable analytics
    return !analyticsConfig.privacy.requireConsent || consentGiven === true;
  };

  const isEnabled = shouldEnableAnalytics();

  return (
    <>
      {children}
      
      {/* Analytics Components - only render if enabled */}
      {isEnabled && (
        <>
          {/* Umami Analytics */}
          {analyticsConfig.umami.enabled && (
            <UmamiTracker
              websiteId={analyticsConfig.umami.websiteId}
              domain={analyticsConfig.umami.domain}
              scriptUrl={analyticsConfig.umami.scriptUrl}
            />
          )}

          {/* Google Analytics 4 */}
          {analyticsConfig.googleAnalytics.enabled && analyticsConfig.googleAnalytics.measurementId && (
            <GoogleAnalytics
              measurementId={analyticsConfig.googleAnalytics.measurementId}
              enabled={isEnabled}
            />
          )}
        </>
      )}
    </>
  );
};

/**
 * Hook to manage analytics consent
 */
export const useAnalyticsConsent = () => {
  const [consentGiven, setConsentGiven] = useState<boolean | null>(null);

  useEffect(() => {
    const storedConsent = localStorage.getItem('analytics-consent');
    if (storedConsent !== null) {
      setConsentGiven(storedConsent === 'true');
    }
  }, []);

  const giveConsent = () => {
    localStorage.setItem('analytics-consent', 'true');
    setConsentGiven(true);
    // Reload page to enable analytics
    window.location.reload();
  };

  const revokeConsent = () => {
    localStorage.setItem('analytics-consent', 'false');
    setConsentGiven(false);
    // Reload page to disable analytics
    window.location.reload();
  };

  return {
    consentGiven,
    giveConsent,
    revokeConsent,
  };
};
