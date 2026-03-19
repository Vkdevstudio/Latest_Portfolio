import dynamic from 'next/dynamic';
import { buildMetadata, PAGE_SEO, BREADCRUMBS } from '@/lib/seo';
import { project } from '@/lib/featureset';

import Navigation from '@/components/Common/Nav/Nav';
import Hero from '@/components/Home/Hero/Hero';


const About = dynamic(() => import('@/components/Home/About/About'));
const Competencies = dynamic(() => import('@/components/Home/Competencies/Competencies'));
const FeaturedProject = dynamic(() => import('@/components/Home/FeaturedProjects/FeaturedProjects'));
const Experience = dynamic(() => import('@/components/Home/Experience/Experience'));
const TechnicalDepth = dynamic(() => import('@/components/Home/TechnicalDepth/TechnicalDepth'));
const Learning = dynamic(() => import('@/components/Home/Learning/Learning'));
const Impact = dynamic(() => import('@/components/Home/Impact/Impact'));
const CTA = dynamic(() => import('@/components/Home/CTA/CTA'));

export const metadata = buildMetadata(PAGE_SEO.home);

const Page = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMBS.work) }}
      />
      <main className="relative">
        <Navigation />
        <Hero />
        <About />
        <Competencies />
        <FeaturedProject data={project} />
        <Experience />
        <TechnicalDepth />
        <Learning />
        <Impact />
        <CTA />
        <footer className="max-w-7xl mx-auto px-6 py-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] font-bold text-neutral-600 uppercase tracking-[0.3em] gap-2 md:gap-0">
          <span>© 2026 Vinod Kumar // Crafting digital experiences</span>
          <span>Shaping ideas into interactive journeys</span>
        </footer>
      </main>
    </>
  );
};

export default Page;