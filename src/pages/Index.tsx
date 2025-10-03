import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LocationHero from "@/components/LocationHero";
import Story from "@/components/Story";
import Locations from "@/components/Locations";
import Footer from "@/components/Footer";
import LocationMap from "@/components/MapSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <LocationHero locationName="GOLD'S GYM DOUGLASDALE" locationId="douglasdale" />
      <LocationHero locationName="GOLD'S GYM COUNTRY HILLS" locationId="country-hills" />
      <LocationHero locationName="GOLD'S GYM NORTHGATE" locationId="northgate" />
      <LocationHero locationName="GOLD'S GYM BUFFALO RUN" locationId="buffalo-run" />
      <LocationHero locationName="GOLD'S GYM VILLAGE SQUARE" locationId="village-square" />
    </main>
  );
};

export default Index;
