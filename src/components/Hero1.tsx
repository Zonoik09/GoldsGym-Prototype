import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, X } from "lucide-react";
import logo from "@/assets/logo_GoldsGym.png";
import videoSource from "@/assets/Legacy Video with Locations.mp4";

const Hero1 = () => {
  const [showVideoPlayer, setShowVideoPlayer] = useState(false);
  const [currentVideo, setCurrentVideo] = useState<'history' | 'our-history'>('history');

  const openVideo = (type: 'history' | 'our-history') => {
    setCurrentVideo(type);
    setShowVideoPlayer(true);
  };

  return (
    <>
      <div className="pt-20">
        {/* First Section - History of Gold's Gym */}
        <section className="relative min-h-screen w-full overflow-hidden bg-primary">
          <div className="container mx-auto px-4 py-16">
            <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[calc(100vh-8rem)]">
              {/* Left Side - Content */}
              <div className="space-y-6 animate-fade-in">
                <img src={logo} className="w-32 h-auto" alt="Gold's Gym Logo" />
                <h2 className="font-serif text-5xl md:text-6xl font-bold text-white">
                  History of Gold's Gym
                </h2>
                <div className="flex items-center gap-4">
                  <div className="h-px w-16 bg-gold" />
                  <p className="font-serif text-xl italic text-gold">
                    60 years of excellence
                  </p>
                </div>
                <p className="text-ivory text-lg leading-relaxed">
                  Discover the legendary story of Gold's Gym and how it became the most iconic fitness brand in the world.
                </p>
                <Button
                  variant="hero"
                  size="lg"
                  className="group"
                  onClick={() => openVideo('history')}
                >
                  <Play className="mr-2 h-5 w-5" />
                  Watch Video
                </Button>
              </div>

              {/* Right Side - Video Preview */}
              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <video
                  muted
                  loop
                  autoPlay
                  playsInline
                  className="w-full h-auto"
                >
                  <source src={videoSource} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center group hover:bg-black/40 transition-all cursor-pointer"
                  onClick={() => openVideo('history')}
                >
                  <div className="bg-gold/90 rounded-full p-6 group-hover:scale-110 transition-transform">
                    <Play className="h-12 w-12 text-primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Second Section - Our History */}
        <section className="relative min-h-screen w-full overflow-hidden bg-primary-dark">
          <div className="container mx-auto px-4 py-16">
            <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[calc(100vh-8rem)]">
              {/* Left Side - Content */}
              <div className="space-y-6 animate-fade-in">
                <img src={logo} className="w-32 h-auto" alt="Gold's Gym Logo" />
                <h2 className="font-serif text-5xl md:text-6xl font-bold text-white">
                  Our History
                </h2>
                <div className="flex items-center gap-4">
                  <div className="h-px w-16 bg-gold" />
                  <p className="font-serif text-xl italic text-gold">
                    Calgary's fitness legacy
                  </p>
                </div>
                <p className="text-ivory text-lg leading-relaxed">
                  Experience the journey of Gold's Gym Calgary and how we've been transforming lives for six decades.
                </p>
                <Button
                  variant="hero"
                  size="lg"
                  className="group"
                  onClick={() => openVideo('our-history')}
                >
                  <Play className="mr-2 h-5 w-5" />
                  Watch Video
                </Button>
              </div>

              {/* Right Side - Video Preview */}
              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <video
                  muted
                  loop
                  autoPlay
                  playsInline
                  className="w-full h-auto"
                >
                  <source src={videoSource} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center group hover:bg-black/40 transition-all cursor-pointer"
                  onClick={() => openVideo('our-history')}
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
                {currentVideo === 'history' ? 'History of Gold\'s Gym' : 'Our History'}
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

export default Hero1;
