import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
}

export const Navigation: React.FC<NavigationProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Education', href: '#education' },
    { label: 'Journey', href: '#journey' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0B0B10]/85 backdrop-blur-md border-b border-white/[0.08] shadow-lg shadow-black/40 py-3.5'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Bar 3-Zone Contract */}
          <div className="flex items-center justify-between gap-8">
            {/* Zone 1: Single text element wordmark */}
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#hero');
              }}
              className="text-lg sm:text-xl font-bold tracking-tight text-[#F8F7FC] hover:text-[#A78BFA] transition-colors whitespace-nowrap shrink-0"
            >
              Pratyush Sharma
            </a>

            {/* Zone 2: 4–5 clean single-line text navigation links */}
            <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#A9A6B5]">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className={`transition-colors whitespace-nowrap shrink-0 relative py-1 ${
                      isActive ? 'text-[#F8F7FC] font-semibold' : 'hover:text-[#F8F7FC]'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#A78BFA] to-[#67E8F9] rounded-full" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Zone 3: 1 primary action */}
            <div className="flex items-center gap-3 shrink-0">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#contact');
                }}
                className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold tracking-wide text-[#0B0B10] bg-gradient-to-r from-[#A78BFA] to-[#67E8F9] hover:opacity-90 rounded-lg transition-all duration-200 shadow-md shadow-violet-950/40 whitespace-nowrap shrink-0"
              >
                <span>Let's Connect</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              {/* Mobile Menu Toggle Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-[#A9A6B5] hover:text-[#F8F7FC] hover:bg-white/5 rounded-lg transition-colors focus:outline-none focus:ring-1 focus:ring-[#A78BFA]"
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu (Adheres to 15% mobile sticky cap by rendering as full or compact modal) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0B0B10]/95 backdrop-blur-xl md:hidden pt-20 px-6 flex flex-col justify-between pb-8">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-xl font-medium text-[#F8F7FC] hover:text-[#A78BFA] py-2 border-b border-white/5 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contact');
              }}
              className="mt-4 flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-[#0B0B10] bg-gradient-to-r from-[#A78BFA] to-[#67E8F9] rounded-lg shadow-lg"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </nav>

          <div className="text-xs text-[#A9A6B5] border-t border-white/5 pt-4 text-center">
            Pratyush Sharma · AI &amp; ML Undergrad
          </div>
        </div>
      )}
    </>
  );
};
