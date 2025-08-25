import { NextRequest, NextResponse } from 'next/server';

const locales = ['en', 'fr', 'fa', 'ar'];
const defaultLocale = 'en';

export function middleware(request: NextRequest) {
  console.log('🔍 MIDDLEWARE DEBUG: Middleware called');
  console.log('🔍 MIDDLEWARE DEBUG: URL:', request.url);
  console.log('🔍 MIDDLEWARE DEBUG: Pathname:', request.nextUrl.pathname);

  // Get the pathname from the request
  const pathname = request.nextUrl.pathname;

  // Check if the pathname already has a locale
  const pathnameHasLocale = locales.some((locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`);

  console.log('🔍 MIDDLEWARE DEBUG: Pathname has locale:', pathnameHasLocale);

  if (pathnameHasLocale) {
    console.log('🔍 MIDDLEWARE DEBUG: Pathname already has locale, continuing');
    return NextResponse.next();
  }

  // Redirect to default locale if no locale is present
  if (pathname === '/') {
    console.log('🔍 MIDDLEWARE DEBUG: Redirecting / to /en');
    return NextResponse.redirect(new URL(`/${defaultLocale}`, request.url));
  }

  console.log('🔍 MIDDLEWARE DEBUG: No redirect needed, continuing');
  return NextResponse.next();
}

export const config = {
  // Match all routes except static files and API routes
  matcher: ['/((?!api|_next|_vercel|favicon|.*\\..*).*)', '/'],
};
