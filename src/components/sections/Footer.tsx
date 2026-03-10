import React from 'react';
import { MapPin, Mail, Phone, Instagram, Youtube, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-6 md:py-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Logo & Brand - Left */}
          <div className="md:col-span-3 flex flex-col items-center md:items-start">
            <img 
              src="https://static.wixstatic.com/shapes/cef78c_dcd23525792f4d138743a97f3592dd34.svg" 
              alt="The Viceroy Estate" 
              className="h-36 w-36 md:h-40 md:w-40 lg:h-48 lg:w-48 mb-3"
            />
            <p 
              className="text-white/60 text-xs text-center md:text-left max-w-xs"
              style={{ fontFamily: "'Manrope', sans-serif" }}
            >
              Redefining luxury living in the Shivalik Hills
            </p>
          </div>

          {/* Quick Links - Center */}
          <div className="md:col-span-5 flex flex-wrap justify-center gap-x-6 gap-y-2">
            {['Home', 'Villas', 'Amenities', 'Location', 'Gallery', 'Contact'].map((link) => (
              <a 
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-white/70 hover:text-white transition-colors text-sm"
                style={{ fontFamily: "'Manrope', sans-serif" }}
              >
                {link}
              </a>
            ))}
          </div>

          {/* Social & Contact - Right */}
          <div className="md:col-span-4 flex flex-col items-center md:items-end gap-4">
            <div className="flex gap-3">
              <a 
                href="#" 
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300"
              >
                <Instagram className="h-4 w-4 text-white" />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300"
              >
                <Youtube className="h-4 w-4 text-white" />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300"
              >
                <Linkedin className="h-4 w-4 text-white" />
              </a>
            </div>
            <a 
              href="mailto:hello@theviceroyestate.com"
              className="text-white/70 hover:text-white transition-colors text-sm"
              style={{ fontFamily: "'Manrope', sans-serif" }}
            >
              hello@theviceroyestate.com
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-3 flex flex-col md:flex-row justify-between items-center gap-2 text-xs">
          <p 
            className="text-white/50"
            style={{ fontFamily: "'Manrope', sans-serif" }}
          >
            © 2026 The Viceroy Estate. All Rights Reserved.
          </p>
          <p 
            className="text-white/50"
            style={{ fontFamily: "'Manrope', sans-serif" }}
          >
            RERA: HPRERASOL2024118/P
          </p>
        </div>
      </div>
    </footer>
  );
}
