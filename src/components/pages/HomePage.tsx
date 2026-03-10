// WI-HPI
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { BaseCrudService } from '@/integrations';
import { Villas, Amenities } from '@/entities';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import { Button } from '@/components/ui/button';
import { Image } from '@/components/ui/image';
import { ChevronRight, MapPin, Wind, Leaf, Shield, Wifi, Coffee, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// --- Animation Variants ---
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const revealLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const revealRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

// --- Reusable Animation Component ---
const FadeIn: React.FC<{ children: React.ReactNode; className?: string; delay?: number; variant?: any }> = ({ 
  children, className = "", delay = 0, variant = fadeInUp 
}) => (
  <motion.div
    variants={variant}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    transition={{ delay }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function HomePage() {
  const navigate = useNavigate();
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

  return (
    <div className="min-h-screen bg-background text-foreground font-paragraph selection:bg-primary selection:text-white overflow-x-hidden">
      <Header />

      {/* HERO SECTION */}
      <section className="relative h-[90vh] min-h-[700px] w-full flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(https://theviceroyestate.com/wp-content/uploads/2025/08/TVE-nature-shot.jpg)',
            }}
          />
          {/* Sophisticated gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-primary/20 to-primary/80" />
        </motion.div>

        <div className="relative z-10 container mx-auto px-4 md:px-8 flex flex-col items-center text-center mt-20">
          <FadeIn delay={0.2}>
            <span className="block text-white/80 uppercase tracking-[0.3em] text-sm md:text-base mb-6 font-medium">
              Welcome to The Viceroy Estate
            </span>
          </FadeIn>
          
          <FadeIn delay={0.4}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-light text-white leading-[1.1] tracking-tight max-w-5xl mx-auto mb-8">
              Luxury living in the <br className="hidden md:block" />
              <span className="italic font-serif">lap of Nature</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.6}>
            <Button 
              onClick={() => navigate('/villas')}
              className="bg-transparent border border-white text-white hover:bg-white hover:text-primary rounded-none px-8 py-6 text-sm tracking-widest uppercase transition-all duration-300 group"
            >
              Discover the Estate
              <ArrowRight className="ml-3 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </FadeIn>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/70"
        >
          <span className="text-xs uppercase tracking-widest mb-2">Scroll</span>
          <div className="w-[1px] h-12 bg-white/30 overflow-hidden">
            <motion.div 
              animate={{ y: [0, 48, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="w-full h-1/2 bg-white"
            />
          </div>
        </motion.div>
      </section>

      {/* INTRO SECTION */}
      <section className="py-24 md:py-32 bg-background relative">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <Image src="https://theviceroyestate.com/wp-content/uploads/2025/06/butterfly-blue-draw.png" alt="Decorative Butterfly" className="w-12 h-12 mx-auto mb-8 opacity-80" />
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-2xl md:text-4xl font-heading font-light text-primary leading-relaxed tracking-wide">
                Quietly commanding its place atop a storied ridge in the Shivalik Hills, The Viceroy Estate is an intimate collection of 14 handcrafted villas — each an enduring statement of heritage and refinement.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* LOCATION SECTION */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn variant={revealLeft} className="order-2 lg:order-1">
              <div className="space-y-8 max-w-lg">
                <div className="flex items-center gap-3 text-accent">
                  <MapPin className="h-5 w-5" />
                  <span className="text-sm uppercase tracking-widest font-medium">Dhar, Himachal Pradesh</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-heading text-primary leading-tight">
                  A scenic 30-minute drive from Solan City
                </h2>
                <p className="text-lg text-foreground/70 leading-relaxed">
                  Located in the Hamlet of Dhar, The Viceroy Estate is a rare escapade where the hills touch the sky, and modern comforts meet the untouched beauty of the Himalayan landscape.
                </p>
                <p className="text-lg text-foreground/70 leading-relaxed">
                  Perched on a hilltop at an elevation of 6000 feet above sea level, the estate offers panoramic vistas of the surrounding valleys and mountain peaks.
                </p>
                <Button 
                  variant="link" 
                  onClick={() => navigate('/about')}
                  className="text-primary p-0 h-auto text-base uppercase tracking-widest font-medium hover:text-accent transition-colors group"
                >
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </FadeIn>
            
            <FadeIn variant={revealRight} className="order-1 lg:order-2 relative">
              <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:ml-auto">
                <div className="absolute inset-0 bg-primary/5 translate-x-4 translate-y-4 rounded-sm" />
                <Image
                  src="https://theviceroyestate.com/wp-content/uploads/2025/05/The-Viceroy-Estate-01.jpg"
                  alt="The Viceroy Estate Location"
                  className="w-full h-full object-cover relative z-10 rounded-sm shadow-xl"
                />
                {/* Decorative element */}
                <div className="absolute -bottom-10 -left-10 z-20 hidden md:block">
                  <Image src="https://theviceroyestate.com/wp-content/uploads/2025/06/mountains-draw.png" alt="Mountains" className="w-32 opacity-50" />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY SECTION */}
      <section className="py-32 bg-primary text-white relative overflow-hidden">
        {/* Subtle background texture/pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at center, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <span className="block text-accent uppercase tracking-[0.2em] text-sm mb-4">An Invitation To</span>
              <h2 className="text-4xl md:text-6xl font-heading font-light mb-10">
                Slow Down & Reconnect
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-lg md:text-xl text-white/80 leading-relaxed font-light">
                Beyond their walls, these villas embrace a philosophy that champions mindful, rejuvenating living. In an era where urban landscapes grow denser, and life moves unrelentingly, The Viceroy Estate offers a rare alternative to slow living — one where clean mountain air, fresh produce, and nature's tranquillity intertwine effortlessly with modern design sensibilities.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* VILLAS COLLECTION SECTION */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <FadeIn className="text-center mb-20">
            <span className="text-accent uppercase tracking-widest text-sm font-medium mb-4 block">The Collection</span>
            <h2 className="text-4xl md:text-5xl font-heading text-primary">Our Signature Villas</h2>
          </FadeIn>

          <div className="min-h-[400px]">
            {isLoading ? (
              <div className="flex justify-center items-center h-64">
                <LoadingSpinner className="text-primary w-8 h-8" />
              </div>
            ) : villas.length > 0 ? (
              <div className="space-y-24 md:space-y-32">
                {villas.map((villa, index) => (
                  <FadeIn key={villa._id} delay={0.1}>
                    <div className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center`}>
                      
                      {/* Image Side */}
                      <div className="w-full lg:w-3/5 relative group cursor-pointer" onClick={() => navigate(`/villas/${villa._id}`)}>
                        <div className="overflow-hidden rounded-sm aspect-[16/10] relative">
                          {villa.mainImage ? (
                            <Image
                              src={villa.mainImage}
                              alt={villa.villaName || 'Villa'}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                          ) : (
                            <div className="w-full h-full bg-muted flex items-center justify-center">
                              <span className="text-muted-foreground">No image available</span>
                            </div>
                          )}
                          <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                        </div>
                        {/* Number indicator */}
                        <div className="absolute -top-6 -left-6 md:-top-10 md:-left-10 text-6xl md:text-8xl font-heading font-bold text-primary/10 z-0 pointer-events-none">
                          0{index + 1}
                        </div>
                      </div>

                      {/* Content Side */}
                      <div className="w-full lg:w-2/5 space-y-6 relative z-10">
                        <div className="text-accent font-heading text-xl">0{index + 1}</div>
                        <h3 className="text-3xl md:text-4xl font-heading text-primary">{villa.villaName}</h3>
                        <p className="text-foreground/70 leading-relaxed">
                          {villa.description || "Experience timeless elegance and modern comfort in an enchanting setting."}
                        </p>
                        
                        {/* Mock Specs based on markdown style */}
                        <div className="py-6 border-y border-primary/10 my-6 space-y-3">
                          <div className="flex justify-between text-sm">
                            <span className="text-foreground/60 uppercase tracking-wider">Ground Floor</span>
                            <span className="font-medium text-primary">2238 sq.ft</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-foreground/60 uppercase tracking-wider">First Floor</span>
                            <span className="font-medium text-primary">2043 sq.ft</span>
                          </div>
                          <div className="flex justify-between text-sm pt-3 border-t border-primary/5">
                            <span className="text-primary uppercase tracking-wider font-medium">Total Area</span>
                            <span className="font-bold text-primary">5810 sq.ft</span>
                          </div>
                        </div>

                        <Button 
                          variant="outline"
                          onClick={() => navigate(`/villas/${villa._id}`)}
                          className="border-primary text-primary hover:bg-primary hover:text-white rounded-none px-8 py-6 uppercase tracking-widest text-xs transition-all duration-300"
                        >
                          Explore Villa
                        </Button>
                      </div>

                    </div>
                  </FadeIn>
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-white rounded-sm border border-primary/10">
                <p className="text-foreground/60 font-paragraph">The collection is currently being curated.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ARCHITECTURE SECTION */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn variant={revealLeft}>
              <div className="relative aspect-square w-full max-w-md mx-auto">
                <Image
                  src="https://theviceroyestate.com/wp-content/uploads/2025/05/The-Viceroy-Estate-07.jpg"
                  alt="Architectural Details"
                  className="w-full h-full object-cover rounded-sm"
                />
                <div className="absolute -right-12 top-1/2 -translate-y-1/2 hidden lg:block">
                  <Image src="https://theviceroyestate.com/wp-content/uploads/2025/06/leaves-draw.png" alt="Leaves" className="w-24 opacity-60" />
                </div>
              </div>
            </FadeIn>
            
            <FadeIn variant={revealRight}>
              <div className="space-y-8 max-w-lg">
                <h2 className="text-3xl md:text-5xl font-heading text-primary leading-tight">
                  Architectural Elegance Amidst Nature's Embrace
                </h2>
                <p className="text-lg text-foreground/70 leading-relaxed">
                  Designed by the globally acclaimed Habitat Architects, the villas at The Viceroy Estate present a contemporary take on <em>'Kath Kuni'</em>—a timeless Himachali architectural tradition.
                </p>
                <p className="text-lg text-foreground/70 leading-relaxed">
                  This harmonious blend of heritage and modernity extends across the estate, masterfully planned and landscaped by the esteemed New Delhi firm Oracles Landscape. The interiors are artfully curated by Meta Homes, offering refined detail and understated elegance in every space.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* AMENITIES SECTION */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <FadeIn>
              <Image src="https://theviceroyestate.com/wp-content/uploads/2025/06/butterfly-draw.png" alt="Butterfly" className="w-10 mx-auto mb-6 opacity-60" />
              <h2 className="text-4xl md:text-5xl font-heading text-primary mb-6">
                Gateway to Comfort & Exploration
              </h2>
              <p className="text-lg text-foreground/70 leading-relaxed">
                This is where mornings begin with panoramic sunrises and the scent of pine-infused air, afternoons invite leisurely walks through landscaped gardens, and evenings are best spent by the fireplace, accompanied by fine wine from a private cellar.
              </p>
            </FadeIn>
          </div>

          <div className="min-h-[300px]">
            {isLoading ? (
              <div className="flex justify-center items-center h-32">
                <LoadingSpinner className="text-primary w-8 h-8" />
              </div>
            ) : amenities.length > 0 ? (
              <motion.div 
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {amenities.map((amenity) => (
                  <motion.div 
                    key={amenity._id} 
                    variants={fadeInUp}
                    className="bg-white p-8 rounded-sm border border-primary/5 hover:border-primary/20 hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-background rounded-full flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      {/* Fallback icon if no image, or use image if available */}
                      {amenity.amenityImage ? (
                        <Image src={amenity.amenityImage} alt="" className="w-6 h-6 object-contain" />
                      ) : (
                        <Wind className="w-5 h-5" />
                      )}
                    </div>
                    <h3 className="text-xl font-heading text-primary mb-3">{amenity.amenityName}</h3>
                    <p className="text-foreground/60 text-sm leading-relaxed">
                      {amenity.description || "Experience unparalleled comfort and luxury tailored to your lifestyle."}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                {/* Fallback static content based on markdown if CMS is empty */}
                <FadeIn>
                  <h3 className="text-2xl font-heading text-primary mb-6 border-b border-primary/10 pb-4">Interior & Living</h3>
                  <ul className="space-y-3">
                    {['Fully Furnished Interiors', 'Heating & Air Conditioning', 'Private Jaccuzi & Roof Deck', 'Private Wine Cellar', 'Fireplace', 'Gym & Wellness Services'].map((item, i) => (
                      <li key={i} className="flex items-center text-foreground/70">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full mr-3" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </FadeIn>
                <FadeIn delay={0.2}>
                  <h3 className="text-2xl font-heading text-primary mb-6 border-b border-primary/10 pb-4">Exclusive Services</h3>
                  <ul className="space-y-3">
                    {['Clubhouse & Infinity Pool', 'Gated Community with Staff Quarters', '24 Hours Surveillance & Security', '24 Hours Electricity Backup', 'Wi-Fi & Wired Internet', 'Chef, Masseuse, Medical Services on call'].map((item, i) => (
                      <li key={i} className="flex items-center text-foreground/70">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full mr-3" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </FadeIn>
              </div>
            )}
          </div>

          <FadeIn className="text-center mt-16">
            <Button 
              variant="link"
              onClick={() => navigate('/amenities')}
              className="text-primary uppercase tracking-widest font-medium hover:text-accent transition-colors group"
            >
              View All Amenities
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </FadeIn>
        </div>
      </section>

      {/* IMAGE GALLERY STRIP */}
      <section className="w-full overflow-hidden bg-white py-12">
        <div className="flex gap-4 overflow-x-auto scrollbar-hide px-4 snap-x">
          {[
            "https://theviceroyestate.com/wp-content/uploads/2025/07/The-Viceroy-Estate-18-small-1.jpg",
            "https://theviceroyestate.com/wp-content/uploads/2025/07/clubhouse-bar-TVE-home-small-02.jpg",
            "https://theviceroyestate.com/wp-content/uploads/2025/07/clubhouse-interior-living-TVE-home-small-01.jpg",
            "https://theviceroyestate.com/wp-content/uploads/2025/05/The-Viceroy-Estate-20.jpg"
          ].map((src, idx) => (
            <div key={idx} className="min-w-[280px] md:min-w-[400px] aspect-[4/3] snap-center flex-shrink-0">
              <Image src={src} alt={`Gallery ${idx}`} className="w-full h-full object-cover rounded-sm" />
            </div>
          ))}
        </div>
      </section>

      {/* CLOSING CTA SECTION */}
      <section className="py-32 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://theviceroyestate.com/wp-content/uploads/2025/08/TVE-mountain-view.jpg')] bg-cover bg-center mix-blend-overlay" />
        
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-light leading-tight max-w-4xl mx-auto mb-12">
              At The Viceroy Estate, luxury is redefined as a way of life — where nature's finest landscapes merge seamlessly with contemporary elegance and an enduring legacy.
            </h2>
            <Button 
              onClick={() => navigate('/contact')}
              className="bg-accent hover:bg-white hover:text-primary text-white rounded-none px-10 py-7 text-sm tracking-widest uppercase transition-all duration-300"
            >
              Inquire Now
            </Button>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
}