import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const FadeIn: React.FC<{ children: React.ReactNode; delay?: number }> = ({ 
  children, delay = 0 
}) => (
  <motion.div
    variants={fadeInUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    transition={{ delay }}
  >
    {children}
  </motion.div>
);

export default function GallerySection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const galleryImages = [
    "https://static.wixstatic.com/media/cef78c_f4f94c42265b4e358de5ba48e509f2c1~mv2.jpg",
    "https://static.wixstatic.com/media/cef78c_23e60a7195ba417793e5ed81a2d2c74f~mv2.jpg",
    "https://static.wixstatic.com/media/cef78c_5b03595818094af7be42624813c83f53~mv2.jpg",
    "https://static.wixstatic.com/media/cef78c_0f6b5aefd90b458b98d8fd39845071af~mv2.jpg",
    "https://static.wixstatic.com/media/cef78c_97406529472c4617bd6a3123498b8c95~mv2.jpg",
    "https://static.wixstatic.com/media/cef78c_88280da8d825406194ee925e9a5bdd0f~mv2.jpg",
    "https://static.wixstatic.com/media/cef78c_3a9694e0ae9d4202b806af9fff833ddb~mv2.jpg",
    "https://static.wixstatic.com/media/cef78c_7fbd88d4ec59409697c83a955c08d4eb~mv2.jpg"
  ];

  // Auto-play functionality
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
    }, 3000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [galleryImages.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
    // Reset interval on manual navigation
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
    }, 3000);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
    // Reset interval on manual navigation
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
    }, 3000);
  };

  return (
    <section id="gallery" className="py-20 md:py-24 lg:py-28 bg-[#E9E3DC]">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-6 md:mb-8">
            <h2 
              className="text-[#13133F] text-5xl md:text-6xl lg:text-7xl"
              style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontWeight: 300,
                letterSpacing: '-1px',
                lineHeight: 1.1
              }}
            >
              Gallery
            </h2>
            <p 
              className="text-[#13133F]/70 text-base md:text-lg mt-4"
              style={{ fontFamily: "'Manrope', sans-serif" }}
            >
              Explore the beauty of The Viceroy Estate
            </p>
          </div>
        </FadeIn>
        
        <FadeIn delay={0.2}>
          <div className="relative w-full max-w-6xl mx-auto">
            <div className="relative w-full aspect-[16/9] overflow-hidden rounded-lg shadow-2xl">
              <motion.img
                key={currentIndex}
                src={galleryImages[currentIndex]}
                alt={`The Viceroy Estate Gallery ${currentIndex + 1}`}
                className="w-full h-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />

              {/* Navigation Arrows - Same design as Story Section */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/80 hover:bg-black flex items-center justify-center transition-all z-10"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6 text-white" strokeWidth={1.5} />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/80 hover:bg-black flex items-center justify-center transition-all z-10"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6 text-white" strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
