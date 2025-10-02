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
          <h1 className="font-serif text-6xl font-bold tracking-tight text-primary-foreground md:text-7xl lg:text-8xl text-white">
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

      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.6 }}
      className="absolute bottom-12 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2">
      <span className="text-sm text-ivory/70">Scroll to explore</span>
      <div className="h-12 w-px bg-gradient-to-b from-gold to-transparent" />
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="h-6 w-6 text-gold" />
      </motion.div>
    </motion.div>
      </div>
    </section>
  );
}

export default Hero;
