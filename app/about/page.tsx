import AboutCTA from "@/components/About/AboutCTA/AboutCTA";
import AboutHero from "@/components/About/AboutHeader/AboutHeader";
import Challenges from "@/components/About/Challenges/Challenges";
import CoreValues from "@/components/About/CoreValues/CoreValues";
import FutureVision from "@/components/About/FutureVision/FutureVision";
import OriginStory from "@/components/About/OriginStory/OriginStory";
import TechnicalFoundation from "@/components/About/TechicalFoundation/TechicalFoundation";
import WhyICode from "@/components/About/WhyICode/WhyICode";
import Navigation from "@/components/Common/Nav/Nav";


export default function AboutPage() {
  return (
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
  );
}
