import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo_GoldsGym.png";
import { Link } from "react-router-dom";

const locations = [
  { name: "Home", path: "/" },
  { name: "Plans memberships", path: "/plans-memberships" },
  { name: "PT", path: "/personal-training" },
  { name: "Classes", path: "/classes" },
  { name: "Tour", path: "/tour" },
  { name: "Services", path: "/services" },
  { name: "Testimony", path: "/testimony" },
];

interface HeaderProps {
  onToggleHero?: () => void;
  locationName?: string;
}

const Header = ({ onToggleHero, locationName }: HeaderProps = {}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gold1 backdrop-blur-sm border-b border-gold/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20 gap-8">
          {/* Logo */}
          <div className="flex items-center gap-4 -ml-[30px]">
            <Link to="/">
              <img src={logo} alt="Gold's Gym" className="h-16 w-16" />
            </Link>
            {locationName && (
              <span className="text-ivory text-xl font-bold tracking-wider">
                {locationName}
              </span>
            )}
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 ml-auto">
            {locations.map((location) => (
              <Link
                key={location.path}
                to={location.path}
                className="text-ivory text-base font-semibold tracking-wide transition-smooth text-primary hover:text-white"
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
                className="py-3 text-ivory hover:text-gold transition-smooth font-semibold block text-base"
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