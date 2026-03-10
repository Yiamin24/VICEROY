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
    'Fully Furnished Interiors',
    'Private Jacuzzi',
    'Wine Cellar',
    'Clubhouse & Pool',
    '24/7 Security',
    'Gym & Wellness'
  ];

  return (
    <section id="amenities" className="py-24 md:py-32 bg-lightBackground">
      <div className="container mx-auto px-4">
        <FadeIn className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-heading text-primary mb-6">
            World-Class Amenities
          </h2>
          <p className="text-lg text-primary/70 max-w-3xl mx-auto">
            Experience unparalleled comfort with amenities designed for the discerning homeowner
          </p>
        </FadeIn>

        {isLoading ? (
          <div className="flex justify-center items-center h-32">
            <LoadingSpinner className="text-primary w-8 h-8" />
          </div>
        ) : amenities.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {amenities.map((amenity, index) => (
              <FadeIn key={amenity._id} delay={index * 0.1}>
                <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-heading text-primary mb-3">{amenity.amenityName}</h3>
                  <p className="text-primary/60 text-sm">
                    {amenity.description || "Premium amenity for your comfort"}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {defaultAmenities.map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <h3 className="text-xl font-heading text-primary">{item}</h3>
                </div>
              </FadeIn>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
