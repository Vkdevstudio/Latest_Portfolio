import Navigation from '@/components/Common/Nav/Nav'
import About from '@/components/Home/About/About'
import Competencies from '@/components/Home/Competencies/Competencies'
import CTA from '@/components/Home/CTA/CTA'
import Experience from '@/components/Home/Experience/Experience'
import FeaturedProject from '@/components/Home/FeaturedProjects/FeaturedProjects'
import Hero from '@/components/Home/Hero/Hero'
import Impact from '@/components/Home/Impact/Impact'
import Learning from '@/components/Home/Learning/Learning'
import TechnicalDepth from '@/components/Home/TechnicalDepth/TechnicalDepth'
import { project } from '@/lib/featureset'

import { buildMetadata, PAGE_SEO } from '@/lib/seo';

export const metadata = buildMetadata(PAGE_SEO.home);

const page = () => {
  return (
    <>
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
    
  )
}

export default page