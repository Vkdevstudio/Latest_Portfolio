import dynamic from 'next/dynamic';
import Navigation from '@/components/Common/Nav/Nav';
import AboutHero from '@/components/About/AboutHeader/AboutHeader';
import { BREADCRUMBS, buildMetadata, PAGE_SEO } from '@/lib/seo';

export const metadata = buildMetadata(PAGE_SEO.about);


const OriginStory = dynamic(() => import('@/components/About/OriginStory/OriginStory'));
const CoreValues = dynamic(() => import('@/components/About/CoreValues/CoreValues'));
const TechnicalFoundation = dynamic(() => import('@/components/About/TechicalFoundation/TechicalFoundation'));
const WhyICode = dynamic(() => import('@/components/About/WhyICode/WhyICode'));
const Challenges = dynamic(() => import('@/components/About/Challenges/Challenges'));
const FutureVision = dynamic(() => import('@/components/About/FutureVision/FutureVision'));
const AboutCTA = dynamic(() => import('@/components/About/AboutCTA/AboutCTA'));

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMBS.about) }}
      />
      <main className="relative bg-black min-h-screen text-white">
        <Navigation />
        <AboutHero />
        <OriginStory />
        <CoreValues />
        <TechnicalFoundation />
        <WhyICode />
        <Challenges />
        <FutureVision />
        <AboutCTA />
        <footer className="max-w-7xl mx-auto px-6 py-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] font-bold text-neutral-600 uppercase tracking-[0.3em] gap-2 md:gap-0">
          <span>© 2026 Vinod Kumar // Crafting digital experiences</span>
          <span>Shaping ideas into interactive journeys</span>
        </footer>
      </main>
    </>
  );
}