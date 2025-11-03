import { useParams } from "react-router-dom";
import Header from "@/components/Header1";
import HyroxComp from "@/components/Hyrox";
import Footer from "@/components/Footer";

const Hyrox = () => {
  const { location } = useParams<{ location: string }>();
  const locationId = location || "northgate";
  
  return (
    <main className="min-h-screen">
      <Header />
      <HyroxComp />
      <Footer />
    </main>
  );
};

export default Hyrox;
 