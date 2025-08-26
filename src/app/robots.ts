import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://borzolini.com';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/static/', '/_next/image'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
