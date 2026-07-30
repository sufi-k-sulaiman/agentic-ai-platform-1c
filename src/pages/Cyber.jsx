import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Shield, Lock, Eye, FileCheck, AlertTriangle, CheckCircle2, Download, Search, X, Globe, XCircle, ChevronRight } from 'lucide-react';
import PageMeta from '@/components/PageMeta';
import RelatedContent from '@/components/seo/RelatedContent';
import BugBountyForm from '@/components/contact/BugBountyForm';
import { base44 } from '@/api/base44Client';





export default function Cyber() {
  const [searchInput, setSearchInput] = useState('');
  const [validationResults, setValidationResults] = useState(null);
  const [isValidating, setIsValidating] = useState(false);
  const [expandedCard, setExpandedCard] = useState(null);
  const [showContactForm, setShowContactForm] = useState(false);
  const [validationError, setValidationError] = useState(null);
  const [expandedCategories, setExpandedCategories] = useState({});
  const [showAllDetailsModal, setShowAllDetailsModal] = useState(false);

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
      <section className="py-24 bg-gradient-to-br from-[#8B2EE5] to-[#6B21A8] text-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Globe className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Website Validator
            </h2>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Validate your domain, website, or endpoint against industry best practices
            </p>
          </div>

          <Card className="shadow-xl">
            <CardContent className="p-8">
              <div className="mb-8 relative">
                <Input
                  type="text"
                  placeholder="Enter domain or URL (e.g., example.com or https://example.com)"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleValidation()}
                  className="pr-32 h-16 text-lg rounded-full shadow-lg border-2"
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
                            <div className="py-2 border-b border-gray-100">
                              <div className="text-sm font-medium text-gray-700 mb-2">Certificate Information</div>
                              <div className="grid grid-cols-2 gap-3 text-sm">
                                <div>
                                  <span className="text-gray-500">Subject:</span>
                                  <p className="text-gray-900 font-mono text-xs break-all">{validationResults.rawData.sslLabs.endpoints[0].details.cert.subject || 'N/A'}</p>
                                </div>
                                <div>
                                  <span className="text-gray-500">Issuer:</span>
                                  <p className="text-gray-900 text-xs">{validationResults.rawData.sslLabs.endpoints[0].details.cert.issuerLabel || 'N/A'}</p>
                                </div>
                                <div>
                                  <span className="text-gray-500">Valid Until:</span>
                                  <p className="text-gray-900 text-xs">
                                    {validationResults.rawData.sslLabs.endpoints[0].details.cert.notAfter 
                                      ? new Date(validationResults.rawData.sslLabs.endpoints[0].details.cert.notAfter).toLocaleDateString()
                                      : 'N/A'}
                                  </p>
                                </div>
                                <div>
                                  <span className="text-gray-500">Key Strength:</span>
                                  <p className="text-gray-900 text-xs">
                                    {validationResults.rawData.sslLabs.endpoints[0].details.cert.keyAlg} {validationResults.rawData.sslLabs.endpoints[0].details.cert.keySize}-bit
                                  </p>
                                </div>
                                <div>
                                  <span className="text-gray-500">Signature:</span>
                                  <p className="text-gray-900 text-xs">{validationResults.rawData.sslLabs.endpoints[0].details.cert.sigAlg || 'N/A'}</p>
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

                          {/* Vulnerabilities */}
                          {validationResults.rawData.sslLabs.endpoints[0].details && (
                            <div className="py-2 border-b border-gray-100">
                              <div className="text-sm font-medium text-gray-700 mb-2">Known Vulnerabilities</div>
                              <div className="grid grid-cols-2 gap-2 text-xs">
                                {[
                                  { key: 'heartbleed', label: 'Heartbleed' },
                                  { key: 'poodle', label: 'POODLE' },
                                  { key: 'vulnBeast', label: 'BEAST' },
                                  { key: 'freak', label: 'FREAK' },
                                  { key: 'logjam', label: 'Logjam' },
                                  { key: 'drownVulnerable', label: 'DROWN' }
                                ].map(({ key, label }) => {
                                  const value = validationResults.rawData.sslLabs.endpoints[0].details[key];
                                  if (value === undefined || value === null) return null;
                                  return (
                                    <div key={key} className="flex items-center gap-2">
                                      {value ? (
                                        <XCircle className="w-3 h-3 text-red-600 flex-shrink-0" />
                                      ) : (
                                        <CheckCircle2 className="w-3 h-3 text-green-600 flex-shrink-0" />
                                      )}
                                      <span className={value ? 'text-red-900' : 'text-gray-700'}>{label}</span>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          )}

                          {/* Forward Secrecy */}
                          {validationResults.rawData.sslLabs.endpoints[0].details?.forwardSecrecy !== undefined && (
                            <div className="py-2 border-b border-gray-100">
                              <div className="text-sm font-medium text-gray-700 mb-2">Forward Secrecy</div>
                              <div className="flex items-center gap-2">
                                <CheckCircle2 className={`w-4 h-4 ${validationResults.rawData.sslLabs.endpoints[0].details.forwardSecrecy >= 2 ? 'text-green-600' : 'text-orange-600'}`} />
                                <span className="text-sm text-gray-900">
                                  {validationResults.rawData.sslLabs.endpoints[0].details.forwardSecrecy >= 4 
                                    ? 'Excellent (all connections)'
                                    : validationResults.rawData.sslLabs.endpoints[0].details.forwardSecrecy >= 2
                                    ? 'Good (modern browsers)'
                                    : 'Weak or missing'}
                                </span>
                              </div>
                            </div>
                          )}

                          {/* Cipher Suites */}
                          {validationResults.rawData.sslLabs.endpoints[0].details?.suites?.list && (
                            <div className="py-2">
                              <div className="text-sm font-medium text-gray-700 mb-2">Cipher Suites</div>
                              <div className="text-sm text-gray-900">
                                {validationResults.rawData.sslLabs.endpoints[0].details.suites.list.length} cipher suites available
                                {(() => {
                                  const weakCiphers = validationResults.rawData.sslLabs.endpoints[0].details.suites.list.filter(
                                    s => s.q === 0 || (s.cipherStrength && s.cipherStrength < 128)
                                  );
                                  return weakCiphers.length > 0 ? (
                                    <span className="text-red-600 ml-2">({weakCiphers.length} weak)</span>
                                  ) : (
                                    <span className="text-green-600 ml-2">(all strong)</span>
                                  );
                                })()}
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
                    <div className="bg-gray-50 px-6 py-4 border-b border-gray-200 flex items-center justify-between">
                      <div>
                        <h4 className="font-bold text-lg text-gray-900">Validation Results</h4>
                        <p className="text-sm text-gray-600">Security headers and SSL/TLS analysis</p>
                      </div>
                      <Button
                        onClick={() => setShowAllDetailsModal(true)}
                        variant="outline"
                        className="text-[#8B2EE5] border-[#8B2EE5] hover:bg-purple-50"
                      >
                        View All Details
                      </Button>
                    </div>
                    <div className="p-6">
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                          { key: 'securityHeaders', label: 'Security Headers', icon: Shield, grade: validationResults.securityHeadersGrade },
                          { key: 'sslTls', label: 'SSL/TLS Configuration', icon: Lock, grade: validationResults.sslLabsGrade },
                          { key: 'seo', label: 'SEO Optimization', icon: Globe, score: validationResults.seoScore },
                          { key: 'accessibility', label: 'Accessibility', icon: Eye, score: validationResults.accessibilityScore },
                          { key: 'performance', label: 'Performance', icon: FileCheck, score: validationResults.performanceScore },
                          { key: 'content', label: 'Content Quality', icon: CheckCircle2, score: validationResults.contentScore },
                          { key: 'mobile', label: 'Mobile Friendly', icon: Shield, score: validationResults.mobileScore }
                        ].filter(({ grade, score }) => grade || score).map(({ key, label, icon: Icon, grade, score }) => {
                          const { passed, failed } = getIssuesForCategory(key);
                          const isExpanded = expandedCategories[key];
                          const totalItems = passed.length + failed.length;
                          const showLimit = 3;
                          const hasMore = totalItems > showLimit;

                          return (
                            <div key={key} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                              <div className="flex items-center gap-2 mb-3">
                                <Icon className="w-5 h-5 text-[#8B2EE5]" />
                                <span className="font-semibold text-gray-900">{label}</span>
                                {grade && <span className="ml-auto text-2xl font-bold text-[#8B2EE5]">{grade}</span>}
                                {score && <span className="ml-auto text-2xl font-bold text-[#8B2EE5]">{score}/100</span>}
                              </div>

                              {failed.length > 0 && (
                                <div className="mb-2">
                                  {failed.slice(0, isExpanded ? undefined : showLimit).map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-2 text-xs py-1">
                                      <XCircle className="w-3 h-3 text-red-600 mt-0.5 flex-shrink-0" />
                                      <span className="text-red-900">{item}</span>
                                    </div>
                                  ))}
                                </div>
                              )}

                              {passed.length > 0 && (
                                <div>
                                  {passed.slice(0, isExpanded ? undefined : (showLimit - failed.length)).map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-2 text-xs py-1">
                                      <CheckCircle2 className="w-3 h-3 text-green-600 mt-0.5 flex-shrink-0" />
                                      <span className="text-gray-700">{item}</span>
                                    </div>
                                  ))}
                                </div>
                              )}

                              {hasMore && (
                                <button
                                  onClick={() => setExpandedCategories(prev => ({ ...prev, [key]: !prev[key] }))}
                                  className="mt-2 text-xs text-[#8B2EE5] hover:text-[#7325C4] font-medium flex items-center gap-1"
                                >
                                  {isExpanded ? (
                                    <>
                                      Show less
                                      <ChevronRight className="w-3 h-3 rotate-90" />
                                    </>
                                  ) : (
                                    <>
                                      Show {totalItems - showLimit} more
                                      <ChevronRight className="w-3 h-3 -rotate-90" />
                                    </>
                                  )}
                                </button>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* All Details Modal */}
                  <AnimatePresence>
                    {showAllDetailsModal && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                        onClick={() => setShowAllDetailsModal(false)}
                      >
                        <motion.div
                          initial={{ opacity: 0, scale: 0.95, y: 20 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.95, y: 20 }}
                          onClick={(e) => e.stopPropagation()}
                          className="bg-white rounded-2xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden flex flex-col"
                        >
                          <div className="bg-gradient-to-r from-[#8B2EE5] to-[#7325C4] px-8 py-6 flex items-center justify-between">
                            <div>
                              <h3 className="text-2xl font-bold text-white">Complete Security Analysis</h3>
                              <p className="text-purple-100 mt-1">All checks for {validationResults.domain}</p>
                            </div>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => setShowAllDetailsModal(false)}
                              className="text-white hover:bg-white/20"
                            >
                              <X className="w-6 h-6" />
                            </Button>
                          </div>

                          <div className="flex-1 overflow-y-auto p-8">
                            <div className="space-y-6">
                              {[
                               { key: 'securityHeaders', label: 'Security Headers', icon: Shield, grade: validationResults.securityHeadersGrade },
                               { key: 'sslTls', label: 'SSL/TLS Configuration', icon: Lock, grade: validationResults.sslLabsGrade },
                               { key: 'seo', label: 'SEO Optimization', icon: Globe, score: validationResults.seoScore },
                               { key: 'accessibility', label: 'Accessibility', icon: Eye, score: validationResults.accessibilityScore },
                               { key: 'performance', label: 'Performance', icon: FileCheck, score: validationResults.performanceScore },
                               { key: 'content', label: 'Content Quality', icon: CheckCircle2, score: validationResults.contentScore },
                               { key: 'mobile', label: 'Mobile Friendly', icon: Shield, score: validationResults.mobileScore }
                              ].filter(({ grade, score }) => grade || score).map(({ key, label, icon: Icon, grade, score }) => {
                               const { passed, failed } = getIssuesForCategory(key);

                               if (passed.length === 0 && failed.length === 0) return null;

                               return (
                                 <div key={key} className="border border-gray-200 rounded-lg overflow-hidden">
                                   <div className="px-6 py-4 bg-purple-50 border-b border-gray-200">
                                     <div className="flex items-center justify-between">
                                       <div className="flex items-center gap-3">
                                         <Icon className="w-6 h-6 text-[#8B2EE5]" />
                                         <h4 className="font-bold text-lg text-gray-900">{label}</h4>
                                       </div>
                                       {grade && <div className="text-3xl font-bold text-[#8B2EE5]">{grade}</div>}
                                       {score && <div className="text-3xl font-bold text-[#8B2EE5]">{score}/100</div>}
                                     </div>
                                   </div>
                                    <div className="p-6 space-y-4">
                                      {failed.length > 0 && (
                                        <div>
                                          <h5 className="font-semibold text-red-900 mb-2 flex items-center gap-2">
                                            <XCircle className="w-4 h-4" />
                                            Issues Found ({failed.length})
                                          </h5>
                                          <div className="space-y-2">
                                            {failed.map((item, idx) => (
                                              <div key={idx} className="flex items-start gap-2 text-sm py-1.5 px-3 bg-red-50 rounded">
                                                <XCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                                                <span className="text-red-900">{item}</span>
                                              </div>
                                            ))}
                                          </div>
                                        </div>
                                      )}

                                      {passed.length > 0 && (
                                        <div>
                                          <h5 className="font-semibold text-green-900 mb-2 flex items-center gap-2">
                                            <CheckCircle2 className="w-4 h-4" />
                                            Passed Checks ({passed.length})
                                          </h5>
                                          <div className="space-y-2">
                                            {passed.map((item, idx) => (
                                              <div key={idx} className="flex items-start gap-2 text-sm py-1.5 px-3 bg-green-50 rounded">
                                                <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                                <span className="text-gray-700">{item}</span>
                                              </div>
                                            ))}
                                          </div>
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </motion.div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Built with Security in Mind */}
      <section className="py-24 bg-gradient-to-br from-purple-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Built with cybersecurity in mind
            </h2>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Multiple layers of protection to keep your data safe
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
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
                icon: Lock,
                title: 'Access Controls',
                description: 'Role-based access control (RBAC) and multi-factor authentication (MFA) required.'
              }
            ].map((feature, idx) => (
              <motion.div
               key={idx}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: idx * 0.1 }}
              >
               <Card className="h-full hover:shadow-xl transition-all hover:-translate-y-1 border-0 bg-gradient-to-br from-purple-800 to-purple-900">
                 <CardContent className="p-6">
                   <feature.icon className="w-8 h-8 text-purple-200 mb-4" />
                   <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                   <p className="text-purple-200 leading-relaxed">{feature.description}</p>
                 </CardContent>
               </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* Certifications & Compliance */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Certifications & compliance
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We meet the highest industry standards for security and data protection
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: 'SOC 2 Type II', status: 'Certified', description: 'SOC 2 Type II certification verifies that our security controls are properly designed and operating effectively over time. This includes rigorous testing of our security, availability, processing integrity, confidentiality, and privacy controls.', icon: Shield },
              { name: 'ISO 27001', status: 'Certified', description: 'ISO 27001 is the international standard for information security management systems (ISMS). Our certification demonstrates systematic management of sensitive information to keep it secure through comprehensive security controls.', icon: FileCheck },
              { name: 'GDPR', status: 'Compliant', description: 'Full compliance with the General Data Protection Regulation (GDPR), ensuring proper handling of EU citizen data with strong privacy protections, data subject rights, and lawful processing requirements.', icon: Lock },
              { name: 'HIPAA', status: 'Compliant', description: 'Health Insurance Portability and Accountability Act (HIPAA) compliance for handling protected health information (PHI), with strict safeguards for patient data security and privacy.', icon: Shield },
              { name: 'PCI DSS', status: 'Level 1', description: 'Payment Card Industry Data Security Standard (PCI DSS) Level 1 compliance - the highest level of validation for organizations processing the largest volume of card transactions securely.', icon: Lock },
              { name: 'CCPA', status: 'Compliant', description: 'California Consumer Privacy Act (CCPA) compliance, providing California residents with enhanced privacy rights and control over their personal information.', icon: Eye }
            ].map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card 
                  className="cursor-pointer hover:shadow-xl transition-all hover:-translate-y-1 h-full"
                  onClick={() => setExpandedCard(expandedCard === cert.name ? null : cert.name)}
                >
                  <CardContent className="p-6 text-center">
                    <div className="flex items-center justify-center mx-auto mb-4">
                      <cert.icon className="w-8 h-8 text-[#8B2EE5]" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{cert.name}</h3>
                    <Badge className="bg-green-100 text-green-800">{cert.status}</Badge>
                  </CardContent>
                </Card>

                {/* Modal */}
                <AnimatePresence>
                  {expandedCard === cert.name && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                      onClick={() => setExpandedCard(null)}
                    >
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        onClick={(e) => e.stopPropagation()}
                        className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-8"
                      >
                        <div className="flex items-start justify-between mb-6">
                          <div className="flex items-center gap-4">
                            <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center">
                              <cert.icon className="w-8 h-8 text-[#8B2EE5]" />
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold text-gray-900">{cert.name}</h3>
                              <Badge className="bg-green-100 text-green-800 mt-2">{cert.status}</Badge>
                            </div>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setExpandedCard(null)}
                            className="text-gray-500 hover:text-gray-700"
                          >
                            <X className="w-6 h-6" />
                          </Button>
                        </div>
                        <p className="text-gray-700 leading-relaxed">{cert.description}</p>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Our Security Practices */}
      <section className="py-24 bg-white">
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
            {/* Data Protection */}
            <Card className="border-2 hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Lock className="w-6 h-6 text-[#8B2EE5]" />
                </div>
                <CardTitle className="text-2xl">Data Protection</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">End-to-end encryption</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Automatic data backup every 6 hours</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Multi-region redundancy</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Point-in-time recovery</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Application Security */}
            <Card className="border-2 hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-[#8B2EE5]" />
                </div>
                <CardTitle className="text-2xl">Application Security</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Secure development lifecycle (SDLC)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Code reviews and static analysis</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Dependency scanning</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Bug bounty program</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Infrastructure Security */}
            <Card className="border-2 hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <FileCheck className="w-6 h-6 text-[#8B2EE5]" />
                </div>
                <CardTitle className="text-2xl">Infrastructure Security</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Private VPC with network isolation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Firewall rules and security groups</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Automated security patching</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Infrastructure as code</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Compliance & Governance */}
            <Card className="border-2 hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Eye className="w-6 h-6 text-[#8B2EE5]" />
                </div>
                <CardTitle className="text-2xl">Compliance & Governance</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Annual SOC 2 audits</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">GDPR data processing agreements</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Regular compliance training</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Incident response procedures</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
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

      <RelatedContent
        currentPage="Cyber"
        category="product"
        crossCategories={['resources']}
        title="Explore Related Solutions"
      />
    </div>
  );
}