import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, CheckCircle, ArrowRight, Building2, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageMeta from '@/components/PageMeta';
import RelatedContent from '@/components/seo/RelatedContent';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import FAQSection from '@/components/seo/FAQSection';
import InternalLinker from '@/components/seo/InternalLinker';
import { getFAQs } from '@/lib/seoFAQs';
import { getProgrammaticIndustry, getProgrammaticLocation } from '@/lib/programmaticSEOData';
import { createPageUrl } from '@/utils';

/**
 * ProgrammaticSEO - Dynamic location + service page for local SEO.
 *
 * Route: /ai-for/:industry/in/:location
 * Generates optimized pages targeting local search queries like
 * "AI for healthcare in Toronto" by combining industry vertical data
 * with location data.
 */
export default function ProgrammaticSEO() {
  const { industry: industrySlug, location: locationSlug } = useParams();

  const industry = getProgrammaticIndustry(industrySlug);
  const location = getProgrammaticLocation(locationSlug);

  if (!industry || !location) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Page Not Found</h1>
          <Link to={createPageUrl('Home')}>
            <Button>Return Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  const fullName = `${industry.serviceTitle} in ${location.city}`;
  const metaDescription = `${industry.serviceDescription} Serving ${location.city}, ${location.region}. Local deployment, support, and compliance for ${industry.label.toLowerCase()} organizations.`;

  // Generate location-specific FAQs
  const locationFAQs = [
    {
      question: `Is 1C Platform available for ${industry.label.toLowerCase()} organizations in ${location.city}?`,
      answer: `Yes. 1C Platform serves ${industry.label.toLowerCase()} organizations in ${location.city}, ${location.region} and across ${location.country}. Our cloud platform operates in 32 global regions with local deployment options, data residency controls, and 24/7 support for ${location.city} clients.`,
    },
    {
      question: `How long does it take to deploy 1C Platform in ${location.city}?`,
      answer: `Most ${industry.label.toLowerCase()} organizations in ${location.city} are live in 4–8 weeks. The platform connects to your existing systems via APIs, and no-code agent building means your team can configure workflows without developer involvement. Local support is available throughout deployment.`,
    },
    {
      question: `Does 1C Platform comply with ${location.country} regulations for ${industry.label.toLowerCase()}?`,
      answer: `Yes. 1C Platform includes compliance frameworks for ${location.country} regulations affecting ${industry.label.toLowerCase()}. We offer data residency controls to keep data within ${location.country}, encryption, audit trails, and compliance reporting meeting local regulatory requirements.`,
    },
    {
      question: `What support is available for ${industry.label.toLowerCase()} clients in ${location.city}?`,
      answer: `1C Platform provides 24/7 support for all clients in ${location.city}, including onboarding assistance, technical support, and dedicated customer success management. Our team understands the local ${industry.label.toLowerCase()} landscape and regulatory environment.`,
    },
    ...getFAQs(industry.pageName).slice(0, 3),
  ];

  return (
    <InternalLinker currentPage={industry.pageName}>
      <div className="bg-white">
        <PageMeta
          title={fullName}
          description={metaDescription}
          url={`/ai-for/${industry.slug}/in/${location.slug}`}
          keywords={[
            `${industry.slug} AI ${location.city}`,
            `AI for ${industry.label.toLowerCase()} ${location.city}`,
            `${industry.slug} automation ${location.city}`,
            `${location.city} ${industry.slug} AI platform`,
            `agentic AI ${location.city}`,
          ]}
          breadcrumbs={[
            { name: 'Home', url: '/' },
            { name: industry.label, url: industry.pageName === 'Healthcare' ? '/Healthcare' : `/${industry.pageName}` },
            { name: location.city, url: `/ai-for/${industry.slug}/in/${location.slug}` },
          ]}
          service={{ type: `${industry.serviceTitle} - ${location.city}`, areaServed: location.city }}
          faq={locationFAQs}
        />

        <div className="max-w-7xl mx-auto px-6 pt-8">
          <BreadcrumbNav
            items={[
              { label: 'Home', page: 'Home' },
              { label: industry.label, page: industry.pageName },
              { label: location.city },
            ]}
          />
        </div>

        {/* Hero */}
        <section className="relative py-20 bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
          <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur rounded-full text-sm font-semibold mb-6">
                <MapPin className="w-4 h-4" />
                {location.city}, {location.region}
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                {industry.serviceTitle} in {location.city}
              </h1>
              <p className="text-xl md:text-2xl text-purple-100 mb-10 max-w-3xl mx-auto leading-relaxed">
                {industry.serviceDescription} Trusted by {industry.label.toLowerCase()} organizations in {location.city}, {location.region}.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to={createPageUrl('Onboarding')}>
                  <Button className="bg-white text-purple-900 hover:bg-gray-100 rounded-full px-10 h-14 text-lg font-medium">
                    Get Started <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to={createPageUrl('SavingsCalculator')}>
                  <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 rounded-full px-10 h-14 text-lg">
                    Calculate ROI
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 bg-purple-100 text-[#8B2EE5] rounded-full text-sm font-semibold mb-4">
                Key Benefits
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why {industry.label} in {location.city} Choose 1C Platform
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Proven results for {industry.label.toLowerCase()} organizations in {location.city} and across {location.country}.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {industry.keyBenefits.map((benefit, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl border border-gray-100"
                >
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700 text-lg">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Challenges */}
        <section className="py-20 bg-gray-50 border-t border-gray-100">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 bg-purple-100 text-[#8B2EE5] rounded-full text-sm font-semibold mb-4">
                Challenges We Solve
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Common {industry.label} Challenges in {location.city}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {industry.challenges.map((challenge, idx) => (
                <div key={idx} className="p-6 bg-white rounded-xl border border-gray-200">
                  <div className="flex items-start gap-3">
                    <Building2 className="w-5 h-5 text-[#8B2EE5] flex-shrink-0 mt-1" />
                    <p className="text-gray-700">{challenge}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Location-specific content */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6 space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {industry.serviceTitle} Solutions for {location.city} Organizations
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              1C Platform delivers agentic AI solutions tailored to {industry.label.toLowerCase()} organizations in {location.city}, {location.region}. Our platform combines autonomous AI agents, enterprise-grade security, and compliance frameworks to help {location.city} businesses automate complex workflows, reduce costs, and improve outcomes.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              {location.city} organizations face unique challenges in the {industry.label.toLowerCase()} sector. 1C Platform's AI agents are designed to address these challenges head-on—with local deployment options, data residency controls for {location.country}, and 24/7 support. Whether you're a small organization or a large enterprise in {location.city}, our platform scales to meet your needs.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Our {industry.label.toLowerCase()} AI solutions help {location.city} organizations achieve measurable results: reduced operational costs, improved efficiency, enhanced compliance, and better customer experiences. With no-code agent building, pre-built integrations, and comprehensive governance, 1C Platform makes enterprise AI accessible to every {industry.label.toLowerCase()} organization in {location.city}.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-purple-900 to-indigo-900 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <Zap className="w-12 h-12 mx-auto mb-6 text-purple-300" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to transform your {industry.label.toLowerCase()} operations in {location.city}?
            </h2>
            <p className="text-xl text-purple-100 mb-10 max-w-2xl mx-auto">
              Join leading {industry.label.toLowerCase()} organizations in {location.city} using 1C Platform to automate workflows and drive results.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to={createPageUrl('Onboarding')}>
                <Button className="bg-white text-purple-900 hover:bg-gray-100 rounded-full px-10 h-14 text-lg">
                  Get Started <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to={createPageUrl('Contact')}>
                <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 rounded-full px-10 h-14 text-lg">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <FAQSection
          title={`${industry.serviceTitle} in ${location.city} - FAQ`}
          subtitle={`Answers to common questions about AI for ${industry.label.toLowerCase()} in ${location.city}, ${location.region}.`}
          faqs={locationFAQs}
        />

        <RelatedContent
          currentPage={industry.pageName}
          category="industry"
          crossCategories={['product']}
          title="Explore Related Solutions"
        />
      </div>
    </InternalLinker>
  );
}