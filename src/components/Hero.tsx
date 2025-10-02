import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-gym.jpg";
import logo from "@/assets/logo_GoldsGym.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Hero Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Gold's Gym Calgary - Premium Fitness"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <div className="max-w-4xl animate-fade-in-up space-y-6">
          <img src={logo} className="w-32 h-auto mx-auto" />
          <h1 className="font-serif text-6xl font-bold tracking-wide text-primary-foreground md:text-7xl lg:text-8xl text-white">
            GOLD'S GYM CALGARY
          </h1>
          
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-gold" />
            <p className="font-serif text-2x1 italic text-gold md:text-3xl">
              WHERE LEGENDS ARE MADE
            </p>
            <div className="h-px w-16 bg-gold" />
          </div>


          <div className="flex flex-col gap-4 pt-8 sm:flex-row sm:justify-center">
            <Button variant="hero" size="lg" className="group" data-cta="join-now">
              Join Now
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="heroOutline" size="lg" data-cta="book-tour">
              Locations
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
          <div className="flex flex-col items-center gap-2 text-ivory">
            <span className="text-sm font-light">Scroll to explore</span>
            <div className="h-8 w-px bg-gradient-to-b from-gold to-transparent" />
          </div>
        </div>

      
      </div>
    </section>
  );
}

export default Hero;
