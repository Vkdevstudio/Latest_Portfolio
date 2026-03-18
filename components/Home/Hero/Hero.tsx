'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function Hero() {
  const router=useRouter()

  const Nav=(link:string)=>{
   router.push(`/${link}`)
  }



  const openInNewTab = (link: string) => {
  window.open(`/${link}`, '_blank', 'noopener,noreferrer');
};
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-48 overflow-hidden">
      {/* Background Video Overlay - More prominent */}
      <div className="absolute inset-0 z-0 opacity-30">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover grayscale contrast-125"
        >
          <source src="/home_0.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-black" />
      </div>

      {/* Animated Orbs */}
      <div className="absolute inset-0 z-1">
        <motion.div 
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-[120px]"
        />
        <motion.div 
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[150px]"
        />
      </div>

      <div className="relative z-10 text-center max-w-5xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="mb-8 inline-block"
        >
          <span className="px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-bold tracking-widest uppercase">
            Available for Tech  Roles
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.85]"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 bg-[length:200%_auto] animate-gradient">
           I build fast reliable apps. You focus on your product.
          </span>
        </motion.h1>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12 space-y-4"
        >
          <h2 className="text-xl md:text-2xl font-light text-neutral-300 max-w-2xl mx-auto leading-relaxed">
  Full Stack Developer with <span className="text-white font-bold">2 years shipping production systems</span>.
  Built Healthcare SaaS applications using <span className="text-emerald-400 font-bold">event-driven architectures</span>,
  solving real-world problems with real user traffic.
</h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 flex flex-wrap justify-center gap-4"
        >
          <button onClick={()=>Nav("work")} className="px-8 py-4 cursor-pointer bg-emerald-400 text-black font-black rounded-xl hover:scale-105 transition-transform shadow-[0_0_30px_rgba(52,211,153,0.3)]">
            View My Work
          </button>
          <button onClick={()=>openInNewTab("www.linkedin.com/in/vinod-manimaran")} className="px-8 py-4 bg-white/5 border border-white/10 font-bold rounded-xl hover:bg-white/10 transition-all">
            LinkedIn
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-[10px] font-black tracking-[0.4em] text-neutral-500 uppercase">Scroll</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-emerald-400 to-transparent relative overflow-hidden">
          <motion.div 
            animate={{ y: ['-100%', '100%'] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 right-0 h-1/2 bg-white/50"
          />
        </div>
      </motion.div>
    </section>
  );
}
