import { useState, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

// Imagenes — reemplaza por tus assets reales
import heroImage from "@/assets/hyrox1.avif";
import tanningImg from "@/assets/hyrox1.avif";
import coffeeImg from "@/assets/hyrox1.avif";
import redlightImg from "@/assets/hyrox1.avif";
import towelsImg from "@/assets/hyrox1.avif";
import womenImg from "@/assets/hyrox1.avif";
import platinumImg from "@/assets/hyrox1.avif";
import boxImg from "@/assets/hyrox1.avif";
import basketballImg from "@/assets/hyrox1.avif";
import proteinImg from "@/assets/hyrox1.avif";

// 🪄 Importa automáticamente todas las imágenes del carrusel
const rawImages = import.meta.glob("@/assets/equip/*.png", { eager: true });

const images = Object.entries(rawImages)
  .sort(([a], [b]) => {
    const numA = parseInt(a.match(/\((\d+)\)\.png$/)?.[1] || "0", 10);
    const numB = parseInt(b.match(/\((\d+)\)\.png$/)?.[1] || "0", 10);
    return numA - numB;
  })
  .map(([_, mod]: any) => mod.default || mod);


const Services: React.FC = () => {
  const { location } = useParams<{ location: string }>();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Carrusel automático
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const generalServices = [
    {
      title: "Tanning",
      description: "Quick and safe tanning available directly on site.",
      image: tanningImg,
    },
    {
      title: "Free Coffee",
      description: "Unlimited free coffee before or after your workout.",
      image: coffeeImg,
    },
    {
      title: "Red Light Therapy",
      description: "Advanced red light technology for recovery and regeneration.",
      image: redlightImg,
    },
    {
      title: "Towel Service",
      description: "Fresh towels always available for your workout and shower.",
      image: towelsImg,
    },
    {
      title: "Women’s Exclusive Zone",
      description: "Private area designed specifically for women’s training.",
      image: womenImg,
    },
    {
      title: "Platinum Zone",
      description: "VIP space with exclusive machines and premium extras.",
      image: platinumImg,
    },
  ];

  const locationServices: Record<string, any[]> = {
    douglasdale: [
      {
        title: "Basketball Court",
        description: "Full-size basketball court for your cardio and team play.",
        image: basketballImg,
      },
    ],
    "village-square": [
      {
        title: "Protein Machine",
        description: "Automated protein shake station with customizable blends.",
        image: proteinImg,
      },
      {
        title: "Box Zone",
        description: "Functional boxing area for conditioning and technique.",
        image: boxImg,
      },
    ],
    northgate: [
      {
        title: "Basketball Court",
        description: "Full-size basketball court for your cardio and team play.",
        image: basketballImg,
      },
      {
        title: "Box Zone",
        description: "Functional boxing area for conditioning and technique.",
        image: boxImg,
      },
    ],
    "country-hills": [
      {
        title: "Basketball Court",
        description: "Full-size basketball court for your cardio and team play.",
        image: basketballImg,
      },
      {
        title: "Box Zone",
        description: "Functional boxing area for conditioning and technique.",
        image: boxImg,
      },
    ],
  };

  const allServices = useMemo(() => {
    const loc = (location || "").toLowerCase();
    const specific = locationServices[loc] || [];
    return [...generalServices, ...specific];
  }, [location]);

  return (
    <section className="relative min-h-screen w-full bg-primary text-white pt-24 pb-16 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 space-y-20">
        {/* HERO */}
        <div className="text-center mb-8">
          <h2 className="font-serif text-6xl font-bold text-gold mb-6 tracking-wide uppercase">
            Services — {location?.replace("-", " ") || "Gold's Gym"}
          </h2>
          <img
            src={heroImage}
            alt="Gold's Gym Services"
            className="w-full max-w-6xl mx-auto h-[400px] object-cover rounded-lg shadow-xl"
          />
        </div>

        {/* TODOS LOS SERVICIOS */}
        <div className="max-w-6xl mx-auto text-center space-y-16 mt-12">
          <h3 className="text-4xl font-bold text-gold mb-10">
            Facilities & Services
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {allServices.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>

        {/* EQUIPMENT CAROUSEL */}
        <div className="max-w-6xl mx-auto text-center mt-24">
          <h3 className="text-4xl font-bold text-gold mb-10">
            Gold’s Gym Equipment
          </h3>
          <p className="text-lg text-ivory/80 mb-8">
            Experience state-of-the-art machines, free weights, and specialized
            zones built for strength, endurance, and performance.
          </p>

          {/* Carrusel */}
<div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-2xl shadow-2xl bg-black">
  <div className="relative w-full h-[450px] flex items-center justify-center">
    <motion.div
      className="flex w-full h-full"
      animate={{ x: `-${currentSlide * 100}%` }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      style={{
        width: `${images.length * 100}%`,
      }}
    >
      {images.map((img, index) => (
        <div
          key={index}
          className="w-full h-[450px] flex-shrink-0 flex items-center justify-center"
        >
          <img
            src={img}
            alt={`Equipment ${index + 1}`}
            className="max-w-full max-h-full object-contain rounded-2xl"
          />
        </div>
      ))}
    </motion.div>
  </div>

  {/* Botones */}
  <button
    onClick={() =>
      setCurrentSlide((prev) => (prev - 1 + images.length) % images.length)
    }
    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-3xl px-3 py-1 rounded-full"
  >
    ‹
  </button>
  <button
    onClick={() =>
      setCurrentSlide((prev) => (prev + 1) % images.length)
    }
    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-3xl px-3 py-1 rounded-full"
  >
    ›
  </button>

  {/* Indicadores */}
  <div className="flex justify-center mt-6 gap-2">
    {images.map((_, index) => (
      <div
        key={index}
        onClick={() => setCurrentSlide(index)}
        className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
          index === currentSlide
            ? "bg-gold scale-110"
            : "bg-white/30 hover:bg-white/60"
        }`}
      />
    ))}
  </div>
</div>

        </div>

      </div>
    </section>
  );
};

const ServiceCard: React.FC<{ title: string; description: string; image: string }> = ({
  title,
  description,
  image,
}) => (
  <div className="relative overflow-hidden rounded-2xl shadow-lg group">
    <img
      src={image}
      alt={title}
      className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-500"
    />
    <div className="absolute inset-0 bg-black/60 flex flex-col justify-end p-6 opacity-100 group-hover:bg-black/40 transition">
      <h4 className="text-2xl font-bold text-gold mb-2">{title}</h4>
      <p className="text-sm text-ivory/90">{description}</p>
    </div>
  </div>
);

export default Services;
