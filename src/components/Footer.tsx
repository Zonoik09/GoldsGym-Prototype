import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-luxury py-16 px-4 text-primary-foreground">
      <div className="container mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="mb-4 text-3xl font-bold text-gold">Gold's Gym</h3>
            <p className="mb-4 text-sm text-ivory">
              Calgary's premier fitness destination. Where legendary heritage meets 
              boutique luxury.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/20 text-gold transition-smooth hover:bg-gold hover:text-primary"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/20 text-gold transition-smooth hover:bg-gold hover:text-primary"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/20 text-gold transition-smooth hover:bg-gold hover:text-primary"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-lg font-semibold text-gold">Quick Links</h4>
            <ul className="space-y-2 text-sm text-ivory">
              <li>
                <a href="#story" className="transition-smooth hover:text-gold">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#locations" className="transition-smooth hover:text-gold">
                  Locations
                </a>
              </li>
              <li>
                <a href="#experience" className="transition-smooth hover:text-gold">
                  Experience
                </a>
              </li>
              <li>
                <a href="#" className="transition-smooth hover:text-gold">
                  Membership
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-lg font-semibold text-gold">Contact</h4>
            <ul className="space-y-3 text-sm text-ivory">
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" />
                <span>(403) 555-GOLD</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" />
                <span>calgary@goldsgym.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" />
                <span>Five locations across Calgary</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="mb-4 text-lg font-semibold text-gold">Hours</h4>
            <ul className="space-y-2 text-sm text-ivory">
              <li className="flex justify-between">
                <span>Monday - Friday</span>
                <span className="font-medium text-gold">5AM - 11PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span className="font-medium text-gold">6AM - 10PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="font-medium text-gold">7AM - 9PM</span>
              </li>
              <li className="mt-4 text-xs text-gold-light">
                * Hours may vary by location
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-ivory/10 pt-8 text-center text-sm text-ivory">
          <p>© {new Date().getFullYear()} Gold's Gym Calgary. All rights reserved.</p>
          <p className="mt-2 text-xs">
            Strength. History. Community. Since 1965.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
