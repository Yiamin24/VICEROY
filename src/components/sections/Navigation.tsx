import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  onNavigate: (section: string) => void;
}

export default function Navigation({ onNavigate }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navItems = [
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
          className="hover:opacity-80 transition-opacity"
        >
          <img 
            src="https://static.wixstatic.com/shapes/cef78c_dcd23525792f4d138743a97f3592dd34.svg" 
            alt="The Viceroy Estate" 
            className="h-16 w-16 md:h-20 md:w-20"
          />
        </button>

        {/* Desktop Navigation - Centered */}
        <div className="hidden lg:flex items-center justify-center gap-10 flex-1">
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

        {/* Spacer for balance on desktop */}
        <div className="hidden lg:block w-16 md:w-20"></div>

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
