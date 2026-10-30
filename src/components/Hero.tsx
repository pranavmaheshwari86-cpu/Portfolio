import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, ChevronDown, Sparkles, Volume2, VolumeX } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface HeroProps {
  onOpenContact?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const userPausedRef = useRef<boolean>(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;

    const attemptPlay = () => {
      if (userPausedRef.current) return;
      video.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.log("Autoplay handled: ", err);
        setIsPlaying(false);
      });
    };

    attemptPlay();

    // IntersectionObserver: automatically stop video when page is scrolled and video is not visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!userPausedRef.current) {
              video.play().then(() => {
                setIsPlaying(true);
              }).catch(() => {});
            }
          } else {
            if (!video.paused) {
              video.pause();
              setIsPlaying(false);
            }
          }
        });
      },
      { threshold: 0.15 }
    );

    const targetElement = sectionRef.current || video;
    observer.observe(targetElement);

    // Retry on user interaction if browser blocked autoplay
    const handleUserInteraction = () => {
      if (video.paused && !userPausedRef.current) {
        attemptPlay();
      }
      window.removeEventListener('click', handleUserInteraction);
      window.removeEventListener('touchstart', handleUserInteraction);
    };
    window.addEventListener('click', handleUserInteraction);
    window.addEventListener('touchstart', handleUserInteraction);

    return () => {
      observer.disconnect();
      window.removeEventListener('click', handleUserInteraction);
      window.removeEventListener('touchstart', handleUserInteraction);
    };
  }, []);

  const togglePlay = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
        userPausedRef.current = true;
      } else {
        userPausedRef.current = false;
        videoRef.current.muted = isMuted;
        videoRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch((err) => {
          console.log("Video play error: ", err);
        });
      }
    }
  };

  const toggleSound = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (videoRef.current) {
      const nextMuted = !videoRef.current.muted;
      videoRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
      if (videoRef.current.paused) {
        userPausedRef.current = false;
        videoRef.current.play().then(() => setIsPlaying(true));
      }
    }
  };

  return (
    <section ref={sectionRef} id="hero" className="relative w-full min-h-screen flex flex-col justify-end overflow-hidden bg-[#111111] text-white pt-24 pb-10 sm:pb-14 lg:pb-16">
      {/* 1. FULLSCREEN RESILIENT VIDEO BACKGROUND */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster={portfolioData.personal.profileImage}
        onLoadedData={() => {
          if (videoRef.current && videoRef.current.paused) {
            videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
          }
        }}
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-100 cursor-pointer"
        onClick={togglePlay}
      >
        <source
          src={portfolioData.personal.videoUrl || "/video.mp4"}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* 2. VIBRANT NEON AMBIENT LIGHTING & GLOWS */}
      <div className="absolute top-1/4 left-10 w-[450px] h-[450px] sm:w-[650px] sm:h-[650px] bg-[#FF2A2A]/25 rounded-full blur-[150px] pointer-events-none z-10" />
      <div className="absolute bottom-10 left-1/3 w-[350px] h-[350px] bg-red-600/15 rounded-full blur-[140px] pointer-events-none z-10" />

      {/* 3. CINEMATIC GRADIENT MASK FOR CRISP TEXT CONTRAST */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#111111]/95 via-[#111111]/60 to-transparent pointer-events-none" />
      <div className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_left,rgba(17,17,17,0.9)_0%,transparent_80%)] pointer-events-none" />


      {/* 4. HERO CONTENT GRID (ALIGNED EXTREME BOTTOM LEFT) */}
      <div className="relative z-20 w-full px-4 sm:px-6 md:px-8 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-end pb-4">
        
        {/* Left Side: Vibrant High-Contrast Content */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: {
              opacity: 1,
              x: 0,
              transition: { staggerChildren: 0.15, delayChildren: 0.2, duration: 0.8, ease: "easeOut" },
            },
          }}
          className="lg:col-span-7 xl:col-span-7 flex flex-col items-start max-w-lg mb-2 lg:mb-0"
        >
          {/* Availability Status Badge */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-white/20 text-[10px] sm:text-xs font-mono text-white/90 uppercase tracking-widest mb-3 backdrop-blur-xl shadow-lg"
          >
            <span className="w-2 h-2 rounded-full bg-[#FF2A2A] animate-pulse shadow-[0_0_10px_#FF2A2A]" />
            <span>Available for Full Stack & AI Projects</span>
          </motion.div>

          {/* Electric Headline (Smaller Font) */}
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 25 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
            }}
            className="font-syne font-black text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl tracking-tight leading-[1.08] mb-4 select-none"
          >
            <span className="block text-white">Hi, I'm a</span>
            <span className="block text-white mt-1 drop-shadow-md">
              FullStack Engineer
            </span>
            <span className="block text-[#FF2A2A] mt-1 drop-shadow-[0_0_35px_rgba(255,42,42,0.85)]">
              & AI Engineer
            </span>
          </motion.h1>

          {/* Subheading Description */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
            className="text-xs sm:text-sm text-white/80 max-w-md font-sans font-light leading-relaxed mb-6 drop-shadow-md"
          >
            Crafting high-performance modern web applications & intelligent AI solutions. Engineered for extreme scalability, cutting-edge UX, and pixel-perfect aesthetics.
          </motion.p>

          {/* Glowing CTA Buttons */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
            className="flex flex-wrap items-center gap-3 sm:gap-4"
          >
            {/* Primary CTA */}
            <a
              href="#projects"
              className="px-6 py-3 bg-white text-black font-syne font-bold text-xs uppercase tracking-wider rounded-full shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300 hover:scale-105 hover:bg-[#FF2A2A] hover:text-white hover:shadow-[0_0_35px_rgba(255,42,42,0.8)] active:scale-95 flex items-center gap-2 group"
            >
              <span>View My Work</span>
              <Sparkles className="w-3.5 h-3.5 text-[#FF2A2A] group-hover:text-white transition-colors" />
            </a>

            {/* Resume CTA */}
            <a
              href={portfolioData.personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#FF2A2A] text-white font-syne font-bold text-xs uppercase tracking-wider rounded-full shadow-[0_0_20px_rgba(255,42,42,0.5)] transition-all duration-300 hover:scale-105 hover:bg-white hover:text-black hover:shadow-[0_0_25px_rgba(255,255,255,0.6)] active:scale-95 flex items-center gap-2"
            >
              <span>Resume</span>
            </a>

            {/* Contact CTA */}
            <button
              onClick={onOpenContact}
              className="px-6 py-3 glass-panel-dark text-white font-syne font-bold text-xs uppercase tracking-wider rounded-full border border-white/25 backdrop-blur-xl transition-all duration-300 hover:border-[#FF2A2A] hover:bg-white/10 hover:scale-105 active:scale-95"
            >
              Contact Me
            </button>
          </motion.div>
        </motion.div>

        {/* Right Side: Interactive Controls (Sound & Play Reel) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
          className="lg:col-span-5 xl:col-span-5 flex flex-col items-center lg:items-end justify-center"
        >
          <div className="flex flex-col items-center gap-5">
            <div className="relative group cursor-pointer" onClick={togglePlay}>
              {/* Outer Glow Ring */}
              <div className="absolute -inset-3 rounded-full bg-[#FF2A2A]/40 blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Rotating Circular SVG Label */}
              <div className="absolute -inset-6 pointer-events-none animate-[spin_20s_linear_infinite] group-hover:animation-paused">
                <svg className="w-full h-full" viewBox="0 0 160 160">
                  <path
                    id="circlePath"
                    d="M 80, 80 m -60, 0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
                    fill="none"
                  />
                  <text className="fill-white/70 text-[10px] font-mono tracking-[0.25em] uppercase">
                    <textPath href="#circlePath" startOffset="0%">
                      • SHOWCASE VIDEO • FULL STACK & AI • PRANAV •
                    </textPath>
                  </text>
                </svg>
              </div>

              {/* Main Glassmorphic Circular Play Reel Button */}
              <div className="w-36 h-36 md:w-44 md:h-44 rounded-full glass-panel-dark border-2 border-white/30 flex flex-col items-center justify-center relative z-10 transition-all duration-500 group-hover:scale-110 group-hover:border-[#FF2A2A] group-hover:shadow-[0_0_50px_rgba(255,42,42,0.8)]">
                {isPlaying ? (
                  <Pause className="w-10 h-10 md:w-12 md:h-12 text-[#FF2A2A] fill-[#FF2A2A] transition-transform duration-300 group-hover:scale-110" />
                ) : (
                  <Play className="w-10 h-10 md:w-12 md:h-12 text-white fill-white ml-1 transition-transform duration-300 group-hover:scale-110 group-hover:text-[#FF2A2A] group-hover:fill-[#FF2A2A]" />
                )}
                
                <span className="mt-2 text-[10px] md:text-xs font-mono uppercase tracking-widest text-white font-bold group-hover:text-[#FF2A2A] transition-colors">
                  {isPlaying ? 'PAUSE' : 'PLAY VIDEO'}
                </span>
              </div>
            </div>

            {/* Sound Toggle Button */}
            <button
              onClick={toggleSound}
              className="px-5 py-2.5 rounded-full glass-panel-dark border border-white/20 text-white hover:text-[#FF2A2A] hover:border-[#FF2A2A] transition-all flex items-center gap-2 text-xs font-mono font-bold shadow-2xl cursor-pointer hover:scale-105 active:scale-95"
            >
              {isMuted ? (
                <>
                  <VolumeX className="w-4 h-4 text-[#FF2A2A]" />
                  <span>MUTED</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-4 h-4 text-emerald-400 animate-pulse" />
                  <span>SOUND ON</span>
                </>
              )}
            </button>
          </div>
        </motion.div>

      </div>

      {/* Desktop Scroll Indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex-col items-center gap-2 text-white/60 hover:text-[#FF2A2A] transition-colors group"
      >
        <span className="text-[10px] font-mono uppercase tracking-widest">Scroll Down</span>
        <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#FF2A2A] transition-colors">
          <ChevronDown className="w-4 h-4 animate-bounce text-white group-hover:text-[#FF2A2A]" />
        </div>
      </motion.a>
    </section>
  );
};




