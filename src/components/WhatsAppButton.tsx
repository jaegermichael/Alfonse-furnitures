import React from "react";
import { MessageSquare } from "lucide-react";

export const WhatsAppButton: React.FC = () => {
  return (
    <a
      href="https://wa.me/263715872021?text=Hello%20Alfonse%20Furniture%2C%20I%20would%20like%20to%20inquire%20about%20a%20custom%20interior%20project."
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-40 p-3.5 bg-[#25D366] text-white rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center justify-center group"
      title="Contact Alfonse Furniture on WhatsApp (+263 71 587 2021)"
    >
      <MessageSquare className="w-6 h-6 fill-white" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap text-xs font-bold pl-0 group-hover:pl-2 font-mono">
        WhatsApp Concierge (+263 71 587 2021)
      </span>
    </a>
  );
};

