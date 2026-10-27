import React, { useState } from 'react';
import { GraduationCap, Award, BookOpen, MapPin, CheckCircle2, ChevronRight, School, Sparkles } from 'lucide-react';
import { EDUCATION_STAGES } from '../data/portfolioData';

export const EducationJourney: React.FC = () => {
  const [activeStageId, setActiveStageId] = useState<string>('school-03');

  return (
    <section id="education" className="py-28 relative overflow-hidden bg-[#0A0910] border-t border-white/[0.06]">
      {/* Background radial glow */}
      <div className="absolute top-1/4 right-1/3 w-[600px] h-[350px] bg-gradient-to-br from-[#A78BFA]/10 to-[#67E8F9]/5 blur-[130px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#A78BFA]/5 blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-mono text-[#A78BFA] uppercase tracking-wider mb-2">
            <span>Academic Foundations</span>
            <span>·</span>
            <span>School to College</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F8F7FC]">
            My Educational Journey
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#A9A6B5] leading-relaxed">
            The chronological path of my schooling — starting with early primary education in Songadh, through middle school, CBSE secondary &amp; senior secondary examinations at Atomic Energy Central School, to starting B.Tech at Quad AI School of Technology.
          </p>
        </div>

        {/* Cinematic Timeline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Interactive Visual Progression */}
          <div className="lg:col-span-5 relative space-y-6">
            {/* Animated Connecting Line */}
            <div className="absolute top-6 bottom-6 left-7 w-[2px] bg-gradient-to-b from-[#A78BFA] via-[#67E8F9] to-white/10 pointer-events-none hidden sm:block shadow-[0_0_12px_rgba(167,139,250,0.5)]" />

            {EDUCATION_STAGES.map((stage, idx) => {
              const isSelected = activeStageId === stage.id;
              return (
                <div
                  key={stage.id}
                  onClick={() => setActiveStageId(stage.id)}
                  className={`relative p-5 sm:pl-16 rounded-2xl border transition-all duration-300 cursor-pointer group ${
                    isSelected
                      ? 'bg-[#181721] border-[#A78BFA]/60 shadow-xl shadow-black/50 translate-x-1 sm:translate-x-2'
                      : 'bg-[#12111A]/60 border-white/[0.06] hover:bg-[#181721]/50 hover:border-white/20'
                  }`}
                  style={{
                    transform: isSelected
                      ? 'perspective(1000px) rotateX(1deg) translateZ(10px)'
                      : 'perspective(1000px) rotateX(0deg)',
                  }}
                >
                  {/* Timeline Glowing Node */}
                  <div
                    className={`hidden sm:flex absolute left-4.5 top-6 w-5 h-5 rounded-full border items-center justify-center transition-all duration-300 ${
                      isSelected
                        ? 'border-[#67E8F9] bg-[#0B0B10] shadow-[0_0_14px_rgba(103,232,249,0.8)] scale-110'
                        : 'border-white/30 bg-[#12111A] group-hover:border-white/60'
                    }`}
                  >
                    <div
                      className={`w-2 h-2 rounded-full transition-colors ${
                        isSelected ? 'bg-[#67E8F9]' : 'bg-white/40'
                      }`}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-mono text-[#A78BFA]">
                        STAGE {stage.stageNumber}
                        {stage.isCurrent && ' · CURRENT'}
                      </span>
                      <span className="text-xs font-mono text-[#67E8F9] bg-white/5 px-2 py-0.5 rounded">
                        {stage.classes}
                      </span>
                    </div>

                    <h3
                      className={`text-base sm:text-lg font-bold transition-colors ${
                        isSelected ? 'text-[#F8F7FC]' : 'text-[#A9A6B5] group-hover:text-[#F8F7FC]'
                      }`}
                    >
                      {stage.schoolName}
                    </h3>

                    {stage.board && (
                      <div className="text-xs font-mono text-[#A9A6B5]">
                        Board: <span className="text-[#F8F7FC]">{stage.board}</span>
                      </div>
                    )}

                    {stage.location && (
                      <div className="flex items-center gap-1.5 text-xs text-[#A9A6B5]/80">
                        <MapPin className="w-3.5 h-3.5 text-[#67E8F9]" />
                        <span>{stage.location}</span>
                      </div>
                    )}
                  </div>

                  <div className="mt-3 pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs text-[#A9A6B5]">
                    <span className="line-clamp-1">{stage.description}</span>
                    <ChevronRight
                      className={`w-4 h-4 shrink-0 transition-transform ${
                        isSelected ? 'rotate-90 text-[#67E8F9]' : 'group-hover:translate-x-1'
                      }`}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Detailed 3D Perspective Spotlight */}
          <div className="lg:col-span-7 sticky top-28">
            {(() => {
              const currentStage =
                EDUCATION_STAGES.find((s) => s.id === activeStageId) || EDUCATION_STAGES[2];

              return (
                <div className="bg-[#181721] border border-white/[0.12] rounded-3xl p-6 sm:p-10 shadow-2xl shadow-black/60 relative overflow-hidden transition-all duration-300">
                  {/* Subtle architectural background texture */}
                  <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-[#A78BFA]/15 via-transparent to-transparent pointer-events-none" />

                  <div className="space-y-6 relative z-10">
                    {/* Header bar */}
                    <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-white/[0.08]">
                      <div className="flex items-center gap-2 text-xs font-mono text-[#A78BFA]">
                        <School className="w-4 h-4 text-[#67E8F9]" />
                        <span>STAGE {currentStage.stageNumber} OF 04</span>
                      </div>
                      <span className="text-xs font-mono text-[#67E8F9] bg-[#0B0B10] border border-white/10 px-3 py-1 rounded-full">
                        {currentStage.classes}
                      </span>
                    </div>

                    {/* School Title */}
                    <div>
                      <span className="text-xs font-mono text-[#A9A6B5] block mb-1">
                        INSTITUTION
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F8F7FC] tracking-tight">
                        {currentStage.schoolName}
                      </h3>
                      {currentStage.location && (
                        <p className="text-xs text-[#A9A6B5] flex items-center gap-1.5 mt-1.5">
                          <MapPin className="w-3.5 h-3.5 text-[#A78BFA]" />
                          <span>{currentStage.location}</span>
                        </p>
                      )}
                    </div>

                    {/* Narrative Description */}
                    <div className="p-4 sm:p-5 rounded-2xl bg-[#12111A]/90 border border-white/[0.06]">
                      <p className="text-sm sm:text-base text-[#F8F7FC]/90 leading-relaxed">
                        {currentStage.description}
                      </p>
                    </div>

                    {/* Milestones list */}
                    <div className="space-y-3">
                      <span className="text-xs font-mono text-[#67E8F9] uppercase tracking-wider block">
                        Academic &amp; Extracurricular Growth
                      </span>
                      <ul className="space-y-2">
                        {currentStage.milestones.map((milestone, mIdx) => (
                          <li
                            key={mIdx}
                            className="flex items-start gap-3 text-xs sm:text-sm text-[#A9A6B5]"
                          >
                            <CheckCircle2 className="w-4 h-4 text-[#A78BFA] mt-0.5 shrink-0" />
                            <span>{milestone}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Class 10 & 12 CBSE Scores Card (Featured for Atomic Energy Central School) */}
                    {currentStage.scores && (
                      <div className="pt-4 border-t border-white/[0.08] space-y-3">
                        <div className="flex items-center gap-2 text-xs font-mono text-[#67E8F9]">
                          <Award className="w-4 h-4" />
                          <span>CBSE BOARD EXAMINATIONS</span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {currentStage.scores.map((score, sIdx) => (
                            <div
                              key={sIdx}
                              className="p-4 rounded-xl bg-[#0B0B10] border border-white/10 space-y-1.5"
                            >
                              <div className="flex items-center justify-between">
                                <span className="text-xs font-bold text-[#F8F7FC]">
                                  {score.highlight}
                                </span>
                                <span className="text-[11px] font-mono text-[#A78BFA]">
                                  CBSE
                                </span>
                              </div>
                              <p className="text-xs text-[#A9A6B5] leading-relaxed">
                                {score.details}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Current Higher Education Indicator if College */}
                    {currentStage.isCurrent && (
                      <div className="p-4 rounded-xl bg-gradient-to-r from-[#A78BFA]/10 to-[#67E8F9]/10 border border-[#A78BFA]/30 flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2 text-[#F8F7FC]">
                          <GraduationCap className="w-4 h-4 text-[#67E8F9]" />
                          <span className="font-semibold">Current B.Tech Undergrad (Class of 2030)</span>
                        </div>
                        <span className="text-[#A78BFA] font-mono">First-Year</span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      </div>
    </section>
  );
};
