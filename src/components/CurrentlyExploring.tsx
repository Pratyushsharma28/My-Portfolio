import React, { useState } from 'react';
import { ArrowUpRight, Cpu, Network, Globe, Database, Flame } from 'lucide-react';
import { CURRENTLY_EXPLORING } from '../data/portfolioData';

const iconList = [Cpu, Network, Globe, Database, Flame];

export const CurrentlyExploring: React.FC = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section className="py-24 relative overflow-hidden bg-[#0B0B10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-mono text-[#67E8F9] uppercase tracking-wider mb-2">
            <span>Horizon &amp; Curiosities</span>
            <span>·</span>
            <span>Current R&amp;D Focus</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F8F7FC]">
            Currently Exploring
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#A9A6B5]">
            Active domains where I am experimenting with emerging frameworks, algorithmic paradigms, and product architectures.
          </p>
        </div>

        {/* 5-Item Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CURRENTLY_EXPLORING.map((item, idx) => {
            const Icon = iconList[idx % iconList.length];
            const isHovered = hoveredIdx === idx;
            return (
              <div
                key={item.title}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className={`p-6 sm:p-8 rounded-2xl border transition-all duration-300 flex flex-col justify-between group ${
                  isHovered
                    ? 'bg-[#181721] border-[#A78BFA]/40 shadow-xl shadow-black/50 -translate-y-1'
                    : 'bg-[#12111A]/50 border-white/[0.06] hover:border-white/15'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div
                      className={`p-2.5 rounded-lg transition-colors ${
                        isHovered
                          ? 'bg-[#A78BFA]/20 text-[#A78BFA]'
                          : 'bg-white/5 text-[#A9A6B5]'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono text-[#A9A6B5]">
                      0{idx + 1}
                    </span>
                  </div>

                  <div>
                    <span className="text-xs font-mono text-[#67E8F9] block mb-1">
                      {item.focus}
                    </span>
                    <h3 className="text-xl font-bold text-[#F8F7FC] group-hover:text-[#A78BFA] transition-colors">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-[#A9A6B5] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-[#A9A6B5]">
                  <span>Quad AI School of Technology</span>
                  <span className="text-[#A78BFA] group-hover:translate-x-0.5 transition-transform">
                    Active Study →
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
