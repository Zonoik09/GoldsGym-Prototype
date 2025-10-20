import Header from "@/components/Header1";
import LocationHero from "@/components/LocationHero";
import Footer from "@/components/Footer";

const PersonalTraining = () => {
  return (
    <main className="min-h-screen">
      <Header locationName="PERSONAL TRAINING" />
      <LocationHero
        locationName="PERSONAL TRAINING"
        locationId="personal-training"
      />
      <Footer />
    </main>
  );
};

export default PersonalTraining;
