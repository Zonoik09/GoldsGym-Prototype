import { Button } from "@/components/ui/button";
import { MapPin, ArrowRight } from "lucide-react";
import location1 from "@/assets/location-1.jpg";
import location2 from "@/assets/location-2.jpg";
import location3 from "@/assets/location-3.jpg";
import location4 from "@/assets/location-4.jpg";
import location5 from "@/assets/location-5.jpg";

const Locations = () => {
  const locations = [
    {
      name: "GOLD'S GYM DOUGLASDALE",
      address: "11540 24 St SE, Calgary, AB T2Z 3V9",
      image: location1,
      features: ["24/7 Access", "Premium Equipment", "Personal Training"],
    },
    {
      name: "GOLD'S GYM COUNTRY HILLS",
      address: "2638 Country Hills Blvd NE, Calgary, AB T3N 1A3",
      image: location2,
      features: ["24/7 Access", "Premium Equipment", "Personal Training"],
    },
    {
      name: "GOLD'S GYM NORTHGATE",
      address: "565 36 St NE, Calgary, AB T2A 6K3",
      image: location3,
      features: ["24/7 Access", "Premium Equipment", "Personal Training"],
    },
    {
      name: "GOLD's GYM BUFFALO RUN",
      address: "131 - 11501 Buffalo Run Blvd, Calgary, AB T3T 0E3",
      image: location4,
      features: ["24/7 Access", "Premium Equipment", "Personal Training"],
    },
    {
      name: "GOLD's GYM VILLAGE SQUARE",
      address: "2520 52 St NE Calgary, AB T1Y 3R5",
      image: location5,
      features: ["24/7 Access", "Premium Equipment", "Personal Training"],
    },
    {
      name: "Coming Soon",
      address: "New location opening in Calgary",
      image: location1,
      features: ["24/7 Access", "Premium Equipment", "Personal Training"],
      isComingSoon: true,
    },
  ];

  return (
    <section id="locations" className="bg-gradient-luxury py-24 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-5xl font-bold text-gold md:text-6xl">
            Locations
          </h2>
          <div className="mx-auto h-1 w-24 bg-gradient-gold" />
          <p className="mx-auto mt-6 max-w-2xl text-lg text-ivory">
            Five exceptional locations across Calgary. Each one designed to deliver 
            the Gold's Gym experience with boutique luxury and community warmth.
          </p>
        </div>

        {/* Locations Grid */}
        <div className="locations-grid grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {locations.map((location, index) => (
            <div
              key={location.name}
              className="location-card flex flex-col overflow-hidden rounded-2xl bg-card shadow-elegant transition-smooth hover:-translate-y-2 hover:shadow-gold border"
              style={{ animationDelay: `${index * 0.1}s`, minHeight: '460px' }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={location.image}
                  alt={`${location.name} - Gold's Gym Calgary`}
                  className="h-full w-full object-cover transition-smooth group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                {location.isComingSoon && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/60">
                    <span className="rounded-full bg-gradient-gold px-6 py-2 text-lg font-bold text-primary">
                      Coming Soon
                    </span>
                  </div>
                )}
              </div>

              {/* Content Body */}
              <div className="body flex flex-1 flex-col p-6">
                <h3 className="mb-2 text-2xl font-bold text-gold">
                  {location.name}
                </h3>
                
                <div className="mb-4 flex items-start gap-2 text-muted-foreground">
                  <MapPin className="mt-1 h-4 w-4 flex-shrink-0 text-gold" />
                  <p className="text-sx text-primary-foreground">{location.address}</p>
                </div>

                {/* Features */}
                <div className="mb-4 flex flex-wrap gap-2">
                  {location.features.map((feature) => (
                    <span
                      key={feature}
                      className="rounded-full bg-ivory px-3 py-1 text-xs font-medium text-primary"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions - fixed at bottom */}
              <div className="actions mt-auto p-6 pt-0">
                <button 
                  className="btn-explore w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gold px-6 py-3.5 font-bold uppercase tracking-wide text-primary transition-all hover:-translate-y-0.5 hover:shadow-gold disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={location.isComingSoon}
                >
                  {location.isComingSoon ? "Stay Tuned" : "Explore Location"}
                  {!location.isComingSoon && (
                    <ArrowRight className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;
