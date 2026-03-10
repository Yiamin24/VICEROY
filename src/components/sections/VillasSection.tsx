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
    <section id="villas" className="py-24 md:py-32 bg-[#E9E3DC]">
      <div className="container mx-auto px-4">
        
        {/* Slow Down & Reconnect Section */}
        <FadeIn className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto mb-20 md:mb-28">
          <img 
            src="https://static.wixstatic.com/media/cef78c_5804c42dacde4d0e99fd7ed02970c941~mv2.png" 
            alt="Star" 
            className="w-16 h-16 md:w-20 md:h-20 mb-6 object-contain"
          />
          <span 
            className="text-[#13133F] uppercase tracking-[0.2em] text-sm md:text-base mb-6"
            style={{ fontFamily: "'Manrope', sans-serif" }}
          >
            An Invitation To
          </span>
          <h2 
            className="text-[#13133F] mb-8"
            style={{ 
              fontFamily: '"Cormorant Garamond", serif', 
              fontWeight: 300,
              fontSize: "clamp(3rem, 6vw, 5rem)",
              lineHeight: 1.1,
              letterSpacing: "-1px"
            }}
          >
            Slow Down & Reconnect
          </h2>
          <p 
            className="text-[#13133F] text-base md:text-lg lg:text-xl leading-relaxed"
            style={{ fontFamily: "'Manrope', sans-serif" }}
          >
            Beyond their walls, these villas embrace a philosophy that champions mindful, 
            rejuvenating living. In an era where urban landscapes grow denser, and life moves 
            unrelentingly, The Viceroy Estate offers a rare alternative to slow living – 
            one where clean mountain air, fresh produce, and nature's tranquillity intertwine 
            effortlessly with modern design sensibilities.
          </p>
          
          <div className="w-[1px] h-24 bg-[#13133F]/30 mt-16 md:mt-24"></div>
        </FadeIn>

        <FadeIn className="text-center mb-16 md:mb-20">
          <span className="text-[#13133F] uppercase tracking-[0.2em] text-sm mb-4 block" style={{ fontFamily: "'Manrope', sans-serif" }}>The Collection</span>
          <h2 className="text-[#13133F]" style={{ fontFamily: '"Cormorant Garamond", serif', fontWeight: 300, fontSize: "clamp(2rem, 4vw, 3rem)" }}>Our Signature Villas</h2>
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
