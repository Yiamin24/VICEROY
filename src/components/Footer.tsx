import { Link } from 'react-router-dom';
import { Instagram, Youtube, Linkedin, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <Link to="/" className="text-xl font-heading font-bold mb-4 block">
              theviceroyestate.com
            </Link>
            <p className="text-sm text-white/80 font-paragraph">
              Nestled amidst the tranquil Shivalik Hills, The Viceroy Estate is an exclusive, gated residential community in Dhar, Himachal Pradesh, offering 14 impeccably designed luxury villas.
            </p>
          </div>

          {/* Sitemap */}
          <div>
            <h3 className="text-lg font-heading font-bold mb-4">Sitemap</h3>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-white/80 hover:text-accent transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-sm text-white/80 hover:text-accent transition-colors">
                About Us
              </Link>
              <Link to="/villas" className="text-sm text-white/80 hover:text-accent transition-colors">
                Villas
              </Link>
              <Link to="/amenities" className="text-sm text-white/80 hover:text-accent transition-colors">
                Amenities
              </Link>
              <Link to="/contact" className="text-sm text-white/80 hover:text-accent transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-heading font-bold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-accent transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-accent transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-accent transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-accent transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-heading font-bold mb-4">Newsletter</h3>
            <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                required
              />
              <Button type="submit" className="bg-accent hover:bg-accent/90 text-white">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-white/80 font-paragraph text-center md:text-left">
            <p>RERA: HPRERASOL2024118/P</p>
            <p className="mt-1">© 2026 theviceroyestate.com. All Rights Reserved.</p>
          </div>
          <div className="text-sm text-white/80 font-paragraph">
            <a href="mailto:hello@theviceroyestate.com" className="hover:text-accent transition-colors">
              hello@theviceroyestate.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
