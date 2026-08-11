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
 * @param {Object} [collectionPage] - If true, generates CollectionPage schema
 * @param {Object} [speakable] - Speakable schema: { cssSelectors: ['h1', '.summary'] }
 * @param {Array} [breadcrumbs] - Custom breadcrumb path: [{ name, url }]
 * @param {Object} [prevNext] - Pagination: { prev: { url, title }, next: { url, title } }
 * @param {Object} [video] - VideoObject schema: { name, description, thumbnailUrl, uploadDate, duration }
 * @param {Object} [event] - Event schema: { name, startDate, endDate, location, offers }
 * @param {Object} [jobPosting] - JobPosting schema: { title, description, datePosted, location }
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
  collectionPage = false,
  schemas = [],
  speakable,
  breadcrumbs,
  prevNext,
  video,
  event,
  jobPosting,
}) {
  const fullTitle = `${title} | ${SITE_NAME}`;
  const siteUrl = typeof window !== 'undefined' ? window.location.origin : SITE_URL;
  const fullUrl = `${siteUrl}${url}`;
  const ogImage = image || 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_68fe34ce85471ea8927c980f/01840dc23_1C-logo.png';
  const robotsContent = noIndex
    ? 'noindex, nofollow'
    : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';

  // BreadcrumbList structured data
  const breadcrumbJsonLd = breadcrumbs
    ? {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((item, idx) => ({
          '@type': 'ListItem',
          position: idx + 1,
          name: item.name,
          item: `${siteUrl}${item.url}`,
        })),
      }
    : {
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
        ...(article.wordCount ? { wordCount: article.wordCount } : {}),
        ...(article.timeRequired ? { timeRequired: article.timeRequired } : {}),
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

  // CollectionPage structured data
  const collectionPageJsonLd = collectionPage
    ? {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: title,
        description,
        url: fullUrl,
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

  // VideoObject structured data
  const videoJsonLd = video
    ? {
        '@context': 'https://schema.org',
        '@type': 'VideoObject',
        name: video.name || title,
        description: video.description || description,
        thumbnailUrl: video.thumbnailUrl || [ogImage],
        uploadDate: video.uploadDate,
        ...(video.duration ? { duration: video.duration } : {}),
        url: fullUrl,
      }
    : null;

  // Event structured data
  const eventJsonLd = event
    ? {
        '@context': 'https://schema.org',
        '@type': 'Event',
        name: event.name || title,
        description: event.description || description,
        startDate: event.startDate,
        ...(event.endDate ? { endDate: event.endDate } : {}),
        eventStatus: 'https://schema.org/EventScheduled',
        eventAttendanceMode: event.attendanceMode || 'https://schema.org/OfflineEventAttendanceMode',
        location: event.location
          ? {
              '@type': event.location.type || 'Place',
              name: event.location.name,
              ...(event.location.address
                ? {
                    address: {
                      '@type': 'PostalAddress',
                      ...event.location.address,
                    },
                  }
                : {}),
            }
          : { '@type': 'Place', name: 'Online' },
        ...(event.offers
          ? {
              offers: {
                '@type': 'Offer',
                price: event.offers.price || '0',
                priceCurrency: event.offers.currency || 'USD',
                availability: 'https://schema.org/InStock',
                url: fullUrl,
              },
            }
          : {}),
        url: fullUrl,
      }
    : null;

  // JobPosting structured data
  const jobPostingJsonLd = jobPosting
    ? {
        '@context': 'https://schema.org',
        '@type': 'JobPosting',
        title: jobPosting.title,
        description: jobPosting.description,
        datePosted: jobPosting.datePosted,
        ...(jobPosting.validThrough ? { validThrough: jobPosting.validThrough } : {}),
        hiringOrganization: {
          '@type': 'Organization',
          name: SITE_NAME,
        },
        jobLocation: jobPosting.location
          ? {
              '@type': 'Place',
              address: {
                '@type': 'PostalAddress',
                ...jobPosting.location,
              },
            }
          : {
              '@type': 'Place',
              address: { '@type': 'PostalAddress', addressCountry: 'CA' },
            },
        ...(jobPosting.employmentType
          ? { employmentType: jobPosting.employmentType }
          : { employmentType: 'FULL_TIME' }),
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
    collectionPageJsonLd,
    speakableJsonLd,
    videoJsonLd,
    eventJsonLd,
    jobPostingJsonLd,
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
      <meta property="og:image:alt" content={image ? title : '1C Platform - Agentic AI for Enterprise'} />
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

      {/* Pagination prev/next */}
      {prevNext?.prev && <link rel="prev" href={`${siteUrl}${prevNext.prev.url}`} />}
      {prevNext?.next && <link rel="next" href={`${siteUrl}${prevNext.next.url}`} />}

      {/* JSON-LD Structured Data */}
      {allSchemas.map((schema, idx) => (
        <script key={idx} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}