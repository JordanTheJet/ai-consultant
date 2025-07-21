import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-ai-consulting.jpg";
import Link from "next/link";

export const HeroSection = () => {
  const scrollToLeadCapture = () => {
    const element = document.getElementById("lead-capture");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="AI Consulting Workspace"
          className="w-full h-full object-cover opacity-10"
        />
      </div>

      {/* Top Left Brand Name */}
      <div className="absolute top-6 left-6 z-20">
        <Link href="/" className="text-2xl font-bold text-primary hover:opacity-80 transition">
          AIcove
        </Link>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl">
        <div className="space-y-8 animate-fade-in">
          {/* Main Headline */}
          <h1 className="text-6xl md:text-8xl font-bold leading-tight mb-6">
            <span className="bg-gradient-text bg-clip-text text-transparent">
              BUILD THE IMPOSSIBLE
            </span>
          </h1>

          {/* Subheadline */}
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-foreground">
            Your Full-Stack Engineer and Consultant
          </h2>

          {/* Supporting Text */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
            If you want to start your business, but don't want to hire a full-time engineer and consultant, we're here to help.
            Describe your business and problem in 5 minutes — our AI consultant will guide you to the right solution.
            <span className="text-foreground font-medium"> Transparent, affordable, tailored.</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button
              size="lg"
              variant="glow"
              className="text-lg px-8 py-6 h-auto"
              onClick={scrollToLeadCapture}
            >
              Start Building Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="glow-outline"
              className="text-lg px-8 py-6 h-auto"
            >
              See How It Works
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="pt-12 text-sm text-muted-foreground">
            <p>
              ✓ No expensive consultants needed &nbsp;&nbsp;•&nbsp;&nbsp; ✓ No in-house AI team required &nbsp;&nbsp;•&nbsp;&nbsp; ✓ Transparent pricing
            </p>
          </div>
        </div>
      </div>

      {/* Glowing orbs background */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/30 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-primary-glow/20 blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full bg-accent/20 blur-3xl animate-pulse delay-500"></div>
      </div>
    </section>
  );
};
