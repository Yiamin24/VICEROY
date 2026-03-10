import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Instagram, Youtube, Linkedin, Send } from 'lucide-react';

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

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-20 md:py-24 lg:py-28 bg-[#181a43] relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#181a43] via-[#1a1c48] to-[#181a43]" />
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12 md:mb-16">
              <h2 
                className="text-white text-5xl md:text-6xl lg:text-7xl mb-4"
                style={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontWeight: 300,
                  letterSpacing: '-1px',
                  lineHeight: 1.1
                }}
              >
                Get in Touch
              </h2>
              <p 
                className="text-white/70 text-base md:text-lg"
                style={{ fontFamily: "'Manrope', sans-serif" }}
              >
                We'd love to hear from you
              </p>
            </div>
          </FadeIn>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Glassmorphism Form */}
            <FadeIn>
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 md:p-10 shadow-2xl">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-white/40 focus:ring-white/20 h-12 rounded-lg"
                      style={{ fontFamily: "'Manrope', sans-serif" }}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-white/40 focus:ring-white/20 h-12 rounded-lg"
                      style={{ fontFamily: "'Manrope', sans-serif" }}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="tel"
                      placeholder="Your Phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-white/40 focus:ring-white/20 h-12 rounded-lg"
                      style={{ fontFamily: "'Manrope', sans-serif" }}
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-white/40 focus:ring-white/20 min-h-[150px] rounded-lg resize-none"
                      style={{ fontFamily: "'Manrope', sans-serif" }}
                      required
                    />
                  </div>
                  <Button 
                    type="submit"
                    className="w-full bg-white/20 hover:bg-white/30 text-white border border-white/30 h-12 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                    style={{ fontFamily: "'Manrope', sans-serif" }}
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </Button>
                </form>
              </div>
            </FadeIn>

            {/* Contact Info */}
            <FadeIn delay={0.2}>
              <div className="space-y-8">
                <div>
                  <h3 
                    className="text-white text-3xl md:text-4xl mb-6"
                    style={{
                      fontFamily: '"Cormorant Garamond", serif',
                      fontWeight: 300,
                      letterSpacing: '0.5px'
                    }}
                  >
                    Contact Information
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4 group">
                      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors">
                        <MapPin className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p 
                          className="text-white font-medium text-lg mb-1"
                          style={{ fontFamily: "'Manrope', sans-serif" }}
                        >
                          Location
                        </p>
                        <p 
                          className="text-white/70"
                          style={{ fontFamily: "'Manrope', sans-serif" }}
                        >
                          Dhar, Himachal Pradesh
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 group">
                      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors">
                        <Mail className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p 
                          className="text-white font-medium text-lg mb-1"
                          style={{ fontFamily: "'Manrope', sans-serif" }}
                        >
                          Email
                        </p>
                        <p 
                          className="text-white/70"
                          style={{ fontFamily: "'Manrope', sans-serif" }}
                        >
                          hello@theviceroyestate.com
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 group">
                      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors">
                        <Phone className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p 
                          className="text-white font-medium text-lg mb-1"
                          style={{ fontFamily: "'Manrope', sans-serif" }}
                        >
                          Phone
                        </p>
                        <p 
                          className="text-white/70"
                          style={{ fontFamily: "'Manrope', sans-serif" }}
                        >
                          +91 XXXX XXXXXX
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-white/10">
                  <h3 
                    className="text-white text-2xl mb-6"
                    style={{
                      fontFamily: '"Cormorant Garamond", serif',
                      fontWeight: 300,
                      letterSpacing: '0.5px'
                    }}
                  >
                    Follow Us
                  </h3>
                  <div className="flex gap-4">
                    <a 
                      href="#" 
                      className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110"
                    >
                      <Instagram className="h-5 w-5 text-white" />
                    </a>
                    <a 
                      href="#" 
                      className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110"
                    >
                      <Youtube className="h-5 w-5 text-white" />
                    </a>
                    <a 
                      href="#" 
                      className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110"
                    >
                      <Linkedin className="h-5 w-5 text-white" />
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
