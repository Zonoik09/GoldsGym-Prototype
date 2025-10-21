import { useParams } from "react-router-dom";
import Header from "@/components/Header1";
import PlansMember from "@/components/plansMemberships";
import Footer from "@/components/Footer";

const PlansMemberships = () => {
  const { location } = useParams<{ location: string }>();
  
  return (
    <main className="min-h-screen">
      <Header />
      <PlansMember/>
      <Footer />
    </main>
  );
};

export default PlansMemberships;
