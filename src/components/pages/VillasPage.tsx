import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { BaseCrudService } from '@/integrations';
import { Villas } from '@/entities';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import { Button } from '@/components/ui/button';
import { Image } from '@/components/ui/image';
import { Home, ChevronRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function VillasPage() {
  const [villas, setVillas] = useState<Villas[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadVillas();
  }, []);

  const loadVillas = async () => {
    setIsLoading(true);
    try {
      const result = await BaseCrudService.getAll<Villas>('villas');
      setVillas(result.items);
    } catch (error) {
      console.error('Error loading villas:', error);
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
            backgroundImage: 'url(https://static.wixstatic.com/media/cef78c_8f731ea7e9914b17ad4ec0371bc22a23~mv2.png?originWidth=1152&originHeight=576)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary/60" />
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <AnimatedElement>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              Our Villas
            </h1>
          </AnimatedElement>
          <AnimatedElement className="delay-100">
            <p className="text-lg md:text-xl font-paragraph max-w-3xl mx-auto">
              14 handcrafted villas, each an enduring statement of heritage and refinement
            </p>
          </AnimatedElement>
        </div>
      </section>

      {/* Villas Grid */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="min-h-[500px]">
            {isLoading ? null : villas.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {villas.map((villa, index) => (
                  <AnimatedElement key={villa._id} className={`delay-${index * 50}`}>
                    <Link to={`/villas/${villa._id}`}>
                      <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
                        <div className="relative h-72 overflow-hidden">
                          {villa.mainImage && (
                            <Image
                              src={villa.mainImage}
                              alt={villa.villaName || 'Villa'}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                              width={400}
                            />
                          )}
                          <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent" />
                          <div className="absolute bottom-6 left-6 text-white">
                            <h3 className="text-2xl font-heading font-bold">{villa.villaName}</h3>
                          </div>
                        </div>
                        <div className="p-6">
                          <p className="text-sm font-paragraph text-foreground/70 line-clamp-3 mb-4">
                            {villa.description}
                          </p>
                          {villa.specifications && (
                            <p className="text-xs font-paragraph text-foreground/50 mb-4">
                              {villa.specifications}
                            </p>
                          )}
                          <div className="flex items-center text-accent font-paragraph text-sm font-semibold">
                            View Details
                            <ChevronRight className="ml-1 h-4 w-4" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </AnimatedElement>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <Home className="h-20 w-20 text-foreground/20 mx-auto mb-6" />
                <h3 className="text-2xl font-heading font-bold text-primary mb-2">No Villas Available</h3>
                <p className="text-foreground/60 font-paragraph">Please check back later for available properties.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Villa Types Section */}
      <section className="py-20 bg-secondary/5">
        <div className="container mx-auto px-4">
          <AnimatedElement>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
                Three Distinct Collections
              </h2>
              <p className="text-lg font-paragraph text-foreground/80 max-w-2xl mx-auto">
                Each villa collection offers unique architectural features and luxurious amenities
              </p>
            </div>
          </AnimatedElement>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedElement>
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                <div className="text-accent text-4xl font-heading font-bold mb-4">01</div>
                <h3 className="text-2xl font-heading font-bold text-primary mb-4">
                  Monarch Villas
                </h3>
                <p className="text-sm font-paragraph text-foreground/70 mb-4">
                  At the zenith of The Viceroy Estate stand the regal Monarch Villas, exuding grandeur and opulence in every detail.
                </p>
                <div className="space-y-2 text-xs font-paragraph text-foreground/60">
                  <p>Ground Floor: 2238.75 sq.ft</p>
                  <p>First Floor: 2043.33 sq.ft</p>
                  <p>Second Floor: 1528.70 sq.ft</p>
                  <p className="font-semibold text-primary">Total: 5810.79 sq.ft</p>
                </div>
              </div>
            </AnimatedElement>

            <AnimatedElement className="delay-100">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                <div className="text-accent text-4xl font-heading font-bold mb-4">02</div>
                <h3 className="text-2xl font-heading font-bold text-primary mb-4">
                  Papillon Villas
                </h3>
                <p className="text-sm font-paragraph text-foreground/70 mb-4">
                  Welcome to the Papillon Villas, where timeless elegance meets modern comfort in an enchanting setting.
                </p>
                <div className="space-y-2 text-xs font-paragraph text-foreground/60">
                  <p>Ground Floor: 2307.26 sq.ft</p>
                  <p>First Floor: 2133.66 sq.ft</p>
                  <p>Second Floor: 1609.33 sq.ft</p>
                  <p className="font-semibold text-primary">Total: 6260.04 sq.ft</p>
                </div>
              </div>
            </AnimatedElement>

            <AnimatedElement className="delay-200">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                <div className="text-accent text-4xl font-heading font-bold mb-4">03</div>
                <h3 className="text-2xl font-heading font-bold text-primary mb-4">
                  Mariposa Villas
                </h3>
                <p className="text-sm font-paragraph text-foreground/70 mb-4">
                  Nestled among the tranquil surroundings of The Viceroy Estate, the Mariposa Villas exude a sense of serenity & sophistication.
                </p>
                <div className="space-y-2 text-xs font-paragraph text-foreground/60">
                  <p>Ground Floor: 2217.28 sq.ft</p>
                  <p>First Floor: 2223.95 sq.ft</p>
                  <p>Second Floor: 1625.79 sq.ft</p>
                  <p className="font-semibold text-primary">Total: 6276.81 sq.ft</p>
                </div>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-primary to-primary/90 text-white">
        <div className="container mx-auto px-4">
          <AnimatedElement>
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-5xl font-heading font-bold">
                Find Your Perfect Villa
              </h2>
              <p className="text-lg font-paragraph text-white/90 leading-relaxed">
                Schedule a visit to experience the luxury and tranquility of The Viceroy Estate firsthand.
              </p>
              <Link to="/contact">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
                  Schedule a Visit
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </AnimatedElement>
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
        .delay-50 { transition-delay: 50ms; }
        .delay-100 { transition-delay: 100ms; }
        .delay-150 { transition-delay: 150ms; }
        .delay-200 { transition-delay: 200ms; }
      `}</style>
      {children}
    </div>
  );
};
