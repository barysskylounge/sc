# Images Directory

This directory contains all website images organized by category.

## Directory Structure

- `hero/` - Hero section images, banners, and main landing page visuals
- `features/` - Feature illustrations and icons
- `logos/` - Brand logos and partner logos
- `avatars/` - User profile pictures and avatars

## Usage in Next.js

Images in the `public` folder can be referenced directly from the root:

```tsx
// Example usage
<Image 
  src="/images/hero/hero-image.jpg" 
  alt="Hero image"
  width={1200}
  height={600}
/>
```

Or using regular img tags:

```tsx
<img src="/images/features/feature-icon.svg" alt="Feature" />
```

## Best Practices

- Use optimized image formats (WebP, AVIF when possible)
- Keep file sizes reasonable for web performance
- Use descriptive filenames
- Add appropriate alt text for accessibility

