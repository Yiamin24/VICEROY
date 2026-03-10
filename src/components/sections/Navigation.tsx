import React from 'react';

interface NavigationProps {
  onNavigate: (section: string) => void;
}

export default function Navigation({ onNavigate }: NavigationProps) {
  const navItems = ['Hero', 'Story', 'Villas', 'Amenities', 'Location', 'Lifestyle', 'Gallery', 'Contact'];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-accent/10">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-xl md:text-2xl font-heading font-bold text-primary">
          The Viceroy Estate
        </div>
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => onNavigate(item.toLowerCase())}
              className="text-sm text-primary hover:text-accent transition-colors"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
