import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

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

interface HeroSectionProps {
  onExploreClick: () => void;
}

export default function HeroSection({ onExploreClick }: HeroSectionProps) {
  return (
    <section id="hero" className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10 }}
        className="absolute inset-0"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://theviceroyestate.com/wp-content/uploads/2025/08/TVE-nature-shot.jpg)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-accent/40 via-accent/20 to-accent/80" />
      </motion.div>

      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <FadeIn delay={0.2}>
          <span className="block text-white/90 uppercase tracking-[0.3em] text-sm mb-6">
            Welcome to The Viceroy Estate
          </span>
        </FadeIn>
        
        <FadeIn delay={0.4}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-light leading-tight mb-8">
            Luxury Living in the<br />
            <span className="italic">Lap of Nature</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.6}>
          <Button 
            onClick={onExploreClick}
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-accent px-8 py-6 text-sm tracking-widest uppercase"
          >
            Discover the Estate
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
