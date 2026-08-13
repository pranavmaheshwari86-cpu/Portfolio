import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const steps = portfolioData.processSteps;

export const ProcessTimeline: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress inside process section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const scalePath = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section
      id="process"
      ref={containerRef}
      className="relative w-full bg-white text-black py-28 px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      {/* Subtle Light Gray Grid Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Header Section */}
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center mb-24">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black text-white text-xs font-mono font-bold uppercase tracking-widest mb-6 shadow-md"
        >
          <span className="w-2 h-2 rounded-full bg-[#FF2A2A]" />
          <span>How We Work</span>
        </motion.div>

        {/* Headline with Sketch Arrow */}
        <div className="relative">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-syne font-black text-4xl sm:text-5xl md:text-6xl text-black tracking-tight leading-[1.1] max-w-3xl"
          >
            Let us show you how we drive your brand to new heights
          </motion.h2>

          {/* Sketch Arrow SVG beside heading */}
          <div className="hidden lg:block absolute -right-24 top-0 w-20 text-[#FF2A2A]">
            <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" className="w-full h-full">
              <path d="M 10 20 Q 80 10 70 70 Q 60 90 90 80" strokeDasharray="4 4" />
              <path d="M 80 70 L 90 80 L 100 68" fill="none" strokeWidth="3" />
            </svg>
          </div>
        </div>

        {/* Supporting Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 text-base sm:text-lg text-gray-600 font-sans font-normal max-w-2xl leading-relaxed"
        >
          A battle-tested 4-step execution framework designed to deliver luxury design, bulletproof full-stack engineering, and flawless execution.
        </motion.p>
      </div>

      {/* Main Timeline Section */}
      <div className="relative max-w-6xl mx-auto">
        {/* SVG Dashed Curved Path (Desktop & Tablet) */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-full h-full pointer-events-none z-0">
          <svg
            className="w-full h-full"
            viewBox="0 0 800 1400"
            fill="none"
            preserveAspectRatio="none"
          >
            {/* Background static dashed S-curve */}
            <path
              d="M 400 0 C 750 300, 750 450, 400 700 C 50 950, 50 1100, 400 1400"
              stroke="#E5E7EB"
              strokeWidth="4"
              strokeDasharray="10 10"
            />
            {/* Animated Red progress line */}
            <motion.path
              d="M 400 0 C 750 300, 750 450, 400 700 C 50 950, 50 1100, 400 1400"
              stroke="#FF2A2A"
              strokeWidth="6"
              strokeDasharray="12 12"
              style={{ pathLength: scalePath }}
            />
          </svg>
        </div>

        {/* Process Cards Container */}
        <div className="space-y-16 md:space-y-28 relative z-10">
          {steps.map((step) => {
            const isLeft = step.position === 'left';
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: isLeft ? -50 : 50, y: 30 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`flex flex-col md:flex-row items-center ${
                  isLeft ? 'md:justify-start' : 'md:justify-end'
                }`}
              >
                {/* Luggage Tag / Hanging Conference Pass Card Design */}
                <div
                  className={`w-full md:w-[500px] bg-white text-black p-8 sm:p-10 rounded-[2rem] border-2 border-black/10 shadow-[0_15px_45px_rgba(0,0,0,0.08)] ${step.rotation} hover:rotate-0 hover:scale-[1.03] hover:bg-[#FF2A2A] hover:text-white hover:border-[#FF2A2A] hover:shadow-[0_25px_60px_rgba(255,42,42,0.4)] transition-all duration-500 cursor-pointer group relative`}
                >
                  {/* Top Hole Punch Detail */}
                  <div className="w-6 h-6 rounded-full bg-gray-100 border border-black/20 group-hover:bg-white group-hover:border-white mx-auto -mt-4 mb-6 shadow-inner flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-black group-hover:bg-[#FF2A2A]" />
                  </div>

                  {/* Card Header: Italic Serif Step Number & Title */}
                  <div className="flex items-baseline justify-between mb-4 pb-4 border-b border-black/10 group-hover:border-white/20">
                    <span className="font-serif italic font-bold text-5xl sm:text-6xl text-[#FF2A2A] group-hover:text-white transition-colors">
                      {step.number}
                    </span>
                    <h3 className="font-syne font-black text-3xl sm:text-4xl text-black group-hover:text-white transition-colors">
                      {step.title}
                    </h3>
                  </div>

                  {/* Subtitle */}
                  <p className="font-mono text-xs uppercase tracking-wider text-[#FF2A2A] group-hover:text-white/90 font-bold mb-4">
                    {step.subtitle}
                  </p>

                  {/* Description */}
                  <p className="font-sans text-sm sm:text-base text-gray-600 group-hover:text-white/90 leading-relaxed mb-6">
                    {step.description}
                  </p>

                  {/* Key Deliverables Bullet Points */}
                  <div className="space-y-2 pt-2 border-t border-black/5 group-hover:border-white/20">
                    {step.details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-2 text-xs font-medium text-gray-700 group-hover:text-white">
                        <CheckCircle2 className="w-4 h-4 text-[#FF2A2A] group-hover:text-white" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Bottom Section with Sketchbook Handwritten Text */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="mt-28 text-center flex flex-col items-center"
      >
        <div className="inline-block px-8 py-4 bg-black text-white rounded-full shadow-2xl rotate-[-2deg] hover:rotate-0 transition-transform">
          <span className="font-serif italic text-2xl sm:text-3xl font-bold text-[#FF2A2A]">
            Ready to be delivered!
          </span>
        </div>
      </motion.div>
    </section>
  );
};
