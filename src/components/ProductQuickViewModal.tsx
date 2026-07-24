import React, { useState } from "react";
import { X, Check, ShieldCheck, Clock, Plus, ArrowRight, Layers } from "lucide-react";
import { Product } from "../types";

interface ProductQuickViewModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToQuote: (product: Product, selectedMaterial: string) => void;
  isAdded: boolean;
  darkMode: boolean;
}

export const ProductQuickViewModal: React.FC<ProductQuickViewModalProps> = ({
  product,
  onClose,
  onAddToQuote,
  isAdded,
  darkMode,
}) => {
  if (!product) return null;

  const [activeImage, setActiveImage] = useState(product.image);
  const [selectedMaterial, setSelectedMaterial] = useState(product.materialsAvailable[0] || "Standard Atelier Finish");

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className={`relative w-full max-w-4xl border rounded-3xl shadow-2xl overflow-hidden my-8 max-h-[90vh] overflow-y-auto ${darkMode ? "bg-[#1B1B1B] text-white border-[#C89B5B]/40" : "bg-[#FAF8F4] text-[#1B1B1B] border-[#C89B5B]/30"}`}>
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 bg-black/60 text-white hover:text-[#C89B5B] border border-white/20 rounded-full shadow-md"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-10">
          
          {/* Left: Gallery & Zoomable Main Image */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative h-80 sm:h-96 w-full overflow-hidden border border-[#C89B5B]/30 bg-black rounded-2xl">
              <img
                src={activeImage}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110 cursor-zoom-in"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md px-3 py-1 text-[10px] font-mono text-[#C89B5B] uppercase tracking-widest border border-white/10 rounded-full">
                {product.category} COLLECTION
              </div>
            </div>

            {/* Thumbnail Gallery */}
            {product.galleryImages && product.galleryImages.length > 1 && (
              <div className="flex items-center gap-3 overflow-x-auto pb-2 no-scrollbar">
                {product.galleryImages.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(img)}
                    className={`relative w-20 h-20 overflow-hidden border-2 rounded-xl transition-all shrink-0 ${
                      activeImage === img ? "border-[#C89B5B] ring-2 ring-[#C89B5B]/40" : "border-transparent opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img src={img} alt={`Gallery ${i}`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Product Details & Material Selector */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div>
              <span className="text-[10px] font-mono text-[#C89B5B] uppercase tracking-widest block mb-1">
                {product.collectionName}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading">{product.name}</h2>
              <p className="text-lg font-bold text-[#C89B5B] font-mono mt-1">{product.priceEstimate}</p>

              <p className="text-xs font-light text-gray-500 dark:text-gray-300 mt-4 leading-relaxed">
                {product.fullDescription}
              </p>

              {/* Dimensions & Lead Time */}
              <div className="mt-6 space-y-2 py-4 border-y border-gray-200 dark:border-white/10 text-xs font-mono">
                <div className="flex justify-between">
                  <span className="text-gray-400">Dimensions:</span>
                  <span className="font-bold">{product.dimensions}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Production Lead Time:</span>
                  <span className="font-bold text-[#C89B5B]">{product.leadTime}</span>
                </div>
              </div>

              {/* Material Selection */}
              <div className="mt-6">
                <label className="block text-xs font-mono uppercase text-[#C89B5B] font-bold mb-2">
                  Select Custom Material Finish:
                </label>
                <div className="flex flex-wrap gap-2">
                  {product.materialsAvailable.map((mat) => (
                    <button
                      key={mat}
                      onClick={() => setSelectedMaterial(mat)}
                      className={`px-3 py-1.5 text-xs font-mono rounded-full transition-all border ${
                        selectedMaterial === mat
                          ? "bg-[#C89B5B] text-black font-bold border-[#C89B5B]"
                          : "bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-white/10 hover:border-gray-400"
                      }`}
                    >
                      {mat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Bullet Features */}
              <div className="mt-6 space-y-2">
                <span className="text-xs font-mono uppercase text-gray-400 font-bold block mb-1">Key Joinery Features:</span>
                {product.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-300">
                    <Check className="w-3.5 h-3.5 text-[#C89B5B] shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="pt-6 border-t border-gray-200 dark:border-white/10 space-y-3">
              <button
                onClick={() => onAddToQuote(product, selectedMaterial)}
                className={`w-full py-4 text-xs font-bold uppercase tracking-[0.2em] rounded-2xl transition-all flex items-center justify-center gap-2 shadow-xl ${
                  isAdded
                    ? "bg-emerald-600 text-white"
                    : "bg-[#C89B5B] text-black hover:bg-white hover:text-black"
                }`}
              >
                {isAdded ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Added to Quote Request</span>
                  </>
                ) : (
                  <>
                    <Plus className="w-4 h-4" />
                    <span>Add to Custom Quote ({selectedMaterial})</span>
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-[10px] font-mono text-gray-400">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C89B5B]" />
                <span>10-Year Craftsmanship Guarantee Included</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
