import { Helmet } from 'react-helmet-async';
import { SITE_NAME, SITE_URL } from '@/lib/seoConfig';

/**
 * PageMeta - Comprehensive SEO component with structured data support.
 *
 * Supports JSON-LD schemas: BreadcrumbList (auto), BlogPosting, FAQPage,
 * HowTo, Service, Course, LocalBusiness, and Article.
 *
 * @param {string} title - Page title (without site name suffix)
 * @param {string} description - Meta description
 * @param {string} url - URL path (e.g. '/about')
 * @param {string[]} [keywords] - Meta keywords
 * @param {string} [image] - Open Graph / Twitter image URL
 * @param {boolean} [noIndex] - If true, sets robots noindex
 * @param {Object} [article] - BlogPosting schema: { author, datePublished, image, section, tags }
 * @param {Array} [faq] - FAQ schema: [{ question, answer }]
 * @param {Object} [howTo] - HowTo schema: { name, description, steps: [{ name, text }] }
 * @param {Object} [service] - Service schema: { type, areaServed, provider }
 * @param {Object} [course] - Course schema: { name, provider, description, rating, reviewCount }
 * @param {Object} [localBusiness] - LocalBusiness schema: { name, address, telephone }
 * @param {Object[]} [schemas] - Additional custom JSON-LD schema objects
 * @param {Object} [speakable] - Speakable schema: { cssSelectors: ['h1', '.summary'] }
 */
export default function PageMeta({
  title,
  description,
  url,
  keywords = [],
  image,
  noIndex = false,
  article,
  faq,
  howTo,
  service,
  course,
  localBusiness,
  schemas = [],
  speakable,
}) {
  const fullTitle = `${title} | ${SITE_NAME}`;
  const siteUrl = typeof window !== 'undefined' ? window.location.origin : SITE_URL;
  const fullUrl = `${siteUrl}${url}`;
  const ogImage = image || 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_68fe34ce85471ea8927c980f/01840dc23_1C-logo.png';
  const robotsContent = noIndex
    ? 'noindex, nofollow'
    : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';

  // BreadcrumbList structured data
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: title, item: fullUrl },
    ],
  };

  // BlogPosting structured data
  const articleJsonLd = article
    ? {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: title,
        description,
        image: article.image || ogImage,
        datePublished: article.datePublished,
        dateModified: article.dateModified || article.datePublished,
        author: {
          '@type': 'Person',
          name: article.author || '1C Platform Team',
        },
        publisher: {
          '@type': 'Organization',
          name: SITE_NAME,
          logo: {
            '@type': 'ImageObject',
            url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_68fe34ce85471ea8927c980f/01840dc23_1C-logo.png',
          },
        },
        mainEntityOfPage: fullUrl,
        url: fullUrl,
        ...(article.section ? { articleSection: article.section } : {}),
        ...(article.tags ? { keywords: article.tags.join(', ') } : {}),
      }
    : null;

  // FAQPage structured data
  const faqJsonLd =
    faq && faq.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faq.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: item.answer,
            },
          })),
        }
      : null;

  // HowTo structured data
  const howToJsonLd = howTo
    ? {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: howTo.name || title,
        description: howTo.description || description,
        step: howTo.steps.map((step, idx) => ({
          '@type': 'HowToStep',
          position: idx + 1,
          name: step.name,
          text: step.text,
          url: `${fullUrl}#step-${idx + 1}`,
        })),
      }
    : null;

  // Service structured data
  const serviceJsonLd = service
    ? {
        '@context': 'https://schema.org',
        '@type': 'Service',
        serviceType: service.type || 'AI Platform Service',
        provider: {
          '@type': 'Organization',
          name: SITE_NAME,
        },
        areaServed: service.areaServed || 'Worldwide',
        description,
        url: fullUrl,
        ...(service.provider ? { provider: { '@type': 'Organization', name: service.provider } } : {}),
      }
    : null;

  // Course structured data
  const courseJsonLd = course
    ? {
        '@context': 'https://schema.org',
        '@type': 'Course',
        name: course.name || title,
        description: course.description || description,
        provider: {
          '@type': 'Organization',
          name: course.provider || SITE_NAME,
        },
        url: fullUrl,
        ...(course.rating
          ? {
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: course.rating,
                reviewCount: course.reviewCount || 1,
              },
            }
          : {}),
      }
    : null;

  // LocalBusiness structured data
  const localBusinessJsonLd = localBusiness
    ? {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: localBusiness.name || SITE_NAME,
        description,
        url: fullUrl,
        ...(localBusiness.address
          ? {
              address: {
                '@type': 'PostalAddress',
                streetAddress: localBusiness.address.street || '',
                addressLocality: localBusiness.address.locality || '',
                addressRegion: localBusiness.address.region || '',
                postalCode: localBusiness.address.postalCode || '',
                addressCountry: localBusiness.address.country || 'CA',
              },
            }
          : {}),
        ...(localBusiness.telephone ? { telephone: localBusiness.telephone } : {}),
      }
    : null;

  // Speakable structured data (for voice search optimization)
  const speakableJsonLd = speakable
    ? {
        '@context': 'https://schema.org',
        '@type': 'Speakable',
        url: fullUrl,
        cssSelector: speakable.cssSelectors || ['h1'],
      }
    : null;

  // Collect all JSON-LD schemas
  const allSchemas = [
    breadcrumbJsonLd,
    articleJsonLd,
    faqJsonLd,
    howToJsonLd,
    serviceJsonLd,
    courseJsonLd,
    localBusinessJsonLd,
    speakableJsonLd,
    ...schemas,
  ].filter(Boolean);

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="robots" content={robotsContent} />

      {/* Open Graph */}
      <meta property="og:type" content={article ? 'article' : 'website'} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_US" />
      {article?.author && <meta property="article:author" content={article.author} />}
      {article?.datePublished && <meta property="article:published_time" content={article.datePublished} />}
      {article?.section && <meta property="article:section" content={article.section} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />

      {/* hreflang */}
      <link rel="alternate" href={fullUrl} hrefLang="en" />
      <link rel="alternate" href={fullUrl} hrefLang="x-default" />

      {/* JSON-LD Structured Data */}
      {allSchemas.map((schema, idx) => (
        <script key={idx} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}