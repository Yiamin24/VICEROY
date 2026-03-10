import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  onNavigate: (section: string) => void;
}

export default function Navigation({ onNavigate }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navItems = [
    { label: 'HOME', section: 'hero' },
    { label: 'STORY', section: 'story' },
    { label: 'VILLAS', section: 'villas' },
    { label: 'AMENITIES', section: 'amenities' },
    { label: 'LOCATION', section: 'location' },
    { label: 'LIFESTYLE', section: 'lifestyle' },
    { label: 'GALLERY', section: 'gallery' },
    { label: 'CONTACT', section: 'contact' }
  ];

  const handleNavClick = (section: string) => {
    onNavigate(section);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto px-6 py-6 flex items-center justify-between">
        {/* Logo */}
        <button 
          onClick={() => onNavigate('hero')}
          className="flex items-center gap-3 hover:opacity-80 transition-opacity"
        >
          <img 
            src="https://static.wixstatic.com/shapes/cef78c_dcd23525792f4d138743a97f3592dd34.svg" 
            alt="The Viceroy Estate" 
            className="h-14 w-14"
          />
          <div className="flex flex-col items-start">
            <span className="text-white font-heading text-xl tracking-wider leading-tight">VICEROY</span>
            <span className="text-white/90 text-xs tracking-[0.25em] leading-tight">ESTATE</span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-10">
          {navItems.map((item) => (
            <button
              key={item.section}
              onClick={() => handleNavClick(item.section)}
              className="text-white text-sm font-medium tracking-wider hover:text-white/70 transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-white hover:text-white/70 transition-colors"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[#0a1f1a]/95 backdrop-blur-sm border-t border-white/10">
          <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.section}
                onClick={() => handleNavClick(item.section)}
                className="text-white text-sm font-medium tracking-wider hover:text-white/70 transition-colors text-left"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
