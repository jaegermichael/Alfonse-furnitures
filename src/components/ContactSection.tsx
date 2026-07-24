import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, MessageSquare, Send, CheckCircle2 } from "lucide-react";

interface ContactSectionProps {
  darkMode: boolean;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ darkMode }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "Kitchen & Cabinetry",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        projectType: "Kitchen & Cabinetry",
        message: "",
      });
    }, 4000);
  };

  return (
    <section id="contact" className={`py-24 transition-colors duration-300 ${darkMode ? "bg-[#141414]" : "bg-[#FAF8F4]"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mb-16 space-y-3">
          <div className="flex items-center gap-2 text-[#C89B5B] text-xs font-semibold tracking-[0.25em] uppercase font-mono">
            <span className="w-6 h-[1px] bg-[#C89B5B]" />
            <span>PRIVATE SHOWROOM & WORKSHOP</span>
          </div>
          <h2 className={`text-3xl sm:text-5xl font-bold font-heading tracking-tight ${darkMode ? "text-white" : "text-[#1B1B1B]"}`}>
            Let's Design Your Dream Space
          </h2>
          <p className="text-sm text-gray-500 font-light leading-relaxed">
            Visit our Harare showroom at Sam Levy's Village, or schedule an in-home architectural consultation with our master design team across Zimbabwe.
          </p>
        </div>

        {/* Modern Split Screen Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Contact Info & Showroom Details */}
          <div className="lg:col-span-5 space-y-8">
            <div className={`p-8 border rounded-3xl shadow-xl space-y-6 ${darkMode ? "bg-[#1E1E1E] border-white/10" : "bg-white border-[#EAE5D9]"}`}>
              <h3 className={`text-xl font-bold font-heading ${darkMode ? "text-white" : "text-[#1B1B1B]"}`}>
                Harare Showroom & Atelier
              </h3>

              <div className="space-y-4 text-xs text-gray-600 dark:text-gray-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#C89B5B] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-bold text-gray-800 dark:text-white">Harare Flagship</strong>
                    <span>Sam Levy's Village, Borrowdale, Harare, Zimbabwe</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#C89B5B] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-bold text-gray-800 dark:text-white">Direct Mobile & WhatsApp</strong>
                    <a href="tel:+263715872021" className="hover:text-[#C89B5B] transition-colors font-medium">
                      +263 71 587 2021
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#C89B5B] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-bold text-gray-800 dark:text-white">General Inquiries</strong>
                    <span>concierge@alfonsefurniture.co.zw</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#C89B5B] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-bold text-gray-800 dark:text-white">Business Hours</strong>
                    <span>Mon - Fri: 08:00 - 17:00 | Sat: 09:00 - 13:00</span>
                  </div>
                </div>
              </div>

              {/* WhatsApp Quick Connect Button */}
              <div className="pt-4 border-t border-gray-200 dark:border-white/10">
                <a
                  href="https://wa.me/263715872021?text=Hello%20Alfonse%20Furniture%2C%20I%20would%20like%20to%20request%20a%20consultation."
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3.5 bg-[#25D366] text-white font-bold text-xs uppercase tracking-wider rounded-2xl flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-md"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Chat (+263 71 587 2021)</span>
                </a>
              </div>
            </div>

            {/* Google Map Frame */}
            <div className="relative h-64 w-full border border-[#C89B5B]/30 rounded-3xl overflow-hidden group shadow-lg">
              <iframe
                title="Alfonse Harare Showroom Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15194.27582238499!2d31.0827!3d-17.7561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931a4eb8d975141%3A0xb35a0cb08ff1e920!2sSam%20Levy&#39;s%20Village%2C%20Harare!5e0!3m2!1sen!2szw!4v1700000000000!5m2!1sen!2szw"
                className="w-full h-full border-0 opacity-90 group-hover:opacity-100 transition-all duration-500"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right: Direct Consultation Request Form */}
          <div className={`lg:col-span-7 p-8 sm:p-12 border rounded-3xl shadow-xl ${darkMode ? "bg-[#1E1E1E] border-white/10" : "bg-white border-[#EAE5D9]"}`}>
            <h3 className={`text-2xl font-bold font-heading mb-6 ${darkMode ? "text-white" : "text-[#1B1B1B]"}`}>
              Request Free Architectural Consultation
            </h3>

            {submitted ? (
              <div className="p-8 bg-[#C89B5B]/15 border border-[#C89B5B] rounded-2xl text-center space-y-3 my-12 animate-fade-in">
                <CheckCircle2 className="w-12 h-12 text-[#C89B5B] mx-auto" />
                <h4 className="text-xl font-bold font-heading text-[#C89B5B]">Consultation Request Received</h4>
                <p className="text-xs text-gray-300 font-light max-w-sm mx-auto">
                  Thank you. An Alfonse senior consultant will reach out via phone/WhatsApp (+263 71 587 2021) within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#C89B5B] mb-2 font-bold">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Tinashe Moyo"
                      className="w-full bg-gray-50 dark:bg-black/40 border border-gray-300 dark:border-white/15 px-4 py-3 rounded-2xl text-xs text-gray-800 dark:text-white outline-none focus:border-[#C89B5B] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#C89B5B] mb-2 font-bold">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. tinashe@moyo.co.zw"
                      className="w-full bg-gray-50 dark:bg-black/40 border border-gray-300 dark:border-white/15 px-4 py-3 rounded-2xl text-xs text-gray-800 dark:text-white outline-none focus:border-[#C89B5B] transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#C89B5B] mb-2 font-bold">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +263 71 587 2021"
                      className="w-full bg-gray-50 dark:bg-black/40 border border-gray-300 dark:border-white/15 px-4 py-3 rounded-2xl text-xs text-gray-800 dark:text-white outline-none focus:border-[#C89B5B] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#C89B5B] mb-2 font-bold">
                      Project Category
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full bg-gray-50 dark:bg-black/40 border border-gray-300 dark:border-white/15 px-4 py-3 rounded-2xl text-xs text-gray-800 dark:text-white outline-none focus:border-[#C89B5B] transition-all"
                    >
                      <option value="Kitchen & Cabinetry">Kitchen & Monolithic Island</option>
                      <option value="Walk-In Wardrobe">Walk-In Dressing Room</option>
                      <option value="TV & Media Wall">TV & Media Console</option>
                      <option value="Executive Office">Executive Office & Boardroom</option>
                      <option value="Whole Residence">Whole Residence Package</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#C89B5B] mb-2 font-bold">
                    Project Brief & Dimensions
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your room measurements, preferred timbers (Teak, Mukwa, Granite), location (Harare, Bulawayo, Vic Falls)..."
                    className="w-full bg-gray-50 dark:bg-black/40 border border-gray-300 dark:border-white/15 p-4 rounded-2xl text-xs text-gray-800 dark:text-white outline-none focus:border-[#C89B5B] resize-none transition-all"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#1B1B1B] dark:bg-[#C89B5B] text-white dark:text-[#1B1B1B] font-bold text-xs uppercase tracking-[0.2em] rounded-2xl hover:bg-[#C89B5B] dark:hover:bg-white transition-all shadow-xl flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Consultation Request</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
;
