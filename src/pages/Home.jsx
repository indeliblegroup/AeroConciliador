import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import MetricsSection from '@/components/home/MetricsSection';
import HowItWorksSection from '@/components/home/HowItWorksSection';
import ValuePropositionSection from '@/components/home/ValuePropositionSection';
import TechnologySection from '@/components/home/TechnologySection';
import CTASection from '@/components/home/CTASection';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <MetricsSection />
      <HowItWorksSection />
      <ValuePropositionSection />
      <TechnologySection />
      <CTASection />
    </div>
  );
}