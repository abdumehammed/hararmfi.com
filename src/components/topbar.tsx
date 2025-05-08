import React from "react";
import webmaillogo from "/src/images/webmail_logo.svg";

import {
  FaMapMarkerAlt,
  FaFax,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const Topbar: React.FC = () => {
  const topbarLinks = [
    {
      icon: <FaMapMarkerAlt className="text-blue-700 mr-2" />,
      label: "Harar ,Ethiopia",
    },
    {
      icon: <FaFax className="text-blue-700 mr-2" />,
      label: "+251 25 66 63745",
      href: "tel:+251256663745",
    },
    {
      icon: <FaPhoneAlt className="text-blue-700 mr-2" />,
      label: "+251 25 66 63745",
      href: "tel:+251256663745",
    },
    {
      icon: <FaEnvelope className="text-blue-700 mr-2" />,
      label: "ContactCenter@hararmfi.com",
      href: "mailto:contactcenter@hararmfi.com",
    },
    {
      label: <img src={webmaillogo} alt="Webmail" className="w-24 h-5" />,
      href: "https://hararmfi.com:2096/",
    },
  ];

  const socialLinks = [
    {
      icon: <FaFacebookF />,
      href: "https://www.facebook.com/people/Harar-MicroFinance-Institution/61565622741044/",
      label: "Facebook",
    },
    {
      icon: <FaTwitter />,
      href: "https://x.com/hararmfi/",
      label: "Twitter",
    },
    {
      icon: <FaLinkedinIn />,
      href: "https://www.linkedin.com/in/harar-microfinance-institution-s-c-420141329/",
      label: "LinkedIn",
    },
  ];

  return (
    <div className="bg-gray-100 py-2 border-b hidden lg:block">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-4">
        {/* Contact Info */}
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-sm text-gray-800">
          {topbarLinks.map((link, idx) => (
            <div key={idx} className="flex items-center">
              {link.icon}
              {link.href ? (
                <a
                  href={link.href}
                  className="text-gray-800 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                </a>
              ) : (
                <span>{link.label}</span>
              )}
            </div>
          ))}
        </div>

        {/* Social Media Icons */}
        <div className="flex mt-2 lg:mt-0 space-x-2">
          {socialLinks.map((social, idx) => (
            <a
              key={idx}
              href={social.href}
              className="w-8 h-8 text-blue-700 border border-blue-700 rounded-full flex items-center justify-center hover:bg-blue-700 hover:text-white transition"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Topbar;
