import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Shield, Lock, Eye, FileCheck, AlertTriangle, CheckCircle2, Download, Search, X, Globe, XCircle } from 'lucide-react';
import PageMeta from '@/components/PageMeta';
import BugBountyForm from '@/components/contact/BugBountyForm';
import { base44 } from '@/api/base44Client';





export default function Cyber() {
  const [searchInput, setSearchInput] = useState('');
  const [validationResults, setValidationResults] = useState(null);
  const [isValidating, setIsValidating] = useState(false);
  const [expandedCard, setExpandedCard] = useState(null);
  const [showContactForm, setShowContactForm] = useState(false);
  const [validationError, setValidationError] = useState(null);

  const getIssuesForCategory = (category) => {
    if (!validationResults?.issues?.[category]) {
      return { passed: [], failed: [] };
    }
    return validationResults.issues[category];
  };

  const handleValidation = async () => {
    if (!searchInput.trim()) return;
    
    setIsValidating(true);
    setExpandedCard(null);
    setValidationError(null);
    setValidationResults(null);
    
    try {
      const response = await base44.functions.invoke('validateWebsite', { domain: searchInput });
      if (response.data.error) {
        throw new Error(response.data.error);
      }
      setValidationResults(response.data);
    } catch (error) {
      console.error('Validation failed:', error);
      setValidationError(error.message || 'Failed to validate website. Please try again.');
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
              Enterprise-grade compliance to protect your most sensitive data and AI workloads.
            </p>

          </motion.div>
        </div>
      </section>

      {/* Website Validator */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Website Validator
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

              {validationError && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-6 bg-red-50 border border-red-200 rounded-xl"
                >
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-red-900 mb-1">Validation Failed</h4>
                      <p className="text-red-700 text-sm">{validationError}</p>
                    </div>
                  </div>
                </motion.div>
              )}

              {validationResults && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-8"
                >
                  <div className="flex items-center justify-between pb-6 border-b border-gray-200">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Security Analysis Results</h3>
                      <p className="text-gray-600 font-mono">{validationResults.domain}</p>
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

                  {/* Overall Scores Summary */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { label: 'Security', score: validationResults.security, icon: Shield },
                      { label: 'Data Protection', score: validationResults.dataProtection, icon: Lock },
                      { label: 'Authentication', score: validationResults.authentication, icon: FileCheck },
                      { label: 'Access Control', score: validationResults.accessControl, icon: Eye }
                    ].map(({ label, score, icon: Icon }) => (
                      <div key={label} className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-200">
                        <div className="flex items-center gap-2 mb-2">
                          <Icon className={`w-5 h-5 ${getScoreColor(score)}`} />
                          <span className="text-sm text-gray-600">{label}</span>
                        </div>
                        <div className={`text-3xl font-bold ${getScoreColor(score)}`}>{score}</div>
                        <div className="text-xs text-gray-500 mt-1">/100</div>
                      </div>
                    ))}
                  </div>

                  {/* Mozilla Observatory Results */}
                  {validationResults.rawData?.mozilla && (
                    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                      <div className="bg-gradient-to-r from-purple-600 to-purple-700 px-6 py-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="text-white font-bold text-lg">Mozilla Observatory</h4>
                            <p className="text-purple-100 text-sm">HTTP Security Headers Analysis</p>
                          </div>
                          <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                            <div className="text-white text-2xl font-bold">
                              {validationResults.rawData.mozilla.score > 0 ? '+' : ''}{validationResults.rawData.mozilla.score}
                            </div>
                            <div className="text-purple-100 text-xs">Score</div>
                          </div>
                        </div>
                      </div>
                      <div className="p-6">
                        {validationResults.rawData.mozilla.tests && Object.entries(validationResults.rawData.mozilla.tests).map(([testKey, test]) => (
                          <div key={testKey} className={`flex items-start gap-3 py-3 border-b border-gray-100 last:border-0`}>
                            {test.pass ? (
                              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                            ) : (
                              <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                            )}
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="font-semibold text-gray-900">{testKey.replace(/-/g, ' ').replace(/_/g, ' ').toUpperCase()}</span>
                                <Badge className={test.pass ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}>
                                  {test.pass ? 'PASS' : 'FAIL'}
                                </Badge>
                              </div>
                              <p className="text-sm text-gray-600">{test.score_description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Security Headers Results */}
                  {validationResults.rawData?.securityHeaders && (
                    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                      <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="text-white font-bold text-lg">SecurityHeaders.com</h4>
                            <p className="text-blue-100 text-sm">HTTP Response Headers Check</p>
                          </div>
                          {validationResults.rawData.securityHeaders.grade && (
                            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                              <div className="text-white text-2xl font-bold">
                                {validationResults.rawData.securityHeaders.grade}
                              </div>
                              <div className="text-blue-100 text-xs">Grade</div>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="p-6 space-y-4">
                        {Object.entries(validationResults.rawData.securityHeaders).map(([header, value]) => {
                          if (header === 'grade') return null;
                          const isPresent = value && value !== 'missing';
                          return (
                            <div key={header} className="flex items-start gap-3 pb-3 border-b border-gray-100 last:border-0">
                              {isPresent ? (
                                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                              ) : (
                                <XCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                              )}
                              <div className="flex-1">
                                <div className="font-semibold text-gray-900 font-mono text-sm">{header}</div>
                                <div className="text-sm text-gray-600 mt-1 break-all">{isPresent ? value : 'Not configured'}</div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* SSL Labs Results */}
                  {validationResults.rawData?.sslLabs?.endpoints?.[0] && (
                    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                      <div className="bg-gradient-to-r from-green-600 to-green-700 px-6 py-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="text-white font-bold text-lg">SSL Labs</h4>
                            <p className="text-green-100 text-sm">SSL/TLS Configuration Analysis</p>
                          </div>
                          <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                            <div className="text-white text-2xl font-bold">
                              {validationResults.rawData.sslLabs.endpoints[0].grade || 'Pending'}
                            </div>
                            <div className="text-green-100 text-xs">Grade</div>
                          </div>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="space-y-3">
                          <div className="flex items-center justify-between py-2 border-b border-gray-100">
                            <span className="text-sm font-medium text-gray-700">Status</span>
                            <Badge className="bg-green-100 text-green-800">
                              {validationResults.rawData.sslLabs.endpoints[0].statusMessage || 'Ready'}
                            </Badge>
                          </div>
                          
                          {validationResults.rawData.sslLabs.endpoints[0].details?.protocols && (
                            <div className="py-2 border-b border-gray-100">
                              <div className="text-sm font-medium text-gray-700 mb-2">Supported Protocols</div>
                              <div className="flex flex-wrap gap-2">
                                {validationResults.rawData.sslLabs.endpoints[0].details.protocols.map((proto, idx) => (
                                  <Badge key={idx} className={
                                    proto.name === 'TLS' && parseFloat(proto.version) >= 1.2 
                                      ? 'bg-green-100 text-green-800' 
                                      : 'bg-orange-100 text-orange-800'
                                  }>
                                    {proto.name} {proto.version}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          )}

                          {validationResults.rawData.sslLabs.endpoints[0].details?.cert && (
                            <div className="py-2">
                              <div className="text-sm font-medium text-gray-700 mb-2">Certificate Information</div>
                              <div className="grid grid-cols-2 gap-3 text-sm">
                                <div>
                                  <span className="text-gray-500">Subject:</span>
                                  <p className="text-gray-900 font-mono text-xs">{validationResults.rawData.sslLabs.endpoints[0].details.cert.subject || 'N/A'}</p>
                                </div>
                                <div>
                                  <span className="text-gray-500">Issues:</span>
                                  <p className={`font-semibold ${validationResults.rawData.sslLabs.endpoints[0].details.cert.issues === 0 ? 'text-green-600' : 'text-red-600'}`}>
                                    {validationResults.rawData.sslLabs.endpoints[0].details.cert.issues || 0}
                                  </p>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Raw API Responses Debug */}
                  <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                    <div className="bg-gray-900 px-6 py-4 border-b border-gray-700">
                      <h4 className="font-bold text-lg text-white font-mono">Raw API Responses</h4>
                      <p className="text-sm text-gray-400">Debug view of actual API data</p>
                    </div>
                    <div className="p-6 space-y-6">
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                          <span className="text-purple-600">Mozilla Observatory API</span>
                          <code className="text-xs text-gray-500">http-observatory.security.mozilla.org</code>
                        </h5>
                        <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-xs font-mono">
                          {JSON.stringify(validationResults.rawData?.mozilla, null, 2)}
                        </pre>
                      </div>

                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                          <span className="text-blue-600">Security Headers API</span>
                          <code className="text-xs text-gray-500">Direct header fetch</code>
                        </h5>
                        <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-xs font-mono">
                          {JSON.stringify(validationResults.rawData?.securityHeaders, null, 2)}
                        </pre>
                      </div>

                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                          <span className="text-green-600">SSL Labs API</span>
                          <code className="text-xs text-gray-500">api.ssllabs.com</code>
                        </h5>
                        <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-xs font-mono">
                          {JSON.stringify(validationResults.rawData?.sslLabs, null, 2)}
                        </pre>
                      </div>
                    </div>
                  </div>

                  {/* Category Breakdown */}
                  <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                    <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                      <h4 className="font-bold text-lg text-gray-900">All Categories Breakdown</h4>
                      <p className="text-sm text-gray-600">Comprehensive security assessment across all validation areas</p>
                    </div>
                    <div className="p-6">
                      <div className="grid md:grid-cols-2 gap-6">
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
                          const { passed, failed } = getIssuesForCategory(key);
                          
                          return (
                            <div key={key} className="border border-gray-200 rounded-lg p-4">
                              <div className="flex items-center gap-2 mb-3">
                                <Icon className={`w-5 h-5 ${getScoreColor(score)}`} />
                                <span className="font-semibold text-gray-900">{label}</span>
                                <span className={`ml-auto text-2xl font-bold ${getScoreColor(score)}`}>{score}</span>
                              </div>
                              
                              {failed.length > 0 && (
                                <div className="mb-2">
                                  {failed.map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-2 text-xs py-1">
                                      <XCircle className="w-3 h-3 text-red-600 mt-0.5 flex-shrink-0" />
                                      <span className="text-red-900">{item}</span>
                                    </div>
                                  ))}
                                </div>
                              )}
                              
                              {passed.length > 0 && (
                                <div>
                                  {passed.map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-2 text-xs py-1">
                                      <CheckCircle2 className="w-3 h-3 text-green-600 mt-0.5 flex-shrink-0" />
                                      <span className="text-gray-700">{item}</span>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                </motion.div>
              )}
            </CardContent>
          </Card>
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
              Found a vulnerability? We reward responsible disclosure through our bug bounty program.
            </p>
            <Button 
              size="lg" 
              onClick={() => setShowContactForm(true)}
              className="bg-white text-[#8B2EE5] hover:bg-gray-100 rounded-full px-8"
            >
              Report a vulnerability
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Bug Bounty Form Modal */}
      {showContactForm && (
        <BugBountyForm onClose={() => setShowContactForm(false)} />
      )}

    </div>
  );
}