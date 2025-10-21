import { useParams } from "react-router-dom";
import Header from "@/components/Header1";
import GroupClasses from "@/components/GroupClasses";
import Footer from "@/components/Footer";

const Classes = () => {
  const { location } = useParams<{ location: string }>();
  const locationId = location || "douglasdale";
  
  return (
    <main className="min-h-screen bg-primary text-white">
      <Header />
      <div className="pt-24">
        <GroupClasses locationId={locationId} />
      </div>
      <Footer />
    </main>
  );
};

export default Classes;
