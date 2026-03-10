import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';

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
    <section id="contact" className="py-16 md:py-20 lg:py-24 bg-[#E9E3DC] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-[#13133F]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#13133F]/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <FadeIn>
            <div className="text-center mb-16 md:mb-20">
              <div className="inline-block mb-6">
                <span 
                  className="text-[#13133F]/60 uppercase tracking-[0.3em] text-xs md:text-sm"
                  style={{ fontFamily: "'Manrope', sans-serif" }}
                >
                  Let's Connect
                </span>
              </div>
              <h2 
                className="text-[#13133F] text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-6"
                style={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontWeight: 300,
                  letterSpacing: '-2px',
                  lineHeight: 0.95
                }}
              >
                Get in Touch
              </h2>
              <p 
                className="text-[#13133F]/70 text-lg md:text-xl max-w-2xl mx-auto"
                style={{ fontFamily: "'Manrope', sans-serif" }}
              >
                Ready to discover your dream villa? We're here to help you every step of the way.
              </p>
            </div>
          </FadeIn>

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Contact Cards - Left Side */}
            <div className="lg:col-span-2 space-y-6">
              <FadeIn delay={0.1}>
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#13133F]/5 group">
                  <div className="w-14 h-14 rounded-full bg-[#13133F]/10 flex items-center justify-center mb-4 group-hover:bg-[#13133F]/20 transition-colors">
                    <MapPin className="h-6 w-6 text-[#13133F]" />
                  </div>
                  <h3 
                    className="text-2xl text-[#13133F] mb-2"
                    style={{
                      fontFamily: '"Cormorant Garamond", serif',
                      fontWeight: 300
                    }}
                  >
                    Visit Us
                  </h3>
                  <p 
                    className="text-[#13133F]/70 text-base"
                    style={{ fontFamily: "'Manrope', sans-serif" }}
                  >
                    Dhar, Himachal Pradesh<br />
                    India
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#13133F]/5 group">
                  <div className="w-14 h-14 rounded-full bg-[#13133F]/10 flex items-center justify-center mb-4 group-hover:bg-[#13133F]/20 transition-colors">
                    <Mail className="h-6 w-6 text-[#13133F]" />
                  </div>
                  <h3 
                    className="text-2xl text-[#13133F] mb-2"
                    style={{
                      fontFamily: '"Cormorant Garamond", serif',
                      fontWeight: 300
                    }}
                  >
                    Email Us
                  </h3>
                  <a 
                    href="mailto:hello@theviceroyestate.com"
                    className="text-[#13133F]/70 hover:text-[#13133F] transition-colors text-base"
                    style={{ fontFamily: "'Manrope', sans-serif" }}
                  >
                    hello@theviceroyestate.com
                  </a>
                </div>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#13133F]/5 group">
                  <div className="w-14 h-14 rounded-full bg-[#13133F]/10 flex items-center justify-center mb-4 group-hover:bg-[#13133F]/20 transition-colors">
                    <Phone className="h-6 w-6 text-[#13133F]" />
                  </div>
                  <h3 
                    className="text-2xl text-[#13133F] mb-2"
                    style={{
                      fontFamily: '"Cormorant Garamond", serif',
                      fontWeight: 300
                    }}
                  >
                    Call Us
                  </h3>
                  <p 
                    className="text-[#13133F]/70 text-base"
                    style={{ fontFamily: "'Manrope', sans-serif" }}
                  >
                    +91 XXXX XXXXXX
                  </p>
                </div>
              </FadeIn>
            </div>

            {/* Form - Right Side */}
            <div className="lg:col-span-3">
              <FadeIn delay={0.2}>
                <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl border border-[#13133F]/10">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label 
                          className="block text-[#13133F] text-sm mb-2"
                          style={{ fontFamily: "'Manrope', sans-serif" }}
                        >
                          Your Name
                        </label>
                        <Input
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          className="bg-white border-[#13133F]/20 text-[#13133F] placeholder:text-[#13133F]/40 focus:border-[#13133F] focus:ring-[#13133F]/20 h-14 rounded-xl"
                          style={{ fontFamily: "'Manrope', sans-serif" }}
                          required
                        />
                      </div>
                      <div>
                        <label 
                          className="block text-[#13133F] text-sm mb-2"
                          style={{ fontFamily: "'Manrope', sans-serif" }}
                        >
                          Email Address
                        </label>
                        <Input
                          type="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="bg-white border-[#13133F]/20 text-[#13133F] placeholder:text-[#13133F]/40 focus:border-[#13133F] focus:ring-[#13133F]/20 h-14 rounded-xl"
                          style={{ fontFamily: "'Manrope', sans-serif" }}
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label 
                        className="block text-[#13133F] text-sm mb-2"
                        style={{ fontFamily: "'Manrope', sans-serif" }}
                      >
                        Phone Number
                      </label>
                      <Input
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="bg-white border-[#13133F]/20 text-[#13133F] placeholder:text-[#13133F]/40 focus:border-[#13133F] focus:ring-[#13133F]/20 h-14 rounded-xl"
                        style={{ fontFamily: "'Manrope', sans-serif" }}
                      />
                    </div>
                    <div>
                      <label 
                        className="block text-[#13133F] text-sm mb-2"
                        style={{ fontFamily: "'Manrope', sans-serif" }}
                      >
                        Your Message
                      </label>
                      <Textarea
                        placeholder="Tell us about your dream villa..."
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="bg-white border-[#13133F]/20 text-[#13133F] placeholder:text-[#13133F]/40 focus:border-[#13133F] focus:ring-[#13133F]/20 min-h-[180px] rounded-xl resize-none"
                        style={{ fontFamily: "'Manrope', sans-serif" }}
                        required
                      />
                    </div>
                    <Button 
                      type="submit"
                      className="w-full bg-[#13133F] hover:bg-[#13133F]/90 text-white h-14 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 text-base group"
                      style={{ fontFamily: "'Manrope', sans-serif" }}
                    >
                      <span>Send Message</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </form>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
