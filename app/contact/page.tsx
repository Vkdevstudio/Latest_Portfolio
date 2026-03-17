'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Briefcase, Target, Users, Lightbulb, Copy, Check, ExternalLink, MapPin, IndianRupee, Zap, Brain } from 'lucide-react';
import Navigation from '@/components/Common/Nav/Nav';

export default function ContactPage() {
  const [copied, setCopied] = useState(false);
  const [chennaiTime, setChennaiTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setChennaiTime(new Intl.DateTimeFormat('en-US', options).format(new Date()));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText('vk5241415@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1]  as const} },
  };

  return (
    <main className="min-h-screen bg-[#000000] text-white selection:bg-[#00E5CC]/30 selection:text-white relative overflow-hidden">
      {/* Noise Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-50"></div>
      
      <Navigation />

      {/* Hero Section */}
      <section className="min-h-[70vh] flex flex-col items-center justify-center px-6 pt-32 pb-20 relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="px-4 py-1.5 rounded-full border border-[#00E5CC]/30 bg-[#00E5CC]/5 flex items-center gap-2 shadow-[0_0_20px_rgba(0,229,204,0.2)] animate-pulse">
            <div className="w-2 h-2 rounded-full bg-[#00E5CC] shadow-[0_0_10px_#00E5CC]"></div>
            <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#00E5CC]">Available Now</span>
          </div>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-[48px] md:text-[96px] font-bold tracking-[-0.02em] leading-[1.1] text-center mb-8"
        >
          LET&apos;S BUILD <br />
          <span className="bg-gradient-to-r from-white to-[#00E5CC] bg-clip-text text-transparent">SOMETHING.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-neutral-400 text-sm md:text-lg tracking-wide text-center max-w-xl"
        >
          Currently open for opportunities in Chennai & Bengaluru
        </motion.p>

        {/* Background Grid Pattern */}
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </section>

      {/* Quick Stats Banner */}
      <section className="border-y border-[#00E5CC]/20 bg-gradient-to-b from-[#00E5CC]/[0.02] to-transparent py-6 mb-[120px]">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-4">
          <div className="flex items-center gap-3">
            <MapPin className="w-4 h-4 text-white/60" />
            <span className="text-xs font-medium uppercase tracking-widest">Chennai, India</span>
          </div>
          <div className="hidden md:block h-6 w-[1px] bg-white/10"></div>
          <div className="flex items-center gap-3">
            <IndianRupee className="w-4 h-4 text-white/60" />
            <span className="text-xs font-medium uppercase tracking-widest">7 LPA+</span>
          </div>
          <div className="hidden md:block h-6 w-[1px] bg-white/10"></div>
          <div className="flex items-center gap-3">
            <Zap className="w-4 h-4 text-white/60" />
            <span className="text-xs font-medium uppercase tracking-widest">Immediate</span>
          </div>
          <div className="hidden md:block h-6 w-[1px] bg-white/10"></div>
          <div className="flex items-center gap-3">
            <Brain className="w-4 h-4 text-white/60" />
            <span className="text-xs font-medium uppercase tracking-widest">AI/ML Focus</span>
          </div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="max-w-[1200px] mx-auto px-6 mb-[120px]">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* Email Card */}
          <motion.div variants={itemVariants} className="group p-10 rounded-lg bg-[#0F0F0F] border border-white/10 hover:border-[#00E5CC]/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(0,229,204,0.2)]">
            <div className="mb-8 flex items-center justify-between">
              <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center text-[#00E5CC]">
                <Mail className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-medium uppercase tracking-widest text-white/40">Email</span>
            </div>
            <h3 className="text-lg font-medium mb-8 truncate">vk5241415@gmail.com</h3>
            <button 
              onClick={copyEmail}
              className="w-full py-3 rounded border border-[#00E5CC]/30 text-[12px] font-medium uppercase tracking-widest text-white hover:bg-[#00E5CC] hover:text-black transition-all duration-300 flex items-center justify-center gap-2"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  Copy Email
                </>
              )}
            </button>
          </motion.div>

          {/* LinkedIn Card */}
          <motion.div variants={itemVariants} className="group p-10 rounded-lg bg-[#0F0F0F] border border-white/10 hover:border-[#00E5CC]/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(0,229,204,0.2)]">
            <div className="mb-8 flex items-center justify-between">
              <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center text-[#00E5CC]">
                <Linkedin className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-medium uppercase tracking-widest text-white/40">LinkedIn</span>
            </div>
            <h3 className="text-lg font-medium mb-8">/vinodkumar</h3>
            <a 
              href="https://linkedin.com/in/vinodkumar" 
              target="_blank"
              className="w-full py-3 rounded border border-[#00E5CC]/30 text-[12px] font-medium uppercase tracking-widest text-white hover:bg-[#00E5CC] hover:text-black transition-all duration-300 flex items-center justify-center gap-2"
            >
              <ExternalLink className="w-4 h-4" />
              View Profile
            </a>
          </motion.div>

          {/* GitHub Card */}
          <motion.div variants={itemVariants} className="group p-10 rounded-lg bg-[#0F0F0F] border border-white/10 hover:border-[#00E5CC]/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(0,229,204,0.2)]">
            <div className="mb-8 flex items-center justify-between">
              <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center text-[#00E5CC]">
                <Github className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-medium uppercase tracking-widest text-white/40">Code</span>
            </div>
            <h3 className="text-lg font-medium mb-8">/github</h3>
            <a 
              href="https://github.com" 
              target="_blank"
              className="w-full py-3 rounded border border-[#00E5CC]/30 text-[12px] font-medium uppercase tracking-widest text-white hover:bg-[#00E5CC] hover:text-black transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Github className="w-4 h-4" />
              Explore
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Reach Out Topics */}
      <section className="max-w-[1200px] mx-auto px-6 mb-[120px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-[32px] md:text-[48px] font-bold uppercase tracking-[0.1em] mb-4">Reach Out For</h2>
          <div className="h-1 w-20 bg-[#00E5CC]"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-lg overflow-hidden">
          <div className="group p-10 bg-[#000000] hover:bg-[#00E5CC]/[0.02] transition-all duration-500">
            <Briefcase className="w-8 h-8 text-[#00E5CC] mb-6" />
            <h3 className="text-xl font-bold mb-3">Full-Time Roles</h3>
            <p className="text-neutral-500 text-sm leading-relaxed">React, Node.js, AI/ML. Looking for teams building the future of web and intelligence.</p>
          </div>
          <div className="group p-10 bg-[#000000] hover:bg-[#00E5CC]/[0.02] transition-all duration-500">
            <Target className="w-8 h-8 text-[#00E5CC] mb-6" />
            <h3 className="text-xl font-bold mb-3">Technical Discussions</h3>
            <p className="text-neutral-500 text-sm leading-relaxed">Architecture, scaling, and system design. Always down to talk shop and solve puzzles.</p>
          </div>
          <div className="group p-10 bg-[#000000] hover:bg-[#00E5CC]/[0.02] transition-all duration-500">
            <Users className="w-8 h-8 text-[#00E5CC] mb-6" />
            <h3 className="text-xl font-bold mb-3">Open Source</h3>
            <p className="text-neutral-500 text-sm leading-relaxed">Collaboration welcome. Let&apos;s build tools that help the developer community grow.</p>
          </div>
          <div className="group p-10 bg-[#000000] hover:bg-[#00E5CC]/[0.02] transition-all duration-500">
            <Lightbulb className="w-8 h-8 text-[#00E5CC] mb-6" />
            <h3 className="text-xl font-bold mb-3">Freelance/Contract</h3>
            <p className="text-neutral-500 text-sm leading-relaxed">Short-term projects. Helping startups and businesses ship high-quality MVPs fast.</p>
          </div>
        </div>
      </section>

      {/* Response Timeline Card */}
      <section className="max-w-[1200px] mx-auto px-6 mb-[120px]">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-[600px] mx-auto p-12 rounded-lg bg-[#0F0F0F] border border-[#00E5CC]/30 text-center relative group"
        >
          <div className="absolute inset-0 rounded-lg shadow-[0_0_30px_rgba(0,229,204,0.1)] group-hover:shadow-[0_0_50px_rgba(0,229,204,0.15)] transition-all duration-500 pointer-events-none"></div>
          
          <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/40 mb-8 block">Response Time</span>
          
          <h3 className="text-2xl font-medium mb-4">Usually within 24 hours</h3>
          <p className="text-neutral-500 text-sm mb-12">Best reach: 10 AM - 6 PM IST</p>
          
          <div className="pt-8 border-t border-white/5">
            <div className="flex flex-col items-center gap-2">
              <span className="text-[10px] font-medium uppercase tracking-widest text-[#00E5CC]">Current Time in Chennai</span>
              <span className="text-3xl font-bold tabular-nums tracking-tight">{chennaiTime}</span>
            </div>
          </div>
        </motion.div>
      </section>

     
      <footer className="max-w-[1200px] mx-auto px-6 py-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-neutral-500 text-xs uppercase tracking-widest">© 2024 Vinod Kumar</p>
        <div className="flex gap-8">
          <a href="#" className="text-neutral-500 hover:text-[#00E5CC] text-xs uppercase tracking-widest transition-colors">Twitter</a>
          <a href="#" className="text-neutral-500 hover:text-[#00E5CC] text-xs uppercase tracking-widest transition-colors">Instagram</a>
          <a href="#" className="text-neutral-500 hover:text-[#00E5CC] text-xs uppercase tracking-widest transition-colors">Dribbble</a>
        </div>
      </footer>
    </main>
  );
}
