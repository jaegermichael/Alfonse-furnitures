import React, { useState } from "react";
import { Search, Eye, Plus, Check, SlidersHorizontal, ArrowUpRight, Sparkles } from "lucide-react";
import { PRODUCTS_CATALOG } from "../data/furnitureData";
import { Product, CollectionCategory } from "../types";

interface FeaturedProductsProps {
  selectedCategory: CollectionCategory;
  setSelectedCategory: (cat: CollectionCategory) => void;
  onQuickView: (product: Product) => void;
  onAddToQuote: (product: Product) => void;
  addedProductIds: string[];
  darkMode: boolean;
  searchQuery: string;
}

export const FeaturedProducts: React.FC<FeaturedProductsProps> = ({
  selectedCategory,
  setSelectedCategory,
  onQuickView,
  onAddToQuote,
  addedProductIds,
  darkMode,
  searchQuery,
}) => {
  const categories: CollectionCategory[] = [
    "All",
    "Kitchens",
    "Wardrobes",
    "TV Units",
    "Office Furniture",
    "Bedroom Furniture",
    "Dining Furniture",
    "Custom Cabinets",
  ];

  // Filter products by category & search query
  const filteredProducts = PRODUCTS_CATALOG.filter((prod) => {
    const matchesCategory = selectedCategory === "All" || prod.category === selectedCategory;
    const matchesSearch =
      !searchQuery ||
      prod.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.materialsAvailable.some((m) => m.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="products" className={`py-24 transition-colors duration-300 ${darkMode ? "bg-[#181818]" : "bg-[#FAF8F4]"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-[#C89B5B] text-xs font-semibold tracking-[0.25em] uppercase font-mono mb-3">
              <span className="w-6 h-[1px] bg-[#C89B5B]" />
              <span>HANDCRAFTED CATALOG</span>
            </div>
            <h2 className={`text-3xl sm:text-5xl font-bold font-heading tracking-tight ${darkMode ? "text-white" : "text-[#1B1B1B]"}`}>
              Featured Products & Joinery
            </h2>
          </div>
          <p className="text-sm text-gray-500 max-w-md font-light leading-relaxed">
            Select items to add to your personalized quote request or click for detailed material options and specifications.
          </p>
        </div>

        {/* Category Filters Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 no-scrollbar mb-10 border-b border-gray-200 dark:border-white/10">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 text-xs font-semibold uppercase tracking-wider whitespace-nowrap rounded-full transition-all duration-300 border ${
                  isActive
                    ? "bg-[#1B1B1B] dark:bg-[#C89B5B] text-white dark:text-[#1B1B1B] border-[#C89B5B] shadow-md"
                    : darkMode
                    ? "bg-[#222222] text-gray-400 border-white/10 hover:text-white hover:border-gray-500"
                    : "bg-white text-gray-600 border-[#E5DFD1] hover:text-[#1B1B1B] hover:border-[#C89B5B]"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="py-20 text-center space-y-4">
            <p className="text-gray-400 font-mono text-sm">No items found matching "{searchQuery}" in {selectedCategory}.</p>
            <button
              onClick={() => setSelectedCategory("All")}
              className="px-6 py-2.5 bg-[#C89B5B] text-black text-xs font-bold uppercase tracking-wider rounded-2xl"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => {
              const isAdded = addedProductIds.includes(product.id);
              return (
                <div
                  key={product.id}
                  className={`group relative border rounded-3xl transition-all duration-500 ${
                    darkMode
                      ? "bg-[#1E1E1E] border-white/10 hover:border-[#C89B5B]"
                      : "bg-white border-[#EAE5D9] hover:border-[#C89B5B]"
                  } flex flex-col justify-between shadow-sm hover:shadow-2xl overflow-hidden`}
                >
                  {/* Image & Badges */}
                  <div className="relative h-80 w-full overflow-hidden bg-gray-900 cursor-pointer" onClick={() => onQuickView(product)}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                    {/* Top Badges */}
                    <div className="absolute top-4 left-4 flex flex-col gap-2">
                      <span className="px-3 py-1 bg-black/70 backdrop-blur-md text-white text-[10px] font-mono uppercase tracking-widest border border-white/20 rounded-full">
                        {product.category}
                      </span>
                      {product.isFeatured && (
                        <span className="px-3 py-0.5 bg-[#C89B5B] text-black text-[9px] font-bold uppercase tracking-wider font-mono rounded-full">
                          Showroom Signature
                        </span>
                      )}
                    </div>

                    {/* Hover Quick View Button */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onQuickView(product);
                        }}
                        className="px-5 py-2.5 bg-white text-[#1B1B1B] font-bold text-xs uppercase tracking-widest rounded-full hover:bg-[#C89B5B] hover:text-white transition-all shadow-xl flex items-center gap-2"
                      >
                        <Eye className="w-4 h-4" />
                        <span>Inspect Product</span>
                      </button>
                    </div>

                    {/* Bottom Price Tag */}
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <p className="text-[11px] text-[#C89B5B] font-mono uppercase tracking-wider">
                        EST. INVESTMENT
                      </p>
                      <p className="text-base font-bold font-heading">{product.priceEstimate}</p>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3
                        onClick={() => onQuickView(product)}
                        className={`text-xl font-bold font-heading cursor-pointer transition-colors hover:text-[#C89B5B] ${
                          darkMode ? "text-white" : "text-[#1B1B1B]"
                        }`}
                      >
                        {product.name}
                      </h3>
                      <p className="text-xs text-gray-500 font-light mt-2 line-clamp-2 leading-relaxed">
                        {product.shortDescription}
                      </p>

                      {/* Materials Available Badges */}
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {product.materialsAvailable.map((mat, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-1 bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-300 text-[10px] font-mono rounded-xl"
                          >
                            {mat}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Bar */}
                    <div className="pt-6 mt-6 border-t border-gray-100 dark:border-white/10 flex items-center justify-between gap-3">
                      <button
                        onClick={() => onQuickView(product)}
                        className="text-xs font-mono text-gray-400 hover:text-[#C89B5B] flex items-center gap-1"
                      >
                        <span>Specs & 3D</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>

                      <button
                        onClick={() => onAddToQuote(product)}
                        className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-2xl transition-all flex items-center gap-2 ${
                          isAdded
                            ? "bg-emerald-600 text-white"
                            : "bg-[#1B1B1B] dark:bg-[#C89B5B] text-white dark:text-[#1B1B1B] hover:bg-[#C89B5B] dark:hover:bg-white"
                        }`}
                      >
                        {isAdded ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            <span>In Quote Request</span>
                          </>
                        ) : (
                          <>
                            <Plus className="w-3.5 h-3.5" />
                            <span>Add to Quote</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};
