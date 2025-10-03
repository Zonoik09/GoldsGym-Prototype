import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-gym.jpg";
import logo from "@/assets/logo_GoldsGym.png";

interface LocationHeroProps {
  locationName: string;
  locationId: string;
}

const LocationHero = ({ locationName, locationId }: LocationHeroProps) => {
  return (
    <section id={locationId} className="relative h-screen w-full overflow-hidden pt-20">
      {/* Hero Image with Overlay */}
      {/* PARA CAMBIAR A VIDEO: Reemplaza el <img> con <video autoPlay loop muted playsInline> */}
      {/* Ejemplo: <video autoPlay loop muted playsInline className="h-full w-full object-cover">
                    <source src={videoSource} type="video/mp4" />
                  </video> */}
      <div className="absolute inset-0 top-20">
        <img
          src={heroImage}
          alt={`${locationName} - Premium Fitness`}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <div className="max-w-4xl animate-fade-in-up space-y-6">
          <img src={logo} className="w-32 h-auto mx-auto" alt="Gold's Gym Logo" />
          <h1 className="font-serif text-6xl font-bold tracking-wide text-primary-foreground md:text-7xl lg:text-8xl text-white">
            {locationName}
          </h1>
          
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-gold" />
            <p className="font-serif text-2xl italic text-gold md:text-3xl">
              60 years of our history
            </p>
            <div className="h-px w-16 bg-gold" />
          </div>

          <div className="flex flex-col gap-4 pt-8 sm:flex-row sm:justify-center">
            <Button variant="hero" size="lg" className="group">
              Join Now
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationHero;
