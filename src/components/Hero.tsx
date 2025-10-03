import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Heart, Vote } from "lucide-react";
import nfpLeaders from "@/assets/nfp-leaders.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-hero">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/30" />
      
      {/* Leadership image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: `url(${nfpLeaders})` }}
      />

      <div className="container relative mx-auto px-4 py-20 md:py-32">
        <div className="max-w-3xl animate-fade-in">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-accent/20 px-4 py-2 backdrop-blur-sm">
            <Vote className="h-4 w-4 text-primary-foreground" />
            <span className="text-sm font-semibold text-primary-foreground">
              Election 2025 - Vote for Change
            </span>
          </div>

          <h1 className="mb-6 text-4xl font-bold leading-tight text-primary-foreground md:text-6xl">
            Uniting Fiji for a Brighter Future
          </h1>
          
          <p className="mb-8 text-lg text-primary-foreground/90 md:text-xl">
            For 75 years, the National Federation Party has fought for equality, social justice, and compassion. 
            Join us as we build a Fiji where every voice matters and every community thrives.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button variant="cta" size="lg" className="group">
              Join the Movement
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="secondary" size="lg">
              Our Policies
            </Button>
            <Button variant="outline" size="lg" className="border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20">
              Donate Now
            </Button>
          </div>

          {/* Quick stats */}
          <div className="mt-12 grid grid-cols-3 gap-6 border-t border-primary-foreground/20 pt-8">
            <div className="text-center">
              <div className="mb-2 flex justify-center">
                <Users className="h-8 w-8 text-accent" />
              </div>
              <div className="text-2xl font-bold text-primary-foreground">75+</div>
              <div className="text-sm text-primary-foreground/80">Years of Service</div>
            </div>
            <div className="text-center">
              <div className="mb-2 flex justify-center">
                <Heart className="h-8 w-8 text-accent" />
              </div>
              <div className="text-2xl font-bold text-primary-foreground">All</div>
              <div className="text-sm text-primary-foreground/80">Communities United</div>
            </div>
            <div className="text-center">
              <div className="mb-2 flex justify-center">
                <Vote className="h-8 w-8 text-accent" />
              </div>
              <div className="text-2xl font-bold text-primary-foreground">Your</div>
              <div className="text-sm text-primary-foreground/80">Voice Matters</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
