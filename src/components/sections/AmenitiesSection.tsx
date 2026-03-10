import React from 'react';
import { motion } from 'framer-motion';
import { Amenities } from '@/entities';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import { ImageAutoSlider } from '@/components/ui/image-auto-slider';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const FadeIn: React.FC<{ children: React.ReactNode; delay?: number; className?: string }> = ({ 
  children, delay = 0, className = "" 
}) => (
  <motion.div
    variants={fadeInUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    transition={{ delay }}
    className={className}
  >
    {children}
  </motion.div>
);

interface AmenitiesSectionProps {
  amenities: Amenities[];
  isLoading: boolean;
}

export default function AmenitiesSection({ amenities, isLoading }: AmenitiesSectionProps) {
  const defaultAmenities = [
    'Fully Furnished Interiors',
    'Private Jacuzzi',
    'Wine Cellar',
    'Clubhouse & Pool',
    '24/7 Security',
    'Gym & Wellness'
  ];

  // Amenity images for the slider
  const amenityImages = amenities.length > 0 
    ? amenities.map(a => a.amenityImage).filter(Boolean) as string[]
    : [
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800',
        'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800',
        'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800',
        'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800',
        'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800'
      ];

  return (
    <section id="amenities" className="py-20 md:py-32 bg-[#181a43] relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#181a43] via-[#181a43]/95 to-[#181a43] z-0" />
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <FadeIn className="text-center mb-16 md:mb-20">
          <h2 
            className="text-white text-5xl md:text-6xl lg:text-7xl mb-6"
            style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontWeight: 300,
              letterSpacing: '-1px',
              lineHeight: 1.1
            }}
          >
            World-Class Amenities
          </h2>
          <p 
            className="text-white/80 text-base md:text-lg leading-relaxed max-w-3xl mx-auto"
            style={{ fontFamily: "'Manrope', sans-serif" }}
          >
            Experience unparalleled comfort with amenities designed for the discerning homeowner
          </p>
        </FadeIn>

        {isLoading ? (
          <div className="flex justify-center items-center h-32">
            <LoadingSpinner className="text-white w-8 h-8" />
          </div>
        ) : (
          <>
            {/* Image Slider */}
            <div className="mb-16 md:mb-20">
              <ImageAutoSlider images={amenityImages} speed={25} />
            </div>

            {/* Amenities Grid */}
            {amenities.length > 0 ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
                {amenities.map((amenity, index) => (
                  <FadeIn key={amenity._id} delay={index * 0.1}>
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 md:p-8 hover:bg-white/10 transition-all duration-300 h-full">
                      <h3 
                        className="text-white text-2xl md:text-3xl mb-3"
                        style={{
                          fontFamily: '"Cormorant Garamond", serif',
                          fontWeight: 300,
                          letterSpacing: '0.5px'
                        }}
                      >
                        {amenity.amenityName}
                      </h3>
                      <p 
                        className="text-white/70 text-sm md:text-base leading-relaxed"
                        style={{ fontFamily: "'Manrope', sans-serif" }}
                      >
                        {amenity.description || "Premium amenity for your comfort"}
                      </p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
                {defaultAmenities.map((item, i) => (
                  <FadeIn key={i} delay={i * 0.1}>
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 md:p-8 hover:bg-white/10 transition-all duration-300">
                      <h3 
                        className="text-white text-2xl md:text-3xl"
                        style={{
                          fontFamily: '"Cormorant Garamond", serif',
                          fontWeight: 300,
                          letterSpacing: '0.5px'
                        }}
                      >
                        {item}
                      </h3>
                    </div>
                  </FadeIn>
                ))}
              </div>
            )}
          </>
        )}
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#181a43] to-transparent z-20 pointer-events-none" />
    </section>
  );
}
