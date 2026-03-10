import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function LuxurySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Parallax effect for butterfly - moves up and down
  const butterflyY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section 
      ref={sectionRef}
      id="luxury" 
      className="py-20 md:py-32 lg:py-40 bg-[#E9E3DC] relative overflow-hidden"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="relative">
          {/* Main Text - Two Lines as in Reference */}
          <h2 
            className="text-[#13133F] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
            style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontWeight: 300,
              letterSpacing: '-1px',
              lineHeight: 1.15
            }}
          >
            Luxury living in the<br />
            lap of Nature
          </h2>

          {/* Parallax Butterfly - Top Right */}
          <motion.div
            className="absolute -top-4 right-0 md:-top-8 md:right-8 lg:-top-12 lg:right-16"
            style={{ y: butterflyY }}
          >
            <img 
              src="https://static.wixstatic.com/media/cef78c_05a9be484db24967b6ac3354e2f89a31~mv2.png" 
              alt="Butterfly" 
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 opacity-90"
            />
          </motion.div>

          {/* Scroll to Top Button - Bottom Right */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="absolute -bottom-16 right-0 md:-bottom-20 md:right-8 lg:right-16 w-12 h-12 md:w-14 md:h-14 bg-black rounded-full flex items-center justify-center hover:bg-black/80 transition-colors"
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
