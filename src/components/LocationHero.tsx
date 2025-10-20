import { useState } from "react";
import { Play, X } from "lucide-react";
import logo from "@/assets/logo_GoldsGym.png";
import videoSource from "@/assets/Legacy Video with Locations.mp4";

interface LocationHeroProps {
  locationName: string;
  locationId: string;
}

const LocationHero = ({ locationName, locationId }: LocationHeroProps) => {
  const [showVideoPlayer, setShowVideoPlayer] = useState(false);
  const [currentVideo, setCurrentVideo] = useState<'first' | 'second'>('first');

  const openVideo = (type: 'first' | 'second') => {
    setCurrentVideo(type);
    setShowVideoPlayer(true);
  };

  return (
    <>
      <div className="pt-20">
        {/* First Section */}
        <section id={locationId} className="relative min-h-screen w-full overflow-hidden bg-primary">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="absolute inset-0 h-full w-full object-cover opacity-10"
          >
            <source src={videoSource} type="video/mp4" />
          </video>
          
          <div className="container mx-auto px-4 py-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-8rem)]">
              
              <div className="space-y-6 animate-fade-in">
                <h2 className="font-serif text-5xl md:text-6xl font-bold text-white">
                  {locationName}
                </h2>
                
                <div className="flex items-center gap-4">
                  <div className="h-px w-16 bg-gold" />
                  <p className="font-serif text-xl italic text-gold">
                    60 years of excellence
                  </p>
                </div>
                
                <p className="text-ivory text-lg leading-relaxed">
                  Discover our legendary location and how we've been transforming lives in Calgary.
                </p>
              </div>

              <div className="relative rounded-lg overflow-hidden shadow-2xl transform scale-110">
                <video
                  muted
                  loop
                  autoPlay
                  playsInline
                  className="w-full h-auto"
                >
                  <source src={videoSource} type="video/mp4" />
                </video>
                
                <div 
                  className="absolute inset-0 bg-black/20 flex items-center justify-center group hover:bg-black/40 transition-all cursor-pointer"
                  onClick={() => openVideo('first')}
                >
                  <div className="bg-gold/90 rounded-full p-6 group-hover:scale-110 transition-transform">
                    <Play className="h-12 w-12 text-primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gold Divider */}
        <div className="w-full bg-primary">
          <div className="container mx-auto">
            <div className="h-px bg-[#FFD700] w-full my-0" />
          </div>
        </div>

        {/* Second Section */}
        <section className="relative min-h-screen w-full overflow-hidden bg-primary">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="absolute inset-0 h-full w-full object-cover opacity-60"
          >
            <source src={videoSource} type="video/mp4" />
          </video>
          
          <div className="container mx-auto px-4 py-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-8rem)]">
              
              <div className="space-y-6 animate-fade-in">
                <h2 className="font-serif text-5xl md:text-6xl font-bold text-white">
                  Our Legacy
                </h2>
                
                <div className="flex items-center gap-4">
                  <div className="h-px w-16 bg-gold" />
                  <p className="font-serif text-xl italic text-gold">
                    Calgary's fitness destination
                  </p>
                </div>
                
                <p className="text-ivory text-lg leading-relaxed">
                  Experience the journey of Gold's Gym and how we've been the premier fitness destination for six decades.
                </p>
              </div>

              <div className="relative rounded-lg overflow-hidden shadow-2xl transform scale-110">
                <video
                  muted
                  loop
                  autoPlay
                  playsInline
                  className="w-full h-auto"
                >
                  <source src={videoSource} type="video/mp4" />
                </video>
                
                <div 
                  className="absolute inset-0 bg-black/20 flex items-center justify-center group hover:bg-black/40 transition-all cursor-pointer"
                  onClick={() => openVideo('second')}
                >
                  <div className="bg-gold/90 rounded-full p-6 group-hover:scale-110 transition-transform">
                    <Play className="h-12 w-12 text-primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

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
            <div className="mb-4 text-center">
              <h3 className="text-2xl font-bold text-white">
                {currentVideo === 'first' ? locationName : 'Our Legacy'}
              </h3>
            </div>
            
            <video controls autoPlay className="w-full h-auto">
              <source src={videoSource} type="video/mp4" />
            </video>
          </div>
        </div>
      )}
    </>
  );
};

export default LocationHero;
