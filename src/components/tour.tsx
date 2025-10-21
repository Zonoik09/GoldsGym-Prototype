import React from "react";
import backgroundVideo from "@/assets/Legacy Video with Locations.mp4";
import buffaloRunTour from "@/assets/BuffaloRun tour.mp4";
import douglasdaleTour from "@/assets/Douglasdale tour.mp4";
import countryHillsTour from "@/assets/Gold's Gym Country Hills Walk Through Tour.mp4";
import northgateTour from "@/assets/Gold's Gym Northgate Walk Through Tour.mp4";
import villageSquareTour from "@/assets/villageSquare.mp4";

interface TourProps {
  locationId: string;
}

const Tour: React.FC<TourProps> = ({ locationId }) => {
  const locationKey = locationId.toLowerCase().replace(/\s+/g, "");

  // Asignar video según la ubicación
  const videos: Record<string, string> = {
    buffalorun: buffaloRunTour,
    douglasdale: douglasdaleTour,
    countryhills: countryHillsTour,
    northgate: northgateTour,
    villagesquare: villageSquareTour,
  };

  const videoSrc = videos[locationKey] || backgroundVideo;

  // Tours virtuales solo para Country Hills y Northgate
  const virtualTours: Record<string, string> = {
    countryhills: "https://my.matterport.com/show/?m=M4QJGhh3e2E",
    northgate: "https://3dspaces.canadianvirtualtours.com/en/tour/goldsgymnorthgate",
  };

  const virtualTourLink = virtualTours[locationKey];

  return (
    <section className="relative min-h-screen w-full bg-primary text-white py-20 overflow-hidden">
      {/* Background soft video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover opacity-10"
      >
        <source src={backgroundVideo} type="video/mp4" />
      </video>

      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center">
        <h2 className="text-5xl font-serif font-bold text-gold mb-10">
          {locationId.toUpperCase()} TOUR
        </h2>

        {/* Video principal */}
        <div className="w-full max-w-5xl rounded-2xl overflow-hidden shadow-lg mb-12">
          <video controls className="w-full h-auto rounded-2xl">
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Virtual Tour (solo si aplica) */}
        {virtualTourLink && (
          <div className="w-full max-w-5xl">
            <h3 className="text-3xl font-serif text-gold mb-6">
              Explore Our Virtual Tour
            </h3>

            <iframe
              src={virtualTourLink}
              allowFullScreen
              className="w-full h-[600px] rounded-2xl shadow-lg border border-gold/30"
            ></iframe>
          </div>
        )}
      </div>
    </section>
  );
};

export default Tour;
