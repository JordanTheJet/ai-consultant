import { Card } from "@/components/ui/card";
import { MessageSquare, Brain, Play, Cog } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Tell us your business and problem",
    description: "3–5 min input through our guided questionnaire"
  },
  {
    number: "02",
    icon: Brain,
    title: "Our AI asks clarifying questions",
    description: "AI consultant analyzes your needs and proposes a tailored plan"
  },
  {
    number: "03",
    icon: Play,
    title: "You get a demo and transparent quote",
    description: "See exactly what we'll build and how much it costs"
  },
  {
    number: "04",
    icon: Cog,
    title: "We build and refine your solution",
    description: "3–5 micro-adjustments included to perfect your automation"
  }
];

export const HowItWorksSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            From Idea to Automation in{" "}
            <span className="text-accent">4 Simple Steps</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our streamlined process gets you from concept to working automation faster than traditional consulting.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-primary/60 to-transparent z-0" />
              )}
              
              <Card className="relative z-10 p-6 text-center hover:shadow-card transition-all duration-300 bg-gradient-card border-primary/20 hover:border-primary/40">
                {/* Step Number */}
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-lg mb-4">
                  {step.number}
                </div>
                
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                  <step.icon className="h-7 w-7 text-primary" />
                </div>
                
                {/* Content */}
                <h3 className="text-lg font-semibold mb-3 leading-tight">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};