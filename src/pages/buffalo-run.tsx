import { useEffect } from "react";
import Header from "@/components/Header1";
import LocationHero from "@/components/LocationHero";
import Footer from "@/components/Footer";
import { useLocation } from "@/contexts/LocationContext";

const BuffaloRun = () => {
  const { setCurrentLocation } = useLocation();

  useEffect(() => {
    setCurrentLocation("BUFFALO RUN");
  }, [setCurrentLocation]);

  return (
    <main className="min-h-screen">
      <Header />
      <LocationHero
        locationName="GOLD'S GYM BUFFALO RUN"
        locationId="buffalo-run"
      />
      <Footer />
    </main>
  );
};

export default BuffaloRun;
