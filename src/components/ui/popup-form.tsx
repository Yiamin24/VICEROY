import React, { useState } from 'react';
import { X, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

interface PopupFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PopupForm({ isOpen, onClose }: PopupFormProps) {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 animate-in fade-in duration-200">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Form Container */}
      <div className="relative bg-[#E9E3DC] rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-hidden animate-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-[#13133F]/10 hover:bg-[#13133F]/20 flex items-center justify-center transition-colors"
          aria-label="Close form"
        >
          <X className="w-5 h-5 text-[#13133F]" />
        </button>

        {/* Form Content */}
        <div className="p-6 sm:p-8">
          {/* Header */}
          <div className="mb-6">
            <h3 
              className="text-[#13133F] text-3xl sm:text-4xl mb-2"
              style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontWeight: 300,
                letterSpacing: '-1px'
              }}
            >
              Get in Touch
            </h3>
            <p 
              className="text-[#13133F]/70 text-sm"
              style={{ fontFamily: "'Manrope', sans-serif" }}
            >
              We'll get back to you shortly
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="bg-white border-[#13133F]/20 text-[#13133F] placeholder:text-[#13133F]/40 focus:border-[#13133F] focus:ring-[#13133F]/20 h-12 rounded-xl"
                style={{ fontFamily: "'Manrope', sans-serif" }}
                required
              />
            </div>
            
            <div>
              <Input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="bg-white border-[#13133F]/20 text-[#13133F] placeholder:text-[#13133F]/40 focus:border-[#13133F] focus:ring-[#13133F]/20 h-12 rounded-xl"
                style={{ fontFamily: "'Manrope', sans-serif" }}
                required
              />
            </div>
            
            <div>
              <Input
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="bg-white border-[#13133F]/20 text-[#13133F] placeholder:text-[#13133F]/40 focus:border-[#13133F] focus:ring-[#13133F]/20 h-12 rounded-xl"
                style={{ fontFamily: "'Manrope', sans-serif" }}
              />
            </div>
            
            <div>
              <Textarea
                placeholder="Your Message (Optional)"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="bg-white border-[#13133F]/20 text-[#13133F] placeholder:text-[#13133F]/40 focus:border-[#13133F] focus:ring-[#13133F]/20 min-h-[100px] rounded-xl resize-none"
                style={{ fontFamily: "'Manrope', sans-serif" }}
              />
            </div>
            
            <Button 
              type="submit"
              className="w-full bg-[#13133F] hover:bg-[#13133F]/90 text-white h-12 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 text-sm group"
              style={{ fontFamily: "'Manrope', sans-serif" }}
            >
              <span>Send Message</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
