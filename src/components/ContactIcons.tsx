import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { SiZalo } from "react-icons/si";
import { FaFacebookMessenger } from "react-icons/fa";

const ContactIcons: React.FC = () => {
  return (
    <div className="fixed left-4 bottom-10 flex flex-col gap-3 z-50">
      {/* Zalo */}
      <a
        href="https://zalo.me/your-link"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-400 text-white shadow-lg hover:scale-110 transition-transform duration-200 hover:bg-blue-500"
      >
        <SiZalo size={28} />
      </a>

      {/* Messenger */}
      <a
        href="https://m.me/your-link"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white shadow-lg hover:scale-110 transition-transform duration-200 hover:bg-blue-700"
      >
        <FaFacebookMessenger size={28} />
      </a>

      {/* Phone Call */}
      <a
        href="tel:0123456789"
        className="flex items-center justify-center w-12 h-12 rounded-full bg-red-500 text-white shadow-lg hover:scale-110 transition-transform duration-200 hover:bg-red-600"
      >
        <FaPhoneAlt size={24} />
      </a>
    </div>
  );
};

export default ContactIcons;
