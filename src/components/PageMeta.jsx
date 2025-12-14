import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

export default function PageMeta({ title, description, url, keywords = [] }) {
  const fullTitle = `${title} | 1C Platform`;
  const siteUrl = typeof window !== 'undefined' ? window.location.origin : '';
  const fullUrl = `${siteUrl}${url}`;

  useEffect(() => {
    // Log metadata to console
    console.log('📄 Page Metadata:', {
      title: fullTitle,
      description,
      url: fullUrl,
      keywords,
      timestamp: new Date().toISOString()
    });
  }, [fullTitle, description, fullUrl, keywords]);

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content="website" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
    </Helmet>
  );
}