import { useEffect } from "react";
import Header from "@/components/Header1";
import LocationHero from "@/components/LocationHero";
import Footer from "@/components/Footer";
import { useLocation } from "@/contexts/LocationContext";

const Northgate = () => {
  const { setCurrentLocation } = useLocation();

  useEffect(() => {
    setCurrentLocation("NORTHGATE");
  }, [setCurrentLocation]);

  return (
    <main className="min-h-screen">
      <Header />
      <LocationHero
        locationName="GOLD'S GYM NORTHGATE"
        locationId="northgate"
      />
      <Footer />
    </main>
  );
};

export default Northgate;
