import React, { useState, useEffect } from "react";
import { ChevronRight, ArrowDown, Shield, Compass, Sliders, Play, Pause } from "lucide-react";
import { HERO_SLIDES } from "../data/furnitureData";

interface HeroProps {
  onExploreClick: () => void;
  onRequestQuoteClick: () => void;
  darkMode: boolean;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreClick,
  onRequestQuoteClick,
  darkMode,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const activeSlideData = HERO_SLIDES[currentSlide];

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-20">
      {/* Background Slides with Crossfade */}
      {HERO_SLIDES.map((slide, idx) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105 pointer-events-none"
          }`}
          style={{ transitionProperty: "opacity, transform" }}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover object-center transform scale-105 animate-pulse-subtle"
            referrerPolicy="no-referrer"
          />
          {/* Subtle Dark Editorial Vignette Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1B1B1B] via-[#1B1B1B]/50 to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1B1B1B]/80 via-transparent to-black/40" />
        </div>
      ))}

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 flex flex-col justify-between min-h-[85vh]">
        {/* Top Floating Badge */}
        <div className="flex items-center justify-between w-full mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-medium tracking-widest uppercase shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#C89B5B] animate-ping" />
            <span>{activeSlideData.badge}</span>
          </div>

          <div className="hidden md:flex items-center gap-3 text-xs text-gray-300 font-mono bg-black/30 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10">
            <span>LOCATION: {activeSlideData.location}</span>
            <span className="text-[#C89B5B]">•</span>
            <span>WORKSHOP: HARARE, ZIMBABWE</span>
          </div>
        </div>

        {/* Main Editorial Text Block */}
        <div className="max-w-3xl space-y-6 my-auto">
          <div className="inline-block">
            <p className="text-[#C89B5B] uppercase text-xs sm:text-sm font-semibold tracking-[0.3em] mb-2 font-mono">
              HANDCRAFTED LUXURY FURNITURE & ATELIER JOINERY
            </p>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold font-heading text-white tracking-tight leading-[1.08] drop-shadow-md">
            Furniture Designed Around Your Lifestyle
          </h1>

          <p className="text-base sm:text-xl text-gray-200 font-light max-w-2xl leading-relaxed">
            Bespoke custom furniture for luxury homes, executive suites, and corporate spaces in Harare and across Zimbabwe. Tailored with solid Teak, Mukwa, Mutoko granite, and fine finishes.
          </p>

          {/* Action Buttons */}
          <div className="pt-4 flex flex-wrap items-center gap-4">
            <button
              onClick={onExploreClick}
              className="px-8 py-4 bg-[#C89B5B] hover:bg-white text-[#1B1B1B] font-bold text-xs uppercase tracking-[0.2em] rounded-full transition-all duration-300 shadow-xl flex items-center gap-3 group"
            >
              <span>Explore Collection</span>
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={onRequestQuoteClick}
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md font-semibold text-xs uppercase tracking-[0.2em] rounded-full transition-all duration-300 flex items-center gap-3 group shadow-lg"
            >
              <span>Request Consultation & Quote</span>
            </button>
          </div>
        </div>

        {/* Hero Bottom Floating Glass Bar */}
        <div className="pt-10 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-6 border-t border-white/15">
          {/* Slide Selector Controls */}
          <div className="flex items-center gap-3">
            {HERO_SLIDES.map((slide, idx) => (
              <button
                key={slide.id}
                onClick={() => setCurrentSlide(idx)}
                className={`text-left px-4 py-2 rounded-2xl border transition-all text-xs ${
                  idx === currentSlide
                    ? "border-[#C89B5B] bg-[#C89B5B]/20 text-white font-semibold shadow-md"
                    : "border-white/20 bg-black/20 text-gray-400 hover:text-white"
                }`}
              >
                <span className="block text-[10px] text-[#C89B5B] font-mono">0{idx + 1}</span>
                <span className="truncate max-w-[120px] block">{slide.videoTag}</span>
              </button>
            ))}

            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-2.5 border border-white/20 text-gray-300 hover:text-white rounded-full bg-black/20"
              title={isPlaying ? "Pause auto slide" : "Play auto slide"}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            </button>
          </div>

          {/* Quick Value Metrics */}
          <div className="grid grid-cols-3 gap-6 text-white text-xs bg-white/5 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/10">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#C89B5B]" />
              <div>
                <span className="font-bold block text-sm">10-Yr Guarantee</span>
                <span className="text-[10px] text-gray-400">Harare Craftsmanship</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Compass className="w-4 h-4 text-[#C89B5B]" />
              <div>
                <span className="font-bold block text-sm">3D Joinery Models</span>
                <span className="text-[10px] text-gray-400">Precision Blueprinting</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Sliders className="w-4 h-4 text-[#C89B5B]" />
              <div>
                <span className="font-bold block text-sm">100% Bespoke</span>
                <span className="text-[10px] text-gray-400">Tailored Proportions</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 hidden md:block">
        <button
          onClick={onExploreClick}
          className="flex flex-col items-center gap-1 text-gray-400 hover:text-[#C89B5B] transition-colors"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] font-mono">Scroll</span>
          <ArrowDown className="w-4 h-4 animate-bounce text-[#C89B5B]" />
        </button>
      </div>
    </section>
  );
};
