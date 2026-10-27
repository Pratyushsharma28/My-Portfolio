import React, { useState } from 'react';
import { Code, Globe, Database, Wrench, Cloud, CheckCircle2, ShieldCheck } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<number>(0);
  const [activeSkillHover, setActiveSkillHover] = useState<string | null>(null);

  const categoryIcons = [Code, Globe, Database, Wrench, Cloud];

  return (
    <section id="skills" className="py-28 relative overflow-hidden bg-[#0A0910] border-t border-white/[0.04] perspective-1500">
      {/* Background soft ambient illumination & Floating 3D wireframe geometry */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-[#A78BFA]/5 via-[#67E8F9]/5 to-transparent blur-[140px] pointer-events-none -z-10" />

      {/* Floating 3D Geometric Ring Accent in Background */}
      <div className="absolute -top-12 -right-12 w-80 h-80 rounded-full border border-violet-500/10 pointer-events-none hidden lg:block animate-panel-float" />
      <div className="absolute -bottom-16 -left-16 w-96 h-96 rounded-full border border-cyan-500/10 pointer-events-none hidden lg:block animate-panel-float-alt" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-mono text-[#A78BFA] uppercase tracking-wider mb-2">
            <span>Student Competencies</span>
            <span>·</span>
            <span>First-Year Foundations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F8F7FC]">
            Technical Skills
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#A9A6B5] leading-relaxed">
            Authentic tools and languages I am learning and applying as a first-year Computer Science Engineering student. No exaggerated frameworks or unverified proficiencies.
          </p>
        </div>

        {/* Category Tabs (Interactive Segmented Control) */}
        <div className="flex flex-wrap gap-2 p-1.5 bg-[#12111A] border border-white/[0.08] rounded-xl mb-10 w-fit">
          {SKILL_CATEGORIES.map((category, idx) => {
            const Icon = categoryIcons[idx % categoryIcons.length];
            const isSelected = selectedCategory === idx;
            return (
              <button
                key={category.title}
                type="button"
                onClick={() => setSelectedCategory(idx)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-medium transition-all duration-200 cursor-pointer whitespace-nowrap ${
                  isSelected
                    ? 'bg-[#181721] text-[#F8F7FC] border border-white/15 shadow-md shadow-black/40'
                    : 'text-[#A9A6B5] hover:text-[#F8F7FC] hover:bg-white/5'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-[#67E8F9]' : 'text-[#A9A6B5]'}`} />
                <span>{category.title}</span>
              </button>
            );
          })}
        </div>

        {/* Main Category Display Box with 3D Depth Card Grid */}
        <div className="bg-[#181721] border border-white/[0.08] rounded-3xl p-6 sm:p-10 shadow-2xl shadow-black/50 relative overflow-hidden">
          {/* Subtle top light refraction */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#A78BFA]/10 to-transparent pointer-events-none" />

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-white/[0.08] relative z-10">
            <div>
              <span className="text-xs font-mono text-[#67E8F9] block mb-1">
                CATEGORY 0{selectedCategory + 1} OF 05
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#F8F7FC]">
                {SKILL_CATEGORIES[selectedCategory].title}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#A9A6B5] max-w-md leading-relaxed">
              {SKILL_CATEGORIES[selectedCategory].description}
            </p>
          </div>

          {/* Skill Items Grid with 3D Tilt perspective */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8 relative z-10">
            {SKILL_CATEGORIES[selectedCategory].skills.map((skill) => {
              const isHovered = activeSkillHover === skill.name;
              return (
                <div
                  key={skill.name}
                  onMouseEnter={() => setActiveSkillHover(skill.name)}
                  onMouseLeave={() => setActiveSkillHover(null)}
                  className={`p-6 rounded-2xl border transition-all duration-300 relative group flex flex-col justify-between ${
                    isHovered
                      ? 'bg-[#1E1D2B] border-[#A78BFA]/50 shadow-2xl shadow-violet-950/30 -translate-y-1'
                      : 'bg-[#12111A]/80 border-white/[0.06] hover:border-white/20'
                  }`}
                  style={{
                    transform: isHovered
                      ? 'perspective(1000px) rotateX(3deg) rotateY(-3deg) translateZ(8px)'
                      : 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0)',
                  }}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="text-lg font-bold text-[#F8F7FC] tracking-tight group-hover:text-[#A78BFA] transition-colors">
                        {skill.name}
                      </h4>
                      {/* Zero-Pill clean unboxed text metadata */}
                      <span className="text-xs font-mono text-[#67E8F9]">
                        {skill.level}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-[#A9A6B5] leading-relaxed">
                      {skill.context}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-[#A9A6B5]">
                    <span className="flex items-center gap-1.5 text-[#A78BFA]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#67E8F9]" />
                      First-Year Study
                    </span>
                    <span className="text-white/20">/</span>
                    <span className="text-[#A9A6B5]">Quad AI</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Holistic First-Year Student Ecosystem Ribbon */}
        <div className="mt-12 p-6 rounded-2xl bg-[#12111A]/60 border border-white/[0.06] flex flex-wrap items-center justify-between gap-6 text-xs text-[#A9A6B5]">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-mono text-[#F8F7FC] flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#67E8F9]" />
              AUTHENTIC SKILL BOUNDARY:
            </span>
            <span>Python</span>
            <span>·</span>
            <span>C</span>
            <span>·</span>
            <span>JavaScript</span>
            <span>·</span>
            <span>HTML &amp; CSS</span>
            <span>·</span>
            <span>MySQL</span>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <span className="font-mono text-[#A78BFA]">PROJECT TOOLS:</span>
            <span>Git</span>
            <span>·</span>
            <span>GitHub</span>
            <span>·</span>
            <span>VS Code</span>
            <span>·</span>
            <span>Google AI Studio</span>
            <span>·</span>
            <span>Render</span>
            <span>·</span>
            <span>Neo4j</span>
          </div>
        </div>
      </div>
    </section>
  );
};
