import { Scale, Heart, Users, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: Scale,
      title: "Equality",
      description: "Fighting for equal rights and opportunities for all Fijians, regardless of background or ethnicity.",
    },
    {
      icon: Heart,
      title: "Compassion",
      description: "Building a caring society where everyone has access to healthcare, education, and social support.",
    },
    {
      icon: Users,
      title: "Unity",
      description: "Bringing together all communities to build a stronger, more prosperous Fiji for everyone.",
    },
    {
      icon: Lightbulb,
      title: "Progress",
      description: "Innovative policies and forward-thinking solutions for Fiji's economic and social challenges.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-3xl font-bold text-foreground mb-4 md:text-4xl">
            Our Story, Your Future
          </h2>
          <p className="text-lg text-muted-foreground">
            Founded in 1960, the National Federation Party has been at the forefront of Fiji's struggle for democracy, 
            social justice, and equality. From our roots in the indentured labor movement to today's fight for a 
            better Fiji, we've never wavered in our commitment to every Fijian.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 animate-slide-up">
          {values.map((value, index) => (
            <Card 
              key={index} 
              className="border-none shadow-card hover:shadow-hover transition-shadow bg-card"
            >
              <CardContent className="pt-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
