import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

export const FounderSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Built by Consultants, Founders, and Engineers{" "}
            <span className="text-primary">Who've Been in Your Shoes</span>
          </h2>
        </div>

        {/* Founder Card */}
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 bg-gradient-to-br from-card to-secondary/30 border-primary/10 shadow-[var(--shadow-elegant)]">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Avatar Placeholder */}
              <div className="flex-shrink-0">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center">
                  <span className="text-3xl font-bold text-primary-foreground">EZ</span>
                </div>
              </div>
              
              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold mb-2">Elaine Zhang</h3>
                <p className="text-primary font-medium mb-6">
                  MIT Sloan & Harvard Law, Strategic Finance + AI Advisor
                </p>
                
                {/* Quote */}
                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 h-8 w-8 text-primary/20" />
                  <blockquote className="text-lg md:text-xl italic text-muted-foreground leading-relaxed pl-6">
                    "We bring the clarity of consulting with the speed of AI – at a price SMBs can afford."
                  </blockquote>
                </div>
              </div>
            </div>
            
            {/* Additional Context */}
            <div className="mt-8 pt-8 border-t border-primary/10">
              <p className="text-center text-muted-foreground">
                Having worked with dozens of SMBs struggling with expensive consultants and complex AI implementations, 
                I built this platform to democratize access to strategic automation guidance.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};