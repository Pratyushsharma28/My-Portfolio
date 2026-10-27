import React, { useState } from 'react';
import { ChevronRight, Calendar, Building, Sparkles } from 'lucide-react';
import { JOURNEY_MILESTONES } from '../data/portfolioData';

export const JourneyTimeline: React.FC = () => {
  const [selectedMilestone, setSelectedMilestone] = useState<number>(1);

  return (
    <section id="journey" className="py-24 relative overflow-hidden bg-[#0E0D15]/40 border-y border-white/[0.04]">
      {/* Background Subtle Gradient */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-[#67E8F9]/5 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-mono text-[#A78BFA] uppercase tracking-wider mb-2">
            <span>Evolutionary Path</span>
            <span>·</span>
            <span>2026 &amp; Beyond</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F8F7FC]">
            My Journey
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#A9A6B5]">
            Tracing the trajectory from early computing curiosity and foundational school sports to engineering AI solutions and national hackathons.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Vertical Timeline Steps */}
          <div className="lg:col-span-5 relative space-y-4">
            {/* Vertical connector line */}
            <div className="absolute top-4 bottom-4 left-6 w-[1px] bg-gradient-to-b from-[#A78BFA]/40 via-white/10 to-transparent pointer-events-none hidden sm:block" />

            {JOURNEY_MILESTONES.map((item, idx) => {
              const isSelected = selectedMilestone === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setSelectedMilestone(idx)}
                  className={`relative p-4 sm:pl-14 rounded-xl border transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-[#181721] border-[#A78BFA]/50 shadow-lg shadow-black/40'
                      : 'bg-[#12111A]/40 border-white/[0.06] hover:bg-[#181721]/50 hover:border-white/15'
                  }`}
                >
                  {/* Timeline Node Dot */}
                  <div
                    className={`hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border items-center justify-center transition-colors ${
                      isSelected
                        ? 'border-[#67E8F9] bg-[#67E8F9]/20'
                        : 'border-white/20 bg-[#0B0B10]'
                    }`}
                  >
                    <div
                      className={`w-1.5 h-1.5 rounded-full ${
                        isSelected ? 'bg-[#67E8F9]' : 'bg-white/30'
                      }`}
                    />
                  </div>

                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-mono text-[#A78BFA] block">
                      {item.period}
                    </span>
                    <ChevronRight
                      className={`w-4 h-4 text-[#A9A6B5] transition-transform ${
                        isSelected ? 'rotate-90 text-[#67E8F9]' : ''
                      }`}
                    />
                  </div>
                  <h3
                    className={`text-sm sm:text-base font-semibold mt-1 transition-colors ${
                      isSelected ? 'text-[#F8F7FC]' : 'text-[#A9A6B5]'
                    }`}
                  >
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-[#A9A6B5]/80 mt-1">
                    <span>{item.role}</span>
                    <span>·</span>
                    <span>{item.institution}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Detailed Spotlight Card */}
          <div className="lg:col-span-7 sticky top-28 bg-[#181721] border border-white/[0.08] rounded-2xl p-6 sm:p-8 shadow-xl shadow-black/40">
            {JOURNEY_MILESTONES[selectedMilestone] && (
              <div className="space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/[0.08]">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#67E8F9]">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{JOURNEY_MILESTONES[selectedMilestone].period}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#A9A6B5] font-mono">
                    <Building className="w-3.5 h-3.5 text-[#A78BFA]" />
                    <span>{JOURNEY_MILESTONES[selectedMilestone].institution}</span>
                  </div>
                </div>

                <div>
                  <span className="text-xs font-mono text-[#A78BFA] block mb-1">
                    {JOURNEY_MILESTONES[selectedMilestone].role}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#F8F7FC]">
                    {JOURNEY_MILESTONES[selectedMilestone].title}
                  </h3>
                </div>

                <p className="text-base text-[#F8F7FC]/90 leading-relaxed">
                  {JOURNEY_MILESTONES[selectedMilestone].description}
                </p>

                <div className="space-y-3 pt-2">
                  <span className="text-xs font-mono text-[#A9A6B5] uppercase tracking-wider block">
                    Key Highlights &amp; Insights
                  </span>
                  <ul className="space-y-2">
                    {JOURNEY_MILESTONES[selectedMilestone].details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-3 text-sm text-[#A9A6B5]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#A78BFA] mt-2 shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs text-[#A9A6B5]">
                  <span>Step {selectedMilestone + 1} of {JOURNEY_MILESTONES.length}</span>
                  <button
                    onClick={() =>
                      setSelectedMilestone((prev) => (prev + 1) % JOURNEY_MILESTONES.length)
                    }
                    className="text-[#A78BFA] hover:text-[#F8F7FC] transition-colors font-mono"
                  >
                    Next Stage →
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
