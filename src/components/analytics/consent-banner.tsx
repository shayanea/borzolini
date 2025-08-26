'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useAnalyticsConsent } from './analytics-provider';

interface ConsentBannerProps {
  title?: string;
  description?: string;
  acceptText?: string;
  declineText?: string;
  learnMoreText?: string;
  learnMoreUrl?: string;
  className?: string;
}

/**
 * Analytics Consent Banner Component
 *
 * A GDPR-compliant banner that asks users for consent to analytics tracking.
 * Only shows if consent is required and hasn't been given yet.
 */
export const ConsentBanner: React.FC<ConsentBannerProps> = ({
  title = 'We use cookies and analytics to improve your experience',
  description = 'This website uses cookies and analytics to understand how visitors interact with our site. By accepting, you consent to our use of these technologies.',
  acceptText = 'Accept All',
  declineText = 'Decline',
  learnMoreText = 'Learn More',
  learnMoreUrl = '/privacy-policy',
  className = '',
}) => {
  const { consentGiven } = useAnalyticsConsent();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show banner if consent is required and hasn't been given
    if (consentGiven === null) {
      setIsVisible(true);
    }
  }, [consentGiven]);

  // Don't render if consent is already given or declined
  if (consentGiven !== null) {
    return null;
  }

  const isInternal = !!learnMoreUrl && learnMoreUrl.startsWith('/');

  return (
    <>
      {isVisible && (
        <div
          className={`fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50 p-4 ${className}`}
        >
          <div className='max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4'>
            <div className='flex-1'>
              <h3 className='text-sm font-medium text-gray-900 mb-1'>{title}</h3>
              <p className='text-sm text-gray-600 mb-3 sm:mb-0'>
                {description}
                {learnMoreUrl &&
                  (isInternal ? (
                    <Link href={learnMoreUrl} className='text-blue-600 hover:text-blue-800 underline ml-1'>
                      {learnMoreText}
                    </Link>
                  ) : (
                    <a
                      href={learnMoreUrl}
                      className='text-blue-600 hover:text-blue-800 underline ml-1'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      {learnMoreText}
                    </a>
                  ))}
              </p>
            </div>

            <div className='flex flex-col sm:flex-row gap-2 w-full sm:w-auto'>
              <button
                onClick={() => {
                  localStorage.setItem('analytics-consent', 'true');
                  setIsVisible(false);
                  window.location.reload();
                }}
                className='px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors'
              >
                {acceptText}
              </button>

              <button
                onClick={() => {
                  localStorage.setItem('analytics-consent', 'false');
                  setIsVisible(false);
                }}
                className='px-4 py-2 bg-gray-200 text-gray-800 text-sm font-medium rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors'
              >
                {declineText}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
