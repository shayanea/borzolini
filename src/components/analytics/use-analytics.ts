import { useAnalytics } from './analytics-provider';

/**
 * Custom hook for analytics tracking
 * Provides easy access to track events and check analytics status
 */
export const useAnalyticsTracking = () => {
  const { track, isEnabled } = useAnalytics();

  /**
   * Track page view (automatically called by AnalyticsProvider)
   */
  const trackPageView = (pageName: string, pageData?: Record<string, string | number | boolean>) => {
    track('page_view', {
      page_name: pageName,
      ...pageData,
    });
  };

  /**
   * Track button clicks
   */
  const trackButtonClick = (buttonName: string, buttonData?: Record<string, string | number | boolean>) => {
    track('button_click', {
      button_name: buttonName,
      ...buttonData,
    });
  };

  /**
   * Track form submissions
   */
  const trackFormSubmission = (formName: string, formData?: Record<string, string | number | boolean>) => {
    track('form_submission', {
      form_name: formName,
      ...formData,
    });
  };

  /**
   * Track user interactions
   */
  const trackUserInteraction = (
    interactionType: string,
    interactionData?: Record<string, string | number | boolean>
  ) => {
    track('user_interaction', {
      interaction_type: interactionType,
      ...interactionData,
    });
  };

  /**
   * Track custom events
   */
  const trackCustomEvent = (eventName: string, eventData?: Record<string, string | number | boolean>) => {
    track(eventName, eventData);
  };

  return {
    // Status
    isEnabled,

    // Tracking functions
    track,
    trackPageView,
    trackButtonClick,
    trackFormSubmission,
    trackUserInteraction,
    trackCustomEvent,
  };
};
