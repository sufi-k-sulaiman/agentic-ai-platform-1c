import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import ProductsSection from '@/components/home/ProductsSection';
import SolutionsSection from '@/components/home/SolutionsSection';
import CTASection from '@/components/home/CTASection';

export default function Home() {
  return (
    <div className="bg-white">
      <HeroSection />
      <FeaturesSection />
      <ProductsSection />
      <SolutionsSection />
      <CTASection />
    </div>
  );
}