import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#E9E3DC] text-[#13133F] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 border-b border-[#13133F]/10">
          
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <h3 
              className="text-3xl md:text-4xl text-[#13133F] mb-4"
              style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontWeight: 300,
                letterSpacing: '0.5px'
              }}
            >
              The Viceroy Estate
            </h3>
            <p 
              className="text-[#13133F]/70 text-sm md:text-base leading-relaxed max-w-md"
              style={{ fontFamily: "'Manrope', sans-serif" }}
            >
              An intimate collection of handcrafted villas nestled in the serene beauty of the Shivalik Hills, redefining luxury living.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 
              className="text-xl text-[#13133F] mb-4"
              style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontWeight: 300
              }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2">
              {['Home', 'Villas', 'Amenities', 'Location', 'Gallery', 'Contact'].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase()}`}
                    className="text-[#13133F]/70 hover:text-[#13133F] transition-colors text-sm md:text-base"
                    style={{ fontFamily: "'Manrope', sans-serif" }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 
              className="text-xl text-[#13133F] mb-4"
              style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontWeight: 300
              }}
            >
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#13133F]/70 mt-1 flex-shrink-0" />
                <span 
                  className="text-[#13133F]/70 text-sm"
                  style={{ fontFamily: "'Manrope', sans-serif" }}
                >
                  Dhar, Himachal Pradesh
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#13133F]/70 mt-1 flex-shrink-0" />
                <a 
                  href="mailto:hello@theviceroyestate.com"
                  className="text-[#13133F]/70 hover:text-[#13133F] transition-colors text-sm"
                  style={{ fontFamily: "'Manrope', sans-serif" }}
                >
                  hello@theviceroyestate.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#13133F]/70 mt-1 flex-shrink-0" />
                <span 
                  className="text-[#13133F]/70 text-sm"
                  style={{ fontFamily: "'Manrope', sans-serif" }}
                >
                  +91 XXXX XXXXXX
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 md:py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p 
            className="text-[#13133F]/60 text-xs md:text-sm text-center md:text-left"
            style={{ fontFamily: "'Manrope', sans-serif" }}
          >
            RERA: HPRERASOL2024118/P
          </p>
          <p 
            className="text-[#13133F]/60 text-xs md:text-sm text-center md:text-right"
            style={{ fontFamily: "'Manrope', sans-serif" }}
          >
            © 2026 The Viceroy Estate. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
