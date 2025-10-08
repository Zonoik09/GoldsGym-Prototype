import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, X } from "lucide-react";
import logo from "@/assets/logo_GoldsGym.png";
import videoSource from "@/assets/Legacy Video with Locations.mp4";

const Hero = () => {
  const [showVideoPlayer, setShowVideoPlayer] = useState(false);

  return (
    <>
      <section className="relative h-screen w-full overflow-hidden pt-20">
        <div className="absolute inset-0 top-20">
          <video autoPlay loop muted playsInline className="h-full w-full object-cover">
            <source src={videoSource} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
          <div className="max-w-4xl animate-fade-in-up space-y-6 fondo-letras">
            <img src={logo} className="w-32 h-auto mx-auto" />
            <h1 className="font-serif text-6xl font-bold tracking-wide text-primary-foreground md:text-7xl lg:text-8xl text-white">
              GOLD'S GYM CALGARY
            </h1>
            
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-16 bg-gold" />
              <p className="font-serif text-2x1 italic text-gold md:text-3xl">
                60 years of our history
              </p>
              <div className="h-px w-16 bg-gold" />
            </div>

            <div className="flex flex-col gap-4 pt-8 sm:flex-row sm:justify-center">
              <Button 
                variant="hero" 
                size="lg" 
                className="group"
                onClick={() => setShowVideoPlayer(true)}
              >
                Watch our history
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Video Player Modal */}
      {showVideoPlayer && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4">
          <button
            onClick={() => setShowVideoPlayer(false)}
            className="absolute top-4 right-4 text-white hover:text-gold transition-smooth"
            aria-label="Close video"
          >
            <X className="h-8 w-8" />
          </button>
          <div className="w-full max-w-6xl">
            <video controls autoPlay className="w-full h-auto">
              <source src={videoSource} type="video/mp4" />
            </video>
          </div>
        </div>
      )}
    </>
  );
}

export default Hero;
