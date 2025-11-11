import { useState } from "react";
import { X, Play } from "lucide-react";
import trainerVideo from "@/assets/Legacy Video with Locations.mp4";
import trainer1 from "@/assets/experience-training.jpg";
import trainer2 from "@/assets/experience-training.jpg";
import trainer3 from "@/assets/experience-training.jpg";
import trainer4 from "@/assets/experience-training.jpg";

interface PersonalTrainingPackagesProps {
  locationId: string;
}

interface Trainer {
  name: string;
  img: string;
}

const PersonalTrainingPackages: React.FC<PersonalTrainingPackagesProps> = ({ locationId }) => {
  const [selectedTrainer, setSelectedTrainer] = useState<Trainer | null>(null);
  const [showConsultationForm, setShowConsultationForm] = useState(false);

  const trainers = [
    { name: "ALEX RIVERA", img: trainer1 },
    { name: "MIA TORRES", img: trainer2 },
    { name: "DANIEL COLE", img: trainer3 },
    { name: "SOFIA MARTIN", img: trainer4 },
  ];

  const closeTrainerModal = () => setSelectedTrainer(null);
  const closeConsultation = () => setShowConsultationForm(false);

  return (
    <>
      <section className="relative min-h-screen w-full bg-primary text-white pt-24 pb-16 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 space-y-16">
          {/* HEADER */}
          <div className="text-center mb-8">
            <h2 className="font-serif text-5xl font-bold text-gold mb-6">
              Personal Training
            </h2>
          </div>

          {/* WHY HIRE A PERSONAL TRAINER */}
          <div className="flex flex-col md:flex-row items-center gap-8 bg-black/40 border border-gold rounded-2xl p-8">
            <div className="md:w-1/2">
              <h3 className="text-3xl font-bold text-gold mb-4">
                Why hire a personal trainer?
              </h3>
              <p className="text-ivory leading-relaxed">
                A personal trainer provides expert guidance, motivation, and accountability
                to help you reach your fitness goals faster and more safely. Whether you want
                to lose weight, build muscle, or improve your overall health, a trainer
                customizes every workout to your unique needs and ensures proper form for
                maximum results.
              </p>
            </div>
            <div className="md:w-1/2 relative rounded-xl overflow-hidden">
              <video
                src={trainerVideo}
                controls
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>

          {/* OUR TRAINERS */}
          <div className="text-center">
            <h3 className="text-4xl font-serif font-bold text-gold mb-10">
              Our Personal Trainers
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {trainers.map((t) => (
                <div
                  key={t.name}
                  onClick={() => setSelectedTrainer(t)}
                  className="flex flex-col items-center text-center bg-black/40 border border-gold rounded-2xl p-4 hover:bg-black/60 transition-all cursor-pointer"
                >
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-40 h-40 object-cover rounded-full mb-4 border-2 border-gold"
                  />
                  <p className="text-ivory font-semibold">{t.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MODAL FOR TRAINER DETAILS */}
      {selectedTrainer && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-[100] p-4">
          <button
            onClick={closeTrainerModal}
            className="absolute top-6 right-6 text-white hover:text-gold transition"
          >
            <X className="w-8 h-8" />
          </button>

          <div className="bg-black/70 border border-gold rounded-2xl p-10 w-full max-w-5xl flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2 text-center md:text-left">
              <h3 className="text-4xl font-bold text-gold mb-4">
                {selectedTrainer.name}
              </h3>
              <p className="text-ivory text-lg mb-6">
                Expert personal trainer ready to help you achieve your fitness goals.
              </p>
              <button 
                onClick={() => {
                  closeTrainerModal();
                  setShowConsultationForm(true);
                }}
                className="bg-gold text-primary font-bold py-3 px-8 rounded-full hover:bg-gold/80 transition"
              >
                Book Consultation
              </button>
            </div>

            <div className="md:w-1/2 relative rounded-xl overflow-hidden">
              <video
                src={trainerVideo}
                controls
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      )}

    </>
  );
};

export default PersonalTrainingPackages;
