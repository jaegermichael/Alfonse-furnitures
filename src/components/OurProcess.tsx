import React, { useState } from "react";
import { CheckCircle2, Clock, FileText, ArrowRight, Sparkles } from "lucide-react";
import { PROCESS_STEPS } from "../data/furnitureData";

interface OurProcessProps {
  darkMode: boolean;
  onRequestQuote: () => void;
}

export const OurProcess: React.FC<OurProcessProps> = ({ darkMode, onRequestQuote }) => {
  const [activeStep, setActiveStep] = useState(0);

  const activeProcess = PROCESS_STEPS[activeStep];

  return (
    <section className={`py-24 transition-colors duration-300 border-t ${darkMode ? "bg-[#141414] border-white/10" : "bg-[#FAF8F4] border-[#EAE5D9]"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-[#C89B5B] text-xs font-semibold tracking-[0.25em] uppercase font-mono">
            <span className="w-6 h-[1px] bg-[#C89B5B]" />
            <span>HOW WE WORK</span>
            <span className="w-6 h-[1px] bg-[#C89B5B]" />
          </div>
          <h2 className={`text-3xl sm:text-5xl font-bold font-heading tracking-tight ${darkMode ? "text-white" : "text-[#1B1B1B]"}`}>
            Our Handcrafted Process
          </h2>
          <p className="text-sm sm:text-base text-gray-500 font-light leading-relaxed">
            From preliminary architectural sketch to white-glove home installation, every phase is managed by our dedicated in-house team.
          </p>
        </div>

        {/* Horizontal Timeline Steps Bar */}
        <div className="relative mb-16">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[2px] bg-gray-200 dark:bg-white/10 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative z-10">
            {PROCESS_STEPS.map((step, index) => {
              const isActive = index === activeStep;
              return (
                <button
                  key={step.number}
                  onClick={() => setActiveStep(index)}
                  className={`p-5 text-left border rounded-2xl transition-all duration-300 relative group flex flex-col justify-between ${
                    isActive
                      ? "bg-[#1B1B1B] text-white border-[#C89B5B] shadow-xl scale-105"
                      : darkMode
                      ? "bg-[#1E1E1E] text-gray-300 border-white/10 hover:border-[#C89B5B]/50"
                      : "bg-white text-gray-700 border-[#EAE5D9] hover:border-[#C89B5B]/50"
                  }`}
                >
                  <div className="flex items-center justify-between w-full mb-3">
                    <span
                      className={`text-xs font-mono font-bold px-2.5 py-0.5 rounded-full ${
                        isActive ? "bg-[#C89B5B] text-black" : "bg-gray-100 dark:bg-white/10 text-gray-500 dark:text-gray-400"
                      }`}
                    >
                      STEP {step.number}
                    </span>
                    <Clock className={`w-3.5 h-3.5 ${isActive ? "text-[#C89B5B]" : "text-gray-400"}`} />
                  </div>

                  <div>
                    <h3 className={`text-base font-bold font-heading mb-1 ${isActive ? "text-white" : darkMode ? "text-white" : "text-[#1B1B1B]"}`}>
                      {step.title}
                    </h3>
                    <p className={`text-[11px] font-mono truncate ${isActive ? "text-[#C89B5B]" : "text-gray-400"}`}>
                      {step.estimatedDuration}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Step Inspector Card */}
        <div className={`p-8 sm:p-12 border rounded-3xl shadow-2xl transition-all ${darkMode ? "bg-[#1E1E1E] border-white/10" : "bg-white border-[#EAE5D9]"}`}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Detail Information */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 bg-[#C89B5B] text-black font-bold font-heading text-lg rounded-2xl flex items-center justify-center">
                  {activeProcess.number}
                </span>
                <div>
                  <span className="text-[#C89B5B] text-xs font-mono uppercase tracking-widest block">
                    {activeProcess.subtitle}
                  </span>
                  <h3 className={`text-2xl sm:text-3xl font-bold font-heading ${darkMode ? "text-white" : "text-[#1B1B1B]"}`}>
                    {activeProcess.title}
                  </h3>
                </div>
              </div>

              <p className={`text-sm sm:text-base font-light leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                {activeProcess.description}
              </p>

              {/* Key Deliverables */}
              <div className="pt-2 space-y-3">
                <h4 className={`text-xs font-mono uppercase tracking-wider font-bold ${darkMode ? "text-white" : "text-[#1B1B1B]"}`}>
                  WHAT YOU RECEIVE IN THIS PHASE:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeProcess.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-white/5 p-3 rounded-2xl border border-gray-200 dark:border-white/10">
                      <CheckCircle2 className="w-4 h-4 text-[#C89B5B] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex items-center gap-4">
                <button
                  onClick={onRequestQuote}
                  className="px-6 py-3 bg-[#C89B5B] text-[#1B1B1B] font-bold text-xs uppercase tracking-widest rounded-2xl hover:bg-[#1B1B1B] hover:text-white transition-all flex items-center gap-2"
                >
                  <span>Start Step 01 Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <div className="text-xs text-gray-400 font-mono flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#C89B5B]" />
                  <span>Phase Lead Time: {activeProcess.estimatedDuration}</span>
                </div>
              </div>
            </div>

            {/* Right: Step Image Preview */}
            <div className="lg:col-span-5 relative h-80 lg:h-96 w-full overflow-hidden rounded-2xl border border-[#C89B5B]/30 group">
              <img
                src={activeProcess.image}
                alt={activeProcess.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="flex items-center gap-2 text-[#C89B5B] text-[10px] font-mono uppercase tracking-widest">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>ALFONSE ATELIER ARCHIVE</span>
                </div>
                <p className="text-xs font-light text-gray-200 mt-1">
                  Step {activeProcess.number} Verification & Quality Benchmark
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
