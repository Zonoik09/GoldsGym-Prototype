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
      name: "Downtown Core",
      address: "888 3rd Street SW, Calgary",
      image: location1,
      features: ["24/7 Access", "Premium Equipment", "Personal Training"],
    },
    {
      name: "Beltline District",
      address: "1234 17th Avenue SW, Calgary",
      image: location2,
      features: ["Group Classes", "Spa Amenities", "Nutrition Coaching"],
    },
    {
      name: "Eau Claire",
      address: "456 2nd Avenue SW, Calgary",
      image: location3,
      features: ["Boutique Studio", "Private Sessions", "Recovery Lounge"],
    },
    {
      name: "Mission",
      address: "789 4th Street SW, Calgary",
      image: location4,
      features: ["Strength Training", "Cardio Zone", "Wellness Center"],
    },
    {
      name: "Kensington",
      address: "321 10th Street NW, Calgary",
      image: location5,
      features: ["Yoga Studio", "Pilates", "Community Events"],
    },
  ];

  return (
    <section id="locations" className="bg-gradient-luxury py-24 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-5xl font-bold text-primary-foreground md:text-6xl">
            Our Locations
          </h2>
          <div className="mx-auto h-1 w-24 bg-gradient-gold" />
          <p className="mx-auto mt-6 max-w-2xl text-lg text-ivory">
            Five exceptional locations across Calgary. Each one designed to deliver 
            the Gold's Gym experience with boutique luxury and community warmth.
          </p>
        </div>

        {/* Locations Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {locations.map((location, index) => (
            <div
              key={location.name}
              className="group overflow-hidden rounded-2xl bg-card shadow-elegant transition-smooth hover:-translate-y-2 hover:shadow-gold"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={location.image}
                  alt={`${location.name} - Gold's Gym Calgary`}
                  className="h-full w-full object-cover transition-smooth group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="mb-2 text-2xl font-bold text-primary">
                  {location.name}
                </h3>
                
                <div className="mb-4 flex items-start gap-2 text-muted-foreground">
                  <MapPin className="mt-1 h-4 w-4 flex-shrink-0 text-gold" />
                  <p className="text-sm">{location.address}</p>
                </div>

                {/* Features */}
                <div className="mb-6 flex flex-wrap gap-2">
                  {location.features.map((feature) => (
                    <span
                      key={feature}
                      className="rounded-full bg-ivory px-3 py-1 text-xs font-medium text-primary"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <Button variant="location" className="w-full group/btn">
                  Explore Location
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;
