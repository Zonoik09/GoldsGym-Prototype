import { useEffect } from "react";
import Header from "@/components/Header1";
import LocationHero from "@/components/LocationHero";
import Footer from "@/components/Footer";
import { useLocation } from "@/contexts/LocationContext";

const VillageSquare = () => {
  const { setCurrentLocation } = useLocation();

  useEffect(() => {
    setCurrentLocation("VILLAGE SQUARE");
  }, [setCurrentLocation]);

  return (
    <main className="min-h-screen">
      <Header />
      <LocationHero
        locationName="GOLD'S GYM VILLAGE SQUARE"
        locationId="village-square"
      />
      <Footer />
    </main>
  );
};

export default VillageSquare;
