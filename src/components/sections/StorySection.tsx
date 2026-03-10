import React from 'react';
import { motion } from 'framer-motion';

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

export default function StorySection() {
  return (
    <section id="story" className="py-24 md:py-32 bg-lightBackground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-heading text-primary mb-8">Our Story</h2>
            <p className="text-xl md:text-2xl text-primary/80 leading-relaxed mb-6">
              Quietly commanding its place atop a storied ridge in the Shivalik Hills, The Viceroy Estate is an intimate collection of 14 handcrafted villas — each an enduring statement of heritage and refinement.
            </p>
            <p className="text-lg text-primary/70 leading-relaxed">
              Beyond their walls, these villas embrace a philosophy that champions mindful, rejuvenating living. In an era where urban landscapes grow denser, and life moves unrelentingly, The Viceroy Estate offers a rare alternative to slow living.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
