import React, { useEffect, useState } from "react";

export const LoadingScreen: React.FC<{ onFinish: () => void }> = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onFinish, 400);
          return 100;
        }
        return prev + 5;
      });
    }, 40);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 z-50 bg-[#1B1B1B] text-white flex flex-col items-center justify-center space-y-8 animate-fade-in">
      <div className="w-16 h-16 border-2 border-[#C89B5B] flex items-center justify-center text-[#C89B5B] text-2xl font-bold font-heading animate-pulse">
        AF
      </div>

      <div className="text-center space-y-2">
        <h1 className="font-heading font-bold text-2xl tracking-[0.3em] uppercase text-white">
          ALFONSE FURNITURE
        </h1>
        <p className="text-[10px] font-mono text-[#C89B5B] tracking-[0.25em] uppercase">
          HANDCRAFTED LUXURY & ATELIER JOINERY
        </p>
      </div>

      {/* Gold Progress Bar */}
      <div className="w-48 h-[2px] bg-white/20 relative overflow-hidden">
        <div
          className="h-full bg-[#C89B5B] transition-all duration-100 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">
        LOADING SHOWROOM ({progress}%)
      </span>
    </div>
  );
};
