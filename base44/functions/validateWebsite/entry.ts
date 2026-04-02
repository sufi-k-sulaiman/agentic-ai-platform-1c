import { createClientFromRequest } from 'npm:@base44/sdk@0.8.4';

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const { domain } = await req.json();
    
    if (!domain) {
      return Response.json({ error: 'Domain is required' }, { status: 400 });
    }

    // Clean domain input
    const cleanDomain = domain.replace(/^(https?:\/\/)?(www\.)?/, '').split('/')[0];
    
    // Fetch website HTML for LLM analysis
    let htmlContent = '';
    try {
      const htmlRes = await fetch(`https://${cleanDomain}`);
      htmlContent = await htmlRes.text();
    } catch (e) {
      console.log('Could not fetch HTML:', e.message);
    }

    // Run all API calls in parallel
    const [securityHeadersData, sslLabsData, llmAnalysis] = await Promise.allSettled([
      
      // SecurityHeaders.com - Get actual HTTP headers from the domain
      fetch(`https://${cleanDomain}`, {
        method: 'HEAD'
      }).then(res => {
        const headers = {};
        res.headers.forEach((value, key) => {
          if (key.toLowerCase().includes('security') || 
              key.toLowerCase().includes('policy') || 
              key.toLowerCase().includes('frame') ||
              key.toLowerCase().includes('content') ||
              key.toLowerCase().includes('transport') ||
              key.toLowerCase().includes('referrer') ||
              key.toLowerCase().includes('xss') ||
              key.toLowerCase().includes('permission') ||
              key.toLowerCase().includes('feature') ||
              key.toLowerCase().includes('origin') ||
              key.toLowerCase().includes('expect')) {
            headers[key.toLowerCase()] = value;
          }
        });
        // Calculate grade based on headers present
        let score = 50;
        if (headers['content-security-policy']) score += 10;
        if (headers['x-frame-options']) score += 10;
        if (headers['x-content-type-options']) score += 10;
        if (headers['strict-transport-security']) score += 15;
        if (headers['referrer-policy']) score += 5;
        const gradeMap = {100: 'A+', 95: 'A', 85: 'A-', 75: 'B', 65: 'C', 50: 'D'};
        headers.grade = Object.entries(gradeMap).find(([s]) => score >= s)?.[1] || 'F';
        return headers;
      }).catch(() => null),
      
      // SSL Labs (just initiate, results take time)
      fetch(`https://api.ssllabs.com/api/v3/analyze?host=${cleanDomain}&startNew=on&all=done`)
        .then(res => res.json()).catch(() => null),

      // LLM Analysis
      htmlContent ? base44.asServiceRole.integrations.Core.InvokeLLM({
        prompt: `Analyze this website and provide a comprehensive assessment. Website: ${cleanDomain}

      HTML Content (first 15000 chars):
      ${htmlContent.substring(0, 15000)}

      Analyze:
      1. SEO optimization (meta tags, structured data, page titles, descriptions)
      2. Accessibility (ARIA labels, alt text, semantic HTML)
      3. Performance indicators (scripts, resources, page structure)
      4. Content quality (headings, structure, readability)
      5. Mobile responsiveness indicators
      6. User experience elements

      Provide specific findings with examples from the code.`,
        response_json_schema: {
          type: "object",
          properties: {
            seo: {
              type: "object",
              properties: {
                score: { type: "number" },
                passed: { type: "array", items: { type: "string" } },
                failed: { type: "array", items: { type: "string" } }
              }
            },
            accessibility: {
              type: "object",
              properties: {
                score: { type: "number" },
                passed: { type: "array", items: { type: "string" } },
                failed: { type: "array", items: { type: "string" } }
              }
            },
            performance: {
              type: "object",
              properties: {
                score: { type: "number" },
                passed: { type: "array", items: { type: "string" } },
                failed: { type: "array", items: { type: "string" } }
              }
            },
            content: {
              type: "object",
              properties: {
                score: { type: "number" },
                passed: { type: "array", items: { type: "string" } },
                failed: { type: "array", items: { type: "string" } }
              }
            },
            mobile: {
              type: "object",
              properties: {
                score: { type: "number" },
                passed: { type: "array", items: { type: "string" } },
                failed: { type: "array", items: { type: "string" } }
              }
            }
          }
        }
      }).catch(() => null) : Promise.resolve(null)
      ]);

    // Calculate scores based on API responses
    const gradeToScore = { 'A+': 100, 'A': 95, 'B': 85, 'C': 75, 'D': 65, 'F': 50 };
    
    // Security Headers grade to score
    const secHeadersGrade = securityHeadersData.status === 'fulfilled' && securityHeadersData.value?.grade
      ? securityHeadersData.value.grade : 'C';
    const secHeadersScore = gradeToScore[secHeadersGrade] || 70;

    // SSL Labs score
    const sslScore = sslLabsData.status === 'fulfilled' && sslLabsData.value?.endpoints?.[0]?.grade
      ? gradeToScore[sslLabsData.value.endpoints[0].grade] || 75
      : 75;

    // Extract ALL data from APIs and map to categories
    const extractIssues = () => {
      const issues = {
        securityHeaders: { passed: [], failed: [] },
        sslTls: { passed: [], failed: [] },
        seo: { passed: [], failed: [] },
        accessibility: { passed: [], failed: [] },
        performance: { passed: [], failed: [] },
        content: { passed: [], failed: [] },
        mobile: { passed: [], failed: [] }
      };

      // SECURITY HEADERS - Extract EVERY header with full details
      if (securityHeadersData.status === 'fulfilled' && securityHeadersData.value) {
        const data = securityHeadersData.value;
        
        // Content-Security-Policy
        if (data['content-security-policy']) {
          issues.securityHeaders.passed.push(`Content-Security-Policy: ${data['content-security-policy']}`);
        } else {
          issues.securityHeaders.failed.push('Content-Security-Policy: Missing');
        }
        
        // X-Frame-Options
        if (data['x-frame-options']) {
          issues.securityHeaders.passed.push(`X-Frame-Options: ${data['x-frame-options']}`);
        } else {
          issues.securityHeaders.failed.push('X-Frame-Options: Missing');
        }
        
        // X-Content-Type-Options
        if (data['x-content-type-options']) {
          issues.securityHeaders.passed.push(`X-Content-Type-Options: ${data['x-content-type-options']}`);
        } else {
          issues.securityHeaders.failed.push('X-Content-Type-Options: Missing');
        }
        
        // HSTS
        if (data['strict-transport-security']) {
          issues.securityHeaders.passed.push(`Strict-Transport-Security: ${data['strict-transport-security']}`);
        } else {
          issues.securityHeaders.failed.push('Strict-Transport-Security: Missing');
        }
        
        // Referrer-Policy
        if (data['referrer-policy']) {
          issues.securityHeaders.passed.push(`Referrer-Policy: ${data['referrer-policy']}`);
        } else {
          issues.securityHeaders.failed.push('Referrer-Policy: Missing');
        }
        
        // Permissions-Policy
        if (data['permissions-policy']) {
          issues.securityHeaders.passed.push(`Permissions-Policy: ${data['permissions-policy']}`);
        } else if (data['feature-policy']) {
          issues.securityHeaders.passed.push(`Feature-Policy: ${data['feature-policy']}`);
        } else {
          issues.securityHeaders.failed.push('Permissions-Policy: Missing');
        }
        
        // X-XSS-Protection
        if (data['x-xss-protection']) {
          issues.securityHeaders.passed.push(`X-XSS-Protection: ${data['x-xss-protection']}`);
        }
        
        // Cross-Origin headers
        if (data['cross-origin-embedder-policy']) {
          issues.securityHeaders.passed.push(`Cross-Origin-Embedder-Policy: ${data['cross-origin-embedder-policy']}`);
        }
        if (data['cross-origin-opener-policy']) {
          issues.securityHeaders.passed.push(`Cross-Origin-Opener-Policy: ${data['cross-origin-opener-policy']}`);
        }
        if (data['cross-origin-resource-policy']) {
          issues.securityHeaders.passed.push(`Cross-Origin-Resource-Policy: ${data['cross-origin-resource-policy']}`);
        }
        
        // Expect-CT
        if (data['expect-ct']) {
          issues.securityHeaders.passed.push(`Expect-CT: ${data['expect-ct']}`);
        }
        
        // Overall grade
        if (data.grade) {
          issues.securityHeaders.passed.push(`Overall Grade: ${data.grade}`);
        }
      } else {
        issues.securityHeaders.failed.push('Security headers scan failed');
      }

      // SSL LABS - Extract EVERY detail about SSL/TLS
      if (sslLabsData.status === 'fulfilled' && sslLabsData.value?.endpoints?.[0]) {
        const endpoint = sslLabsData.value.endpoints[0];
        const grade = endpoint.grade;
        const details = endpoint.details;
        
        // Overall SSL grade
        if (grade) {
          issues.sslTls.passed.push(`Overall Grade: ${grade}`);
        }
        
        // TLS Protocol versions
        if (details?.protocols) {
          details.protocols.forEach(proto => {
            issues.sslTls.passed.push(`Protocol: ${proto.name} ${proto.version}`);
          });
        }
        
        // Certificate details
        if (details?.cert) {
          const cert = details.cert;
          
          if (cert.subject) {
            issues.sslTls.passed.push(`Certificate Subject: ${cert.subject}`);
          }
          
          if (cert.issuerLabel) {
            issues.sslTls.passed.push(`Issuer: ${cert.issuerLabel}`);
          }
          
          if (cert.notBefore && cert.notAfter) {
            const notAfter = new Date(cert.notAfter);
            const daysUntilExpiry = Math.floor((notAfter - new Date()) / (1000 * 60 * 60 * 24));
            issues.sslTls.passed.push(`Valid for ${daysUntilExpiry} more days`);
          }
          
          if (cert.keyAlg && cert.keySize) {
            issues.sslTls.passed.push(`Key: ${cert.keyAlg} ${cert.keySize}-bit`);
          }
          
          if (cert.sigAlg) {
            issues.sslTls.passed.push(`Signature: ${cert.sigAlg}`);
          }
          
          if (cert.issues !== undefined) {
            if (cert.issues === 0) {
              issues.sslTls.passed.push('Certificate Issues: None');
            } else {
              issues.sslTls.failed.push(`Certificate has ${cert.issues} issue(s)`);
            }
          }
        }
        
        // Cipher suites
        if (details?.suites?.list) {
          const suites = details.suites.list;
          issues.sslTls.passed.push(`${suites.length} cipher suites supported`);
          const weakCiphers = suites.filter(s => s.q === 0 || (s.cipherStrength && s.cipherStrength < 128));
          if (weakCiphers.length > 0) {
            issues.sslTls.failed.push(`${weakCiphers.length} weak cipher(s) detected`);
          }
        }
        
        // Vulnerability checks
        if (details?.vulnBeast !== undefined) {
          issues.sslTls[details.vulnBeast ? 'failed' : 'passed'].push(`BEAST: ${details.vulnBeast ? 'Vulnerable' : 'Not vulnerable'}`);
        }
        if (details?.poodle !== undefined) {
          issues.sslTls[details.poodle ? 'failed' : 'passed'].push(`POODLE: ${details.poodle ? 'Vulnerable' : 'Not vulnerable'}`);
        }
        if (details?.heartbleed !== undefined) {
          issues.sslTls[details.heartbleed ? 'failed' : 'passed'].push(`Heartbleed: ${details.heartbleed ? 'Vulnerable' : 'Not vulnerable'}`);
        }
        if (details?.freak !== undefined) {
          issues.sslTls[details.freak ? 'failed' : 'passed'].push(`FREAK: ${details.freak ? 'Vulnerable' : 'Not vulnerable'}`);
        }
        if (details?.logjam !== undefined) {
          issues.sslTls[details.logjam ? 'failed' : 'passed'].push(`Logjam: ${details.logjam ? 'Vulnerable' : 'Not vulnerable'}`);
        }
        if (details?.drownVulnerable !== undefined) {
          issues.sslTls[details.drownVulnerable ? 'failed' : 'passed'].push(`DROWN: ${details.drownVulnerable ? 'Vulnerable' : 'Not vulnerable'}`);
        }
        
        // Forward secrecy
        if (details?.forwardSecrecy !== undefined) {
          issues.sslTls.passed.push(`Forward Secrecy: Level ${details.forwardSecrecy}`);
        }
        
        // HSTS
        if (details?.hstsPolicy) {
          const hsts = details.hstsPolicy;
          if (hsts.status === 'present') {
            issues.sslTls.passed.push(`HSTS: Present (max-age=${hsts.maxAge}s)`);
            if (hsts.includeSubDomains) {
              issues.sslTls.passed.push('HSTS includes subdomains');
            }
            if (hsts.preload) {
              issues.sslTls.passed.push('HSTS preload enabled');
            }
          } else {
            issues.sslTls.failed.push('HSTS: Not configured');
          }
        }
        
        // RC4
        if (details?.supportsRc4 === false) {
          issues.sslTls.passed.push('RC4: Disabled');
        } else if (details?.supportsRc4 === true) {
          issues.sslTls.failed.push('RC4: Enabled (insecure)');
        }
        
      } else if (sslLabsData.status === 'fulfilled' && sslLabsData.value?.status === 'IN_PROGRESS') {
        issues.sslTls.passed.push('SSL/TLS analysis in progress...');
      } else {
        issues.sslTls.failed.push('SSL Labs scan failed or unavailable');
      }

      // LLM ANALYSIS - Content, SEO, Accessibility, Performance
      if (llmAnalysis.status === 'fulfilled' && llmAnalysis.value) {
        const data = llmAnalysis.value;
        
        if (data.seo) {
          issues.seo.passed = data.seo.passed || [];
          issues.seo.failed = data.seo.failed || [];
        }
        
        if (data.accessibility) {
          issues.accessibility.passed = data.accessibility.passed || [];
          issues.accessibility.failed = data.accessibility.failed || [];
        }
        
        if (data.performance) {
          issues.performance.passed = data.performance.passed || [];
          issues.performance.failed = data.performance.failed || [];
        }
        
        if (data.content) {
          issues.content.passed = data.content.passed || [];
          issues.content.failed = data.content.failed || [];
        }
        
        if (data.mobile) {
          issues.mobile.passed = data.mobile.passed || [];
          issues.mobile.failed = data.mobile.failed || [];
        }
      }

      return issues;
    };

    const detailedIssues = extractIssues();

    // Calculate LLM scores
    const llmScores = llmAnalysis.status === 'fulfilled' && llmAnalysis.value ? llmAnalysis.value : null;

    // Build detailed results
    const results = {
      domain: cleanDomain,
      securityHeadersGrade: secHeadersGrade,
      sslLabsGrade: sslLabsData.status === 'fulfilled' && sslLabsData.value?.endpoints?.[0]?.grade 
        ? sslLabsData.value.endpoints[0].grade 
        : null,
      seoScore: llmScores?.seo?.score || null,
      accessibilityScore: llmScores?.accessibility?.score || null,
      performanceScore: llmScores?.performance?.score || null,
      contentScore: llmScores?.content?.score || null,
      mobileScore: llmScores?.mobile?.score || null,
      issues: detailedIssues,
      rawData: {
        securityHeaders: securityHeadersData.status === 'fulfilled' ? securityHeadersData.value : null,
        sslLabs: sslLabsData.status === 'fulfilled' ? sslLabsData.value : null,
        llmAnalysis: llmScores
      }
    };

    return Response.json(results);
  } catch (error) {
    console.error('Validation error:', error);
    return Response.json({ error: error.message }, { status: 500 });
  }
});