import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface NavbarProps {
  onOpenContact?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Process', href: '#process' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#111111]/85 backdrop-blur-xl border-b border-white/10 py-3 shadow-2xl'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            className="group flex items-center gap-1 font-syne font-extrabold text-2xl md:text-3xl tracking-tight text-white transition-transform hover:scale-105"
          >
            {portfolioData.personal.name}
            <span className="text-[#FF2A2A] inline-block transition-transform duration-300 group-hover:scale-150">
              .
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 glass-panel px-6 py-2.5 rounded-full">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative text-sm font-medium text-white/80 hover:text-white transition-colors group py-1"
              >
                {item.label}
                {/* Animated underline from left to right */}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#FF2A2A] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Side: CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={onOpenContact}
              className="relative group overflow-hidden glass-panel-white px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-white border border-white/30 transition-all duration-300 hover:border-[#FF2A2A] hover:shadow-[0_0_20px_rgba(255,42,42,0.4)] hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              <span className="relative z-10">Hire Me</span>
              <ArrowUpRight className="w-3.5 h-3.5 relative z-10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#FF2A2A]" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF2A2A]/0 via-[#FF2A2A]/20 to-[#FF2A2A]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="md:hidden p-2.5 rounded-full glass-panel text-white hover:text-[#FF2A2A] transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 bg-[#FF2A2A] text-white flex flex-col justify-between p-8 pt-28 md:hidden select-none"
          >
            {/* Background watermark */}
            <div className="absolute right-[-10%] bottom-[-5%] font-syne font-black text-9xl text-black/10 pointer-events-none select-none">
              PRANAV
            </div>

            <nav className="flex flex-col gap-6 relative z-10">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index + 0.2, duration: 0.4 }}
                  className="font-syne font-extrabold text-4xl text-white hover:text-black transition-colors flex items-center justify-between border-b border-white/20 pb-4"
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className="w-8 h-8 opacity-70" />
                </motion.a>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="relative z-10 flex flex-col gap-4"
            >
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenContact) onOpenContact();
                }}
                className="w-full py-4 bg-black text-white font-syne font-bold uppercase tracking-wider rounded-full hover:bg-white hover:text-black transition-all"
              >
                Hire Me Now
              </button>
              <div className="text-center text-xs font-mono text-white/80">
                {portfolioData.contact.email} &bull; Available for worldwide projects
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
