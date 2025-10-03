import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo_GoldsGym.png";

const locations = [
  { name: "GOLD'S GYM DOUGLASDALE", id: "douglasdale" },
  { name: "GOLD'S GYM COUNTRY HILLS", id: "country-hills" },
  { name: "GOLD'S GYM NORTHGATE", id: "northgate" },
  { name: "GOLD'S GYM BUFFALO RUN", id: "buffalo-run" },
  { name: "GOLD'S GYM VILLAGE SQUARE", id: "village-square" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-gold/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="Gold's Gym" className="h-12 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {locations.map((location) => (
              <a
                key={location.id}
                href={`#${location.id}`}
                className="text-ivory text-sm font-semibold tracking-wide transition-smooth hover:text-gold"
              >
                {location.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-ivory hover:text-gold transition-smooth"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-gold/20">
            {locations.map((location) => (
              <a
                key={location.id}
                href={`#${location.id}`}
                onClick={() => setIsMenuOpen(false)}
                className="py-3 text-ivory hover:text-gold transition-smooth font-semibold block"
              >
                {location.name}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
