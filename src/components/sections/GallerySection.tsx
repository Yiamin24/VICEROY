import React from 'react';
import { motion } from 'framer-motion';
import { ImagePlayer } from '@/components/ui/image-player';

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
    "https://static.wixstatic.com/media/cef78c_f4f94c42265b4e358de5ba48e509f2c1~mv2.jpg",
    "https://static.wixstatic.com/media/cef78c_23e60a7195ba417793e5ed81a2d2c74f~mv2.jpg",
    "https://static.wixstatic.com/media/cef78c_5b03595818094af7be42624813c83f53~mv2.jpg",
    "https://static.wixstatic.com/media/cef78c_0f6b5aefd90b458b98d8fd39845071af~mv2.jpg",
    "https://static.wixstatic.com/media/cef78c_97406529472c4617bd6a3123498b8c95~mv2.jpg",
    "https://static.wixstatic.com/media/cef78c_88280da8d825406194ee925e9a5bdd0f~mv2.jpg",
    "https://static.wixstatic.com/media/cef78c_3a9694e0ae9d4202b806af9fff833ddb~mv2.jpg",
    "https://static.wixstatic.com/media/cef78c_7fbd88d4ec59409697c83a955c08d4eb~mv2.jpg"
  ];

  return (
    <section id="gallery" className="py-20 md:py-24 lg:py-28 bg-[#E9E3DC]">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-12 md:mb-16">
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
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {galleryImages.map((src, idx) => (
            <FadeIn key={idx} delay={idx * 0.05}>
              <div className="aspect-square overflow-hidden rounded-lg bg-[#13133F]/5 group">
                <ImagePlayer
                  images={[src]}
                  interval={3000}
                  renderImage={(imageSrc) => (
                    <img
                      src={imageSrc}
                      alt={`Gallery ${idx + 1}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  )}
                />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
