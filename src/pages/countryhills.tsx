import Header1 from "@/components/Header1";
import LocationHero from "@/components/LocationHero";
import Footer from "@/components/Footer";

const CountryHills = () => {
  return (
    <main className="min-h-screen">
      <Header1 />
      <LocationHero
        locationName="GOLD'S GYM COUNTRY HILLS"
        locationId="country-hills"
      />
      <Footer />
    </main>
  );
};

export default CountryHills;
