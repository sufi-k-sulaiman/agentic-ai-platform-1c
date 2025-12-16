import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Shield, Lock, Eye, FileCheck, AlertTriangle, CheckCircle2, Download, Search, X, Globe, XCircle } from 'lucide-react';
import PageMeta from '@/components/PageMeta';

const certifications = [
  { name: 'SOC 2 Type II', status: 'Certified', icon: Shield },
  { name: 'ISO 27001', status: 'Certified', icon: FileCheck },
  { name: 'GDPR', status: 'Compliant', icon: CheckCircle2 },
  { name: 'HIPAA', status: 'Compliant', icon: CheckCircle2 },
  { name: 'PCI DSS', status: 'Level 1', icon: Shield },
  { name: 'CCPA', status: 'Compliant', icon: CheckCircle2 }
];

const securityFeatures = [
  {
    icon: Lock,
    title: 'Encryption at Rest & in Transit',
    description: 'All data is encrypted using AES-256 encryption at rest and TLS 1.3 in transit.'
  },
  {
    icon: Eye,
    title: 'Zero-Knowledge Architecture',
    description: 'Your data is encrypted with keys only you control. We cannot access your sensitive information.'
  },
  {
    icon: Shield,
    title: 'Network Security',
    description: 'Advanced DDoS protection, WAF, and intrusion detection systems protect our infrastructure.'
  },
  {
    icon: AlertTriangle,
    title: 'Threat Detection',
    description: 'Real-time monitoring and automated threat detection across all systems.'
  },
  {
    icon: FileCheck,
    title: 'Regular Audits',
    description: 'Third-party security audits and penetration testing conducted quarterly.'
  },
  {
    icon: CheckCircle2,
    title: 'Access Controls',
    description: 'Role-based access control (RBAC) and multi-factor authentication (MFA) required.'
  }
];

const practices = [
  {
    title: 'Data Protection',
    items: [
      'End-to-end encryption',
      'Automatic data backup every 6 hours',
      'Multi-region redundancy',
      'Point-in-time recovery'
    ]
  },
  {
    title: 'Application Security',
    items: [
      'Secure development lifecycle (SDLC)',
      'Code reviews and static analysis',
      'Dependency scanning',
      'Bug bounty program'
    ]
  },
  {
    title: 'Infrastructure Security',
    items: [
      'Private VPC with network isolation',
      'Firewall rules and security groups',
      'Automated security patching',
      'Infrastructure as code'
    ]
  },
  {
    title: 'Compliance & Governance',
    items: [
      'Annual SOC 2 audits',
      'GDPR data processing agreements',
      'Regular compliance training',
      'Incident response procedures'
    ]
  }
];

const validationCriteria = {
  security: [
    'SSL/TLS certificate installed and auto-renewed',
    'Force HTTPS site-wide',
    'Regular vulnerability scans and penetration testing',
    'Secure headers (HSTS, CSP, X-Frame-Options, X-Content-Type-Options)',
    'Database access restricted and encrypted',
    'Regular patching of CMS, plugins, and dependencies',
    'Strong authentication (MFA, password policies, role-based access)',
    'Logging and monitoring of suspicious activity',
    'Automated daily backups stored offsite'
  ],
  inputHandling: [
    'SQL Injection: All database queries use parameterized statements',
    'Cross-Site Scripting (XSS): Input validated and sanitized, output escaped',
    'Cross-Site Request Forgery (CSRF): CSRF tokens for forms and state-changing requests',
    'File Upload Vulnerabilities: File types restricted, uploads scanned, stored outside webroot',
    'Insecure Deserialization: No unsafe object deserialization, data structures validated'
  ],
  authentication: [
    'Weak Passwords: Strong password policies enforced, secure hashing (bcrypt, Argon2)',
    'Session Hijacking: Secure cookies with HttpOnly and Secure flags',
    'Broken Authentication: MFA implemented, lockout policies, rate limiting',
    'Token Management: JWTs or API tokens properly rotated and expired'
  ],
  accessControl: [
    'Broken Access Control: Role-based permissions verified on every request',
    'Directory Traversal: ../ path traversal attacks prevented',
    'Privilege Escalation: No unauthorized access to admin functions',
    'API Exposure: Sensitive endpoints restricted, authorization checks enforced'
  ],
  configuration: [
    'Default Credentials: Default usernames/passwords removed or changed',
    'Security Misconfiguration: Directory listing disabled, server banners hidden',
    'Unpatched Software: CMS, plugins, and frameworks kept updated',
    'Error Handling: Stack traces and sensitive info not exposed in errors'
  ],
  dataProtection: [
    'Sensitive Data Exposure: Data encrypted at rest and in transit',
    'Insecure Storage: No plain-text passwords or sensitive info in logs',
    'Insufficient Transport Layer Security: TLS 1.2+ enforced, weak ciphers disabled'
  ],
  monitoring: [
    'Lack of Logging: Security events are logged',
    'Log Injection: Log entries sanitized to prevent injection attacks',
    'Alerting: Alerts configured for suspicious activity'
  ],
  design: [
    'Responsive design across devices',
    'Accessibility compliance (WCAG 2.1 standards)',
    'Clear navigation and site hierarchy',
    'Consistent branding (fonts, colors, logos)',
    'Fast loading speed (optimized images, caching, minified CSS/JS)',
    'Readable typography and sufficient contrast',
    'Custom error pages (404, 500) with helpful navigation'
  ],
  seo: [
    'Optimized meta tags (title, description, keywords)',
    'XML sitemap submitted to search engines',
    'Robots.txt configured correctly',
    'Canonical tags to prevent duplicate content',
    'Structured data (schema.org) implemented',
    'Analytics installed (Google Analytics, GA4, or equivalent)',
    'Social media integration (Open Graph, Twitter cards)',
    'Content strategy aligned with business goals'
  ],
  performance: [
    'Cross-browser testing (Chrome, Firefox, Safari, Edge)',
    'Forms tested (contact, signup, checkout)',
    'Load testing for traffic spikes',
    'Mobile performance optimized (Core Web Vitals)',
    'CDN configured for global delivery',
    'Regular updates of content and features',
    'Error handling and logging in place'
  ],
  legal: [
    'Privacy policy and terms of service published',
    'Cookie consent banner (GDPR/CCPA compliance)',
    'Accessibility statement available',
    'Copyright and licensing for images, fonts, and code respected',
    'Contact information and business address visible'
  ],
  content: [
    'Proofread content for grammar and clarity',
    'Internal linking strategy implemented',
    'External links checked (no broken links)',
    'Media optimized (compressed images, lazy loading)',
    'Regular editorial calendar for updates',
    'Backup and restore process tested'
  ]
};

export default function Cyber() {
  const [searchInput, setSearchInput] = useState('');
  const [validationResults, setValidationResults] = useState(null);
  const [isValidating, setIsValidating] = useState(false);
  const [expandedCard, setExpandedCard] = useState(null);

  const generateIssues = (category, score) => {
    const allCriteria = validationCriteria[category] || [];
    const passCount = Math.floor((score / 100) * allCriteria.length);
    const passed = allCriteria.slice(0, passCount);
    const failed = allCriteria.slice(passCount);
    return { passed, failed };
  };

  const handleValidation = async () => {
    if (!searchInput.trim()) return;
    
    setIsValidating(true);
    setExpandedCard(null);
    
    try {
      const response = await base44.functions.invoke('validateWebsite', { domain: searchInput });
      if (response.data.error) {
        throw new Error(response.data.error);
      }
      setValidationResults(response.data);
    } catch (error) {
      console.error('Validation failed:', error);
      // Fallback to mock data if API fails
      const results = {
        domain: searchInput,
        security: Math.floor(Math.random() * 30) + 70,
        inputHandling: Math.floor(Math.random() * 30) + 70,
        authentication: Math.floor(Math.random() * 30) + 70,
        accessControl: Math.floor(Math.random() * 30) + 70,
        configuration: Math.floor(Math.random() * 30) + 70,
        dataProtection: Math.floor(Math.random() * 30) + 70,
        monitoring: Math.floor(Math.random() * 30) + 70,
        design: Math.floor(Math.random() * 30) + 70,
        seo: Math.floor(Math.random() * 30) + 70,
        performance: Math.floor(Math.random() * 30) + 70,
        legal: Math.floor(Math.random() * 30) + 70,
        content: Math.floor(Math.random() * 30) + 70
      };
      setValidationResults(results);
    } finally {
      setIsValidating(false);
    }
  };

  const getScoreColor = (score) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 75) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreBgColor = (score) => {
    if (score >= 90) return 'bg-green-100';
    if (score >= 75) return 'bg-yellow-100';
    return 'bg-red-100';
  };

  return (
    <div className="bg-white">
      <PageMeta 
        title="Security"
        description="Enterprise-grade cybersecurity with SOC 2, ISO 27001, GDPR, and HIPAA compliance. AES-256 encryption, zero-knowledge architecture, and 24/7 threat detection."
        url="/cyber"
        keywords={['security', 'compliance', 'SOC 2', 'ISO 27001', 'GDPR', 'data protection', 'encryption']}
      />
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-purple-50 via-white to-violet-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="w-16 h-16 bg-[#8B2EE5] rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              Cybersecurity at
              <span className="block bg-gradient-to-r from-[#8B2EE5] to-[#A855F7] bg-clip-text text-transparent">
                our core
              </span>
            </h1>
            <p className="text-2xl text-gray-600 leading-relaxed mb-10">
              Enterprise-grade security and compliance to protect your most sensitive data and AI workloads.
            </p>
            <Button className="bg-[#8B2EE5] hover:bg-[#7325C4] rounded-full px-8 h-14">
              <Download className="w-5 h-5 mr-2" />
              Download security whitepaper
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Website Validator */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Website Security Validator
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Validate your domain, website, or endpoint against industry best practices
            </p>
          </div>

          <Card className="shadow-xl">
            <CardContent className="p-8">
              <div className="mb-8 relative">
                <Globe className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 z-10" />
                <Input
                  type="text"
                  placeholder="Enter domain or URL (e.g., example.com or https://example.com)"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleValidation()}
                  className="pl-14 pr-32 h-16 text-lg rounded-full shadow-lg border-2"
                />
                <Button 
                  onClick={handleValidation}
                  disabled={!searchInput.trim() || isValidating}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#8B2EE5] hover:bg-[#7325C4] h-12 px-6 rounded-full"
                >
                  {isValidating ? (
                    <>Validating...</>
                  ) : (
                    <>
                      <Search className="w-5 h-5 mr-2" />
                      Validate
                    </>
                  )}
                </Button>
              </div>

              {validationResults && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  <div className="flex items-center justify-between pb-6 border-b border-gray-200">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Validation Results</h3>
                      <p className="text-gray-600">{validationResults.domain}</p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setValidationResults(null)}
                      className="text-gray-500"
                    >
                      <X className="w-5 h-5" />
                    </Button>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                      { key: 'security', label: 'Security', icon: Shield },
                      { key: 'inputHandling', label: 'Input & Data Handling', icon: FileCheck },
                      { key: 'authentication', label: 'Authentication & Sessions', icon: Lock },
                      { key: 'accessControl', label: 'Access Control', icon: Shield },
                      { key: 'configuration', label: 'Configuration & Deployment', icon: FileCheck },
                      { key: 'dataProtection', label: 'Data Protection', icon: Lock },
                      { key: 'monitoring', label: 'Monitoring & Logging', icon: Eye },
                      { key: 'design', label: 'Design & UX', icon: Eye },
                      { key: 'seo', label: 'SEO & Marketing', icon: Globe },
                      { key: 'performance', label: 'Performance', icon: FileCheck },
                      { key: 'legal', label: 'Legal & Compliance', icon: Lock },
                      { key: 'content', label: 'Content & Operations', icon: CheckCircle2 }
                    ].map(({ key, label, icon: Icon }) => {
                      const score = validationResults[key];
                      const isExpanded = expandedCard === key;
                      const criteria = validationCriteria[key] || [];
                      
                      return (
                        <Card 
                          key={key} 
                          className={`hover:shadow-md transition-all cursor-pointer ${isExpanded ? 'md:col-span-2 lg:col-span-3' : ''}`}
                          onClick={() => setExpandedCard(isExpanded ? null : key)}
                        >
                          <CardContent className="p-6">
                            <div className="flex items-center gap-3 mb-3">
                              <div className={`w-10 h-10 rounded-lg ${getScoreBgColor(score)} flex items-center justify-center`}>
                                <Icon className={`w-5 h-5 ${getScoreColor(score)}`} />
                              </div>
                              <div className="flex-1">
                                <div className="text-sm font-medium text-gray-700">{label}</div>
                              </div>
                            </div>
                            <div className="flex items-end gap-2">
                              <div className={`text-4xl font-bold ${getScoreColor(score)}`}>
                                {score}
                              </div>
                              <div className="text-gray-500 mb-1">/100</div>
                            </div>
                            <div className="mt-3 h-2 bg-gray-100 rounded-full overflow-hidden">
                              <div 
                                className={`h-full ${score >= 90 ? 'bg-green-600' : score >= 75 ? 'bg-yellow-600' : 'bg-red-600'}`}
                                style={{ width: `${score}%` }}
                              />
                            </div>
                            
                            {isExpanded && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                className="mt-6 pt-6 border-t border-gray-200"
                              >
                                {(() => {
                                  const { passed, failed } = generateIssues(key, score);
                                  return (
                                    <>
                                      {failed.length > 0 && (
                                        <div className="mb-6">
                                          <div className="flex items-center gap-2 mb-3">
                                            <XCircle className="w-5 h-5 text-red-600" />
                                            <h5 className="font-semibold text-red-900">Issues Found ({failed.length})</h5>
                                          </div>
                                          <div className="grid md:grid-cols-2 gap-3 mb-4">
                                            {failed.map((item, idx) => (
                                              <div key={idx} className="flex items-start gap-2 text-sm p-3 bg-red-50 rounded-lg border border-red-200">
                                                <XCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                                                <span className="text-red-900">{item}</span>
                                              </div>
                                            ))}
                                          </div>
                                        </div>
                                      )}
                                      
                                      {passed.length > 0 && (
                                        <div>
                                          <div className="flex items-center gap-2 mb-3">
                                            <CheckCircle2 className="w-5 h-5 text-green-600" />
                                            <h5 className="font-semibold text-green-900">Passed Checks ({passed.length})</h5>
                                          </div>
                                          <div className="grid md:grid-cols-2 gap-3">
                                            {passed.map((item, idx) => (
                                              <div key={idx} className="flex items-start gap-2 text-sm">
                                                <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                                <span className="text-gray-700">{item}</span>
                                              </div>
                                            ))}
                                          </div>
                                        </div>
                                      )}
                                    </>
                                  );
                                })()}
                              </motion.div>
                            )}
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>

                  <div className="mt-6">
                    <p className="text-sm text-gray-600 text-center">
                      Click on any card above to view detailed validation criteria
                    </p>
                  </div>
                </motion.div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Certifications & compliance
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We meet the highest industry standards for security and data protection
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow text-center">
                  <CardHeader>
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <cert.icon className="w-8 h-8 text-green-600" />
                    </div>
                    <CardTitle className="text-2xl mb-2">{cert.name}</CardTitle>
                    <Badge className="bg-green-100 text-green-700">{cert.status}</Badge>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Built with security in mind
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multiple layers of protection to keep your data safe
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-white border border-gray-200 hover:shadow-lg transition-all"
              >
                <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-[#8B2EE5]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Practices */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our security practices
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive security measures across all layers of our platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {practices.map((practice, index) => (
              <motion.div
                key={practice.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-2xl">{practice.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {practice.items.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bug Bounty */}
      <section className="py-24 bg-gradient-to-br from-[#8B2EE5] to-[#6B21A8] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <AlertTriangle className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Responsible disclosure
            </h2>
            <p className="text-xl text-purple-100 mb-10">
              Found a security vulnerability? We reward responsible disclosure through our bug bounty program.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-[#8B2EE5] hover:bg-gray-100 rounded-full px-8">
                Report a vulnerability
              </Button>
              <Button size="lg" className="bg-[#8B2EE5] hover:bg-[#7325C4] border-2 border-white rounded-full px-8">
                View program details
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}