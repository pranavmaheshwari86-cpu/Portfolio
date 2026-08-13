import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative w-full bg-[#111111] text-[#F4F4F4] pt-24 pb-12 px-6 md:px-12 lg:px-24 min-h-[50vh] flex flex-col justify-between overflow-hidden border-t border-white/10">
      
      {/* Background Accent Subtle Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-[#FF2A2A]/5 blur-[140px] pointer-events-none" />

      {/* 1. Top Information Grid (Two Columns) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pb-16 border-b border-white/10 relative z-10">
        
        {/* Left Column: Creative Service Descriptions */}
        <div className="space-y-3">
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-white/50 block mb-4">
            Capabilities & Services
          </span>
          <ul className="font-mono text-xs uppercase tracking-widest text-white/80 space-y-2">
            <li className="flex items-center gap-2 hover:text-[#FF2A2A] transition-colors cursor-default">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF2A2A]" />
              <span>Cinematic Production</span>
            </li>
            <li className="flex items-center gap-2 hover:text-[#FF2A2A] transition-colors cursor-default">
              <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
              <span>Motion Graphics</span>
            </li>
            <li className="flex items-center gap-2 hover:text-[#FF2A2A] transition-colors cursor-default">
              <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
              <span>Web Development</span>
            </li>
            <li className="flex items-center gap-2 hover:text-[#FF2A2A] transition-colors cursor-default">
              <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
              <span>UI/UX Design</span>
            </li>
          </ul>
        </div>

        {/* Right Column: Availability Status */}
        <div className="flex flex-col justify-between space-y-4 text-left md:text-right">
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-white/50 block mb-4">
            Global Operations
          </span>
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>{portfolioData.contact.availability}</span>
            </div>
            <p className="font-mono text-xs text-white/60">
              {new Date().getFullYear()} Edition {portfolioData.personal.location ? `• ${portfolioData.personal.location}` : ''}
            </p>
          </div>
        </div>
      </div>

      {/* 2. Center Hero Branding Text */}
      <div className="py-16 text-center relative z-10 overflow-hidden select-none">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="font-syne font-black text-[15vw] leading-none tracking-tighter text-[#F4F4F4]/90 hover:text-white transition-colors duration-700 cursor-default select-none lowercase"
        >
          {portfolioData.personal.name}<span className="text-[#FF2A2A]">.</span>
        </motion.h1>
      </div>

      {/* 3. Bottom Contact & Legal Grid (Three Columns) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center pt-8 border-t border-white/10 text-xs font-mono text-white/60 relative z-10">
        
        {/* Left: Contact & Copyright */}
        <div className="space-y-1">
          <p className="text-white/80">&copy; {new Date().getFullYear()} {portfolioData.personal.name}. All rights reserved.</p>
          <p className="text-[10px] text-white/40">Built with React.js, Tailwind CSS & Framer Motion</p>
        </div>

        {/* Center: Email Link */}
        <div className="text-left md:text-center">
          <a
            href={`mailto:${portfolioData.contact.email}`}
            className="inline-block text-sm font-sans font-medium text-white hover:text-[#FF2A2A] relative group transition-colors py-1"
          >
            <span>{portfolioData.contact.email}</span>
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#FF2A2A] transition-all duration-300 group-hover:w-full" />
          </a>
        </div>

        {/* Right: Scroll to Top & Privacy */}
        <div className="flex items-center justify-start md:justify-end gap-6">
          <a href="#" className="hover:text-white transition-colors">
            Privacy Policy
          </a>
          
          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="p-3 rounded-full glass-panel text-white hover:text-[#FF2A2A] hover:border-[#FF2A2A] transition-all group"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};
