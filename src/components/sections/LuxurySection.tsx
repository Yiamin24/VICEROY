import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function LuxurySection() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Smooth subtle parallax
  const butterflyY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#E9E3DC] py-32 md:py-40 overflow-hidden"
    >
      <div className="relative px-8 md:px-16 lg:px-24">

        {/* Text Block */}
        <h2
          className="text-[#13133F]"
          style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontWeight: 300,
            letterSpacing: "-1.5px",
            lineHeight: 1.05,
            fontSize: "clamp(4rem, 8vw, 9rem)"
          }}
        >
          Luxury living in the
          <br />
          lap of Nature
        </h2>

        {/* Butterfly */}
        <motion.div
          style={{ y: butterflyY }}
          className="absolute 
          right-[6%] 
          top-[8%] 
          md:right-[8%] 
          md:top-[10%]"
        >
          <img
            src="https://static.wixstatic.com/media/cef78c_05a9be484db24967b6ac3354e2f89a31~mv2.png"
            alt="Butterfly"
            className="w-16 md:w-24 lg:w-28 xl:w-32 opacity-90"
          />
        </motion.div>

        {/* Scroll Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="absolute bottom-[-60px] right-[6%] w-12 h-12 bg-black rounded-full flex items-center justify-center"
        >
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>

      </div>
    </section>
  );
}