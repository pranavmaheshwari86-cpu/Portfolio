import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

interface PreloaderProps {
  onComplete?: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    
    const timer = setTimeout(() => {
      setIsDone(true);
    }, 2200);

    return () => {
      document.body.style.overflow = '';
      clearTimeout(timer);
    };
  }, []);

  const logoText = portfolioData.personal.name || "Leeshark";

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {!isDone && (
        <motion.div
          key="preloader-overlay"
          initial={{ y: "0%" }}
          exit={{ 
            y: "-100%", 
            transition: { 
              duration: 0.95, 
              ease: [0.76, 0, 0.24, 1] 
            } 
          }}
          className="fixed inset-0 z-[100000] flex items-center justify-center bg-[#FF2A2A] overflow-hidden select-none"
        >
          {/* Logo container with scale down and fade out exit animation */}
          <motion.div
            exit={{ 
              scale: 0.85, 
              opacity: 0, 
              transition: { duration: 0.5, ease: "easeInOut" } 
            }}
            className="relative flex items-center justify-center px-4"
          >
            {/* Layer 1: Dark Transparent Background Text */}
            <h1 className="font-syne font-black text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tighter text-black/25 select-none">
              {logoText}<span className="text-black/40">.</span>
            </h1>

            {/* Layer 2: White Foreground Text with Clip-Path Water Fill Animation */}
            <motion.h1
              initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
              animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
              transition={{
                duration: 1.6,
                ease: [0.65, 0, 0.35, 1],
                delay: 0.2
              }}
              className="absolute inset-0 flex items-center justify-center font-syne font-black text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tighter text-white pointer-events-none select-none"
            >
              {logoText}<span className="text-white">.</span>
            </motion.h1>
          </motion.div>

          {/* Subdued Agency Tagline at Bottom */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-3 text-white/80 font-mono text-xs uppercase tracking-widest"
          >
            <span className="w-2 h-2 rounded-full bg-white animate-ping" />
            <span>Digital Agency Experience &copy; {new Date().getFullYear()}</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
