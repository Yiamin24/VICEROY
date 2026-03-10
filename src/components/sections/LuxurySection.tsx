import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function LuxurySection() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // butterfly parallax
  const butterflyY = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#E9E3DC] py-40 overflow-hidden"
    >
      <div className="relative w-full px-6 md:px-12 lg:px-20">

        {/* Huge Luxury Typography */}
        <h2
          className="text-[#13133F]"
          style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontWeight: 300,
            lineHeight: 1.02,
            letterSpacing: "-2px",
            fontSize: "clamp(5rem, 10vw, 13rem)",
          }}
        >
          Luxury living in the
          <br />
          lap of Nature
        </h2>

        {/* Butterfly */}
        <motion.div
          style={{ y: butterflyY }}
          className="absolute right-[5%] top-[6%]"
        >
          <img
            src="https://static.wixstatic.com/media/cef78c_05a9be484db24967b6ac3354e2f89a31~mv2.png"
            alt="Butterfly"
            className="w-20 md:w-28 lg:w-32 xl:w-36 opacity-90"
          />
        </motion.div>

      </div>
    </section>
  );
}