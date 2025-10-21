import { useParams } from "react-router-dom";
import Header from "@/components/Header1";
import Tours from "@/components/tour";
import Footer from "@/components/Footer";

const Tour = () => {
  const { location } = useParams<{ location: string }>();
  const locationId = location || "northgate";
  
  return (
    <main className="min-h-screen">
      <Header />
      <Tours locationId={locationId} />
      <Footer />
    </main>
  );
};

export default Tour;
