import React, { useState } from 'react';
import { Sparkles, MapPin, GraduationCap } from 'lucide-react';

interface HeroProfilePhotoProps {
  mouseOffset?: { x: number; y: number };
}

export const HeroProfilePhoto: React.FC<HeroProfilePhotoProps> = ({
  mouseOffset = { x: 0, y: 0 },
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      className="relative w-full max-w-[290px] sm:max-w-[350px] md:max-w-[390px] lg:max-w-[430px] mx-auto select-none group perspective-1000"
      style={{
        transform: `perspective(1000px) rotateX(${mouseOffset.y * 0.35}deg) rotateY(${
          mouseOffset.x * 0.35
        }deg)`,
        transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      {/* Outer Ambient Violet Glow Backdrop */}
      <div className="absolute -inset-4 sm:-inset-6 bg-gradient-to-tr from-[#A78BFA]/25 via-[#67E8F9]/15 to-transparent blur-3xl rounded-full opacity-75 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none -z-10" />

      {/* Floating Photo Container with Subtle Floating Motion & Fade-in */}
      <div className="relative animate-profile-float">
        {/* Layer 1: Outer Glass Frame with Gradient Border Accent */}
        <div className="p-2 sm:p-2.5 rounded-[2.2rem] sm:rounded-[2.75rem] bg-gradient-to-b from-white/15 via-[#181721]/80 to-white/5 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.7)] backdrop-blur-md">
          {/* Layer 2: Inner Violet Refraction Ring */}
          <div className="relative rounded-[1.8rem] sm:rounded-[2.35rem] overflow-hidden border border-[#A78BFA]/30 bg-[#12111A] aspect-square shadow-inner">
            {/* The Professional Portrait Image */}
            <img
              src="/assets/aistudio/Professional_Portrait_with_Warm_Office_Bokeh_2a48b9f2.png"
              alt="Pratyush Sharma — First-Year Computer Science Engineering Student"
              className={`w-full h-full object-cover object-center transition-all duration-700 ${
                isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
              loading="eager"
              decoding="async"
              onLoad={() => setIsLoaded(true)}
            />

            {/* Subtle Lighting Scrim at base of photo for seamless depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B10]/60 via-transparent to-transparent pointer-events-none" />

            {/* Subtle Glass Specular Glaze */}
            <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />

            {/* Bottom Overlay Pill: Student Identity Marker */}
            <div className="absolute bottom-3 sm:bottom-4 inset-x-3 sm:inset-x-4 p-2 sm:p-2.5 rounded-xl bg-[#0B0B10]/80 backdrop-blur-md border border-white/10 flex items-center justify-between shadow-lg">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#67E8F9] shadow-[0_0_8px_#67E8F9]" />
                <span className="text-[11px] sm:text-xs font-semibold text-[#F8F7FC] tracking-tight">
                  Pratyush Sharma
                </span>
              </div>
              <span className="text-[10px] sm:text-[11px] font-mono text-[#A78BFA]">
                Quad AI '30
              </span>
            </div>
          </div>
        </div>

        {/* Floating Decorative Modern Geometric Ring Accents */}
        <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full border border-[#A78BFA]/40 bg-[#181721]/90 backdrop-blur-md flex items-center justify-center text-[#A78BFA] shadow-lg pointer-events-none">
          <GraduationCap className="w-4 h-4 text-[#67E8F9]" />
        </div>

        <div className="absolute -bottom-2 -left-2 px-3 py-1 rounded-full border border-white/10 bg-[#181721]/90 backdrop-blur-md text-[10px] font-mono text-[#A9A6B5] flex items-center gap-1.5 shadow-lg pointer-events-none">
          <MapPin className="w-3 h-3 text-[#A78BFA]" />
          <span>Bengaluru, India</span>
        </div>
      </div>
    </div>
  );
};
