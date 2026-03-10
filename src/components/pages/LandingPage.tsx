import React, { useEffect, useState } from 'react';
import { BaseCrudService } from '@/integrations';
import { Villas, Amenities } from '@/entities';

// Import all section components
import Navigation from '@/components/sections/Navigation';
import HeroSection from '@/components/sections/HeroSection';
import StorySection from '@/components/sections/StorySection';
import VillasSection from '@/components/sections/VillasSection';
import AmenitiesSection from '@/components/sections/AmenitiesSection';
import LocationSection from '@/components/sections/LocationSection';
import LifestyleSection from '@/components/sections/LifestyleSection';
import GallerySection from '@/components/sections/GallerySection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/sections/Footer';

export default function LandingPage() {
  const [villas, setVillas] = useState<Villas[]>([]);
  const [amenities, setAmenities] = useState<Amenities[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      try {
        const [villasResult, amenitiesResult] = await Promise.all([
          BaseCrudService.getAll<Villas>('villas', {}, { limit: 3 }),
          BaseCrudService.getAll<Amenities>('amenities', {}, { limit: 6 }),
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
      <HeroSection onExploreClick={() => scrollToSection('villas')} />
      <StorySection />
      <VillasSection villas={villas} isLoading={isLoading} />
      <AmenitiesSection amenities={amenities} isLoading={isLoading} />
      <LocationSection />
      <LifestyleSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </div>
  );
}
