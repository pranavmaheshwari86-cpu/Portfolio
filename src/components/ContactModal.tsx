import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle, Loader2, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg(null);

    const recipientEmail = portfolioData.contact.email || 'Pranavmaheshwari86@gmail.com';
    const endpoint = `https://formsubmit.co/ajax/${recipientEmail}`;

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: `New Portfolio Inquiry from ${form.name}`,
          _replyto: form.email,
          _template: 'table',
          _captcha: 'false',
        }),
      });

      const data = await response.json();

      if (response.ok || data.success === 'true') {
        setIsSubmitting(false);
        setSubmitted(true);
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#FF2A2A', '#ffffff', '#111111'],
        });
        setTimeout(() => {
          setSubmitted(false);
          onClose();
          setForm({ name: '', email: '', message: '' });
        }, 3000);
      } else {
        throw new Error(data.message || 'Failed to send message. Please try again.');
      }
    } catch (err: any) {
      console.error('Email delivery error:', err);
      setIsSubmitting(false);
      setErrorMsg(err.message || 'Failed to send message. Please check connection and try again.');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[99999] bg-black/80 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, y: 30 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 30 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-[#1c1c1c] text-white max-w-lg w-full rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              disabled={isSubmitting}
              className="absolute top-5 right-5 p-2 rounded-full glass-panel text-white hover:text-[#FF2A2A] transition-colors disabled:opacity-50"
            >
              <X className="w-5 h-5" />
            </button>

            {!submitted ? (
              <>
                <div className="mb-6">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#FF2A2A] font-bold block mb-1">
                    Direct Contact
                  </span>
                  <h3 className="font-syne font-black text-3xl text-white">
                    Let's Build Together<span className="text-[#FF2A2A]">.</span>
                  </h3>
                  <p className="text-sm font-sans text-white/70 mt-2">
                    Send a message and I'll respond within 24 hours.
                  </p>
                </div>

                {errorMsg && (
                  <div className="mb-4 p-3 rounded-xl bg-red-500/20 border border-red-500/40 text-red-200 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4 font-sans text-sm">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-white/60 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      disabled={isSubmitting}
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/15 text-white placeholder-white/30 focus:outline-none focus:border-[#FF2A2A] transition-colors disabled:opacity-50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-white/60 mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      disabled={isSubmitting}
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="sarah@agency.com"
                      className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/15 text-white placeholder-white/30 focus:outline-none focus:border-[#FF2A2A] transition-colors disabled:opacity-50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-white/60 mb-1.5">
                      Project Details
                    </label>
                    <textarea
                      rows={4}
                      required
                      disabled={isSubmitting}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell me about your project scope, timeline, and goals..."
                      className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/15 text-white placeholder-white/30 focus:outline-none focus:border-[#FF2A2A] transition-colors resize-none disabled:opacity-50"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-[#FF2A2A] text-white font-syne font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2 shadow-xl disabled:opacity-50 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              </>
            ) : (
              <div className="py-12 text-center flex flex-col items-center justify-center space-y-4">
                <CheckCircle className="w-16 h-16 text-[#FF2A2A] animate-bounce" />
                <h4 className="font-syne font-bold text-2xl text-white">Message Delivered!</h4>
                <p className="text-sm font-sans text-white/70">
                  Thank you! {portfolioData.personal.name} will receive your message at {portfolioData.contact.email} and get back to you shortly.
                </p>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
