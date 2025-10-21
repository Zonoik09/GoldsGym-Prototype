import { useParams } from "react-router-dom";
import Header from "@/components/Header1";
import PersonalTrainers from "@/components/PersonalTrainers";
import Footer from "@/components/Footer";

const PersonalTraining = () => {
  const { location } = useParams<{ location: string }>();
  const locationId = location || "northgate";
  
  return (
    <main className="min-h-screen">
      <Header />
      <PersonalTrainers locationId={locationId} />
      <Footer />
    </main>
  );
};

export default PersonalTraining;
