import React, { useState } from 'react';
import { Terminal, Lightbulb, Users, BookOpen, Sparkles, GraduationCap } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'student' | 'ai' | 'hackathons' | 'learning'>('student');

  const pillars = [
    {
      id: 'student',
      title: 'First-Year Student Foundations',
      icon: GraduationCap,
      content:
        "I'm Pratyush Sharma, a first-year Computer Science student at Quad AI School of Technology, Bengaluru (2026–2030). I'm exploring programming, artificial intelligence, and web development while building projects and learning through practical experiences. Grounded in coursework and core programming logic in C and Python, I focus on understanding systems from the ground up.",
      takeaway: 'Building strong computer science fundamentals through coursework and deliberate practice.',
    },
    {
      id: 'ai',
      title: 'Practical AI & Web Exploration',
      icon: Lightbulb,
      content:
        'As an undergraduate specializing in Artificial Intelligence and Machine Learning, I am passionate about turning theoretical concepts into working prototypes. Through projects like Board Ace AI—an educational quiz platform for CBSE students—and experimenting with graph databases in Neo4j, I enjoy building tools that solve real problems.',
      takeaway: 'Connecting programming fundamentals with modern generative tools and responsive interfaces.',
    },
    {
      id: 'hackathons',
      title: 'Hackathons & Active Collaboration',
      icon: Users,
      content:
        'Being selected for Smart India Hackathon 2026 (SIH 2026) is an exciting milestone early in my college journey. Collaborating with peers under time-bound sprint constraints teaches me rapid problem formulation, modular design, and teamwork under pressure.',
      takeaway: 'Testing ideas in competitive hackathons and collaborating with fellow student builders.',
    },
    {
      id: 'learning',
      title: 'Learning Through Building',
      icon: BookOpen,
      content:
        'I believe that the best way to grow as an aspiring developer is to experiment continuously. From structuring relational schemas in MySQL and writing client-side JavaScript, to deploying projects on Render, I treat each project as a hands-on learning lab.',
      takeaway: 'Improving my technical skills one project, one repository, and one challenge at a time.',
    },
  ];

  const currentPillar = pillars.find((p) => p.id === activeTab) || pillars[0];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#0B0B10]">
      {/* Background radial accent */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#A78BFA]/5 blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-mono text-[#A78BFA] uppercase tracking-wider mb-2">
            <span>First-Year Perspective</span>
            <span>·</span>
            <span>Quad AI School of Technology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F8F7FC] text-balance">
            About Me
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#A9A6B5] leading-relaxed">
            First-year Computer Science Engineering student specializing in AI &amp; ML, exploring code, technology, and practical product building.
          </p>
        </div>

        {/* Featured Student About Me Statement Card */}
        <div className="mb-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#181721] via-[#1A1826] to-[#14131F] border border-white/[0.08] relative overflow-hidden shadow-xl shadow-black/40">
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#67E8F9]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 space-y-3">
            <span className="text-xs font-mono text-[#67E8F9] block tracking-wider uppercase">
              STUDENT PROFILE STATEMENT
            </span>
            <p className="text-base sm:text-xl text-[#F8F7FC] font-normal leading-relaxed italic">
              "{PERSONAL_INFO.about}"
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-[#A9A6B5] font-mono">
              <span className="text-[#A78BFA]">Pratyush Sharma</span>
              <span>·</span>
              <span>First-Year CSE (AI &amp; ML) Undergrad</span>
              <span>·</span>
              <span>Bengaluru, India</span>
            </div>
          </div>
        </div>

        {/* 2-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column: Interactive Pillar Selectors (Functional Tab Controls) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-3">
            <div className="space-y-2">
              <p className="text-xs font-mono text-[#A9A6B5] uppercase tracking-wider mb-3">
                Current Focus &amp; Growth
              </p>
              {pillars.map((pillar) => {
                const Icon = pillar.icon;
                const isSelected = activeTab === pillar.id;
                return (
                  <button
                    key={pillar.id}
                    type="button"
                    onClick={() => setActiveTab(pillar.id as any)}
                    className={`w-full text-left p-4 rounded-xl border transition-all duration-200 flex items-start gap-4 ${
                      isSelected
                        ? 'bg-[#181721] border-[#A78BFA]/40 shadow-lg shadow-black/40 translate-x-1'
                        : 'bg-[#12111A]/50 border-white/[0.06] hover:bg-[#181721]/50 hover:border-white/10 text-[#A9A6B5]'
                    }`}
                  >
                    <div
                      className={`p-2.5 rounded-lg shrink-0 transition-colors ${
                        isSelected
                          ? 'bg-gradient-to-br from-[#A78BFA]/20 to-[#67E8F9]/20 text-[#A78BFA]'
                          : 'bg-white/5 text-[#A9A6B5]'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3
                        className={`text-base font-semibold transition-colors ${
                          isSelected ? 'text-[#F8F7FC]' : 'text-[#A9A6B5]'
                        }`}
                      >
                        {pillar.title}
                      </h3>
                      <p className="text-xs text-[#A9A6B5] line-clamp-1 mt-0.5">
                        {pillar.takeaway}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Quick Profile Snapshot Card */}
            <div className="p-5 bg-[#181721]/70 border border-white/[0.08] rounded-xl mt-4">
              <span className="text-xs font-mono text-[#67E8F9] block mb-2">ACADEMIC SNAPSHOT</span>
              <div className="space-y-1.5 text-xs text-[#A9A6B5]">
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span>Current Standing</span>
                  <span className="text-[#F8F7FC] font-medium">First-Year B.Tech Student</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span>Program</span>
                  <span className="text-[#F8F7FC] font-medium">Computer Science Engineering</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span>Specialization</span>
                  <span className="text-[#A78BFA] font-medium">Artificial Intelligence &amp; ML</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span>College</span>
                  <span className="text-[#F8F7FC] font-medium">Quad AI School of Technology</span>
                </div>
                <div className="flex justify-between py-1">
                  <span>Batch</span>
                  <span className="text-[#67E8F9] font-medium">2026 – 2030</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Deep Editorial Display Card */}
          <div className="lg:col-span-7 flex flex-col justify-between p-8 sm:p-10 bg-[#181721] border border-white/[0.08] rounded-2xl relative shadow-xl shadow-black/50 overflow-hidden">
            {/* Subtle corner light reflection */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#A78BFA]/10 to-transparent pointer-events-none" />

            <div className="space-y-6 relative z-10">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                <span className="text-xs font-mono text-[#A78BFA] tracking-wider uppercase">
                  {currentPillar.title}
                </span>
                <span className="text-xs text-[#A9A6B5] font-mono">
                  First-Year Reflection
                </span>
              </div>

              <p className="text-lg sm:text-xl text-[#F8F7FC] font-normal leading-relaxed text-pretty">
                {currentPillar.content}
              </p>

              <div className="p-4 rounded-xl bg-[#0B0B10]/70 border border-white/5 space-y-1">
                <span className="text-xs font-mono text-[#67E8F9] block">CORE APPROACH</span>
                <p className="text-sm text-[#A9A6B5]">{currentPillar.takeaway}</p>
              </div>
            </div>

            {/* Bottom Statement Bar */}
            <div className="mt-8 pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4 text-xs text-[#A9A6B5]">
              <div className="flex items-center gap-3">
                <span className="text-[#F8F7FC] font-semibold">{PERSONAL_INFO.name}</span>
                <span>·</span>
                <span>Quad AI School of Technology</span>
              </div>
              <div className="font-mono text-[#67E8F9]">
                Bengaluru, Karnataka
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
