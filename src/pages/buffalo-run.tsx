import Header1 from "@/components/Header1";
import LocationHero from "@/components/LocationHero";
import Footer from "@/components/Footer";

const BuffaloRun = () => {
  return (
    <main className="min-h-screen">
      <Header1 />
      <LocationHero
        locationName="GOLD'S GYM BUFFALO RUN"
        locationId="buffalo-run"
      />
      <Footer />
    </main>
  );
};

export default BuffaloRun;
