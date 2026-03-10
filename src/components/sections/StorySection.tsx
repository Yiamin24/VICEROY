import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Image } from '@/components/ui/image';

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
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const images = [
    'https://static.wixstatic.com/media/cef78c_f4ce0db112e445878b943aa2c3e428c4~mv2.jpg',
    'https://static.wixstatic.com/media/cef78c_95d4e64d17f049229e3057cc3fdae1dd~mv2.jpg'
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section id="story" className="py-12 md:py-16 lg:py-20 bg-[#E9E3DC]">
      <div className="container mx-auto px-4 max-w-6xl">
        <FadeIn>
          <div className="flex flex-col items-center text-center space-y-8">
            {/* SVG Icon with line */}
            <div className="flex flex-col items-center">
              <div className="h-16 w-[1px] bg-[#13133F] mb-6"></div>
              <Image src="https://static.wixstatic.com/shapes/cef78c_cc426ba4732a4a29b66b1529bc9c6842.svg" alt="Icon" className="w-12 h-12" />
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

            {/* Image Slider */}
            <div className="w-full mt-8 relative">
              <div className="relative w-full aspect-[16/9] overflow-hidden">
                <motion.img
                  key={currentSlide}
                  src={images[currentSlide]}
                  alt={`Slide ${currentSlide + 1}`}
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                />

                {/* Navigation Arrows - Dark and Sharp */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/80 hover:bg-black flex items-center justify-center transition-all z-10"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-6 h-6 text-white" strokeWidth={1.5} />
                </button>

                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/80 hover:bg-black flex items-center justify-center transition-all z-10"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-6 h-6 text-white" strokeWidth={1.5} />
                </button>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
