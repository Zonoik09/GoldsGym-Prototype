import Header from "@/components/Header1";
import LocationHero from "@/components/LocationHero";
import Footer from "@/components/Footer";

const VillageSquare = () => {
  return (
    <main className="min-h-screen">
      <Header locationName="VILLAGE SQUARE" />
      <LocationHero
        locationName="GOLD'S GYM VILLAGE SQUARE"
        locationId="village-square"
      />
      <Footer />
    </main>
  );
};

export default VillageSquare;
