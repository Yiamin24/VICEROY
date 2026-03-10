import React from 'react';

export default function LuxurySection() {
  return (
    <section 
      id="luxury" 
      className="py-32 md:py-40 lg:py-48 bg-[#E9E3DC] relative overflow-hidden"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col items-center justify-center text-center relative min-h-[400px]">
          {/* Main Text with Cormorant Garamond - Centered and Large */}
          <h2 
            className="text-[#13133F] text-5xl md:text-7xl lg:text-8xl xl:text-9xl relative z-10 max-w-5xl"
            style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontWeight: 300,
              letterSpacing: '-1px',
              lineHeight: 1.1
            }}
          >
            Luxury living in the lap of Nature
          </h2>

          {/* Butterfly - Top Right */}
          <div className="absolute right-4 top-4 md:right-8 md:top-8 lg:right-16 lg:top-12 z-20">
            <img 
              src="https://static.wixstatic.com/media/cef78c_05a9be484db24967b6ac3354e2f89a31~mv2.png" 
              alt="Butterfly" 
              className="w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 opacity-90"
            />
          </div>

          {/* Scroll to Top Button - Bottom Right */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="absolute right-4 bottom-4 md:right-8 md:bottom-8 w-12 h-12 md:w-14 md:h-14 bg-black rounded-full flex items-center justify-center hover:bg-black/80 transition-colors z-20"
            aria-label="Scroll to top"
          >
            <svg 
              className="w-5 h-5 md:w-6 md:h-6 text-white" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
