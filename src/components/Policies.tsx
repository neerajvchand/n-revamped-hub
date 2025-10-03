import { Briefcase, GraduationCap, Heart, Home, Sprout, Scale } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Policies = () => {
  const policies = [
    {
      icon: Briefcase,
      title: "Economy & Jobs",
      description: "Creating employment opportunities for youth and supporting small businesses across Fiji.",
      points: [
        "Youth employment initiatives",
        "Small business support programs",
        "Agricultural sector reform",
      ],
    },
    {
      icon: GraduationCap,
      title: "Education",
      description: "Ensuring quality education is accessible to every Fijian child, from primary to tertiary level.",
      points: [
        "Free quality education",
        "Vocational training expansion",
        "Scholarship programs",
      ],
    },
    {
      icon: Heart,
      title: "Healthcare",
      description: "Universal healthcare access with focus on rural communities and affordable medicines.",
      points: [
        "Universal healthcare access",
        "Rural health services",
        "Affordable medicines",
      ],
    },
    {
      icon: Home,
      title: "Housing & Infrastructure",
      description: "Affordable housing programs and rural development to improve living standards.",
      points: [
        "Affordable housing programs",
        "Rural infrastructure development",
        "Clean water access",
      ],
    },
    {
      icon: Sprout,
      title: "Agriculture & Environment",
      description: "Supporting farmers while building climate resilience and sustainable development.",
      points: [
        "Farmer support programs",
        "Climate resilience initiatives",
        "Sustainable development",
      ],
    },
    {
      icon: Scale,
      title: "Social Justice",
      description: "Fighting discrimination and empowering all communities through fair governance.",
      points: [
        "Anti-discrimination laws",
        "Women's empowerment",
        "Indigenous rights protection",
      ],
    },
  ];

  return (
    <section id="policies" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-3xl font-bold text-foreground mb-4 md:text-4xl">
            Our Policies for Fiji
          </h2>
          <p className="text-lg text-muted-foreground">
            Clear, actionable solutions for the challenges facing Fiji today. Our policies put people first 
            and build a foundation for lasting prosperity.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12 animate-slide-up">
          {policies.map((policy, index) => (
            <Card key={index} className="shadow-card hover:shadow-hover transition-shadow">
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <policy.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{policy.title}</CardTitle>
                <CardDescription>{policy.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {policy.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{point}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="hero" size="lg">
            Read Full Policy Platform
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Policies;
