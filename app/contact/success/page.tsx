/* eslint-disable react/no-unescaped-entities */
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, Shield } from 'lucide-react';
import Navigation from '@/components/Common/Nav/Nav';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.3 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

export default function SuccessPage() {
   const router = useRouter();
   const submitted = typeof window !== 'undefined' ? sessionStorage.getItem('contact_submitted') : null;

  useEffect(() => {
    if (!submitted) {
      router.replace('/contact');
      return;
    }

    sessionStorage.removeItem('contact_submitted');
  }, [submitted, router]);

  if (!submitted) {
    return null;
  }

  return (
    <main className="min-h-screen bg-black text-white selection:bg-emerald-500/30 font-sans flex flex-col">
      <Navigation />

      <div className="flex-1 flex items-center justify-center px-6 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full max-w-2xl text-center space-y-12"
        >
          {/* Checkmark */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.3 }}
            className="flex justify-center"
          >
            <div className="relative">
              <motion.div
                animate={{
                  boxShadow: [
                    '0 0 0 0 rgba(52, 211, 153, 0.4)',
                    '0 0 0 30px rgba(52, 211, 153, 0)',
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 rounded-full"
              />
              <CheckCircle2 className="w-20 h-20 text-emerald-400 relative z-10" strokeWidth={1.5} />
            </div>
          </motion.div>

          {/* Heading */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h1 className="text-6xl md:text-7xl font-black tracking-tight leading-[1.1]">
              Got It! ✓
            </h1>
            <p className="text-xl text-neutral-400 leading-relaxed">
              Your message is on its way. I'll get back to you soon.
            </p>
          </motion.div>

          {/* Main Message */}
          <motion.div
            variants={itemVariants}
            className="bg-white/[0.02] border border-white/10 rounded-2xl p-8 md:p-12 space-y-4"
          >
            <p className="text-lg text-neutral-300 leading-relaxed">
              I usually respond within <span className="text-emerald-400 font-semibold">24 hours</span> with specific ideas and next steps.
            </p>
            <p className="text-sm text-neutral-500">
              Weekdays 10 AM - 6 PM IST. If time-sensitive, reach out on LinkedIn or Calendly.
            </p>
          </motion.div>

          {/* What Happens Next */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h2 className="text-lg font-semibold text-white">What Happens Next</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  number: '01',
                  title: 'I\'ll Read',
                  description: 'Understanding your opportunity and goals in detail.'
                },
                {
                  number: '02',
                  title: 'I\'ll Assess',
                  description: 'Evaluating if we\'re a great fit for each other.'
                },
                {
                  number: '03',
                  title: 'I\'ll Respond',
                  description: 'With concrete ideas, approach, and next steps.'
                }
              ].map((step, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="bg-white/[0.02] border border-white/10 rounded-xl p-6 space-y-3 text-left hover:bg-white/[0.04] transition"
                >
                  <div className="text-3xl font-black text-emerald-400">{step.number}</div>
                  <h3 className="font-semibold text-white text-sm">{step.title}</h3>
                  <p className="text-xs text-neutral-400 leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Privacy */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-2 text-sm text-neutral-500"
          >
            <Shield className="w-4 h-4 text-emerald-400" />
            <span>🔒 Your privacy matters. I respect your data.</span>
          </motion.div>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-col md:flex-row gap-3 justify-center pt-4">
            <Link
              href="/work"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-white/[0.05] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 rounded-lg font-medium transition group"
            >
              View My Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/about"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-white/[0.05] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 rounded-lg font-medium transition group"
            >
              Read My Story
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="https://calendly.com/vinodkumar/chat"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 hover:border-emerald-500/50 rounded-lg font-medium text-emerald-400 transition group"
            >
              Schedule a Call
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Back to Home */}
          <motion.div variants={itemVariants}>
            <Link
              href="/"
              className="text-sm text-neutral-500 hover:text-neutral-300 transition inline-block"
            >
              ← Return to Home
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <footer className="max-w-7xl mx-auto px-6 py-12 border-t border-white/10 text-center">
        <p className="text-neutral-600 text-xs font-medium tracking-wide">
          © 2026 Vinod Kumar. All rights reserved.
        </p>
      </footer>
    </main>
  );
}