import Hero from "@/components/Hero";
import Story from "@/components/Story";
import Locations from "@/components/Locations";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Story />
      <Locations />
      <Experience />
      <Footer />
    </main>
  );
};

export default Index;
