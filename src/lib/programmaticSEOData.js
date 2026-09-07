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
  'energy-utilities': {
    label: 'Energy & Utilities',
    pageName: 'EnergyUtilities',
    slug: 'energy-utilities',
    serviceTitle: 'AI for Energy & Utilities',
    serviceDescription: 'AI agents for grid management, energy optimization, predictive maintenance, and utility operations.',
    keyBenefits: [
      '25% reduction in energy waste',
      '40% fewer unplanned outages',
      '30% improvement in grid efficiency',
      '50% faster incident response',
    ],
    challenges: [
      'Reactive grid management causing outages',
      'Inefficient load balancing across the grid',
      'Aging infrastructure with predictive maintenance gaps',
      'Complex regulatory compliance and reporting',
    ],
  },
  'sports-entertainment': {
    label: 'Sports & Entertainment',
    pageName: 'SportsEntertainment',
    slug: 'sports-entertainment',
    serviceTitle: 'AI for Sports & Entertainment',
    serviceDescription: 'AI agents for fan engagement, venue operations, ticketing, and entertainment management.',
    keyBenefits: [
      '35% increase in fan engagement',
      '25% improvement in venue operational efficiency',
      '40% reduction in ticketing fraud',
      '30% increase in concession revenue',
    ],
    challenges: [
      'Fragmented fan data across channels',
      'Manual venue operations and crowd management',
      'Inefficient ticketing and pricing strategies',
      'Limited personalization for fan experiences',
    ],
  },
  airports: {
    label: 'Airports',
    pageName: 'Airports',
    slug: 'airports',
    serviceTitle: 'AI for Airports',
    serviceDescription: 'AI agents for gate management, passenger experience, baggage handling, and airport operations.',
    keyBenefits: [
      '30% improvement in gate turnaround time',
      '25% reduction in baggage handling errors',
      '40% faster passenger processing',
      '20% increase in non-aeronautical revenue',
    ],
    challenges: [
      'Manual gate and slot management',
      'Long queues and passenger processing delays',
      'Reactive baggage handling with high error rates',
      'Siloed systems across airport operations',
    ],
  },
  'corporate-campuses': {
    label: 'Corporate Campuses',
    pageName: 'CorporateCampuses',
    slug: 'corporate-campuses',
    serviceTitle: 'AI for Corporate Campuses',
    serviceDescription: 'AI agents for facility management, space optimization, employee experience, and campus operations.',
    keyBenefits: [
      '30% improvement in space utilization',
      '25% reduction in facility operating costs',
      '40% faster maintenance response',
      '35% increase in employee satisfaction',
    ],
    challenges: [
      'Inefficient space utilization and booking',
      'Manual facility maintenance and vendor coordination',
      'Fragmented employee service systems',
      'Limited visibility into campus operations',
    ],
  },
  'public-safety': {
    label: 'Public Safety',
    pageName: 'PublicSafety',
    slug: 'public-safety',
    serviceTitle: 'AI for Public Safety',
    serviceDescription: 'AI agents for emergency response, crime analysis, resource deployment, and public safety operations.',
    keyBenefits: [
      '40% faster emergency response times',
      '30% improvement in resource deployment',
      '50% reduction in false alarm dispatches',
      '25% reduction in crime through predictive analysis',
    ],
    challenges: [
      'Manual dispatch and resource allocation',
      'Siloed data across emergency response systems',
      'Slow analysis of crime patterns and trends',
      'Limited real-time situational awareness',
    ],
  },
  'traffic-management': {
    label: 'Traffic Management',
    pageName: 'Traffic',
    slug: 'traffic-management',
    serviceTitle: 'AI for Traffic Management',
    serviceDescription: 'AI agents for traffic flow optimization, congestion management, signal control, and intelligent transportation.',
    keyBenefits: [
      '25% reduction in traffic congestion',
      '35% improvement in average travel times',
      '40% reduction in traffic incidents',
      '30% improvement in signal efficiency',
    ],
    challenges: [
      'Static traffic signal timing missing real-time demand',
      'Reactive incident response causing delays',
      'Limited multi-modal transportation coordination',
      'Siloed traffic data across jurisdictions',
    ],
  },
  gaming: {
    label: 'Gaming',
    pageName: 'Gaming',
    slug: 'gaming',
    serviceTitle: 'AI for Gaming',
    serviceDescription: 'AI agents for player engagement, game operations, fraud detection, and casino management.',
    keyBenefits: [
      '30% increase in player engagement',
      '40% reduction in fraud losses',
      '25% improvement in player retention',
      '35% increase in operational efficiency',
    ],
    challenges: [
      'Manual player segmentation and personalization',
      'Reactive fraud detection with high false positives',
      'Fragmented player data across platforms',
      'Limited real-time game analytics',
    ],
  },
  cities: {
    label: 'Smart Cities',
    pageName: 'Cities',
    slug: 'cities',
    serviceTitle: 'AI for Smart Cities',
    serviceDescription: 'AI agents for urban planning, citizen services, infrastructure management, and smart city operations.',
    keyBenefits: [
      '30% improvement in citizen service delivery',
      '25% reduction in infrastructure costs',
      '40% faster permit and license processing',
      '35% improvement in resource allocation',
    ],
    challenges: [
      'Siloed data across municipal departments',
      'Manual citizen service processing',
      'Reactive infrastructure maintenance',
      'Limited real-time city operations visibility',
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
  { city: 'Houston', region: 'Texas', country: 'USA', slug: 'houston' },
  { city: 'Dallas', region: 'Texas', country: 'USA', slug: 'dallas' },
  { city: 'Miami', region: 'Florida', country: 'USA', slug: 'miami' },
  { city: 'Atlanta', region: 'Georgia', country: 'USA', slug: 'atlanta' },
  { city: 'Denver', region: 'Colorado', country: 'USA', slug: 'denver' },
  { city: 'San Diego', region: 'California', country: 'USA', slug: 'san-diego' },
  { city: 'Phoenix', region: 'Arizona', country: 'USA', slug: 'phoenix' },
  { city: 'Washington', region: 'District of Columbia', country: 'USA', slug: 'washington-dc' },
  { city: 'Philadelphia', region: 'Pennsylvania', country: 'USA', slug: 'philadelphia' },
  { city: 'Mississauga', region: 'Ontario', country: 'Canada', slug: 'mississauga' },
  { city: 'Halifax', region: 'Nova Scotia', country: 'Canada', slug: 'halifax' },
  { city: 'Winnipeg', region: 'Manitoba', country: 'Canada', slug: 'winnipeg' },
  { city: 'Quebec City', region: 'Quebec', country: 'Canada', slug: 'quebec-city' },
  { city: 'Berlin', region: 'Berlin', country: 'Germany', slug: 'berlin' },
  { city: 'Munich', region: 'Bavaria', country: 'Germany', slug: 'munich' },
  { city: 'Frankfurt', region: 'Hesse', country: 'Germany', slug: 'frankfurt' },
  { city: 'Paris', region: 'Île-de-France', country: 'France', slug: 'paris' },
  { city: 'Amsterdam', region: 'North Holland', country: 'Netherlands', slug: 'amsterdam' },
  { city: 'Stockholm', region: 'Stockholm', country: 'Sweden', slug: 'stockholm' },
  { city: 'Copenhagen', region: 'Capital Region', country: 'Denmark', slug: 'copenhagen' },
  { city: 'Tokyo', region: 'Tokyo', country: 'Japan', slug: 'tokyo' },
  { city: 'Hong Kong', region: 'Hong Kong', country: 'China', slug: 'hong-kong' },
  { city: 'Tel Aviv', region: 'Tel Aviv', country: 'Israel', slug: 'tel-aviv' },
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