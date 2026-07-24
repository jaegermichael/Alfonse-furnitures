import React from "react";
import { ArrowUpRight, Sparkles, Check } from "lucide-react";
import { COLLECTIONS_LIST } from "../data/furnitureData";
import { CollectionCategory } from "../types";

interface FeaturedCollectionsProps {
  onSelectCollection: (category: CollectionCategory) => void;
  darkMode: boolean;
}

export const FeaturedCollections: React.FC<FeaturedCollectionsProps> = ({
  onSelectCollection,
  darkMode,
}) => {
  return (
    <section id="collections" className={`py-24 transition-colors duration-300 ${darkMode ? "bg-[#141414]" : "bg-[#FAF8F4]"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 text-[#C89B5B] text-xs font-semibold tracking-[0.25em] uppercase font-mono mb-3">
              <span className="w-6 h-[1px] bg-[#C89B5B]" />
              <span>COLLECTIONS ARCHIVE</span>
            </div>
            <h2 className={`text-3xl sm:text-5xl font-bold font-heading tracking-tight ${darkMode ? "text-white" : "text-[#1B1B1B]"}`}>
              Featured Collections
            </h2>
          </div>
          <p className="text-sm sm:text-base text-gray-500 max-w-md font-light leading-relaxed">
            Explorations in spatial harmony, handcrafted joinery, and monolithic materials tailored to modern living spaces.
          </p>
        </div>

        {/* Collection Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {COLLECTIONS_LIST.map((col, index) => (
            <div
              key={col.category}
              onClick={() => onSelectCollection(col.category)}
              className={`group relative overflow-hidden cursor-pointer rounded-3xl transition-all duration-500 border ${
                darkMode
                  ? "bg-[#1E1E1E] border-white/10 hover:border-[#C89B5B]"
                  : "bg-white border-[#EAE5D9] hover:border-[#C89B5B]"
              } flex flex-col justify-between shadow-sm hover:shadow-2xl`}
            >
              {/* Image Container with Zoom */}
              <div className="relative h-72 w-full overflow-hidden bg-gray-900">
                <img
                  src={col.heroImage}
                  alt={col.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Top Item Count Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-black/60 backdrop-blur-md text-white text-[10px] font-mono uppercase tracking-widest border border-white/20 rounded-full">
                    {col.itemCount} Designs
                  </span>
                </div>

                {/* Top Right Hover Arrow */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30 transition-transform duration-300 group-hover:bg-[#C89B5B] group-hover:scale-110">
                  <ArrowUpRight className="w-5 h-5" />
                </div>

                {/* Bottom Overlay Title on Image */}
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-[#C89B5B] text-[11px] font-mono uppercase tracking-widest mb-1">
                    0{index + 1} / {col.subtitle}
                  </p>
                  <h3 className="text-xl font-bold font-heading text-white tracking-tight">
                    {col.title}
                  </h3>
                </div>
              </div>

              {/* Card Body & Features */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <p className={`text-xs font-light leading-relaxed mb-4 line-clamp-2 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                  {col.description}
                </p>

                {/* Bullet Highlights */}
                <div className="space-y-1.5 pt-3 border-t border-gray-200 dark:border-white/10 mb-4">
                  {col.keyFeatures.slice(0, 2).map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-[11px] text-gray-500 dark:text-gray-400">
                      <Check className="w-3 h-3 text-[#C89B5B] shrink-0" />
                      <span className="truncate">{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Bottom CTA Link */}
                <button className="w-full py-2.5 text-xs uppercase tracking-widest font-semibold text-[#C89B5B] group-hover:text-[#1B1B1B] dark:group-hover:text-white transition-colors flex items-center justify-between border-t border-transparent group-hover:border-[#C89B5B]/30 pt-3">
                  <span>View Collection</span>
                  <span className="text-lg">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
