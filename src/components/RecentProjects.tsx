import React, { useState } from "react";
import { MapPin, Calendar, Sparkles, ArrowRight, Eye, X, Check, SlidersHorizontal } from "lucide-react";
import { RECENT_PROJECTS } from "../data/furnitureData";
import { ProjectItem } from "../types";

interface RecentProjectsProps {
  darkMode: boolean;
  onRequestQuote: () => void;
}

export const RecentProjects: React.FC<RecentProjectsProps> = ({ darkMode, onRequestQuote }) => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [showBeforeAfter, setShowBeforeAfter] = useState(false);

  return (
    <section id="projects" className={`py-24 transition-colors duration-300 ${darkMode ? "bg-[#141414]" : "bg-[#FAF8F4]"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 text-[#C89B5B] text-xs font-semibold tracking-[0.25em] uppercase font-mono mb-3">
              <span className="w-6 h-[1px] bg-[#C89B5B]" />
              <span>COMPLETED SHOWCASES</span>
            </div>
            <h2 className={`text-3xl sm:text-5xl font-bold font-heading tracking-tight ${darkMode ? "text-white" : "text-[#1B1B1B]"}`}>
              Recent Projects & Residences
            </h2>
          </div>
          <p className="text-sm sm:text-base text-gray-500 max-w-md font-light leading-relaxed">
            A curated portfolio of completed private villas, executive penthouses, and corporate headquarters tailored by Alfonse Furniture.
          </p>
        </div>

        {/* Masonry / Editorial Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {RECENT_PROJECTS.map((proj, idx) => (
            <div
              key={proj.id}
              onClick={() => {
                setSelectedProject(proj);
                setShowBeforeAfter(false);
              }}
              className={`group relative overflow-hidden cursor-pointer border rounded-3xl transition-all duration-500 ${
                darkMode ? "bg-[#1E1E1E] border-white/10 hover:border-[#C89B5B]" : "bg-white border-[#EAE5D9] hover:border-[#C89B5B]"
              } shadow-lg hover:shadow-2xl`}
            >
              {/* Image Container */}
              <div className="relative h-96 w-full overflow-hidden bg-gray-900">
                <img
                  src={proj.mainImage}
                  alt={proj.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                {/* Top Location Pill */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-3 py-1 bg-black/60 backdrop-blur-md text-white text-[10px] font-mono uppercase tracking-widest border border-white/20 rounded-full flex items-center gap-1.5">
                    <MapPin className="w-3 h-3 text-[#C89B5B]" />
                    <span>{proj.location}</span>
                  </span>
                  <span className="px-3 py-1 bg-[#C89B5B] text-black text-[10px] font-bold font-mono rounded-full">
                    {proj.year}
                  </span>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                  <span className="text-[#C89B5B] text-[11px] font-mono uppercase tracking-widest block">
                    {proj.category}
                  </span>
                  <h3 className="text-2xl font-bold font-heading">{proj.title}</h3>
                  <p className="text-xs text-gray-300 font-light line-clamp-2">
                    {proj.clientVision}
                  </p>

                  <div className="pt-3 flex items-center justify-between border-t border-white/20">
                    <div className="flex items-center gap-2 text-xs text-[#C89B5B] font-mono">
                      <span>View Full Case Study</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                    {proj.beforeImage && (
                      <span className="text-[10px] bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-full uppercase tracking-wider font-mono">
                        Includes Before / After
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Case Study Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
            <div className="relative w-full max-w-4xl bg-[#1B1B1B] text-white border border-[#C89B5B]/40 rounded-3xl shadow-2xl overflow-hidden my-8 max-h-[90vh] overflow-y-auto">
              {/* Modal Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-20 p-2.5 bg-black/60 text-white hover:text-[#C89B5B] border border-white/20 rounded-full shadow-md"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Image Section */}
              <div className="relative h-80 sm:h-96 w-full bg-black">
                {showBeforeAfter && selectedProject.beforeImage ? (
                  <div className="grid grid-cols-2 h-full w-full">
                    <div className="relative h-full">
                      <img src={selectedProject.beforeImage} alt="Before" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                      <span className="absolute bottom-3 left-3 bg-red-900/80 text-white text-[10px] font-mono uppercase px-2.5 py-1 rounded-full">BEFORE RENOVATION</span>
                    </div>
                    <div className="relative h-full">
                      <img src={selectedProject.afterImage || selectedProject.mainImage} alt="After" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                      <span className="absolute bottom-3 left-3 bg-emerald-800/80 text-white text-[10px] font-mono uppercase px-2.5 py-1 rounded-full">AFTER ALFONSE JOINERY</span>
                    </div>
                  </div>
                ) : (
                  <img src={selectedProject.mainImage} alt={selectedProject.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                )}

                {/* Toggle Before/After if available */}
                {selectedProject.beforeImage && (
                  <div className="absolute top-4 left-4 z-10">
                    <button
                      onClick={() => setShowBeforeAfter(!showBeforeAfter)}
                      className="px-4 py-2 bg-[#C89B5B] text-black text-xs font-bold uppercase tracking-wider font-mono rounded-full flex items-center gap-2 shadow-lg"
                    >
                      <SlidersHorizontal className="w-4 h-4" />
                      <span>{showBeforeAfter ? "Show Single View" : "Compare Before / After"}</span>
                    </button>
                  </div>
                )}
              </div>

              {/* Modal Body */}
              <div className="p-8 space-y-6">
                <div>
                  <div className="flex items-center gap-3 text-xs text-[#C89B5B] font-mono uppercase tracking-widest mb-2">
                    <span>{selectedProject.category}</span>
                    <span>•</span>
                    <span>{selectedProject.location}</span>
                    <span>•</span>
                    <span>Completed {selectedProject.year}</span>
                  </div>
                  <h2 className="text-3xl font-bold font-heading">{selectedProject.title}</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-white/10">
                  <div>
                    <h4 className="text-xs font-mono uppercase text-[#C89B5B] mb-2 font-bold">CLIENT VISION & BRIEF</h4>
                    <p className="text-xs text-gray-300 leading-relaxed">{selectedProject.clientVision}</p>
                  </div>

                  <div>
                    <h4 className="text-xs font-mono uppercase text-[#C89B5B] mb-2 font-bold">ATELIER CRAFTSMANSHIP</h4>
                    <p className="text-xs text-gray-300 leading-relaxed">{selectedProject.craftsmanshipDetails}</p>
                  </div>
                </div>

                {/* Materials Used */}
                <div>
                  <h4 className="text-xs font-mono uppercase text-[#C89B5B] mb-2 font-bold">SPECIFIED MATERIALS</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.materialsUsed.map((m, i) => (
                      <span key={i} className="px-3 py-1 bg-white/10 text-xs text-gray-200 border border-white/15 rounded-full">
                        {m}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Client Testimonial if present */}
                {selectedProject.testimonial && (
                  <div className="p-5 bg-black/40 border-l-2 border-[#C89B5B] rounded-2xl italic text-xs text-gray-200 space-y-2">
                    <p>"{selectedProject.testimonial.quote}"</p>
                    <p className="text-[11px] font-mono text-[#C89B5B] not-italic font-bold">
                      — {selectedProject.testimonial.author} ({selectedProject.testimonial.role})
                    </p>
                  </div>
                )}

                {/* Modal Actions */}
                <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-6 py-2.5 border border-white/20 text-xs font-mono text-gray-300 hover:text-white rounded-2xl"
                  >
                    Close Showcase
                  </button>

                  <button
                    onClick={() => {
                      setSelectedProject(null);
                      onRequestQuote();
                    }}
                    className="px-6 py-2.5 bg-[#C89B5B] text-black font-bold text-xs uppercase tracking-widest rounded-2xl hover:bg-white transition-colors"
                  >
                    Request Similar Custom Project
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
