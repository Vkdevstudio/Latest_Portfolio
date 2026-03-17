/* eslint-disable react/no-unescaped-entities */
'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import {
  Mail,
  Linkedin,
  Github,
  Calendar,
  Copy,
  Check,
  ArrowRight,
  Clock,
  ShieldCheck,
  Loader2,
} from 'lucide-react';
import Navigation from '@/components/Common/Nav/Nav';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

export default function ContactPage() {
  const router = useRouter();
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    interest: '',
    message: ''
  });

  const copyEmail = () => {
    navigator.clipboard.writeText('hello@vinodkumar.dev');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};

    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) errors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email';
    }
    if (!formData.interest) errors.interest = 'Please select an option';
    if (!formData.message.trim()) errors.message = 'Please tell me about your opportunity';
    else if (formData.message.trim().length < 20) {
      errors.message = 'Please provide more details (at least 20 characters)';
    }

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

      console.log(response)
      if (response.ok) {
        router.push('/contact/success');
      } else if (response.status === 429) {
        setFormErrors({ submit: 'You can only submit once per day. Please try again tomorrow.' });
      } else {
        setFormErrors({ submit: 'Something went wrong. Please try again.' });
      }
    } catch (error) {
      console.error('Submission error:', error);
      setFormErrors({ submit: 'Network error. Please try emailing me directly.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-black text-white selection:bg-emerald-500/30 font-sans">
      <Navigation />

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20">
        {/* Hero Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-24 max-w-3xl"
        >
          <motion.div variants={itemVariants} className="space-y-6">
            <h1 className="text-6xl md:text-7xl font-black tracking-tight leading-[1.1]">
              Let's Work Together
            </h1>
            <p className="text-xl text-neutral-400 leading-relaxed max-w-2xl">
              Whether you're looking to hire, collaborate, or discuss ideas—I'm excited to hear what you're working on. Reach out and let's explore if we're a great fit.
            </p>
          </motion.div>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12">
          {/* Left Column: Quick Contact */}
          <motion.div variants={itemVariants} initial="hidden" animate="visible">
            <div className="space-y-8">
              {/* Contact Info Card */}
              <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                <h3 className="text-sm font-semibold text-white mb-6 uppercase tracking-wider">
                  Quick Contact
                </h3>

                <div className="space-y-4">
                  {/* Email */}
                  <button
                    onClick={copyEmail}
                    className="w-full flex items-center justify-between p-4 rounded-lg bg-white/[0.05] border border-white/10 hover:bg-white/[0.08] hover:border-emerald-500/30 transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-emerald-400" />
                      <span className="text-sm font-medium text-neutral-300">hello@vinodkumar.dev</span>
                    </div>
                    {copied ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4 text-neutral-500 group-hover:text-neutral-300" />
                    )}
                  </button>

                  {/* LinkedIn & GitHub Row */}
                  <div className="grid grid-cols-2 gap-3">
                    <a
                      href="https://linkedin.com/in/vinodkumar"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-4 rounded-lg bg-white/[0.05] border border-white/10 hover:bg-white/[0.08] hover:border-emerald-500/30 transition-all group"
                    >
                      <Linkedin className="w-4 h-4 text-neutral-500 group-hover:text-emerald-400 transition-colors" />
                      <span className="text-xs font-medium text-neutral-400">LinkedIn</span>
                    </a>
                    <a
                      href="https://github.com/vinodkumar"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-4 rounded-lg bg-white/[0.05] border border-white/10 hover:bg-white/[0.08] hover:border-emerald-500/30 transition-all group"
                    >
                      <Github className="w-4 h-4 text-neutral-500 group-hover:text-emerald-400 transition-colors" />
                      <span className="text-xs font-medium text-neutral-400">GitHub</span>
                    </a>
                  </div>

                  {/* Calendar */}
                  <a
                    href="https://calendly.com/vinodkumar/chat"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-between p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/30 hover:bg-emerald-500/20 transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <Calendar className="w-4 h-4 text-emerald-400" />
                      <span className="text-sm font-semibold text-emerald-400">Book a Call</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Response Time Card */}
              <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                <div className="flex items-start gap-3 mb-4">
                  <Clock className="w-4 h-4 text-emerald-400 mt-1 flex-shrink-0" />
                  <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Response Time</h4>
                </div>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Usually within <span className="text-white font-semibold">24 hours</span> for all inquiries. Weekdays 10 AM - 6 PM IST.
                </p>
              </div>

              {/* Availability Card */}
              <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Open For</h4>
                <ul className="space-y-3 text-sm text-neutral-400">
                  <li className="flex items-center gap-3">
                    <div className="w-1 h-1 rounded-full bg-emerald-400" />
                    Full-time roles (React, Node.js, AI/ML)
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1 h-1 rounded-full bg-emerald-400" />
                    Technical consulting & architecture
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1 h-1 rounded-full bg-emerald-400" />
                    Project collaboration & partnership
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div variants={itemVariants} initial="hidden" animate="visible">
            <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-8 md:p-12 backdrop-blur-sm">
              <h2 className="text-lg font-semibold text-white mb-8">Send me a message</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Your Name *</label>
                  <input
                    required
                    type="text"
                    placeholder="Jane Smith"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full bg-white/[0.05] border rounded-lg px-4 py-3 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all ${
                      formErrors.name ? 'border-red-500/50' : 'border-white/10 hover:border-white/20'
                    }`}
                  />
                  {formErrors.name && <p className="text-xs text-red-400">{formErrors.name}</p>}
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Email Address *</label>
                  <input
                    required
                    type="email"
                    placeholder="jane@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full bg-white/[0.05] border rounded-lg px-4 py-3 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all ${
                      formErrors.email ? 'border-red-500/50' : 'border-white/10 hover:border-white/20'
                    }`}
                  />
                  {formErrors.email && <p className="text-xs text-red-400">{formErrors.email}</p>}
                </div>

                {/* Company (Optional) */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-neutral-400">Company / Organization (Optional)</label>
                  <input
                    type="text"
                    placeholder="Acme Corp or Your Startup"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-white/[0.05] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all hover:border-white/20"
                  />
                </div>

                {/* Interest Type */}
                <div className="space-y-3">
                  <label className="text-sm font-medium text-white block">What are you interested in? *</label>
                  <div className="space-y-2">
                    {[
                      { id: 'hiring', label: 'I\'m hiring' },
                      { id: 'collaborate', label: 'Let\'s collaborate' },
                      { id: 'discussion', label: 'Technical discussion' },
                      { id: 'other', label: 'Other' }
                    ].map((option) => (
                      <label
                        key={option.id}
                        className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-all ${
                          formData.interest === option.id
                            ? 'bg-emerald-500/10 border-emerald-500 text-white'
                            : 'bg-white/[0.02] border-white/10 text-neutral-400 hover:border-white/20'
                        }`}
                      >
                        <input
                          required
                          type="radio"
                          name="interest"
                          value={option.id}
                          checked={formData.interest === option.id}
                          onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                          className="hidden"
                        />
                        <div
                          className={`w-4 h-4 rounded-full border flex items-center justify-center transition-all ${
                            formData.interest === option.id
                              ? 'border-emerald-500'
                              : 'border-neutral-500'
                          }`}
                        >
                          {formData.interest === option.id && (
                            <div className="w-2 h-2 rounded-full bg-emerald-400" />
                          )}
                        </div>
                        <span className="text-sm font-medium">{option.label}</span>
                      </label>
                    ))}
                  </div>
                  {formErrors.interest && <p className="text-xs text-red-400">{formErrors.interest}</p>}
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Tell me about your opportunity *</label>
                  <textarea
                    required
                    minLength={20}
                    rows={6}
                    placeholder="We're looking for a senior engineer to lead our real-time systems. Our stack is React, Node.js, PostgreSQL..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full bg-white/[0.05] border rounded-lg px-4 py-3 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all resize-none ${
                      formErrors.message ? 'border-red-500/50' : 'border-white/10 hover:border-white/20'
                    }`}
                  />
                  <div className="flex items-center justify-between">
                    {formErrors.message && <p className="text-xs text-red-400">{formErrors.message}</p>}
                    <p className="text-xs text-neutral-500 ml-auto">{formData.message.length} characters</p>
                  </div>
                </div>

                {/* Error message */}
                {formErrors.submit && (
                  <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-sm text-red-400">
                    {formErrors.submit}
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-6 bg-emerald-400 hover:bg-emerald-300 text-black font-semibold rounded-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  <span className="relative z-10 flex items-center gap-2">
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
                  </span>
                </button>

                {/* Divider */}
                <div className="relative py-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-white/10" />
                  </div>
                  <div className="relative flex justify-center text-xs">
                    <span className="px-2 bg-black text-neutral-500">Or email me directly</span>
                  </div>
                </div>

                <a
                  href="mailto:hello@vinodkumar.dev"
                  className="w-full py-3 px-6 bg-white/[0.05] hover:bg-white/[0.08] text-white border border-white/10 hover:border-white/20 font-medium rounded-lg transition-all text-center"
                >
                  hello@vinodkumar.dev
                </a>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Reassurance Footer */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/10 pt-12"
        >
          <motion.div variants={itemVariants} className="space-y-3">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-400 flex-shrink-0" />
              <h4 className="text-sm font-semibold text-white">Your Privacy Matters</h4>
            </div>
            <p className="text-sm text-neutral-400 leading-relaxed">
              I respect your data. No spam, no sharing with third parties. Just genuine conversations about opportunities.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-3">
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-emerald-400 flex-shrink-0" />
              <h4 className="text-sm font-semibold text-white">What Happens Next</h4>
            </div>
            <p className="text-sm text-neutral-400 leading-relaxed">
              I'll review your message, assess fit, and respond with specific ideas and next steps within 24 hours.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-3">
            <div className="flex items-center gap-3">
              <ArrowRight className="w-5 h-5 text-emerald-400 flex-shrink-0" />
              <h4 className="text-sm font-semibold text-white">Strategic Fit</h4>
            </div>
            <p className="text-sm text-neutral-400 leading-relaxed">
              I only take on opportunities where I can deliver real value. If we're not a fit, I'll tell you directly.
            </p>
          </motion.div>
        </motion.div>
      </div>

      <footer className="max-w-7xl mx-auto px-6 py-12 border-t border-white/10 text-center">
        <p className="text-neutral-600 text-xs font-medium tracking-wide">
          © {new Date().getFullYear()} Vinod Kumar. All rights reserved.
        </p>
      </footer>
    </main>
  );
}