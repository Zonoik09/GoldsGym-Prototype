import { useState } from "react";
import { Play, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import goldVideo from "@/assets/Legacy Video with Locations.mp4";
import platinumVideo from "@/assets/Legacy Video with Locations.mp4";
import diamondVideo from "@/assets/Legacy Video with Locations.mp4";
import backgroundVideo from "@/assets/Legacy Video with Locations.mp4";

const MembershipPlans = () => {
  const [showVideoPlayer, setShowVideoPlayer] = useState<null | string>(null);
  const navigate = useNavigate();

  const plans = [
    {
      name: "GOLD SUBSCRIPTION",
      color: "text-gold",
      border: "border-gold",
      video: goldVideo,
      planType: "golds",
      features: [
        "STATE-OF-THE-ART EQUIPMENT",
        "ACCESS TO GROUP FITNESS CLASSES",
        "LOCKER ROOM ACCESS",
        "SAUNA ROOM",
      ],
    },
    {
      name: "PLATINUM SUBSCRIPTION",
      color: "text-gray-300",
      border: "border-gray-400",
      video: platinumVideo,
      planType: "platinum",
      features: [
        "ALL GOLD BENEFITS",
        "UNLIMITED GROUP FITNESS CLASSES",
        "WOMEN ONLY SECTION",
        "BASKETBALL COURT ACCESS",
        "STEAM ROOM",
      ],
    },
    {
      name: "DIAMOND SUBSCRIPTION",
      color: "text-blue-300",
      border: "border-blue-400",
      video: diamondVideo,
      planType: "diamond",
      features: [
        "ALL PLATINUM BENEFITS",
        "PERSONAL TRAINER SESSIONS",
        "BOXING AREA",
        "VIP LOUNGE ACCESS",
        "PRIORITY BOOKING",
      ],
    },
  ];

  // Función para navegar a PaymentPlans con el tipo de plan seleccionado
  const handleJoin = (planType: string) => {
    navigate(`/payment-plans?plan=${planType}`);
  };

  return (
    <>
      <section className="relative min-h-screen w-full overflow-hidden bg-primary text-white pt-24 pb-16">
        {/* Background video for atmosphere */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-10"
        >
          <source src={backgroundVideo} type="video/mp4" />
        </video>

        <div className="relative container mx-auto px-6 z-10">
          <div className="text-center mb-12">
            <h2 className="font-serif text-5xl font-bold text-gold mb-4">
              MEMBERSHIP PLANS
            </h2>
            <p className="text-lg text-ivory">
              Choose the perfect plan for your fitness journey.
            </p>
          </div>

          {/* Horizontal Cards */}
          <div className="flex flex-col space-y-10">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`flex flex-col md:flex-row bg-black/50 ${plan.border} border rounded-2xl overflow-hidden shadow-lg hover:bg-black/70 transition-all`}
              >
                {/* Video Section */}
                <div className="md:w-1/2 relative cursor-pointer group">
                  <video
                    muted
                    loop
                    autoPlay
                    playsInline
                    className="h-64 md:h-full w-full object-cover opacity-80 group-hover:opacity-100 transition"
                  >
                    <source src={plan.video} type="video/mp4" />
                  </video>
                  <div
                    className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition-all"
                    onClick={() => setShowVideoPlayer(plan.video)}
                  >
                    <div className="bg-gold/90 rounded-full p-4 group-hover:scale-110 transition-transform">
                      <Play className="h-10 w-10 text-primary" />
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="md:w-1/2 p-8 flex flex-col justify-center">
                  <h3 className={`text-3xl font-bold mb-4 ${plan.color}`}>
                    {plan.name}
                  </h3>

                  <ul className="space-y-2 text-ivory mb-6 text-left">
                    {plan.features.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-gold">•</span> {item}
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => handleJoin(plan.planType)}
                    className="self-start bg-gold text-primary font-bold py-2 px-6 rounded-full hover:bg-gold/80 transition"
                  >
                    Join Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {showVideoPlayer && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4">
          <button
            onClick={() => setShowVideoPlayer(null)}
            className="absolute top-4 right-4 text-white hover:text-gold transition"
            aria-label="Close video"
          >
            <X className="h-8 w-8" />
          </button>

          <div className="w-full max-w-6xl">
            <video controls autoPlay className="w-full h-auto rounded-xl">
              <source src={showVideoPlayer} type="video/mp4" />
            </video>
          </div>
        </div>
      )}
    </>
  );
};

export default MembershipPlans;
