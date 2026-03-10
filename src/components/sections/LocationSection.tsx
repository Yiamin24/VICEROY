import React from 'react';
import { motion } from 'framer-motion';
import { Image } from '@/components/ui/image';
import { MapPin } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const FadeIn: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <motion.div
    variants={fadeInUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
  >
    {children}
  </motion.div>
);

export default function LocationSection() {
  return (
    <section id="location" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-accent">
                <MapPin className="h-5 w-5" />
                <span className="text-sm uppercase tracking-widest">Dhar, Himachal Pradesh</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-heading text-primary">
                A Scenic 30-Minute Drive from Solan City
              </h2>
              <p className="text-lg text-primary/70 leading-relaxed">
                Located in the Hamlet of Dhar, The Viceroy Estate is a rare escapade where the hills touch the sky, and modern comforts meet the untouched beauty of the Himalayan landscape.
              </p>
              <p className="text-lg text-primary/70 leading-relaxed">
                Perched on a hilltop at an elevation of 6000 feet above sea level, the estate offers panoramic vistas of the surrounding valleys and mountain peaks.
              </p>
            </div>
          </FadeIn>
          
          <FadeIn>
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto">
              <Image
                src="https://theviceroyestate.com/wp-content/uploads/2025/05/The-Viceroy-Estate-01.jpg"
                alt="Location"
                className="w-full h-full object-cover rounded-lg shadow-2xl"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
