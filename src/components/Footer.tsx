import { MapPin, Phone, Mail, Instagram, Facebook, Linkedin, Youtube } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Footer = () => {
  const { toast } = useToast();

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: `${label} copied to clipboard`,
      duration: 2000,
    });
  };
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
                href="https://www.instagram.com/goldsgymcalgary/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/20 text-gold transition-smooth hover:bg-gold hover:text-primary"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/GoldsGymCalgary"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/20 text-gold transition-smooth hover:bg-gold hover:text-primary"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.tiktok.com/@goldsgymyyc"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/20 text-gold transition-smooth hover:bg-gold hover:text-primary"
                aria-label="TikTok"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@goldsgymcalgary"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/20 text-gold transition-smooth hover:bg-gold hover:text-primary"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/golds-gym-calgary/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/20 text-gold transition-smooth hover:bg-gold hover:text-primary"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
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

          {/* Contact - Locations */}
          <div>
            <h4 className="mb-4 text-lg font-semibold text-gold">Contact</h4>
            <h5 className="mb-2 text-sm font-semibold text-gold/80">Our Locations</h5>
            <ul className="space-y-2 text-sm text-ivory">
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" />
                <button 
                  onClick={() => copyToClipboard("(403) 300-4653", "Phone number")}
                  className="text-left transition-smooth hover:text-gold cursor-pointer"
                >
                  Country Hills - (403) 300-4653
                </button>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" />
                <button 
                  onClick={() => copyToClipboard("(403) 272-4653", "Phone number")}
                  className="text-left transition-smooth hover:text-gold cursor-pointer"
                >
                  Northgate - (403) 272-4653
                </button>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" />
                <button 
                  onClick={() => copyToClipboard("(587) 391-3778", "Phone number")}
                  className="text-left transition-smooth hover:text-gold cursor-pointer"
                >
                  Douglasdale - (587) 391-3778
                </button>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" />
                <button 
                  onClick={() => copyToClipboard("(403) 930-7948", "Phone number")}
                  className="text-left transition-smooth hover:text-gold cursor-pointer"
                >
                  Buffalo Run - (403) 930-7948
                </button>
              </li>
            </ul>
          </div>

          {/* Contact - Email */}
          <div>
            <h4 className="mb-4 text-lg font-semibold text-gold opacity-0">Contact</h4>
            <h5 className="mb-2 text-sm font-semibold text-gold/80">Email Us</h5>
            <ul className="space-y-2 text-sm text-ivory">
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" />
                <div>
                  <div className="font-medium">Marketing</div>
                  <button 
                    onClick={() => copyToClipboard("marketing@goldsgymcalgary.com", "Email")}
                    className="transition-smooth hover:text-gold cursor-pointer text-left"
                  >
                    marketing@goldsgymcalgary.com
                  </button>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" />
                <div>
                  <div className="font-medium">Membership Issues</div>
                  <button 
                    onClick={() => copyToClipboard("golds.clients@goldsgymcalgary.com", "Email")}
                    className="transition-smooth hover:text-gold cursor-pointer text-left"
                  >
                    golds.clients@goldsgymcalgary.com
                  </button>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" />
                <div>
                  <div className="font-medium">Billing, Cancellations or Freezing</div>
                  <button 
                    onClick={() => copyToClipboard("customercare@abcfitness.com", "Email")}
                    className="transition-smooth hover:text-gold cursor-pointer text-left"
                  >
                    customercare@abcfitness.com
                  </button>
                  <button 
                    onClick={() => copyToClipboard("1 888-827-9262", "Phone number")}
                    className="mt-1 block transition-smooth hover:text-gold cursor-pointer text-left"
                  >
                    1 888-827-9262
                  </button>
                </div>
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
