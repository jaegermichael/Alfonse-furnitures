import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { FeaturedCollections } from "./components/FeaturedCollections";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { OurProcess } from "./components/OurProcess";
import { FeaturedProducts } from "./components/FeaturedProducts";
import { RecentProjects } from "./components/RecentProjects";
import { InteriorInspiration } from "./components/InteriorInspiration";
import { GallerySection } from "./components/GallerySection";
import { AboutSection } from "./components/AboutSection";
import { Testimonials } from "./components/Testimonials";
import { ContactSection } from "./components/ContactSection";
import { QuoteDrawer } from "./components/QuoteDrawer";
import { ProductQuickViewModal } from "./components/ProductQuickViewModal";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { ScrollProgress } from "./components/ScrollProgress";
import { LoadingScreen } from "./components/LoadingScreen";

import { Product, CollectionCategory, QuoteBasketItem, AiConsultationResult } from "./types";
import { MapPin, Phone, Mail, Instagram, Facebook, Linkedin, ArrowUp } from "lucide-react";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState("home");
  const [selectedCategory, setSelectedCategory] = useState<CollectionCategory>("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Quote Drawer & Basket State
  const [quoteDrawerOpen, setQuoteDrawerOpen] = useState(false);
  const [basketItems, setBasketItems] = useState<QuoteBasketItem[]>([]);
  const [appliedAiProposal, setAppliedAiProposal] = useState<AiConsultationResult | null>(null);

  // Quick View Modal State
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  const handleAddToQuote = (product: Product, selectedMaterial?: string) => {
    const mat = selectedMaterial || product.materialsAvailable[0] || "Standard Atelier Finish";
    const exists = basketItems.some((item) => item.product.id === product.id);

    if (exists) {
      setBasketItems(basketItems.filter((item) => item.product.id !== product.id));
    } else {
      setBasketItems([
        ...basketItems,
        {
          product,
          selectedMaterial: mat,
          quantity: 1,
        },
      ]);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (loading) {
    return <LoadingScreen onFinish={() => setLoading(false)} />;
  }

  const addedProductIds = basketItems.map((b) => b.product.id);

  return (
    <div className={`min-h-screen transition-colors duration-300 font-sans ${darkMode ? "dark bg-[#1B1B1B] text-white" : "bg-[#FAF8F4] text-[#222222]"}`}>
      <ScrollProgress />

      {/* Floating Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        quoteCount={basketItems.length}
        openQuoteDrawer={() => setQuoteDrawerOpen(true)}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* Main Content */}
      <main>
        {/* Fullscreen Cinematic Hero */}
        <Hero
          onExploreClick={() => {
            const elem = document.getElementById("collections");
            if (elem) elem.scrollIntoView({ behavior: "smooth" });
          }}
          onRequestQuoteClick={() => setQuoteDrawerOpen(true)}
          darkMode={darkMode}
        />

        {/* Featured Collections Editorial Cards */}
        <FeaturedCollections
          onSelectCollection={(cat) => {
            setSelectedCategory(cat);
            const elem = document.getElementById("products");
            if (elem) elem.scrollIntoView({ behavior: "smooth" });
          }}
          darkMode={darkMode}
        />

        {/* Why Choose Alfonse & Material Swatch Studio */}
        <WhyChooseUs
          darkMode={darkMode}
          onRequestQuote={() => setQuoteDrawerOpen(true)}
        />

        {/* Our Process Horizontal Timeline */}
        <OurProcess
          darkMode={darkMode}
          onRequestQuote={() => setQuoteDrawerOpen(true)}
        />

        {/* Luxury Product Catalog Grid */}
        <FeaturedProducts
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          onQuickView={(p) => setQuickViewProduct(p)}
          onAddToQuote={handleAddToQuote}
          addedProductIds={addedProductIds}
          darkMode={darkMode}
          searchQuery={searchQuery}
        />

        {/* Recent Projects Pinterest Showcase & Lightbox */}
        <RecentProjects
          darkMode={darkMode}
          onRequestQuote={() => setQuoteDrawerOpen(true)}
        />

        {/* Interior Inspiration Lookbook with Hotspots */}
        <InteriorInspiration
          darkMode={darkMode}
          onQuickView={(p) => setQuickViewProduct(p)}
          onAddToQuote={handleAddToQuote}
        />

        {/* Luxury Masonry Gallery */}
        <GallerySection darkMode={darkMode} />

        {/* Heritage & Brand Philosophy */}
        <AboutSection
          darkMode={darkMode}
          onRequestQuote={() => setQuoteDrawerOpen(true)}
        />

        {/* Testimonials Glass Slider */}
        <Testimonials darkMode={darkMode} />

        {/* Contact Split Screen & Google Map */}
        <ContactSection darkMode={darkMode} />
      </main>

      {/* Footer */}
      <footer className={`py-16 border-t ${darkMode ? "bg-[#141414] border-white/10 text-gray-300" : "bg-[#1B1B1B] border-[#C89B5B]/30 text-gray-300"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Column */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 border border-[#C89B5B] rounded-2xl flex items-center justify-center text-[#C89B5B] font-bold font-heading text-lg">
                  AF
                </div>
                <span className="font-heading text-xl font-bold tracking-widest text-white">ALFONSE</span>
              </div>
              <p className="text-xs font-light text-gray-400 leading-relaxed">
                Handcrafted luxury furniture, bespoke kitchens, and tailored interior joinery engineered for distinguished homes and offices across Zimbabwe.
              </p>
              <div className="flex items-center gap-3 pt-2 text-[#C89B5B]">
                <a href="#instagram" className="p-2.5 border border-white/10 rounded-full hover:border-[#C89B5B] hover:text-white transition-all">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#facebook" className="p-2.5 border border-white/10 rounded-full hover:border-[#C89B5B] hover:text-white transition-all">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#linkedin" className="p-2.5 border border-white/10 rounded-full hover:border-[#C89B5B] hover:text-white transition-all">
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#C89B5B]">Collections</h4>
              <ul className="space-y-2 text-xs font-light">
                <li><button onClick={() => setSelectedCategory("Kitchens")} className="hover:text-[#C89B5B]">Monolithic Kitchens</button></li>
                <li><button onClick={() => setSelectedCategory("Wardrobes")} className="hover:text-[#C89B5B]">Walk-In Wardrobes</button></li>
                <li><button onClick={() => setSelectedCategory("TV Units")} className="hover:text-[#C89B5B]">TV & Media Walls</button></li>
                <li><button onClick={() => setSelectedCategory("Office Furniture")} className="hover:text-[#C89B5B]">Executive Office Desks</button></li>
                <li><button onClick={() => setSelectedCategory("Dining Furniture")} className="hover:text-[#C89B5B]">Sculptural Dining Tables</button></li>
              </ul>
            </div>

            {/* Zimbabwean Flagships */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#C89B5B]">Showroom & Atelier</h4>
              <div className="space-y-2 text-xs font-light text-gray-400">
                <p><strong className="text-white">Harare Flagship:</strong> Sam Levy's Village, Borrowdale</p>
                <p><strong className="text-white">Bulawayo Studio:</strong> Suburbs Design Centre</p>
                <p><strong className="text-white">Victoria Falls:</strong> Elephant Hills Estate</p>
                <p><strong className="text-white">Phone & WhatsApp:</strong> +263 71 587 2021</p>
              </div>
            </div>

            {/* Atelier Private Newsletter */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#C89B5B]">Atelier Journal</h4>
              <p className="text-xs text-gray-400 font-light">
                Subscribe for private invitations to new collection releases and Zimbabwean architectural case studies.
              </p>
              <div className="flex items-center border border-white/20 p-1.5 rounded-2xl bg-black/40">
                <input
                  type="email"
                  placeholder="Enter email address"
                  className="bg-transparent text-xs text-white px-3 py-1.5 outline-none w-full placeholder-gray-500"
                />
                <button
                  onClick={() => alert("Thank you for joining the Alfonse Atelier Journal.")}
                  className="px-4 py-1.5 bg-[#C89B5B] text-black text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-white transition-all"
                >
                  Join
                </button>
              </div>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-gray-400 gap-4">
            <p>© 2026 Alfonse Furniture Studio (Zimbabwe). All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#privacy" className="hover:text-[#C89B5B]">Privacy Policy</a>
              <a href="#terms" className="hover:text-[#C89B5B]">Terms of Craftsmanship</a>
              <button onClick={scrollToTop} className="flex items-center gap-1 text-[#C89B5B] hover:text-white">
                <span>Top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </footer>

      {/* Quote Drawer */}
      <QuoteDrawer
        isOpen={quoteDrawerOpen}
        onClose={() => setQuoteDrawerOpen(false)}
        basketItems={basketItems}
        onRemoveItem={(id) => setBasketItems(basketItems.filter((i) => i.product.id !== id))}
        onClearBasket={() => setBasketItems([])}
        appliedAiProposal={appliedAiProposal}
        darkMode={darkMode}
      />

      {/* Product Quick View Modal */}
      <ProductQuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToQuote={(prod, mat) => {
          handleAddToQuote(prod, mat);
        }}
        isAdded={quickViewProduct ? addedProductIds.includes(quickViewProduct.id) : false}
        darkMode={darkMode}
      />

      {/* WhatsApp Quick Connect Button */}
      <WhatsAppButton />
    </div>
  );
}

