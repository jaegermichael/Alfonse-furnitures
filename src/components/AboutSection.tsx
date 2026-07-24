import React from "react";
import { BRAND_STATS } from "../data/furnitureData";

interface AboutSectionProps {
  darkMode: boolean;
  onRequestQuote: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ darkMode, onRequestQuote }) => {
  return (
    <section id="about" className={`py-24 transition-colors duration-300 border-t ${darkMode ? "bg-[#141414] border-white/10" : "bg-[#FAF8F4] border-[#EAE5D9]"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Main Story Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 text-[#C89B5B] text-xs font-semibold tracking-[0.25em] uppercase font-mono">
              <span className="w-6 h-[1px] bg-[#C89B5B]" />
              <span>THE ALFONSE ZIMBABWE HERITAGE</span>
            </div>

            <h2 className={`text-3xl sm:text-5xl font-bold font-heading tracking-tight ${darkMode ? "text-white" : "text-[#1B1B1B]"}`}>
              Mastery in Zimbabwean Joinery & Architecture
            </h2>

            <p className={`text-sm sm:text-base font-light leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
              Headquartered in Harare, Zimbabwe, Alfonse Furniture was established with a single unwavering philosophy: that bespoke furniture should not merely occupy space, but actively elevate luxury living and architectural design.
            </p>

            <p className={`text-sm sm:text-base font-light leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
              Today, our Harare workshop brings together 38 master woodworkers, stone masons, metallurgists, and interior designers. From luxury residences in Borrowdale Brooke and Highlands to executive suites in Bulawayo and safari lodges in Victoria Falls, we craft bespoke furniture systems engineered to endure.
            </p>

            {/* Core Values */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 border border-[#C89B5B]/30 bg-[#C89B5B]/5 rounded-2xl">
                <h4 className="text-xs font-bold font-heading text-[#C89B5B] uppercase mb-1">Uncompromising Quality</h4>
                <p className="text-[11px] text-gray-500 dark:text-gray-400">Sustainably harvested Zambezi Teak, Mukwa, and Mutoko Black Granite.</p>
              </div>

              <div className="p-4 border border-[#C89B5B]/30 bg-[#C89B5B]/5 rounded-2xl">
                <h4 className="text-xs font-bold font-heading text-[#C89B5B] uppercase mb-1">Precision Engineering</h4>
                <p className="text-[11px] text-gray-500 dark:text-gray-400">Millimeter-accurate CNC joinery combined with traditional hand finishing in Harare.</p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onRequestQuote}
                className="px-8 py-3.5 bg-[#C89B5B] text-black font-bold text-xs uppercase tracking-widest rounded-2xl hover:bg-[#1B1B1B] hover:text-white transition-all shadow-lg"
              >
                Schedule Workshop Visit
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative h-[500px] w-full border border-[#C89B5B]/30 shadow-2xl overflow-hidden rounded-3xl">
              <img
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80"
                alt="Alfonse Master Craftsmen Workshop Harare"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-[#C89B5B] text-[10px] font-mono uppercase tracking-widest block">HARARE ATELIER WORKSHOP</span>
                <p className="text-sm font-bold font-heading mt-1">Where Traditional Zimbabwean Craft Meets Modern Architectural Engineering</p>
              </div>
            </div>
          </div>

        </div>

        {/* Stats Counter Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 p-8 border border-[#C89B5B]/30 bg-[#1B1B1B] text-white rounded-3xl shadow-xl">
          {BRAND_STATS.map((stat, i) => (
            <div key={i} className="text-center space-y-1">
              <span className="text-3xl sm:text-4xl font-bold font-heading text-[#C89B5B] block">
                {stat.value}
              </span>
              <span className="text-xs text-gray-300 font-mono uppercase tracking-wider block">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

