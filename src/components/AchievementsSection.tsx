import React, { useState } from 'react';
import { Award, Compass, Trophy, Activity, Code, Sparkles, CheckCircle } from 'lucide-react';
import { ACHIEVEMENTS } from '../data/portfolioData';

const iconMap: Record<string, React.ElementType> = {
  Award,
  Compass,
  Trophy,
  Activity,
  Code,
};

export const AchievementsSection: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState<number>(0);

  return (
    <section id="achievements" className="py-24 relative overflow-hidden bg-[#0D0C13]/60 border-t border-white/[0.04]">
      {/* Background ambient light */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#A78BFA]/5 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-mono text-[#A78BFA] uppercase tracking-wider mb-2">
            <span>Milestones &amp; Honors</span>
            <span>·</span>
            <span>Track Record</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F8F7FC]">
            Achievements
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#A9A6B5]">
            Recognitions across national hackathons, collegiate problem-solving, strategic chess, athletics, and developer club leadership.
          </p>
        </div>

        {/* Editorial Timeline & Card Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column: Interactive Milestone List */}
          <div className="lg:col-span-6 space-y-3">
            {ACHIEVEMENTS.map((achievement, idx) => {
              const Icon = iconMap[achievement.iconName] || Award;
              const isSelected = selectedIdx === idx;
              return (
                <div
                  key={achievement.title}
                  onClick={() => setSelectedIdx(idx)}
                  className={`p-4 sm:p-5 rounded-xl border transition-all duration-200 cursor-pointer flex items-start gap-4 ${
                    isSelected
                      ? 'bg-[#181721] border-[#A78BFA]/40 shadow-lg shadow-black/40 translate-x-1'
                      : 'bg-[#12111A]/40 border-white/[0.06] hover:bg-[#181721]/60 hover:border-white/15'
                  }`}
                >
                  <div
                    className={`p-2.5 rounded-lg shrink-0 mt-0.5 ${
                      isSelected
                        ? 'bg-gradient-to-br from-[#A78BFA]/20 to-[#67E8F9]/20 text-[#67E8F9]'
                        : 'bg-white/5 text-[#A9A6B5]'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-mono text-[#A78BFA]">
                        {achievement.category}
                      </span>
                      <span className="text-xs text-[#A9A6B5] font-mono">
                        {achievement.context}
                      </span>
                    </div>

                    <h3
                      className={`text-base font-semibold mt-1 transition-colors ${
                        isSelected ? 'text-[#F8F7FC]' : 'text-[#A9A6B5]'
                      }`}
                    >
                      {achievement.title}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Editorial Highlight Feature */}
          <div className="lg:col-span-6 bg-[#181721] border border-white/[0.08] rounded-2xl p-6 sm:p-10 flex flex-col justify-between shadow-2xl shadow-black/50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-[#67E8F9]/10 to-transparent pointer-events-none" />

            <div className="space-y-6 relative z-10">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                <span className="text-xs font-mono text-[#67E8F9] tracking-wider uppercase">
                  {ACHIEVEMENTS[selectedIdx].category}
                </span>
                <span className="text-xs text-[#A9A6B5] font-mono">
                  {ACHIEVEMENTS[selectedIdx].context}
                </span>
              </div>

              <div>
                <span className="text-xs font-mono text-[#A78BFA] block mb-2">HONOR DETAIL</span>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#F8F7FC] leading-snug">
                  {ACHIEVEMENTS[selectedIdx].title}
                </h3>
              </div>

              <p className="text-base text-[#F8F7FC]/90 leading-relaxed">
                {ACHIEVEMENTS[selectedIdx].description}
              </p>

              <div className="p-4 rounded-xl bg-[#0B0B10]/70 border border-white/5 space-y-1">
                <span className="text-xs font-mono text-[#A78BFA] block">KEY TAKEAWAY</span>
                <p className="text-xs sm:text-sm text-[#A9A6B5]">
                  Cultivated high-pressure analytical composure, team alignment, and rapid strategy execution.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/[0.08] flex items-center justify-between text-xs text-[#A9A6B5]">
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-[#67E8F9]" />
                Quad AI School of Technology
              </span>
              <span className="font-mono text-[#A78BFA]">Verified Milestone</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
