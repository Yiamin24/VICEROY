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
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Form Container */}
      <div className="relative bg-[#E9E3DC] rounded-xl sm:rounded-2xl shadow-2xl w-full max-w-[95vw] sm:max-w-md max-h-[95vh] overflow-y-auto animate-in zoom-in-95 duration-200 scrollbar-hide">
        <style jsx>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 w-8 h-8 rounded-full bg-[#13133F]/10 hover:bg-[#13133F]/20 flex items-center justify-center transition-colors"
          aria-label="Close form"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5 text-[#13133F]" />
        </button>

        {/* Form Content */}
        <div className="p-5 sm:p-6 md:p-8">
          {/* Header */}
          <div className="mb-5 sm:mb-6">
            <h3 
              className="text-[#13133F] text-2xl sm:text-3xl md:text-4xl mb-2"
              style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontWeight: 300,
                letterSpacing: '-1px'
              }}
            >
              Get in Touch
            </h3>
            <p 
              className="text-[#13133F]/70 text-xs sm:text-sm"
              style={{ fontFamily: "'Manrope', sans-serif" }}
            >
              We'll get back to you shortly
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
            <div>
              <Input
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="bg-white border-[#13133F]/20 text-[#13133F] placeholder:text-[#13133F]/40 focus:border-[#13133F] focus:ring-[#13133F]/20 h-11 sm:h-12 rounded-lg sm:rounded-xl text-sm sm:text-base"
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
                className="bg-white border-[#13133F]/20 text-[#13133F] placeholder:text-[#13133F]/40 focus:border-[#13133F] focus:ring-[#13133F]/20 h-11 sm:h-12 rounded-lg sm:rounded-xl text-sm sm:text-base"
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
                className="bg-white border-[#13133F]/20 text-[#13133F] placeholder:text-[#13133F]/40 focus:border-[#13133F] focus:ring-[#13133F]/20 h-11 sm:h-12 rounded-lg sm:rounded-xl text-sm sm:text-base"
                style={{ fontFamily: "'Manrope', sans-serif" }}
              />
            </div>
            
            <div>
              <Textarea
                placeholder="Your Message (Optional)"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="bg-white border-[#13133F]/20 text-[#13133F] placeholder:text-[#13133F]/40 focus:border-[#13133F] focus:ring-[#13133F]/20 min-h-[80px] sm:min-h-[100px] rounded-lg sm:rounded-xl resize-none text-sm sm:text-base"
                style={{ fontFamily: "'Manrope', sans-serif" }}
              />
            </div>
            
            <Button 
              type="submit"
              className="w-full bg-[#13133F] hover:bg-[#13133F]/90 text-white h-11 sm:h-12 rounded-lg sm:rounded-xl transition-all duration-300 flex items-center justify-center gap-2 text-sm group"
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
