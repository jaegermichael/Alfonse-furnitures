import React, { useState } from "react";
import { Sparkles, Plus, Check, ArrowRight, X } from "lucide-react";
import { Product } from "../types";

interface InteriorInspirationProps {
  darkMode: boolean;
  onQuickView: (product: Product) => void;
  onAddToQuote: (product: Product) => void;
}

export const InteriorInspiration: React.FC<InteriorInspirationProps> = ({
  darkMode,
  onQuickView,
  onAddToQuote,
}) => {
  const [activeHotspot, setActiveHotspot] = useState<{
    id: string;
    title: string;
    material: string;
    price: string;
    image: string;
    description: string;
  } | null>(null);

  const hotspots = [
    {
      id: "hotspot-1",
      x: 32,
      y: 48,
      title: "Monolithic Arabescato Island",
      material: "Bookmatched Arabescato Italian Marble",
      price: "$24,000",
      image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80",
      description: "Custom waterfall island with integrated under-counter ambient light channel.",
    },
    {
      id: "hotspot-2",
      x: 72,
      y: 35,
      title: "Pocket-Door Pantry Cabinetry",
      material: "Smoked Oak & Champagne Brass",
      price: "$16,500",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
      description: "Concealed motorized pocket doors that glide away to reveal integrated appliances.",
    },
    {
      id: "hotspot-3",
      x: 52,
      y: 72,
      title: "Floating Fluted Console",
      material: "Solid American Walnut",
      price: "$8,200",
      image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=600&q=80",
      description: "Hand-milled fluted timber console with soft-close drawers and brass shadowlines.",
    },
  ];

  return (
    <section className="relative py-24 bg-[#1B1B1B] text-white overflow-hidden">
      {/* Background Editorial Image */}
      <div className="absolute inset-0 opacity-40">
        <img
          src="https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=2000&q=85"
          alt="Interior Inspiration Lookbook"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1B1B1B] via-[#1B1B1B]/70 to-black/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl space-y-4 mb-16">
          <div className="flex items-center gap-2 text-[#C89B5B] text-xs font-semibold tracking-[0.25em] uppercase font-mono">
            <Sparkles className="w-4 h-4 text-[#C89B5B]" />
            <span>INTERIOR LOOKBOOK & SHOP THE LOOK</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-heading tracking-tight text-white">
            Architecture in Harmony with Living
          </h2>
          <p className="text-sm sm:text-base text-gray-300 font-light leading-relaxed">
            Click interactive hotspots on the room composition to inspect handcrafted furniture pieces and custom material specifications.
          </p>
        </div>

        {/* Interactive Editorial Canvas Container */}
        <div className="relative h-[550px] w-full border border-white/20 rounded-3xl shadow-2xl overflow-hidden bg-black/60">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80"
            alt="Borrowdale Residence Editorial Room"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/20" />

          {/* Hotspot Pulsing Buttons */}
          {hotspots.map((spot) => (
            <button
              key={spot.id}
              onClick={() => setActiveHotspot(spot)}
              style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
              className="absolute z-20 group -translate-x-1/2 -translate-y-1/2 focus:outline-none"
            >
              <span className="relative flex h-8 w-8 items-center justify-center">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C89B5B] opacity-75" />
                <span className="relative inline-flex rounded-full h-7 w-7 bg-[#1B1B1B] border-2 border-[#C89B5B] text-white items-center justify-center text-xs font-bold shadow-xl group-hover:scale-125 transition-transform">
                  +
                </span>
              </span>
            </button>
          ))}

          {/* Active Hotspot Preview Popover */}
          {activeHotspot && (
            <div className="absolute bottom-6 right-6 z-30 max-w-sm w-full bg-[#1B1B1B]/95 border border-[#C89B5B] rounded-2xl backdrop-blur-xl p-5 shadow-2xl space-y-3 animate-fade-in">
              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#C89B5B]">
                  SHOP THE LOOK SPECIFICATION
                </span>
                <button
                  onClick={() => setActiveHotspot(null)}
                  className="text-gray-400 hover:text-white p-1 rounded-full"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="flex gap-3 items-center">
                <img
                  src={activeHotspot.image}
                  alt={activeHotspot.title}
                  className="w-20 h-20 object-cover border border-white/20 rounded-xl shrink-0"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="text-sm font-bold font-heading text-white">{activeHotspot.title}</h4>
                  <p className="text-[11px] text-[#C89B5B] font-mono mt-0.5">{activeHotspot.material}</p>
                  <p className="text-xs font-bold text-white mt-1">{activeHotspot.price}</p>
                </div>
              </div>

              <p className="text-xs text-gray-300 font-light leading-relaxed">
                {activeHotspot.description}
              </p>

              <div className="pt-2">
                <button
                  onClick={() => {
                    alert(`Selected custom piece "${activeHotspot.title}" for your quote request.`);
                    setActiveHotspot(null);
                  }}
                  className="w-full py-2.5 bg-[#C89B5B] text-black text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-white transition-colors"
                >
                  Request Exact Spec Quote
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
