import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const MapSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="map" className="relative bg-gradient-luxury py-24 px-4">
      {/* Gold divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-gold" />

      <div className="container mx-auto max-w-7xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {/* Section Header */}
          <div className="text-center">
            <h2 className="mb-4 text-5xl font-bold text-gold md:text-6xl">
              Find Us in Calgary
            </h2>
            <div className="mx-auto h-1 w-24 bg-gradient-gold" />
            <p className="mx-auto mt-6 max-w-2xl text-lg text-ivory/90">
              Explore our locations and choose the one that fits your routine.
            </p>
          </div>

          {/* Map Embed */}
          <div className="overflow-hidden rounded-2xl border-2 border-gold/30 shadow-2xl">
            <iframe
              src="https://my.atlist.com/map/8d289406-1b81-4152-911f-d13e567a29fb?share=true"
              allow="geolocation"
              loading="lazy"
              width="100%"
              height="600"
              style={{ border: 0, borderRadius: "16px", background: "#0b0b0b" }}
              referrerPolicy="no-referrer-when-downgrade"
              title="Gold's Gym Calgary — Map"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MapSection;
