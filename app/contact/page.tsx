/* eslint-disable react/no-unescaped-entities */
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { Mail, Linkedin, Github, Calendar, Clock, Shield, CheckCircle2, ArrowRight, Loader2 } from 'lucide-react';
import Navigation from '@/components/Common/Nav/Nav';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.2 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

export default function ContactPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    interest: '',
    message: ''
  });

  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) errors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errors.email = 'Valid email required';
    if (!formData.interest) errors.interest = 'Please select an option';
    if (!formData.message.trim()) errors.message = 'Tell me about your opportunity';
    else if (formData.message.trim().length < 20) errors.message = 'At least 20 characters';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        router.push('/contact/success');
      } else if (response.status === 429) {
        setFormErrors({ submit: 'You can only submit once per day. Please try again tomorrow.' });
      } else {
        setFormErrors({ submit: 'Something went wrong. Please try again or email directly.' });
      }
    } catch (error) {
      setFormErrors({ submit: 'Network error. Please email directly.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-black text-white selection:bg-emerald-500/30 font-sans">
      <Navigation />

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20">
        {/* Hero */}
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="mb-24 max-w-3xl">
          <motion.div variants={itemVariants} className="space-y-4">
            <h1 className="text-6xl md:text-7xl font-black tracking-tight leading-[1.1]">
              Let's Work Together
            </h1>
            <p className="text-xl text-neutral-400 leading-relaxed">
              Tell me about your challenge. I'll respond within 24 hours with concrete ideas.
            </p>
            <p className="text-sm text-neutral-500 italic pt-2">
              "I architect scalable systems for teams building ambitious products."
            </p>
          </motion.div>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-16 mb-24">
          {/* Left: Context */}
          <motion.div variants={itemVariants} initial="hidden" animate="visible" className="space-y-8">
            {/* What I'm Looking For */}
            <div className="space-y-3">
              <h3 className="text-xs font-mono font-bold text-neutral-500 uppercase tracking-wider">I'm Looking For</h3>
              <ul className="space-y-2 text-sm text-neutral-400">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>Full-time roles in system architecture</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>Technical leadership opportunities</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>Scaling challenges at ambitious startups</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>Teams that value depth over quick wins</span>
                </li>
              </ul>
            </div>

            {/* How It Works */}
            <div className="space-y-3 pt-6 border-t border-white/10">
              <h3 className="text-xs font-mono font-bold text-neutral-500 uppercase tracking-wider">How This Works</h3>
              <div className="space-y-3 text-sm text-neutral-400">
                <p><span className="text-white font-semibold">Step 1:</span> You describe your challenge (2 min read)</p>
                <p><span className="text-white font-semibold">Step 2:</span> I review and assess fit (24 hours)</p>
                <p><span className="text-white font-semibold">Step 3:</span> I respond with concrete ideas</p>
              </div>
            </div>

            {/* Quick Contact */}
            <div className="space-y-3 pt-6 border-t border-white/10">
              <h3 className="text-xs font-mono font-bold text-neutral-500 uppercase tracking-wider">If Urgent</h3>
              <div className="space-y-2 text-sm">
                <a href="mailto:hello@vinodkumar.dev" className="flex items-center gap-2 text-neutral-400 hover:text-emerald-400 transition">
                  <Mail className="w-4 h-4" /> hello@vinodkumar.dev
                </a>
                <a href="https://linkedin.com/in/vinodkumar" target="_blank" className="flex items-center gap-2 text-neutral-400 hover:text-emerald-400 transition">
                  <Linkedin className="w-4 h-4" /> LinkedIn
                </a>
                <a href="https://calendly.com/vinodkumar/chat" target="_blank" className="flex items-center gap-2 text-neutral-400 hover:text-emerald-400 transition">
                  <Calendar className="w-4 h-4" /> 30-min call
                </a>
              </div>
            </div>

            {/* What I Bring */}
            <div className="space-y-3 pt-6 border-t border-white/10">
              <h3 className="text-xs font-mono font-bold text-neutral-500 uppercase tracking-wider">What I Bring</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                3+ years scaling systems to 100k+ daily events. Proven ability to optimize performance (95% improvements), 
                build reliable architectures (99.9% uptime), and mentor teams.
              </p>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div variants={itemVariants} initial="hidden" animate="visible">
            <div className="space-y-6">
              {/* Name */}
              <div className="space-y-2">
                <label className="text-[10px] font-mono font-bold text-neutral-500 uppercase tracking-wider">Your Name</label>
                <input
                  type="text"
                  placeholder="Jane Smith"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={`w-full bg-white/[0.05] border rounded-lg px-4 py-3 text-base text-white placeholder:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition ${
                    formErrors.name ? 'border-red-500/50' : 'border-white/10 hover:border-white/20'
                  }`}
                />
                {formErrors.name && <p className="text-xs text-red-400">{formErrors.name}</p>}
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="text-[10px] font-mono font-bold text-neutral-500 uppercase tracking-wider">Email Address</label>
                <input
                  type="email"
                  placeholder="jane@techcompany.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`w-full bg-white/[0.05] border rounded-lg px-4 py-3 text-base text-white placeholder:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition ${
                    formErrors.email ? 'border-red-500/50' : 'border-white/10 hover:border-white/20'
                  }`}
                />
                {formErrors.email && <p className="text-xs text-red-400">{formErrors.email}</p>}
              </div>

              {/* Company */}
              <div className="space-y-2">
                <label className="text-[10px] font-mono font-bold text-neutral-500 uppercase tracking-wider">Company (Optional)</label>
                <input
                  type="text"
                  placeholder="Acme Corp or Series A Startup"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full bg-white/[0.05] border border-white/10 rounded-lg px-4 py-3 text-base text-white placeholder:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition hover:border-white/20"
                />
              </div>

              {/* Interest */}
              <div className="space-y-3">
                <label className="text-[10px] font-mono font-bold text-neutral-500 uppercase tracking-wider block">What Brings You Here?</label>
                <div className="space-y-2">
                  {[
                    { id: 'hiring', label: 'I\'m hiring' },
                    { id: 'collaborate', label: 'Let\'s collaborate' },
                    { id: 'discussion', label: 'Technical discussion' },
                    { id: 'other', label: 'Other' }
                  ].map((option) => (
                    <label key={option.id} className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition ${
                      formData.interest === option.id
                        ? 'bg-emerald-500/10 border-emerald-500 text-white'
                        : 'bg-white/[0.02] border-white/10 text-neutral-400 hover:border-white/20'
                    }`}>
                      <input type="radio" name="interest" value={option.id} checked={formData.interest === option.id} onChange={(e) => setFormData({ ...formData, interest: e.target.value })} className="hidden" />
                      <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${formData.interest === option.id ? 'border-emerald-500' : 'border-neutral-500'}`}>
                        {formData.interest === option.id && <div className="w-2 h-2 rounded-full bg-emerald-400" />}
                      </div>
                      <span className="text-sm font-medium">{option.label}</span>
                    </label>
                  ))}
                </div>
                {formErrors.interest && <p className="text-xs text-red-400">{formErrors.interest}</p>}
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-[10px] font-mono font-bold text-neutral-500 uppercase tracking-wider">Tell Me About Your Opportunity</label>
                <textarea
                  minLength={20}
                  rows={6}
                  placeholder="We're scaling our real-time systems and need someone to lead architecture. Our stack is React, Node.js, PostgreSQL..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`w-full bg-white/[0.05] border rounded-lg px-4 py-3 text-base text-white placeholder:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition resize-none ${
                    formErrors.message ? 'border-red-500/50' : 'border-white/10 hover:border-white/20'
                  }`}
                />
                <div className="flex items-center justify-between">
                  {formErrors.message && <p className="text-xs text-red-400">{formErrors.message}</p>}
                  <p className="text-xs text-neutral-600 ml-auto">{formData.message.length} characters</p>
                </div>
              </div>

              {/* Submit */}
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full py-4 px-6 bg-emerald-400 hover:bg-emerald-300 text-black font-bold rounded-lg transition flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              {/* Divider */}
              <div className="relative py-4">
                <div className="border-t border-white/10" />
                <p className="text-[10px] text-neutral-600 text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black px-3">Or email directly</p>
              </div>

              <a href="mailto:hello@vinodkumar.dev" className="w-full py-3 px-6 bg-white/[0.05] hover:bg-white/[0.08] border border-white/10 text-white rounded-lg text-center font-medium transition">
                hello@vinodkumar.dev
              </a>

              {formErrors.submit && (
                <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-sm text-red-400">
                  {formErrors.submit}
                </div>
              )}
            </div>
          </motion.div>
        </div>

        {/* Reassurance */}
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/10 pt-16">
          <motion.div variants={itemVariants} className="space-y-3">
            <div className="flex items-center gap-3">
              <Shield className="w-5 h-5 text-emerald-400 flex-shrink-0" />
              <h4 className="text-sm font-semibold text-white">Your Privacy</h4>
            </div>
            <p className="text-sm text-neutral-400">I respect your data. No spam, no sharing with third parties.</p>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-3">
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-emerald-400 flex-shrink-0" />
              <h4 className="text-sm font-semibold text-white">What Happens Next</h4>
            </div>
            <p className="text-sm text-neutral-400">I review, assess fit, and respond within 24 hours with ideas.</p>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-3">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
              <h4 className="text-sm font-semibold text-white">Strategic Fit</h4>
            </div>
            <p className="text-sm text-neutral-400">I only engage where I can deliver 10x value. Direct feedback always.</p>
          </motion.div>
        </motion.div>
      </div>

      <footer className="max-w-7xl mx-auto px-6 py-12 border-t border-white/10 text-center">
        <p className="text-neutral-600 text-xs font-medium tracking-wide">© 2026 Vinod Kumar. All rights reserved.</p>
      </footer>
    </main>
  );
}