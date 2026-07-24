import React, { useState } from "react";
import { X, Trash2, ShoppingBag, Send, CheckCircle2, FileText, Sparkles, Plus, Minus } from "lucide-react";
import { QuoteBasketItem, AiConsultationResult } from "../types";

interface QuoteDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  basketItems: QuoteBasketItem[];
  onRemoveItem: (id: string) => void;
  onClearBasket: () => void;
  appliedAiProposal?: AiConsultationResult | null;
  darkMode: boolean;
}

export const QuoteDrawer: React.FC<QuoteDrawerProps> = ({
  isOpen,
  onClose,
  basketItems,
  onRemoveItem,
  onClearBasket,
  appliedAiProposal,
  darkMode,
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [quoteRefId, setQuoteRefId] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    budgetRange: "$15,000 - $35,000",
    roomDimensions: "",
    notes: "",
  });

  if (!isOpen) return null;

  const handleSubmitQuote = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) {
      alert("Please provide your name and email.");
      return;
    }

    try {
      const response = await fetch("/api/quotes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          budgetRange: form.budgetRange,
          roomDimensions: form.roomDimensions,
          notes: form.notes,
          items: basketItems.map((item) => ({
            productName: item.product.name,
            material: item.selectedMaterial,
            priceEstimate: item.product.priceEstimate,
          })),
        }),
      });

      const data = await response.json();
      if (data.success && data.quote) {
        setQuoteRefId(data.quote.id);
        setSubmitted(true);
        onClearBasket();
      }
    } catch (err) {
      console.error("Quote submission error:", err);
      alert("Unable to submit quote request. Please try again.");
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex justify-end">
      <div className={`w-full max-w-lg h-full p-6 sm:p-8 flex flex-col justify-between shadow-2xl overflow-y-auto ${darkMode ? "bg-[#1B1B1B] text-white border-l border-white/10" : "bg-[#FAF8F4] text-[#1B1B1B] border-l border-[#C89B5B]/20"}`}>
        
        {/* Header */}
        <div>
          <div className="flex items-center justify-between pb-6 border-b border-gray-200 dark:border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 border border-[#C89B5B] rounded-2xl flex items-center justify-center text-[#C89B5B] font-bold">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold font-heading text-lg uppercase tracking-wider">
                  Bespoke Quote Request
                </h3>
                <span className="text-[10px] font-mono text-[#C89B5B] block">
                  {basketItems.length} ITEMS SELECTED FOR ATELIER REVIEW
                </span>
              </div>
            </div>
            <button onClick={onClose} className="p-2 text-gray-400 hover:text-white rounded-full">
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* AI Proposal Banner if applied */}
          {appliedAiProposal && (
            <div className="mt-4 p-4 bg-[#C89B5B]/15 border border-[#C89B5B] rounded-2xl text-xs space-y-1">
              <div className="flex items-center gap-1.5 font-bold text-[#C89B5B] font-mono uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Custom Concept Plan:</span>
              </div>
              <p className="font-bold text-white">{appliedAiProposal.styleTitle}</p>
              <p className="text-[11px] text-gray-300">Est. Investment Range: {appliedAiProposal.estimatedPriceRange}</p>
            </div>
          )}

          {/* Submitted Screen */}
          {submitted ? (
            <div className="py-12 text-center space-y-4 animate-fade-in">
              <CheckCircle2 className="w-16 h-16 text-[#C89B5B] mx-auto" />
              <span className="px-3 py-1 bg-[#C89B5B] text-black text-xs font-mono font-bold uppercase tracking-widest inline-block rounded-full">
                REFERENCE #: {quoteRefId}
              </span>
              <h4 className="text-2xl font-bold font-heading text-[#C89B5B]">Request Transmitted</h4>
              <p className="text-xs text-gray-300 font-light max-w-sm mx-auto leading-relaxed">
                Your bespoke quote request has been transmitted directly to our Master Joinery Workshop in Harare. An interior consultant will contact you via phone or WhatsApp (+263 71 587 2021) within 24 hours.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-8 py-3.5 bg-[#C89B5B] text-black font-bold text-xs uppercase tracking-widest rounded-2xl hover:bg-white"
              >
                Return to Showroom
              </button>
            </div>
          ) : (
            <>
              {/* Selected Items List */}
              <div className="mt-6 space-y-4 max-h-60 overflow-y-auto pr-2 no-scrollbar">
                {basketItems.length === 0 && !appliedAiProposal ? (
                  <div className="py-8 text-center text-xs text-gray-400 font-mono space-y-2 border border-dashed border-gray-300 dark:border-white/10 rounded-2xl p-6">
                    <p>No items added to quote request yet.</p>
                    <p className="text-[10px]">Browse our products and add custom joinery pieces to build your quotation!</p>
                  </div>
                ) : (
                  basketItems.map((item) => (
                    <div key={item.product.id} className="p-3 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl flex items-center justify-between text-xs gap-3">
                      <div className="flex items-center gap-3">
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="w-12 h-12 object-cover border border-gray-300 dark:border-white/20 rounded-xl shrink-0"
                          referrerPolicy="no-referrer"
                        />
                        <div>
                          <h5 className="font-bold font-heading">{item.product.name}</h5>
                          <span className="text-[10px] text-[#C89B5B] font-mono block">
                            Material: {item.selectedMaterial}
                          </span>
                          <span className="text-[10px] text-gray-400">{item.product.priceEstimate}</span>
                        </div>
                      </div>

                      <button
                        onClick={() => onRemoveItem(item.product.id)}
                        className="text-gray-400 hover:text-red-400 p-1.5 rounded-full"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))
                )}
              </div>

              {/* Consultation Details Form */}
              <form onSubmit={handleSubmitQuote} className="mt-8 space-y-4 pt-6 border-t border-gray-200 dark:border-white/10">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#C89B5B]">
                  CONCIERGE CONTACT DETAILS
                </h4>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[10px] font-mono uppercase text-gray-400 mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="e.g. Tinashe Moyo"
                      className="w-full bg-gray-50 dark:bg-black/40 border border-gray-300 dark:border-white/15 px-3 py-2.5 rounded-xl text-xs text-gray-800 dark:text-white outline-none focus:border-[#C89B5B]"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono uppercase text-gray-400 mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="tinashe@domain.co.zw"
                      className="w-full bg-gray-50 dark:bg-black/40 border border-gray-300 dark:border-white/15 px-3 py-2.5 rounded-xl text-xs text-gray-800 dark:text-white outline-none focus:border-[#C89B5B]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[10px] font-mono uppercase text-gray-400 mb-1">Phone / WhatsApp</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+263 71 587 2021"
                      className="w-full bg-gray-50 dark:bg-black/40 border border-gray-300 dark:border-white/15 px-3 py-2.5 rounded-xl text-xs text-gray-800 dark:text-white outline-none focus:border-[#C89B5B]"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono uppercase text-gray-400 mb-1">Target Budget</label>
                    <select
                      value={form.budgetRange}
                      onChange={(e) => setForm({ ...form, budgetRange: e.target.value })}
                      className="w-full bg-gray-50 dark:bg-black/40 border border-gray-300 dark:border-white/15 px-3 py-2.5 rounded-xl text-xs text-gray-800 dark:text-white outline-none focus:border-[#C89B5B]"
                    >
                      <option value="$3,000 - $10,000">$3,000 - $10,000</option>
                      <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                      <option value="$25,000 - $50,000">$25,000 - $50,000+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-mono uppercase text-gray-400 mb-1">Room Dimensions & Custom Notes</label>
                  <textarea
                    rows={3}
                    value={form.notes}
                    onChange={(e) => setForm({ ...form, notes: e.target.value })}
                    placeholder="Enter wall dimensions, ceiling heights, or specific Teak/Mukwa/Granite finish requests..."
                    className="w-full bg-gray-50 dark:bg-black/40 border border-gray-300 dark:border-white/15 p-3 rounded-2xl text-xs text-gray-800 dark:text-white outline-none focus:border-[#C89B5B] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#C89B5B] text-black font-bold text-xs uppercase tracking-[0.2em] rounded-2xl hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2 shadow-xl"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmit Official Quote Request</span>
                </button>
              </form>
            </>
          )}
        </div>

        <div className="pt-4 border-t border-gray-200 dark:border-white/10 text-center text-[10px] font-mono text-gray-400">
          <span>10-Year Craftsmanship Warranty • Free 3D Joinery Models • Harare Workshop Direct</span>
        </div>
      </div>
    </div>
  );
};
