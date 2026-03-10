import { useState, useRef, useEffect } from 'react';
import { BaseCrudService } from '@/integrations';
import { Inquiries } from '@/entities';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    emailAddress: '',
    phoneNumber: '',
    villaOfInterest: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await BaseCrudService.create<Inquiries>('inquiries', {
        _id: crypto.randomUUID(),
        fullName: formData.fullName,
        emailAddress: formData.emailAddress,
        phoneNumber: formData.phoneNumber,
        villaOfInterest: formData.villaOfInterest,
        message: formData.message,
        submissionDate: new Date(),
      });

      setSubmitSuccess(true);
      setFormData({
        fullName: '',
        emailAddress: '',
        phoneNumber: '',
        villaOfInterest: '',
        message: '',
      });

      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      console.error('Error submitting inquiry:', error);
    } finally {
      setIsSubmitting(false);
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
            backgroundImage: 'url(https://static.wixstatic.com/media/cef78c_a35fd7dfe2f543f28c7b93bb0eeee260~mv2.png?originWidth=1152&originHeight=576)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary/60" />
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <AnimatedElement>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              Contact Us
            </h1>
          </AnimatedElement>
          <AnimatedElement className="delay-100">
            <p className="text-lg md:text-xl font-paragraph max-w-3xl mx-auto">
              Get in touch to schedule a visit or learn more about The Viceroy Estate
            </p>
          </AnimatedElement>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <AnimatedElement>
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl">
                <h2 className="text-3xl font-heading font-bold text-primary mb-6">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="fullName" className="text-sm font-paragraph text-foreground/80 mb-2 block">
                      Full Name *
                    </Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <Label htmlFor="emailAddress" className="text-sm font-paragraph text-foreground/80 mb-2 block">
                      Email Address *
                    </Label>
                    <Input
                      id="emailAddress"
                      name="emailAddress"
                      type="email"
                      value={formData.emailAddress}
                      onChange={handleChange}
                      required
                      className="w-full"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phoneNumber" className="text-sm font-paragraph text-foreground/80 mb-2 block">
                      Phone Number
                    </Label>
                    <Input
                      id="phoneNumber"
                      name="phoneNumber"
                      type="tel"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      className="w-full"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div>
                    <Label htmlFor="villaOfInterest" className="text-sm font-paragraph text-foreground/80 mb-2 block">
                      Villa of Interest
                    </Label>
                    <Input
                      id="villaOfInterest"
                      name="villaOfInterest"
                      type="text"
                      value={formData.villaOfInterest}
                      onChange={handleChange}
                      className="w-full"
                      placeholder="Monarch, Papillon, or Mariposa"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-sm font-paragraph text-foreground/80 mb-2 block">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full min-h-[120px]"
                      placeholder="Tell us about your interest in The Viceroy Estate..."
                    />
                  </div>

                  {submitSuccess && (
                    <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg text-sm font-paragraph">
                      Thank you for your inquiry! We&apos;ll get back to you soon.
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-accent hover:bg-accent/90 text-white"
                    size="lg"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </div>
            </AnimatedElement>

            {/* Contact Information */}
            <AnimatedElement className="delay-100">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-heading font-bold text-primary mb-6">
                    Get in Touch
                  </h2>
                  <p className="text-lg font-paragraph text-foreground/80 leading-relaxed mb-8">
                    We&apos;re here to answer any questions you may have about The Viceroy Estate. Reach out to us and we&apos;ll respond as soon as we can.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4 bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                      <Mail className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-lg font-heading font-bold text-primary mb-2">Email</h3>
                      <a
                        href="mailto:hello@theviceroyestate.com"
                        className="text-foreground/70 font-paragraph hover:text-accent transition-colors"
                      >
                        hello@theviceroyestate.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                      <Phone className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-lg font-heading font-bold text-primary mb-2">Phone</h3>
                      <p className="text-foreground/70 font-paragraph">
                        Available Monday - Saturday
                        <br />
                        9:00 AM - 6:00 PM IST
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-lg font-heading font-bold text-primary mb-2">Location</h3>
                      <p className="text-foreground/70 font-paragraph">
                        Dhar, Himachal Pradesh
                        <br />
                        30 minutes from Solan City
                        <br />
                        6000 feet above sea level
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-primary text-white rounded-2xl p-8">
                  <h3 className="text-xl font-heading font-bold mb-4">Schedule a Visit</h3>
                  <p className="text-white/90 font-paragraph mb-6">
                    Experience the luxury and tranquility of The Viceroy Estate firsthand. Contact us to arrange a private tour of our villas.
                  </p>
                  <p className="text-sm text-white/70 font-paragraph">
                    RERA: HPRERASOL2024118/P
                  </p>
                </div>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-secondary/5">
        <div className="container mx-auto px-4">
          <AnimatedElement>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
                Find Us
              </h2>
              <p className="text-lg font-paragraph text-foreground/80 max-w-2xl mx-auto">
                Located in the serene Shivalik Hills, just 30 minutes from Solan City
              </p>
            </div>
          </AnimatedElement>

          <AnimatedElement>
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl h-[400px] flex items-center justify-center">
              <div className="text-center p-8">
                <MapPin className="h-16 w-16 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-heading font-bold text-primary mb-2">
                  The Viceroy Estate
                </h3>
                <p className="text-foreground/70 font-paragraph">
                  Dhar, Himachal Pradesh
                  <br />
                  Shivalik Hills, 6000 ft elevation
                </p>
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
      `}</style>
      {children}
    </div>
  );
};
