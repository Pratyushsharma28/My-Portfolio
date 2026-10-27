import React, { useState, useEffect, useRef } from 'react';
import { ArrowDown, Code2, MapPin, ExternalLink, GraduationCap, Sparkles } from 'lucide-react';
import { HeroProfilePhoto } from './HeroProfilePhoto';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onNavigate: (targetId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  // Subtle interactive cursor-responsive perspective on the whole hero frame
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 16;
      const y = (e.clientY / innerHeight - 0.5) * 16;
      setMouseOffset({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen pt-28 pb-16 flex flex-col justify-center overflow-hidden perspective-1500"
    >
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#18172120_1px,transparent_1px),linear-gradient(to_bottom,#18172120_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Floating 3D Geometric Background Panels (Rotating gently into position) */}
      <div
        className="absolute top-20 left-12 w-48 h-48 rounded-3xl border border-white/[0.04] bg-gradient-to-br from-[#181721]/30 to-transparent backdrop-blur-[2px] animate-panel-float pointer-events-none hidden md:block"
        style={{
          transform: `perspective(1000px) rotateX(${mouseOffset.y * 0.4}deg) rotateY(${mouseOffset.x * 0.4}deg)`,
        }}
      />
      <div
        className="absolute bottom-24 right-16 w-64 h-64 rounded-3xl border border-white/[0.03] bg-gradient-to-tl from-[#67E8F9]/5 via-[#181721]/20 to-transparent backdrop-blur-[2px] animate-panel-float-alt pointer-events-none hidden lg:block"
        style={{
          transform: `perspective(1000px) rotateX(${-mouseOffset.y * 0.5}deg) rotateY(${-mouseOffset.x * 0.5}deg)`,
        }}
      />

      {/* Shifting Radial Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-[#A78BFA]/10 via-[#67E8F9]/5 to-transparent blur-[140px] rounded-full pointer-events-none -z-10" />

      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 animate-camera-dolly"
        style={{
          transform: `perspective(1500px) rotateX(${-mouseOffset.y * 0.25}deg) rotateY(${mouseOffset.x * 0.25}deg)`,
          transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        {/* Split-Screen Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 order-2 lg:order-1">
            {/* Eyebrow & Accurate First-Year Student Kicker */}
            <div className="flex flex-wrap items-center gap-3 text-xs tracking-widest text-[#A78BFA] font-mono">
              <span className="flex items-center gap-1.5 text-[#67E8F9]">
                <GraduationCap className="w-4 h-4" />
                FIRST-YEAR CSE (AI &amp; ML) STUDENT
              </span>
              <span className="text-white/20">/</span>
              <span className="text-[#A9A6B5] flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#A78BFA]" />
                Bengaluru, India
              </span>
            </div>

            {/* 3D Perspective Reveal of Name */}
            <div className="space-y-3 transform-style-3d">
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[#F8F7FC] text-balance animate-perspective-reveal">
                Pratyush Sharma
              </h1>
              {/* Refined Staggered Subtitle Reveal */}
              <p
                className="text-lg sm:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#A78BFA] via-[#C4B5FD] to-[#67E8F9] tracking-wide animate-perspective-reveal"
                style={{ animationDelay: '0.15s' }}
              >
                {PERSONAL_INFO.role}
              </p>
            </div>

            {/* Statement Quote */}
            <div
              className="border-l border-[#A78BFA]/50 pl-4 py-1 animate-perspective-reveal"
              style={{ animationDelay: '0.25s' }}
            >
              <p className="text-lg sm:text-xl font-normal text-[#F8F7FC]/90 italic">
                "{PERSONAL_INFO.statement}"
              </p>
            </div>

            {/* Natural First-Year Student Description */}
            <p
              className="text-base sm:text-lg text-[#A9A6B5] leading-relaxed max-w-2xl text-pretty animate-perspective-reveal"
              style={{ animationDelay: '0.35s' }}
            >
              {PERSONAL_INFO.description}
            </p>

            {/* CTAs & Social Quicklinks */}
            <div
              className="pt-2 flex flex-wrap items-center gap-4 animate-perspective-reveal"
              style={{ animationDelay: '0.45s' }}
            >
              <button
                type="button"
                onClick={() => onNavigate('#projects')}
                className="px-6 py-3 text-sm font-semibold text-[#0B0B10] bg-gradient-to-r from-[#A78BFA] to-[#67E8F9] hover:brightness-110 active:scale-95 rounded-lg shadow-lg shadow-violet-950/40 transition-all duration-200 cursor-pointer whitespace-nowrap"
              >
                Explore My Work
              </button>

              <button
                type="button"
                onClick={() => onNavigate('#education')}
                className="px-6 py-3 text-sm font-semibold text-[#F8F7FC] bg-[#181721] hover:bg-[#201F2D] border border-white/10 hover:border-white/20 rounded-lg active:scale-95 transition-all duration-200 cursor-pointer whitespace-nowrap"
              >
                Educational Journey
              </button>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 text-sm font-medium text-[#A9A6B5] hover:text-[#F8F7FC] hover:bg-white/5 rounded-lg transition-colors inline-flex items-center gap-2 whitespace-nowrap"
              >
                <Code2 className="w-4 h-4 text-[#A78BFA]" />
                <span>GitHub Profile</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-60" />
              </a>
            </div>
          </div>

          {/* Right Column: Prominent Professional Profile Portrait */}
          <div className="lg:col-span-5 relative flex items-center justify-center order-1 lg:order-2">
            <HeroProfilePhoto mouseOffset={mouseOffset} />
          </div>
        </div>

        {/* Full-width Structural Proof Strip Below Hero Split */}
        <div className="mt-16 pt-8 border-t border-white/[0.08] grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <span className="text-xs text-[#A9A6B5] font-mono block mb-1">DEGREE PROGRAM</span>
            <p className="text-sm sm:text-base font-semibold text-[#F8F7FC]">B.Tech in CSE</p>
            <span className="text-xs text-[#A78BFA]">Specializing in AI &amp; ML</span>
          </div>

          <div>
            <span className="text-xs text-[#A9A6B5] font-mono block mb-1">COLLEGE &amp; BATCH</span>
            <p className="text-sm sm:text-base font-semibold text-[#F8F7FC]">Quad AI School</p>
            <span className="text-xs text-[#67E8F9]">First-Year (2026–2030)</span>
          </div>

          <div>
            <span className="text-xs text-[#A9A6B5] font-mono block mb-1">HACKATHON HONORS</span>
            <p className="text-sm sm:text-base font-semibold text-[#67E8F9]">Smart India Hackathon</p>
            <span className="text-xs text-[#A9A6B5]">Selected Team 2026</span>
          </div>

          <div>
            <span className="text-xs text-[#A9A6B5] font-mono block mb-1">CAMPUS LOCATION</span>
            <p className="text-sm sm:text-base font-semibold text-[#F8F7FC]">Bengaluru, India</p>
            <span className="text-xs text-[#A9A6B5]">Technology Capital</span>
          </div>
        </div>

        {/* Subtle Scroll Down Prompt */}
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => onNavigate('#about')}
            className="text-xs text-[#A9A6B5] hover:text-[#A78BFA] transition-colors flex items-center gap-2 font-mono"
            aria-label="Scroll to About Me section"
          >
            <span>SCROLL TO EXPLORE</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};
