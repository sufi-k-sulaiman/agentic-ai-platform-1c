/**
 * Central SEO Configuration & Interlinking Registry
 * 
 * This registry maps every page to its SEO metadata and keywords.
 * The InternalLinker component uses this to auto-link keywords in content
 * to the relevant pages across the site.
 */

export const SITE_URL = 'https://1cplatform.com';
export const SITE_NAME = '1C Platform';
export const SITE_DESCRIPTION = 'Agentic AI platform delivering autonomous AI agents, ERP, CRM, and intelligent automation for 500+ enterprises.';

/**
 * @typedef {Object} SeoPage
 * @property {string} pageName - The page key in pages.config PAGES object
 * @property {string} title - SEO title (without " | 1C Platform" suffix)
 * @property {string} description - Meta description
 * @property {string} url - URL path
 * @property {string} category - Page category for related content grouping
 * @property {string[]} keywords - Keywords for auto-linking and meta tags
 */
export const seoPages = {
  Home: {
    pageName: 'Home',
    title: 'Agentic AI for Enterprise',
    description: 'Transform your business with Agentic AI. Autonomous AI agents that think, decide, and act. 500+ enterprises trust our platform.',
    url: '/',
    category: 'main',
    keywords: ['agentic AI', 'AI platform', 'autonomous AI', 'enterprise AI', '1C Platform']
  },
  AgenticAI: {
    pageName: 'AgenticAI',
    title: 'Agentic AI Platform',
    description: 'Deploy autonomous AI agents that handle complex multi-step workflows. Multi-agent orchestration, no-code development, and enterprise integration.',
    url: '/AgenticAI',
    category: 'product',
    keywords: ['agentic AI', 'autonomous agents', 'multi-agent systems', 'AI orchestration', 'cognitive reasoning']
  },
  EnterpriseSuite: {
    pageName: 'EnterpriseSuite',
    title: 'Enterprise Suite - AI-Powered ERP & CRM',
    description: 'Unified enterprise operating system with ERP, CRM, financial management, HR/payroll, supply chain, and business intelligence.',
    url: '/EnterpriseSuite',
    category: 'product',
    keywords: ['enterprise suite', 'ERP', 'CRM', 'financial management', 'supply chain', 'business intelligence', 'HR payroll']
  },
  CloudPlatform: {
    pageName: 'CloudPlatform',
    title: 'Cloud Platform',
    description: 'Scalable cloud infrastructure for enterprise AI deployment. Multi-region, auto-scaling, and enterprise-grade security.',
    url: '/CloudPlatform',
    category: 'product',
    keywords: ['cloud platform', 'cloud infrastructure', 'auto-scaling', 'multi-region', 'enterprise cloud']
  },
  DeveloperTools: {
    pageName: 'DeveloperTools',
    title: 'Developer Tools & SDK',
    description: 'Build custom AI agents with our comprehensive SDK, CLI tools, and developer APIs. Full documentation and code examples.',
    url: '/DeveloperTools',
    category: 'product',
    keywords: ['developer tools', 'SDK', 'API', 'CLI tools', 'developer platform']
  },
  Pricing: {
    pageName: 'Pricing',
    title: 'Pricing & Plans',
    description: 'Transparent pricing for every team size. From startup to enterprise, find the plan that fits your AI transformation journey.',
    url: '/Pricing',
    category: 'main',
    keywords: ['pricing', 'plans', 'enterprise pricing', 'subscription']
  },
  SavingsCalculator: {
    pageName: 'SavingsCalculator',
    title: 'ROI & Savings Calculator',
    description: 'Calculate your ROI and savings from implementing Agentic AI automation. See productivity gains and cost reduction.',
    url: '/SavingsCalculator',
    category: 'product',
    keywords: ['ROI calculator', 'savings calculator', 'cost reduction', 'productivity gains', 'AI ROI']
  },
  Documentation: {
    pageName: 'Documentation',
    title: 'Documentation',
    description: 'Complete documentation for building, deploying, and managing AI agents. Installation guides, tutorials, and best practices.',
    url: '/Documentation',
    category: 'resources',
    keywords: ['documentation', 'installation guide', 'tutorials', 'API reference', 'best practices']
  },
  APIReference: {
    pageName: 'APIReference',
    title: 'API Reference',
    description: 'Full API reference for the 1C Platform. Endpoints, authentication, and code examples in multiple languages.',
    url: '/APIReference',
    category: 'resources',
    keywords: ['API reference', 'API endpoints', 'authentication', 'REST API']
  },
  Blog: {
    pageName: 'Blog',
    title: 'Blog - AI Insights & Articles',
    description: 'In-depth articles on agentic AI, generative AI, AI governance, architecture, design, and enterprise adoption.',
    url: '/Blog',
    category: 'resources',
    keywords: ['AI blog', 'agentic AI articles', 'generative AI', 'AI governance', 'AI architecture', 'AI design patterns']
  },
  Community: {
    pageName: 'Community',
    title: 'Community',
    description: 'Join our active community of AI developers, share projects, and get support from peers and experts.',
    url: '/Community',
    category: 'resources',
    keywords: ['community', 'AI developers', 'forums', 'open source']
  },
  Events: {
    pageName: 'Events',
    title: 'Events & Webinars',
    description: 'Upcoming conferences, workshops, webinars, and hackathons for the AI community.',
    url: '/Events',
    category: 'resources',
    keywords: ['events', 'webinars', 'conferences', 'workshops', 'hackathons']
  },
  HelpCenter: {
    pageName: 'HelpCenter',
    title: 'Help Center',
    description: 'Find answers to common questions, troubleshooting guides, and technical support resources.',
    url: '/HelpCenter',
    category: 'support',
    keywords: ['help center', 'support', 'troubleshooting', 'FAQ', 'technical support']
  },
  Status: {
    pageName: 'Status',
    title: 'System Status',
    description: 'Real-time status of all 1C Platform services, APIs, and infrastructure components.',
    url: '/Status',
    category: 'support',
    keywords: ['system status', 'uptime', 'service status', 'incident updates']
  },
  Cyber: {
    pageName: 'Cyber',
    title: 'Cybersecurity Solutions',
    description: 'AI-powered cybersecurity, threat detection, and compliance automation for enterprise protection.',
    url: '/Cyber',
    category: 'product',
    keywords: ['cybersecurity', 'threat detection', 'compliance automation', 'enterprise security', 'AI security']
  },
  AboutUs: {
    pageName: 'AboutUs',
    title: 'About Us',
    description: 'Learn about 1C Platform, our mission, values, and the team building the future of enterprise AI.',
    url: '/AboutUs',
    category: 'company',
    keywords: ['about us', 'company', 'mission', 'values', 'team']
  },
  Careers: {
    pageName: 'Careers',
    title: 'Careers',
    description: 'Join our team. Explore open positions in engineering, sales, design, and leadership.',
    url: '/Careers',
    category: 'company',
    keywords: ['careers', 'jobs', 'career', 'open positions', 'hiring']
  },
  Leadership: {
    pageName: 'Leadership',
    title: 'Leadership Team',
    description: 'Meet the executives and board of directors driving 1C Platform forward.',
    url: '/Leadership',
    category: 'company',
    keywords: ['leadership', 'executive team', 'board of directors', 'management']
  },
  InvestorRelations: {
    pageName: 'InvestorRelations',
    title: 'Investor Relations',
    description: 'Financial information, investor updates, and company performance metrics for stakeholders.',
    url: '/InvestorRelations',
    category: 'company',
    keywords: ['investor relations', 'investors', 'financials', 'company performance']
  },
  Newsroom: {
    pageName: 'Newsroom',
    title: 'Newsroom',
    description: 'Latest news, press releases, and announcements from 1C Platform.',
    url: '/Newsroom',
    category: 'company',
    keywords: ['newsroom', 'press releases', 'news', 'announcements']
  },
  Contact: {
    pageName: 'Contact',
    title: 'Contact Us',
    description: 'Get in touch with our team. Submit a ticket, schedule a call, or send a message.',
    url: '/Contact',
    category: 'company',
    keywords: ['contact', 'contact us', 'support ticket', 'schedule a call']
  },
  Courses: {
    pageName: 'Courses',
    title: 'Courses & Learning',
    description: 'Learn AI development skills through structured courses, learning tracks, and certifications.',
    url: '/Courses',
    category: 'resources',
    keywords: ['courses', 'learning', 'training', 'AI education', 'learning tracks']
  },
  ProfessionalCertifications: {
    pageName: 'ProfessionalCertifications',
    title: 'Professional Certifications',
    description: 'Earn industry-recognized certifications in AI development, architecture, and governance.',
    url: '/ProfessionalCertifications',
    category: 'resources',
    keywords: ['certifications', 'professional certification', 'AI certification', 'accreditation']
  },
  // Industry verticals
  PropertyManagement: { pageName: 'PropertyManagement', title: 'Property Management AI', description: 'AI solutions for property management, tenant services, and real estate operations.', url: '/PropertyManagement', category: 'industry', keywords: ['property management', 'real estate', 'tenant services'] },
  DataCenters: { pageName: 'DataCenters', title: 'Data Center AI', description: 'AI-powered data center management, monitoring, and optimization.', url: '/DataCenters', category: 'industry', keywords: ['data centers', 'data center', 'infrastructure monitoring'] },
  FinancialInstitutions: { pageName: 'FinancialInstitutions', title: 'Financial Institutions AI', description: 'AI for banking, lending, fraud detection, and financial compliance.', url: '/FinancialInstitutions', category: 'industry', keywords: ['financial institutions', 'banking', 'fraud detection', 'fintech'] },
  CorporateCampuses: { pageName: 'CorporateCampuses', title: 'Corporate Campus AI', description: 'AI for facility management, employee services, and corporate operations.', url: '/CorporateCampuses', category: 'industry', keywords: ['corporate campuses', 'facility management', 'employee services'] },
  Healthcare: { pageName: 'Healthcare', title: 'Healthcare AI', description: 'AI for clinical operations, patient management, and healthcare compliance.', url: '/Healthcare', category: 'industry', keywords: ['healthcare AI', 'clinical operations', 'patient management', 'HIPAA'] },
  Transit: { pageName: 'Transit', title: 'Transit AI', description: 'AI for traffic management, route optimization, and public transportation.', url: '/Transit', category: 'industry', keywords: ['transit', 'traffic management', 'route optimization', 'public transportation'] },
  GovernmentAgencies: { pageName: 'GovernmentAgencies', title: 'Government AI', description: 'AI for public services, citizen engagement, and government operations.', url: '/GovernmentAgencies', category: 'industry', keywords: ['government agencies', 'public services', 'citizen engagement', 'government operations'] },
  EnergyUtilities: { pageName: 'EnergyUtilities', title: 'Energy & Utilities AI', description: 'AI for energy grid management, utility billing, and field operations.', url: '/EnergyUtilities', category: 'industry', keywords: ['energy utilities', 'grid management', 'utility billing', 'field operations'] },
  SportsEntertainment: { pageName: 'SportsEntertainment', title: 'Sports & Entertainment AI', description: 'AI for content moderation, audience analytics, and event management.', url: '/SportsEntertainment', category: 'industry', keywords: ['sports entertainment', 'content moderation', 'audience analytics'] },
  Gaming: { pageName: 'Gaming', title: 'Gaming AI', description: 'AI for game operations, player behavior, and in-game intelligence.', url: '/Gaming', category: 'industry', keywords: ['gaming AI', 'player behavior', 'game operations'] },
  PublicSafety: { pageName: 'PublicSafety', title: 'Public Safety AI', description: 'AI for surveillance, incident response, and public security operations.', url: '/PublicSafety', category: 'industry', keywords: ['public safety', 'surveillance', 'incident response', 'security operations'] },
  Cities: { pageName: 'Cities', title: 'Smart Cities AI', description: 'AI for urban management, smart infrastructure, and city operations.', url: '/Cities', category: 'industry', keywords: ['smart cities', 'urban management', 'smart infrastructure', 'city operations'] },
  Airports: { pageName: 'Airports', title: 'Airport AI', description: 'AI for airport operations, flight scheduling, and passenger services.', url: '/Airports', category: 'industry', keywords: ['airports', 'flight scheduling', 'passenger services', 'airport operations'] },
  Retail: { pageName: 'Retail', title: 'Retail AI', description: 'AI for inventory, customer experience, and retail operations.', url: '/Retail', category: 'industry', keywords: ['retail AI', 'inventory management', 'customer experience', 'retail operations'] },
  Education: { pageName: 'Education', title: 'Education AI', description: 'AI for learning management, student services, and educational operations.', url: '/Education', category: 'industry', keywords: ['education AI', 'learning management', 'student services', 'educational operations'] },
};

/**
 * Get SEO config for a page by its pageName key
 */
export function getSeoPage(pageName) {
  return seoPages[pageName] || null;
}

/**
 * Get related pages by category (for RelatedContent blocks)
 */
export function getRelatedPages(currentPageName, category, limit = 4) {
  return Object.values(seoPages)
    .filter(p => p.pageName !== currentPageName && p.category === category)
    .slice(0, limit);
}

/**
 * Get related pages across different categories (broader recommendations)
 */
export function getCrossCategoryPages(currentPageName, categories, limit = 4) {
  return Object.values(seoPages)
    .filter(p => p.pageName !== currentPageName && categories.includes(p.category))
    .slice(0, limit);
}

/**
 * Build a flat list of all linkable keywords -> page mapping for InternalLinker.
 * Keywords are lowercased for matching. Longer keywords are sorted first for
 * greedy matching (e.g., "agentic AI" before "AI").
 */
let _keywordIndex = null;
export function getKeywordIndex() {
  if (_keywordIndex) return _keywordIndex;
  _keywordIndex = [];
  for (const page of Object.values(seoPages)) {
    for (const keyword of page.keywords) {
      _keywordIndex.push({ keyword: keyword.toLowerCase(), pageName: page.pageName, url: page.url, title: page.title });
    }
  }
  // Sort by keyword length descending so longer matches win
  _keywordIndex.sort((a, b) => b.keyword.length - a.keyword.length);
  return _keywordIndex;
}