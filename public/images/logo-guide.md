# Logo Guide

## Current Design

Using a simple purple "B" icon for now. Clean, minimal, works at all sizes.

**Colors:**

- Purple: `#7c3aed`
- White: `#ffffff`
- Text: `#1e293b`

**Font:** Inter (all weights available)

## Variations

1. **Full** - Icon + "Borzolini" text (header, cards)
2. **Icon** - Just the [B] square (favicon, app icon)
3. **Text** - Just "Borzolini" (minimal contexts)

Icon is a rounded square (`border-radius: 8px`) with white "B" centered on purple background.

## Implementation

Component: `/src/components/ui/logo.tsx`

Usage:

```tsx
<Logo variant="full" size="lg" />    // icon + text
<Logo variant="icon" size="md" />    // just the [B]
<Logo variant="text" size="sm" />    // just "Borzolini"
```

Sizes: sm, md, lg, xl

## TODO

Need to generate proper favicon and app icon files:

- `favicon-32x32.png` / `favicon-16x16.png` for browsers
- `app-icon-1024x1024.png` for App Store
- `app-icon-512x512.png` for Google Play
- `app-icon-192x192.png` for PWA

Current icons in `/public` are placeholder Android/Apple icons that should be replaced.

## Future Ideas

Considered these concepts but went with simple "B" for MVP:

- Pet silhouette with medical cross (more personal but too specific)
- Digital paw print (felt gimmicky)
- Circular medical badge (too clinical)

Can revisit after getting user feedback on the current design.
