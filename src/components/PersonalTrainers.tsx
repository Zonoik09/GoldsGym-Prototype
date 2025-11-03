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

const PersonalTrainingPackages: React.FC<PersonalTrainingPackagesProps> = ({ locationId }) => {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  const [showConsultationForm, setShowConsultationForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    location: locationId,
  });

  const packages = [
    { sessions: 12, price: 800 },
    { sessions: 24, price: 1600 },
    { sessions: 36, price: 2400 },
    { sessions: 40, price: 2667 },
  ];

  const trainers = [
    { name: "ALEX RIVERA", img: trainer1 },
    { name: "MIA TORRES", img: trainer2 },
    { name: "DANIEL COLE", img: trainer3 },
    { name: "SOFIA MARTIN", img: trainer4 },
  ];

  const handlePackageClick = (sessions: number) => setSelectedPackage(String(sessions));
  const closeModal = () => setSelectedPackage(null);
  const closeConsultation = () => setShowConsultationForm(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Aquí puedes enviar los datos a tu backend o API
    setShowConsultationForm(false);
  };

  return (
    <>
      <section className="relative min-h-screen w-full bg-primary text-white pt-24 pb-16 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 space-y-16">
          {/* HEADER */}
          <div className="text-center mb-8">
            <h2 className="font-serif text-5xl font-bold text-gold mb-6">
              Personal Training Package
            </h2>

            {/* PACKAGE BUTTONS */}
            <div className="flex flex-wrap justify-center gap-6">
                <button
                  onClick={() => setShowConsultationForm(true)}
                  className="bg-black/50 border border-gold rounded-full px-6 py-3 hover:bg-gold hover:text-primary transition-all font-semibold">
                Free Consultation
              </button>
              {packages.map((pkg) => (
                <button
                  key={pkg.sessions}
                  onClick={() => handlePackageClick(pkg.sessions)}
                  className="bg-black/50 border border-gold rounded-full px-6 py-3 hover:bg-gold hover:text-primary transition-all font-semibold"
                >
                  {pkg.sessions} Sessions - ${pkg.price}
                </button>
              ))}
            </div>
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
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover opacity-90"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                <Play className="text-gold w-14 h-14 opacity-80" />
              </div>
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
                  className="flex flex-col items-center text-center bg-black/40 border border-gold rounded-2xl p-4 hover:bg-black/60 transition-all"
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

      {/* MODAL FOR SESSION OPTIONS */}
      {selectedPackage && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-[100] p-4">
          <button
            onClick={closeModal}
            className="absolute top-6 right-6 text-white hover:text-gold transition"
          >
            <X className="w-8 h-8" />
          </button>

          <div className="bg-black/70 border border-gold rounded-2xl p-10 w-full max-w-3xl text-center">
            <h3 className="text-3xl font-bold text-gold mb-6">
              {selectedPackage} Sessions
            </h3>

            <div className="grid md:grid-cols-3 gap-6">
              {[{ times: 1, factor: 1 }, { times: 2, factor: 1.2 }, { times: 3, factor: 1.4 }].map(
                (opt) => (
                  <div
                    key={opt.times}
                    className="bg-black/50 border border-gold rounded-2xl p-6 hover:bg-black/70 transition-all"
                  >
                    <h4 className="text-2xl font-bold text-gold mb-2">{opt.times}x / Week</h4>
                    <p className="text-ivory text-xl mb-4 font-semibold">
                      $
                      {(
                        (packages.find((p) => p.sessions === Number(selectedPackage))?.price || 0) *
                        opt.factor
                      ).toFixed(0)}
                    </p>
                    <button className="bg-gold text-primary font-bold py-2 px-6 rounded-full hover:bg-gold/80 transition">
                      Hire Now
                    </button>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      )}

      {/* FREE CONSULTATION FORM MODAL */}
      {showConsultationForm && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-[100] p-4">
          <button
            onClick={closeConsultation}
            className="absolute top-6 right-6 text-white hover:text-gold transition"
          >
            <X className="w-8 h-8" />
          </button>

          <form
            onSubmit={handleSubmit}
            className="bg-black/70 border border-gold rounded-2xl p-10 w-full max-w-lg space-y-6"
          >
            <h3 className="text-3xl font-bold text-gold text-center mb-4">
              Free Consultation
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="First Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-black/40 border border-gold rounded-lg p-3 text-white placeholder:text-ivory/60"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="bg-black/40 border border-gold rounded-lg p-3 text-white placeholder:text-ivory/60"
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-black/40 border border-gold rounded-lg p-3 w-full text-white placeholder:text-ivory/60"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="bg-black/40 border border-gold rounded-lg p-3 w-full text-white placeholder:text-ivory/60"
            />

            <input
              type="text"
              name="location"
              value={formData.location}
              readOnly
              className="bg-black/40 border border-gold rounded-lg p-3 w-full text-white opacity-70"
            />

            <button
              type="submit"
              className="bg-gold text-primary font-bold py-3 px-8 rounded-full hover:bg-gold/80 w-full transition-all"
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default PersonalTrainingPackages;
