import Header from "@/components/Header1";
import LocationHero from "@/components/LocationHero";
import Footer from "@/components/Footer";

const PlansMemberships = () => {
  return (
    <main className="min-h-screen">
      <Header locationName="PLANS & MEMBERSHIPS" />
      <LocationHero
        locationName="PLANS & MEMBERSHIPS"
        locationId="plans-memberships"
      />
      <Footer />
    </main>
  );
};

export default PlansMemberships;
