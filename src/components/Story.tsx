import heritageImage from "@/assets/history-heritage.jpg";

const Story = () => {
  const milestones = [
    {
      year: "1965",
      title: "The Beginning",
      description: "Joe Gold opens the original Gold's Gym in Venice Beach, California. A mecca for bodybuilding legends.",
    },
    {
      year: "1977",
      title: "Pumping Iron",
      description: "Gold's Gym gains worldwide fame through the documentary featuring Arnold Schwarzenegger.",
    },
    {
      year: "1990s",
      title: "Global Expansion",
      description: "Gold's Gym becomes an international brand, bringing world-class fitness to communities worldwide.",
    },
    {
      year: "2024",
      title: "Calgary Excellence",
      description: "Five premium locations serve Calgary with the legendary Gold's Gym experience and community.",
    },
  ];

  return (
    <section id="story" className="bg-secondary py-24 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-5xl font-bold text-gold md:text-6xl">
            Our Story
          </h2>
          <div className="mx-auto h-1 w-24 bg-gradient-gold" />
          <p className="mx-auto mt-6 max-w-2xl text-lg text-ivory">
            From Venice Beach to Calgary, a legacy of strength, dedication, and community 
            spanning nearly six decades.
          </p>
        </div>

        {/* Heritage Image */}
        <div className="mb-20 overflow-hidden rounded-2xl shadow-elegant">
          <img
            src={heritageImage}
            alt="Gold's Gym Heritage - Venice Beach 1965"
            className="h-96 w-full object-cover"
          />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 hidden h-full w-0.5 -translate-x-1/2 bg-gradient-to-b from-gold via-gold-muted to-gold md:block" />

          <div className="space-y-16">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.year}
                className={`relative flex flex-col items-center gap-8 md:flex-row ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div
                  className={`flex-1 animate-slide-in ${
                    index % 2 === 0 ? "md:text-right" : "md:text-left"
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="rounded-xl bg-card p-8 shadow-soft transition-smooth hover:shadow-gold">
                    <span className="inline-block rounded-full bg-gradient-gold px-4 py-1 text-sm font-semibold text-primary">
                      {milestone.year}
                    </span>
                    <h3 className="mt-4 text-2xl font-bold text-foreground">
                      {milestone.title}
                    </h3>
                    <p className="mt-3 text-foreground/80">
                      {milestone.description}
                    </p>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="relative z-10 hidden h-4 w-4 rounded-full bg-gold shadow-gold md:block" />

                {/* Spacer */}
                <div className="hidden flex-1 md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
