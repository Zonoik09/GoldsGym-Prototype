import Header from "@/components/Header1";
import LocationHero from "@/components/LocationHero";
import Footer from "@/components/Footer";

const Testimony = () => {
  return (
    <main className="min-h-screen">
      <Header locationName="TESTIMONIALS" />
      <LocationHero
        locationName="MEMBER TESTIMONIALS"
        locationId="testimony"
      />
      <Footer />
    </main>
  );
};

export default Testimony;
