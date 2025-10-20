import Header from "@/components/Header1";
import LocationHero from "@/components/LocationHero";
import Footer from "@/components/Footer";

const CountryHills = () => {
  return (
    <main className="min-h-screen">
      <Header locationName="COUNTRY HILLS" />
      <LocationHero
        locationName="GOLD'S GYM COUNTRY HILLS"
        locationId="country-hills"
      />
      <Footer />
    </main>
  );
};

export default CountryHills;
