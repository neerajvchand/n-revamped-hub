import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HandHeart, DollarSign, UserPlus, Calendar } from "lucide-react";

const GetInvolved = () => {
  const ways = [
    {
      icon: UserPlus,
      title: "Volunteer",
      description: "Join our grassroots movement. Help with door-to-door canvassing, phone banking, or event organization.",
      cta: "Sign Up to Volunteer",
      variant: "default" as const,
    },
    {
      icon: DollarSign,
      title: "Donate",
      description: "Your contribution powers our campaign. Every dollar helps us reach more voters and spread our message.",
      cta: "Donate Now",
      variant: "cta" as const,
    },
    {
      icon: HandHeart,
      title: "Become a Member",
      description: "Join thousands of Fijians committed to positive change. Get your digital membership card and member benefits.",
      cta: "Join NFP",
      variant: "hero" as const,
    },
    {
      icon: Calendar,
      title: "Attend Events",
      description: "Meet candidates, attend town halls, and participate in community meetings across all constituencies.",
      cta: "View Events",
      variant: "secondary" as const,
    },
  ];

  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-black/40" />
      
      <div className="container relative mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4 md:text-4xl">
            Get Involved
          </h2>
          <p className="text-lg text-primary-foreground/90">
            Every voice matters. Every action counts. Join us in building the Fiji we all deserve.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 animate-slide-up">
          {ways.map((way, index) => (
            <Card key={index} className="bg-card/95 backdrop-blur-sm border-none shadow-card">
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <way.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{way.title}</CardTitle>
                <CardDescription className="text-sm">
                  {way.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant={way.variant} className="w-full" size="sm">
                  {way.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-primary-foreground/90 text-lg mb-4">
            Want to stay updated? Join our WhatsApp community for news and campaign updates.
          </p>
          <Button variant="outline" size="lg" className="border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20">
            Join WhatsApp Group
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;
