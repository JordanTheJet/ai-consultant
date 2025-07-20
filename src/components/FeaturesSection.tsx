import { Card } from "@/components/ui/card";
import { Target, Eye, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Tailored Strategy",
    description: "Strategy, automation, and tool recommendations. We guide like consultants, not just build."
  },
  {
    icon: Eye,
    title: "Transparent Process",
    description: "Know every step and cost upfront. No hidden fees, no surprises."
  },
  {
    icon: TrendingUp,
    title: "High ROI",
    description: "Save cost on engineers and consultants while accelerating execution."
  }
];

export const FeaturesSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Workflow Automation With{" "}
            <span className="text-primary">Consulting Logic</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get the strategic guidance of top consultants combined with the speed and efficiency of AI automation.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-8 text-center hover:shadow-[var(--shadow-card)] transition-all duration-300 hover:scale-[1.02] bg-gradient-to-br from-card to-card/50 border-primary/10"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};