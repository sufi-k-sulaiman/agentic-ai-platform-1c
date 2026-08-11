import React from 'react';

/**
 * SeoImage - SEO-optimized image component for Core Web Vitals.
 *
 * Features:
 * - Native lazy loading (loading="lazy") for below-the-fold images
 * - Eager loading with fetchpriority="high" for above-the-fold/LCP images
 * - Explicit width/height to prevent CLS (Cumulative Layout Shift)
 * - Descriptive alt text for accessibility and image SEO
 * - Optional srcset for responsive images
 * - Decoding="async" for non-blocking image decode
 *
 * @param {string} src - Image URL
 * @param {string} alt - Descriptive alt text (required for SEO/accessibility)
 * @param {number} [width] - Image width in pixels
 * @param {number} [height] - Image height in pixels
 * @param {boolean} [priority] - If true, loads eagerly with high fetchpriority (for LCP images)
 * @param {string} [className] - CSS classes
 * @param {string} [sizes] - Sizes attribute for responsive images
 * @param {string} [srcSet] - Srcset for responsive images
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
  sizes,
  srcSet,
  style,
  loading,
  ...props
}) {
  const loadingStrategy = loading || (priority ? 'eager' : 'lazy');
  const fetchPriority = priority ? 'high' : 'auto';

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={loadingStrategy}
      decoding="async"
      fetchpriority={fetchPriority}
      sizes={sizes}
      srcSet={srcSet}
      className={className}
      style={style}
      {...props}
    />
  );
}