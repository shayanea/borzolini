# Environment Variables Setup

Create a `.env.local` file in your web directory with the following variables:

```env
# Umami Analytics Configuration
NEXT_PUBLIC_UMAMI_WEBSITE_ID=22dc4639-0c98-4e02-a981-4b58a18de648
NEXT_PUBLIC_UMAMI_SCRIPT_URL=http://localhost:3001
NEXT_PUBLIC_WEBSITE_DOMAIN=localhost

# Privacy Settings
NEXT_PUBLIC_ANALYTICS_REQUIRE_CONSENT=false
NEXT_PUBLIC_ANALYTICS_RESPECT_DNT=true
```

## Steps to set up:

1. Create `.env.local` file in the `web/` directory
2. Copy the above variables into the file
3. Save the file
4. Restart your development server

## For Production:

Update the values for production:

- `NEXT_PUBLIC_UMAMI_SCRIPT_URL`: Your production Umami server URL
- `NEXT_PUBLIC_WEBSITE_DOMAIN`: Your actual domain name
- `NEXT_PUBLIC_ANALYTICS_REQUIRE_CONSENT`: Set to `true` for GDPR compliance
