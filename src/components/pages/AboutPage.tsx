import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Image } from '@/components/ui/image';
import { Mountain, Heart, Users, Award, ChevronRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://static.wixstatic.com/media/cef78c_a9e17305309647f6ae46f98541355015~mv2.png?originWidth=1152&originHeight=576)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary/60" />
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <AnimatedElement>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              About The Viceroy Estate
            </h1>
          </AnimatedElement>
          <AnimatedElement className="delay-100">
            <p className="text-lg md:text-xl font-paragraph max-w-3xl mx-auto">
              A sanctuary of refined living in the heart of the Himalayas
            </p>
          </AnimatedElement>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedElement>
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full">
                  <Heart className="h-5 w-5 text-accent" />
                  <span className="text-sm font-paragraph text-accent uppercase tracking-wide">Our Story</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">
                  A Vision of Timeless Elegance
                </h2>
                <p className="text-lg font-paragraph text-foreground/80 leading-relaxed">
                  Quietly commanding its place atop a storied ridge in the Shivalik Hills, The Viceroy Estate is an intimate collection of 14 handcrafted villas — each an enduring statement of heritage and refinement.
                </p>
                <p className="text-lg font-paragraph text-foreground/80 leading-relaxed">
                  Nestled amidst the tranquil Shivalik Hills, The Viceroy Estate is an exclusive, gated residential community in Dhar, Himachal Pradesh, offering impeccably designed luxury villas that blend modern comforts with natural beauty.
                </p>
              </div>
            </AnimatedElement>
            <AnimatedElement>
              <div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://static.wixstatic.com/media/cef78c_1578b78ad85147a997fdbb2cf7813640~mv2.png?originWidth=576&originHeight=448"
                  alt="The Viceroy Estate"
                  className="w-full h-full object-cover"
                  width={600}
                />
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Location Details */}
      <section className="py-20 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedElement>
              <div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://static.wixstatic.com/media/cef78c_045ac7de9c2149edb74450be5b7d6a89~mv2.png?originWidth=576&originHeight=448"
                  alt="Location"
                  className="w-full h-full object-cover"
                  width={600}
                />
              </div>
            </AnimatedElement>
            <AnimatedElement>
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                  <Mountain className="h-5 w-5 text-accent" />
                  <span className="text-sm font-paragraph text-primary uppercase tracking-wide">Location</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">
                  Perched at 6000 Feet Above Sea Level
                </h2>
                <p className="text-lg font-paragraph text-foreground/80 leading-relaxed">
                  A scenic 30-minute drive from Solan City, and located in the Hamlet of Dhar, The Viceroy Estate is a rare escapade where the hills touch the sky, and modern comforts meet the untouched beauty of the Himalayan landscape.
                </p>
                <p className="text-lg font-paragraph text-foreground/80 leading-relaxed">
                  The estate offers panoramic vistas of the surrounding valleys and mountain peaks, providing residents with breathtaking views that change with every season.
                </p>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/10">
        <div className="container mx-auto px-4">
          <AnimatedElement>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
                Our Core Values
              </h2>
              <p className="text-lg font-paragraph text-foreground/80 max-w-2xl mx-auto">
                The principles that guide everything we do at The Viceroy Estate
              </p>
            </div>
          </AnimatedElement>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedElement>
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6">
                  <Heart className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-heading font-bold text-primary mb-4">
                  Mindful Living
                </h3>
                <p className="text-sm font-paragraph text-foreground/70 leading-relaxed">
                  We champion a philosophy of mindful, rejuvenating living where clean mountain air, fresh produce, and nature&apos;s tranquillity intertwine effortlessly with modern design sensibilities.
                </p>
              </div>
            </AnimatedElement>

            <AnimatedElement className="delay-100">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6">
                  <Award className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-heading font-bold text-primary mb-4">
                  Heritage & Refinement
                </h3>
                <p className="text-sm font-paragraph text-foreground/70 leading-relaxed">
                  Each villa is an enduring statement of heritage and refinement, blending traditional Himachali architecture with contemporary elegance and timeless design.
                </p>
              </div>
            </AnimatedElement>

            <AnimatedElement className="delay-200">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6">
                  <Users className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-heading font-bold text-primary mb-4">
                  Privacy & Security
                </h3>
                <p className="text-sm font-paragraph text-foreground/70 leading-relaxed">
                  The estate prioritizes privacy and security with 24-hour surveillance, gated community access, and dedicated staff quarters to ensure peace of mind for all residents.
                </p>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section className="py-20 bg-secondary/5">
        <div className="container mx-auto px-4">
          <AnimatedElement>
            <div className="max-w-4xl mx-auto text-center space-y-6 mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">
                Architectural Excellence
              </h2>
              <p className="text-lg font-paragraph text-foreground/80 leading-relaxed">
                Designed by the globally acclaimed Habitat Architects, the villas at The Viceroy Estate present a contemporary take on <em>&apos;Kath Kuni&apos;</em>—a timeless Himachali architectural tradition.
              </p>
            </div>
          </AnimatedElement>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedElement>
              <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300">
                <div className="h-48 rounded-xl overflow-hidden mb-4">
                  <Image
                    src="https://static.wixstatic.com/media/cef78c_0065daf028c0453591f56b1bf9efbd75~mv2.png?originWidth=256&originHeight=256"
                    alt="Habitat Architects"
                    className="w-full h-full object-cover"
                    width={300}
                  />
                </div>
                <h3 className="text-xl font-heading font-bold text-primary mb-2">
                  Habitat Architects
                </h3>
                <p className="text-sm font-paragraph text-foreground/70">
                  Globally acclaimed architectural firm bringing contemporary design to traditional Himachali architecture.
                </p>
              </div>
            </AnimatedElement>

            <AnimatedElement className="delay-100">
              <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300">
                <div className="h-48 rounded-xl overflow-hidden mb-4">
                  <Image
                    src="https://static.wixstatic.com/media/cef78c_2004de75b1e24370b2ad5df90757fb72~mv2.png?originWidth=256&originHeight=256"
                    alt="Oracles Landscape"
                    className="w-full h-full object-cover"
                    width={300}
                  />
                </div>
                <h3 className="text-xl font-heading font-bold text-primary mb-2">
                  Oracles Landscape
                </h3>
                <p className="text-sm font-paragraph text-foreground/70">
                  Esteemed New Delhi firm masterfully planning and landscaping the estate grounds.
                </p>
              </div>
            </AnimatedElement>

            <AnimatedElement className="delay-200">
              <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300">
                <div className="h-48 rounded-xl overflow-hidden mb-4">
                  <Image
                    src="https://static.wixstatic.com/media/cef78c_e9c13a704d2a4d2ca87cdc49b0817c5f~mv2.png?originWidth=256&originHeight=256"
                    alt="Meta Homes"
                    className="w-full h-full object-cover"
                    width={300}
                  />
                </div>
                <h3 className="text-xl font-heading font-bold text-primary mb-2">
                  Meta Homes
                </h3>
                <p className="text-sm font-paragraph text-foreground/70">
                  Artfully curating interiors with refined detail and understated elegance in every space.
                </p>
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
                Experience The Viceroy Estate
              </h2>
              <p className="text-lg font-paragraph text-white/90 leading-relaxed">
                Discover a lifestyle where luxury meets nature, and every day is an invitation to slow down and reconnect.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/villas">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
                    Explore Villas
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                    Contact Us
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
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
        .delay-100 { transition-delay: 100ms; }
        .delay-200 { transition-delay: 200ms; }
      `}</style>
      {children}
    </div>
  );
};
