import { useParams } from "react-router-dom";
import Header from "@/components/Header1";
import LocationHero from "@/components/LocationHero";
import Footer from "@/components/Footer";

const Testimony = () => {
  const { location } = useParams<{ location: string }>();
  const locationId = location || "northgate";
  
  return (
    <main className="min-h-screen">
      <Header />
      <LocationHero locationId={locationId} />
      <Footer />
    </main>
  );
};

export default Testimony;
