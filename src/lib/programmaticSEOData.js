/**
 * Programmatic SEO Data Registry
 *
 * Data for generating programmatic SEO pages that combine a service
 * (industry vertical) with a location (city/region). These pages target
 * local search queries like "AI for healthcare in Toronto" and capture
 * long-tail local search traffic.
 *
 * Usage: The ProgrammaticSEO page reads :industry and :location from
 * URL params and looks up data here to render optimized content.
 */

export const programmaticIndustries = {
  healthcare: {
    label: 'Healthcare',
    pageName: 'Healthcare',
    slug: 'healthcare',
    serviceTitle: 'AI for Healthcare',
    serviceDescription: 'AI agents for clinical operations, patient management, medical billing, and HIPAA-compliant healthcare automation.',
    keyBenefits: [
      '50% reduction in documentation time through AI-generated clinical notes',
      '45% fewer no-shows via automated scheduling and reminders',
      '95% first-pass claim approval rates through automated coding',
      '40% reduction in medical errors with unified patient data',
    ],
    challenges: [
      'Administrative burden consuming 70% of clinical staff time',
      'Fragmented patient data across multiple EMR systems',
      'Manual workflows for scheduling, refills, and follow-ups',
      'HIPAA compliance risks with $10.9M average breach cost',
    ],
  },
  'financial-institutions': {
    label: 'Financial Institutions',
    pageName: 'FinancialInstitutions',
    slug: 'financial-institutions',
    serviceTitle: 'AI for Financial Institutions',
    serviceDescription: 'AI agents for fraud detection, banking compliance, loan origination, and financial services automation.',
    keyBenefits: [
      '60% reduction in fraud losses with real-time detection',
      '3x faster loan origination through automated processing',
      '60% reduction in compliance reporting time',
      '25% improvement in customer satisfaction',
    ],
    challenges: [
      'Manual KYC/AML checks taking 2-3 days per customer',
      '95% false-positive rate on suspicious activity alerts',
      'Complex regulatory reporting for Basel III, Dodd-Frank',
      'Fragmented data across core banking systems',
    ],
  },
  retail: {
    label: 'Retail',
    pageName: 'Retail',
    slug: 'retail',
    serviceTitle: 'AI for Retail',
    serviceDescription: 'AI agents for inventory management, customer experience, dynamic pricing, and omnichannel retail operations.',
    keyBenefits: [
      '35% reduction in stockouts with AI demand forecasting',
      '25% reduction in overstock through optimized inventory',
      '20-30% increase in conversion rates with personalization',
      '40% reduction in customer service costs',
    ],
    challenges: [
      'Inventory waste and markdowns from poor demand prediction',
      'Fragmented customer data across online and in-store channels',
      'Manual pricing updates missing market opportunities',
      'High customer service costs with slow response times',
    ],
  },
  education: {
    label: 'Education',
    pageName: 'Education',
    slug: 'education',
    serviceTitle: 'AI for Education',
    serviceDescription: 'AI agents for student success, learning management, administrative automation, and FERPA-compliant educational operations.',
    keyBenefits: [
      '30% improvement in student retention rates',
      '40% reduction in advisor workload through automation',
      '50% reduction in administrative processing time',
      '45% increase in student engagement with personalization',
    ],
    challenges: [
      'One-size-fits-all teaching with declining engagement',
      'Manual grading, scheduling, and enrollment overwhelming staff',
      'At-risk students identified too late for intervention',
      'FERPA compliance challenges with scattered student data',
    ],
  },
  'property-management': {
    label: 'Property Management',
    pageName: 'PropertyManagement',
    slug: 'property-management',
    serviceTitle: 'AI for Property Management',
    serviceDescription: 'AI agents for tenant services, maintenance coordination, lease management, and real estate operations.',
    keyBenefits: [
      '50% reduction in administrative workload',
      '35% faster maintenance request resolution',
      '20% improvement in tenant satisfaction',
      '40% reduction in time-to-occupy',
    ],
    challenges: [
      'Manual tenant communications and service requests',
      'Slow maintenance coordination and vendor management',
      'Inefficient lease renewal processes',
      'Scattered data across properties and systems',
    ],
  },
  'data-centers': {
    label: 'Data Centers',
    pageName: 'DataCenters',
    slug: 'data-centers',
    serviceTitle: 'AI for Data Centers',
    serviceDescription: 'AI agents for infrastructure monitoring, predictive maintenance, energy optimization, and data center operations.',
    keyBenefits: [
      '30% reduction in energy costs',
      '50% faster incident resolution',
      '40% fewer unplanned outages',
      '20% extended asset lifecycles',
    ],
    challenges: [
      'Reactive maintenance causing unplanned downtime',
      'Inefficient cooling and power usage',
      'Complex multi-vendor infrastructure monitoring',
      'Slow incident response and root cause analysis',
    ],
  },
  government: {
    label: 'Government',
    pageName: 'GovernmentAgencies',
    slug: 'government',
    serviceTitle: 'AI for Government',
    serviceDescription: 'AI agents for citizen services, permit processing, compliance monitoring, and multi-agency coordination.',
    keyBenefits: [
      '50% reduction in processing times',
      '40% reduction in administrative costs',
      '30% improvement in citizen satisfaction',
      '60% reduction in citizen wait times',
    ],
    challenges: [
      'Manual permit and license processing',
      'Siloed data across agencies',
      'Slow citizen service response times',
      'Complex compliance and security requirements',
    ],
  },
  transit: {
    label: 'Transit',
    pageName: 'Transit',
    slug: 'transit',
    serviceTitle: 'AI for Transit',
    serviceDescription: 'AI agents for route optimization, fleet management, passenger experience, and public transportation operations.',
    keyBenefits: [
      '20% reduction in operating costs',
      '30% improvement in on-time performance',
      '25% increase in ridership',
      '40% reduction in vehicle breakdowns',
    ],
    challenges: [
      'Static schedules not matching real-time demand',
      'Reactive vehicle maintenance causing breakdowns',
      'Poor real-time passenger information',
      'Inefficient route planning and scheduling',
    ],
  },
};

export const programmaticLocations = [
  { city: 'Toronto', region: 'Ontario', country: 'Canada', slug: 'toronto' },
  { city: 'Vancouver', region: 'British Columbia', country: 'Canada', slug: 'vancouver' },
  { city: 'Montreal', region: 'Quebec', country: 'Canada', slug: 'montreal' },
  { city: 'Calgary', region: 'Alberta', country: 'Canada', slug: 'calgary' },
  { city: 'Ottawa', region: 'Ontario', country: 'Canada', slug: 'ottawa' },
  { city: 'Edmonton', region: 'Alberta', country: 'Canada', slug: 'edmonton' },
  { city: 'New York', region: 'New York', country: 'USA', slug: 'new-york' },
  { city: 'San Francisco', region: 'California', country: 'USA', slug: 'san-francisco' },
  { city: 'Los Angeles', region: 'California', country: 'USA', slug: 'los-angeles' },
  { city: 'Chicago', region: 'Illinois', country: 'USA', slug: 'chicago' },
  { city: 'Boston', region: 'Massachusetts', country: 'USA', slug: 'boston' },
  { city: 'Seattle', region: 'Washington', country: 'USA', slug: 'seattle' },
  { city: 'Austin', region: 'Texas', country: 'USA', slug: 'austin' },
  { city: 'London', region: 'England', country: 'UK', slug: 'london' },
  { city: 'Manchester', region: 'England', country: 'UK', slug: 'manchester' },
  { city: 'Dublin', region: 'Leinster', country: 'Ireland', slug: 'dublin' },
  { city: 'Sydney', region: 'New South Wales', country: 'Australia', slug: 'sydney' },
  { city: 'Melbourne', region: 'Victoria', country: 'Australia', slug: 'melbourne' },
  { city: 'Singapore', region: 'Singapore', country: 'Singapore', slug: 'singapore' },
  { city: 'Dubai', region: 'Dubai', country: 'UAE', slug: 'dubai' },
];

/**
 * Get industry data by slug
 */
export function getProgrammaticIndustry(slug) {
  return programmaticIndustries[slug] || null;
}

/**
 * Get location data by slug
 */
export function getProgrammaticLocation(slug) {
  return programmaticLocations.find((l) => l.slug === slug) || null;
}

/**
 * Generate all programmatic SEO URL combinations
 * (for sitemap generation)
 */
export function getAllProgrammaticUrls() {
  const urls = [];
  for (const industry of Object.values(programmaticIndustries)) {
    for (const location of programmaticLocations) {
      urls.push(`/ai-for/${industry.slug}/in/${location.slug}`);
    }
  }
  return urls;
}