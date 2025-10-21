import Header from "@/components/Header1";
import Tours from "@/components/tour";
import Footer from "@/components/Footer";

const Tour = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Tours 
      locationId="Northgate"
      />
      <Footer />
    </main>
  );
};

export default Tour;
