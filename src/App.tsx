/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { EducationJourney } from './components/EducationJourney';
import { JourneyTimeline } from './components/JourneyTimeline';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { AchievementsSection } from './components/AchievementsSection';
import { CurrentlyExploring } from './components/CurrentlyExploring';
import { ContactSection } from './components/ContactSection';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  // Track active section for navigation highlight
  useEffect(() => {
    const sectionIds = ['hero', 'about', 'education', 'journey', 'skills', 'projects', 'achievements', 'contact'];
    const handleScroll = () => {
      const scrollY = window.scrollY + 200;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (targetId: string) => {
    const el = document.querySelector(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0B10] text-[#F8F7FC] relative selection:bg-[#A78BFA]/30 selection:text-[#F8F7FC] overflow-x-hidden">
      {/* Top Navigation */}
      <Navigation activeSection={activeSection} />

      {/* Main Content Sections with Perspective & Depth */}
      <main className="space-y-0">
        <Hero onNavigate={handleNavigate} />
        <About />
        <EducationJourney />
        <JourneyTimeline />
        <SkillsSection />
        <ProjectsSection />
        <AchievementsSection />
        <CurrentlyExploring />
        <ContactSection />
      </main>
    </div>
  );
}
