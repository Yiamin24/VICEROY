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
        <div className="relative mb-20 md:mb-32">
          {/* Main Text - Two Lines as in Reference */}
          <h2 
            className="text-[#13133F] text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl"
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

        {/* Content Section with Text, Video and Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Left Column - Text and Video */}
          <div className="lg:col-span-5 space-y-6">
            {/* Text Content */}
            <p 
              className="text-[#13133F] text-base md:text-lg leading-relaxed"
              style={{
                fontFamily: "'Manrope', sans-serif"
              }}
            >
              Quietly commanding its place atop a storied ridge in the Shivalik Hills, The Viceroy Estate is an intimate collection of 14 handcrafted villas – each an enduring statement of heritage and refinement.
            </p>

            {/* Small Video */}
            <div className="w-full aspect-video overflow-hidden">
              <video
                src="https://video.wixstatic.com/video/cef78c_97a3d2d47c1d4506a16749a045df7d7a/1080p/mp4/file.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Column - Large Image */}
          <div className="lg:col-span-7">
            <div className="w-full aspect-[4/3] overflow-hidden">
              <img
                src="https://static.wixstatic.com/media/cef78c_a12c3a34095043ae96facbc67b1aeeb1~mv2.jpg"
                alt="The Viceroy Estate"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
