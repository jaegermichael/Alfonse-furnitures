import React, { useState, useEffect } from "react";
import { Search, ShoppingBag, Menu, X, Sun, Moon, PhoneCall, ChevronRight } from "lucide-react";
import { CollectionCategory } from "../types";

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  selectedCategory: CollectionCategory;
  setSelectedCategory: (category: CollectionCategory) => void;
  quoteCount: number;
  openQuoteDrawer: () => void;
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  setSelectedCategory,
  quoteCount,
  openQuoteDrawer,
  darkMode,
  setDarkMode,
  searchQuery,
  setSearchQuery,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "collections", label: "Collections" },
    { id: "custom-furniture", label: "Custom Furniture" },
    { id: "projects", label: "Projects" },
    { id: "gallery", label: "Gallery" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    if (id === "collections") {
      setSelectedCategory("All");
    }
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? darkMode
              ? "py-3 bg-[#1B1B1B]/90 backdrop-blur-xl border-b border-white/10 shadow-2xl"
              : "py-3 bg-[#FAF8F4]/90 backdrop-blur-xl border-b border-[#C89B5B]/15 shadow-lg"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => handleNavClick("home")}
              className="group flex items-center gap-3 text-left focus:outline-none"
            >
              <div className="w-10 h-10 rounded-xl border border-[#C89B5B] flex items-center justify-center bg-[#1B1B1B] text-[#C89B5B] transition-transform duration-500 group-hover:scale-105 group-hover:bg-[#C89B5B] group-hover:text-white shadow-sm">
                <span className="font-heading font-bold text-xl tracking-tighter">AF</span>
              </div>
              <div className="flex flex-col">
                <span className={`font-heading text-lg font-bold tracking-widest uppercase ${darkMode ? "text-white" : "text-[#1B1B1B]"}`}>
                  ALFONSE
                </span>
                <span className="text-[10px] tracking-[0.25em] text-[#C89B5B] uppercase font-medium">
                  FURNITURE & INTERIORS
                </span>
              </div>
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative text-xs uppercase tracking-[0.18em] font-medium transition-colors duration-300 py-1 ${
                    activeTab === item.id
                      ? "text-[#C89B5B] font-semibold"
                      : darkMode
                      ? "text-gray-300 hover:text-white"
                      : "text-[#222222] hover:text-[#C89B5B]"
                  }`}
                >
                  {item.label}
                  {activeTab === item.id && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C89B5B] rounded-full transition-all duration-300" />
                  )}
                </button>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-3">
              {/* Search Toggle */}
              <div className="relative hidden md:block">
                {searchOpen ? (
                  <div className="flex items-center gap-2 bg-white/10 dark:bg-black/30 border border-[#C89B5B]/30 rounded-full px-3.5 py-1.5 transition-all w-60 shadow-sm">
                    <Search className="w-4 h-4 text-[#C89B5B]" />
                    <input
                      type="text"
                      placeholder="Search furniture, styles..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="bg-transparent text-xs outline-none w-full text-gray-800 dark:text-gray-100 placeholder-gray-400"
                      autoFocus
                    />
                    <button
                      onClick={() => {
                        setSearchOpen(false);
                        setSearchQuery("");
                      }}
                      className="text-gray-400 hover:text-gray-600"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => setSearchOpen(true)}
                    className={`p-2.5 rounded-full transition-colors ${
                      darkMode ? "hover:bg-white/10 text-gray-200" : "hover:bg-black/5 text-gray-700"
                    }`}
                    title="Search catalog"
                  >
                    <Search className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Dark Mode Toggle */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2.5 rounded-full transition-colors ${
                  darkMode ? "hover:bg-white/10 text-amber-400" : "hover:bg-black/5 text-gray-700"
                }`}
                title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
              >
                {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>

              {/* Quote Basket Button */}
              <button
                onClick={openQuoteDrawer}
                className="relative p-2.5 rounded-full transition-colors hover:bg-[#C89B5B]/10 text-gray-800 dark:text-gray-200"
                title="View Selected Quote Items"
              >
                <ShoppingBag className="w-5 h-5 text-[#C89B5B]" />
                {quoteCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#C89B5B] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center animate-bounce shadow-md">
                    {quoteCount}
                  </span>
                )}
              </button>

              {/* Get a Quote Primary CTA */}
              <button
                onClick={openQuoteDrawer}
                className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-[#1B1B1B] dark:bg-[#C89B5B] text-white dark:text-[#1B1B1B] text-xs font-semibold tracking-wider uppercase rounded-full border border-[#C89B5B] hover:bg-[#C89B5B] hover:text-white dark:hover:bg-white dark:hover:text-[#1B1B1B] transition-all duration-300 shadow-md group"
              >
                <span>Get a Quote</span>
                <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-xl text-gray-800 dark:text-white hover:bg-black/5 dark:hover:bg-white/10"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden bg-black/60 backdrop-blur-md flex justify-end">
          <div className="w-4/5 max-w-sm bg-[#1B1B1B] text-white h-full p-6 flex flex-col justify-between shadow-2xl overflow-y-auto rounded-l-3xl">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 border border-[#C89B5B] rounded-xl flex items-center justify-center text-[#C89B5B] font-bold font-heading">
                    AF
                  </div>
                  <span className="font-heading font-bold text-lg tracking-wider text-white">ALFONSE</span>
                </div>
                <button onClick={() => setMobileMenuOpen(false)} className="text-gray-400 hover:text-white p-1">
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Mobile Search */}
              <div className="mt-6">
                <div className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-xl px-3.5 py-2.5">
                  <Search className="w-4 h-4 text-[#C89B5B]" />
                  <input
                    type="text"
                    placeholder="Search furniture collections..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="bg-transparent text-xs text-white placeholder-gray-400 outline-none w-full"
                  />
                </div>
              </div>

              <nav className="mt-8 flex flex-col gap-3">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`text-left text-sm uppercase tracking-widest py-2.5 px-3 rounded-xl transition-colors ${
                      activeTab === item.id ? "bg-[#C89B5B]/15 text-[#C89B5B] font-semibold" : "text-gray-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>

            <div className="pt-6 border-t border-white/10 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openQuoteDrawer();
                }}
                className="w-full py-3.5 bg-[#C89B5B] text-[#1B1B1B] text-xs font-bold uppercase tracking-widest text-center rounded-2xl shadow-lg hover:bg-[#b08447] transition-colors"
              >
                Request Consultation ({quoteCount})
              </button>
              <div className="text-[11px] text-gray-400 text-center flex items-center justify-center gap-2 py-1">
                <PhoneCall className="w-3.5 h-3.5 text-[#C89B5B]" />
                <a href="tel:+263715872021" className="hover:text-[#C89B5B] transition-colors">
                  Harare Line: +263 71 587 2021
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

