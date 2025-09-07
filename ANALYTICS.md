# Analytics Setup for Borzolini

This document explains how to set up and use analytics tracking in your Borzolini project. We provide multiple options to suit different needs and privacy requirements.

## 🎯 **Available Analytics Options**

### 1. **Umami Analytics** (Recommended - Free & Privacy-Focused)

- ✅ **100% free forever** (self-hosted)
- ✅ **Privacy-first** (GDPR compliant)
- ✅ **Lightweight** (doesn't slow down your site)
- ✅ **No data selling** or third-party tracking
- ✅ **Simple dashboard** with essential metrics

### 2. **Google Analytics 4** (Alternative)

- ✅ **Industry standard** with comprehensive features
- ✅ **Free tier** with unlimited data collection
- ✅ **Advanced reporting** and insights
- ❌ **Privacy concerns** and data sharing
- ❌ **Complex setup** and configuration

## 🚀 **Quick Start with Umami (Recommended)**

### Step 1: Start Umami Analytics Server

```bash
# Start Umami with Docker Compose
docker compose -f docker-compose.analytics.yml --profile analytics up -d

# Access Umami dashboard at: http://localhost:3001
```

### Step 2: Create Your First Website

1. Go to http://localhost:3001
2. Click "Add Website"
3. Enter your website details:
   - **Name:** Borzolini
   - **Domain:** localhost (or your actual domain)
   - **URL:** http://localhost:3000
4. Copy the generated **Website ID**

### Step 3: Configure Your App

Create a `.env.local` file:

```env
NEXT_PUBLIC_UMAMI_WEBSITE_ID=your-website-id-here
NEXT_PUBLIC_UMAMI_SCRIPT_URL=http://localhost:3001
NEXT_PUBLIC_WEBSITE_DOMAIN=localhost
```

### Step 4: Add Analytics to Your Layout

```tsx
// src/app/layout.tsx
import { AnalyticsProvider } from '@/components/analytics';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <AnalyticsProvider>{children}</AnalyticsProvider>
      </body>
    </html>
  );
}
```

## 🔧 **Configuration Options**

### Environment Variables

```env
# Umami Analytics
NEXT_PUBLIC_UMAMI_WEBSITE_ID=your-website-id
NEXT_PUBLIC_UMAMI_SCRIPT_URL=http://localhost:3001
NEXT_PUBLIC_WEBSITE_DOMAIN=yourdomain.com

# Google Analytics 4 (if using)
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Privacy Settings
NEXT_PUBLIC_ANALYTICS_REQUIRE_CONSENT=true
NEXT_PUBLIC_ANALYTICS_RESPECT_DNT=true
```

### Analytics Configuration

```tsx
// src/config/analytics.ts
export const analyticsConfig = {
  umami: {
    enabled: process.env.NODE_ENV === 'production',
    websiteId: process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID || '',
    scriptUrl: process.env.NEXT_PUBLIC_UMAMI_SCRIPT_URL || 'http://localhost:3001',
    domain: process.env.NEXT_PUBLIC_WEBSITE_DOMAIN || 'localhost',
  },
  privacy: {
    respectDNT: true,
    anonymizeIP: true,
    requireConsent: false, // Set to true for GDPR compliance
  },
};
```

## 📊 **Usage Examples**

### Basic Page Tracking (Automatic)

The `AnalyticsProvider` automatically tracks page views. No additional code needed!

### Custom Event Tracking

```tsx
import { useUmami } from '@/components/analytics';

function ContactForm() {
  const { track } = useUmami();

  const handleSubmit = (data: FormData) => {
    // Track form submission
    track('contact_form_submitted', {
      form_type: 'contact',
      user_type: 'visitor',
    });

    // Submit form...
  };

  return <form onSubmit={handleSubmit}>{/* Your form fields */}</form>;
}
```

### Button Click Tracking

```tsx
import { useUmami } from '@/components/analytics';

function CTAButton() {
  const { track } = useUmami();

  const handleClick = () => {
    track('cta_button_clicked', {
      button_location: 'hero_section',
      button_text: 'Sing In',
    });
  };

  return <button onClick={handleClick}>Sing In</button>;
}
```

### User Interaction Tracking

```tsx
import { useUmami } from '@/components/analytics';

function ProductCard({ product }: { product: Product }) {
  const { track } = useUmami();

  const handleView = () => {
    track('product_viewed', {
      product_id: product.id,
      product_name: product.name,
      category: product.category,
    });
  };

  const handleAddToCart = () => {
    track('product_added_to_cart', {
      product_id: product.id,
      product_name: product.name,
      price: product.price,
    });
  };

  return (
    <div onMouseEnter={handleView}>
      <h3>{product.name}</h3>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}
```

## 🍪 **GDPR Compliance & Privacy**

### Consent Banner

```tsx
import { ConsentBanner } from '@/components/analytics';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <ConsentBanner
        title='We value your privacy'
        description='This site uses analytics to improve your experience. You can opt out at any time.'
        learnMoreUrl='/privacy-policy'
      />
    </>
  );
}
```

### Manual Consent Management

```tsx
import { useAnalyticsConsent } from '@/components/analytics';

function PrivacySettings() {
  const { consentGiven, giveConsent, revokeConsent } = useAnalyticsConsent();

  return (
    <div>
      <h3>Analytics Consent</h3>
      <p>Current status: {consentGiven ? 'Consent given' : 'No consent'}</p>

      {consentGiven ? (
        <button onClick={revokeConsent}>Revoke Consent</button>
      ) : (
        <button onClick={giveConsent}>Give Consent</button>
      )}
    </div>
  );
}
```

## 🐳 **Docker Deployment**

### Production Deployment

```bash
# Build and run Umami in production
docker compose -f docker-compose.analytics.yml --profile analytics up -d

# Update your .env.production
NEXT_PUBLIC_UMAMI_SCRIPT_URL=https://yourdomain.com:3001
NEXT_PUBLIC_WEBSITE_DOMAIN=yourdomain.com
```

### SSL/HTTPS Setup

```bash
# Generate SSL certificates
mkdir ssl
openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
  -keyout ssl/umami.key -out ssl/umami.crt

# Update nginx.conf for HTTPS
# Uncomment the HTTPS server section
```

## 📈 **What You'll Track**

### Automatic Tracking

- ✅ **Page views** (all routes)
- ✅ **Session duration**
- ✅ **Bounce rate**
- ✅ **Traffic sources**
- ✅ **Device types**
- ✅ **Browser information**
- ✅ **Geographic location** (country level)

### Custom Events (Examples)

- ✅ **Form submissions**
- ✅ **Button clicks**
- ✅ **Product interactions**
- ✅ **User sign-ups**
- ✅ **Feature usage**
- ✅ **Error tracking**

## 🔍 **Dashboard Features**

### Umami Dashboard

- **Real-time visitors**
- **Page performance**
- **Traffic sources**
- **Device breakdown**
- **Geographic data**
- **Custom events**
- **Export capabilities**

### Google Analytics 4 (if using)

- **Advanced demographics**
- **Conversion tracking**
- **E-commerce analytics**
- **User behavior flow**
- **Custom dimensions**
- **Advanced reporting**

## 🚨 **Troubleshooting**

### Common Issues

1. **Analytics not working**

   ```bash
   # Check if Umami is running
   docker ps | grep umami

   # Check logs
   docker-compose -f docker-compose.analytics.yml logs umami
   ```

2. **Website ID not found**
   - Verify the website ID in Umami dashboard
   - Check environment variables
   - Ensure Umami server is accessible

3. **Privacy compliance issues**
   - Enable consent requirement in config
   - Add consent banner to your app
   - Test with different consent states

### Debug Commands

```bash
# Check analytics status
docker compose -f docker-compose.analytics.yml ps

# View real-time logs
docker compose -f docker-compose.analytics.yml logs -f umami

# Restart analytics services
docker compose -f docker-compose.analytics.yml restart

# Check network connectivity
curl http://localhost:3001/umami.js
```

## 📚 **Best Practices**

1. **Start Simple**: Begin with basic page tracking, add custom events later
2. **Respect Privacy**: Always implement consent mechanisms for production
3. **Test Thoroughly**: Verify tracking works in development and production
4. **Monitor Performance**: Ensure analytics don't slow down your site
5. **Regular Backups**: Backup your Umami database regularly
6. **Security Updates**: Keep Docker images updated

## 🆘 **Support & Resources**

- **Umami Documentation**: https://umami.is/docs
- **GitHub Repository**: https://github.com/umami-software/umami
- **Community Support**: GitHub Issues and Discussions

## 🎉 **Next Steps**

1. **Start Umami server** with Docker Compose
2. **Create your website** in Umami dashboard
3. **Configure environment variables**
4. **Add AnalyticsProvider** to your layout
5. **Test tracking** in development
6. **Deploy to production** with proper configuration

Your analytics setup is now ready to provide valuable insights into your users' behavior! 🚀
