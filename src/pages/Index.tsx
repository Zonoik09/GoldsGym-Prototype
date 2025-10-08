import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Hero1 from "@/components/Hero1";
import Footer from "@/components/Footer";

const Index = () => {
  const [showV2, setShowV2] = useState(false);

  return (
    <main className="min-h-screen">
      <Header onToggleHero={() => setShowV2(!showV2)} />
      {showV2 ? <Hero1 /> : <Hero />}
      <Footer />
    </main>
  );
};

export default Index;
