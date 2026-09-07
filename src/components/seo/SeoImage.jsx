import React from 'react';

/**
 * SeoImage - SEO-optimized image component for Core Web Vitals.
 *
 * Features:
 * - Native lazy loading (loading="lazy") for below-the-fold images
 * - Eager loading with fetchpriority="high" for above-the-fold/LCP images
 * - Explicit width/height to prevent CLS (Cumulative Layout Shift)
 * - Descriptive alt text for accessibility and image SEO
 * - Auto-generated srcset for Unsplash images (responsive images)
 * - Decoding="async" for non-blocking image decode
 *
 * @param {string} src - Image URL
 * @param {string} alt - Descriptive alt text (required for SEO/accessibility)
 * @param {number} [width] - Image width in pixels
 * @param {number} [height] - Image height in pixels
 * @param {boolean} [priority] - If true, loads eagerly with high fetchpriority (for LCP images)
 * @param {string} [className] - CSS classes
 * @param {string} [sizes] - Sizes attribute for responsive images (default: '100vw')
 * @param {string} [srcSet] - Override srcset (auto-generated for Unsplash if omitted)
 * @param {Object} [style] - Inline styles
 * @param {string} [loading] - Override loading strategy ('lazy' | 'eager')
 */
export default function SeoImage({
  src,
  alt,
  width,
  height,
  priority = false,
  className = '',
  sizes = '100vw',
  srcSet,
  style,
  loading,
  ...props
}) {
  const loadingStrategy = loading || (priority ? 'eager' : 'lazy');
  const fetchPriority = priority ? 'high' : 'auto';

  // Auto-generate responsive srcset for Unsplash images
  let computedSrcSet = srcSet;
  if (!computedSrcSet && src && src.includes('images.unsplash.com')) {
    const widths = [400, 600, 800, 1000, 1200, 1600];
    computedSrcSet = widths
      .map(w => {
        const url = new URL(src);
        url.searchParams.set('w', String(w));
        // Preserve aspect ratio if height is set via param
        if (url.searchParams.has('h')) {
          const origH = parseInt(url.searchParams.get('h'));
          const origW = parseInt(url.searchParams.get('w') || '1200');
          const ratio = origH / origW;
          url.searchParams.set('h', String(Math.round(w * ratio)));
        }
        return `${url.toString()} ${w}w`;
      })
      .join(', ');
  }

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={loadingStrategy}
      decoding="async"
      fetchpriority={fetchPriority}
      sizes={computedSrcSet ? sizes : undefined}
      srcSet={computedSrcSet}
      className={className}
      style={style}
      {...props}
    />
  );
}