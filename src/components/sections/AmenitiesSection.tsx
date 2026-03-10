import React from 'react';
import { motion } from 'framer-motion';
import { Amenities } from '@/entities';
import { LoadingSpinner } from '@/components/ui/loading-spinner';

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
    { name: 'Fully Furnished Interiors', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800' },
    { name: 'Private Jacuzzi', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800' },
    { name: 'Wine Cellar', image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800' },
    { name: 'Clubhouse & Pool', image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800' },
    { name: '24/7 Security', image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800' },
    { name: 'Gym & Wellness', image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800' }
  ];

  // Prepare amenity data with images
  const amenityData = amenities.length > 0 
    ? amenities.map(a => ({
        name: a.amenityName,
        description: a.description,
        image: a.amenityImage || 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800'
      }))
    : defaultAmenities.map(a => ({ ...a, description: '' }));

  // Duplicate for seamless loop
  const duplicatedAmenities = [...amenityData, ...amenityData];

  return (
    <section id="amenities" className="py-12 md:py-14 lg:py-16 bg-[#181a43] relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#181a43] via-[#181a43]/95 to-[#181a43] z-0" />
      
      {/* Background Image - Bottom Right */}
      <img 
        src="https://static.wixstatic.com/media/cef78c_a516411178c242b6a03d7deecadca217~mv2.png"
        alt=""
        className="absolute bottom-0 right-0 z-[5]"
      />
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <FadeIn className="text-center mb-10 md:mb-12">
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
            {/* Image Slider with Text Overlays */}
            <style>{`
              @keyframes scroll-right {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(-50%);
                }
              }
              .infinite-scroll {
                animation: scroll-right 40s linear infinite;
              }
              .amenity-card {
                transition: transform 0.3s ease;
              }
              .amenity-card:hover {
                transform: scale(1.05);
              }
              .amenity-card:hover .amenity-overlay {
                background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 100%);
              }
            `}</style>
            
            <div className="relative z-10 w-full flex items-center justify-center py-8">
              <div className="w-full">
                <div className="infinite-scroll flex gap-4 md:gap-6 w-max">
                  {duplicatedAmenities.map((amenity, index) => (
                    <div
                      key={index}
                      className="amenity-card flex-shrink-0 w-64 h-80 sm:w-72 sm:h-96 md:w-80 md:h-[28rem] lg:w-96 lg:h-[32rem] rounded-lg overflow-hidden shadow-2xl relative group"
                    >
                      <img
                        src={amenity.image}
                        alt={amenity.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      {/* Text Overlay */}
                      <div className="amenity-overlay absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6 md:p-8 transition-all duration-300">
                        <h3 
                          className="text-white text-2xl md:text-3xl lg:text-4xl mb-2"
                          style={{
                            fontFamily: '"Cormorant Garamond", serif',
                            fontWeight: 300,
                            letterSpacing: '0.5px'
                          }}
                        >
                          {amenity.name}
                        </h3>
                        {amenity.description && (
                          <p 
                            className="text-white/90 text-sm md:text-base leading-relaxed"
                            style={{ fontFamily: "'Manrope', sans-serif" }}
                          >
                            {amenity.description}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#181a43] to-transparent z-20 pointer-events-none" />
    </section>
  );
}
