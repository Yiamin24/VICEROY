import React from 'react';
import { motion } from 'framer-motion';

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

export default function StorySection() {
  return (
    <section id="story" className="py-24 md:py-32 bg-[#E9E3DC]">
      <div className="container mx-auto px-4 max-w-6xl">
        <FadeIn>
          <div className="flex flex-col items-center text-center space-y-12">
            {/* SVG Icon with line */}
            <div className="flex flex-col items-center">
              <div className="h-16 w-[1px] bg-[#13133F] mb-6"></div>
              <img 
                src="https://static.wixstatic.com/shapes/cef78c_cc426ba4732a4a29b66b1529bc9c6842.svg" 
                alt="Icon" 
                className="w-12 h-12"
              />
            </div>

            {/* Main Text with Cormorant Garamond */}
            <p 
              className="text-[#13133F] text-3xl md:text-4xl lg:text-5xl"
              style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontWeight: 300,
                letterSpacing: '-1px',
                lineHeight: 1.2
              }}
            >
              Driven by a legacy of heritage & excellence since 1973, The Mount Shivalik Group, A pioneer in brewing takes a dive into boutique real estate development, redefining luxury living in India's most pristine landscapes.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
