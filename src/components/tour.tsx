import React from "react";
import backgroundVideo from "@/assets/Legacy Video with Locations.mp4";
import buffaloRunTour from "@/assets/BuffaloRun tour.mp4";
import douglasdaleTour from "@/assets/Douglasdale tour.mp4";
import countryHillsTour from "@/assets/Golds Gym Country Hills Walk Through Tour.mp4";
import northgateTour from "@/assets/Golds Gym Northgate Walk Through Tour.mp4";
import villageSquareTour from "@/assets/villageSquare.mp4";

interface TourProps {
  locationId: string;
}

const Tour: React.FC<TourProps> = ({ locationId }) => {
  const locationKey = locationId.toLowerCase().replace(/\s+/g, "");

  const videos: Record<string, string> = {
    "buffalo-run": buffaloRunTour,
    douglasdale: douglasdaleTour,
    countryhills: countryHillsTour,
    northgate: northgateTour,
    "village-square": villageSquareTour,
  };

  const videoSrc = videos[locationKey] || backgroundVideo;


  // Tours virtuales
  const virtualTours: Record<string, string> = {
    countryhills: "https://my.matterport.com/show/?m=M4QJGhh3e2E",
    northgate:
      "https://3dspaces.canadianvirtualtours.com/en/tour/goldsgymnorthgate",
  };

  const virtualTourLink = virtualTours[locationKey];

  return (
    <section className="relative min-h-screen w-full bg-primary text-white py-20 overflow-hidden">

      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center">
        {/* Título principal */}
        <h2 className="text-5xl font-serif font-bold text-gold mb-10">
          {locationId.toUpperCase()} TOUR
        </h2>

        {/* Video principal */}
        <div className="w-full max-w-5xl rounded-2xl overflow-hidden shadow-xl mb-12 border border-gold/30">
          <video controls className="w-full h-auto rounded-2xl">
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Virtual Tour (si aplica) */}
        {virtualTourLink && (
          <div className="w-full max-w-5xl mb-20">
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

        {/* Book a Tour Section */}
        <div className="w-full max-w-3xl bg-black/40 border border-gold rounded-2xl p-10 shadow-2xl text-left">
          <h3 className="text-3xl font-serif text-gold text-center mb-6">
            Book a Tour
          </h3>
          <p className="text-center text-ivory mb-8 text-lg leading-relaxed">
            Come in and tour the facilities before you sign up. Talk to one of our
            membership consultants for the best deal that you can get.
          </p>

          {/* Formulario */}
          <form className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="First Name"
                className="w-full p-3 rounded-lg bg-primary/40 border border-gold/30 text-white placeholder-ivory/50 focus:outline-none focus:border-gold"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full p-3 rounded-lg bg-primary/40 border border-gold/30 text-white placeholder-ivory/50 focus:outline-none focus:border-gold"
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 rounded-lg bg-primary/40 border border-gold/30 text-white placeholder-ivory/50 focus:outline-none focus:border-gold"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full p-3 rounded-lg bg-primary/40 border border-gold/30 text-white placeholder-ivory/50 focus:outline-none focus:border-gold"
            />
            <input
              type="text"
              placeholder="Address"
              className="w-full p-3 rounded-lg bg-primary/40 border border-gold/30 text-white placeholder-ivory/50 focus:outline-none focus:border-gold"
            />

            <button
              type="submit"
              className="mt-4 w-full bg-gold text-black font-bold text-lg py-3 rounded-xl hover:bg-gold/80 transition"
            >
              Submit Request
            </button>
          </form>

          {/* Texto legal */}
          <p className="text-xs text-ivory/60 mt-8 leading-relaxed">
            *New customers only. Valid ID required. At participating locations only.
            Terms and conditions may vary.
            <br />
            <br />
            By providing your contact information, you consent to be contacted by
            Gold’s Gym Calgary through email, telephone, text message, or by other
            means, some of which may be from an automated service, as well as any
            other communication. For mobile messaging, message and data rates apply
            and consent is not required to become a member. Privacy Policy can be
            found at{" "}
            <a
              href="https://www.goldsgymyyc.com/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-gold hover:text-gold/80"
            >
              https://www.goldsgymyyc.com/privacy-policy
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default Tour;
