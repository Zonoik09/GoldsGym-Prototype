import Header from "@/components/Header1";
import LocationHero from "@/components/LocationHero";
import Footer from "@/components/Footer";

const Classes = () => {
  return (
    <main className="min-h-screen">
      <Header locationName="CLASSES" />
      <LocationHero
        locationName="CLASSES"
        locationId="classes"
      />
      <Footer />
    </main>
  );
};

export default Classes;
