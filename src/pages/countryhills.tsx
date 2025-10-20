import { useEffect } from "react";
import Header from "@/components/Header1";
import LocationHero from "@/components/LocationHero";
import Footer from "@/components/Footer";
import { useLocation } from "@/contexts/LocationContext";

const CountryHills = () => {
  const { setCurrentLocation } = useLocation();

  useEffect(() => {
    setCurrentLocation("COUNTRY HILLS");
  }, [setCurrentLocation]);

  return (
    <main className="min-h-screen">
      <Header />
      <LocationHero
        locationName="GOLD'S GYM COUNTRY HILLS"
        locationId="country-hills"
      />
      <Footer />
    </main>
  );
};

export default CountryHills;
