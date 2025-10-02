import heritageImage from "@/assets/history-heritage.jpg";
import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";

const Story = () => {
  const scrollToLocations = () => {
    const element = document.querySelector('#locations');
    if (element) {
      const headerHeight = 80;
      const y = element.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true });

return (
    <section id="history" className="relative bg-primary py-24 px-4">
      {/* Gold divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-gold" />

      <div className="container mx-auto max-w-7xl">
        <div ref={containerRef} className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-5xl font-bold text-gold md:text-6xl lg:text-7xl">
              Our History
            </h2>

            <p className="text-xl text-ivory/90 leading-relaxed">
              From Venice Beach beginnings to a thriving Calgary community, our story blends legacy with relentless progress.
            </p>

            <div className="space-y-4 text-ivory/80">
              <p>
                In <span className="font-semibold text-goldLight">1965</span>, Joe Gold founded the first Gold's Gym in Venice, California. It quickly became a central hub for bodybuilders, earning iconic status through the documentary "Pumping Iron," which featured Arnold Schwarzenegger and cemented the brand's legendary reputation.
              </p>

              <p>
                Today, Gold's Gym is a global fitness powerhouse with nearly <span className="font-semibold text-goldLight">600 locations worldwide</span>. In Calgary, we've been part of the community for <span className="font-semibold text-goldLight">20 years</span>, led by franchise owner Kelly Maclachlan, uniting the brand's rich global heritage with a commitment to local excellence.
              </p>

              <p>
                Our <span className="font-semibold text-goldLight">Buffalo Run location</span> features a history wall that connects Calgary to the brand's origins, while our recognition as a <span className="font-semibold text-goldLight">HYROX Performance Center</span> brings advanced training and competition-style conditioning to the city.
              </p>
            </div>

            <div className="pt-4">
              <Button
                variant="hero"
                size="lg"
                onClick={scrollToLocations}
                className="min-w-[160px]"
              >
                Join Now
              </Button>
            </div>
          </motion.div>

          {/* Right column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <img
              src={heritageImage}
              alt="Historic Gold's Gym weight room showcasing the brand's rich heritage"
              className="h-full w-full object-cover"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(0,0,0,0.3)]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Story;
