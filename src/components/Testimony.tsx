import { motion } from "framer-motion";
import profile1 from "@/assets/experience-training.jpg";
import profile2 from "@/assets/experience-training.jpg";
import profile3 from "@/assets/experience-training.jpg";

const testimonies = [
  {
    image: profile1,
    name: "Sarah Thompson",
    quote: "Gold’s gave me discipline, confidence, and a community that lifts me higher every day.",
  },
  {
    image: profile2,
    name: "Michael Rodriguez",
    quote: "From exhaustion to empowerment — this space changed not only my body, but my mindset.",
  },
  {
    image: profile3,
    name: "Ava Chen",
    quote: "Every workout feels like a celebration of strength, purpose, and resilience.",
  },
];

const Testimony: React.FC = () => {
  return (
    <section className="relative w-full bg-primary text-white py-24 overflow-hidden">
      <div className="container mx-auto px-6 text-center space-y-16">
        {/* HEADER */}
        <div>
          <p className="text-sm tracking-widest uppercase text-gold font-semibold mb-3">
            ★★★★★ +250 Verified Reviews
          </p>
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-gold mb-4">
            Transformations That Inspire
          </h2>
          <p className="text-lg text-ivory/80 max-w-3xl mx-auto">
            Real stories of discipline, strength, and growth — from people who made the decision to rise.
          </p>
        </div>

        {/* TESTIMONY CARDS */}
        <div className="flex flex-col md:flex-row justify-center gap-10">
          {testimonies.map((t, index) => (
            <motion.div
              key={index}
              className="relative bg-black/40 border border-gold rounded-2xl p-8 max-w-sm mx-auto shadow-xl hover:bg-black/60 transition duration-500 flex flex-col items-center text-center"
              whileHover={{ y: -8 }}
            >
              <div className="w-24 h-24 mb-6 rounded-full overflow-hidden border-2 border-gold">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-2xl font-bold text-white">{t.name}</h4>
              <br />
              <p className="text-ivory/90 italic mb-6">“{t.quote}”</p>
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-gold/20 text-gold text-xs px-3 py-1 rounded-full uppercase tracking-widest">
                Member Spotlight
              </div>
              
            </motion.div>
          ))}
        </div>

        {/* CIERRE EMOCIONAL */}
        <div className="text-center mt-20 space-y-6">
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-white tracking-wide">
            This isn’t just fitness — it’s transformation.
          </h3>
          <p className="text-lg text-ivory/80">
            Join the movement. Elevate your body, mind, and purpose at Gold’s Gym Calgary.
          </p>
          <a
            href="/membership"
            className="inline-block mt-4 bg-gold text-primary font-bold text-lg py-4 px-10 rounded-full hover:bg-gold/80 transition"
          >
            I Want to Live This Experience
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimony;
