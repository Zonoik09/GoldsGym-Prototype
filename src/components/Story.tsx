import heritageImage from "@/assets/history-heritage.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Story = () => {
  const scrollToLocations = () => {
    const element = document.querySelector('#locations');
    if (element) {
      const headerHeight = 80;
      const y = element.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section id="history" className="section-history bg-secondary py-24 px-4">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-6 font-bold text-gold">
            Our History
          </h2>
          <div className="mx-auto h-1 w-24 bg-gradient-gold" />
          <p className="lead mx-auto mt-8 max-w-3xl text-ivory">
            What began in 1965 as a weightlifting revolution became a global movement. 
            Gold's Gym shaped the culture of strength—then brought it home to Calgary.
          </p>
        </div>

        {/* Heritage Image */}
        <div className="mb-16 overflow-hidden rounded-2xl shadow-elegant">
          <img
            src={heritageImage}
            alt="Gold's Gym Heritage - Venice Beach 1965"
            className="h-96 w-full object-cover"
          />
        </div>

        {/* History Content */}
        <div className="mx-auto max-w-4xl space-y-12">
          {/* 1965 */}
          <div className="space-y-3">
            <h3 className="text-2xl font-bold text-gold">1965 — Roots of Strength</h3>
            <p className="text-lg text-ivory/90">
              A small Venice Beach gym ignites a worldwide passion for discipline, 
              resilience, and community.
            </p>
          </div>

          {/* Legacy Expands */}
          <div className="space-y-3">
            <h3 className="text-2xl font-bold text-gold">The Legacy Expands</h3>
            <p className="text-lg text-ivory/90">
              From classic bodybuilding icons to everyday athletes, our philosophy 
              stayed the same: strength is for everyone.
            </p>
          </div>

          {/* Calgary Chapter */}
          <div className="space-y-3">
            <h3 className="text-2xl font-bold text-gold">Calgary Chapter</h3>
            <p className="text-lg text-ivory/90">
              We brought that legacy to the Prairies—adapting the best of tradition 
              to the rhythm of this city: friendly, driven, and authentically strong.
            </p>
          </div>

          {/* Today & Tomorrow */}
          <div className="space-y-3">
            <h3 className="text-2xl font-bold text-gold">Today & Tomorrow</h3>
            <p className="text-lg text-ivory/90">
              Beyond weights and reps, we coach habits, mindset, and longevity—so 
              you can live stronger, longer.
            </p>
          </div>

          {/* Quote */}
          <blockquote className="my-8 border-l-4 border-gold pl-6 italic text-xl text-ivory">
            "Strength isn't just built in the gym—it's built in our community."
          </blockquote>

          {/* CTA */}
          <div className="pt-8 text-center">
            <Button 
              onClick={scrollToLocations}
              className="cta-history inline-flex items-center gap-2 rounded-xl bg-gold px-6 py-3 font-bold text-primary transition-smooth hover:shadow-gold"
            >
              Explore Our Legacy
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
