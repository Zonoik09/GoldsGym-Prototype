import Hero from "@/components/Hero";
import Story from "@/components/Story";
import Locations from "@/components/Locations";
import Footer from "@/components/Footer";
import LocationMap from "@/components/MapSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Story />
      <Locations />
      <LocationMap/>
      <Footer />
    </main>
  );
};

export default Index;
