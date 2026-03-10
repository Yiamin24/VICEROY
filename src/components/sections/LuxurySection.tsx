import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function LuxurySection() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const butterflyY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section
      ref={sectionRef}
      id="luxury"
      className="pb-20 md:pb-32 lg:pb-40 bg-[#E9E3DC] relative overflow-hidden"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-16">

        {/* Heading */}
        <div className="relative mb-4 md:mb-6">

          <h2
            className="text-[#13133F]"
            style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontWeight: 300,
              letterSpacing: "-2.5px",
              lineHeight: 1.05,
              fontSize: "clamp(5rem, 11vw, 13rem)"
            }}
          >
            Luxury living in the<br />
            lap of Nature
          </h2>

          {/* Butterfly */}
          <motion.div
            className="absolute top-0 -right-6 md:-right-10 lg:-right-16"
            style={{ y: butterflyY }}
          >
            <img
              src="https://static.wixstatic.com/media/cef78c_05a9be484db24967b6ac3354e2f89a31~mv2.png"
              alt="Butterfly"
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 opacity-90"
            />
          </motion.div>

        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">

          {/* Left */}
          <div className="lg:col-span-5 space-y-6">

            <p
              className="text-[#13133F] text-base md:text-lg leading-relaxed"
              style={{ fontFamily: "'Manrope', sans-serif" }}
            >
              Quietly commanding its place atop a storied ridge in the Shivalik Hills,
              The Viceroy Estate is an intimate collection of 14 handcrafted villas –
              each an enduring statement of heritage and refinement.
            </p>

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

          {/* Right */}
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