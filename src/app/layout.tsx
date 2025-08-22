import './globals.css';

import { Inter } from 'next/font/google';
import type { Metadata } from 'next';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Borzolini - AI-Powered Predictive Healthcare for Pets',
  description: "Transform your pet's healthcare from reactive to predictive with 24/7 AI monitoring and breed-specific insights. Starting with Persian cats like Fariborz! Borzolini is named after our Persian cat pioneer.",
  keywords: ['pet healthcare', 'AI', 'predictive care', 'veterinary', 'Persian cats', 'health monitoring', 'Borzolini', 'Fariborz'],
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://borzolini.com',
    title: 'Borzolini - AI-Powered Predictive Healthcare for Pets',
    description: "Transform your pet's healthcare from reactive to predictive with 24/7 AI monitoring and breed-specific insights. Named after Fariborz, our Persian cat pioneer.",
    siteName: 'Borzolini',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Borzolini - AI-Powered Predictive Healthcare for Pets',
    description: "Transform your pet's healthcare from reactive to predictive with 24/7 AI monitoring and breed-specific insights. Named after Fariborz, our Persian cat pioneer.",
    creator: '@borzolini',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
