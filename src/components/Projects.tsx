import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

type Project = typeof portfolioData.projects[number];

const projectsData = portfolioData.projects;

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative w-full bg-[#111111] text-white py-28 px-6 md:px-12 lg:px-24">
      {/* Background Subtle Accent */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#FF2A2A]/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#FF2A2A]/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel text-xs font-mono text-white/80 uppercase tracking-widest mb-4">
            <span className="w-2 h-2 rounded-full bg-[#FF2A2A]" />
            <span>Featured Portfolio</span>
          </div>
          <h2 className="font-syne font-black text-4xl sm:text-5xl md:text-6xl text-white tracking-tight">
            Selected Work<span className="text-[#FF2A2A]">.</span>
          </h2>
        </div>

        <p className="text-white/70 font-sans text-sm md:text-base max-w-md">
          A showcase of modern web applications built with precision, speed, and luxury aesthetic standards.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {projectsData.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.15 }}
            className="group relative glass-panel-dark rounded-3xl overflow-hidden border border-white/10 hover:border-[#FF2A2A]/50 transition-all duration-500 flex flex-col justify-between"
          >
            {/* Project Image Container */}
            <div className="relative aspect-video overflow-hidden bg-black/40 border-b border-white/10">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.03] group-hover:brightness-105"
              />
            </div>

            {/* Content Details */}
            <div className="p-6 sm:p-8 flex flex-col justify-between flex-grow">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#FF2A2A] font-bold">
                    {project.category}
                  </span>
                  <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/70">
                    {project.year}
                  </span>
                </div>

                <h3 className="font-syne font-extrabold text-2xl sm:text-3xl text-white group-hover:text-[#FF2A2A] transition-colors mb-3">
                  {project.title}
                </h3>

                <p className="text-sm font-sans text-white/70 line-clamp-2 leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              {/* Tech Badges & Details Trigger */}
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map((t: string) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] font-mono text-white/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="px-4 py-2 rounded-full glass-panel-white text-xs font-syne font-bold uppercase tracking-wider text-white hover:bg-[#FF2A2A] hover:border-[#FF2A2A] transition-all flex items-center justify-center cursor-pointer"
                >
                  Explore
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Interactive Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 select-none"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-[#1c1c1c] text-white max-w-3xl w-full rounded-3xl overflow-hidden border border-white/20 shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 text-white hover:text-[#FF2A2A] transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="aspect-video w-full relative border-b border-white/10 bg-black/40">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <div className="p-6 sm:p-8">
                <span className="text-xs font-mono uppercase tracking-widest text-[#FF2A2A] font-bold block mb-1">
                  {selectedProject.category}
                </span>

                <h3 className="font-syne font-black text-3xl sm:text-4xl text-white mb-4">
                  {selectedProject.title}
                </h3>

                <p className="text-base text-white/80 font-sans leading-relaxed mb-6">
                  {selectedProject.longDescription}
                </p>

                <div className="mb-8">
                  <h4 className="text-xs font-mono text-white/60 uppercase tracking-widest mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((t: string) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-mono text-white"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  {selectedProject.liveUrl ? (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-6 py-3 bg-[#FF2A2A] text-white font-syne font-bold text-xs uppercase tracking-wider rounded-full hover:bg-white hover:text-black transition-all flex items-center gap-2 shadow-lg"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  ) : (
                    <span className="px-6 py-3 bg-white/5 border border-white/10 text-white/40 font-syne font-bold text-xs uppercase tracking-wider rounded-full flex items-center gap-2 cursor-not-allowed">
                      <span>Demo Coming Soon</span>
                    </span>
                  )}
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-6 py-3 glass-panel text-white font-syne font-bold text-xs uppercase tracking-wider rounded-full hover:bg-white/10 transition-all flex items-center gap-2 border border-white/20"
                  >
                    <span>GitHub Code</span>
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
