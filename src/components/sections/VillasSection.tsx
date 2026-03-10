import React from 'react';
import { motion } from 'framer-motion';
import { Villas } from '@/entities';
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

const VILLA_DATA = [
  {
    id: "01",
    title: "Monarch Villas",
    description: "At the zenith of The Viceroy Estate stand the regal Monarch Villas, exuding grandeur and opulence in every detail.",
    image: "https://static.wixstatic.com/media/cef78c_9d6eb435157c47679701c334cb62fc17~mv2.jpg",
    specs: [
      { label: "GROUND FLOOR", value: "2238.75 sq.ft" },
      { label: "FIRST FLOOR", value: "2043.33 sq.ft" },
      { label: "SECOND FLOOR", value: "1528.70 sq.ft" },
    ],
    totalLabel: "TOTAL BUILT-UP\nAREA",
    totalValue: "5810.79 sq.ft"
  },
  {
    id: "02",
    title: "Papillon Villas",
    description: "Welcome to the Papillon Villas, where timeless elegance meets modern comfort in an enchanting setting.",
    image: "https://static.wixstatic.com/media/cef78c_a6849ad188d640468c751a137bd97ccd~mv2.jpg",
    specs: [
      { label: "GROUND FLOOR", value: "2307.26 sq.ft" },
      { label: "FIRST FLOOR", value: "2133.66 sq.ft" },
      { label: "SECOND FLOOR", value: "1609.33 sq.ft" },
    ],
    totalLabel: "TOTAL BUILT-UP\nAREA",
    totalValue: "6260.04 sq.ft"
  },
  {
    id: "03",
    title: "Mariposa Villas",
    description: "Nestled among the tranquil surroundings of The Viceroy Estate, the Mariposa Villas exude a sense of serenity & sophistication.",
    image: "https://static.wixstatic.com/media/cef78c_3aca53ce761a4e268d9ecdb790fbedf3~mv2.jpg",
    specs: [
      { label: "GROUND FLOOR", value: "2217.28 sq.ft" },
      { label: "FIRST FLOOR", value: "2223.95 sq.ft" },
      { label: "SECOND FLOOR", value: "1625.79 sq.ft" },
    ],
    totalLabel: "TOTAL BUILT-UP\nAREA",
    totalValue: "6276.81 sq.ft"
  }
];

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

        {/* The Collection Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {VILLA_DATA.map((villa, index) => (
            <FadeIn key={villa.id} delay={index * 0.1}>
              <div className="flex flex-col h-full bg-[#E9E3DC] w-full">
                
                {/* Image Section */}
                <div className="relative w-full aspect-square overflow-hidden mb-6">
                  <img
                    src={villa.image}
                    alt={villa.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  
                  <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 flex flex-col justify-end">
                    <span className="text-white text-sm md:text-base mb-1 tracking-widest" style={{ fontFamily: "'Manrope', sans-serif" }}>
                      {villa.id}
                    </span>
                    <h3 className="text-white text-3xl md:text-4xl lg:text-5xl mb-3" style={{ fontFamily: '"Cormorant Garamond", serif', fontWeight: 300 }}>
                      {villa.title}
                    </h3>
                    <p className="text-white/90 text-sm leading-relaxed max-w-sm" style={{ fontFamily: "'Manrope', sans-serif" }}>
                      {villa.description}
                    </p>
                  </div>
                </div>

                {/* Specs Section */}
                <div className="flex flex-col px-1">
                  <div className="flex flex-col">
                    {villa.specs.map((spec, i) => (
                      <React.Fragment key={i}>
                        <div className="flex justify-between items-center py-3">
                          <span className="text-[#13133F] text-sm uppercase tracking-wider" style={{ fontFamily: "'Manrope', sans-serif" }}>{spec.label}</span>
                          <span className="text-[#13133F] font-bold text-sm md:text-base" style={{ fontFamily: "'Manrope', sans-serif" }}>{spec.value}</span>
                        </div>
                        <hr className="border-[#13133F]/20" />
                      </React.Fragment>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center py-4 mt-2">
                    <span className="text-[#13133F] text-sm uppercase tracking-wider font-bold whitespace-pre-line" style={{ fontFamily: "'Manrope', sans-serif" }}>
                      {villa.totalLabel}
                    </span>
                    <span className="text-[#13133F] font-extrabold text-base md:text-lg" style={{ fontFamily: "'Manrope', sans-serif" }}>
                      {villa.totalValue}
                    </span>
                  </div>
                  <hr className="border-[#13133F]/20" />
                </div>

              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
