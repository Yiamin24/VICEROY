import { useEffect, useState, useRef } from 'react';
import { BaseCrudService } from '@/integrations';
import { Amenities } from '@/entities';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import { Image } from '@/components/ui/image';
import { Sparkles, Home as HomeIcon, Wifi, Shield, Zap } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AmenitiesPage() {
  const [amenities, setAmenities] = useState<Amenities[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadAmenities();
  }, []);

  const loadAmenities = async () => {
    setIsLoading(true);
    try {
      const result = await BaseCrudService.getAll<Amenities>('amenities');
      setAmenities(result.items);
    } catch (error) {
      console.error('Error loading amenities:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://static.wixstatic.com/media/cef78c_8cebd193614a45c68f8594c346a7dc02~mv2.png?originWidth=1152&originHeight=576)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary/60" />
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <AnimatedElement>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              Amenities & Services
            </h1>
          </AnimatedElement>
          <AnimatedElement className="delay-100">
            <p className="text-lg md:text-xl font-paragraph max-w-3xl mx-auto">
              Gateway to comfort and exploration with world-class facilities
            </p>
          </AnimatedElement>
        </div>
      </section>

      {/* Amenities Grid */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="min-h-[500px]">
            {isLoading ? null : amenities.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {amenities.map((amenity, index) => (
                  <AnimatedElement key={amenity._id} className={`delay-${index * 50}`}>
                    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
                      {amenity.amenityImage && (
                        <div className="h-56 overflow-hidden">
                          <Image
                            src={amenity.amenityImage}
                            alt={amenity.amenityName || 'Amenity'}
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                            width={400}
                          />
                        </div>
                      )}
                      <div className="p-6">
                        {amenity.category && (
                          <span className="inline-block bg-accent/10 text-accent text-xs font-paragraph px-3 py-1 rounded-full mb-3">
                            {amenity.category}
                          </span>
                        )}
                        <h3 className="text-xl font-heading font-bold text-primary mb-3">
                          {amenity.amenityName}
                        </h3>
                        <p className="text-sm font-paragraph text-foreground/70 mb-4">
                          {amenity.description}
                        </p>
                        {amenity.location && (
                          <p className="text-xs font-paragraph text-foreground/50">
                            Location: {amenity.location}
                          </p>
                        )}
                        {amenity.bookingRequired && (
                          <p className="text-xs font-paragraph text-accent mt-2">
                            Booking Required
                          </p>
                        )}
                      </div>
                    </div>
                  </AnimatedElement>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <Sparkles className="h-20 w-20 text-foreground/20 mx-auto mb-6" />
                <h3 className="text-2xl font-heading font-bold text-primary mb-2">No Amenities Listed</h3>
                <p className="text-foreground/60 font-paragraph">Amenities information will be available soon.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Interior & Living Features */}
      <section className="py-20 bg-secondary/5">
        <div className="container mx-auto px-4">
          <AnimatedElement>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full mb-4">
                <HomeIcon className="h-5 w-5 text-accent" />
                <span className="text-sm font-paragraph text-accent uppercase tracking-wide">Interior & Living</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
                Premium Living Features
              </h2>
              <p className="text-lg font-paragraph text-foreground/80 max-w-2xl mx-auto">
                Every detail designed for your comfort and luxury
              </p>
            </div>
          </AnimatedElement>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Fully Furnished Interiors',
              'Heating & Air Conditioning',
              'Private Jacuzzi & Roof Deck',
              'Private Wine Cellar',
              'Fireplace',
              'Gym & Wellness Services',
              'Heated Floors, Custom Walls & Ceilings',
              'Modular Kitchens',
              'White Goods incl. Electricals',
              'Refined Linens, Crockery & Cutlery',
              'Bespoke Soft Furnishings',
              'Private Verandahs & Outdoor Patios',
              'Integrated Audio Visual Systems',
              'Walk-in Closets',
            ].map((feature, index) => (
              <AnimatedElement key={index} className={`delay-${index * 30}`}>
                <div className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="flex-shrink-0 w-2 h-2 bg-accent rounded-full mt-2" />
                  <p className="text-sm font-paragraph text-foreground/80">{feature}</p>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* Exclusive Services */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/10">
        <div className="container mx-auto px-4">
          <AnimatedElement>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
                <Sparkles className="h-5 w-5 text-accent" />
                <span className="text-sm font-paragraph text-primary uppercase tracking-wide">Exclusive Services</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
                Concierge & Estate Services
              </h2>
              <p className="text-lg font-paragraph text-foreground/80 max-w-2xl mx-auto">
                Dedicated services to ensure your comfort and peace of mind
              </p>
            </div>
          </AnimatedElement>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatedElement>
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6">
                  <HomeIcon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-heading font-bold text-primary mb-3">
                  Clubhouse & Infinity Pool
                </h3>
                <p className="text-sm font-paragraph text-foreground/70">
                  Exclusive clubhouse facilities with stunning infinity pool overlooking the valleys
                </p>
              </div>
            </AnimatedElement>

            <AnimatedElement className="delay-100">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6">
                  <Shield className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-heading font-bold text-primary mb-3">
                  24/7 Security & Surveillance
                </h3>
                <p className="text-sm font-paragraph text-foreground/70">
                  Gated community with round-the-clock security and surveillance for your peace of mind
                </p>
              </div>
            </AnimatedElement>

            <AnimatedElement className="delay-200">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6">
                  <Zap className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-heading font-bold text-primary mb-3">
                  24 Hours Electricity Backup
                </h3>
                <p className="text-sm font-paragraph text-foreground/70">
                  Uninterrupted power supply with full backup systems
                </p>
              </div>
            </AnimatedElement>

            <AnimatedElement>
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6">
                  <Wifi className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-heading font-bold text-primary mb-3">
                  High-Speed Internet
                </h3>
                <p className="text-sm font-paragraph text-foreground/70">
                  Wi-Fi and wired internet connectivity throughout the estate
                </p>
              </div>
            </AnimatedElement>

            <AnimatedElement className="delay-100">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6">
                  <Sparkles className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-heading font-bold text-primary mb-3">
                  On-Call Services
                </h3>
                <p className="text-sm font-paragraph text-foreground/70">
                  Chef, masseuse, and medical services available on call
                </p>
              </div>
            </AnimatedElement>

            <AnimatedElement className="delay-200">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6">
                  <HomeIcon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-heading font-bold text-primary mb-3">
                  Staff Quarters
                </h3>
                <p className="text-sm font-paragraph text-foreground/70">
                  Dedicated staff quarters ensuring prompt service
                </p>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

// Animated Element Component
const AnimatedElement: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible');
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`opacity-0 translate-y-8 transition-all duration-700 ${className}`}
      style={{
        transitionProperty: 'opacity, transform',
      }}
    >
      <style>{`
        .is-visible {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        .delay-30 { transition-delay: 30ms; }
        .delay-50 { transition-delay: 50ms; }
        .delay-100 { transition-delay: 100ms; }
        .delay-150 { transition-delay: 150ms; }
        .delay-200 { transition-delay: 200ms; }
      `}</style>
      {children}
    </div>
  );
};
