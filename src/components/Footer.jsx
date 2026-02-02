import React from "react";
import { Heart, Github, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black py-14 border-t border-gray-800">
      <div className="container mx-auto px-6">
        {/* Main Footer Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Branding Section */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent tracking-wide">
              Hashir's Portfolio
            </h2>

            <p className="text-gray-400 mt-2 flex items-center justify-center md:justify-start">
              Crafted with{" "}
              <Heart size={16} className="text-red-500 mx-1 animate-pulse" /> by
              Hashir
            </p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6">
            {[
              {
                icon: Github,
                href: "https://github.com/HashirUmrani",
                label: "GitHub",
              },
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/hashir-umrani-81a989272/",
                label: "LinkedIn",
              },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="p-3 bg-gray-800 rounded-xl text-gray-300 
                hover:text-white hover:bg-blue-600 
                transition-all duration-300 hover:scale-110"
              >
                <social.icon size={22} />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Copyright Section */}
        <div className="border-t border-gray-800 mt-10 pt-6 text-center">
          <p className="text-gray-500 text-sm tracking-wide">
            © {currentYear} Hashir Umrani. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
