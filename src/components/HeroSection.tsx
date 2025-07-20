import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-ai-consulting.jpg";

export const HeroSection = () => {
  const scrollToLeadCapture = () => {
    const element = document.getElementById('lead-capture');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary/30 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="AI Consulting Workspace" 
          className="w-full h-full object-cover opacity-10"
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl">
        <div className="space-y-8 animate-fade-in">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Your{" "}
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              AI-Powered
            </span>{" "}
            Consulting Copilot
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Describe your business and problem in 5 minutes — our AI consultant will guide you to the right solution. 
            <span className="text-foreground font-medium"> Transparent, affordable, tailored.</span>
          </p>
          
          {/* CTA Button */}
          <div className="pt-6">
            <Button 
              size="lg" 
              variant="cta" 
              className="text-lg px-8 py-6 h-auto"
              onClick={scrollToLeadCapture}
            >
              Join Our Wait List and Get Your Free Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="pt-12 text-sm text-muted-foreground">
            <p>✓ No expensive consultants needed &nbsp;&nbsp;•&nbsp;&nbsp; ✓ No in-house AI team required &nbsp;&nbsp;•&nbsp;&nbsp; ✓ Transparent pricing</p>
          </div>
        </div>
      </div>
      
      {/* Subtle geometric background */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-accent blur-3xl"></div>
      </div>
    </section>
  );
};