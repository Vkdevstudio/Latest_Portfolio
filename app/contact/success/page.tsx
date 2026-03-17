/* eslint-disable react/no-unescaped-entities */
'use client';

import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Navigation from '@/components/Common/Nav/Nav';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const checkmarkVariants = {
  hidden: { scale: 0, rotate: -180 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 15,
      delay: 0.3
    } as const
  }
};

export default function SuccessPage() {
  const router = useRouter();

  // Optional: Auto-redirect after 15 seconds
  useEffect(() => {
    // Uncomment if you want auto-redirect:
    // const timer = setTimeout(() => router.push('/'), 15000);
    // return () => clearTimeout(timer);
  }, [router]);

  return (
    <main className="min-h-screen bg-black text-white selection:bg-emerald-500/30 font-sans flex flex-col">
      <Navigation />

      <div className="flex-1 flex items-center justify-center px-6 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-2xl w-full text-center space-y-8"
        >
          {/* Checkmark Icon */}
          <motion.div variants={checkmarkVariants} className="flex justify-center">
            <div className="relative w-20 h-20">
              <motion.div
                animate={{
                  boxShadow: [
                    '0 0 0 0 rgba(52, 211, 153, 0.4)',
                    '0 0 0 20px rgba(52, 211, 153, 0)',
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0"
              >
                <CheckCircle2 className="w-full h-full text-emerald-400" strokeWidth={1.5} />
              </motion.div>
            </div>
          </motion.div>

          {/* Heading */}
          <motion.div variants={itemVariants} className="space-y-3">
            <h1 className="text-5xl md:text-6xl font-black tracking-tight">
              Got It! ✓
            </h1>
            <p className="text-xl text-neutral-400 leading-relaxed">
              Your message is on its way. I'll read it carefully and get back to you.
            </p>
          </motion.div>

          {/* Main Message */}
          <motion.div
            variants={itemVariants}
            className="bg-white/[0.02] border border-white/10 rounded-2xl p-8 md:p-12 backdrop-blur-sm space-y-6"
          >
            <div className="space-y-4">
              <p className="text-lg text-neutral-300 leading-relaxed">
                I usually respond within <span className="text-emerald-400 font-semibold">24 hours</span> with specific ideas, insights, and next steps.
              </p>
              <p className="text-sm text-neutral-500">
                Weekdays 10 AM - 6 PM IST. If your inquiry is time-sensitive, feel free to reach out on LinkedIn or drop a personal email.
              </p>
            </div>
          </motion.div>

          {/* What Happens Next */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h2 className="text-lg font-semibold text-white">What Happens Next</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  number: '01',
                  title: 'I\'ll Read',
                  description: 'Understanding your opportunity, tech stack, and goals in detail.'
                },
                {
                  number: '02',
                  title: 'I\'ll Assess',
                  description: 'Evaluating if we\'re a great fit for each other and how I can add value.'
                },
                {
                  number: '03',
                  title: 'I\'ll Respond',
                  description: 'With specific ideas, approach, timeline, and next steps.'
                }
              ].map((step, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="bg-white/[0.02] border border-white/10 rounded-xl p-6 space-y-3 text-left"
                >
                  <div className="text-2xl font-black text-emerald-400">{step.number}</div>
                  <h3 className="font-semibold text-white">{step.title}</h3>
                  <p className="text-sm text-neutral-400 leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Privacy Note */}
          <motion.div
            variants={itemVariants}
            className="text-sm text-neutral-500 space-y-2 text-center px-6"
          >
            <p>🔒 Your privacy is important to me. No spam, no sharing data.</p>
            <p>I respect your information and only use it to follow up on this opportunity.</p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col md:flex-row gap-4 justify-center pt-6">
            <a
              href="/work"
              className="flex items-center justify-center gap-2 px-8 py-3 bg-white/[0.05] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 rounded-lg font-medium transition-all group"
            >
              View My Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/about"
              className="flex items-center justify-center gap-2 px-8 py-3 bg-white/[0.05] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 rounded-lg font-medium transition-all group"
            >
              Read My Story
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://calendly.com/vinodkumar/chat"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-8 py-3 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 hover:border-emerald-500/50 rounded-lg font-medium text-emerald-400 transition-all group"
            >
              Schedule a Call
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Back Button */}
          <motion.div variants={itemVariants}>
            <button
              onClick={() => router.push('/')}
              className="text-sm text-neutral-500 hover:text-neutral-300 transition-colors"
            >
              ← Return to Home
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto w-full px-6 py-8 border-t border-white/10 text-center">
        <p className="text-neutral-600 text-xs font-medium tracking-wide">
          © {new Date().getFullYear()} Vinod Kumar. All rights reserved.
        </p>
      </footer>
    </main>
  );
}