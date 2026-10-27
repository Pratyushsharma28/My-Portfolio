import React, { useState } from 'react';
import { ExternalLink, Github, ArrowUpRight, X, Layers, Cpu, Sparkles } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types/portfolio';

export const ProjectsSection: React.FC = () => {
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);
  const [tiltState, setTiltState] = useState<Record<string, { x: number; y: number }>>({});

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, id: string) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 8;
    const y = -((e.clientY - rect.top) / rect.height - 0.5) * 8;
    setTiltState((prev) => ({ ...prev, [id]: { x, y } }));
  };

  const handleMouseLeave = (id: string) => {
    setTiltState((prev) => ({ ...prev, [id]: { x: 0, y: 0 } }));
  };

  return (
    <section id="projects" className="py-28 relative overflow-hidden bg-[#0A0A0F] perspective-2000">
      {/* Background Architectural perspective lines */}
      <div className="absolute inset-0 bg-[radial-gradient(#181721_1px,transparent_1px)] [background-size:32px_32px] opacity-40 pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#A78BFA]/5 blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-[#67E8F9]/5 blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-mono text-[#A78BFA] uppercase tracking-wider mb-2">
            <span>Student Portfolio Showcase</span>
            <span>·</span>
            <span>Built &amp; Explored</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F8F7FC]">
            Featured Projects
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#A9A6B5] leading-relaxed">
            Practical applications built while learning Computer Science, exploring educational AI, graph databases, municipal fleet transit, and student marketplaces.
          </p>
        </div>

        {/* Project Showcase List (Large Cinematic 3D Panels) */}
        <div className="space-y-16">
          {PROJECTS.map((project, idx) => {
            const isReversed = idx % 2 === 1;
            const currentTilt = tiltState[project.id] || { x: 0, y: 0 };

            return (
              <div
                key={project.id}
                onMouseMove={(e) => handleMouseMove(e, project.id)}
                onMouseLeave={() => handleMouseLeave(project.id)}
                className="group bg-[#181721] border border-white/[0.08] hover:border-[#A78BFA]/40 rounded-3xl overflow-hidden shadow-2xl shadow-black/70 transition-all duration-300 card-3d-tilt"
                style={{
                  transform: `perspective(1200px) rotateX(${currentTilt.y}deg) rotateY(${currentTilt.x}deg) translateZ(${
                    currentTilt.x !== 0 ? '8px' : '0'
                  })`,
                }}
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 items-stretch ${
                    isReversed ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Visual Media Column (Image Frame with subtle zoom & fallback) */}
                  <div
                    className={`lg:col-span-7 relative min-h-[300px] sm:min-h-[380px] lg:min-h-[440px] overflow-hidden cursor-pointer ${
                      isReversed ? 'lg:order-2' : 'lg:order-1'
                    }`}
                    onClick={() => setActiveModalProject(project)}
                  >
                    <img
                      src={project.imageSrc}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-95 group-hover:brightness-100"
                      loading="lazy"
                    />

                    {/* Gradient Overlay Scrim */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#181721] via-transparent to-black/20 pointer-events-none" />

                    {/* Floating Inspection Trigger */}
                    <div className="absolute bottom-4 right-4 bg-[#0B0B10]/85 backdrop-blur-md border border-white/10 px-3.5 py-1.5 rounded-xl text-xs font-mono text-[#F8F7FC] flex items-center gap-1.5 opacity-90 group-hover:opacity-100 transition-opacity shadow-lg">
                      <span>Inspect Architecture</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#67E8F9]" />
                    </div>

                    {/* Project Number Watermark/Index */}
                    <div className="absolute top-4 left-4 font-mono text-xs text-[#F8F7FC] bg-[#0B0B10]/85 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 shadow-lg">
                      PROJECT {project.number}
                    </div>
                  </div>

                  {/* Content Column */}
                  <div
                    className={`lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between space-y-6 ${
                      isReversed ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <div className="space-y-4">
                      {/* Zero-Pill unboxed category metadata */}
                      <div className="flex items-center gap-2 text-xs font-mono text-[#A78BFA]">
                        <span>{project.category}</span>
                      </div>

                      <h3
                        onClick={() => setActiveModalProject(project)}
                        className="text-2xl sm:text-3xl font-bold text-[#F8F7FC] group-hover:text-[#A78BFA] transition-colors cursor-pointer"
                      >
                        {project.title}
                      </h3>

                      <p className="text-sm sm:text-base text-[#A9A6B5] leading-relaxed">
                        {project.summary}
                      </p>

                      {/* Key highlights bullet list */}
                      <div className="pt-2 space-y-2">
                        <span className="text-xs font-mono text-[#67E8F9] block">
                          IMPLEMENTATION HIGHLIGHTS
                        </span>
                        <ul className="space-y-1.5">
                          {project.highlights.map((highlight, hIdx) => (
                            <li
                              key={hIdx}
                              className="text-xs sm:text-sm text-[#A9A6B5] flex items-start gap-2"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-[#A78BFA] mt-1.5 shrink-0" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Bottom Metadata & Verified Actions */}
                    <div className="pt-6 border-t border-white/[0.08] space-y-4">
                      {/* Tech stack: clean unboxed text list */}
                      <div className="flex flex-wrap items-center gap-2 text-xs text-[#A9A6B5] font-mono">
                        <span className="text-[#F8F7FC]">STACK:</span>
                        {project.technologies.map((tech, tIdx) => (
                          <React.Fragment key={tech}>
                            <span className="text-[#F8F7FC]/90">{tech}</span>
                            {tIdx < project.technologies.length - 1 && (
                              <span className="text-white/20">·</span>
                            )}
                          </React.Fragment>
                        ))}
                      </div>

                      {/* Action buttons (only verified links as required) */}
                      <div className="flex flex-wrap items-center gap-3 pt-1">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-[#0B0B10] bg-gradient-to-r from-[#A78BFA] to-[#67E8F9] hover:brightness-110 rounded-lg transition-all duration-200 shadow-md shadow-violet-950/40"
                          >
                            <span>Live Deployment</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}

                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-[#F8F7FC] bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-lg transition-colors"
                          >
                            <Github className="w-3.5 h-3.5 text-[#A78BFA]" />
                            <span>GitHub Repo</span>
                          </a>
                        )}

                        <button
                          type="button"
                          onClick={() => setActiveModalProject(project)}
                          className="inline-flex items-center gap-1.5 px-3 py-2 text-xs text-[#A9A6B5] hover:text-[#F8F7FC] hover:bg-white/5 rounded-lg transition-colors cursor-pointer ml-auto"
                        >
                          <span>Overview</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Fullscreen Lightbox / Project Inspection Modal */}
      {activeModalProject && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0B0B10]/90 backdrop-blur-xl animate-fade-in"
          onClick={() => setActiveModalProject(null)}
        >
          <div
            className="bg-[#181721] border border-white/15 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl shadow-black relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Close Button */}
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-5 right-5 p-2 rounded-lg bg-white/5 hover:bg-white/10 text-[#A9A6B5] hover:text-[#F8F7FC] transition-colors focus:outline-none"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="space-y-2 pr-10">
              <div className="flex items-center gap-2 text-xs font-mono text-[#A78BFA]">
                <span>PROJECT {activeModalProject.number}</span>
                <span>·</span>
                <span>{activeModalProject.category}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#F8F7FC]">
                {activeModalProject.title}
              </h3>
            </div>

            {/* Modal Image Asset */}
            <div className="my-6 rounded-2xl overflow-hidden border border-white/10 aspect-video relative">
              <img
                src={activeModalProject.imageSrc}
                alt={activeModalProject.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            {/* In-depth Architectural Description */}
            <div className="space-y-4">
              <h4 className="text-sm font-mono text-[#67E8F9] uppercase tracking-wider">
                System Context &amp; Purpose
              </h4>
              <p className="text-sm sm:text-base text-[#F8F7FC]/90 leading-relaxed">
                {activeModalProject.description}
              </p>

              <div className="p-4 rounded-xl bg-[#12111A] border border-white/5 space-y-2">
                <span className="text-xs font-mono text-[#A78BFA] block">
                  KEY HIGHLIGHTS
                </span>
                <ul className="space-y-1.5">
                  {activeModalProject.highlights.map((h, i) => (
                    <li key={i} className="text-xs sm:text-sm text-[#A9A6B5] flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#67E8F9] mt-2 shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="pt-2">
                <span className="text-xs font-mono text-[#A9A6B5] block mb-2">
                  TECHNOLOGIES &amp; PLATFORMS
                </span>
                <div className="flex flex-wrap gap-2 text-xs font-mono text-[#F8F7FC]">
                  {activeModalProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded bg-white/5 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Action Footer */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="text-xs text-[#A9A6B5] font-mono">
                Pratyush Sharma · First-Year Undergrad Portfolio
              </div>

              <div className="flex items-center gap-3">
                {activeModalProject.liveUrl && (
                  <a
                    href={activeModalProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-[#0B0B10] bg-gradient-to-r from-[#A78BFA] to-[#67E8F9] rounded-lg"
                  >
                    <span>Visit Live Site</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                {activeModalProject.githubUrl && (
                  <a
                    href={activeModalProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-[#F8F7FC] bg-white/10 hover:bg-white/15 rounded-lg border border-white/10"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>View Repository</span>
                  </a>
                )}
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="px-4 py-2 text-xs text-[#A9A6B5] hover:text-[#F8F7FC]"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
