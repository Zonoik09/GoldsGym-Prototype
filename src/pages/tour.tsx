import Header from "@/components/Header1";
import LocationHero from "@/components/LocationHero";
import Footer from "@/components/Footer";

const Tour = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <LocationHero
        locationName="TOUR OUR GYM"
        locationId="tour"
      />
      <Footer />
    </main>
  );
};

export default Tour;
