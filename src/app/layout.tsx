import './globals.css';

import { AnalyticsProvider } from '@/components/analytics';
import { Header } from '@/components/sections/header';
import { Manrope } from 'next/font/google';
import type { Metadata } from 'next';

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://borzolini.com'),
  title: 'Borzolini - Smart Pet Healthcare for All Pets',
  description:
    'Get personalized care recommendations, easy vet scheduling, and quality clinic ratings for all your pets. Starting with Borzolini! Borzolini is named after our beloved companion.',
  keywords: [
    'pet healthcare',
    'care recommendations',
    'veterinary',
    'all pets',
    'dogs',
    'pets',
    'appointment scheduling',
    'clinic ratings',
    'Borzolini',
    'Borzolini',
  ],
  authors: [{ name: 'Borzolini' }],
  creator: 'Borzolini',
  publisher: 'Borzolini',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: '/',
  },
  themeColor: '#1d3557',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://borzolini.com',
    title: 'Borzolini - Smart Pet Healthcare for All Pets',
    description:
      'Get personalized care recommendations, easy vet scheduling, and quality clinic ratings for all your pets. Named after Borzolini, our beloved companion.',
    siteName: 'Borzolini',
    images: [
      {
        url: '/images/borzolini-hero.webp',
        width: 1200,
        height: 630,
        alt: 'Borzolini - Smart Pet Healthcare',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Borzolini - Smart Pet Healthcare for All Pets',
    description:
      'Get personalized care recommendations, easy vet scheduling, and quality clinic ratings for all your pets. Named after Borzolini, our beloved companion.',
    creator: '@borzolini',
    images: ['/images/borzolini-hero.webp'],
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.png', type: 'image/png' },
    ],
    apple: '/app-icon.svg',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Borzolini',
    url: 'https://borzolini.com',
    description: 'Smart pet healthcare platform for all pets. Personalized care, vet scheduling, and clinic ratings.',
    publisher: {
      '@type': 'Organization',
      name: 'Borzolini',
      url: 'https://borzolini.com',
    },
  };

  return (
    <html lang='en'>
      <body className={`${manrope.variable} antialiased`} suppressHydrationWarning>
        <AnalyticsProvider>
          <Header />
          {children}
          <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        </AnalyticsProvider>
      </body>
    </html>
  );
}
