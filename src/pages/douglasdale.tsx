import { useEffect } from "react";
import Header from "@/components/Header1";
import LocationHero from "@/components/LocationHero";
import Footer from "@/components/Footer";
import { useLocation } from "@/contexts/LocationContext";

const Douglasdale = () => {
  const { setCurrentLocation } = useLocation();

  useEffect(() => {
    setCurrentLocation("DOUGLASDALE");
  }, [setCurrentLocation]);

  return (
    <main className="min-h-screen">
      <Header />
      <LocationHero
        locationName="GOLD'S GYM DOUGLASDALE"
        locationId="douglasdale"
      />
      <Footer />
    </main>
  );
};

export default Douglasdale;
