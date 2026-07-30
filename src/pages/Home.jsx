import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import ProductsSection from '@/components/home/ProductsSection';
import SolutionsSection from '@/components/home/SolutionsSection';
import CTASection from '@/components/home/CTASection';
import PageMeta from '@/components/PageMeta';
import RelatedContent from '@/components/seo/RelatedContent';
import ContentParagraphs from '@/components/home/ContentParagraphs';

export default function Home() {
  return (
    <div className="bg-white">
      <PageMeta 
        title="Home"
        description="Transform your business with Agentic AI. Autonomous AI agents that think, decide, and act. 500+ enterprises trust our platform."
        url="/"
        keywords={['Agentic AI', 'AI platform', 'autonomous AI', 'enterprise AI', 'AI automation', 'business intelligence']}
        image="https://images.unsplash.com/photo-1677443339387-014f0b8d18e3?w=1200&h=630&fit=crop"
        speakable={{ cssSelectors: ['h1', 'h2', '.hero-title'] }}
        schemas={[
          {
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            potentialAction: {
              '@type': 'SubscribeAction',
              target: 'https://1cplatform.com/onboarding',
            },
          }
        ]}
        faq={[
          { question: 'What is Agentic AI?', answer: 'Agentic AI is autonomous AI that can think, decide, and act independently. Unlike traditional AI that only generates responses, agentic AI agents can execute multi-step workflows, integrate with external tools, and make complex decisions.' },
          { question: 'How does 1C Platform integrate with existing tools?', answer: '1C Platform integrates with 500+ enterprise tools including Salesforce, Microsoft 365, Google Workspace, Slack, SAP, Oracle, Workday, ServiceNow, Jira, HubSpot, and more. Use our SDK, REST API, or no-code builder to connect any system.' },
          { question: 'Is there a free trial?', answer: 'Yes, our Starter plan is free forever with 1,000 API calls per month, 1 AI agent, and community support. You can also request a 30-day enterprise trial with full features and dedicated support.' },
          { question: 'How secure is my data?', answer: '1C Platform is SOC 2 Type II certified, ISO 27001 compliant, and GDPR/HIPAA ready. Your data is encrypted at rest and in transit, with optional on-premise or hybrid deployment for sensitive workloads.' },
          { question: 'What industries does 1C Platform support?', answer: 'We serve 14 industries including property management, healthcare, retail, financial services, data centers, public transit, energy and utilities, corporate campuses, traffic management, education, gaming, government, airports, and sports and entertainment.' },
          { question: 'How fast can I get started?', answer: 'You can sign up for the free Starter plan instantly, or request a 30-day enterprise trial. Most teams deploy their first AI agent within a week using our no-code builder or developer tools.' },
        ]}
      />
      <HeroSection />
      <FeaturesSection />
      <ProductsSection />
      <SolutionsSection />
      <CTASection />
      <ContentParagraphs />
      <RelatedContent
        currentPage="Home"
        crossCategories={['product', 'resources', 'company']}
        title="Explore 1C Platform"
      />
    </div>
  );
}