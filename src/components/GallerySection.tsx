import React, { useState } from "react";
import { Eye, X, MapPin, ZoomIn } from "lucide-react";

interface GallerySectionProps {
  darkMode: boolean;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ darkMode }) => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeLightbox, setActiveLightbox] = useState<string | null>(null);

  const filters = ["All", "Kitchens", "Wardrobes", "Living Rooms", "Bedrooms", "Office", "Commercial"];

  const galleryItems = [
    {
      id: "gal-1",
      title: "Geneva Monolithic Kitchen",
      category: "Kitchens",
      image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80",
      location: "Geneva, Switzerland",
    },
    {
      id: "gal-2",
      title: "Mayfair Bronzed Dressing Suite",
      category: "Wardrobes",
      image: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=1200&q=80",
      location: "London, UK",
    },
    {
      id: "gal-3",
      title: "Milan Floating Fluted Console",
      category: "Living Rooms",
      image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1200&q=80",
      location: "Milan, Italy",
    },
    {
      id: "gal-4",
      title: "Zurich Wealth Executive Office",
      category: "Office",
      image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80",
      location: "Zurich, Switzerland",
    },
    {
      id: "gal-5",
      title: "Kyoto Solstice Bedroom Suite",
      category: "Bedrooms",
      image: "https://images.unsplash.com/photo-1540518614846-7ede433c5163?auto=format&fit=crop&w=1200&q=80",
      location: "Kyoto, Japan",
    },
    {
      id: "gal-6",
      title: "Pantheon Dining & Wine Gallery",
      category: "Living Rooms",
      image: "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1200&q=80",
      location: "Paris, France",
    },
    {
      id: "gal-7",
      title: "Backlit Onyx Commercial Reception",
      category: "Commercial",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
      location: "Dubai, UAE",
    },
    {
      id: "gal-8",
      title: "Walnut & Brass Sommelier Wall",
      category: "Kitchens",
      image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1200&q=80",
      location: "Monaco",
    },
  ];

  const filteredItems = galleryItems.filter(
    (item) => activeFilter === "All" || item.category === activeFilter
  );

  return (
    <section id="gallery" className={`py-24 transition-colors duration-300 ${darkMode ? "bg-[#1B1B1B]" : "bg-[#FAF8F4]"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-[#C89B5B] text-xs font-semibold tracking-[0.25em] uppercase font-mono mb-3">
              <span className="w-6 h-[1px] bg-[#C89B5B]" />
              <span>ATELIER GALLERY</span>
            </div>
            <h2 className={`text-3xl sm:text-5xl font-bold font-heading tracking-tight ${darkMode ? "text-white" : "text-[#1B1B1B]"}`}>
              Inspirational Gallery
            </h2>
          </div>
          <p className="text-sm text-gray-500 max-w-md font-light leading-relaxed">
            High-resolution photography showcasing finished installations across international residences and corporate headquarters.
          </p>
        </div>

        {/* Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 no-scrollbar mb-10 border-b border-gray-200 dark:border-white/10">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 text-xs font-semibold uppercase tracking-wider whitespace-nowrap rounded-full transition-all border ${
                activeFilter === filter
                  ? "bg-[#C89B5B] text-black border-[#C89B5B]"
                  : darkMode
                  ? "bg-[#222222] text-gray-400 border-white/10 hover:text-white"
                  : "bg-white text-gray-600 border-[#EAE5D9] hover:text-[#1B1B1B]"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveLightbox(item.image)}
              className="relative group overflow-hidden cursor-pointer border border-[#C89B5B]/20 rounded-3xl break-inside-avoid bg-black"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-[#C89B5B] text-[10px] font-mono uppercase tracking-widest">
                  {item.category}
                </span>
                <h3 className="text-lg font-bold font-heading text-white">{item.title}</h3>
                <div className="flex items-center gap-1.5 text-xs text-gray-300 font-mono mt-1">
                  <MapPin className="w-3 h-3 text-[#C89B5B]" />
                  <span>{item.location}</span>
                </div>
              </div>

              <div className="absolute top-4 right-4 p-2.5 bg-black/60 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                <ZoomIn className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {activeLightbox && (
          <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
            <button
              onClick={() => setActiveLightbox(null)}
              className="absolute top-6 right-6 p-3 text-white hover:text-[#C89B5B] rounded-full bg-white/10"
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={activeLightbox}
              alt="Gallery Lightbox"
              className="max-w-full max-h-[90vh] object-contain border border-[#C89B5B]/40 rounded-3xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </div>
        )}

      </div>
    </section>
  );
};
