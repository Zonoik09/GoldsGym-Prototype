import Header from "@/components/Header";
import LocationHero from "@/components/LocationHero";
import Footer from "@/components/Footer";

const BuffaloRun = () => {
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
