import React, { useState } from "react";
import { ShieldCheck, Layers, Sparkles, Hammer, Award, Clock, ArrowRight, Eye } from "lucide-react";
import { MATERIAL_SWATCHES } from "../data/furnitureData";
import { MaterialSwatch } from "../types";

interface WhyChooseUsProps {
  darkMode: boolean;
  onRequestQuote: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ darkMode, onRequestQuote }) => {
  const [selectedSwatch, setSelectedSwatch] = useState<MaterialSwatch>(MATERIAL_SWATCHES[0]);

  const whyUsItems = [
    {
      icon: Layers,
      title: "100% Custom Designs",
      desc: "Every piece is drawn from scratch to match your exact floor plans, wall heights, and lifestyle habits.",
    },
    {
      icon: Sparkles,
      title: "Premium Rare Materials",
      desc: "Curated Arabescato marbles, solid American black walnut, Italian saddle leathers, and champagne brass.",
    },
    {
      icon: Hammer,
      title: "Master Craftsmen Atelier",
      desc: "Handcrafted by veteran artisans with decades of experience in traditional joinery and precision CNC engineering.",
    },
    {
      icon: Award,
      title: "Modern Architectural Finishes",
      desc: "Tactile cashmere lacquers, anti-fingerprint nano surfaces, and integrated dimmable LED micro-channels.",
    },
    {
      icon: ShieldCheck,
      title: "White-Glove Installation",
      desc: "Seamless, dust-free installation by our specialized in-house team with laser-precision leveling.",
    },
    {
      icon: Clock,
      title: "Built for Generations",
      desc: "Backed by a comprehensive 10-Year Joinery & Craftsmanship Guarantee for total peace of mind.",
    },
  ];

  return (
    <section id="custom-furniture" className={`py-24 transition-colors duration-300 border-t ${darkMode ? "bg-[#1B1B1B] border-white/10" : "bg-[#F5F2EA] border-[#E5DFD1]"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Split Layout: Left Text & Features, Right Interactive Material Swatch Studio */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Why Choose Alfonse */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <div className="flex items-center gap-2 text-[#C89B5B] text-xs font-semibold tracking-[0.25em] uppercase font-mono mb-3">
                <span className="w-6 h-[1px] bg-[#C89B5B]" />
                <span>ATELIER EXCELLENCE</span>
              </div>
              <h2 className={`text-3xl sm:text-5xl font-bold font-heading tracking-tight ${darkMode ? "text-white" : "text-[#1B1B1B]"}`}>
                Why Choose Alfonse Furniture
              </h2>
              <p className="mt-4 text-sm sm:text-base text-gray-500 font-light leading-relaxed">
                We bridge the gap between architectural interior design and bespoke furniture manufacturing, ensuring every piece belongs to your home like a natural extension.
              </p>
            </div>

            {/* 6 Feature Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              {whyUsItems.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-2xl bg-[#C89B5B]/15 border border-[#C89B5B]/30 flex items-center justify-center shrink-0 text-[#C89B5B]">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className={`text-sm font-bold font-heading mb-1 ${darkMode ? "text-white" : "text-[#1B1B1B]"}`}>
                        {item.title}
                      </h4>
                      <p className="text-xs text-gray-500 font-light leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-4">
              <button
                onClick={onRequestQuote}
                className="px-6 py-3.5 bg-[#1B1B1B] dark:bg-[#C89B5B] text-white dark:text-[#1B1B1B] font-bold text-xs uppercase tracking-[0.2em] rounded-2xl hover:bg-[#C89B5B] dark:hover:bg-white transition-all flex items-center gap-3 group"
              >
                <span>Book Material Consultation</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Material Swatch Studio */}
          <div className="lg:col-span-6">
            <div className={`p-8 border rounded-3xl shadow-xl ${darkMode ? "bg-[#141414] border-white/10" : "bg-white border-[#EAE5D9]"}`}>
              <div className="flex items-center justify-between pb-6 border-b border-gray-200 dark:border-white/10 mb-6">
                <div>
                  <span className="text-[#C89B5B] text-[10px] uppercase font-mono tracking-widest block">INTERACTIVE MATERIAL GALLERY</span>
                  <h3 className={`text-xl font-bold font-heading ${darkMode ? "text-white" : "text-[#1B1B1B]"}`}>
                    Touch & Feel Our Finishes
                  </h3>
                </div>
                <div className="text-xs text-gray-400 font-mono flex items-center gap-1">
                  <Eye className="w-3.5 h-3.5 text-[#C89B5B]" />
                  <span>Click Swatch Below</span>
                </div>
              </div>

              {/* Swatch Preview Card */}
              <div className="relative h-64 w-full overflow-hidden mb-6 group border border-[#C89B5B]/30 rounded-2xl">
                <img
                  src={selectedSwatch.textureUrl}
                  alt={selectedSwatch.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="px-2.5 py-0.5 bg-[#C89B5B] text-black text-[9px] font-bold uppercase tracking-widest font-mono mb-2 inline-block rounded-full">
                    {selectedSwatch.category}
                  </span>
                  <h4 className="text-lg font-bold font-heading">{selectedSwatch.name}</h4>
                  <p className="text-xs text-gray-200 font-light mt-1 line-clamp-2">{selectedSwatch.description}</p>
                  <p className="text-[11px] text-[#C89B5B] font-mono mt-2">
                    RECOMMENDED FOR: {selectedSwatch.idealFor}
                  </p>
                </div>
              </div>

              {/* Swatch Selector Grid */}
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
                {MATERIAL_SWATCHES.map((swatch) => (
                  <button
                    key={swatch.id}
                    onClick={() => setSelectedSwatch(swatch)}
                    className={`relative h-16 w-full overflow-hidden border-2 rounded-xl transition-all ${
                      selectedSwatch.id === swatch.id
                        ? "border-[#C89B5B] ring-2 ring-[#C89B5B]/30 scale-105"
                        : "border-transparent opacity-70 hover:opacity-100 hover:border-gray-400"
                    }`}
                    title={swatch.name}
                  >
                    <img
                      src={swatch.textureUrl}
                      alt={swatch.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/20 hover:bg-transparent transition-colors" />
                  </button>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
