import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Send } from "lucide-react";

export const LeadCaptureSection = () => {
  return (
    <section id="lead-capture" className="py-24 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Build Your AI Automation Strategy —{" "}
            <span className="text-primary">Together</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Share your challenge and we'll show you exactly how AI can transform your workflows.
          </p>
        </div>

        {/* Lead Capture Form */}
        <div className="max-w-2xl mx-auto">
          <Card className="p-8 md:p-12 bg-gradient-card border-primary/20 shadow-card">
            <form
              action="https://formspree.io/f/xeozerwz" 
              method="POST"
              className="space-y-6"
            >
              {/* Business Name */}
              <div>
                <label htmlFor="businessName" className="block text-sm font-medium mb-2">
                  Business Name
                </label>
                <Input
                  id="businessName"
                  name="Business Name"
                  placeholder="Your company name"
                  required
                  className="h-12"
                />
              </div>

              {/* Problem Description */}
              <div>
                <label htmlFor="problemDescription" className="block text-sm font-medium mb-2">
                  Describe Your Problem or Use Case
                </label>
                <Textarea
                  id="problemDescription"
                  name="Use Case"
                  placeholder="Tell us about the workflow you want to automate, the challenges you're facing, or the business process that needs optimization..."
                  required
                  className="min-h-32 resize-none"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="Email"
                  type="email"
                  placeholder="your@email.com"
                  required
                  className="h-12"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                variant="glow"
                className="w-full h-14 text-lg"
              >
                Describe Your Use Case
                <Send className="ml-2 h-5 w-5" />
              </Button>

              {/* Privacy Note */}
              <p className="text-xs text-muted-foreground text-center">
                We respect your privacy. Your information will only be used to provide you with a customized automation strategy.
              </p>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};
