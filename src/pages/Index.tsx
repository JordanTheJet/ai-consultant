import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { FounderSection } from "@/components/FounderSection";
import { LeadCaptureSection } from "@/components/LeadCaptureSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <FounderSection />
      <LeadCaptureSection />
    </div>
  );
};

export default Index;
