import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'fr', 'fa', 'ar'],

  // Used when no locale matches
  defaultLocale: 'en',

  // Always show the locale prefix
  localePrefix: 'always',

  // Domains can be configured to support different locales
  // domains: [
  //   {
  //     domain: 'example.com',
  //     defaultLocale: 'en'
  //   },
  //   {
  //     domain: 'example.fr',
  //     defaultLocale: 'fr'
  //   }
  // ]
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(fr|en|fa|ar)/:path*'],
};
