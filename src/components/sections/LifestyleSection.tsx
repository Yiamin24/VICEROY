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

export default function LifestyleSection() {
  return (
    <section id="lifestyle" className="py-24 md:py-32 bg-accent text-white">
      <div className="container mx-auto px-4 text-center">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-heading mb-8">
            An Invitation to Slow Down & Reconnect
          </h2>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-4xl mx-auto">
            This is where mornings begin with panoramic sunrises and the scent of pine-infused air, afternoons invite leisurely walks through landscaped gardens, and evenings are best spent by the fireplace, accompanied by fine wine from a private cellar.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
