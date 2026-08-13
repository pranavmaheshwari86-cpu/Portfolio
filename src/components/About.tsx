import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="relative w-full bg-[#FF2A2A] text-white pt-24 pb-36 px-6 md:px-12 lg:px-24 overflow-hidden">
      
      {/* Abstract Floating Black Star Decorations with Pulse Animation */}
      <motion.div
        animate={{ y: [0, -15, 0], opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-12 left-10 text-black text-4xl select-none pointer-events-none"
      >
        ✦
      </motion.div>

      <motion.div
        animate={{ y: [0, 20, 0], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-1/3 right-12 text-black text-5xl select-none pointer-events-none"
      >
        ★
      </motion.div>

      <motion.div
        animate={{ rotate: [0, 180, 360], scale: [0.9, 1.1, 0.9] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-28 left-1/4 text-black/40 text-6xl select-none pointer-events-none"
      >
        ✦
      </motion.div>

      {/* Main Two-Column Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
        
        {/* Left Side: Hanging Employee ID Badge with Lanyard */}
        <div className="lg:col-span-5 flex justify-center relative pt-12">
          
          {/* Black Lanyard Strap coming down from top */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-24 bg-[#111111] z-20 flex flex-col items-center shadow-lg">
            {/* White Lanyard Text Accent */}
            <span className="text-[7px] font-mono text-white/50 tracking-widest rotate-90 mt-6 select-none uppercase">
              {portfolioData.personal.name}
            </span>
          </div>

          {/* Metal Lanyard Clip */}
          <div className="absolute top-[88px] left-1/2 -translate-x-1/2 w-8 h-7 bg-gradient-to-b from-gray-400 to-gray-700 rounded-sm z-30 border border-gray-300 shadow-md flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-gray-900 border border-gray-400" />
          </div>

          {/* Employee ID Card */}
          <motion.div
            initial={{ opacity: 0, y: 50, rotate: -6 }}
            whileInView={{ opacity: 1, y: 0, rotate: -3 }}
            whileHover={{ rotate: 0, scale: 1.03, transition: { duration: 0.3 } }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full max-w-sm bg-[#1c1c1c] text-white p-7 rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.6)] border border-white/10 relative z-10 cursor-pointer mt-16"
          >
            {/* Card Hole Punch Slot */}
            <div className="w-12 h-3 bg-[#111111] rounded-full mx-auto mb-6 border border-white/10 shadow-inner" />

            {/* Badge Top Header */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
              <div>
                <span className="text-[10px] font-mono text-white/60 tracking-widest block uppercase">Developer Pass</span>
                <span className="font-syne font-bold text-lg text-white tracking-wider uppercase">{portfolioData.personal.name}</span>
              </div>
              <div className="px-2.5 py-1 rounded-full bg-[#FF2A2A] text-white text-[10px] font-mono font-bold uppercase tracking-wider shadow-md animate-pulse">
                VERIFIED
              </div>
            </div>

            {/* Profile Photo Container */}
            <div className="relative rounded-2xl overflow-hidden mb-6 aspect-square border-2 border-white/10 group bg-gray-900">
              <img
                src={portfolioData.personal.profileImage}
                alt={`${portfolioData.personal.name} Profile`}
                className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono text-white/90">
                <span>ROLE: FULL STACK & AI</span>
                <span>ID: {portfolioData.personal.idPassNumber}</span>
              </div>
            </div>

            {/* Card Bottom Details & Barcode */}
            <div className="flex items-center justify-between pt-2">
              <div className="text-xs font-mono text-white/70 space-y-0.5">
                <p className="text-white font-semibold uppercase">{portfolioData.personal.name} ARCHITECTURE</p>
                {portfolioData.personal.location ? (
                  <p className="text-[10px] text-white/50 uppercase">{portfolioData.personal.location}</p>
                ) : null}
              </div>
              {/* Fake QR / Barcode element */}
              <div className="w-10 h-10 bg-white p-1 rounded-lg flex flex-col justify-between">
                <div className="grid grid-cols-3 gap-0.5 h-full w-full bg-black p-0.5">
                  <div className="bg-white" />
                  <div className="bg-black" />
                  <div className="bg-white" />
                  <div className="bg-black" />
                  <div className="bg-white" />
                  <div className="bg-black" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Editorial Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-7 flex flex-col items-start"
        >
          {/* Large Black Heading */}
          <h2 className="font-syne font-black text-6xl sm:text-7xl md:text-8xl text-black tracking-tight leading-none mb-6">
            Hello!
          </h2>

          {/* Professional Editorial Introduction */}
          <div className="space-y-6 text-lg sm:text-xl text-white/95 font-sans font-light leading-relaxed">
            <p>
              My name is <span className="font-extrabold text-black uppercase tracking-wide bg-white px-2 py-0.5 rounded shadow-sm">{portfolioData.personal.name}</span>. I am a {portfolioData.personal.role} obsessed with creating high-impact, award-worthy web applications and intelligent AI solutions.
            </p>
            <p className="text-white/90">
              Over the past {portfolioData.personal.experienceYears} years, I've bridged the gap between <span className="font-semibold text-black underline underline-offset-4 decoration-black">creative front-end engineering</span> and <span className="font-semibold text-black underline underline-offset-4 decoration-black">robust back-end architecture</span>. I transform complex requirements into seamless, lightning-fast digital experiences.
            </p>
          </div>

          {/* Tech Stack Showcase Title */}
          <div className="mt-12 mb-6 flex items-center gap-3">
            <span className="text-xs font-mono uppercase tracking-widest text-black font-bold">Core Stack & Ecosystem</span>
            <div className="w-16 h-[2px] bg-black" />
          </div>

          {/* Tech Stack Logos (React, Node.js, MongoDB) */}
          <div className="grid grid-cols-3 gap-6 sm:gap-8 w-full max-w-lg">
            {/* React Logo */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="bg-black/90 p-5 rounded-2xl flex flex-col items-center justify-center gap-3 shadow-2xl border border-black hover:scale-110 transition-transform cursor-pointer group"
            >
              <svg className="w-10 h-10 text-[#61DAFB] group-hover:rotate-180 transition-transform duration-1000" viewBox="0 0 100 100" fill="currentColor">
                <circle cx="50" cy="50" r="10" />
                <ellipse cx="50" cy="50" rx="40" ry="15" fill="none" stroke="currentColor" strokeWidth="4" />
                <ellipse cx="50" cy="50" rx="40" ry="15" fill="none" stroke="currentColor" strokeWidth="4" transform="rotate(60 50 50)" />
                <ellipse cx="50" cy="50" rx="40" ry="15" fill="none" stroke="currentColor" strokeWidth="4" transform="rotate(120 50 50)" />
              </svg>
              <span className="text-xs font-mono font-bold text-white tracking-wider">REACT.JS</span>
            </motion.div>

            {/* Node.js Logo */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
              className="bg-black/90 p-5 rounded-2xl flex flex-col items-center justify-center gap-3 shadow-2xl border border-black hover:scale-110 transition-transform cursor-pointer group"
            >
              <svg className="w-10 h-10 text-[#68A063] group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7.5v9L12 22l10-5.5v-9L12 2zm0 2.3l7.5 4.1v7.2L12 19.7l-7.5-4.1V8.4L12 4.3z" />
              </svg>
              <span className="text-xs font-mono font-bold text-white tracking-wider">NODE.JS</span>
            </motion.div>

            {/* MongoDB Logo */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
              className="bg-black/90 p-5 rounded-2xl flex flex-col items-center justify-center gap-3 shadow-2xl border border-black hover:scale-110 transition-transform cursor-pointer group"
            >
              <svg className="w-10 h-10 text-[#47A248] group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C11.5 4.5 10 9 6 12c-2.5 1.9-4 4.5-4 7.5C2 21.5 4 23 7 23c4.5 0 8.5-3.5 10-8 1-3 .5-6.5-1.5-9C14.5 4.5 13 3 12 2z" />
              </svg>
              <span className="text-xs font-mono font-bold text-white tracking-wider">MONGODB</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Torn-Paper SVG Transition */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-20 pointer-events-none">
        <svg
          className="relative block w-full h-16 md:h-24 text-white fill-current"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M0,0 L40,25 L80,10 L120,35 L160,15 L200,40 L240,18 L280,38 L320,12 L360,32 L400,10 L440,30 L480,8 L520,38 L560,15 L600,35 L640,12 L680,32 L720,10 L760,30 L800,8 L840,38 L880,15 L920,35 L960,12 L1000,32 L1040,10 L1080,30 L1120,8 L1160,28 L1200,0 L1200,120 L0,120 Z" />
        </svg>
      </div>
    </section>
  );
};
