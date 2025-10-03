import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-luxury py-16 px-4 text-primary-foreground">
      {/* Gold divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-gold" />
      
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
          <div className="lg:col-span-2">
            <h4 className="mb-4 text-lg font-semibold text-gold">Contact</h4>
            
            {/* Locations */}
            <div className="mb-4">
              <h5 className="mb-2 text-sm font-semibold text-gold/80">Our Locations</h5>
              <ul className="space-y-2 text-sm text-ivory">
                <li className="flex items-start gap-2">
                  <Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" />
                  <span>Country Hills - (403) 300-4653</span>
                </li>
                <li className="flex items-start gap-2">
                  <Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" />
                  <span>Northgate - (403) 272-4653</span>
                </li>
                <li className="flex items-start gap-2">
                  <Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" />
                  <span>Douglasdale - (587) 391-3778</span>
                </li>
                <li className="flex items-start gap-2">
                  <Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" />
                  <span>Buffalo Run - (403) 930-7948</span>
                </li>
              </ul>
            </div>

            {/* Email Contacts */}
            <div>
              <h5 className="mb-2 text-sm font-semibold text-gold/80">Email Us</h5>
              <ul className="space-y-2 text-sm text-ivory">
                <li className="flex items-start gap-2">
                  <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" />
                  <div>
                    <div className="font-medium">Marketing</div>
                    <div>marketing@goldsgymcalgary.com</div>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" />
                  <div>
                    <div className="font-medium">Membership Issues</div>
                    <div>golds.clients@goldsgymcalgary.com</div>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" />
                  <div>
                    <div className="font-medium">Billing, Cancellations or Freezing</div>
                    <div>customercare@abcfitness.com</div>
                    <div className="mt-1">1 888-827-9262</div>
                  </div>
                </li>
              </ul>
            </div>
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
