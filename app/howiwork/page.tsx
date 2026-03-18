'use client';

import Navigation from '@/components/Common/Nav/Nav';
import HowIWorkHero from '@/components/HowIWork/Hero/Hero';
import SystemsThinking from '@/components/HowIWork/SystemsThinking/SystemsThinking';
import RealWorldExample from '@/components/HowIWork/RealWorldExample/RealWorldExample';
import TechnicalApproach from '@/components/HowIWork/TechnicalApproach/TechnicalApproach';
import ClientValue from '@/components/HowIWork/ClientValue/ClientValue';
import ProofSection from '@/components/HowIWork/ProofSection/ProofSection';
import HowIWorkCTA from '@/components/HowIWork/CTA/CTA';

export default function HowIWorkPage() {
  return (
    <main className="relative min-h-screen w-full bg-black text-white selection:bg-emerald-500/30 overflow-hidden font-sans">
      <Navigation />

      {/* Background Grid - Portfolio Standard */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        
        {/* Subtle Emerald Glow - Portfolio Standard */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10">
        <HowIWorkHero />
        {/* <SystemsThinking /> */}
        <RealWorldExample />
        <TechnicalApproach />
        <ClientValue />
        <ProofSection />
        <HowIWorkCTA />
      </div>

      {/* Subtle Grain Overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.02] bg-black" />
    </main>
  );
}
