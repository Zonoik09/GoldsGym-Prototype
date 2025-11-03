import { useState } from "react";
import hyroxImage from "@/assets/The-Competition.avif";
import hyrox1Image from "@/assets/hyrox1.avif";
import hyrox2Image from "@/assets/hyrox2.avif";

const Hyrox: React.FC = () => {
  return (
    <>
      <section className="relative min-h-screen w-full bg-primary text-white pt-24 pb-16 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 space-y-16">
          
          {/* TÍTULO PRINCIPAL */}
          <div className="text-center mb-8">
            <h2 className="font-serif text-6xl font-bold text-gold mb-8 tracking-wide">
              HYROX
            </h2>
            <img
              src={hyroxImage}
              alt="HYROX Competition"
              className="w-full max-w-6xl mx-auto h-auto object-cover rounded-lg shadow-lg scale-90"
            />
          </div>

          {/* DESCRIPCIÓN DEL PROGRAMA */}
          <div className="max-w-4xl mx-auto text-left leading-relaxed space-y-6">
            <p className="text-2xl font-semibold text-gold mb-4">
              Your HYROX Journey Starts Here.
            </p>
            <p className="text-lg text-ivory/90">
              As an official <span className="text-gold font-semibold">HYROX Affiliated Gym</span>, 
              Gold’s Gym Calgary is proud to be your home base for world-class HYROX training. 
              Whether you're a seasoned competitor or just discovering the sport, our 
              HYROX Training Club offers everything you need to prepare, perform, and progress.
            </p>
            <p className="text-lg text-ivory/90">
              From specialized equipment and expertly designed circuits to supportive coaching 
              and a strong community, we’re here to guide you every step of the way. 
              Train in a space built for functional fitness, endurance, and power — 
              and do it alongside others who share your drive.
            </p>
            <p className="text-lg text-ivory/90">
              Join the movement. Unleash your potential. Train the HYROX way at 
              <span className="text-gold font-semibold"> Gold’s Gym Calgary</span>.
            </p>
            <a
              href="https://hyrox.com/"
              className="mt-10 inline-block bg-gold text-primary py-3 px-8 rounded-full font-bold hover:bg-gold/80 transition"
            >
              Visit HYROX Website
            </a>
          </div>

{/* CUADROS DE PROGRAMAS EN COLUMNA */}
<div className="flex flex-col gap-12 mt-20 scale-90">
  {/* Primer cuadro */}
  <div className="bg-black/40 border border-gold rounded-2xl p-10 flex flex-col md:flex-row items-center gap-10 shadow-xl">
    <div className="text-center md:text-left md:w-1/2 space-y-6">
      <h3 className="text-4xl font-bold text-white mb-2">
        HYROX Classes and Programming
      </h3>

      <p className="text-gold text-5xl font-extrabold tracking-wide text-center mb-6">
        PLATINUM HYROX
      </p>

      <p className="text-ivory text-lg mb-4">What you get:</p>
      <ul className="text-ivory mb-8 space-y-3 text-xl">
        <li>• Unlimited Access to HYROX Classes</li>
        <li>• HYROX Programs to Follow</li>
        <li>• Strategies on performing in a HYROX competition</li>
      </ul>

      <div className="flex justify-center">
        <button className="bg-gold text-primary py-3 px-10 rounded-full font-bold text-xl hover:bg-gold/80 transition">
          Let's HYROX
        </button>
      </div>
    </div>

    <div className="md:w-1/2">
      <img
        src={hyrox1Image}
        alt="HYROX Classes"
        className="w-full h-auto object-cover rounded-xl shadow-lg"
      />
    </div>
  </div>

  {/* Segundo cuadro */}
  <div className="bg-black/40 border border-gold rounded-2xl p-10 flex flex-col md:flex-row items-center gap-10 shadow-xl">
    <div className="md:w-1/2">
      <img
        src={hyrox2Image}
        alt="Advanced HYROX"
        className="w-full h-auto object-cover rounded-xl shadow-lg"
      />
    </div>

    <div className="text-center md:text-left md:w-1/2 space-y-6">
      <h3 className="text-4xl font-bold text-white mb-2">Advanced HYROX</h3>

      <p className="text-gold text-5xl font-extrabold tracking-wide text-center mb-6">
        DIAMOND MEMBERSHIP
      </p>

      <p className="text-ivory text-lg mb-4">
        If you'd like this program to include Nutrition and supplement programs, 
        you'll love the Diamond Membership that also includes:
      </p>

      <ul className="text-ivory mb-8 space-y-3 text-xl">
        <li>• Custom Nutrition Plans</li>
        <li>• Habit Tracking</li>
        <li>• Stretching and Mobility Routines</li>
        <li>• Unlimited Access to HYROX Classes</li>
        <li>• HYROX Programs to Follow</li>
        <li>• Strategies on performing in a HYROX competition</li>
      </ul>

      <div className="flex justify-center">
        <button className="bg-gold text-primary py-3 px-10 rounded-full font-bold text-xl hover:bg-gold/80 transition">
          Be Diamond
        </button>
      </div>
    </div>
  </div>
</div>


          {/* TÍTULO FINAL */}
          <div className="text-center mt-24">
            <h3 className="text-6xl font-serif font-bold text-white tracking-wide">
              OUR SPORT IS HYROX
            </h3>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hyrox;
