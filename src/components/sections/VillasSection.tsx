import React from 'react';
import { motion } from 'framer-motion';
import { Villas } from '@/entities';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import { Image } from '@/components/ui/image';

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

interface VillasSectionProps {
  villas: Villas[];
  isLoading: boolean;
}

export default function VillasSection({ villas, isLoading }: VillasSectionProps) {
  return (
    <section id="villas" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <FadeIn className="text-center mb-20">
          <span className="text-accent uppercase tracking-widest text-sm mb-4 block">The Collection</span>
          <h2 className="text-4xl md:text-5xl font-heading text-primary">Our Signature Villas</h2>
        </FadeIn>

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <LoadingSpinner className="text-primary w-8 h-8" />
          </div>
        ) : villas.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {villas.map((villa, index) => (
              <FadeIn key={villa._id} delay={index * 0.1}>
                <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                  {villa.mainImage ? (
                    <Image
                      src={villa.mainImage}
                      alt={villa.villaName || 'Villa'}
                      className="w-full h-64 object-cover"
                    />
                  ) : (
                    <div className="w-full h-64 bg-lightBackground flex items-center justify-center">
                      <span className="text-primary/50">No image available</span>
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="text-2xl font-heading text-primary mb-3">{villa.villaName}</h3>
                    <p className="text-primary/70 mb-4">
                      {villa.description || "Experience timeless elegance and modern comfort."}
                    </p>
                    <div className="text-sm text-primary/60">
                      <p>Total Area: 5810 sq.ft</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-primary/60">The collection is currently being curated.</p>
          </div>
        )}
      </div>
    </section>
  );
}
