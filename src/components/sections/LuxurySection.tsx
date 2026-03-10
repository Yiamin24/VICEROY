import React from 'react';
import { Image } from '@/components/ui/image';

export default function LuxurySection() {
  return (
    <section 
      id="luxury" 
      className="py-24 md:py-32 bg-lightBackground relative overflow-hidden"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col items-start text-left space-y-12 relative">
          {/* Main Text with Cormorant Garamond */}
          <h2 
            className="text-[#13133F] text-4xl md:text-5xl lg:text-7xl relative z-10"
            style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontWeight: 300,
              letterSpacing: '-1px',
              lineHeight: 1.2
            }}
          >
            Luxury living in the<br />
            lap of Nature
          </h2>

          {/* Butterfly */}
          <div className="absolute right-8 top-8 md:right-16 md:top-12 lg:right-24 lg:top-16 z-20">
            <Image src="https://static.wixstatic.com/media/cef78c_05a9be484db24967b6ac3354e2f89a31~mv2.png" alt="Butterfly" className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 opacity-90" />
          </div>
        </div>
      </div>
    </section>
  );
}
