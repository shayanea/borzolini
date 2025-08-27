'use client';

import { useAnalyticsTracking } from './use-analytics';

/**
 * Example component showing how to use analytics tracking
 * This is for demonstration purposes - you can remove it after understanding the usage
 */
export const AnalyticsExample = (): React.JSX.Element => {
  const { isEnabled, trackButtonClick, trackFormSubmission, trackUserInteraction, trackCustomEvent } =
    useAnalyticsTracking();

  const handleButtonClick = () => {
    trackButtonClick('example_button', {
      button_location: 'demo_section',
      button_text: 'Click me!',
    });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackFormSubmission('example_form', {
      form_type: 'demo',
      user_type: 'visitor',
    });
  };

  const handleInteraction = () => {
    trackUserInteraction('hover', {
      element: 'demo_card',
      duration: '2s',
    });
  };

  const handleCustomEvent = () => {
    trackCustomEvent('demo_custom_event', {
      category: 'example',
      value: 42,
      timestamp: new Date().toISOString(),
    });
  };

  if (!isEnabled) {
    return (
      <div className='p-4 bg-yellow-100 border border-yellow-300 rounded-lg'>
        <p className='text-yellow-800'>Analytics is disabled. Check your configuration and environment variables.</p>
      </div>
    );
  }

  return (
    <div className='p-6 bg-blue-50 border border-blue-200 rounded-lg space-y-4'>
      <h3 className='text-lg font-semibold text-blue-900'>Analytics Demo</h3>
      <p className='text-blue-700'>
        This component demonstrates how to use analytics tracking. Check your Umami dashboard to see the events.
      </p>

      <div className='space-y-3'>
        <button
          onClick={handleButtonClick}
          className='px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors'
        >
          Track Button Click
        </button>

        <form onSubmit={handleFormSubmit} className='space-y-2'>
          <input
            type='text'
            placeholder='Enter some text'
            className='px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
          <button
            type='submit'
            className='px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors'
          >
            Track Form Submission
          </button>
        </form>

        <div
          onMouseEnter={handleInteraction}
          className='p-4 bg-gray-100 border border-gray-300 rounded cursor-pointer hover:bg-gray-200 transition-colors'
        >
          Hover over me to track interaction
        </div>

        <button
          onClick={handleCustomEvent}
          className='px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors'
        >
          Track Custom Event
        </button>
      </div>

      <div className='text-sm text-blue-600'>
        <p>✅ Analytics Status: Enabled</p>
        <p>📊 Check your Umami dashboard at http://localhost:3001</p>
      </div>
    </div>
  );
};
