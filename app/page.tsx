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
import React from 'react'

const page = () => {
  return (
    <main className="relative">
      <Navigation />
      <Hero />
      <About />
      <Competencies />
      <FeaturedProject />
      <Experience />
      <TechnicalDepth />
      <Learning />
      <Impact />
      <CTA />
      
      <footer className="max-w-7xl mx-auto px-6 py-12 border-t border-white/5 flex justify-between items-center text-[10px] font-bold text-neutral-600 uppercase tracking-[0.3em]">
        <span>© 2026 Vinod Kumar</span>
        <span>Built with Next.js & Framer Motion</span>
      </footer>
    </main>
  )
}

export default page