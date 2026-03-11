import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Image } from '@/components/ui/image';

interface NavigationProps {
  onNavigate: (section: string) => void;
}

export default function Navigation({ onNavigate }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showBackground, setShowBackground] = useState(false);
  
  const navItems = [
    { label: 'STORY', section: 'story' },
    { label: 'VILLAS', section: 'villas' },
    { label: 'AMENITIES', section: 'amenities' },
    { label: 'LOCATION', section: 'location' },
    { label: 'GALLERY', section: 'gallery' },
    { label: 'CONTACT', section: 'contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show solid background after hero section (approximately after 100vh)
      const heroHeight = window.innerHeight;
      setShowBackground(currentScrollY > heroHeight * 0.8);
      
      // Show/hide navigation based on scroll direction
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
        setIsMenuOpen(false);
      }
      
      setLastScrollY(currentScrollY);

      // Active section detection
      const sections = ['hero', 'story', 'luxury', 'villas', 'amenities', 'location', 'gallery', 'contact'];
      const scrollPosition = window.scrollY + 300;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    handleScroll(); // Call once on mount
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleNavClick = (section: string) => {
    onNavigate(section);
    setActiveSection(section);
    setIsMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[10000] transition-all duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${showBackground ? 'bg-[#1A1A1A]/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}
      style={{ pointerEvents: 'auto', isolation: 'isolate' }}
    >
      <div className="container mx-auto px-6 py-2 flex items-center justify-between">
        {/* Logo */}
        <button 
          onClick={() => onNavigate('hero')}
          className="hover:opacity-80 transition-opacity flex-shrink-0"
        >
          <Image src="https://static.wixstatic.com/shapes/cef78c_dcd23525792f4d138743a97f3592dd34.svg" alt="The Viceroy Estate" className="h-32 w-32 sm:h-36 sm:w-36 md:h-40 md:w-40 lg:h-[160px] lg:w-[160px]" />
        </button>

        {/* Desktop Navigation - Shifted Right & Centered Vertically */}
        <div className="hidden lg:flex items-center justify-center gap-10 flex-1 ml-20">
          {navItems.map((item) => (
            <button
              key={item.section}
              onClick={() => handleNavClick(item.section)}
              className="relative text-white text-sm font-medium tracking-wider hover:text-white/70 transition-colors py-2"
            >
              {item.label}
              {activeSection === item.section && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-white rounded-full"></span>
              )}
            </button>
          ))}
        </div>

        {/* Spacer for balance on desktop */}
        <div className="hidden lg:block w-24 md:w-32 lg:w-[160px] flex-shrink-0"></div>

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
                className="relative text-white text-sm font-medium tracking-wider hover:text-white/70 transition-colors text-left py-2"
              >
                {item.label}
                {activeSection === item.section && (
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-white rounded-full"></span>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
