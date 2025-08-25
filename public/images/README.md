# Images Directory

## Borzolini Hero Image

Please save the pet image with sunglasses as:
`borzolini-hero.webp`

This image will be used as the background in both the Hero and Borzolini sections of the landing page.

### Image Requirements:

- **Format**: WebP (for better performance and compression)
- **Recommended size**: 800x600px or larger
- **Quality**: 80-90% for optimal balance of size/quality
- **Text overlay**: Should show good contrast for white text overlay

### Current Usage:

The image is referenced in:

- `src/components/sections/hero-section.tsx` (Early Detection Rate banner)
- `src/components/sections/borzolini-section.tsx` (Main background)
- Background image path: `/images/borzolini-hero.webp`

### Converting to WebP:

You can convert your JPG/PNG to WebP using:

- **Online**: Use online converters like CloudConvert or Squoosh
- **Command Line**: `cwebp input.jpg -q 85 -o borzolini-hero.webp`
- **Photoshop**: Export as WebP with 85% quality
