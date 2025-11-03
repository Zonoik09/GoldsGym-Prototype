import { useParams } from "react-router-dom";
import Header from "@/components/Header1";
import Service from "@/components/services";
import Footer from "@/components/Footer";

const Services = () => {
  const { location } = useParams<{ location: string }>();
  const locationId = location || "northgate";
  
  return (
    <main className="min-h-screen">
      <Header />
      <Service/>
      <Footer />
    </main>
  );
};

export default Services;
