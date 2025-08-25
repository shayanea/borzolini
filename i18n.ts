import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => {
  if (!locale) {
    return {
      locale: 'en',
      messages: (await import(`./public/locales/en/common.json`)).default,
    };
  }

  return {
    locale,
    messages: (await import(`./public/locales/${locale}/common.json`)).default,
  };
});
