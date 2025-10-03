import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";

const News = () => {
  const newsItems = [
    {
      date: "January 15, 2025",
      title: "NFP Launches 2025 Election Campaign",
      excerpt: "Party leader announces comprehensive platform focused on economic reform, healthcare access, and education for all Fijians.",
      category: "Campaign",
    },
    {
      date: "January 10, 2025",
      title: "Town Hall Series Begins Across All Constituencies",
      excerpt: "NFP candidates to meet voters in 50+ community meetings. First stop: Ba constituency this weekend.",
      category: "Events",
    },
    {
      date: "January 5, 2025",
      title: "New Youth Employment Initiative Unveiled",
      excerpt: "Detailed plan to create 10,000 jobs for young Fijians through skills training and small business support.",
      category: "Policy",
    },
    {
      date: "December 20, 2024",
      title: "NFP Calls for Electoral Reforms",
      excerpt: "Party submits proposals to strengthen democracy and ensure transparent, fair elections in 2025.",
      category: "Governance",
    },
  ];

  return (
    <section id="news" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-3xl font-bold text-foreground mb-4 md:text-4xl">
            Latest News & Updates
          </h2>
          <p className="text-lg text-muted-foreground">
            Stay informed about our campaign, policy announcements, and community events.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 mb-12 animate-slide-up">
          {newsItems.map((item, index) => (
            <Card key={index} className="shadow-card hover:shadow-hover transition-shadow cursor-pointer group">
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="h-4 w-4" />
                  <span>{item.date}</span>
                  <span className="ml-auto px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                    {item.category}
                  </span>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {item.title}
                </CardTitle>
                <CardDescription>{item.excerpt}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" className="group/btn p-0 h-auto hover:bg-transparent">
                  Read more
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="hero" size="lg">
            View All News
          </Button>
        </div>
      </div>
    </section>
  );
};

export default News;
