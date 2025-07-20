import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

export const FounderSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Built by Consultants, Founders, and Engineers{" "}
            <span className="text-primary">Who've Been in Your Shoes</span>
          </h2>
        </div>

        {/* Founders Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Elaine Zhang */}
            <Card className="p-6 text-center bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-300">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-primary-foreground">EZ</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Elaine Zhang</h3>
              <p className="text-sm text-primary font-medium">
                MIT Sloan MBA, Business Consultant, Founder
              </p>
            </Card>

            {/* Yan Si */}
            <Card className="p-6 text-center bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-300">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-primary-foreground">YS</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Yan Si</h3>
              <p className="text-sm text-primary font-medium">
                BU PhD, AI Expert, Founder
              </p>
            </Card>

            {/* Jordan Tian */}
            <Card className="p-6 text-center bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-300">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-primary-foreground">JT</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Jordan Tian</h3>
              <p className="text-sm text-primary font-medium">
                Harvard MS, AI Expert, Founder
              </p>
            </Card>
          </div>

          {/* Quote Section */}
          <Card className="p-8 bg-gradient-card border-primary/20">
            <div className="text-center">
              <Quote className="h-8 w-8 text-primary/40 mx-auto mb-4" />
              <blockquote className="text-xl md:text-2xl italic text-muted-foreground leading-relaxed">
                "We bring the clarity of consulting with the speed of AI – at a price SMBs can afford."
              </blockquote>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};