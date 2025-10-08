import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo_GoldsGym.png";
import { Link } from "react-router-dom";

const locations = [
  { name: "GOLD'S GYM DOUGLASDALE", path: "/douglasdale" },
  { name: "GOLD'S GYM COUNTRY HILLS", path: "/countryhills" },
  { name: "GOLD'S GYM NORTHGATE", path: "/northgate" },
  { name: "GOLD'S GYM BUFFALO RUN", path: "/buffalo-run" },
  { name: "GOLD'S GYM VILLAGE SQUARE", path: "/village-square" },
];

interface HeaderProps {
  onToggleHero?: () => void;
}

const Header = ({ onToggleHero }: HeaderProps = {}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-gold/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <img src={logo} alt="Gold's Gym" className="h-12 w-auto" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {locations.map((location) => (
              <Link
                key={location.path}
                to={location.path}
                className="text-ivory text-sm font-semibold tracking-wide transition-smooth hover:text-gold"
              >
                {location.name}
              </Link>
            ))}
            {onToggleHero && (
              <button
                onClick={onToggleHero}
                className="text-ivory text-sm font-semibold tracking-wide transition-smooth hover:text-gold px-4 py-2 border border-gold/50 rounded"
              >
                V2
              </button>
            )}
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
              <Link
                key={location.path}
                to={location.path}
                onClick={() => setIsMenuOpen(false)}
                className="py-3 text-ivory hover:text-gold transition-smooth font-semibold block"
              >
                {location.name}
              </Link>
            ))}
            {onToggleHero && (
              <button
                onClick={() => {
                  onToggleHero();
                  setIsMenuOpen(false);
                }}
                className="py-3 text-ivory hover:text-gold transition-smooth font-semibold block w-full text-left"
              >
                V2
              </button>
            )}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
