import Header from "@/components/Header1";
import LocationHero from "@/components/LocationHero";
import Footer from "@/components/Footer";

const Services = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <LocationHero
        locationName="GYM SERVICES"
        locationId="services"
      />
      <Footer />
    </main>
  );
};

export default Services;
