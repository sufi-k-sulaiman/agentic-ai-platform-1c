import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import ProductsSection from '@/components/home/ProductsSection';
import SolutionsSection from '@/components/home/SolutionsSection';
import CTASection from '@/components/home/CTASection';
import PageMeta from '@/components/PageMeta';

export default function Home() {
  return (
    <div className="bg-white">
      <PageMeta 
        title="Home"
        description="Transform your business with Agentic AI. Autonomous AI agents that think, decide, and act. 500+ enterprises trust our platform."
        url="/"
        keywords={['Agentic AI', 'AI platform', 'autonomous AI', 'enterprise AI', 'AI automation', 'business intelligence']}
      />
      <HeroSection />
      <FeaturesSection />
      <ProductsSection />
      <SolutionsSection />
      <CTASection />
    </div>
  );
}