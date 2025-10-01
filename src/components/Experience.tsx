import { Button } from "@/components/ui/button";
import { Dumbbell, Users, Award, Heart } from "lucide-react";
import trainingImage from "@/assets/experience-training.jpg";
import communityImage from "@/assets/experience-community.jpg";

const Experience = () => {
  const features = [
    {
      icon: Dumbbell,
      title: "Premium Training",
      description: "World-class equipment and certified personal trainers dedicated to your success.",
    },
    {
      icon: Users,
      title: "Vibrant Community",
      description: "Join a supportive family of fitness enthusiasts who inspire and motivate.",
    },
    {
      icon: Award,
      title: "Proven Results",
      description: "Nearly 60 years of transforming lives through fitness excellence.",
    },
    {
      icon: Heart,
      title: "Holistic Wellness",
      description: "Beyond fitness—nutrition, recovery, and lifestyle coaching for complete well-being.",
    },
  ];

  return (
    <section id="experience" className="bg-background py-24 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-20 text-center">
          <h2 className="mb-4 text-5xl font-bold text-primary md:text-6xl">
            The Gold's Experience
          </h2>
          <div className="mx-auto h-1 w-24 bg-gradient-gold" />
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Where luxury meets performance. Experience fitness reimagined with 
            boutique sophistication and legendary Gold's Gym excellence.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mb-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group rounded-xl bg-card p-8 text-center shadow-soft transition-smooth hover:-translate-y-2 hover:shadow-gold"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-gold shadow-gold">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-primary">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Lifestyle Images */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Training */}
          <div className="group relative overflow-hidden rounded-2xl shadow-elegant">
            <img
              src={trainingImage}
              alt="Personal Training at Gold's Gym Calgary"
              className="h-96 w-full object-cover transition-smooth group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-primary-foreground">
              <h3 className="mb-2 text-3xl font-bold">Personal Training</h3>
              <p className="mb-4 text-ivory">
                One-on-one coaching tailored to your goals in our luxury training spaces.
              </p>
              <Button variant="heroOutline" size="sm">
                Learn More
              </Button>
            </div>
          </div>

          {/* Community */}
          <div className="group relative overflow-hidden rounded-2xl shadow-elegant">
            <img
              src={communityImage}
              alt="Community at Gold's Gym Calgary"
              className="h-96 w-full object-cover transition-smooth group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-primary-foreground">
              <h3 className="mb-2 text-3xl font-bold">Our Community</h3>
              <p className="mb-4 text-ivory">
                Connect with like-minded individuals in an atmosphere of mutual support.
              </p>
              <Button variant="heroOutline" size="sm">
                Join Us
              </Button>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 rounded-2xl bg-gradient-luxury p-12 text-center shadow-elegant">
          <h3 className="mb-4 text-4xl font-bold text-primary-foreground">
            Ready to Begin Your Journey?
          </h3>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-ivory">
            Experience the perfect blend of heritage, luxury, and community. 
            Your transformation starts at Gold's Gym Calgary.
          </p>
          <Button variant="hero" size="lg">
            Start Your Membership
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Experience;
