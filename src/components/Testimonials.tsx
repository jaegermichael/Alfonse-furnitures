import React, { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { TESTIMONIALS } from "../data/furnitureData";

interface TestimonialsProps {
  darkMode: boolean;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ darkMode }) => {
  const [activeIdx, setActiveIdx] = useState(0);

  const nextTestimonial = () => {
    setActiveIdx((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setActiveIdx((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const activeTestimonial = TESTIMONIALS[activeIdx];

  return (
    <section className={`py-24 transition-colors duration-300 relative overflow-hidden ${darkMode ? "bg-[#181818]" : "bg-[#F5F2EA]"}`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 text-[#C89B5B] text-xs font-semibold tracking-[0.25em] uppercase font-mono">
            <span className="w-6 h-[1px] bg-[#C89B5B]" />
            <span>CLIENT ENDORSEMENTS</span>
            <span className="w-6 h-[1px] bg-[#C89B5B]" />
          </div>
          <h2 className={`text-3xl sm:text-4xl font-bold font-heading tracking-tight ${darkMode ? "text-white" : "text-[#1B1B1B]"}`}>
            What Our Clients Say
          </h2>
        </div>

        {/* Glassmorphism Slider Card */}
        <div className={`p-8 sm:p-12 border rounded-3xl shadow-2xl relative ${darkMode ? "glass-panel-dark border-white/10" : "glass-panel border-[#C89B5B]/30"}`}>
          <Quote className="w-12 h-12 text-[#C89B5B]/30 absolute top-6 left-6" />

          <div className="relative z-10 space-y-6 text-center max-w-3xl mx-auto">
            {/* Stars */}
            <div className="flex items-center justify-center gap-1">
              {[...Array(activeTestimonial.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#C89B5B] text-[#C89B5B]" />
              ))}
            </div>

            {/* Quote Body */}
            <p className={`text-lg sm:text-2xl font-editorial italic leading-relaxed ${darkMode ? "text-gray-100" : "text-[#1B1B1B]"}`}>
              "{activeTestimonial.quote}"
            </p>

            {/* Author */}
            <div className="pt-4 border-t border-[#C89B5B]/20">
              <h4 className={`text-base font-bold font-heading ${darkMode ? "text-white" : "text-[#1B1B1B]"}`}>
                {activeTestimonial.name}
              </h4>
              <p className="text-xs font-mono text-[#C89B5B] uppercase tracking-wider mt-1">
                {activeTestimonial.role} — {activeTestimonial.location}
              </p>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-[#C89B5B]/15">
            <div className="flex items-center gap-2 text-xs font-mono text-gray-400">
              <span>0{activeIdx + 1}</span>
              <span>/</span>
              <span>0{TESTIMONIALS.length}</span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={prevTestimonial}
                className="p-2.5 border border-[#C89B5B]/40 rounded-full hover:bg-[#C89B5B] hover:text-black text-gray-400 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-2.5 border border-[#C89B5B]/40 rounded-full hover:bg-[#C89B5B] hover:text-black text-gray-400 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
