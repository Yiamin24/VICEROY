import React from 'react';
import { motion } from 'framer-motion';
import { Image } from '@/components/ui/image';

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
  const galleryImages = [
    "https://theviceroyestate.com/wp-content/uploads/2025/07/The-Viceroy-Estate-18-small-1.jpg",
    "https://theviceroyestate.com/wp-content/uploads/2025/07/clubhouse-bar-TVE-home-small-02.jpg",
    "https://theviceroyestate.com/wp-content/uploads/2025/07/clubhouse-interior-living-TVE-home-small-01.jpg",
    "https://theviceroyestate.com/wp-content/uploads/2025/05/The-Viceroy-Estate-20.jpg"
  ];

  return (
    <section id="gallery" className="py-24 bg-lightBackground">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading text-primary">Gallery</h2>
          </div>
        </FadeIn>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryImages.map((src, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div className="aspect-square overflow-hidden rounded-lg">
                <Image 
                  src={src} 
                  alt={`Gallery ${idx + 1}`} 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" 
                />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
