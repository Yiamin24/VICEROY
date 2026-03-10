import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const FadeIn: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <motion.div
    variants={fadeInUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
  >
    {children}
  </motion.div>
);

export default function LuxurySection() {
  const { scrollY } = useScroll();
  const [elementTop, setElementTop] = useState(0);
  
  useEffect(() => {
    const element = document.getElementById('luxury-section');
    if (element) {
      setElementTop(element.offsetTop);
    }
  }, []);

  // Parallax effect for butterfly - moves up and down as you scroll
  const butterflyY = useTransform(
    scrollY,
    [elementTop - 500, elementTop + 500],
    [-30, 30]
  );

  return (
    <section id="luxury-section" className="py-24 md:py-32 bg-[#E9E3DC] relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <FadeIn>
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

            {/* Parallax Butterfly */}
            <motion.div
              className="absolute right-8 top-8 md:right-16 md:top-12 lg:right-24 lg:top-16 z-20"
              style={{ y: butterflyY }}
            >
              <img 
                src="https://static.wixstatic.com/media/cef78c_05a9be484db24967b6ac3354e2f89a31~mv2.png" 
                alt="Butterfly" 
                className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 opacity-90"
              />
            </motion.div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
