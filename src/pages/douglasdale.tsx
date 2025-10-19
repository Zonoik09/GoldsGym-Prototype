import Header1 from "@/components/Header1";
import LocationHero from "@/components/LocationHero";
import Footer from "@/components/Footer";

const Douglasdale = () => {
  return (
    <main className="min-h-screen">
      <Header1 />
      <LocationHero
        locationName="GOLD'S GYM DOUGLASDALE"
        locationId="douglasdale"
      />
      <Footer />
    </main>
  );
};

export default Douglasdale;
