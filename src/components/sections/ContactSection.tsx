import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Instagram, Youtube, Linkedin, MessageCircle } from 'lucide-react';

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
    <section id="contact" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-heading text-primary mb-4">Get in Touch</h2>
              <p className="text-lg text-primary/70">We'd love to hear from you</p>
            </div>
          </FadeIn>

          <div className="grid lg:grid-cols-2 gap-12">
            <FadeIn>
              <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="bg-white border-accent/20"
                  required
                />
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="bg-white border-accent/20"
                  required
                />
                <Input
                  type="tel"
                  placeholder="Your Phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="bg-white border-accent/20"
                />
                <Textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="bg-white border-accent/20 min-h-[150px]"
                  required
                />
                <Button 
                  type="submit"
                  className="w-full bg-accent hover:bg-accent/90 text-white py-6"
                >
                  Send Message
                </Button>
              </form>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-heading text-primary mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <MapPin className="h-5 w-5 text-accent mt-1" />
                      <div>
                        <p className="font-medium text-primary">Location</p>
                        <p className="text-primary/70">Dhar, Himachal Pradesh</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Mail className="h-5 w-5 text-accent mt-1" />
                      <div>
                        <p className="font-medium text-primary">Email</p>
                        <p className="text-primary/70">hello@theviceroyestate.com</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Phone className="h-5 w-5 text-accent mt-1" />
                      <div>
                        <p className="font-medium text-primary">Phone</p>
                        <p className="text-primary/70">+91 XXXX XXXXXX</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-heading text-primary mb-4">Follow Us</h3>
                  <div className="flex gap-4">
                    <a href="#" className="text-accent hover:text-accent/80 transition-colors">
                      <Instagram className="h-6 w-6" />
                    </a>
                    <a href="#" className="text-accent hover:text-accent/80 transition-colors">
                      <Youtube className="h-6 w-6" />
                    </a>
                    <a href="#" className="text-accent hover:text-accent/80 transition-colors">
                      <Linkedin className="h-6 w-6" />
                    </a>
                    <a href="#" className="text-accent hover:text-accent/80 transition-colors">
                      <MessageCircle className="h-6 w-6" />
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
