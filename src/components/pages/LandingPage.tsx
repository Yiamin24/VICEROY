import React, { useEffect, useState } from 'react';
import { MessageSquare } from 'lucide-react';
import { BaseCrudService } from '@/integrations';
import { Villas, Amenities } from '@/entities';

// Import all section components
import Navigation from '@/components/sections/Navigation';
import HeroSection from '@/components/sections/HeroSection';
import StorySection from '@/components/sections/StorySection';
import LuxurySection from '@/components/sections/LuxurySection';
import VillasSection from '@/components/sections/VillasSection';
import AmenitiesSection from '@/components/sections/AmenitiesSection';
import LocationSection from '@/components/sections/LocationSection';
import GallerySection from '@/components/sections/GallerySection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/sections/Footer';
import PopupForm from '@/components/ui/popup-form';

export default function LandingPage() {
  const [villas, setVillas] = useState<Villas[]>([]);
  const [amenities, setAmenities] = useState<Amenities[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isFormOpen, setIsFormOpen] = useState(false);

  // Open popup form on page load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFormOpen(true);
    }, 2000); // Open after 2 seconds

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      try {
        const [villasResult, amenitiesResult] = await Promise.all([
          BaseCrudService.getAll<Villas>('villas', {}, { limit: 3 }),
          BaseCrudService.getAll<Amenities>('amenities', {}, { limit: 50 }),
        ]);
        setVillas(villasResult.items || []);
        setAmenities(amenitiesResult.items || []);
      } catch (error) {
        console.error('Error loading data:', error);
      } finally {
        setIsLoading(false);
      }
    };
    loadData();
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-paragraph">
      <Navigation onNavigate={scrollToSection} />
      <HeroSection />
      <StorySection />
      <LuxurySection />
      <VillasSection villas={villas} isLoading={isLoading} onOpenForm={() => setIsFormOpen(true)} />
      <AmenitiesSection amenities={amenities} isLoading={isLoading} />
      <LocationSection />
      <GallerySection />
      <ContactSection />
      <Footer />
      
      {/* Floating Contact Button */}
      <button
        onClick={() => setIsFormOpen(true)}
        className="fixed bottom-6 right-6 z-[9998] w-14 h-14 bg-[#13133F] hover:bg-[#13133F]/90 text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 group"
        aria-label="Open contact form"
      >
        <MessageSquare className="w-6 h-6 group-hover:scale-110 transition-transform" />
      </button>

      {/* Popup Form */}
      <PopupForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </div>
  );
}
